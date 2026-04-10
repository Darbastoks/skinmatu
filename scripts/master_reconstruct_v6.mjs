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

const REPLACEMENT_MAP = {
    'â„¢': '™',
    'Â®': '®',
    'â€¢': '•',
    'â€“': '–',
    'â€”': '—',
    'â€˜': '‘',
    'â€™': '’',
    'â€œ': '“',
    'â€ ': '”',
    'â€¡': '‡',
    'Â ': ' ',
    'ï¸ âƒ£': '.', 
    'âƒ£': '.',
    'ï¸ ': '',
    'Â': '',
    'Ä…': 'ą', 'ÄŒ': 'Č', 'Ä ': 'č', 'Ä™': 'ę', 'Ä—': 'ė', 'Ä¯': 'į', 'Å¡': 'š', 'Å³': 'ų', 'Å«': 'ū', 'Å¾': 'ž',
    'Ä„': 'Ą', 'Ä˜': 'Ę', 'Ä–': 'Ė', 'Ä®': 'Į', 'Å ': 'Š', 'Å²': 'Ų', 'Åª': 'Ū', 'Å½': 'Ž',
};

function sanitize(text) {
    if (!text) return text;
    let s = text;
    
    // Explicitly strip the UTF-8 bytes for U+FE0F and U+20E3 (the emoji components)
    // These often appear as ï¸ and âƒ£ in Mojibake.
    s = s.replace(/\xef\xb8\x8f/g, ''); 
    s = s.replace(/\xe2\x83\xa3/g, '');
    s = s.replace(/\ufe0f/g, '');
    s = s.replace(/\x8f/g, '');
    s = s.replace(/\xef/g, '');
    s = s.replace(/\xb8/g, '');

    for (const [corrupted, clean] of Object.entries(REPLACEMENT_MAP)) {
        s = s.split(corrupted).join(clean);
    }
    
    // Targeted fix for the numbered lists: Only if junk was attached
    s = s.replace(/(\d)[ï¸âƒ£\s\.]+/g, '$1. '); 
    
    // Nuclear: Strip everything that isn't ASCII, Lithuanian, or common symbols
    s = s.replace(/[^\x00-\x7FąčęėįšųūžĄČĘĖĮŠŲŪŽ™®•–—]/g, '');

    // Final cleanup of any double-dots or spaces we might have created
    s = s.replace(/(\d)\.\. /g, '$1. ');
    s = s.replace(/(\d)\. \./g, '$1. ');
    s = s.replace(/\s\s+/g, ' '); // Remove double spaces

    return s.trim();
}

function findDescription(id) {
    let rawShort = '';
    let rawFull = '';

    if (descriptions1[id]) {
        rawShort = descriptions1[id].shortDescription || '';
        rawFull = descriptions1[id].descriptionHtml || '';
    } else {
        const item2 = descriptions2.find(p => p.id === id);
        if (item2) {
            rawShort = item2.shortDesc || '';
            rawFull = item2.fullDesc || '';
        }
    }

    // Sanitize the text fields specifically
    return {
        short: sanitize(rawShort).replace(/`/g, '\\`'),
        full: sanitize(rawFull).replace(/`/g, '\\`')
    };
}

// 1. Prepare Prefix (Surgical sanitization of text fields only)
let finalContent = cleanPrefix.trim();
const lastBraceIndex = finalContent.lastIndexOf('}');
if (lastBraceIndex !== -1) {
    finalContent = finalContent.substring(0, lastBraceIndex + 1);
}

// Sanitize name, shortDescription, and descriptionHtml fields in the prefix
finalContent = finalContent.replace(/(name|shortDescription|descriptionHtml):\s*["`](.*?)["`]/gs, (match, field, content) => {
    return `${field}: \`${sanitize(content)}\``;
});

// 2. Prepare New Products
const addedIds = new Set();
// Extract IDs from prefix to avoid duplicates
const prefixIdsMatches = finalContent.match(/id:\s*"([^"]+)"/g) || [];
prefixIdsMatches.forEach(match => {
    const id = match.split('"')[1];
    addedIds.add(id);
});

const newProductBlocks = [];
missingProducts.forEach(p => {
    if (addedIds.has(p.id)) return;
    
    const desc = findDescription(p.id);
    
    // Fallback brand/category if missing
    const brand = p.brand || "SkinMatu";
    const category = p.category || "visi";
    
    const block = `  {
    id: "${p.id}",
    name: "${sanitize(p.name)}",
    shortDescription: \`${desc.short}\`,
    descriptionHtml: \`${desc.full}\`,
    brand: "${brand}",
    category: "${category}",
    tags: ${JSON.stringify(p.tags)},
    price: ${p.price},
    oldPrice: ${p.oldPrice},
    image: "${p.image}"${p.featured ? ',\n    featured: true' : ''}
  }`;
    
    newProductBlocks.push(block);
    addedIds.add(p.id);
});

// 3. Combine
let finalOutput = `import { Product } from "@/types";

export const products: Product[] = [
` + finalContent.replace(/^import.*?\n/gs, '').replace(/export const products: Product\[\] = \[/gs, '').trim();

if (newProductBlocks.length > 0) {
    if (!finalOutput.trim().endsWith(',')) finalOutput += ',';
    finalOutput += '\n' + newProductBlocks.join(',\n');
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
console.log('Final Master Reconstruction (v6) complete.');
console.log(`Total Products: ${addedIds.size}`);
console.log('All descriptions and names SANITIZED to remove Mojibake.');
