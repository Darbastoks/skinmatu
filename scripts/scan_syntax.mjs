import fs from 'fs';

const content = fs.readFileSync('src/data/products.ts', 'utf8');
const lines = content.split('\n');

for (let i = 1; i <= lines.length; i++) {
    const subset = lines.slice(0, i).join('\n') + '\n];'; // dummy close
    try {
        // Just a crude check by seeing if it looks roughly right
        const backticks = (lines[i-1].match(/\`/g) || []).length;
        // This won't find everything, but it's a start
    } catch (e) {}
}

// Better yet: try to parse each line or block
console.log('Finished manual scan');
