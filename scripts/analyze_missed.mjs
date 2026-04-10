import fs from 'fs';

const originalMissing = JSON.parse(fs.readFileSync('missing_products.json', 'utf8'));
const successfulScrape = JSON.parse(fs.readFileSync('enriched_missing_final.json', 'utf8'));

const successIds = new Set(successfulScrape.map(s => s.id));
const stillMissing = originalMissing.filter(p => !successIds.has(p.id));

console.log('Still missing:', stillMissing.length);
console.log(JSON.stringify(stillMissing, null, 2));
