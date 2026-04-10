import fs from 'fs';
import * as cheerio from 'cheerio';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function scrapeMissing() {
    if (!fs.existsSync('missing_products.json')) {
        console.error('missing_products.json missing');
        return;
    }
    const missing = JSON.parse(fs.readFileSync('missing_products.json', 'utf8'));
    console.log(`Starting scrape for ${missing.length} missing products...`);

    const scrapedData = [];
    const SELECTORS = {
        shortDesc: '.woocommerce-product-details__short-description',
        fullDesc: '#tab-description'
    };

    for (let i = 0; i < missing.length; i++) {
        const { id, name, brand } = missing[i];
        
        const cleanName = name.replace(/,/g, '').split(' ').slice(0, 4).join(' ');
        const searchTerm = `${brand} ${cleanName}`;
        console.log(`[${i+1}/${missing.length}] Searching: ${searchTerm}`);

        try {
            const searchUrl = `https://www.skinmatu.lt/?s=${encodeURIComponent(searchTerm)}&post_type=product`;
            const res = await fetch(searchUrl, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' }
            });
            
            if (!res.ok) continue;

            const html = await res.text();
            const $ = cheerio.load(html);

            let productLink = $('.products .product a.woocommerce-LoopProduct-link').first().attr('href');
            
            if (!productLink) {
                productLink = $('a').filter((_, el) => {
                    const text = $(el).text().toLowerCase();
                    return text.includes(brand.toLowerCase()) && text.includes(name.split(' ')[0].toLowerCase());
                }).first().attr('href');
            }

            if (productLink && productLink.includes('/product/')) {
                console.log(`  Found: ${productLink}`);
                const productRes = await fetch(productLink, {
                    headers: { 'User-Agent': 'Mozilla/5.0' }
                });
                
                if (productRes.ok) {
                    const pHtml = await productRes.text();
                    const p$ = cheerio.load(pHtml);
                    
                    const fullDesc = p$(SELECTORS.fullDesc).html()?.trim() || '';
                    const shortDesc = p$(SELECTORS.shortDesc).text().trim() || p$(SELECTORS.shortDesc).html()?.trim() || '';
                    
                    if (fullDesc || shortDesc) {
                        scrapedData.push({ id, name, shortDesc, fullDesc });
                        console.log(`  SUCCESS: Extracted content.`);
                    } else {
                        console.log(`  WARNING: No descriptions found on product page.`);
                    }
                }
            } else {
                console.warn(`  FAILED: No product page found.`);
            }

            await delay(1000);
        } catch (err) {
            console.error(`  ERROR: ${err.message}`);
        }
    }

    fs.writeFileSync('enriched_missing_final.json', JSON.stringify(scrapedData, null, 2));
    console.log(`\nFinished! Scraped ${scrapedData.length} new descriptions out of ${missing.length}.`);
}

scrapeMissing();
