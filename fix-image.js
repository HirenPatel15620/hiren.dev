import { Jimp, rgbaToInt, intToRGBA } from 'jimp';

Jimp.read('public/images/hero-profile.jpg')
  .then(img => {
    let w = img.bitmap.width;
    let h = img.bitmap.height;
    
    let count = 0;
    
    for(let y=0; y<h; y++) {
      for(let x=0; x<w; x++) {
        let hex = img.getPixelColor(x, y);
        let rgba = intToRGBA(hex);
        
        // Very white and fully opaque
        if (rgba.r > 200 && rgba.g > 200 && rgba.b > 200 && rgba.a > 200) {
          // Check if it's near the top (hair)
          if (y < h / 3 && y > 10 && x > 10 && x < w - 10) {
            // Dark brown color (e.g., #2c2522)
            img.setPixelColor(rgbaToInt(44, 37, 34, rgba.a), x, y);
            count++;
          }
        }
      }
    }
    
    console.log(`Replaced ${count} white pixels in the hair area for jpg.`);
    return img.write('public/images/hero-profile.jpg');
  })
  .catch(console.error);
