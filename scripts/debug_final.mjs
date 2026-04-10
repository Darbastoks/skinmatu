import fs from 'fs';
import { spawnSync } from 'child_process';

const productsPath = 'src/data/products.ts';
const content = fs.readFileSync(productsPath, 'utf8');

const result = spawnSync('node', ['--input-type=module', '--check'], { input: content });

if (result.status === 0) {
    console.log('No syntax errors found.');
} else {
    const errorStderr = result.stderr.toString();
    console.log('Error output:');
    const lines = errorStderr.split('\n');
    lines.slice(0, 10).forEach(l => console.log(l));
    
    const lineMatch = errorStderr.match(/\[eval\]:(\d+)/);
    if (lineMatch) {
       const lineNum = parseInt(lineMatch[1]);
       console.log(`\nPotential error around line ${lineNum}`);
       const fileLines = content.split('\n');
       const startLine = Math.max(0, lineNum - 10);
       const endLine = Math.min(fileLines.length, lineNum + 10);
       for (let i = startLine; i < endLine; i++) {
           console.log(`${i+1}: ${fileLines[i]}`);
       }
    }
}
