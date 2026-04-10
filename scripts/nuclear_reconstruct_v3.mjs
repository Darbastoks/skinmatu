
import fs from 'fs';
import path from 'path';

const baseDir = 'c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu';
const prefixPath = path.join(baseDir, 'src/data/products_prefix.txt');
const outputPath = path.join(baseDir, 'src/data/products.ts');

// 1. Repair Mapping (UTF-8 as ISO-8859-1 -> UTF-8)
const mapping = {
    'Ã ': 'ą', 'Ä ': 'č', 'Ä™': 'ę', 'Ä—': 'ė', 'Ä¯': 'į', 'Å¡': 'š', 'Å³': 'ų', 'Å«': 'ū', 'Å¾': 'ž',
    'Ã€': 'Ą', 'ÄŒ': 'Č', 'Ä˜': 'Ę', 'Ä–': 'Ė', 'Ä®': 'Į', 'Å ': 'Š', 'Å²': 'Ų', 'Åª': 'Ū', 'Å½': 'Ž',
    'â€“': '–', 'â€”': '—', 'â€ž': '„', 'â€œ': '“', 'â€™': '’', 'Â ': ' ', 'Ä…': 'ą'
};

function repairText(text) {
    let fixed = text;
    for (const [bad, good] of Object.entries(mapping)) {
        fixed = fixed.split(bad).join(good);
    }
    // Final cleanup of common artifacts
    fixed = fixed.replace(/Â/g, ''); 
    return fixed;
}

// 2. Read Prefix
let prefix = fs.readFileSync(prefixPath, 'utf8');
prefix = repairText(prefix);

// 3. New Product Data (Correctly Encoded)
const productsData = [
  {
    id: "reviderm-speed-glow-ampoule",
    name: "Reviderm Speed Glow Ampoule spindesio ampulės, 7 x 2 ml",
    shortDescription: `Papildytos TCM vaisių ekstraktais, koncentruotos ampulės skatina mikrocirkuliaciją ir sugrąžina odai sveikos odos švytėjimą.`,
    descriptionHtml: `<div><h3>Aprašymas</h3><p>Papildytos TCM vaisių ekstraktais, koncentruotos ampulės skatina mikrocirkuliaciją ir sugrąžina odai sveikos odos švytėjimą. Turtinga formulė aktyvina odos metabolizmą, suteikia gyvybingumo, taip pat sugrąžina jaunatviškos, gaivios odos išvaizdą. Puikiai tinka visiems odos tipams, ypatingai papilkėjusiai ir pavargusiai odai.</p><h3>Naudojimas</h3><p>Nulaužkite ampulės galiuką ties pažymėta vieta. Tepkite ant švarios, tonizuotos veido, kaklo odos, dekoltė prieš serumą. Naudoti ryte arba vakare. Po ampulės naudokite serumą, paakių priežiūros produktą, kremą. Ampulė skirta vienkartiniam naudojimui. Naudokite pagal poreikį, rekomenduojama 2-3 kartus per savaitę. Venkite patekimo į akis ir gleivinę. Laikykite atokiai nuo vaikų. Skirta tik išoriniam naudojimui.</p></div>`,
    brand: "Reviderm",
    category: "papildymai",
    tags: ["ampulės","spindesys","intensyvus"],
    price: 30.40,
    oldPrice: 38.00,
    image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1346.webp"
  },
  {
    id: "rituale-reviderm-rozines-rinkinys",
    name: "Rituale x Reviderm odos priežiūros rinkinys rožinės paveiktai odai",
    shortDescription: `Profesionalus rinkinys jautriai ir rožinės paveiktai odai, kuris mažina paraudimą, stiprina kapiliarus ir atkuria odos komfortą bei natūralų atsparumą.`,
    descriptionHtml: `<h2>Aprašymas</h2><p>Rituale x Reviderm odos priežiūros rinkinys sukurtas rožinės paveiktai odai<br> Rituale kosmetologių sudarytas profesionalus Reviderm rinkinys, skirtas jautriai, sudirgusiai, į paraudimą ir rožinę linkusiai odai. Kruopščiai parinktas produktų derinys padeda mažinti uždegiminius procesus, stiprina kapiliarus, ramina odą ir atkuria jos apsauginį barjerą.<br> Produktai be kvapiklių ir dažiklių, tinkami itin jautriai odai.<br> Pastaba: prekė gali būti pristatyta kitokiame įpakavime nei matoma nuotraukoje.</p><p>Rinkinį sudaro:<br> Reviderm Couperose Therapy Serum 2, 30 ml<br> Lengvos tekstūros serumas su VEGFstop kompleksu, kuris padeda stabilizuoti kapiliarus ir mažinti paraudimą. Neurokosmetinis antistresinis kompleksas ramina odą, o antioksidantas Pycnogenol® (OPC) apsaugo nuo laisvųjų radikalų ir stiprina kraujagyslių sieneles.<br> Poveikis: sumažėjęs paraudimas, subalansuota ir atsparesnė oda.</p><p>Reviderm Couperose Therapy Cream, 50 ml<br> Kremas su odai identiškais lipidais atkuria pažeistą apsauginį barjerą, stabilizuoja kapiliarus ir mažina išsiplėtusių kraujagyslių matomumą. Neurokosmetiniai ingredientai greitai pašalina tempimo ir deginimo pojūtį.<br> Poveikis: sumažėjęs paraudimas, stipresnė ir komfortiškesnė oda.</p><p>Reviderm Couperose Therapy Mask, 50 ml<br> Intensyvi raminamoji kaukė su VEGFstop ir neuropeptidais padeda stiprinti kapiliarų sieneles, mažina raudonį ir diskomfortą.<br> Poveikis: nuraminta, lygesnė, mažiau reaktyvi oda.</p><p>Pagrindiniai privalumai:<br> Mažina paraudimą ir uždegiminius procesus</p><p>Stabilizuoja kapiliarus</p><p>Stiprina odos apsauginį barjerą</p><p>Saugo nuo laisvųjų radikalų poveikio</p><p>Ramina ir mažina jautrumą</p><p>Tinka rožinės paveiktai ir itin jautriai odai</p><p>Kam tinka:<br> Jautriai, sudirgusiai odai<br> Rožinės (kuperozės) paveiktai odai<br> Odai su matomu paraudimu ir kapiliarų išsiplėtimu</p><p>Naudojimas:<br> Ryto ir vakaro rutina:<br> Nuprauskite odą ir tonizuokite.</p><p>Tepkite 2–3 lašus Couperose Therapy Serum 2 ant veido ir kaklo, leiskite įsigerti.</p><p>Užbaikite ritualą Couperose Therapy Cream – švelniai įmasažuokite.</p><p>2–3 kartus per savaitę:<br> Naudokite Couperose Therapy Mask – tepkite ant veido, kaklo ir dekoltė, palaikykite 15 min. ir nuplaukite šiltu vandeniu.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 30 ml + 50 ml + 50 ml<br> Produkto tipas: serumas, kremas, kaukė</p>`,
    brand: "Reviderm",
    category: "rinkiniai",
    tags: ["rinkinys","rožinė","Rituale"],
    price: 124.00,
    oldPrice: 155.00,
    image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1349.webp"
  },
  {
    id: "reviderm-pore-fine-rinkinys",
    name: "Rituale x Reviderm rinkinys mišriai/riebiai odai",
    shortDescription: `Profesionalus rinkinys mišriai ir riebiai odai, kuris efektyviai valo poras, reguliuoja sebumo išsiskyrimą ir suteikia matumo bei gaivumo pojūtį.`,
    descriptionHtml: `<h2>Aprašymas</h2><p>Rituale x Reviderm rinkinys mišriai ir riebiai odai<br> Rituale kosmetologių sudarytas profesionalus Reviderm rinkinys, skirtas mišrios, riebios ir į bėrimus linkusios odos priežiūrai. Produktai parinkti taip, kad giliai valytų poras, kontroliuotų blizgesį ir atkurtų sveiką odos balansą neišsausinant jos.<br> Pastaba: prekė gali būti pristatyta kitokiame įpakavime nei matoma nuotraukoje.</p><p>Rinkinį sudaro:<br> Reviderm Enzyme Peeling Liquid, 50 ml<br> Švelnus enziminis skystas pilingas, kuris tirpdo negyvas odos ląsteles ir padeda išvalyti poras. Skatina ląstelių atsinaujinimą ir suteikia odai lygesnę tekstūrą.<br> Poveikis: skaistesnė, lygesnė ir paruošta tolimesniam etapui oda.</p><p>Reviderm Oleosa Control Serum, 30 ml<br> Sebumą reguliuojantis serumas su Sebu Control Complex N, kuris matizuoja odą ir mažina porų matomumą. Priešuždegiminės savybės padeda apsaugoti nuo bėrimų.<br> Poveikis: suvaldyta riebalų gamyba, švari ir matinė oda.</p><p>Reviderm Recharge Day Fluid, 50 ml<br> Lengvas dieninis fluidas, kuris drėkina, saugo nuo aplinkos taršos ir stiprina odos barjerą neapsunkindamas jos.<br> Poveikis: apsaugota, sudrėkinta ir gaivi oda visą dieną.</p><p>Pagrindiniai privalumai:<br> Giliai valo poras ir mažina jų matomumą</p><p>Reguliuoja sebumo išsiskyrimą ir blizgesį</p><p>Švelniai eksfolijuoja ir lygina tekstūrą</p><p>Turi priešuždegiminį poveikį</p><p>Suteikia matinį, bet sveiką švytėjimą</p><p>Kam tinka:<br> Mišriai ir riebiai odai<br> Odai su išsiplėtusiomis poromis<br> Į bėrimus ir inkštirus linkusiai odai</p><p>Naudojimas:<br> Ryto rutina:<br> Nuvalykite odą prausikliu (rekomenduojama Reviderm Cleansing Gel).</p><p>Tepkite Oleosa Control Serum – leiskite įsigerti.</p><p>Užbaikite su Recharge Day Fluid.</p><p>2–3 kartus per savaitę vakare:<br> Nuvalius odą, vatos diskeliu nuvalykite veidą Enzyme Peeling Liquid, palaikykite (nenuplaukite) ir tęskite su serumu bei vakarinėmis priemonėmis.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 50 ml + 30 ml + 50 ml<br> Produkto tipas: pilingas, serumas, fluidas</p>`,
    brand: "Reviderm",
    category: "rinkiniai",
    tags: ["rinkinys","mišri oda","Rituale"],
    price: 132.80,
    oldPrice: 166.00,
    image: "https://www.skinmatu.lt/wp-content/uploads/2026/02/AP-_1347.webp"
  }
];

// 4. Constants
const suffix = `
];

export const categoryLabels: Record<string, string> = {
  "visi": "Visi produktai",
  "veido-serumai": "Veido serumai",
  "veido-kremai": "Veido kremai",
  "valymas-ir-tonizavimas": "Valymas ir tonizavimas",
  "veido-kaukes": "Veido kaukės",
  "produktai-kunui": "Produktai kūnui",
  "rinkiniai": "Rinkiniai",
  "papildymai": "Papildai ir priedai",
  "veido-fluidas": "Veido fluidai",
  "mini-dydziai": "Mini produktai"
};

export const brandList = ["NOON", "Reviderm"];
`;

// 5. Build Final Content
let finalContent = prefix;

// Remove trailing brace/bracket from prefix if present
finalContent = finalContent.trim().replace(/\];\s*$/, '');

// Add the 3 remaining products (the ones I added in nuclear_reconstruct.mjs)
productsData.forEach(p => {
    finalContent += `  ,\n  {\n    id: "${p.id}",\n    name: "${p.name}",\n    shortDescription: \`${p.shortDescription}\`,\n    descriptionHtml: \`${p.descriptionHtml}\`,\n    brand: "${p.brand}",\n    category: "${p.category}",\n    tags: ${JSON.stringify(p.tags)},\n    price: ${p.price},\n    oldPrice: ${p.oldPrice},\n    image: "${p.image}"\n  }`;
});

finalContent += suffix;

// 6. Write to File
fs.writeFileSync(outputPath, finalContent, 'utf8');
console.log('Reconstruction v3 complete. Fixed Lithuanian characters.');
