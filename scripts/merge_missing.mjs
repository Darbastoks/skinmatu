import fs from 'fs';
import path from 'path';

function mergeData() {
    const productsPath = path.join(process.cwd(), 'src', 'data', 'products.ts');
    let content = fs.readFileSync(productsPath, 'utf8');

    if (!fs.existsSync('enriched_missing_final.json')) return;
    const scraped = JSON.parse(fs.readFileSync('enriched_missing_final.json', 'utf8'));

    let replaceCount = 0;

    for (const item of scraped) {
        // Need to find the exact block for item.id 
        // Example: id: "item-id", ...
        const regex = new RegExp(`(id:\\s*"${item.id}"[\\s\\S]*?)(shortDescription:\\s*\`.*?\`)?([\\s\\S]*?)(descriptionHtml:\\s*\`.*?\`)?([\\s\\S]*?)(},)`, 'g');
        
        let found = false;
        content = content.replace(regex, (match, prefix, oldShortDesc, mid, oldDescHtml, suffix, brace) => {
            found = true;
            replaceCount++;

            // Clean data
            const cleanShortDesc = (item.shortDesc || '').replace(/`/g, "\\`");
            const cleanDescHtml = (item.fullDesc || '').replace(/`/g, "\\`");

            // We need to inject or replace
            let newBlock = match;

            if (oldShortDesc) {
                newBlock = newBlock.replace(oldShortDesc, `shortDescription: \`${cleanShortDesc}\``);
            } else {
                newBlock = newBlock.replace(prefix, `${prefix}\n    shortDescription: \`${cleanShortDesc}\`,`);
            }

            if (oldDescHtml) {
                newBlock = newBlock.replace(oldDescHtml, `descriptionHtml: \`${cleanDescHtml}\``);
            } else {
                // Determine if we need to insert it
                 newBlock = newBlock.replace(brace, `    descriptionHtml: \`${cleanDescHtml}\`\n  ${brace}`);
            }

            return newBlock;
        });

        if (!found) {
            console.log("Failed to find block for id: " + item.id);
        }
    }

    fs.writeFileSync(productsPath, content);
    console.log(`Merged ${replaceCount} products into products.ts`);
}

mergeData();
