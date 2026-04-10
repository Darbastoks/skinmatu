import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Configuration
const SELECTORS = {
  title: 'h2.product_title',
  shortDesc: '.woocommerce-product-details__short-description',
  fullDesc: '#tab-description'
};

async function scrapeMissing() {
  const productsPath = path.join(process.cwd(), 'src', 'data', 'products.ts');
  const content = fs.readFileSync(productsPath, 'utf8');

  // Identify missing products using regex
  const productRegex = /id: "([^"]+)"[\s\S]+?name: "([^"]+)"[\s\S]+?brand: "([^"]+)"[\s\S]+?descriptionHtml: `([^`]*)`/g;
  const missing = [];
  let m;
  while ((m = productRegex.exec(content)) !== null) {
      const id = m[1];
      const name = m[2];
      const brand = m[3];
      const html = m[4];
      if (!html || html.includes('ruošiamas')) {
          missing.push({ id, name, brand });
      }
  }

  console.log(`Found ${missing.length} products needing descriptions.`);

  const scrapedData = [];

  for (let i = 0; i < missing.length; i++) {
    const { id, name, brand } = missing[i];
    
    // Skip Noon Aesthetics for now if it requires a password
    if (brand.toLowerCase().includes('noon')) {
        console.log(`[${i+1}/${missing.length}] Skipping Noon product (Password Required): ${name}`);
        continue;
    }

    try {
      // Create a search term (Brand + first few words of Name)
      const cleanName = name.replace(/,/g, '').split(' ').slice(0, 4).join(' ');
      const searchTerm = `${brand} ${cleanName}`;
      console.log(`[${i+1}/${missing.length}] Searching for: ${searchTerm}`);
      
      const searchUrl = `https://www.skinmatu.lt/?s=${encodeURIComponent(searchTerm)}&post_type=product`;
      const res = await fetch(searchUrl);
      if (!res.ok) continue;

      const html = await res.text();
      const $ = cheerio.load(html);

      // Find links in search results
      let productLink = $('.products .product a.woocommerce-LoopProduct-link').first().attr('href');
      
      if (!productLink) {
          // Fallback search in links
          productLink = $('a').filter((_, el) => {
              const text = $(el).text().toLowerCase();
              return text.includes(brand.toLowerCase()) && text.includes(name.split(' ')[0].toLowerCase());
          }).first().attr('href');
      }

      if (productLink && productLink.includes('/product/')) {
        console.log(`  Found: ${productLink}`);
        const productRes = await fetch(productLink);
        if (productRes.ok) {
          const pHtml = await productRes.text();
          const p$ = cheerio.load(pHtml);
          
          const fullDesc = p$(SELECTORS.fullDesc).html()?.trim() || '';
          const shortDesc = p$(SELECTORS.shortDesc).html()?.trim() || '';
          
          if (fullDesc) {
            scrapedData.push({ id, name, shortDesc, fullDesc });
            console.log(`  SUCCESS: Extracted content.`);
          }
        }
      } else {
        console.warn(`  FAILED: No product page found for ${searchTerm}`);
      }

      await delay(1500); // Respect the server
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
    }
  }

  fs.writeFileSync('enriched_data.json', JSON.stringify(scrapedData, null, 2));
  console.log(`\nFinished! Scraped ${scrapedData.length} new descriptions.`);
}

scrapeMissing();
