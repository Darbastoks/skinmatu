
import fs from 'fs';

const corrupted = fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/src/data/products_prefix.txt', 'utf8');

const mapping = {
    'Ã ': 'ą', 'Ä': 'č', 'Ä™': 'ę', 'Ä—': 'ė', 'Ä¯': 'į', 'Å¡': 'š', 'Å³': 'ų', 'Å«': 'ū', 'Å¾': 'ž',
    'Ã€': 'Ą', 'ÄŒ': 'Č', 'Ä˜': 'Ę', 'Ä–': 'Ė', 'Ä®': 'Į', 'Å ': 'Š', 'Å²': 'Ų', 'Åª': 'Ū', 'Å½': 'Ž',
    'â€“': '–', 'â€”': '—', 'â€ž': '„', 'â€œ': '“', 'â€™': '’', 'Â ': ' ', 'Ä…': 'ą'
};

let fixed = corrupted;
for (const [bad, good] of Object.entries(mapping)) {
    fixed = fixed.split(bad).join(good);
}

// Special case for line 123: 'prekÄ—' -> 'prekė'
// If Ä— is already handled, it should be fine.

fs.writeFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/src/data/products_prefix_CLEAN.txt', fixed, 'utf8');
console.log('Prefix repaired.');
