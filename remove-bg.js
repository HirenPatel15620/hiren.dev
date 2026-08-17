import { Jimp } from 'jimp';

async function removeBackground() {
  try {
    const image = await Jimp.read('public/images/avatar-white-bg.jpg');
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // Visited matrix to keep track of processed pixels
    const visited = new Uint8Array(width * height);
    const stack = [];
    
    const getIdx = (x, y) => (y * width + x) * 4;
    
    // Add all edges to stack to start the flood fill from the outside
    for(let x=0; x<width; x++) { 
      stack.push([x, 0]); 
      stack.push([x, height - 1]); 
    }
    for(let y=0; y<height; y++) { 
      stack.push([0, y]); 
      stack.push([width - 1, y]); 
    }

    const threshold = 230; // High tolerance for "white" background

    while(stack.length > 0) {
      const [x, y] = stack.pop();
      if (x < 0 || x >= width || y < 0 || y >= height) continue;
      
      const vIdx = y * width + x;
      if (visited[vIdx]) continue;
      visited[vIdx] = 1;
      
      const idx = getIdx(x, y);
      const r = image.bitmap.data[idx + 0];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      
      // If it is light enough to be considered white background
      if (r > threshold && g > threshold && b > threshold) {
        // Make it transparent
        image.bitmap.data[idx + 3] = 0;
        
        // Add neighbors to stack
        stack.push([x + 1, y]);
        stack.push([x - 1, y]);
        stack.push([x, y + 1]);
        stack.push([x, y - 1]);
      }
    }
    
    // Post-process to soften edges
    const newAlpha = new Uint8Array(width * height);
    for(let y=1; y<height-1; y++) {
      for(let x=1; x<width-1; x++) {
          let alphaSum = 0;
          let count = 0;
          for(let dy=-1; dy<=1; dy++) {
              for(let dx=-1; dx<=1; dx++) {
                  alphaSum += image.bitmap.data[getIdx(x+dx, y+dy) + 3];
                  count++;
              }
          }
          newAlpha[y*width+x] = alphaSum / count;
      }
    }
    for(let y=1; y<height-1; y++) {
      for(let x=1; x<width-1; x++) {
          image.bitmap.data[getIdx(x,y) + 3] = newAlpha[y*width+x];
      }
    }
    
    await image.write('public/images/hero-profile-transparent.png');
    console.log("Background removed successfully.");
  } catch (err) {
    console.error(err);
  }
}

removeBackground();
