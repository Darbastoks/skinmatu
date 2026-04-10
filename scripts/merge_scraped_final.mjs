import fs from 'fs';
import path from 'path';

const PRODUCTS_PATH = path.join(process.cwd(), 'src/data/products.ts');
const SCRAPED_DATA_PATH = path.join(process.cwd(), 'scraped_content_final.json');

function escapeBackticks(str) {
    if (!str) return '';
    // Escape backticks (\`) and dollars (\$) for template literals, but only if they are not already escaped
    return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function mergeData() {
    if (!fs.existsSync(SCRAPED_DATA_PATH)) {
         console.error('scraped_content_final.json not found!');
         return;
    }

    const scraped = JSON.parse(fs.readFileSync(SCRAPED_DATA_PATH, 'utf8'));
    let productsTs = fs.readFileSync(PRODUCTS_PATH, 'utf8');

    console.log(`Merging ${scraped.length} descriptions...`);

    let updatedCount = 0;
    
    // We iterate over the products in products.ts using a regex to isolate each block
    // This is safer than a simple string replace.
    const productRegex = /({[\s\S]+?name: "([^"]+)"[\s\S]+?})[,]/g;
    
    productsTs = productsTs.replace(productRegex, (match, block, name) => {
        const found = scraped.find(s => s.name.toLowerCase() === name.toLowerCase() || 
                                        name.toLowerCase().includes(s.name.toLowerCase()) ||
                                        s.name.toLowerCase().includes(name.toLowerCase()));
        
        if (found && found.descriptionHtml && found.descriptionHtml.length > 50) {
            updatedCount++;
            let updatedBlock = block;
            
            // Fix existing placeholders like "Aprašymas ruošiamas..."
            const shortDesc = escapeBackticks(found.shortDescription || '');
            const descHtml = escapeBackticks(found.descriptionHtml);
            
            // Replace shortDescription
            updatedBlock = updatedBlock.replace(/shortDescription: "[^"]*"/, `shortDescription: "${shortDesc.replace(/"/g, '\\"')}"`);
            
            // Replace descriptionHtml block
            // We use a regex that matches from 'descriptionHtml: `' to the next '`,'
            updatedBlock = updatedBlock.replace(/descriptionHtml: `[\s\S]*?`/, `descriptionHtml: \`${descHtml}\``);
            
            return updatedBlock + ',';
        }
        
        return match;
    });

    fs.writeFileSync(PRODUCTS_PATH, productsTs);
    console.log(`\nSuccessfully updated ${updatedCount} products in products.ts.`);
}

mergeData();
