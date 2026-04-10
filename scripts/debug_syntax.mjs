import fs from 'fs';
import { Parser } from 'acorn';

try {
    const content = fs.readFileSync('src/data/products.ts', 'utf8');
    // Remove TS specific syntax simply for acorn to parse as JS
    const jsContent = content
        .replace(': Product[] =', ' =')
        .replace(/import .*/g, '');
    
    Parser.parse(jsContent, { ecmaVersion: 2020, sourceType: 'module' });
    console.log('No syntax errors found by acorn.');
} catch (e) {
    console.log(`Syntax Error at pos ${e.pos}: ${e.message}`);
    const content = fs.readFileSync('src/data/products.ts', 'utf8');
    const snippet = content.substring(Math.max(0, e.pos - 50), Math.min(content.length, e.pos + 50));
    console.log('Snippet around error:');
    console.log('---');
    console.log(snippet);
    console.log('---');
}
