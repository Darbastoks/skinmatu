
import fs from 'fs';
import path from 'path';

// 1. Load original catalog
const productsPath = 'c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/src/data/products.ts';
let productsContent = fs.readFileSync(productsPath, 'utf8');

// 2. Load missing products and verified data
const missingProducts = JSON.parse(fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/missing_products.json', 'utf8'));
const final13 = JSON.parse(fs.readFileSync('c:/Users/rokas/OneDrive/Desktop/Duplicate Site/skinmatu/final_scraped_descriptions.json', 'utf8'));

// The 19 scraped products from the subagent
const batch19Raw = {
  "rituale-x-reviderm-odos-prieziuros-rinkinys-sukurtas-rozines-paveiktai-odai": {
    "shortDescription": "Profesionalus rinkinys jautriai ir rožinės paveiktai odai, kuris mažina paraudimą, stiprina kapiliarus ir atkuria odos komfortą bei natūralų atsparumą.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Rituale x Reviderm odos priežiūros rinkinys sukurtas rožinės paveiktai odai<br> Rituale kosmetologių sudarytas profesionalus Reviderm rinkinys, skirtas jautriai, sudirgusiai, į paraudimą ir rožinę linkusiai odai. Kruopščiai parinktas produktų derinys padeda mažinti uždegiminius procesus, stiprina kapiliarus, ramina odą ir atkuria jos apsauginį barjerą.<br> Produktai be kvapiklių ir dažiklių, tinkami itin jautriai odai.<br> Pastaba: prekė gali būti pristatyta kitokiame įpakavime nei matoma nuotraukoje.</p><p>Rinkinį sudaro:<br> Reviderm Couperose Therapy Serum 2, 30 ml<br> Lengvos tekstūros serumas su VEGFstop kompleksu, kuris padeda stabilizuoti kapiliarus ir mažinti paraudimą. Neurokosmetinis antistresinis kompleksas ramina odą, o antioksidantas Pycnogenol® (OPC) apsaugo nuo laisvųjų radikalų ir stiprina kraujagyslių sieneles.<br> Poveikis: sumažėjęs paraudimas, subalansuota ir atsparesnė oda.</p><p>Reviderm Couperose Therapy Cream, 50 ml<br> Kremas su odai identiškais lipidais atkuria pažeistą apsauginį barjerą, stabilizuoja kapiliarus ir mažina išsiplėtusių kraujagyslių matomumą. Neurokosmetiniai ingredientai greitai pašalina tempimo ir deginimo pojūtį.<br> Poveikis: sumažėjęs paraudimas, stipresnė ir komfortiškesnė oda.</p><p>Reviderm Couperose Therapy Mask, 50 ml<br> Intensyvi raminamoji kaukė su VEGFstop ir neuropeptidais padeda stiprinti kapiliarų sieneles, mažina raudonį ir diskomfortą.<br> Poveikis: nuraminta, lygesnė, mažiau reaktyvi oda.</p><p>Pagrindiniai privalumai:<br> Mažina paraudimą ir uždegiminius procesus</p><p>Stabilizuoja kapiliarus</p><p>Stiprina odos apsauginį barjerą</p><p>Saugo nuo laisvųjų radikalų poveikio</p><p>Ramina ir mažina jautrumą</p><p>Tinka rožinės paveiktai ir itin jautriai odai</p><p>Kam tinka:<br> Jautriai, sudirgusiai odai<br> Rožinės (kuperozės) paveiktai odai<br> Odai su matomu paraudimu ir kapiliarų išsiplėtimu</p><p>Naudojimas:<br> Ryto ir vakaro rutina:<br> Nuprauskite odą ir tonizuokite.</p><p>Tepkite 2–3 lašus Couperose Therapy Serum 2 ant veido ir kaklo, leiskite įsigerti.</p><p>Užbaikite ritualą Couperose Therapy Cream – švelniai įmasažuokite.</p><p>2–3 kartus per savaitę:<br> Naudokite Couperose Therapy Mask – tepkite ant veido, kaklo ir dekoltė, palaikykite 15 min. ir nuplaukite šiltu vandeniu.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 30 ml + 50 ml + 50 ml<br> Produkto tipas: serumas, kremas, kaukė</p>"
  },
  "reviderm-pro-microbiome-oily-skin-mikrobiomos-koncentratas-riebiai-odai-30-ml": {
    "shortDescription": "Mikrobiomos balansavimo koncentratas riebiai odai, kuris reguliuoja sebumą, mažina blizgesį ir stiprina natūralią odos apsaugą.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Reviderm Pro Microbiome Oily Skin mikrobiomos koncentratas riebiai odai, 30 ml<br> Inovatyvus mikrobiomos „booster’is“ riebiai ir mišriai odai, skirtas odos mikrofloros balansavimui ir sebumo reguliavimui. Mikrobioninis kompleksas I.L.N. padeda palaikyti sveiką odos mikroklimatą, mažina blizgesį ir saugo nuo nešvarumų kaupimosi.</p><p>Kodėl verta rinktis:<br> Šis koncentratas veikia odos mikroterpėje – stiprina natūralų apsauginį barjerą, palaiko sveiką bakterinę pusiausvyrą ir padeda normalizuoti riebalų išsiskyrimą. Priemonė turi antioksidacinį poveikį, mažina drėgmės netekimą ir prisideda prie lygesnės, skaistesnės odos išvaizdos.<br> Tai nėra klasikinis serumas – tai aktyvus „booster’is“, maišomas su jūsų naudojamu kremu.</p><p>Pagrindiniai privalumai:<br> Balansuoja odos mikrobiomą</p><p>Normalizuoja sebumo gamybą</p><p>Mažina odos blizgesį</p><p>Stiprina apsauginį barjerą</p><p>Veikia kaip probiotinis kompleksas</p><p>Turi antioksidacinį poveikį</p><p>Padeda sumažinti drėgmės netekimą</p><p>Veikliosios medžiagos:<br> I.L.N. mikrobioninis kompleksas – balansuoėja mikroflorą<br> Inulinas ir alfa-gliukano oligosacharidai – prebiotinis poveikis<br> Lactobacillus fermentas – stiprina mikrobiomos pusiausvyrą<br> Potassium Azeloyl Diglycinate – reguliuoja sebumą, skaistina<br> Hialurono rūgštis – drėkina<br> Morinda Citrifolia ląstelių lizatas – antioksidacinė apsauga</p><p>Kam tinka:<br> Riebiai odai<br> Mišriai odai<br> Odai su blizgesiu ir išsiplėtusiomis poromis<br> Esant mikrobiomos disbalansui</p><p>Naudojimas:<br> Paruoškite odą – naudokite prausiklį, toniką ir serumas/ampulę.<br> Į delne esantį dieninį ar naktinį kremą įlašinkite 1 pilną pipetę koncentrato.<br> Sumaišykite ir aplikuokite ant veido bei kaklo odos.</p><p>⚠️ Nelašinkite į rūgštinius produktus.<br> Puikiai dera su retinolį turinčiomis priemonėmis.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 30 ml<br> Produkto tipas: mikrobiomos koncentratas (booster’is)</p>"
  },
  "reviderm-neuro-sensitive-de-stress-eye-cream-apyakiu-kremas-15-ml": {
    "shortDescription": "Raminantis ir drėkinantis paakių kremas jautriai odai, padedantis stiprinti odos barjerą, mažinti tamsius ratilus ir suteikti komforto bei gaivumo paakių sričiai.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Reviderm Neuro Sensitive De-Stress Eye Cream apyakių kremas, 15 ml<br> Raminamasis ir apsauginis paakių kremas jautriai, sausai ir sudirgusiai paakių odai. Padeda stiprinti odos barjerą, mažinti tamsius ratilus ir suteikia komforto pojūtį.</p><p>Kodėl verta rinktis:<br> Aukšto rūgštingumo bazė su DMS Cera+ ir biomimetiniais peptidais stiprina odos apsauginį barjerą, ramina sudirgusią paakių sritį ir padeda išlyginti smulkias raukšleles, atsirandančias dėl drėgmės stokos. Formulė gerina odos toleranciją, mažina diskomfortą ir suteikia gaivesnės, tolygesnės paakių odos išvaizdą.</p><p>Pagrindiniai privalumai:<br> Stiprina paakių odos apsauginį barjerą</p><p>Mažina tamsius ratilus ir nuovargio požymius</p><p>Intensyviai drėkina ir ramina</p><p>Lygina smulkias raukšleles</p><p>Gerina odos komfortą ir toleranciją</p><p>Tinka jautriai paakių sričiai</p><p>Veikliosios medžiagos:<br> DMS Cera+ ir keramidai – stiprina odos barjerą<br> Biomimetiniai peptidai – ramina ir mažina sudirgimą<br> Hialurono rūgštis – drėkina ir putlina<br> Ectoin – apsaugo ir ramina odą<br> Pantenolis ir bisabololis – mažina sudirgimą<br> Pink Siris žievės ekstraktas – padeda mažinti patamsėjimus</p><p>Kam tinka:<br> Jautriai ir sausai paakių odai<br> Sudirgusiai ar pavargusiai paakių sričiai<br> Matomiems tamsiems ratilams<br> Ieškantiems raminančios ir barjerą stiprinančios priežiūros</p><p>Naudojimas:<br> Ryte ir vakare tepkite ant švarios paakių odos.<br> Švelniai įtapšnokite pirštų galiukais, kol susigers.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 15 ml<br> Produkto tipas: paakių kremas</p>"
  },
  "reviderm-aha-toner-valomasis-tonikas-su-rugstimi-200ml": {
    "shortDescription": "Eksfolijuojantis tonikas su AHA rūgštimis, padedantis valyti poras, reguliuoti sebumą ir suteikti odai skaistumo bei lygumo.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Reviderm AHA Toner valomasis tonikas su rūgštimi, 200 ml<br> Valomasis tonikas su AHA vaisių rūgštimis, padedantis pašalinti negyvas odos ląsteles, nešvarumus ir reguliuoti sebumo išsiskyrimą. Suteikia odai skaistumo, lygumo ir švaros pojūtį.</p><p>Kodėl verta rinktis:<br> Daugiafunkcinė formulė su glikolio, pieno ir obuolių rūgštimis švelniai eksfolijuoja odą, skatina ląstelių atsinaujinimą ir palaiko odos švytėjimą. Niacinamidas ir drėkinantys komponentai padeda išlaikyti odos balansą, o reguliariai naudojant oda tampa lygesnė, švaresnė ir skaistesnė.</p><p>Pagrindiniai privalumai:<br> Švelniai eksfolijuoja ir atnaujina odą<br> Reguliuoja riebalų išsiskyrimą<br> Padeda mažinti bėrimus ir inkštirus<br> Skaistina ir lygina odos tekstūrą<br> Palaiko optimalų drėgmės balansą<br> Paruošia odą tolimesnei priežiūrai</p><p>Veikliosios medžiagos:<br> Glikolio rūgštis – eksfolijuoja ir skatina atsinaujinimą<br> Pieno rūgštis – drėkina ir lygina odą<br> Obuolių rūgštis – suteikia skaistumo<br> Niacinamidas – reguliuoja sebumą ir stiprina odos barjerą<br> Medus ir augaliniai ekstraktai – ramina ir drėkina</p><p>Kam tinka:<br> Mišriai ir riebiai odai<br> Normaliai odai<br> Odai su išsiplėtusiomis poromis<br> Odai linkusiai į bėrimus ir inkštirus</p><p>Naudojimas:<br> Sudrėkinkite vatos diskelį toniku.<br> Tepkite veido, kaklo ir dekoltė odą ryte ir vakare po prausiklio.<br> Nenuplaukite.<br> Naudojant dieną rekomenduojama SPF apsauga.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 200 ml<br> Produkto tipas: tonikas</p>"
  },
  "reviderm-anti-glycation-opc-concentrate-antiglikacinis-veido-koncentratas-30-ml": {
    "shortDescription": "Antioksidantų gausus koncentratas su OPC padeda saugoti odą nuo aplinkos poveikio, skaistina ir palaiko stangresnę, lygesnę odos išvaizdą.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Reviderm Anti-glycation OPC Concentrate antiglikacinis veido koncentratas, 30 ml<br> Daugiafunkcinis veido koncentratas su stipriais OPC antioksidantais padeda apsaugoti odą nuo oksidacinio streso ir aplinkos veiksnių, palaiko elastingesnę bei skaistesnę odos išvaizdą.</p><p>Kodėl verta rinktis:<br> Pažangi formulė su vynuogių sėklų OPC antioksidantais, karnosinu ir hialurono rūgštimi padeda saugoti odą nuo laisvųjų radikalų bei antiglikacinių procesų. Priemonė prisideda prie lygesnės, stangresnės ir tolygesnio tono odos išvaizdos, suteikia jai gyvybingumo ir komforto.</p><p>Pagrindiniai privalumai:<br> Padeda apsaugoti odą nuo oksidacinio streso<br> Prisideda prie stangresnės ir elastingesnės odos išvaizdos<br> Skaistina ir tolygina odos toną<br> Mažina pavargusios odos požymių matomumą<br> Drėkina ir palaiko odos komfortą<br> Lengva, greitai susigerianti tekstūra</p><p>Veikliosios medžiagos:<br> OPC (pušies žievės ekstraktas) – stiprus antioksidantas<br> Karnosinas – antiglikacinis poveikis, padeda saugoti kolageną<br> Hialurono rūgštis – drėkina ir suteikia putlumo pojūtį<br> Citrinų vaisių vanduo – suteikia skaistumo<br> Vitaminas E – antioksidacinė apsauga</p><p>Kam tinka:<br> Visiems odos tipams<br> Brandžiai odai<br> Papilkėjusiai, pavargusiai odai<br> Odai, kuriai reikia antioksidacinės apsaugos</p><p>Naudojimas:<br> Tepkite ant švarios veido ir kaklo odos po prausiklio ir toniko.<br> Naudokite ryte ir vakare.<br> Tęskite rutiną su serumu ar kremu.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 30 ml<br> Produkto tipas: veido serumas / koncentratas</p>"
  },
  "reviderm-body-styler-slimming-fluid-liekninamasis-fluidas-200-ml": {
    "shortDescription": "Stangrinantis ir liekninamasis kūno fluidas su kofeinu ir karnitinu, padedantis mažinti celiulito matomumą, glotninti odą ir gerinti kūno kontūrus.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Reviderm Body Styler Slimming Fluid liekninamasis fluidas, 200 ml<br> Liekninamasis ir stangrinantis kūno fluidas, sukurtas odos tonusui gerinti ir celiulito požymiams mažinti. Lengvos tekstūros formulė greitai įsigeria ir tinka kasdienei probleminių kūno vietų priežiūrai.</p><p>Kodėl verta rinktis:<br> Formulėje esantys kofeinas, karnitinas ir antiglikacijos kompleksas (AGF) padeda skatinti riebalų apykaitos procesus, gerinti odos tonusą ir elastingumą. Reguliariai naudojant oda tampa lygesnė, stangresnė, o celiulito požymiai – mažiau pastebimi.</p><p>Pagrindiniai privalumai:<br> Padeda mažinti celiulito matomumą</p><p>Stangrina ir glotnina odą</p><p>Gerina odos tonusą ir elastingumą</p><p>Skatina lipolitinius procesas</p><p>Greitai įsigerianti, lengva tekstūra</p><p>Tinka kasdienei kūno priežiūrai</p><p>Veikliosios medžiagos:<br> Kofeinas – stimuliuoja mikrocirkuliaciją ir riebalų skaidymo procesus<br> Karnitinas – palaiko riebalų apykaitą<br> AGF antiglikacijos kompleksas – padeda apsaugoti odos audinius nuo priešlaikinio senėjimo<br> Žaliosios arbatos ekstraktas – antioksidacinė apsauga<br> Niacinamidas – gerina odos išvaizdą<br> Hialurono rūgštis – drėkina ir suteikia elastingumo</p><p>Kam tinka:<br> Visiems odos tipams<br> Esant celiulito požymiams<br> Norint stangresnės ir lygesnės kūno odos<br> Probleminėms kūno vietoms (šlaunys, sėdmenys, pilvas, rankos)</p><p>Naudojimas:<br> Tepkite masažuojamaisiais judesiais ant probleminių kūno vietų.<br> Naudokite ryte ir vakare, reguliariai.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 200 ml<br> Produkto tipas: liekninamasis kūno fluidas</p>"
  },
  "reviderm-growth-factor-cell-renewal-veido-fluidas-50-ml": {
    "shortDescription": "Lengvas stangrinantis veido fluidas su augimo faktoriais, vitaminu C ir hialurono rūgštimi, kuris skatina odos atsinaujinimą, drėkina ir suteikia lygesnės, stangresnės odos išvaizdą.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Reviderm Growth Factor Cell Renewal veido fluidas, 50 ml<br> Lengvos tekstūros stangrinantis veido fluidas su inkapsuliuotais augimo faktoriais, vitaminu C ir acetilinta hialurono rūgštimi, skirtas odos atsinaujinimui ir elastingumui palaikyti. Priemonė padeda gerinti odos tekstūrą, suteikia putlinamąjį efektą ir palaiko jos gyvybingumą.</p><p>Kodėl verta rinktis:<br> Formulėje esantis liposomomis inkapsuliuotų augimo faktorių kompleksas padeda skatinti odos ląstelių atsinaujinimo procesus, o vitaminas C ir hialurono rūgštis prisideda prie lygesnės, stangresnės ir drėgnesnės odos išvaizdos. Lengva fluido tekstūra greitai susigeria ir neapsunkina odos.</p><p>Pagrindiniai privalumai:<br> Skatina odos atsinaujinimą ir regeneraciją<br> Gerina elastingumą ir stangrumą<br> Suteikia putlinamąjį, drėkinamąjį efektą<br> Lygina odos tekstūrą<br> Padeda palaikyti odos gyvybingumą<br> Greitai susigerianti, lengva tekstūra</p><p>Veikliosios medžiagos:<br> Augimo faktorių kompleksas – skatina ląstelių atsinaujinimą ir regeneraciją<br> Acetilinta hialurono rūgštis – intensyviai drėkina ir suteikia putlumo pojūtį<br> Vitaminas C (Ascorbyl Tetraisopalmitate) – padeda stangrinti ir skaistinti odą<br> Niacinamidas – gerina odos tonusą ir stiprina barjerą<br> Ceramidai ir skvalanas – palaiko odos apsaugines funkcijas<br> Pantenolis – ramina ir drėkina</p><p>Kam tinka:<br> Brandžiai ir elastingumą praradusiai odai<br> Visiems odos tipams<br> Odos atsinaujinimo ir stangrinimo priežiūrai<br> Kasdieniam naudojimui ryte ir vakare</p><p>Naudojimas:<br> Tepkite ant švarios veido ir kaklo odos po prausiklio, toniko ir serumo. Tolygiai paskirstykite ir leiskite įsigerti. Naudokite ryte ir vakare.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 50 ml<br> Produkto tipas: veido fluidas</p>"
  },
  "reviderm-eye-contouring-stangrinanti-apyakiu-prieziuros-priemone-15-ml": {
    "shortDescription": "Stangrinanti paakių priemonė su peptidais ir lipidais, kuri šviesina paakių spalvą, mažina paburkimą ir lygina raukšleles, suteikdama gaivesnę ir elastingesnę akių zonos išvaizdą.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Reviderm Eye Contouring stangrinanti apyakių priežiūros priemonė, 15 ml<br> Restruktūrizuojanti ir stangrinanti paakių srities priemonė, padedanti šviesinti patamsėjusius paakius, mažinti paburkimą ir lyginti smulkias raukšleles. Suteikia elastingumo, drėkina ir padeda išlaikyti jaunatviškesnę akių zonos išvaizdą.</p><p>Kodėl verta rinktis:<br> Pažangi antiglikacinė formulė padeda apsaugoti kolageno skaidulas nuo pažeidimų ir palaiko odos stangrumą. Odai identiški lipidai stiprina apsauginį barjerą, o šviesinamasis kompleksas gerina mikrocirkuliaciją ir suteikia skaistumo. Reguliariai naudojant paakių sritis atrodo lygesnė, gaivesnė ir labiau pailsėjusi.</p><p>Pagrindiniai privalumai:<br> Šviesina patamsėjusius paakius<br> Mažina paburkimą ir nuovargio požymius<br> Lygina smulkias raukšles<br> Stangrina ir gerina elastingumą<br> Drėkina ir maitina jautrią paakių odą<br> Padeda apsaugoti nuo ankstyvų senėjimo požymių</p><p>Veikliosios medžiagos:<br> Peptidų kompleksas – palaiko kolageno sintezę ir stangrumą<br> Ectoin – saugo odą nuo aplinkos poveikio ir drėkina<br> Niacinamidas – skaistina ir stiprina odos barjerą<br> Hialurono rūgštis – intensyviai drėkina ir suteikia putlumo<br> Ceramidai ir lipidai – stiprina apsauginę funkciją<br> Magnio askorbilfosfatas (vitamino C forma) – skaistina ir veikia kaip antioksidantas</p><p>Kam tinka:<br> Visiems odos tipams<br> Brandžiai ar sausai paakių odai<br> Esant patamsėjimams, paburkimui ar smulkioms raukšlėms<br> Kasdienei rytinei ir vakarinei priežiūrai</p><p>Naudojimas:<br> Nedidelį kiekį priemonės švelniai paskirstykite aplink akis.<br> Masažuokite link išorinio akies kampučio, kol įsigers.<br> Naudokite ryte ir vakare.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 15 ml<br> Produkto tipas: paakių kremas</p>"
  },
  "reviderm-secret-serum-concealer-maskuoklis-6ml-1bg-vanilla": {
    "shortDescription": "Drėkinantis ir ilgai išliekantis maskuoklis, kuris tolygiai maskuoja netobulumus, nesubėga į raukšles ir suteikia natūraliai švytinčios odos efektą.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>REVIDERM Secret Serum Concealer maskuoklis, 6 ml – 1BG Vanilla<br> Kreminės tekstūros maskuoklis, kuris lengvai susilieja su oda, efektyviai maskuoja netobulumus ir suteikia natūraliai švytinčios odos efektą. Ilgai išliekanti formulė nesubėga į raukšleles ir išlaiko komforto pojūtį visą dieną.</p><p>Kodėl verta rinktis:<br> Švelnios tekstūros maskuoklis užtikrina tolygų padengimą ir natūralų rezultatą. Sudėtyje esantys aktyvieji ingredientai padeda palaikyti odos drėgmę, elastingumą ir apsaugą nuo aplinkos poveikio, todėl oda atrodo lygesnė ir gaivesnė.</p><p>Pagrindiniai privalumai:<br> Efektyviai maskuoja patamsėjimus ir netobulumus<br> Nesubėga į smulkias raukšleles<br> Ilgai išliekantis rezultatas<br> Suteikia natūralų švytėjimą<br> Drėkina ir palaiko odos elastingumą<br> Lengva, su oda susiliejanti tekstūra</p><p>Veikliosios medžiagos:<br> Hialurono rūgštis – padeda palaikyti drėgmę ir elastingumą<br> Kofeinas – suteikia gaivumo ir skaistumo pojūtį<br> Vitaminas E – antioksidacinė apsauga<br> Lizinai ir mineralai – padeda palaikyti odos komfortą</p><p>Kam tinka:<br> Visiems odos tipams<br> Paakių zonai ir veido netobulumams maskuoti<br> Norint natūralaus, švytinčio rezultato<br> Kasdieniam makiažui</p><p>Naudojimas:<br> Tepkite maskuoklį integruotu aplikatoriumi, pirštų galiukais arba šepetėliu ant norimų maskuoti vietų. Švelniai išsklaidykite, kol susilies su oda.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 6 ml<br> Produkto tipas: makiažo priemonė</p>"
  },
  "reviderm-secret-serum-concealer-maskuoklis-6ml-2b-linen": {
    "shortDescription": "Drėkinantis ir ilgai išliekantis maskuoklis, kuris tolygiai maskuoja netobulumus, nesubėga į raukšles ir suteikia natūraliai švytinčios odos efektą.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>REVIDERM Secret Serum Concealer maskuoklis, 6 ml – 2B Linen<br> Kreminės tekstūros maskuoklis, kuris lengvai susilieja su oda, efektyviai maskuoja netobulumus ir suteikia natūraliai švytinčios odos efektą. Ilgai išliekanti formulė nesubėga į raukšleles ir išlaiko komforto pojūtį visą dieną.</p><p>Kodėl verta rinktis:<br> Švelnios tekstūros maskuoklis užtikrina tolygų padengimą ir natūralų rezultatą. Sudėtyje esantys aktyvieji ingredientai padeda palaikyti odos drėgmę, elastingumą ir apsaugą nuo aplinkos poveikio, todėl oda atrodo lygesnė ir gaivesnė.</p><p>Pagrindiniai privalumai:<br> Efektyviai maskuoja patamsėjimus ir netobulumus<br> Nesubėga į smulkias raukšleles<br> Ilgai išliekantis rezultatas<br> Suteikia natūralų švytėjimą<br> Drėkina ir palaiko odos elastingumą<br> Lengva, su oda susiliejanti tekstūra</p><p>Veikliosios medžiagos:<br> Hialurono rūgštis – padeda palaikyti drėgmę ir elastingumą<br> Kofeinas – suteikia gaivumo ir skaistumo pojūtį<br> Vitaminas E – antioksidacinė apsauga<br> Lizinai ir mineralai – padeda palaikyti odos komfortą</p><p>Kam tinka:<br> Visiems odos tipams<br> Paakių zonai ir veido netobulumams maskuoti<br> Norint natūralaus, švytinčio rezultato<br> Kasdieniam makiažui</p><p>Naudojimas:<br> Tepkite maskuoklį integruotu aplikatoriumi, pirštų galiukais arba šepetėliu ant norimų maskuoti vietų. Švelniai išsklaidykite, kol susilies su oda.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 6 ml<br> Produkto tipas: makiažo priemonė</p>"
  },
  "reviderm-secret-serum-concealer-maskuoklis-6ml-4bg-golden-tan": {
    "shortDescription": "Drėkinantis ir ilgai išliekantis maskuoklis, kuris tolygiai maskuoja netobulumus, nesubėga į raukšles ir suteikia natūraliai švytinčios odos efektą.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>REVIDERM Secret Serum Concealer maskuoklis, 6 ml – 4BG Golden Tan<br> Kreminės tekstūros maskuoklis, kuris lengvai susilieja su oda, efektyviai maskuoja netobulumus ir suteikia natūraliai švytinčios odos efektą. Ilgai išliekanti formulė nesubėga į raukšleles ir išlaiko komforto pojūtį visą dieną.</p><p>Kodėl verta rinktis:<br> Švelnios tekstūros maskuoklis užtikrina tolygų padengimą ir natūralų rezultatą. Sudėtyje esantys aktyvieji ingredientai padeda palaikyti odos drėgmę, elastingumą ir apsaugą nuo aplinkos poveikio, todėl oda atrodo lygesnė ir gaivesnė.</p><p>Pagrindiniai privalumai:<br> Efektyviai maskuoja patamsėjimus ir netobulumus<br> Nesubėga į smulkias raukšleles<br> Ilgai išliekantis rezultatas<br> Suteikia natūralų švytėjimą<br> Drėkina ir palaiko odos elastingumą<br> Lengva, su oda susiliejanti tekstūra</p><p>Veikliosios medžiagos:<br> Hialurono rūgštis – padeda palaikyti drėgmę ir elastingumą<br> Kofeinas – suteikia gaivumo ir skaistumo pojūtį<br> Vitaminas E – antioksidacinė apsauga<br> Lizinai ir mineralai – padeda palaikyti odos komfortą</p><p>Kam tinka:<br> Visiems odos tipams<br> Paakių zonai ir veido netobulumams maskuoti<br> Norint natūralaus, švytinčio rezultato<br> Kasdieniam makiažui</p><p>Naudojimas:<br> Tepkite maskuoklį integruotu aplikatoriumi, pirštų galiukais arba šepetėliu ant norimų maskuoti vietų. Švelniai išsklaidykite, kol susilies su oda.</p><p>Papildoma informacija:<br> Gamintojas: Reviderm<br> Kilmės šalis: Vokietija<br> Talpa: 6 ml<br> Produkto tipas: makiažo priemonė</p>"
  },
  "cuskin-lokaliu-odos-netolygumu-gelis-spuoguotai-odai-10g": {
    "shortDescription": "Koncentruotas lokalaus poveikio gelis spuoguotai odai padeda mažinti uždegimus, reguliuoti sebumą ir greičiau nuraminti problemines vietas.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Kodėl verta:<br> Lokaliai veikiantis gelis padeda greitai reaguoti į spuogus ir odos netolygumus – ramina uždegimus, reguliuoja sebumą ir palaiko švaresnės, lygesnės odos pojūtį. Koncentruota formulė tinka tepti tik probleminėse vietose, todėl veikia tiksliai ir efektyviai.</p><p>Kam skirta / Odos tipas:<br> Odos tipas: riebi, mišri, probleminei odai<br> Odos būklė: spuoguota, linkusi į uždegimus<br> Tinka: lokaliai spuogų priežiūrai, sebumo kontrolei<br> Tinka jautriai odai: taip (naudoti tik lokaliai)</p><p>Pagrindinės veikliosios medžiagos:<br> Salix Alba (gluosnio žievė), Salicilo rūgštis, Cinko PCA, Niacinamidas, Centella asiatica, Madecassoside, Chlorella ekstraktas, Ferulo rūgštis, Vitaminas U</p><p>Nauda odai:<br> Padeda greičiau mažinti spuogus, ramina uždegimus, kontroliuoja riebalų išsiskyrimą, valo poras ir stiprina odos barjerą.</p><p>Naudojimas:<br> Ant švarios odos lokaliai užtepkite nedidelį kiekį gelio ant spuogo ar probleminės vietos. Naudokite kelis kartus per dieną.</p><p>Talpa: 10 g. Gamintojas: CUSKIN, Pietų Korėja.</p>"
  },
  "cuskin-valomasis-ir-raminamasis-veido-serumas-probleminei-spuoguotai-odai-30ml": {
    "shortDescription": "Balansuojantis serumas riebiai ir spuoguotai odai padeda reguliuoti sebumą, raminti uždegimus ir stiprinti odos barjerą.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Kodėl verta:<br> Balansuojantis serumas probleminei ir spuoguotai odai padeda reguliuoti riebalų išsiskyrimą, raminti sudirgimus ir palaikyti švaresnės, lygesnės odos pojūtį. Lengva formulė drėkina, stiprina odos barjerą ir padeda išlaikyti komfortą kasdienėje priežiūroje.</p><p>Pagrindinės veikliosios medžiagos:<br> Vitaminas B6, Centella asiatica, Chlorella ekstraktas, Sophora šaknies ekstraktas, Kiečio ekstraktas, Lactobacillus fermentas, Cinko PCA, Pantenolis.</p><p>Nauda odai:<br> Reguliuoja riebalų išsiskyrimą, ramina sudirgimus, padeda mažinti spuogus, drėkina ir stiprina apsauginį barjerą.</p><p>Naudojimas:<br> Po veido prausimo ir toniko užtepkite nedidelį kiekį serumo ant veido. Švelniai paskirstykite ir įtapšnokite, kol susigers.</p><p>Talpa: 30 ml. Gamintojas: CUSKIN, Pietų Korėja.</p>"
  },
  "cuskin-valomasis-veido-tonikas-probleminei-spuoguotai-odai-200ml": {
    "shortDescription": "Balansuojantis tonikas riebiai ir spuoguotai odai padeda reguliuoti sebumą, raminti sudirgimus ir palaikyti odos švaros bei komforto pojūtį.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Kodėl verta:<br> Balansuojantis tonikas probleminei ir spuoguotai odai padeda reguliuoti riebalų išsiskyrimą, ramina sudirgimus ir atkuria odos balansą po valymo. Švelni formulė palaiko drėgmę, padeda išlaikyti švaresnės ir ramesnės odos pojūtį.</p><p>Pagrindinės veikliosios medžiagos:<br> Artemisia ekstraktas, Centella asiatica, Chlorella ekstraktas, Sophora šaknies ekstraktas, Kiaušinio trynio ekstraktas, Lactobacillus fermentas, Jūros vanduo.</p><p>Nauda odai:<br> Reguliuoja sebumo išsiskyrimą, ramina sudirgimus, padeda mažinti spuogus, drėkina ir paruošia odą tolimesnei priežiūrai.</p><p>Naudojimas:<br> Po prausimo paskirstykite toniką ant veido delnais arba vatos diskeliu. Naudokite ryte ir vakare.</p><p>Talpa: 200 ml. Gamintojas: CUSKIN, Pietų Korėja.</p>"
  },
  "cuskin-valomosios-veido-putos-probleminei-spuoguotai-odai-180-ml": {
    "shortDescription": "Giliai valančios putos probleminei ir spuoguotai odai padeda pašalinti nešvarumus, perteklinį sebumą ir palaikyti odos balansą.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Kodėl verta:<br> Giliai valančios putos probleminei ir spuoguotai odai padeda pašalinti perteklinį sebumą, nešvarumus ir negyvas ląsteles, nepažeidžiant odos drėgmės balanso. Švelni formulė su priešuždegiminiais ingredientais ramina odą.</p><p>Pagrindinės veikliosios medžiagos:<br> AF-T™ kompleksas, Salicilo rūgštis, Centella asiatica, Kiaušinio trynio ekstraktas, Lactobacillus fermentas, Zinc PCA.</p><p>Nauda odai:<br> Giliai valo poras, mažina sebumo perteklių, ramina sudirgimus ir padeda kovoti su spuogais.</p><p>Naudojimas:<br> Masažuokite 1–2 paspaudimus putų ant drėgno veido, nuplaukite šiltu vandeniu. Naudokite ryte ir vakare.</p><p>Talpa: 180 ml. Gamintojas: CUSKIN, Pietų Korėja.</p>"
  },
  "cuskin-serumas-su-10-niacinamido-vitaminu-c-ir-hialurono-rugstimi-50g": {
    "shortDescription": "Skaistinantis serumas su 10 % niacinamido ir vitaminu C padeda tolyginti odos toną, mažinti papilkėjimą ir palaikyti drėgmę.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Kodėl verta:<br> Koncentruotas serumas su 10 % niacinamido, vitaminu C ir hialurono rūgštimi padeda skaistinti odą, tolyginti toną ir palaikyti drėgmės balansą. Lengva formulė gerina odos išvaizdą.</p><p>Pagrindinės veikliosios medžiagos:<br> Niacinamidas 10 %, Vitaminas C, hialurono rūgštis, Glutationas, Pantenolis, Adenozinas.</p><p>Nauda odai:<br> Skaistina ir gerina toną, mažina papilkėjimą, drėkina ir reguliuoja riebumą.</p><p>Naudojimas:<br> Užlašinkite kelis lašus ant švarios, toniku sudrėkintos odos ryte ir vakare. Naudojant dieną, būtina SPF apsauga.</p><p>Talpa: 50 g. Gamintojas: CUSKIN, Pietų Korėja.</p>"
  },
  "cuskin-funkcinis-paakiu-kremas-su-kalamino-kapsulemis-20ml": {
    "shortDescription": "Skaistinantis paakių kremas su kalamino kapsulėmis padeda išlyginti smulkias raukšleles, drėkina ir suteikia gaivumo pavargusiai paakių zonai.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>Kodėl verta:<br> Paakių kremas su kalamino kapsulėmis skaistina, drėkina ir padeda vizualiai išlyginti smulkias raukšleles. Lengva kapsulinė formulė pagerina odos toną ir paakių srities vaizdą.</p><p>Pagrindinės veikliosios medžiagos:<br> Kalamino kapsulės, Niacinamidas, Adenozinas, Vario tripeptidas-1, EGF (augimo faktorius), hialurono rūgštis.</p><p>Nauda odai:<br> Skaistina paakių zoną, lygina raukšleles, drėkina ir suteikia gaivumo.</p><p>Naudojimas:<br> Nedidelį kiekį kremo švelniai įtapšnokite aplink akis po toniko. Naudokite ryte ir vakare.</p><p>Talpa: 20 ml. Gamintojas: CUSKIN, Pietų Korėja.</p>"
  },
  "oxygenceuticals-skin-barrier-fluid-veido-serumas-50ml": {
    "shortDescription": "OxygenCeuticals Skin Barrier Fluid – odos barjerą stiprinantis skystis jautriai silpnai ir pažeistai odai, jautriai odai, fluidas – Drėkina odą.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>OxygenCeuticals Skin Barrier Fluid – odos barjerą stiprinantis skystis jautriai silpnai ir pažeistai odai. Profesionali kosmetikos priemonė, skirta intensyviai ir tikslinei odos priežiūrai. Padeda spręsti odos senėjimo, jautrumo, dehidratacijos ar disbalanso problemas.</p><p>Pagrindinės veikliosios medžiagos:<br> Aktyvieji kompleksai (skatina regeneraciją), Drėkinamosios medžiagos, Raminamosios medžiagos.</p><p>Nauda odai:<br> Pagerina odos tekstūrą, suteikia skaistumo ir stiprina odos barjerą.</p><p>Naudojimas:<br> Naudoti pagal kosmetologo rekomendacijas ant švarios odos.</p><p>Talpa: 50ml. Gamintojas: OxygenCeuticals.</p>"
  },
  "cell-fusion-c-moisture-oxygen-drekinanti-emulsija-150-ml": {
    "shortDescription": "CELL FUSION C „MOISTURE OXYGEN“ DRĖKINANTI EMULSIJA – Drėkina odą, ramina sudirgimą. Išsirinkite savo odos tipui.",
    "descriptionHtml": "<h2>Aprašymas</h2><p>„Moisture Oxygen“ emulsija intensyviai drėkina bei atgaivina itin išsausėjusią odą, o jautrią odą padeda nuraminti. Greitai įsigeria ir nepalieka lipnumo jausmo. Veikliųjų medžiagų kompleksą sudaro trehalozė, alijošiaus sultys, bacilų fermentuotų sojos pupelių ekstraktas.</p><p>Pliusai:<br> – Vienu metu drėkina ir ramina;<br> – Tinka jautriai ir po procedūrų sudirgusiai odai;<br> – Nepalieka lipnumo.</p><p>Naudojimas:<br> Nedidelį kiekį emulsijos paskirstykite ant švarios veido odos, švelniai pamasažuokite.</p><p>Talpa: 80 ml. Gamintojas: Cell Fusion C, Pietų Korėja.</p>"
  }
};

const idMap = {
  "rituale-reviderm-rozines-rinkinys": "rituale-x-reviderm-odos-prieziuros-rinkinys-sukurtas-rozines-paveiktai-odai",
  "reviderm-pro-microbiome-oily": "reviderm-pro-microbiome-oily-skin-mikrobiomos-koncentratas-riebiai-odai-30-ml",
  "reviderm-neuro-sensitive-eye": "reviderm-neuro-sensitive-de-stress-eye-cream-apyakiu-kremas-15-ml",
  "reviderm-aha-toner": "reviderm-aha-toner-valomasis-tonikas-su-rugstimi-200ml",
  "reviderm-opc-concentrate": "reviderm-anti-glycation-opc-concentrate-antiglikacinis-veido-koncentratas-30-ml",
  "reviderm-body-styler-slimming": "reviderm-body-styler-slimming-fluid-liekninamasis-fluidas-200-ml",
  "reviderm-growth-factor-fluid": "reviderm-growth-factor-cell-renewal-veido-fluidas-50-ml",
  "reviderm-eye-contouring": "reviderm-eye-contouring-stangrinanti-apyakiu-prieziuros-priemone-15-ml",
  "reviderm-concealer-vanilla": "reviderm-secret-serum-concealer-maskuoklis-6ml-1bg-vanilla",
  "reviderm-concealer-linen": "reviderm-secret-serum-concealer-maskuoklis-6ml-2b-linen",
  "reviderm-concealer-golden-tan": "reviderm-secret-serum-concealer-maskuoklis-6ml-4bg-golden-tan",
  "cuskin-lokaliniu-gelis": "cuskin-lokaliu-odos-netolygumu-gelis-spuoguotai-odai-10g",
  "cuskin-valomasis-serumas": "cuskin-valomasis-ir-raminamasis-veido-serumas-probleminei-spuoguotai-odai-30ml",
  "cuskin-valomasis-tonikas": "cuskin-valomasis-veido-tonikas-probleminei-spuoguotai-odai-200ml",
  "cuskin-valomosios-putos": "cuskin-valomosios-veido-putos-probleminei-spuoguotai-odai-180-ml",
  "cuskin-niacinamido-serumas": "cuskin-serumas-su-10-niacinamido-vitaminu-c-ir-hialurono-rugstimi-50g",
  "cuskin-paakiu-kremas": "cuskin-funkcinis-paakiu-kremas-su-kalamino-kapsulemis-20ml",
  "oxygenceuticals-skin-barrier-fluid": "oxygenceuticals-skin-barrier-fluid-veido-serumas-50ml",
  "cell-fusion-c-moisture-oxygen": "cell-fusion-c-moisture-oxygen-drekinanti-emulsija-150-ml"
};

// 3. Create Master Dataset
const masterDataset = {};
Object.keys(final13).forEach(id => { masterDataset[id] = final13[id]; });
Object.keys(idMap).forEach(id => {
  const scrapedSlug = idMap[id];
  if (batch19Raw[scrapedSlug]) { masterDataset[id] = batch19Raw[scrapedSlug]; }
});

// 4. FIND THE CUT POINT
// We want to cut everything from the first of the 32 products.
const firstId = "reviderm-speed-glow-ampoule";
const cutMatch = productsContent.indexOf(`id: "${firstId}"`);
if (cutMatch === -1) {
  console.error("COULD NOT FIND CUT POINT");
  process.exit(1);
}

// Find the opening brace '{' before this ID
let startOfCorrupted = productsContent.lastIndexOf('{', cutMatch);
// Go back to the line before it
let lines = productsContent.substring(0, startOfCorrupted).split('\n');
// Last few lines should be the end of the previous product
// We keep everything up to the line that contains '  },' or '  }' for the previous product.

const cleanPrefix = productsContent.substring(0, startOfCorrupted);

// 5. Build New Content
let newContent = cleanPrefix;

missingProducts.forEach(mp => {
    const id = mp.id;
    const descData = masterDataset[id];
    if (!descData) { console.warn(`SKIP ${id}`); return; }

    newContent += `  {
    id: "${id}",
    name: "${mp.name}",
    shortDescription: \`${descData.shortDescription}\`,
    descriptionHtml: \`${descData.descriptionHtml}\`,
    brand: "${mp.brand}",
    category: "${mp.category}",
    tags: ${JSON.stringify(mp.tags)},
    price: ${mp.price.toFixed(2)},
    oldPrice: ${mp.oldPrice.toFixed(2)},
    image: "${mp.image}"${mp.featured ? ',\n    featured: true' : ''}
  },\n`;
});

// 6. Append Constants and Closing
newContent += `];

export const categories = [
  "valymas",
  "tonizavimas",
  "veido-kremai",
  "veido-serumai",
  "veido-kaukes",
  "apsauga-nuo-saules",
  "paakiu-prieziura",
  "produktai-kunui",
  "rinkiniai",
  "papildymai",
] as const;

export const brands = ["Reviderm", "Pepplus+", "CUSKIN", "OxygenCeuticals", "Cell Fusion C"] as const;
`;

fs.writeFileSync(productsPath, newContent);
console.log('SUCCESS: products.ts RECONSTRUCTED from scratch with clean data.');
