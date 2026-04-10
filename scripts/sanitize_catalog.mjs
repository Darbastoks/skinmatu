import fs from 'fs';
import path from 'path';

const REPLACEMENT_MAP = {
    'â„¢': '™',
    'Â®': '®',
    'â€¢': '•',
    'â€“': '–',
    'â€”': '—',
    'â€˜': '‘',
    'â€™': '’',
    'â€œ': '“',
    'â€': '”',
    'â€ ': '†',
    'â€¡': '‡',
    'Â ': ' ',
    'ï¸âƒ£': '.', // Fix broken emoji numbering (e.g. 1ï¸âƒ£ -> 1.)
    'âƒ£': '.',
    'ï¸': '',
    'Â': '', // Often a phantom character prefixing others
    // Lithuanian characters (in case they were double encoded)
    'Ä…': 'ą', 'ÄŒ': 'Č', 'Ä': 'č', 'Ä™': 'ę', 'Ä—': 'ė', 'Ä¯': 'į', 'Å¡': 'š', 'Å³': 'ų', 'Å«': 'ū', 'Å¾': 'ž',
    'Ä„': 'Ą', 'Ä˜': 'Ę', 'Ä–': 'Ė', 'Ä®': 'Į', 'Å ': 'Š', 'Å²': 'Ų', 'Åª': 'Ū', 'Å½': 'Ž',
};

function sanitize(text) {
    if (!text) return text;
    let sanitized = text;
    
    // Apply specific map replacements
    for (const [corrupted, clean] of Object.entries(REPLACEMENT_MAP)) {
        sanitized = sanitized.split(corrupted).join(clean);
    }

    // Fix the specific "3ï¸âf£" or "3ï¸âƒ£" pattern found in Reviderm
    // The user saw "3ï¸âf£" - note the 'f' vs 'ƒ'. We'll catch both.
    sanitized = sanitized.replace(/(\d)ï¸â[fƒ]£/g, '$1. ');
    sanitized = sanitized.replace(/(\d)âƒ£/g, '$1. ');

    return sanitized;
}

function processFile(filePath) {
    console.log(`Processing ${filePath}...`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // We want to sanitize the content but be careful not to break the JS structure.
    // Specifically, we want to sanitize the strings inside descriptionHtml, shortDescription, and name.
    
    // Easiest nuclear way is to sanitize the WHOLE FILE if it doesn't break code.
    // Since this is a data file with mostly strings, split/join is safe for Mojibake.
    const sanitizedContent = sanitize(content);
    
    fs.writeFileSync(filePath, sanitizedContent, 'utf8');
    console.log(`Sanitized ${filePath} successfully.`);
}

const productsPath = 'src/data/products.ts';
if (fs.existsSync(productsPath)) {
    processFile(productsPath);
}

// Also export the sanitize function for use in master_reconstruct
export { sanitize };
