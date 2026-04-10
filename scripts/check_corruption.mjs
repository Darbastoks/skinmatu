
import fs from 'fs';
import path from 'path';

const productsContent = fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/src/data/products.ts', 'utf8');

// The file is a TypeScript file exporting an array.
// We can't easily eval it without a lot of setup, so we'll use regex/string parsing to find the blocks.

const missingProducts = JSON.parse(fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/missing_products.json', 'utf8'));
const final13 = JSON.parse(fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/final_scraped_descriptions.json', 'utf8'));
const first19 = JSON.parse(fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/scraped_descriptions.json', 'utf8'));

console.log('--- Checking 32 products in products.ts ---');

missingProducts.forEach(mp => {
    const id = mp.id;
    const startIdx = productsContent.indexOf(`id: "${id}"`);
    if (startIdx === -1) {
        console.log(`[MISSING] ${id}`);
        return;
    }
    
    // Find the end of the object
    let endIdx = productsContent.indexOf('  },', startIdx);
    if (endIdx === -1) endIdx = productsContent.indexOf('  }', startIdx);
    
    const block = productsContent.substring(startIdx - 10, endIdx + 4);
    
    const hasDoubleComma = block.includes(',,');
    const hasDuplicateShortDesc = block.split('shortDescription:').length > 2;
    const hasDuplicateHtml = block.split('descriptionHtml:').length > 2;
    const hasMissingCommaAfterId = !productsContent.substring(startIdx + `id: "${id}"`.length).startsWith(',');
    
    if (hasDoubleComma || hasDuplicateShortDesc || hasDuplicateHtml || hasMissingCommaAfterId) {
        console.log(`[CORRUPTED] ${id}: DC:${hasDoubleComma} DSD:${hasDuplicateShortDesc} DH:${hasDuplicateHtml} MCI:${hasMissingCommaAfterId}`);
    } else {
        const hasDesc = block.includes('descriptionHtml:') && block.includes('`<h2>Aprašymas</h2>') || block.includes('`<div><h3>Aprašymas</h3>');
        console.log(`[OK] ${id} - Has Desc: ${hasDesc}`);
    }
});
