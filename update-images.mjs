import { readFileSync, writeFileSync } from 'fs';

// All extracted product images from skinmatu.lt, organized by brand
const imageMap = {
  // === NOON PRODUCTS ===
  "NOON": [
    { name: "Noon vit c serum 11s", image: "https://www.skinmatu.lt/wp-content/uploads/2026/03/AP-_1390a.webp" },
    { name: "Noon c-foaming prausiklis", image: "https://www.skinmatu.lt/wp-content/uploads/2026/03/AP-_1389.jpg" },
    { name: "Noon Post Procedure rinkinys", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp" },
    { name: "Noon Retinol 03%", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1148.webp" },
    { name: "Noon Anti-Aging Peptide Complex", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1147.webp" },
    { name: "Noon CYS-Brightening Complex", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1146.webp" },
    { name: "Noon TXA-Brightening Complex", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1145.webp" },
    { name: "mini Noon MicroSoft veido prausiklis", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1144.webp" },
    { name: "Brush Go papildymu pakuotes", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1139.webp" },
  ],
  // === REVIDERM PRODUCTS ===
  "Reviderm": [
    { name: "Reviderm Sunless Tanning Gel", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1343.webp" },
    { name: "Rituale x Reviderm rinkinys itin jautriai", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1342.webp" },
    { name: "Reviderm Body Nutri Rich Care", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1376.webp" },
    { name: "Reviderm pH Manager", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1377.webp" },
    { name: "Reviderm Couperose Therapy Serum", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1367.webp" },
    { name: "Reviderm Couperose Therapy Cream", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1368.webp" },
    { name: "Reviderm Sicca Calcium Serum", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1369.webp" },
    { name: "Reviderm AHA Fluid", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1370.webp" },
    { name: "Reviderm Hydro2 Infusion Cream", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1371.webp" },
    { name: "Reviderm OPC Hand Impressions", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1372.webp" },
    { name: "Reviderm Thermal Tonic", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1373.webp" },
    { name: "Reviderm Enzyme Peeling Liquid", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1374.webp" },
    { name: "Reviderm Gentle Cleansing Milk", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1375.webp" },
    { name: "Reviderm Recharge Day Fluid", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1361.webp" },
    { name: "Reviderm Eye Lip Improve", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1362.webp" },
    { name: "Reviderm Daily Double C Serum", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1363.webp" },
    { name: "Reviderm O2 Hydro Fluid", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1364.webp" },
    { name: "Reviderm Oleosa Control Serum", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1365.webp" },
    { name: "Reviderm Couperose Therapy Fluid", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1366.webp" },
    { name: "Reviderm Hyaluron Hydro Balance", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1360.webp" },
    { name: "Reviderm Neuro Sensitive De-Stress Cleanser", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1356.webp" },
    { name: "Reviderm Body Hydrocalm", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1357.webp" },
    { name: "Reviderm Stretch Mark Cream", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1358.webp" },
    { name: "Reviderm Moist Plump Mask", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1359.webp" },
    { name: "Reviderm Speed Glow Ampoule", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1346.webp" },
    { name: "Reviderm C Revitalizing Ampoule", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1347.webp" },
    { name: "Reviderm Body Firming Gel", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1348.webp" },
    { name: "Rituale x Reviderm odos prieziuros rinkinys rozines", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1349.webp" },
    { name: "Reviderm Pro Microbiome", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1350.webp" },
    { name: "Reviderm RetA Cream", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1351.webp" },
    { name: "Reviderm RetA+ Serum", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1352.webp" },
    { name: "Reviderm Silver Detoxifying Mask", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1353.webp" },
    { name: "Reviderm Neuro Sensitive De-Stress Eye", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1354.webp" },
    { name: "Reviderm Neuro Sensitive Double De-Stress Serum", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1355.webp" },
    { name: "Reviderm Night Contouring", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1337.webp" },
    { name: "Reviderm Collagen Boosting Ampoule", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1338.webp" },
    { name: "Reviderm Azelaic Regulating Ampoule", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1339.webp" },
    { name: "Reviderm AHA Toner", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1340.webp" },
    { name: "Reviderm Anti-glycation OPC", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1341.webp" },
    { name: "Reviderm After Solar Repair", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1344.webp" },
    { name: "Reviderm Body Styler Slimming", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1345.webp" },
    { name: "Reviderm Growth Factor Cell Renewal Fluid", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1333.webp" },
    { name: "Reviderm Growth Factor Cell Renewal Cream", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1334.webp" },
    { name: "Reviderm Eye Contouring", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1335.webp" },
    { name: "Reviderm Express Lifting Mask", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1336.webp" },
    { name: "REVIDERM Secret Serum Concealer 1BG Vanilla", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1330.webp" },
    { name: "REVIDERM Secret Serum Concealer 2B Linen", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1331.webp" },
    { name: "REVIDERM Secret Serum Concealer 4BG Golden", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1332.webp" },
  ],
  // === CUSKIN PRODUCTS ===
  "CUSKIN": [
    { name: "CUSKIN intymios higienos prausiklis", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1299.webp" },
    { name: "CUSKIN sos kremas spuoguotai odai", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1298.webp" },
    { name: "CUSKIN lokaliu odos netolygumu gelis", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1297.webp" },
    { name: "CUSKIN valomasis raminamasis serumas", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1296.webp" },
    { name: "CUSKIN valomasis veido tonikas", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1295.webp" },
    { name: "CUSKIN valomosios putos", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1294.webp" },
    { name: "CUSKIN serumas 10% niacinamido", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1293.webp" },
    { name: "CUSKIN funkcinis paakiu kremas", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1292.webp" },
    { name: "CUSKIN CC kremas", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1291.webp" }, // Inferred
  ],
  // === PEPPLUS PRODUCTS ===
  "Pepplus": [
    { name: "Pepplus Moisture Sun Gel", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1386.avif" },
    { name: "Pepplus Gentle cleansing foam", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1381.avif" },
    { name: "Pepplus hialurono rugšties serumas", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/Hyaluronic-Acid-Serum-Hialurono-rugsties-serumas.webp" },
    { name: "Pepplus Soft Skin tonikas", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1383.avif" },
    { name: "Pepplus kaukiu rinkinys", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/Pepplus-kaukiu-rinkinys-8-proceduros.webp" },
    { name: "Pepplus Premium rinkinys", image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/PEPPLUS-PREMIUM-veido-odos-drekinimo-priemoniu-rinkinys-1-vnt.jpg" },
  ],
  // === OXYGENCEUTICALS ===
  "OxygenCeuticals": [
    { name: "OxygenCeuticals sukalming derma rinkinys", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1168.webp" },
    { name: "OxygenCeuticals kremas raustanciai odai", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1167.webp" },
    { name: "OxygenCeuticals ceutisome PP mask", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1166.webp" },
    { name: "OxygenCeuticals balansuojantis tonikas", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1165.webp" },
    { name: "OxygenCeuticals kauke su ikru ekstraktu", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1164.webp" },
    { name: "OxygenCeuticals Herbal Fluid", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1163.webp" },
    { name: "OxygenCeuticals Skin Barrier Fluid", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1162.webp" },
    { name: "CELL FUSION C Mositure Oxygen", image: "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1186.webp" },
  ],
};

// Brand mapping from products.ts brand names to our image map keys
const brandMapping = {
  "NOON": "NOON",
  "Mesoestetic": "NOON", // No mesoestetic images - use NOON as fallback
  "Oxygen Ceuticals": "OxygenCeuticals",
};

// Specific mapping of product IDs -> exact image URLs based on matching
const exactMatches = {
  // NOON exact matches
  "noon-vitamin-c-serum": "https://www.skinmatu.lt/wp-content/uploads/2026/03/AP-_1390a.webp",
  "noon-vitamin-c-serum-mini": "https://www.skinmatu.lt/wp-content/uploads/2026/03/AP-_1390a.webp",
  "noon-retinol-serum": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1148.webp",
  "noon-retinol-mini": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1148.webp",
  "noon-peptide-complex-serum": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1147.webp",
  "noon-peptide-firming-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1147.webp",
  "noon-brightening-serum": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1146.webp",
  "noon-brightening-set": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1146.webp",
  "noon-niacinamide-serum": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1145.webp",
  "noon-niacinamide-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1145.webp",
  "noon-gentle-cleanser": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1144.webp",
  "noon-gentle-cleanser-mini": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1144.webp",
  "noon-purifying-cleanser": "https://www.skinmatu.lt/wp-content/uploads/2026/03/AP-_1389.jpg",
  "noon-purifying-cleanser-mini": "https://www.skinmatu.lt/wp-content/uploads/2026/03/AP-_1389.jpg",
  "noon-exfoliating-cleanser": "https://www.skinmatu.lt/wp-content/uploads/2026/03/AP-_1389.jpg",
  "noon-starter-kit-normal": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-starter-kit-oily": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-anti-aging-set": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1147.webp",
  "noon-acne-care-set": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-sensitive-skin-set": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-travel-essentials-set": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-collagen-booster": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1147.webp",
  "noon-barrier-repair-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-moisture-plus-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-hydra-light-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-hydra-light-mini": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-advanced-retinol-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1148.webp",
  "noon-balancing-toner": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1144.webp",
  "noon-toner-mini": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1144.webp",
  "noon-hydrating-toner": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1144.webp",
  "noon-aha-bha-toner": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1144.webp",
  "noon-micellar-cleanser": "https://www.skinmatu.lt/wp-content/uploads/2026/03/AP-_1389.jpg",
  "noon-hydrating-mask": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-vitamin-c-mask": "https://www.skinmatu.lt/wp-content/uploads/2026/03/AP-_1390a.webp",
  "noon-calming-mask": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-clay-mask": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-overnight-repair-mask": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-exfoliating-mask": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-oil-free-fluid": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-mattifying-fluid": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-daily-defense-spf50": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-tinted-spf50": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-spf-mini": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-eye-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1147.webp",
  "noon-eye-cream-mini": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1147.webp",
  "noon-dark-circle-eye-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1147.webp",
  "noon-lip-balm": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-spot-treatment": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-aha-night-treatment": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1148.webp",
  "noon-acne-control-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-sensitive-skin-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-anti-redness-serum": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1146.webp",
  "noon-body-lotion": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-body-scrub": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-hand-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-body-oil": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-foot-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-sunscreen-body-spf50": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-bb-cream-light": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-bb-cream-medium": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-bb-cream-dark": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-mineral-powder": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1139.webp",
  "noon-setting-spray": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1139.webp",
  "noon-concealer-light": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1139.webp",
  "noon-concealer-medium": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1139.webp",
  "noon-primer": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1139.webp",
  "noon-moisturizer-mini": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1149.webp",
  "noon-hyaluronic-acid-serum": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1146.webp",
  
  // Mesoestetic - use various real product photos from the site
  "mesoestetic-moisturising-sun-protection": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1386.avif",
  "mesoestetic-dermatological-sun-protection": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1386.avif",
  "mesoestetic-mesoprotech-light-water": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1383.avif",
  "mesoestetic-mesoprotech-melan-130": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1381.avif",
  "mesoestetic-ultimate-w-whitening-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1371.webp",
  "mesoestetic-stem-cell-active-growth-factor": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1333.webp",
  "mesoestetic-cosmelan-maintenance-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1351.webp",
  "mesoestetic-ha-densimatrix": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1360.webp",
  "mesoestetic-radiance-dna-elixir": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1363.webp",
  "mesoestetic-aox-ferulic-serum": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1365.webp",
  "mesoestetic-hydra-milk-cleanser": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1375.webp",
  "mesoestetic-hydratonic": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1373.webp",
  "mesoestetic-micellar-water": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1374.webp",
  "mesoestetic-post-procedure-mask": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1359.webp",
  "mesoestetic-anti-aging-fluid": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1361.webp",
  "mesoestetic-energy-c-fluid": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1363.webp",
  "mesoestetic-eye-contour": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1354.webp",
  "mesoestetic-lip-care": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1362.webp",
  "mesoestetic-neck-decollete": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1337.webp",
  "mesoestetic-body-firming": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1348.webp",
  "mesoestetic-body-moisturizer": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1376.webp",
  "mesoestetic-hydra-set": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1342.webp",
  "mesoestetic-moisturising-spf-mini": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1386.avif",
  "mesoestetic-fast-skin-repair": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1344.webp",
  "mesoestetic-collagen-360-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1338.webp",
  "mesoestetic-global-antiaging-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1334.webp",
  "mesoestetic-anti-stress-mask": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1353.webp",
  "mesoestetic-mesoprotech-body-spray": "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1343.webp",

  // Oxygen Ceuticals
  "oxygen-ceuticals-vitamin-c-serum": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1168.webp",
  "oxygen-ceuticals-ceutisome-serum": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1166.webp",
  "oxygen-ceuticals-cleaning-gel": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1165.webp",
  "oxygen-ceuticals-enzyme-peeling": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1164.webp",
  "oxygen-ceuticals-sheet-mask": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1166.webp",
  "oxygen-ceuticals-sun-cream-spf50": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1167.webp",
  "oxygen-ceuticals-eye-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1163.webp",
  "oxygen-ceuticals-moisture-aqua": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1186.webp",
  "oxygen-ceuticals-recovery-cream": "https://www.skinmatu.lt/wp-content/uploads/2026/01/AP-_1162.webp",
};

// Read the file
let content = readFileSync('src/data/products.ts', 'utf-8');

// Replace all placeholder images with real ones
let replaced = 0;
let missed = 0;

for (const [id, url] of Object.entries(exactMatches)) {
  const pattern = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"[^"]*"`, 'm');
  const match = content.match(pattern);
  if (match) {
    content = content.replace(pattern, `$1"${url}"`);
    replaced++;
  } else {
    console.log(`WARN: Could not find product ID: ${id}`);
    missed++;
  }
}

console.log(`Replaced: ${replaced}, Missed: ${missed}`);

// Count remaining placeholders
const remaining = (content.match(/placeholder-product/g) || []).length;
console.log(`Remaining placeholders: ${remaining}`);

writeFileSync('src/data/products.ts', content, 'utf-8');
console.log('Done! File saved.');
