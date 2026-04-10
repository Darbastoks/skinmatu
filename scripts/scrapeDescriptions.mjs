import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function fetchProducts() {
  console.log("Starting to scrape product URLs from shop pages...");
  let allLinks = new Set();
  
  // Crawl shop pages 1 to 15
  for (let i = 1; i <= 15; i++) {
    try {
      const url = `https://www.skinmatu.lt/parduotuve/page/${i}/`;
      const res = await fetch(url);
      if (!res.ok) {
        if (res.status === 404) break; // Reached end of pages
        continue;
      }
      const html = await res.text();
      const $ = cheerio.load(html);
      
      $('a').each((_, el) => {
        const link = $(el).attr('href');
        if (link && link.includes('/produktas/') && !link.includes('?add-to-cart')) {
          allLinks.add(link);
        }
      });
      console.log(`Page ${i} scraped, found ${allLinks.size} unique links so far.`);
      await delay(500);
    } catch (e) {
      console.error(`Error on page ${i}:`, e.message);
    }
  }

  const linksArray = Array.from(allLinks);
  console.log(`\nFinished collecting ${linksArray.length} product links. Starting deep scrape...`);

  const scrapedData = [];

  // Scrape each product link
  for (let i = 0; i < linksArray.length; i++) {
    const link = linksArray[i];
    try {
      console.log(`[${i+1}/${linksArray.length}] Fetching ${link}...`);
      const res = await fetch(link);
      if (!res.ok) continue;
      const html = await res.text();
      const $ = cheerio.load(html);

      // Extract Name (for matching) - WordPress <h1 class="product_title">
      let name = $('h1.product_title').text().trim();
      
      // Secondary fallback for name if h1 is missing
      if (!name) {
          name = $('meta[property="og:title"]').attr('content') || '';
      }
      
      // Extract Description HTML
      let descriptionHtml = $('#tab-description').html() || '';
      if (!descriptionHtml) {
          // Look for any alternative typical description containers in non-standard themes
          descriptionHtml = $('.woocommerce-product-details__short-description').html() || '';
      }
      
      if (descriptionHtml) {
        descriptionHtml = descriptionHtml.trim();
      }

      let shortDescription = $('.woocommerce-product-details__short-description').html() || '';
      if (shortDescription) {
        shortDescription = shortDescription.trim();
      }

      // We only care if we actually got a name
      if (name) {
        scrapedData.push({
          link,
          name,
          descriptionHtml,
          shortDescription
        });
      }

      await delay(300); // polite delay
    } catch (e) {
      console.error(`Error scraping ${link}:`, e.message);
    }
  }

  console.log(`\nSuccessfully deep scraped ${scrapedData.length} products.`);

  fs.writeFileSync(path.join(process.cwd(), 'scraped_descriptions.json'), JSON.stringify(scrapedData, null, 2));
  console.log("Wrote raw scraped data to scraped_descriptions.json");
}

fetchProducts();
