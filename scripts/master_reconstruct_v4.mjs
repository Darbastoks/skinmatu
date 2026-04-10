
import fs from 'fs';
import path from 'path';

const baseDir = 'c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu';
const cleanPrefixPath = path.join(baseDir, 'src/data/products_prefix_CLEAN.txt');
const missingProductsPath = path.join(baseDir, 'missing_products.json');
const descriptions1Path = path.join(baseDir, 'final_scraped_descriptions.json');
const descriptions2Path = path.join(baseDir, 'enriched_missing_final.json');
const outputPath = path.join(baseDir, 'src/data/products.ts');

/**
 * 1. Load Data Sources
 */
const cleanPrefix = fs.readFileSync(cleanPrefixPath, 'utf8');
const missingProducts = JSON.parse(fs.readFileSync(missingProductsPath, 'utf8'));
const descriptions1 = JSON.parse(fs.readFileSync(descriptions1Path, 'utf8'));
const descriptions2 = JSON.parse(fs.readFileSync(descriptions2Path, 'utf8'));

/**
 * 2. Helper to find description for a product ID
 */
function findDescription(id) {
    // Check descriptions1 (final_scraped_descriptions.json)
    if (descriptions1[id]) {
        return {
            short: descriptions1[id].shortDescription || '',
            full: descriptions1[id].descriptionHtml || ''
        };
    }
    // Check descriptions2 (enriched_missing_final.json)
    const item2 = descriptions2.find(p => p.id === id);
    if (item2) {
        return {
            short: item2.shortDesc || '',
            full: item2.fullDesc || ''
        };
    }
    return { short: '', full: '' };
}

/**
 * 3. Prepare the New Products Section
 */
let newProductsSection = '';
const addedIds = new Set();

// Extract IDs already in prefix to avoid duplicates
const prefixIds = cleanPrefix.match(/id:\s*"([^"]+)"/g) || [];
prefixIds.forEach(match => {
    const id = match.split('"')[1];
    addedIds.add(id);
});

missingProducts.forEach(p => {
    if (addedIds.has(p.id)) return;
    
    const desc = findDescription(p.id);
    
    // Clean up HTML artifact "Aprašymas" if it appears redundant
    let fullHtml = desc.full;
    if (fullHtml.includes('<h2>Aprašymas</h2>') && fullHtml.startsWith('<h2>Aprašymas</h2>')) {
        // Keep it for consistency if that's the style, but ensure correct Lithuanian
    }

    newProductsSection += `  ,\n  {\n    id: "${p.id}",\n    name: "${p.name}",\n    shortDescription: \`${desc.short}\`,\n    descriptionHtml: \`${fullHtml}\`,\n    brand: "${p.brand}",\n    category: "${p.category}",\n    tags: ${JSON.stringify(p.tags)},\n    price: ${p.price},\n    oldPrice: ${p.oldPrice},\n    image: "${p.image}"${p.featured ? ',\n    featured: true' : ''}\n  }`;
    
    addedIds.add(p.id);
});

/**
 * 4. Assemble Final File
 */
let finalContent = cleanPrefix.trim();

// Remove the closing bracket of the initial array if present
finalContent = finalContent.replace(/\s*\];\s*$/, '');

finalContent += newProductsSection;

finalContent += `
];

export const categoryLabels: Record<string, string> = {
  "visi": "Visi produktai",
  "veido-serumai": "Veido serumai",
  "veido-kremai": "Veido kremai",
  "valymas-ir-tonizavimas": "Valymas ir tonizavimas",
  "veido-kaukes": "Veido kaukės",
  "produktai-kunui": "Produktai kūnui",
  "rinkiniai": "Rinkiniai",
  "papildymai": "Papildai ir priedai",
  "veido-fluidas": "Veido fluidai",
  "mini-dydziai": "Mini produktai"
};

export const brandList = ["NOON", "Reviderm"];
`;

// 5. Write and Verify
fs.writeFileSync(outputPath, finalContent, 'utf8');
console.log('Final Master Reconstruction complete.');
console.log(`Total Products Restored: ${addedIds.size}`);
console.log('Output file: src/data/products.ts');
