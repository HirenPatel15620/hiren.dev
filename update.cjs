const fs = require('fs');
const files = ['About.tsx', 'Skills.tsx', 'Experience.tsx', 'Projects.tsx', 'Portfolio.tsx', 'Contact.tsx'];
files.forEach(f => {
  const path = 'src/components/' + f;
  let c = fs.readFileSync(path, 'utf8');
  c = c.replace(/scrollTrigger: \{/g, "scrollTrigger: { toggleActions: 'play reverse play reverse',");
  fs.writeFileSync(path, c);
});
console.log('Done!');
