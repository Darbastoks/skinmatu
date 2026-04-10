import fs from 'fs';
import path from 'path';

function mergeFinal13() {
    const productsPath = path.join(process.cwd(), 'src', 'data', 'products.ts');
    let content = fs.readFileSync(productsPath, 'utf8');

    if (!fs.existsSync('final_scraped_descriptions.json')) {
        console.error('final_scraped_descriptions.json missing');
        return;
    }
    const scraped = JSON.parse(fs.readFileSync('final_scraped_descriptions.json', 'utf8'));

    let replaceCount = 0;

    for (const [id, data] of Object.entries(scraped)) {
        // Regex to find the product block by ID and replace/insert description fields
        // This looks for ID, then captures the block until the next ID or end of array
        const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?)(shortDescription:\\s*\`.*?\`)?([\\s\\S]*?)(descriptionHtml:\\s*\`.*?\`)?([\\s\\S]*?)(},)`, 'g');
        
        let found = false;
        content = content.replace(regex, (match, prefix, oldShortDesc, mid, oldDescHtml, suffix, brace) => {
            found = true;
            replaceCount++;

            const cleanShortDesc = (data.shortDescription || '').replace(/`/g, "\\`").replace(/\$/g, "\\$");
            const cleanDescHtml = (data.descriptionHtml || '').replace(/`/g, "\\`").replace(/\$/g, "\\$");

            let newBlock = match;

            if (oldShortDesc) {
                newBlock = newBlock.replace(oldShortDesc, `shortDescription: \`${cleanShortDesc}\``);
            } else {
                newBlock = newBlock.replace(prefix, `${prefix}\n    shortDescription: \`${cleanShortDesc}\`,`);
            }

            if (oldDescHtml) {
                newBlock = newBlock.replace(oldDescHtml, `descriptionHtml: \`${cleanDescHtml}\``);
            } else {
                // Insert before the closing brace
                newBlock = newBlock.replace(brace, `    descriptionHtml: \`${cleanDescHtml}\`\n  ${brace}`);
            }

            return newBlock;
        });

        if (!found) {
            console.log("Failed to find block for id: " + id);
        }
    }

    fs.writeFileSync(productsPath, content);
    console.log(`Merged ${replaceCount} products into products.ts`);
}

mergeFinal13();
