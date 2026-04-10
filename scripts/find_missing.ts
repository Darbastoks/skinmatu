import { products } from '../src/data/products';

const missing = products.filter(p => !p.descriptionHtml || p.descriptionHtml.trim() === '');
console.log('Products missing description:', missing.length);
missing.forEach(p => console.log(p.name, '-', p.brand));
