
import fs from 'fs';
import path from 'path';

const productsPath = 'c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/src/data/products.ts';
let productsContent = fs.readFileSync(productsPath, 'utf8');

const missingProducts = JSON.parse(fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/missing_products.json', 'utf8'));
const final13 = JSON.parse(fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/final_scraped_descriptions.json', 'utf8'));
const batch1Raw = JSON.parse(fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/scraped_descriptions.json', 'utf8'));

// Convert batch1Raw to a map indexed by name for easier lookup
const batch1Map = {};
batch1Raw.forEach(item => {
    if (item.descriptionHtml && item.descriptionHtml.length > 10) {
        batch1Map[item.originalName] = item;
    }
});

console.log(`Reconstructing ${missingProducts.length} products...`);

let fixedCount = 0;

// Sort missing products by their position in the file (descending) to avoid index shift issues if we use string manipulation
// But we'll use a more robust replacement strategy.

missingProducts.forEach(mp => {
    const id = mp.id;
    const name = mp.name;
    
    // Find the description
    let descData = null;
    if (final13[id]) {
        descData = final13[id];
    } else if (batch1Map[name]) {
        descData = batch1Map[name];
    }
    
    if (!descData) {
        console.log(`[WARN] No description found for ${id} (${name})`);
        return;
    }

    // Find the current block in products.ts
    // We search for id: "id"
    const idPattern = new RegExp(`id:\\s*"${id}"`, 'g');
    const match = idPattern.exec(productsContent);
    if (!match) {
        console.log(`[WARN] Product ${id} not found in products.ts`);
        return;
    }
    
    const startIdx = match.index;
    
    // Find the end of the object (looking for the next } at the start of a line or followed by a comma and newline)
    // Actually, let's find the closing brace that matches the opening brace.
    // Since we know the structure is { ... }, we look for the next }, that is preceded by a newline and spaces.
    let endIdx = productsContent.indexOf('\n  },', startIdx);
    if (endIdx === -1) endIdx = productsContent.indexOf('\n  }', startIdx);
    if (endIdx === -1) {
        console.log(`[ERRO] Could not find end of object for ${id}`);
        return;
    }
    endIdx += 1; // Include the closing brace
    
    // Get the base product info (excluding the corrupted fields)
    // We'll keep the non-corrupted fields from the original missing_products.json or reconstruct from the file if possible.
    // The most reliable is to reconstruct a clean block.
    
    const cleanBlock = `  {
    id: "${id}",
    name: "${mp.name}",
    shortDescription: \`${descData.shortDescription || mp.shortDescription || ""}\`,
    descriptionHtml: \`${descData.descriptionHtml}\`,
    brand: "${mp.brand}",
    category: "${mp.category}",
    tags: ${JSON.stringify(mp.tags)},
    price: ${mp.price.toFixed(2)},
    oldPrice: ${mp.oldPrice.toFixed(2)},
    image: "${mp.image}"${mp.featured ? ',\n    featured: true' : ''}
  }`;

    // Replace the block. Since we are doing this in a loop, we need to be careful with indices.
    // We'll collect all replacements and do them at once, or use a more clever approach.
    // For now, let's just use string replace on the full content but be careful about matches.
    
    // To be safe, we'll find the exact text we want to replace
    // The match.index is the start of the `id:` line. We want to go back to the opening `{`.
    let startOfObject = productsContent.lastIndexOf('{', startIdx);
    
    const oldBlock = productsContent.substring(startOfObject, endIdx + 1);
    
    productsContent = productsContent.substring(0, startOfObject) + cleanBlock + productsContent.substring(endIdx + 2);
    fixedCount++;
});

console.log(`Fixed ${fixedCount} products.`);
fs.writeFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/src/data/products.ts.fixed', productsContent);
console.log('Results written to products.ts.fixed');
