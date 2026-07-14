import { VocabularyItem, Category, PlaceItem, QuizQuestion } from './types';

export const SPAIN_INFO = {
  title: "Španělsko",
  officialName: "Španělské království",
  capital: "Madrid",
  language: "španělština (español)",
  currency: "Euro (€)",
  population: "asi 49 milionů",
  king: "Felipe VI.",
  description: "Španělsko patří mezi nejoblíbenější země na dovolenou. Lidé jsou přátelští, mají moc rádi děti, výborné jídlo a tráví hodně času venku. Večer jsou ulice plné lidí a je úplně normální, že děti si venku hrají ještě kolem desáté večer!"
};

export const MALAGA_INFO = {
  title: "Málaga",
  location: "jih Španělska (oblast Andalusie)",
  sea: "Středozemní moře",
  weather: "Více než 300 slunečných dní v roce, v létě běžně přes 30 °C.",
  description: "Málaga je nádherné starobylé město na pobřeží Costa del Sol. Najdeš tu dlouhé písčité pláže s palmami, staré hrady na kopcích, přístav s obřími loděmi, spoustu papoušků poletujících v zahradách a samozřejmě tu nejlepší zmrzlinu na každém rohu!",
  highlights: [
    "🌴 Dlouhé pláže a palmové promenády",
    "🦜 Divocí zelení papoušci v parcích",
    "🏰 Dva starobylé hrady přímo nad centrem (Alcazaba a Gibralfaro)",
    "⛵ Moderní přístav Muelle Uno plný obchodů a lodí",
    "🍦 Desítky zmrzlináren (heladerías) s kopečky velkými jako hrad!"
  ]
};

export const ADVICE_ITEMS = [
  { id: "1", text: "Pij hodně vody, i když nemáš zrovna žízeň. Sluníčko tady hodně hřeje!", emoji: "💧" },
  { id: "2", text: "Vždycky si před odchodem ven nasaď kšiltovku nebo klobouk.", emoji: "🧢" },
  { id: "3", text: "Nezapomeň na sluneční brýle – světlo z pláže a moře může oslňovat.", emoji: "🕶️" },
  { id: "4", text: "Pravidelně se maž opalovacím krémem, ať tě sluníčko nespálí.", emoji: "☀️" },
  { id: "5", text: "Odpoledne (kolem 14:00 až 17:00), kdy je největší horko, odpočívej ve stínu.", emoji: "🌴" }
];

export const CHECKLIST_ITEMS = [
  { id: "pack-1", label: "Opalovací krém s vysokým faktorem", emoji: "🧴" },
  { id: "pack-2", label: "Kšiltovka, klobouček nebo šátek", emoji: "🧢" },
  { id: "pack-3", label: "Sluneční brýle", emoji: "🕶️" },
  { id: "pack-4", label: "Pantofle nebo sandály na horký písek", emoji: "🩴" },
  { id: "pack-5", label: "Plavky (nejlépe dvoje na střídání)", emoji: "👙" },
  { id: "pack-6", label: "Láhev na vodu (která udrží vodu studenou)", emoji: "💧" },
  { id: "pack-7", label: "Mobil a nabíječka", emoji: "📱" },
  { id: "pack-8", label: "Kapesní eura na zmrzlinu", emoji: "💶" }
];

export const TASTE_ITEMS = [
  {
    name: "Helado",
    pronunciation: "elado",
    translation: "Španělská zmrzlina",
    description: "Kopečky v Málaze jsou obrovské! Určitě vyzkoušej příchuť 'Turrón' (místní nugát s mandlemi) nebo klasické ovoce.",
    emoji: "🍦"
  },
  {
    name: "Churros con chocolate",
    pronunciation: "čurros kon čokolate",
    translation: "Smažené tyčinky s čokoládou",
    description: "Křupavé teplé těsto ve tvaru tyčinek, které si namáčíš do hrnku s velmi hustou horkou čokoládou. Božská snídaně!",
    emoji: "🍩"
  },
  {
    name: "Paella",
    pronunciation: "paeja",
    translation: "Tradiční španělské rýžové jídlo",
    description: "Rýže se šafránem (proto je žlutá) vařená na obří pánvi. Může být s kuřecím masem, zeleninou nebo mořskými plody.",
    emoji: "🥘"
  },
  {
    name: "Bocadillo",
    pronunciation: "bokadijo",
    translation: "Plněná bageta",
    description: "Typická velká bageta rozříznutá napůl a naplněná sušenou šunkou (Jamón), sýrem nebo rajčatovou pomazánkou.",
    emoji: "🥪"
  },
  {
    name: "Melón",
    pronunciation: "melón",
    translation: "Sladký žlutý meloun",
    description: "Ve Španělsku roste spousta druhů melounů. Jsou úžasně sladké, šťavnaté a skvěle osvěží na pláži.",
    emoji: "🍉"
  },
  {
    name: "Espeto de sardinas",
    pronunciation: "espeto de sardinas",
    translation: "Sardinky na špízu",
    description: "Specialita přímo z Málagy! Rybáři napíchnou čerstvé sardinky na bambusovou špejli a opékají je na ohni v písku v loďkách na pláži.",
    emoji: "🐟"
  }
];

export const TRAVEL_COMMANDMENTS = [
  { id: 1, text: "Vždycky začni pozdravem: „Hola!“ (ola). Španělé milují, když děti zdraví.", emoji: "👋" },
  { id: 2, text: "Když ti někdo něco dá nebo pomůže, řekni: „Gracias“ (grasias) s úsměvem.", emoji: "🙏" },
  { id: 3, text: "Neboj se mluvit – i když řekneš jen jedno slovo a ukážeš prstíkem, všichni ti budou chtít rozumět.", emoji: "❤️" },
  { id: 4, text: "Pij hodně vody, ať máš dost energie na plavání a běhání.", emoji: "💧" },
  { id: 5, text: "Chraň se před sluníčkem – maž se, nos klobouk a brýle.", emoji: "🧴" },
  { id: 6, text: "Dávej pozor na své věci (mobil, peněženku), hlavně v davu lidí.", emoji: "🎒" },
  { id: 7, text: "Vždycky poslouchej dospělé, se kterými cestuješ.", emoji: "👨‍👩‍👧" },
  { id: 8, text: "Kdyby ses náhodou ztratila, zůstaň stát na místě! Popros o pomoc policistu (Policía) nebo prodavače v obchodě.", emoji: "🚨" },
  { id: 9, text: "Španělé mluví rychle, tak na ně mluv pomalu. Klidně zopakuj slovo víckrát.", emoji: "🐢" },
  { id: 10, text: "Užij si každou chvíli, plav v moři, stav hrady z písku a sněz hodně zmrzliny! Prázdniny rychle utečou.", emoji: "✨" }
];

export const PRONUNCIATION_RULES = [
  { letter: "Samohlásky (A, E, I, O, U)", rule: "Čtou se vždycky stejně a jasně.", example: "casa → [kasa], leche → [leče], amigo → [amigo], hola → [ola]" },
  { letter: "Písmeno H", rule: "H se ve španělštině vůbec NEČTE! Ignoruj ho.", example: "hola → [ola], helado → [elado], hombre → [ombre]" },
  { letter: "Písmeno J", rule: "Čte se jako naše silnější CH.", example: "jamón → [chamón], jugar → [chugar], José → [chose]" },
  { letter: "Písmeno Ñ", rule: "Čte se přesně jako naše Ň.", example: "niño → [ňiňo], España → [espaňa], señora → [seňora]" },
  { letter: "Dvojité LL", rule: "V Andalusii a Málaze se vyslovuje jako J.", example: "llamo → [jamo], llave → [jave], calle → [kaje]" },
  { letter: "Dvojpísmeno CH", rule: "Čte se jako české Č.", example: "chocolate → [čokolate], churros → [čurros], mucho → [mučo]" },
  { letter: "Písmeno C", rule: "Před A, O, U se čte jako K. Před E, I se v Málaze čte jako S.", example: "casa → [kasa], coche → [koče] | cena → [sena], cinco → [sinko]" },
  { letter: "Písmeno Z", rule: "V Málaze se čte jednoduše jako S.", example: "zapato → [sapato], azul → [asul]" },
  { letter: "Písmeno G", rule: "Před A, O, U je tvrdé G. Před E, I zní jako CH.", example: "gato → [gato] | gente → [chente], gigante → [chigante]" },
  { letter: "Písmeno Q", rule: "Čte se jako K (U za ním se nečte).", example: "queso → [keso], quince → [kinse], quiero → [kjero]" },
  { letter: "Písmeno V", rule: "Zní velmi podobně jako B. Někdy je to něco mezi V a B.", example: "vale → [bale], vamos → [bamos], vino → [bino]" },
  { letter: "Písmeno Y", rule: "Na konci slova se čte jako I. Na začátku jako J.", example: "hoy → [oj], soy → [soj] | playa → [plaja]" },
  { letter: "Přízvuk (á, é, í, ó, ú)", rule: "Slabika s čárkou se vyslovuje silněji (důrazněji), ne nutně dlouze.", example: "Málaga → [MÁlaga], papá → [papÁ]" }
];

export const PRONUNCIATION_PRACTICE = [
  { word: "Hola", reading: "ola", translation: "Ahoj" },
  { word: "Gracias", reading: "grasias", translation: "Děkuji" },
  { word: "Buenos días", reading: "buenos dýas", translation: "Dobré ráno" },
  { word: "Buenas tardes", reading: "buenas tardes", translation: "Dobrý den / odpoledne" },
  { word: "Buenas noches", reading: "buenas nočes", translation: "Dobrou noc / večer" },
  { word: "Adiós", reading: "adjos", translation: "Nashledanou" },
  { word: "Agua", reading: "agva", translation: "Voda" },
  { word: "Helado", reading: "elado", translation: "Zmrzlina" },
  { word: "Playa", reading: "plaja", translation: "Pláž" },
  { word: "Paella", reading: "paeja", translation: "Paella (rýže)" },
  { word: "Jamón", reading: "chamón", translation: "Šunka" },
  { word: "España", reading: "espaňa", translation: "Španělsko" },
  { word: "Niño", reading: "ňiňo", translation: "Kluk / dítě" },
  { word: "¿Cuánto cuesta?", reading: "kuanto kuesta", translation: "Kolik to stojí?" }
];

export const VOCABULARY_CATEGORIES: Category[] = [
  { id: "all", name: "Všechna slova", icon: "📖", color: "from-blue-400 to-indigo-500", bgColor: "bg-indigo-50", textColor: "text-indigo-600" },
  { id: "basics", name: "Základní slova", icon: "✨", color: "from-yellow-400 to-amber-500", bgColor: "bg-amber-50", textColor: "text-amber-600" },
  { id: "needs", name: "Seznámení & Potřeby", icon: "🙋", color: "from-teal-400 to-emerald-500", bgColor: "bg-emerald-50", textColor: "text-emerald-600" },
  { id: "beach", name: "Na pláži", icon: "🏖️", color: "from-cyan-400 to-blue-500", bgColor: "bg-cyan-50", textColor: "text-cyan-600" },
  { id: "restaurant", name: "V restauraci", icon: "🍦", color: "from-rose-400 to-pink-500", bgColor: "bg-pink-50", textColor: "text-pink-600" },
  { id: "numbers", name: "Čísla 0-20", icon: "🔢", color: "from-violet-400 to-purple-500", bgColor: "bg-purple-50", textColor: "text-purple-600" },
  { id: "colors", name: "Barvy", icon: "🎨", color: "from-orange-400 to-red-500", bgColor: "bg-orange-50", textColor: "text-orange-600" },
  { id: "animals", name: "Zvířátka", icon: "🐱", color: "from-lime-400 to-green-500", bgColor: "bg-green-50", textColor: "text-green-600" },
  { id: "slang", name: "Andaluský slang", icon: "😎", color: "from-fuchsia-400 to-pink-600", bgColor: "bg-fuchsia-50", textColor: "text-fuchsia-600" }
];

export const VOCABULARY_ITEMS: VocabularyItem[] = [
  // Basics
  { id: "v1", spanish: "Hola", czech: "Ahoj / Dobrý den", pronunciation: "ola", category: "basics", exampleSpanish: "¡Hola! ¿Qué tal?", exampleCzech: "Ahoj! Jak se máš?", examplePronunciation: "ola, ke tal" },
  { id: "v2", spanish: "Buenos días", czech: "Dobré ráno / dopoledne", pronunciation: "buenos dýas", category: "basics", exampleSpanish: "Buenos días, mamá.", exampleCzech: "Dobré ráno, mamko.", examplePronunciation: "buenos dýas, mama" },
  { id: "v3", spanish: "Buenas tardes", czech: "Dobrý den / odpoledne", pronunciation: "buenas tardes", category: "basics", exampleSpanish: "Buenas tardes, señora.", exampleCzech: "Dobrý den, paní.", examplePronunciation: "buenas tardes, seňora" },
  { id: "v4", spanish: "Buenas noches", czech: "Dobrý večer / dobrou noc", pronunciation: "buenas nočes", category: "basics", exampleSpanish: "Buenas noches, Sofi.", exampleCzech: "Dobrou noc, Sofi.", examplePronunciation: "buenas nočes, Sofi" },
  { id: "v5", spanish: "Adiós", czech: "Sbohem / Nashledanou", pronunciation: "adjos", category: "basics" },
  { id: "v6", spanish: "Gracias", czech: "Děkuji", pronunciation: "grasias", category: "basics", exampleSpanish: "Muchas gracias.", exampleCzech: "Moc děkuji.", examplePronunciation: "mučas grasias" },
  { id: "v7", spanish: "De nada", czech: "Není zač", pronunciation: "de nada", category: "basics" },
  { id: "v8", spanish: "Por favor", czech: "Prosím (žádost)", pronunciation: "por favor", category: "basics", exampleSpanish: "Un helado, por favor.", exampleCzech: "Jednu zmrzlinu, prosím.", examplePronunciation: "un elado, por favor" },
  { id: "v9", spanish: "Sí", czech: "Ano", pronunciation: "sí", category: "basics" },
  { id: "v10", spanish: "No", czech: "Ne", pronunciation: "no", category: "basics" },
  { id: "v11", spanish: "Perdón", czech: "Promiňte / Pardon", pronunciation: "perdon", category: "basics" },
  { id: "v12", spanish: "Lo siento", czech: "Omlouvám se", pronunciation: "lo sjento", category: "basics" },

  // Seznámení & Potřeby
  { id: "v13", spanish: "¿Cómo te llamas?", czech: "Jak se jmenuješ?", pronunciation: "komo te jamas", category: "needs" },
  { id: "v14", spanish: "Me llamo Sofie.", czech: "Jmenuji se Sofie.", pronunciation: "me jamo Sofie", category: "needs" },
  { id: "v15", spanish: "¿Cuánto cuesta?", czech: "Kolik to stojí?", pronunciation: "kuanto kuesta", category: "needs" },
  { id: "v16", spanish: "¿Dónde está el baño?", czech: "Kde jsou toalety?", pronunciation: "donde esta el baňo", category: "needs" },
  { id: "v17", spanish: "Tengo sed.", czech: "Mám žízeň.", pronunciation: "tengo sed", category: "needs" },
  { id: "v18", spanish: "Tengo hambre.", czech: "Mám hlad.", pronunciation: "tengo ambre", category: "needs" },
  { id: "v19", spanish: "¡Ayuda!", czech: "Pomoc!", pronunciation: "ajuda", category: "needs" },
  { id: "v20", spanish: "Estoy perdida.", czech: "Ztratila jsem se.", pronunciation: "estoj perdida", category: "needs" },
  { id: "v21", spanish: "Soy de Chequia.", czech: "Jsem z České republiky.", pronunciation: "soj de čekia", category: "needs" },

  // Beach
  { id: "v22", spanish: "El mar", czech: "Moře", pronunciation: "el mar", category: "beach" },
  { id: "v23", spanish: "La playa", czech: "Pláž", pronunciation: "la plaja", category: "beach" },
  { id: "v24", spanish: "La arena", czech: "Písek", pronunciation: "la arena", category: "beach" },
  { id: "v25", spanish: "El helado", czech: "Zmrzlina", pronunciation: "el elado", category: "beach" },
  { id: "v26", spanish: "El agua", czech: "Voda", pronunciation: "el agva", category: "beach" },
  { id: "v27", spanish: "El sol", czech: "Slunce", pronunciation: "el sol", category: "beach" },
  { id: "v28", spanish: "Crema solar", czech: "Opalovací krém", pronunciation: "krema solar", category: "beach" },
  { id: "v29", spanish: "La toalla", czech: "Ručník", pronunciation: "la toaja", category: "beach" },

  // Restaurant / Food
  { id: "v30", spanish: "Quiero...", czech: "Chci... / Můžu dostat...", pronunciation: "kjero", category: "restaurant", exampleSpanish: "Quiero una pizza, por favor.", exampleCzech: "Chci pizzu, prosím.", examplePronunciation: "kjero una pica, por favor" },
  { id: "v31", spanish: "el zumo", czech: "džus", pronunciation: "el sumo", category: "restaurant" },
  { id: "v32", spanish: "la pizza", czech: "pizza", pronunciation: "la pica", category: "restaurant" },
  { id: "v33", spanish: "el pollo", czech: "kuře", pronunciation: "el pojo", category: "restaurant" },
  { id: "v34", spanish: "patatas fritas", czech: "hranolky", pronunciation: "patatas fritas", category: "restaurant" },

  // Numbers 0-20
  { id: "n0", spanish: "Cero", czech: "Nula (0)", pronunciation: "sero", category: "numbers" },
  { id: "n1", spanish: "Uno", czech: "Jeden (1)", pronunciation: "uno", category: "numbers" },
  { id: "n2", spanish: "Dos", czech: "Dva (2)", pronunciation: "dos", category: "numbers" },
  { id: "n3", spanish: "Tres", czech: "Tři (3)", pronunciation: "tres", category: "numbers" },
  { id: "n4", spanish: "Cuatro", czech: "Čtyři (4)", pronunciation: "kuatro", category: "numbers" },
  { id: "n5", spanish: "Cinco", czech: "Pět (5)", pronunciation: "sinko", category: "numbers" },
  { id: "n6", spanish: "Seis", czech: "Šest (6)", pronunciation: "seis", category: "numbers" },
  { id: "n7", spanish: "Siete", czech: "Sedm (7)", pronunciation: "sjete", category: "numbers" },
  { id: "n8", spanish: "Ocho", czech: "Osm (8)", pronunciation: "očo", category: "numbers" },
  { id: "n9", spanish: "Nueve", czech: "Devět (9)", pronunciation: "nueve", category: "numbers" },
  { id: "n10", spanish: "Diez", czech: "Deset (10)", pronunciation: "djes", category: "numbers" },
  { id: "n11", spanish: "Once", czech: "Jedenáct (11)", pronunciation: "onse", category: "numbers" },
  { id: "n12", spanish: "Doce", czech: "Dvanáct (12)", pronunciation: "dose", category: "numbers" },
  { id: "n13", spanish: "Trece", czech: "Třináct (13)", pronunciation: "trese", category: "numbers" },
  { id: "n14", spanish: "Catorce", czech: "Čtrnáct (14)", pronunciation: "katorse", category: "numbers" },
  { id: "n15", spanish: "Quince", czech: "Patnáct (15)", pronunciation: "kinse", category: "numbers" },
  { id: "n16", spanish: "Dieciséis", czech: "Šestnáct (16)", pronunciation: "djesiséis", category: "numbers" },
  { id: "n17", spanish: "Diecisiete", czech: "Sedmnáct (17)", pronunciation: "djesisjete", category: "numbers" },
  { id: "n18", spanish: "Dieciocho", czech: "Osmnáct (18)", pronunciation: "djesiočo", category: "numbers" },
  { id: "n19", spanish: "Diecinueve", czech: "Devatenáct (19)", pronunciation: "djesinueve", category: "numbers" },
  { id: "n20", spanish: "Veinte", czech: "Dvacet (20)", pronunciation: "bejnte", category: "numbers" },

  // Colors
  { id: "c1", spanish: "Rojo", czech: "Červená", pronunciation: "rocho", category: "colors" },
  { id: "c2", spanish: "Azul", czech: "Modrá", pronunciation: "asul", category: "colors" },
  { id: "c3", spanish: "Verde", czech: "Zelená", pronunciation: "verde", category: "colors" },
  { id: "c4", spanish: "Amarillo", czech: "Žlutá", pronunciation: "amarijo", category: "colors" },
  { id: "c5", spanish: "Blanco", czech: "Bílá", pronunciation: "blanko", category: "colors" },
  { id: "c6", spanish: "Negro", czech: "Černá", pronunciation: "negro", category: "colors" },
  { id: "c7", spanish: "Rosa", czech: "Růžová", pronunciation: "rosa", category: "colors" },

  // Animals
  { id: "a1", spanish: "el perro", czech: "Pes", pronunciation: "el pero", category: "animals" },
  { id: "a2", spanish: "el gato", czech: "Kočka", pronunciation: "el gato", category: "animals" },
  { id: "a3", spanish: "el caballo", czech: "Kůň", pronunciation: "el kabajo", category: "animals" },
  { id: "a4", spanish: "el pez", czech: "Ryba", pronunciation: "el pes", category: "animals" },

  // Slang
  { id: "s1", spanish: "¡Qué guay!", czech: "To je super!", pronunciation: "ke gvaj", category: "slang" },
  { id: "s2", spanish: "Vale", czech: "Dobře / Ok", pronunciation: "bale", category: "slang" },
  { id: "s3", spanish: "¡Vamos!", czech: "Jdeme! / Pojďme!", pronunciation: "bamos", category: "slang" },
  { id: "s4", spanish: "¡Genial!", czech: "Skvělé! / Paráda!", pronunciation: "chenial", category: "slang" },
  { id: "s5", spanish: "Tío / Tía", czech: "Kámo / Kámoška (doslova strýc/teta)", pronunciation: "tío / tía", category: "slang" }
];

export const PLACES_TO_VISIT: PlaceItem[] = [
  {
    id: "p1",
    name: "Pláž La Malagueta",
    description: "Krásná hlavní pláž přímo v Málaze. Má jemný tmavší písek, spoustu palem, dětská hřiště a slavný obří nápis 'MALAGUETA' z písku, u kterého se musíš vyfotit!",
    emoji: "🏖️",
    location: "Centrum Málagy",
    distance: "0 km",
    rating: 5,
    funFact: "Přímo na pláži uvidíš opékat sardinky na loďkách s pískem!"
  },
  {
    id: "p2",
    name: "Sea Life Benalmádena",
    description: "Úžasné akvárium plné mořských živočichů. Projdeš skleněným tunelem, kde ti nad hlavou budou plavat žraloci a rejnoci, a můžeš si zblízka prohlédnout i mořské koníky.",
    emoji: "🐠",
    location: "Benalmádena",
    distance: "20 km od Málagy",
    rating: 5,
    funFact: "Můžeš si tu pohladit rejnoka nebo nakrmit mořské želvy!"
  },
  {
    id: "p3",
    name: "Bioparc Fuengirola",
    description: "ZOO navržená jako opravdová džungle! Zvířata tu nežijí v klecích, ale v přirozeném prostředí. Uvidíš tu lemury, tygry, hrochy, krokodýly i vzácného šimpanze.",
    emoji: "🐒",
    location: "Fuengirola",
    distance: "30 km od Málagy",
    rating: 5,
    funFact: "Uprostřed parku stojí obří umělý strom baobab, vysoký jako pětipatrový dům."
  },
  {
    id: "p4",
    name: "Lanovka Teleférico Benalmádena",
    description: "Kabinková lanovka tě vyveze na vrchol hory Monte Calamorro. Z výšky uvidíš celé pobřeží a za dobrého počasí dokonce i hory v Africe!",
    emoji: "🚡",
    location: "Benalmádena",
    distance: "20 km od Málagy",
    rating: 4,
    funFact: "Na vrcholu hory uvidíš úžasnou show s dravými ptáky (orly a sokoly)."
  },
  {
    id: "p5",
    name: "Hrad Gibralfaro a palác Alcazaba",
    description: "Starobylé pevnosti na kopci nad městem. Procházíš se po hradbách, prozkoumáváš věže a užíváš si ten nejlepší výhled na přístav a celé město.",
    emoji: "🏰",
    location: "Centrum Málagy",
    distance: "0 km",
    rating: 5,
    funFact: "Pevnost byla postavená tak chytře, že ji nepřátelé skoro nikdy nedobyli!"
  },
  {
    id: "p6",
    name: "Přístav Muelle Uno",
    description: "Moderní pěší zóna podél moře plná parádních obchodů, kaváren, pouličních umělců a hřišť. Kotví tu obří výletní lodě i luxusní jachty.",
    emoji: "⛵",
    location: "Centrum Málagy",
    distance: "0.5 km",
    rating: 4,
    funFact: "Najdeš tu pestrobarevnou prosklenou kostku Pompidou muzea!"
  },
  {
    id: "p7",
    name: "Obří jeskyně Nerja",
    description: "Jedna z největších jeskyní v Evropě! Je plná neskutečných krápníků, které vypadají jako zkamenělé vodopády.",
    emoji: "🦇",
    location: "Nerja",
    distance: "50 km od Málagy",
    rating: 5,
    funFact: "Nachází se tu největší krápníkový sloup na světě, vysoký 32 metrů!"
  },
  {
    id: "p8",
    name: "Aqualand Torremolinos",
    description: "Největší vodní park na pobřeží. Desítky skluzavek, obří tobogány, divoká řeka a bazén s vlnami pro skvělý den plný cákání.",
    emoji: "🌊",
    location: "Torremolinos",
    distance: "15 km od Málagy",
    rating: 5,
    funFact: "Můžeš tu vyzkoušet skluzavku 'Kamikaze', která je vysoká jako panelák!"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Pronunciation
  {
    id: "q1",
    type: "pronunciation",
    question: "Jak správně přečteš španělské slovo „Hola“ (Ahoj)?",
    options: ["hola", "chola", "ola", "bola"],
    correctAnswer: "ola",
    explanation: "Španělské H se na začátku slov vůbec nevyslovuje, je úplně tiché. Proto 'Hola' čteme jako 'ola'."
  },
  {
    id: "q2",
    type: "pronunciation",
    question: "Jak vyslovíš slovo „España“ (Španělsko)?",
    options: ["espana", "espaňa", "espacha", "espana-j"],
    correctAnswer: "espaňa",
    explanation: "Písmenko Ñ se čte přesně jako naše české Ň. Takže 'España' čteme jako 'espaňa'."
  },
  {
    id: "q3",
    type: "pronunciation",
    question: "Jak se čte dvojité L ve slově „Llamo“ (jmenuji se)?",
    options: ["lamo", "jamo", "chamo", "liamo"],
    correctAnswer: "jamo",
    explanation: "Dvojité LL se ve většině Španělska a obzvlášť v Málaze čte jako české J. 'Llamo' čteme jako 'jamo'."
  },
  {
    id: "q4",
    type: "pronunciation",
    question: "Jak správně přečteš slovo „Cinco“ (číslo pět)?",
    options: ["činko", "kinko", "sinko", "cinko"],
    correctAnswer: "sinko",
    explanation: "Písmenko C se před E a I čte v oblasti Andalusie (kde leží Málaga) jako S. Proto 'Cinco' čteme jako 'sinko'."
  },
  {
    id: "q5",
    type: "pronunciation",
    question: "Jak přečteš španělské slovo „Jamón“ (sušená šunka)?",
    options: ["jamón", "chamón", "žamón", "amón"],
    correctAnswer: "chamón",
    explanation: "Písmeno J se ve španělštině čte jako naše české CH. Proto 'Jamón' čteme jako 'chamón'."
  },
  // Vocabulary
  {
    id: "q6",
    type: "vocabulary",
    question: "Jak španělsky poděkuješ, když ti číšník přinese zmrzlinu?",
    options: ["Hola", "Adiós", "Gracias", "Por favor"],
    correctAnswer: "Gracias",
    explanation: "„Gracias“ [grasias] znamená děkuji. Španělé milují slušnost, tak na to nezapomeň!"
  },
  {
    id: "q7",
    type: "vocabulary",
    question: "Co znamená, když ti někdo řekne „¡Qué guay!“?",
    options: ["Mám hlad", "To je super!", "Kde je pláž?", "Dobrou noc"],
    correctAnswer: "To je super!",
    explanation: "„¡Qué guay!“ [ke gvaj] je andaluský slangový výraz pro něco super, skvělého!"
  },
  {
    id: "q8",
    type: "vocabulary",
    question: "Jak španělsky poprosíš o zmrzlinu (por favor)?",
    options: ["Un helado, por favor", "Un agua, por favor", "Quiero pizza, gracias", "Soy Sofie, hola"],
    correctAnswer: "Un helado, por favor",
    explanation: "„Un helado, por favor“ [un elado, por favor] znamená „Jednu zmrzlinu, prosím“."
  },
  {
    id: "q9",
    type: "vocabulary",
    question: "Jak španělsky řekneš číslo tři (3)?",
    options: ["uno", "dos", "tres", "cuatro"],
    correctAnswer: "tres",
    explanation: "Čísla jdou: uno (1), dos (2), tres (3), cuatro (4)..."
  },
  {
    id: "q10",
    type: "vocabulary",
    question: "Co znamená španělské slovíčko „Playa“ [plaja]?",
    options: ["Moře", "Písek", "Slunce", "Pláž"],
    correctAnswer: "Pláž",
    explanation: "„Playa“ znamená pláž. Určitě navštívíš slavnou pláž La Malagueta!"
  }
];
