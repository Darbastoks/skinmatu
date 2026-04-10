import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Load current products to know what to search for
const productsPath = path.join(process.cwd(), 'src', 'data', 'products.ts');
const productsTs = fs.readFileSync(productsPath, 'utf8');

// Simple regex to extract names from the TS file
const nameRegex = /name:\s*["']([^"']+)["']/g;
const names = [];
let match;
while ((match = nameRegex.exec(productsTs)) !== null) {
  names.push(match[1]);
}

console.log(`Found ${names.length} products to scrape descriptions for.`);

async function scrapeDescriptions() {
  const scrapedData = [];
  
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    try {
      console.log(`[${i+1}/${names.length}] Searching for: ${name}`);
      const searchUrl = `https://www.skinmatu.lt/?s=${encodeURIComponent(name)}`;
      const res = await fetch(searchUrl);
      if (!res.ok) {
        console.error(`Failed to fetch search results for ${name}`);
        continue;
      }
      
      const html = await res.text();
      const $ = cheerio.load(html);
      
      // Find the first product link in search results
      // Assuming WooCommerce structure for search results
      let productLink = $('.products .product a.woocommerce-LoopProduct-link').first().attr('href');
      
      if (!productLink) {
        // Fallback for some themes
        productLink = $('a').filter((_, el) => $(el).text().trim().toLowerCase().includes(name.toLowerCase())).first().attr('href');
      }

      if (productLink) {
        console.log(`  Found product page: ${productLink}`);
        const productRes = await fetch(productLink);
        if (productRes.ok) {
          const productHtml = await productRes.text();
          const p$ = cheerio.load(productHtml);
          
          const descriptionHtml = p$('#tab-description').html()?.trim() || '';
          const shortDescription = p$('.woocommerce-product-details__short-description').html()?.trim() || '';
          
          scrapedData.push({
            originalName: name,
            scrapedName: p$('h2.product_title.entry-title').text().trim() || p$('h1.product_title').text().trim(),
            descriptionHtml,
            shortDescription
          });
          console.log(`  Scraped description for ${name}`);
        }
      } else {
        console.warn(`  No product page found for ${name}`);
      }
      
      await delay(1000); // Wait 1 second between products to avoid throttling
    } catch (e) {
      console.error(`Error scraping ${name}:`, e.message);
    }
  }

  fs.writeFileSync('scraped_descriptions.json', JSON.stringify(scrapedData, null, 2));
  console.log(`Finished! Scraped ${scrapedData.length} descriptions.`);
}

scrapeDescriptions();
