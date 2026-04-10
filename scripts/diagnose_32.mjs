
import fs from 'fs';

const missingProducts = JSON.parse(fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/missing_products.json', 'utf8'));
const final13 = JSON.parse(fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/final_scraped_descriptions.json', 'utf8'));
const enrichedFinal = JSON.parse(fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/enriched_missing_final.json', 'utf8'));

// Convert enrichedFinal to map
const enrichedMap = {};
enrichedFinal.forEach(item => {
    enrichedMap[item.id] = item;
});

console.log('--- Diagnosis of 32 products ---');

missingProducts.forEach(mp => {
    const id = mp.id;
    let source = '-';
    let desc = '-';
    let status = 'MISSING';

    if (final13[id]) {
        source = 'final_scraped_descriptions.json';
        desc = final13[id].descriptionHtml;
        status = 'FOUND (NEW)';
    } else if (enrichedMap[id]) {
        source = 'enriched_missing_final.json';
        desc = enrichedMap[id].fullDesc;
        status = 'FOUND (OLD)';
    }

    if (status !== 'MISSING') {
        const isWrong = desc.includes('Bioline') || desc.includes('Mesotech') || desc.includes('Dermaceutic') || desc.includes('Innoaesthetics');
        const matchesBrand = desc.toLowerCase().includes(mp.brand.toLowerCase());
        
        if (isWrong && !matchesBrand) {
            status += ' [!! WRONG DATA !!]';
        } else if (!matchesBrand) {
            status += ' [? BRAND MISMATCH ?]';
        }
    }

    console.log(`${id} | ${status} | ${source}`);
});
