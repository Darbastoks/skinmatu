import fs from 'fs';
import path from 'path';

const PRODUCTS_PATH = path.join(process.cwd(), 'src/data/products.ts');

const NOON_DATA = [
  {
    "name": "Noon c-foaming prausiklis, 200 ml, visų tipų odai",
    "shortDescription": "Švelnus, putojantis veido prausiklis su vitaminu C, skirtas giliam nešvarumų valymui ir odos skaistinimui.",
    "descriptionHtml": "<p>NOON Aesthetics C-Cleanser Foam yra švelnios tekstūros, giliai valantis putojantis veido prausiklis su vitaminu C, tinkantis visiems odos tipams. Jis efektyviai pašalina nešvarumus ir riebalų perteklių, nesausindamas odos, tuo pačiu suteikdamas jai švelnumo, gaivumo ir sveiko skaistumo pojūtį.</p><p><strong>Naudojimas:</strong> Užtepkite nedidelį kiekį putų ant sudrėkintos veido odos. Švelniai masažuokite sukamaisiais judesiais. Kruopščiai nuplaukite drungnu vandeniu. Rekomenduojama naudoti ryte ir/arba vakare.</p>"
  },
  {
    "name": "Noon Anti-Aging Peptide Complex ampulė, 15 ml",
    "shortDescription": "Intensyvi jauninanti priemonė su biomimetiniais peptidais, skatinanti kolageno sintezę ir gerinanti odos elastingumą.",
    "descriptionHtml": "<p>Šis peptidų kompleksas veikia kaip galinga ampulė, padedanti pastebimai mažinti raukšles, stangrinti suglebusią odą bei palaikyti jos stuktūrą. Priemonė suteikia veidui lygesnę, tvirtesnę ir gerokai jaunatviškesnę išvaizdą, saugodama odą nuo ankstyvų senėjimo požymių.</p><p><strong>Naudojimas:</strong> Užtepkite nedidelį kiekį priemonės ant švarios veido, kaklo ir dekoltė srities odos. Švelniai įmasažuokite, kol visiškai susigers. Naudokite ryte ir/arba vakare prieš tepant įprastą veido kremą.</p>"
  },
  {
    "name": "Noon CYS-Brightening Complex ampulė, 15 ml",
    "shortDescription": "Pažangi depigmentacinė priemonė su 6% cisteamino HCl, efektyviai šviesinanti tamsias dėmes ir hiperpigmentaciją.",
    "descriptionHtml": "<p>CYS-Brightening Complex yra revoliucinė priemonė su MelanoShield™ technologija, sukurta kovai su melazma ir po uždegimine hiperpigmentacija. Ji suvienodina odos atspalvį ir šviesina net įsisenėjusias pigmentines dėmes, pasižymėdama raminamuoju poveikiu, kuris mažina procedūros diskomfortą.</p><p><strong>Naudojimas:</strong> Ploną sluoksnį priemonės tolygiai paskirstykite ant švarios ir sausos veido odos. Palikite veikti 15 minučių. Nuplaukite drungnu vandeniu naudodami švelnų prausiklį. Nusausinkite odą ir patepkite drėkinamuoju kremu. Naudokite vieną kartą per dieną, geriausia vakare.</p>"
  },
  {
    "name": "Noon TXA-Brightening Complex ampulė, 15 ml",
    "shortDescription": "Galingas šviesinamasis serumas su 10% traneksamo rūgštimi, skirtas pigmentacijos korekcijai ir odos barjero stiprinimui.",
    "descriptionHtml": "<p>Šis kompleksas derina aukštą traneksamo rūgšties koncentraciją su odą šviesinančiais ir raminančiais ingredientais (glabridinu). Priemonė ypač veiksmingai mažina aktyvią hiperpigmentaciją, reguliuoja melanino gamybą ir suvienodina odos toną, kartu drėkindama ir stiprindama apsauginį odos barjerą.</p><p><strong>Naudojimas:</strong> Kelis lašus serumo tolygiai paskirstykite ant švarios veido odos, ypač dėmesio skirdami pigmentuotoms vietoms. Naudokite ryte ir vakare. Dienos metu būtina naudoti apsauginį kremą nuo saulės (SPF).</p>"
  },
  {
    "name": "mini Noon MicroSoft veido prausiklis, 15 ml",
    "shortDescription": "Švelnus mikroemulsinis prausiklis, efektyviai nuvalantis makiažą, SPF likučius ir saugantis odos drėgmės balansą.",
    "descriptionHtml": "<p>NOON Aesthetics Micro-Soft yra mikroemulsinis veido prausiklis, kuris švelniai, bet efektyviai pašalina visų tipų nešvarumus, įskaitant vandeniui atsparų makiažą. Sudėtyje esantys emolientai neleidžia odai išsausėti ir palaiko natūralų hidrolipidinį sluoksnį, todėl oda po prausimo tampa minkšta ir sudrėkinta.</p><p><strong>Naudojimas:</strong> Nedidelį kiekį produkto užtepkite ant sudrėkintos veido odos, švelniai masažuokite sukamaisiais judesiais, tuomet nuskalaukite drungnu vandeniu. Tinka naudoti kasdien, ryte ir vakare.</p>"
  }
];

function escapeBackticks(str) {
    if (!str) return '';
    return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function mergeData() {
    let productsTs = fs.readFileSync(PRODUCTS_PATH, 'utf8');
    let updatedCount = 0;

    const productRegex = /({[\s\S]+?})[,]/g;
    
    productsTs = productsTs.replace(productRegex, (match, block) => {
        const nameMatch = block.match(/name:\s*"([^"]+)"/);
        if (!nameMatch) return match;
        
        const internalName = nameMatch[1];
        
        const found = NOON_DATA.find(s => s.name === internalName);
        
        if (found) {
            updatedCount++;
            let updatedBlock = block;
            
            const shortDesc = escapeBackticks(found.shortDescription || '');
            const descHtml = escapeBackticks(found.descriptionHtml);
            
            if (updatedBlock.includes('shortDescription:')) {
                updatedBlock = updatedBlock.replace(/shortDescription:\s*"[^"]*"/, `shortDescription: "${shortDesc.replace(/"/g, '\\"')}"`);
            } else {
                updatedBlock = updatedBlock.replace(/(name:\s*"[^"]*",)/, `$1\n    shortDescription: "${shortDesc.replace(/"/g, '\\"')}",`);
            }
            
            if (updatedBlock.includes('descriptionHtml:')) {
                updatedBlock = updatedBlock.replace(/descriptionHtml:\s*`[\s\S]*?`/, `descriptionHtml: \`${descHtml}\``);
            } else {
                updatedBlock = updatedBlock.replace(/(name:\s*"[^"]*",)/, `$1\n    descriptionHtml: \`${descHtml}\`,`);
            }
            
            return updatedBlock + ',';
        }
        
        return match;
    });

    fs.writeFileSync(PRODUCTS_PATH, productsTs);
    console.log(`\nSuccessfully updated ${updatedCount} Noon products in products.ts.`);
}

mergeData();
