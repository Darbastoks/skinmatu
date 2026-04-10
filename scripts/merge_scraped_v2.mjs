import fs from 'fs';
import path from 'path';

const PRODUCTS_PATH = path.join(process.cwd(), 'src/data/products.ts');
const SCRAPED_DATA_PATH = path.join(process.cwd(), 'scraped_content_final.json');

// Manual data for Noon Aesthetics (since they are password protected)
const MANUAL_DATA = [
    {
        name: "Noon Vit C Serum 11S",
        shortDescription: "Stabilizuoto vitamino C (11%) serumas su galingu antioksidaciniu poveikiu.",
        descriptionHtml: `<p>Stabilizuoto vitamino C (11%) serumas su galingu antioksidaciniu poveikiu. Skirtas odos skaistinimui, tonuso gerinimui ir apsaugai nuo aplinkos žalos (oksidacinio streso). Idealiai tinka papilkėjusiai, pavargusiai ar jautriai odai.</p>
        <p><strong>Naudojimas:</strong> Naudokite 1–2 kartus per dieną ant švarios veido odos, ryte ir/ar vakare. Rekomenduojama ryte kartu naudoti apsaugą nuo saulės (SPF 30+).</p>`
    },
    {
        name: "Noon Retinol 03%",
        shortDescription: "Koncentruotas retinolio (0,3%) serumas odos atjauninimui.",
        descriptionHtml: `<p>Koncentruotas retinolio (0,3%) serumas, skirtas odos atjauninimui, tekstūros lyginimui ir smulkių raukšlelių mažinimui. Skatina odos regeneraciją ir gerina elastingumą.</p>
        <p><strong>Naudojimas:</strong> Pradėkite naudoti palaipsniui (1–2 kartus per savaitę vakare), kol oda pripras. Būtina naudoti aukštą SPF apsaugą dienos metu, nes retinolis didina jautrumą UV spinduliams.</p>`
    }
];

function normalize(str) {
    if (!str) return '';
    // Remove brands, special quotes, spaces, and punctuation for matching
    return str.toLowerCase()
        .replace(/reviderm|cuskin|pepplus|noon|cell fusion c|„|“|”|"/gi, '')
        .replace(/[^a-z0-9]/g, '');
}

function escapeBackticks(str) {
    if (!str) return '';
    return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function mergeData() {
    if (!fs.existsSync(SCRAPED_DATA_PATH)) {
         console.error('scraped_content_final.json not found!');
         return;
    }

    const scraped = JSON.parse(fs.readFileSync(SCRAPED_DATA_PATH, 'utf8'));
    const allScraped = [...scraped, ...MANUAL_DATA];
    
    let productsTs = fs.readFileSync(PRODUCTS_PATH, 'utf8');

    console.log(`Merging ${allScraped.length} descriptions...`);

    let updatedCount = 0;
    let missedNames = [];

    // Match each { ... } object literal in the list
    const productRegex = /({[\s\S]+?})[,]/g;
    
    productsTs = productsTs.replace(productRegex, (match, block) => {
        // Extract the name property from the block
        const nameMatch = block.match(/name:\s*"([^"]+)"/);
        if (!nameMatch) return match;
        
        const internalName = nameMatch[1];
        const normInternal = normalize(internalName);
        
        const found = allScraped.find(s => {
            const normScraped = normalize(s.name);
            return normInternal && normScraped && (normInternal.includes(normScraped) || normScraped.includes(normInternal));
        });
        
        if (found && found.descriptionHtml && found.descriptionHtml.length > 50) {
            updatedCount++;
            let updatedBlock = block;
            
            const shortDesc = escapeBackticks(found.shortDescription || '');
            const descHtml = escapeBackticks(found.descriptionHtml);
            
            // Replace shortDescription
            if (updatedBlock.includes('shortDescription:')) {
                updatedBlock = updatedBlock.replace(/shortDescription:\s*"[^"]*"/, `shortDescription: "${shortDesc.replace(/"/g, '\\"')}"`);
            } else {
                // If it doesn't exist, we add it after name
                updatedBlock = updatedBlock.replace(/(name:\s*"[^"]*",)/, `$1\n    shortDescription: "${shortDesc.replace(/"/g, '\\"')}",`);
            }
            
            // Replace descriptionHtml block
            if (updatedBlock.includes('descriptionHtml:')) {
                updatedBlock = updatedBlock.replace(/descriptionHtml:\s*`[\s\S]*?`/, `descriptionHtml: \`${descHtml}\``);
            } else {
                // If it doesn't exist, we add it after shortDescription or name
                updatedBlock = updatedBlock.replace(/(name:\s*"[^"]*",)/, `$1\n    descriptionHtml: \`${descHtml}\`,`);
            }
            
            return updatedBlock + ',';
        } else {
            missedNames.push(internalName);
        }
        
        return match;
    });

    fs.writeFileSync(PRODUCTS_PATH, productsTs);
    console.log(`\nSuccessfully updated ${updatedCount} products in products.ts.`);
    // console.log(`Missed ${missedNames.length} products:`, missedNames.slice(0, 10));
}

mergeData();
