
import fs from 'fs';
import path from 'path';

const baseDir = 'c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu';
const cleanPrefixPath = path.join(baseDir, 'src/data/products_prefix_CLEAN.txt');
const missingProductsPath = path.join(baseDir, 'missing_products.json');
const descriptions1Path = path.join(baseDir, 'final_scraped_descriptions.json');
const descriptions2Path = path.join(baseDir, 'enriched_missing_final.json');
const outputPath = path.join(baseDir, 'src/data/products.ts');

const cleanPrefix = fs.readFileSync(cleanPrefixPath, 'utf8');
const missingProducts = JSON.parse(fs.readFileSync(missingProductsPath, 'utf8'));
const descriptions1 = JSON.parse(fs.readFileSync(descriptions1Path, 'utf8'));
const descriptions2 = JSON.parse(fs.readFileSync(descriptions2Path, 'utf8'));

function findDescription(id) {
    if (descriptions1[id]) {
        return {
            short: (descriptions1[id].shortDescription || '').replace(/`/g, '\\`'),
            full: (descriptions1[id].descriptionHtml || '').replace(/`/g, '\\`')
        };
    }
    const item2 = descriptions2.find(p => p.id === id);
    if (item2) {
        return {
            short: (item2.shortDesc || '').replace(/`/g, '\\`'),
            full: (item2.fullDesc || '').replace(/`/g, '\\`')
        };
    }
    return { short: '', full: '' };
}

// 1. Prepare Prefix
// Remove the trailing array close and any trailing commas
let finalContent = cleanPrefix.trim();
// Find the last product block end and remove everything after it inside the array section
const lastBraceIndex = finalContent.lastIndexOf('}');
if (lastBraceIndex !== -1) {
    // Cut off everything after the last closing brace of the last product in prefix
    finalContent = finalContent.substring(0, lastBraceIndex + 1);
}

// 2. Prepare New Products
const addedIds = new Set();
const prefixIdsMatches = cleanPrefix.match(/id:\s*"([^"]+)"/g) || [];
prefixIdsMatches.forEach(match => {
    const id = match.split('"')[1];
    addedIds.add(id);
});

const newProductBlocks = [];
missingProducts.forEach(p => {
    if (addedIds.has(p.id)) return;
    
    const desc = findDescription(p.id);
    
    const block = `  {
    id: "${p.id}",
    name: "${p.name}",
    shortDescription: \`${desc.short}\`,
    descriptionHtml: \`${desc.full}\`,
    brand: "${p.brand}",
    category: "${p.category}",
    tags: ${JSON.stringify(p.tags)},
    price: ${p.price},
    oldPrice: ${p.oldPrice},
    image: "${p.image}"${p.featured ? ',\n    featured: true' : ''}
  }`;
    
    newProductBlocks.push(block);
    addedIds.add(p.id);
});

// 3. Combine with Exactly one comma between blocks
let finalOutput = finalContent;
if (newProductBlocks.length > 0) {
    finalOutput += ',\n' + newProductBlocks.join(',\n');
}

// 4. Add Suffix
finalOutput += `
];

export const categoryLabels: Record<string, string> = {
  "visi": "Visi produktai",
  "veido-serumai": "Veido serumai",
  "veido-kremai": "Veido kremai",
  "spf-apsauga": "SPF apsauga",
  "veido-kaukes": "Veido kaukės",
  "valymas-ir-tonizavimas": "Valymas ir tonizavimas",
  "veido-fluidas": "Veido fluidai",
  "rinkiniai": "Rinkiniai",
  "papildymai": "Papildai ir priedai",
  "makiazas": "Makiažas",
  "produktai-kunui": "Produktai kūnui",
  "mini-dydziai": "Mini produktai"
};

export const brandList = ["NOON", "Reviderm", "Pepplus+", "OxygenCeuticals", "CUSKIN", "Cell Fusion C"];
`;

// 5. Final Write
fs.writeFileSync(outputPath, finalOutput, 'utf8');
console.log('Final Master Reconstruction (v5) complete.');
console.log(`Total Products: ${addedIds.size}`);
console.log('Fixed double commas and updated brand/category lists.');
