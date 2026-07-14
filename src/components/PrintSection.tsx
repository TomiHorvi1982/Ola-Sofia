import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Printer, Info, ShieldAlert, FileText, CheckCircle, Award } from 'lucide-react';

export default function PrintSection() {
  const [activePreviewPage, setActivePreviewPage] = useState<number | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const previewPages = [
    {
      nr: 1,
      title: "Obálka ☀️",
      emoji: "🌸🇪🇸☀️",
      sub: "Kapesní průvodce pro Sofii",
      desc: "Titulní strana tvé knížečky s věnováním a radami pro super náladu.",
      details: [
        "🌸 Krásné uvítání pro desetiletou Sofii v Málaze",
        "🙋 Připomínka: Usmívej se, pozdrav (Hola!) a mluv!",
        "✨ Vejde se přesně do kapsy u kraťasů"
      ]
    },
    {
      nr: 2,
      title: "Málaga & Španělsko 🌴",
      emoji: "🌴🏖️",
      sub: "Jak si užít sluníčko bezpečně",
      desc: "Základní informace o Španělsku, Málaze a 3 nejdůležitější pravidla pro přežití v horku.",
      details: [
        "📍 Málaga: Leží v Andalusii na jihu Španělska u Středozemního moře",
        "💧 Pij vodu po celý den, i když nemáš žízeň",
        "🧢 Kšiltovka nebo klobouk vždy na hlavě",
        "🧴 Opalovací krém s vysokým faktorem 50+"
      ]
    },
    {
      nr: 3,
      title: "Výslovnost 🗣️",
      emoji: "🗣️📖",
      sub: "Jak číst španělská písmenka",
      desc: "Kompletní mini tahák s nejdůležitějšími pravidly výslovnosti pro rychlé čtení.",
      details: [
        "• H se nikdy nečte (Hola -> [ola])",
        "• LL se čte jako J (Llamo -> [jamo])",
        "• J se čte jako CH (Jamón -> [chamón])",
        "• Ñ se čte jako Ň (España -> [espaňa])",
        "• CH se čte jako Č (Churros -> [čurros])",
        "• Q se čte jako K (Queso -> [keso])"
      ]
    },
    {
      nr: 4,
      title: "Základní fráze 👋",
      emoji: "👋🙋",
      sub: "Nejdůležitější slova pro každý den",
      desc: "Základní španělské fráze pro komunikaci a uctivé chování.",
      details: [
        "• Hola [ola] - Ahoj",
        "• Gracias [grasias] - Děkuji",
        "• Por favor [por favor] - Prosím",
        "• Adiós [adjos] - Nashledanou",
        "• Sí / No [sí/no] - Ano / Ne",
        "• ¿Cómo te llamas? [komo te jamas] - Jak se jmenuješ?",
        "• Me llamo Sofie [me jamo] - Jmenuji se Sofie"
      ]
    },
    {
      nr: 5,
      title: "Seznámení & Potřeby 🙋",
      emoji: "🙋✨",
      sub: "Jak si říct o pomoc a vyjádřit se",
      desc: "Fráze, které Sofii pomohou v každé nečekané situaci.",
      details: [
        "• Tengo sed [tengo sed] - Mám žízeň",
        "• Tengo hambre [tengo ambre] - Mám hlad",
        "• ¿Dónde está el baño? [donde esta el baňo] - Kde je WC?",
        "• ¡Ayuda! [ajuda] - Pomoc!",
        "• Estoy perdida [estoj perdida] - Ztratila jsem se",
        "• Soy de Chequia [soj de čekia] - Jsem z Česka"
      ]
    },
    {
      nr: 6,
      title: "Na pláži 🏖️",
      emoji: "🏖️/src/assets/images",
      sub: "Slovíčka do vody a do písku",
      desc: "Španělská slovíčka pro letní radovánky na Costa del Sol.",
      details: [
        "• El mar [mar] - Moře",
        "• La playa [plaja] - Pláž",
        "• La arena [arena] - Písek",
        "• El sol [sol] - Slunce",
        "• La toalla [toaja] - Ručník",
        "• Crema solar [krema solar] - Opalovací krém"
      ]
    },
    {
      nr: 7,
      title: "Čísla 0-10 🔢",
      emoji: "🔢🎯",
      sub: "Základní počítání",
      desc: "Přehled čísel od nuly do deseti pro nákup zmrzliny.",
      details: [
        "0: cero [sero] | 1: uno [uno] | 2: dos [dos]",
        "3: tres [tres] | 4: cuatro [kuatro] | 5: cinco [sinko]",
        "6: seis [sejs] | 7: siete [sjete] | 8: ocho [očo]",
        "9: nueve [nuebe] | 10: diez [djes]"
      ]
    },
    {
      nr: 8,
      title: "Čísla 11-20 🔢",
      emoji: "🔢✨",
      sub: "Pokročilé počítání",
      desc: "Počítání od jedenácti do dvaceti, ať zvládneš napočítat mušličky.",
      details: [
        "11: once [onse] | 12: doce [dose] | 13: trece [trese]",
        "14: catorce [katorse] | 15: quince [kinse]",
        "16: dieciséis [djesiséjs] | 17: diecisiete [djesisjete]",
        "18: dieciocho [djesisočo] | 19: diecinueve [djesisnuebe]",
        "20: veinte [bejnte] - Dvacet!"
      ]
    },
    {
      nr: 9,
      title: "Co ochutnat (Jídlo) 🥘",
      emoji: "🥘🍩",
      sub: "Gastronomická dobrodružství",
      desc: "Nejlepší španělské speciality, které musíš v Málaze ochutnat.",
      details: [
        "• Helado [elado] - Zmrzlina",
        "• Churros con chocolate [čurros kon čokolate] - Smažené tyčinky s čokoládou",
        "• Paella [paeja] - Šafránová rýže s masem či plody",
        "• Bocadillo [bokadijo] - Plněná bageta",
        "• Melón [melón] - Žlutý sladký meloun",
        "• Espeto [espeto] - Sardinky pečené na klacku v písku"
      ]
    },
    {
      nr: 10,
      title: "V restauraci 🍦",
      emoji: "🍦🍕",
      sub: "Jak si objednat mňamky",
      desc: "Základní fráze a slovíčka, se kterými si sama objednáš jídlo.",
      details: [
        "• Quiero... [kjero...] - Chci... / Můžu dostat...",
        "• la pizza [pica] - pizza | el pollo [pojo] - kuře",
        "• el zumo [sumo] - džus | patatas fritas - hranolky",
        "• ¿Cuánto cuesta? [kuanto kuesta] - Kolik to stojí?",
        "• La cuenta, por favor [la kuenta por favor] - Účet, prosím"
      ]
    },
    {
      nr: 11,
      title: "Barvy 🎨",
      emoji: "🎨🔴",
      sub: "Pestrobarevný svět",
      desc: "Základní i pokročilé barvy pro malování španělského slunce.",
      details: [
        "• Rojo [rocho] - Červená | Azul [asul] - Modrá",
        "• Verde [verde] - Zelená | Amarillo [amarijo] - Žlutá",
        "• Blanco [blanko] - Bílá | Negro [negro] - Černá",
        "• Gris [gris] - Šedá | Marrón [marón] - Hnědá",
        "• Naranja [narancha] - Oranžová | Rosa [rosa] - Růžová"
      ]
    },
    {
      nr: 12,
      title: "Zvířátka 🐱",
      emoji: "🐱🐶",
      sub: "Naši zvířecí kamarádi",
      desc: "Jak se řekne pejsek, kočka nebo papoušek, kterých v Málaze poletuje spousta.",
      details: [
        "• Perro [pero] - Pes | Gato [gato] - Kočka",
        "• Caballo [kabajo] - Kůň | Pez [pes] - Ryba",
        "• Pájaro [pacharo] - Pták | Tortuga [tortuga] - Želva",
        "• Delfín [delfín] - Delfín | Papagayo [papagajo] - Papoušek"
      ]
    },
    {
      nr: 13,
      title: "Andaluský slang 😎",
      emoji: "😎🔥",
      sub: "Mluv jako rodilý Málagueño",
      desc: "Super výrazy, které se používají jen na jihu Španělska. Zazáři!",
      details: [
        "• ¡Qué guay! [ke gvaj] - To je super! / To je hustý!",
        "• Vale [bale] - Dobře / Ok / Beru",
        "• ¡Vamos! [bamos] - Jdeme! / Pojďme!",
        "• Chulo [čulo] - Hezký / Cool",
        "• Guapo/a [guapo] - Krásný / fešák (i pro věci)",
        "• No ni ná [no ni na] - No jasně! / A jak by ne!"
      ]
    },
    {
      nr: 14,
      title: "Desatero na cesty 🎒",
      emoji: "🎒🚨",
      sub: "Bezpečnost a skvělá nálada",
      desc: "Zlatá pravidla, která zajistí, že si prázdniny užijete v bezpečí.",
      details: [
        "👋 Vždycky začni pozdravem: „Hola!“",
        "🙏 Za vše poděkuj: „Gracias“ s úsměvem",
        "💧 Pij hodně čisté vody, ať máš dost síly",
        "🎒 Dávej pozor na své věci, hlavně v davu",
        "🚨 Kdyby ses ztratila, popros o pomoc policistu"
      ]
    },
    {
      nr: 15,
      title: "Výlety & Zábava 🎡",
      emoji: "🎡🎢",
      sub: "Kam vyrazit za dobrodružstvím",
      desc: "Tipy na nejlepší místa, která musíš v Málaze a okolí navštívit.",
      details: [
        "🏰 Hrad Gibralfaro & pevnost Alcazaba (výhled & papoušci)",
        "🏖️ Pláž La Malagueta (písek, vlny, obří nápis)",
        "🐠 Sea Life Benalmádena (žraloci, rejnoci, chobotnice)",
        "🎡 Bioparc Fuengirola (zvířata v deštném pralese)",
        "🛍️ Calle Larios (hlavní nablýskaná třída plná zmrzliny)"
      ]
    },
    {
      nr: 16,
      title: "Diplom pro Sofii 🏆",
      emoji: "🏆⭐",
      sub: "Certifikát cestovatelky",
      desc: "Zadní strana tvého leporela, kde si odškrtáváš splněné úkoly a staneš se Královnou!",
      details: [
        "⭐ DIPLOM: Sofie — Královna španělštiny a Málagy 👸",
        "Úkoly ke splnění během dovolené:",
        "☐ Snědla jsem aspoň 5 velkých zmrzlin (Helado)",
        "☐ Koupala jsem se v moři a stavěla hrady",
        "☐ Sama jsem španělsky pozdravila a poděkovala",
        "☐ Dokážu španělsky napočítat do 10!"
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-24 scrollbar-none" id="print-section">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-b from-[#00F2FF]/15 to-transparent p-5 text-white border-b border-white/10 rounded-b-2xl">
        <h2 className="font-display text-xl font-bold flex items-center gap-2">
          <Printer className="w-5 h-5 text-[#00F2FF] filter drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]" /> <span>Tištěné kapesní leporelo 🖨️</span>
        </h2>
        <p className="text-xs text-white/85 font-medium leading-relaxed mt-1">
          Chceš mít kompletního průvodce a slovíčka u sebe v kapse na pláži, i když nebudeš mít mobil nebo internet? Vytiskni si toto oboustranné skládací leporelo (na 2 listy A4)!
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Iframe Notice & Tip */}
        <div className="bg-[#FFB800]/5 border border-[#FFB800]/25 p-4 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-[#FFB800]">
            <ShieldAlert className="w-4 h-4 shrink-0 filter drop-shadow-[0_0_4px_rgba(255,184,0,0.4)]" />
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider">DŮLEŽITÉ UPOZORNĚNÍ K TISKU</h4>
          </div>
          <p className="text-xs text-white/80 leading-relaxed font-medium">
            Pokud si prohlížíš tuto aplikaci v testovacím okně (iframe) a po kliknutí na tlačítko se ti zobrazí prázdný tiskový dialog, klikni nejdříve na tlačítko <strong className="text-[#00F2FF]">„Otevřít v nové záložce“ ↗</strong> v pravém horním rohu obrazovky. V nové záložce tisk zafunguje hned a dokonale!
          </p>
        </div>

        {/* Print Action Button */}
        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 text-center space-y-3">
          <div className="w-12 h-12 bg-[#00F2FF]/10 border border-[#00F2FF]/20 text-[#00F2FF] rounded-full flex items-center justify-center mx-auto shadow-cyber-glow">
            <Printer className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-white text-sm">Vytisknout kapesní knížečku (2x A4)</h3>
          <p className="text-xs text-white/60 leading-relaxed max-w-sm mx-auto font-medium">
            Klepnutím na tlačítko níže spustíš tisk. Průvodce se vytiskne na **dva listy papíru formátu A4** (celkem 16 detailních stránek), které pak snadno poskládáte do dvou parádních kapesních harmonik!
          </p>
          
          <button
            id="print-trigger-btn"
            onClick={handlePrint}
            className="w-full py-3 bg-[#00F2FF] hover:bg-[#00F2FF]/80 text-black text-xs font-mono font-bold uppercase tracking-wider rounded-xl active:scale-95 transition-all shadow-cyber-glow flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Spustit tisk (2 listy A4, 16 stran)</span>
          </button>
        </div>

        {/* Assembly instructions */}
        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
          <h3 className="font-display font-bold text-white text-sm flex items-center gap-1.5">
            <Info className="w-4 h-4 text-[#00F2FF]" />
            <span>Návod pro tebe a taťku: Jak složit leporela</span>
          </h3>
          
          <div className="space-y-3">
            {[
              { step: 1, text: "Vytiskněte oba listy A4 na tiskárně (barevně nebo černobíle)." },
              { step: 2, text: "List 1 obsahuje strany 1 až 8 (Základy & Pláž), List 2 obsahuje strany 9 až 16 (Jídlo, Slang & Hry)." },
              { step: 3, text: "Každý list přeložte podélně napůl (vznikne dlouhý pruh) a pak ho opět rozložte." },
              { step: 4, text: "Přeložte papír napříč na čtyři díly (harmonika) podle přerušovaných čar a urovnejte sklady." },
              { step: 5, text: "Složte jako dvě samostatná harmoniková leporela o kapesní velikosti A7. Můžeš je i slepit zády k sobě a vytvořit tak jednu tlustou knížku!" }
            ].map((st) => (
              <div key={st.step} className="flex gap-2.5 items-start text-xs text-white/70 font-medium bg-black/40 border border-white/5 p-2.5 rounded-xl">
                <span className="w-5 h-5 rounded-full bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/20 font-bold flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5 shadow-cyber-glow">
                  {st.step}
                </span>
                <p className="leading-relaxed">{st.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Paper Interactive Preview Mockup */}
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-display font-bold text-white text-xs flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#00F2FF]" />
              <span>Interaktivní náhled kapesní knížky (16 stran)</span>
            </h3>
            <span className="text-[8px] font-mono font-bold bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/20 px-1.5 py-0.5 rounded-md uppercase">
              Klikni pro detail
            </span>
          </div>
          
          <p className="text-[11px] text-white/50 leading-relaxed font-medium">
            Takhle bude vypadat poskládané kapesní leporelo. Obsahuje kompletně všechna slovíčka z aplikace! Kliknutím na jakoukoliv stranu si ji můžeš zvětšit a přečíst přímo na displeji mobilu:
          </p>

          {/* List 1 Preview Header */}
          <div className="text-[10px] font-mono font-bold text-[#00F2FF] border-b border-white/10 pb-1 pt-1">
            📄 LIST A4 Č. 1: SLOVNÍČEK, ČTENÍ & PLÁŽ (strany 1-8)
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            {previewPages.slice(0, 8).map((page) => (
              <button
                key={page.nr}
                id={`preview-page-btn-${page.nr}`}
                onClick={() => setActivePreviewPage(activePreviewPage === page.nr ? null : page.nr)}
                className={`p-3 border rounded-xl text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-24 cursor-pointer active:scale-[0.98] ${
                  activePreviewPage === page.nr
                    ? 'bg-[#00F2FF]/10 border-[#00F2FF]/40 shadow-cyber-glow'
                    : 'bg-black/30 border-white/5 hover:border-white/15'
                }`}
              >
                <div className="absolute -top-1 -right-1 text-3xl opacity-10 pointer-events-none select-none">
                  {page.emoji}
                </div>
                <div className="space-y-0.5">
                  <span className="text-[8px] font-mono font-extrabold text-[#FFB800] uppercase tracking-wider block">
                    Stránka {page.nr}
                  </span>
                  <h4 className="font-display font-bold text-white text-xs leading-tight">
                    {page.title}
                  </h4>
                  <p className="text-[9px] text-white/50 font-medium line-clamp-2 leading-tight">
                    {page.sub}
                  </p>
                </div>
                <div className="text-[8px] font-mono text-[#00F2FF] uppercase font-bold tracking-widest mt-1">
                  {activePreviewPage === page.nr ? 'Zavřít' : 'Číst detail'}
                </div>
              </button>
            ))}
          </div>

          {/* List 2 Preview Header */}
          <div className="text-[10px] font-mono font-bold text-[#00F2FF] border-b border-white/10 pb-1 pt-3">
            📄 LIST A4 Č. 2: RESTAURACE, BARVY, SLANG & HRY (strany 9-16)
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            {previewPages.slice(8, 16).map((page) => (
              <button
                key={page.nr}
                id={`preview-page-btn-${page.nr}`}
                onClick={() => setActivePreviewPage(activePreviewPage === page.nr ? null : page.nr)}
                className={`p-3 border rounded-xl text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-24 cursor-pointer active:scale-[0.98] ${
                  activePreviewPage === page.nr
                    ? 'bg-[#00F2FF]/10 border-[#00F2FF]/40 shadow-cyber-glow'
                    : 'bg-black/30 border-white/5 hover:border-white/15'
                }`}
              >
                <div className="absolute -top-1 -right-1 text-3xl opacity-10 pointer-events-none select-none">
                  {page.emoji}
                </div>
                <div className="space-y-0.5">
                  <span className="text-[8px] font-mono font-extrabold text-[#FFB800] uppercase tracking-wider block">
                    Stránka {page.nr}
                  </span>
                  <h4 className="font-display font-bold text-white text-xs leading-tight">
                    {page.title}
                  </h4>
                  <p className="text-[9px] text-white/50 font-medium line-clamp-2 leading-tight">
                    {page.sub}
                  </p>
                </div>
                <div className="text-[8px] font-mono text-[#00F2FF] uppercase font-bold tracking-widest mt-1">
                  {activePreviewPage === page.nr ? 'Zavřít' : 'Číst detail'}
                </div>
              </button>
            ))}
          </div>

          {/* Expanded Page Drawer Modal / Box */}
          <AnimatePresence>
            {activePreviewPage !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                {(() => {
                  const page = previewPages.find(p => p.nr === activePreviewPage);
                  if (!page) return null;
                  return (
                    <div className="mt-3 p-4 bg-[#00F2FF]/5 border border-[#00F2FF]/20 rounded-xl space-y-2.5">
                      <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{page.emoji}</span>
                          <div>
                            <span className="text-[9px] font-mono font-bold text-[#FFB800] uppercase tracking-wider block">
                              Strana {page.nr} z 16
                            </span>
                            <h4 className="font-display font-bold text-white text-sm">
                              {page.title}
                            </h4>
                          </div>
                        </div>
                        <button
                          id="close-expanded-page-btn"
                          onClick={() => setActivePreviewPage(null)}
                          className="text-[9px] font-mono font-bold bg-white/5 text-white/60 hover:bg-white/10 hover:text-white px-2 py-1 rounded-md border border-white/10 cursor-pointer"
                        >
                          ZAVŘÍT ✕
                        </button>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs text-white/80 font-medium leading-relaxed bg-black/30 p-2.5 rounded-lg border border-white/5">
                          {page.desc}
                        </p>
                        <div className="space-y-1.5 pl-1">
                          <h5 className="text-[9px] font-mono font-bold text-[#00F2FF] uppercase tracking-wider">
                            Obsah stránky k vytištění:
                          </h5>
                          <div className="space-y-1">
                            {page.details.map((detail, idx) => (
                              <div key={idx} className="text-xs font-semibold text-white/70 flex gap-1.5 items-start">
                                <span className="text-[#00F2FF] shrink-0">•</span>
                                <span className="leading-relaxed">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
