import fs from 'fs';
import path from 'path';

const PRODUCTS_PATH = path.join(process.cwd(), 'src/data/products.ts');
const SCRAPED_DATA_PATH = path.join(process.cwd(), 'scraped_content_final.json');

const productsTs = fs.readFileSync(PRODUCTS_PATH, 'utf8');
const scraped = JSON.parse(fs.readFileSync(SCRAPED_DATA_PATH, 'utf8'));

const productRegex = /name:\s*"([^"]+)"[\s\S]+?descriptionHtml:\s*`([^`]*)`/g;

let total = 0;
let missing = 0;
let missingNames = [];

let match;
while ((match = productRegex.exec(productsTs)) !== null) {
    total++;
    const name = match[1];
    const desc = match[2];
    if (desc.includes('ruošiamas') || desc.trim() === '') {
        missing++;
        missingNames.push(name);
    }
}

console.log(`Total Products in DB: ${total}`);
console.log(`Missing Descriptions: ${missing}`);

console.log('\nSample of missing products (first 10):');
missingNames.slice(0, 10).forEach(n => console.log('- ' + n));

console.log('\nMatching against scraped data (first 5 missing):');
missingNames.slice(0, 5).forEach(mName => {
    console.log(`\nLooking for: ${mName}`);
    // Try to find closest matches in scraped
    const words = mName.toLowerCase().split(' ').filter(w => w.length > 3);
    const matches = scraped.filter(s => {
        let matchCount = 0;
        words.forEach(w => {
            if (s.name.toLowerCase().includes(w)) matchCount++;
        });
        return matchCount >= 2; // At least 2 words match
    });
    console.log(`Found ${matches.length} loose matches.`);
    matches.forEach(m => console.log(`  -> ${m.name}`));
});
