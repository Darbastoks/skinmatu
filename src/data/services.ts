import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "konsultacija",
    name: "Individuali kosmetologinė konsultacija",
    price: 40,
    duration: "30 min.",
    shortDescription:
      "Pirmasis ir svarbiausias žingsnis siekiant sveikos, subalansuotos ir estetiškai gražios odos.",
    fullDescription:
      "Profesionali kosmetologinė konsultacija – tai pirmasis ir svarbiausias žingsnis siekiant sveikos, subalansuotos ir estetiškai gražios odos. Šios konsultacijos metu Jums skiriamas išskirtinis, individualus dėmesys, leidžiantis tiksliai įvertinti odos būklę ir parinkti efektyviausius sprendimus ilgalaikiam rezultatui.\n\nKonsultacijos metu atliekamas išsamus odos būklės įvertinimas: surenkama detali odos anamnezė, atliekama vizualinė apžiūra ir apčiuopa, įvertinamas odos tipas, būklė, probleminės zonas bei galimi pokyčių veiksniai.",
    steps: [
      "Išsamus odos būklės įvertinimas",
      "Vizualinė apžiūra ir diagnostika",
      "Individualus namų odos priežiūros planas",
      "Rekomendacijos procedūroms ir priemonėms",
    ],
    image: "/images/gen/service_consultation.png",
    order: 1,
  },
  {
    id: "nezinau-ka-pasirinkti",
    name: 'Procedūra „Nežinau, ką pasirinkti“',
    price: 85,
    duration: "75 min.",
    shortDescription:
      "Individualiai parinktas sprendimas Jūsų odai, kai abejojate, kuri procedūra tinkamiausia.",
    fullDescription:
      "Jeigu abejojate, kuri procedūra Jums tinkamiausia, patikėkite sprendimą profesionalams. Procedūra sukurta tam, kad po vieno vizito gautumėte aiškų, efektyvų ir būtent Jūsų odai pritaikytą rezultatą.\n\nProcedūros metu atliekama išsami odos diagnostika, individualiai parenkamas procedūros protokolas, apjungiantis valymą, drėkinimą, odos švytėjimo atkūrimą ir bendrą jos būklės gerinimą.",
    steps: [
      "Profesionali odos diagnostika",
      "Individualiai parinktas protokolas",
      "1–2 aparatinės metodikos",
      "Namų priežiūros rutinos krepšelis",
    ],
    image: "/images/gen/service_no_choice.png",
    order: 2,
  },
  {
    id: "paaugliu-procedura",
    name: "Kosmetologinė veido procedūra paaugliams",
    price: 60,
    duration: "60 min.",
    shortDescription:
      "Efektyviai, bet švelniai sprendžia paauglių odos problemas, atsižvelgiant į jautrią odos barjero būklę.",
    fullDescription:
      "Tinkama ir savalaikė veido odos priežiūra paauglystėje yra ypač svarbi, nes būtent šiuo laikotarpiu dėl hormoninių pokyčių odoje dažniausiai pradeda formuotis aknė, užsikimšusios poros, komedonai bei inkštirai.\n\nProcedūros metu ne tik kruopščiai išvaloma oda, bet ir stabdomi uždegiminiai procesai, reguliuojama riebalinių liaukų veikla bei gerinama bendra odos būklė.",
    steps: [
      "Odos diagnostika ir paruošimas",
      "Rūgštinis pilingas",
      "Mechaninis veido valymas",
      "Aktyvių medžiagų ampulė ir baltojo molio kaukė",
      "LED terapija (dovana)",
      "Procedūros užbaigimas ir rekomendacijos",
    ],
    image: "/images/gen/service_teen.png",
    order: 3,
  },
  {
    id: "hydra-beauty",
    name: "„Hydra Beauty Classic“ – intensyvi odos drėkinimo ir valymo procedūra",
    price: 75,
    duration: "75 min.",
    shortDescription:
      "Moderni, giliai drėkinanti ir odą atnaujinanti veido procedūra su dermovakuminiu odos valymu.",
    fullDescription:
      "Moderni, giliai drėkinanti ir odą atnaujinanti veido procedūra, kurios pagrindas – dermovakuminis odos valymas ir aktyvus odos prisotinimas drėgme net gilesniuose odos sluoksniuose.\n\nNaudojant patentuotą aparato antgalį, oda valoma švelniai, tačiau itin efektyviai: pašalinamos negyvos odos ląstelės, giliai išvalomos poros, pagerėja odos kvėpavimas.",
    steps: [
      "Odos būklės įvertinimas ir paruošimas",
      "Individualiai parinktas pilingas",
      "„Hydra Beauty“ – I etapas",
      "„Hydra Beauty“ – II etapas",
      "Aktyvių medžiagų ampulė ir personalizuota kaukė",
      "Procedūros užbaigimas ir rekomendacijos",
    ],
    suitableFor: [
      "Visiems odos tipams",
      "Problemiškai, tačiau neuždegiminei odai",
      "Papilkėjusiai, pavargusiai odai",
      "Esant pigmentacijos sutrikimams",
      "Dehidratuotai odai",
    ],
    image: "/images/gen/service_hydra_beauty.png",
    order: 4,
  },
  {
    id: "mikroadatine-terapija",
    name: "Mikroadatinė terapija",
    price: 75,
    duration: "75 min.",
    shortDescription:
      "Pažangi estetinės kosmetologijos procedūra, skatinanti natūralų kolageno ir elastino atsinaujinimą.",
    fullDescription:
      "Mikroadatinė terapija – tai pažangi estetinės kosmetologijos procedūra, dar vadinama indukcine kolageno terapija, kurios metu oda natūraliai skatinama atsinaujinti ir stiprėti iš vidaus.\n\nŠis procesas aktyvina natūralią kolageno ir elastino skaidulų gamybą, skatina odos regeneraciją, lygina jos reljefą bei pagerina aktyviųjų medžiagų prasiskverbimą.",
    steps: [
      "Odos paruošimas ir profesionali diagnostika",
      "Individualiai parinktas rūgštinis pilingas",
      "Mezokokteilio paruošimas ir aplikacija",
      "Mikroadatinė terapija mezopenu",
      "Lakštinė arba alginatinė kaukė",
      "Procedūros užbaigimas ir namų priežiūros rekomendacijos",
    ],
    suitableFor: [
      "Sausai, riebiai, mišriai ir normaliai odai",
      "Bet kokio amžiaus odai",
      "Esant išsiplėtusioms poroms",
      "Pigmentuotai odai",
      "Brandžiai ir senstančiai odai",
      "Smulkioms ir gilesnėms raukšlėms",
    ],
    image: "/images/gen/service_microneedling.png",
    order: 5,
  },
  {
    id: "dermapen",
    name: "„DermaPen World“ frakcinė mezoterapija",
    price: 150,
    duration: "75 min.",
    shortDescription:
      "Inovatyvi, medicininio lygio mikroadatinė procedūra efektyvioms odos problemoms spręsti.",
    fullDescription:
      "Inovatyvi, medicininio lygio mikroadatinė procedūra, skirta efektyviai spręsti įvairias odos problemas ir atkurti sveiką, tolygų odos reljefą.\n\nŠie mikrokanalėliai suaktyvina natūralius odos regeneracinius procesus, skatina kolageno ir elastino gamybą bei sudaro sąlygas veikliosioms medžiagoms pasiekti gilesnius dermos sluoksnius.",
    steps: [
      "Odos paruošimas",
      "Gintaro rūgšties pilingas",
      "Frakcinė mezoterapija su „DermaPen World“",
      "Speciali „DermaPen World“ lakštinė kaukė",
      "LDM stimuliacija",
      "Procedūros užbaigimas ir rekomendacijos artimiausioms 5 dienoms",
    ],
    suitableFor: [
      "Smulkioms ir gilioms raukšlėms",
      "Použdegiminiams randeliams",
      "Išsiplėtusioms poroms ir odos nelygumams",
      "Pigmentacijos sutrikimams",
      "Odos suglebimui ir tonuso praradimui",
    ],
    image: "/images/gen/service_dermapen_pro.png",
    order: 6,
  },
  {
    id: "nanoprone",
    name: "Nanoprone Pen 02 + PDRN egzosomų terapija",
    price: 120,
    duration: "75 min.",
    shortDescription:
      "Pažangi odos atsinaujinimo procedūra su PDRN egzosomomis, veikianti ląsteliniame lygyje.",
    fullDescription:
      "Pažangi, medicininio lygio odos atsinaujinimo procedūra, kurios metu pasitelkiama moderni mikroadatinė technologija ir itin aktyvūs regeneraciją skatinantys komponentai.\n\nPatekusios į odą, PDRN egzosomos veikia sinergiškai, aktyvindamos natūralius audinių atsistatymo procesus ir skatindamos intensyvią regeneraciją.",
    steps: [
      "Odos paruošimas",
      "Gintaro rūgšties pilingas",
      "Mikroadatinė terapija „Nanoprone Pen“ aparatu su PDRN",
      "Individualiai parinkta, personalizuota kaukė",
      "Prailginto poveikio alginatinė CBD kaukė",
      "Procedūros užbaigimas ir rekomendacijos artimiausioms 5 dienoms",
    ],
    image: "/images/gen/service_nanoprone.png",
    order: 7,
  },
  {
    id: "ldm-oxygen",
    name: "LDM „Oxygen Ceuticals“ procedūra",
    price: 100,
    duration: "75 min.",
    shortDescription:
      "Pažangi ultragarso terapija giliam odos atsinaujinimui su ES bei FDA sertifikatais.",
    fullDescription:
      "Pažangi ultragarso terapija giliam odos atsinaujinimui – moksliškai pagrįsta procedūra, kilusi iš Pietų Korėjos.\n\nProcedūros metu moduliuojama jungiamojo audinio struktūra, aktyvinami regeneraciniai procesai, gerinamas audinių ląstelių metabolizmas bei skatinama kolageno sintezė.",
    steps: [
      "Odos paruošimas",
      "Detoksikacija ir pilingas",
      "Ceutisomos + neinvazinė nanomezoterapija",
      "LDM ultragarso terapija",
      "„Oxygen Ceuticals“ lakštinė kaukė",
      "Procedūros užbaigimas ir rekomendacijos",
    ],
    image: "/images/gen/service_ldm_oxygen.png",
    order: 8,
  },
  {
    id: "retinolio",
    name: "Retinolio „3-Retises CT Yellow Peel“",
    price: 90,
    duration: "45 min.",
    shortDescription:
      "Novatoriška odos atnaujinimo procedūra su vitamino C kompleksu ir trijų formų retinoidais.",
    fullDescription:
      "Pažangi odos atsinaujinimo ir stangrinimo procedūra, apjungianti galingą vitamino C kompleksu ir trijų skirtingų formų retinoidus.\n\nProcedūra orientuota į odos atsinaujinimą ir stangrinimą, smulkių raukšlelių mažinimą, hiperpigmentacijos korekciją bei porų matomumo sumažinimą.",
    steps: [
      "Odos paruošimas",
      "„Ferulac Classic“ pilingas",
      "„NOON“ ampulės suvedimas aparatu",
      "Step 1 – vitamino C ampulė",
      "Step 2 – „Retises“ sistemos aplikacija",
      "Procedūros užbaigimas ir priežiūros instrukcijos artimiausioms 7 dienoms",
    ],
    image: "/images/gen/service_yellow_peel.png",
    order: 9,
  },
  {
    id: "crystal-peel",
    name: "Crystal Peel – profesionali odos atsinaujinimo procedūra",
    price: 110,
    duration: "75 min.",
    shortDescription:
      "Intensyvi profesionali cheminio šveitimo procedūra aktyviam odos atsinaujinimui.",
    fullDescription:
      "Intensyvi, profesionali cheminio šveitimo procedūra, skirta aktyviam odos atsinaujinimui ir jos struktūros gerinimui.\n\nŠi procedūra reikalauja trumpo poprocedūrinio laikotarpio, kurio metu oda aktyviai atsinaujina, tačiau būtent dėl to pasiekiami ryškūs ir ilgalaikiai rezultatai.",
    steps: [
      "Odos paruošimas",
      "„Crystal Peel“ cheminis pilingas",
      "Mechaninis veido valymas (esant poreikiui)",
      "Individualiai parinkta ampulė",
      "Raminamoji kaukė kartu su LDM terapija",
      "Procedūros užbaigimas ir rekomendacijos",
    ],
    image: "/images/gen/service_crystal_peel.png",
    order: 10,
  },
  {
    id: "autorine-skinmatu",
    name: "Autorinė „SkinMatu“ procedūra",
    price: 170,
    duration: "105 min.",
    shortDescription:
      "Išskirtinis, individualiai kuriamas veido priežiūros ritualas su 4 pažangiomis aparatinėmis metodikomis.",
    fullDescription:
      "Tai išskirtinis, individualiai kuriamas veido priežiūros ritualas, apjungiantis net 4 pažangias aparatines metodikas vienos procedūros metu.\n\nProcedūra skirta visų tipų odai nuo 25 metų. Prieš procedūrą atliekama išsami individuali konsultacija, kurios metu sudaromas personalizuotas veido priežiūros protokolas.",
    steps: [
      "Išsami individuali konsultacija",
      "Odos diagnostika ir paruošimas",
      "4 aparatinės metodikas pagal odos poreikius",
      "Profesionalių gamintojų produktų aplikacija",
      "Procedūros užbaigimas ir rekomendacijos",
    ],
    image: "/images/gen/service_author_ritual.png",
    order: 11,
  },
  {
    id: "kombinuotas-valymas",
    name: "Kombinuotas veido valymas",
    price: 65,
    duration: "90 min.",
    shortDescription:
      "Efektyvus ultragarsinio ir mechaninio valymo derinys švariai ir skaisčiai odai.",
    fullDescription:
      "Kombinuotas veido valymas yra viena populiariausių ir efektyviausių higieninių procedūrų. Ji apjungia dvi metodikas: ultragarsinį valymą, kuris švelniai pašalina negyvas odos ląsteles, ir mechaninį valymą, kurio metu rankiniu būdu išvalomi giluminiai nešvarumai ir komedonai.\n\nRezultatas – giliai išvalyta, lygesnė ir skaistesnė oda, pagerėjusi mikrocirkuliacija bei geresnis kosmetikos priemonių pasisavinimas.",
    steps: [
      "Odos nuvalymas ir tonizavimas",
      "Minkštinantis kompresas ar kaukė",
      "Ultragarsinis pilingas",
      "Gilus mechaninis valymas",
      "Raminanti, poras sutraukianti kaukė",
      "Apsauginio kremo aplikacija",
    ],
    image: "/images/gen/service_combined_cleaning.png",
    order: 12,
  },
  {
    id: "rugstinis-pilingas",
    name: "Rūgštinis pilingas (Aknės korekcija)",
    price: 55,
    duration: "45 min.",
    shortDescription:
      "Tikslingas sprendimas problematiškai odai, mažinantis bėrimus ir lyginantis odos reljefą.",
    fullDescription:
      "Rūgštinis pilingas yra itin veiksmingas sprendimas kovojant su akne, bėrimais, išsiplėtusiomis poromis bei použdegimine pigmentacija. Procedūros metu naudojamos specialios rūgštys (salicilo, migdolų, azelaino ir kt.), kurios tirpdo raginį odos sluoksnį, naikina bakterijas ir skatina regeneraciją.\n\nTai ne tik gydomoji, bet ir profilaktinė priemonė, padedanti palaikyti sveiką odos balansą.",
    steps: [
      "Odos paruošimas pilingui",
      "Individualiai parinkto rūgščių kokteilio aplikacija",
      "Neutralizacija",
      "Raminanti ir drėkinanti kaukė",
      "Užbaigiamasis kremas su SPF apsauga",
    ],
    image: "/images/gen/service_acid_peel.png",
    order: 13,
  },
  {
    id: "karaliskas-ritualas",
    name: "Karališkas drėkinimo ir švytėjimo ritualas",
    price: 130,
    duration: "90 min.",
    shortDescription:
      "Prabangus ritualas, skirtas intensyviam odos drėkinimui, stangrinimui ir užtikrintam švytėjimui.",
    fullDescription:
      "Karališkas švytėjimo ritualas – tai aukščiausios klasės procedūra, skirta tiems, kurie siekia momentinio ir ilgalaikio „red carpet“ efekto. Ritualas apjungia giliai drėkinančias medžiagas, prabangias kaukes ir specializuotas masažo technikas bei aparatines metodikas (LDM).\n\nOda po procedūros tampa neįtikėtinai švelni, pailsėjusi, skaisti ir vizualiai atjaunėjusi.",
    steps: [
      "Prabangus dvigubas odos valymas",
      "Enziminis šveitimas",
      "LDM švytėjimo programa",
      "Intensyviai drėkinantis serumas ir kaukė",
      "Veido, kaklo ir dekolte masažas",
      "Karališka užbaigiamoji priežiūra",
    ],
    image: "/images/gen/service_royal_ritual.png",
    order: 14,
  },
];
