import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function scrapeBatch() {
    const urlsPath = path.join(process.cwd(), 'public_urls.json');
    if (!fs.existsSync(urlsPath)) {
        console.error('public_urls.json not found!');
        return;
    }

    const products = JSON.parse(fs.readFileSync(urlsPath, 'utf8'));
    console.log(`Starting batch scrape for ${products.length} products...`);

    const results = [];
    const SELECTORS = {
        shortDesc: '.woocommerce-product-details__short-description',
        fullDesc: '#tab-description'
    };

    for (let i = 0; i < products.length; i++) {
        const { name, url } = products[i];
        console.log(`[${i + 1}/${products.length}] Scraping: ${name}`);

        try {
            const res = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
                }
            });
            if (!res.ok) {
                console.warn(`  FAILED to fetch ${url} - Status: ${res.status}`);
                continue;
            }

            const html = await res.text();
            if (!html || html.length < 500) {
                 console.warn(`  WARNING: HTML for ${name} is suspiciously short (${html?.length} chars)`);
                 if (html?.includes('Cloudflare') || html?.includes('CAPTCHA')) {
                     console.error('  CRITICAL: Blocked by Cloudflare or CAPTCHA!');
                     break; 
                 }
            }
            const $ = cheerio.load(html);

            const shortDescription = $(SELECTORS.shortDesc).text().trim() || $(SELECTORS.shortDesc).html()?.trim() || '';
            const descriptionHtml = $(SELECTORS.fullDesc).html()?.trim() || '';

            if (descriptionHtml) {
                results.push({ name, shortDescription, descriptionHtml });
                console.log(`  SUCCESS: Extracted ${descriptionHtml.length} chars.`);
            } else {
                console.warn(`  WARNING: No description found in #tab-description.`);
            }

            // Respectful delay
            await delay(1000);
        } catch (err) {
            console.error(`  ERROR: ${err.message}`);
        }

        // Save progress every 10 products
        if (i % 10 === 0 && results.length > 0) {
            fs.writeFileSync('scraped_content_partial.json', JSON.stringify(results, null, 2));
        }
    }

    fs.writeFileSync('scraped_content_final.json', JSON.stringify(results, null, 2));
    console.log(`\nFinished! Scraped ${results.length} total descriptions.`);
}

scrapeBatch();
