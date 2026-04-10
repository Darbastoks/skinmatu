import fs from 'fs';
import path from 'path';

const productsPath = path.join(process.cwd(), 'src', 'data', 'products.ts');
const scrapedPath = path.join(process.cwd(), 'scraped_descriptions.json');

const scrapedData = JSON.parse(fs.readFileSync(scrapedPath, 'utf8'));
let productsTs = fs.readFileSync(productsPath, 'utf8');

const nameRegex = /name:\s*["']([^"']+)["']/g;
let match;
let matchCount = 0;
let missedCount = 0;

const norm = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

for (const scItem of scrapedData) {
  scItem.normName = norm(scItem.originalName || scItem.name);
}

let resultParts = [];
let lastIndex = 0;

while ((match = nameRegex.exec(productsTs)) !== null) {
  const originalName = match[1];
  const normOriginal = norm(originalName);
  
  const bestMatch = scrapedData.find(s => s.normName === normOriginal);
  
  if (bestMatch) {
    matchCount++;
    const cleanDesc = (bestMatch.descriptionHtml || '').replace(/`/g, '\\`').replace(/\$/g, '&#36;');
    const cleanShortDesc = (bestMatch.shortDescription || '').replace(/`/g, '\\`').replace(/\$/g, '&#36;');
    
    resultParts.push(productsTs.substring(lastIndex, match.index + match[0].length));
    resultParts.push(`\n    shortDescription: \`${cleanShortDesc}\`,\n    descriptionHtml: \`${cleanDesc}\`,`);
    lastIndex = match.index + match[0].length;
  } else {
    missedCount++;
  }
}

resultParts.push(productsTs.substring(lastIndex));
const newProductsTs = resultParts.join('');

fs.writeFileSync(productsPath, newProductsTs);
console.log(`Merged ${matchCount} descriptions. Missed ${missedCount}. Data saved to products.ts`);
