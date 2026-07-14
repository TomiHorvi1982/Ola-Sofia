import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Printer, Info, ShieldAlert, FileText, Sparkles, CheckCircle, Smartphone } from 'lucide-react';

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
        "🌸 Krásné uvítání pro desetiletou Sofii",
        "🙋 Připomínka: Usmívej se, pozdrav (Hola!) a mluv!",
        "✨ Vejde se přesně do kapsy u kraťasů"
      ]
    },
    {
      nr: 2,
      title: "Málaga & Horko 🌴",
      emoji: "🌴🏖️",
      sub: "Jak si užít sluníčko bezpečně",
      desc: "Základní informace o Málaze a 3 nejdůležitější pravidla pro přežití v horku.",
      details: [
        "💧 Pij vodu po celý den, i když nemáš žízeň",
        "🧢 Kšiltovka nebo klobouk vždy na hlavě",
        "🧴 Opalovací krém s vysokým faktorem"
      ]
    },
    {
      nr: 3,
      title: "Výslovnost 🗣️",
      emoji: "🗣️📖",
      sub: "Jak číst španělská písmenka",
      desc: "Mini tahák s nejdůležitějšími pravidly výslovnosti pro rychlé pochopení.",
      details: [
        "• H se nikdy nečte (Hola -> [ola])",
        "• LL se čte jako J (Llamo -> [jamo])",
        "• J se čte jako CH (Jamón -> [chamón])",
        "• Ñ se čte jako Ň (España -> [espaňa])"
      ]
    },
    {
      nr: 4,
      title: "Základy fráze 👋",
      emoji: "👋🙋",
      sub: "Nejdůležitější slova pro každý den",
      desc: "Základní španělské fráze jako ahoj, děkuji, prosím a kde je záchod.",
      details: [
        "• Hola [ola] - Ahoj",
        "• Gracias [grasias] - Děkuji",
        "• Por favor [por favor] - Prosím",
        "• ¿Dónde está el baño? [donde esta el baňo] - Kde je WC?"
      ]
    },
    {
      nr: 5,
      title: "Na pláži & jídlo 🏖️",
      emoji: "🏖️🍦",
      sub: "Slovíčka do vody a do restaurace",
      desc: "Jak si objednat zmrzlinu, pizzu a jak se řekne moře nebo pláž.",
      details: [
        "• Mar [mar] - Moře | Playa [plaja] - Pláž",
        "• Helado [elado] - Zmrzlina | Agua [agva] - Voda",
        "• Quiero... [kjero...] - Chci...",
        "• el zumo [sumo] - džus | la pizza [pica] - pizza"
      ]
    },
    {
      nr: 6,
      title: "Čísla 1-20 🔢",
      emoji: "🔢🎯",
      sub: "Počítání od nuly do dvaceti",
      desc: "Přehledná tabulka čísel, se kterou hravě spočítáš mušličky nebo kopečky zmrzliny.",
      details: [
        "1: uno | 2: dos | 3: tres | 4: cuatro | 5: cinco",
        "10: diez | 11: once | 12: doce | 15: quince",
        "20: veinte [bejnte] - dvacet!"
      ]
    },
    {
      nr: 7,
      title: "Barvy & Zvířátka 🐱",
      emoji: "🎨🐱",
      sub: "Malování a zvířecí kamarádi",
      desc: "Čtyři základní barvy a čtyři nejznámější zvířátka, která můžeš potkat.",
      details: [
        "🔴 Rojo [rocho] | 🔵 Azul [asul] | 🟢 Verde | 🟡 Amarillo",
        "🐶 perro [pero] - pes | 🐱 gato - kočka",
        "🐴 caballo [kabajo] - kůň | 🐟 pez [pes] - ryba"
      ]
    },
    {
      nr: 8,
      title: "Slang & Výlety 😎",
      emoji: "😎🎢",
      sub: "Jak mluvit jako místní",
      desc: "Super andaluské výrazy jako ¡Qué guay! a tipy na nejlepší výlety v okolí.",
      details: [
        "• ¡Qué guay! [ke gvaj] - To je super!",
        "• Vale [bale] - Dobře / Beru / Ok",
        "• ¡Vamos! [bamos] - Jdeme!",
        "🎡 Tipy: Sea Life, hrad Gibralfaro, Bioparc, Aqualand"
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
          Chceš mít průvodce u sebe v kapse na pláži, i když zrovna nebudeš mít telefon? Vytiskni si tento skládací tahák velikosti A7!
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
          <h3 className="font-display font-bold text-white text-sm">Vytisknout skládací knížečku</h3>
          <p className="text-xs text-white/60 leading-relaxed max-w-sm mx-auto font-medium">
            Klepnutím na tlačítko níže otevřeš tiskový dialog. Průvodce se vytiskne na jeden list papíru formátu A4, který pak snadno poskládáš do kapsy.
          </p>
          
          <button
            id="print-trigger-btn"
            onClick={handlePrint}
            className="w-full py-3 bg-[#00F2FF] hover:bg-[#00F2FF]/80 text-black text-xs font-mono font-bold uppercase tracking-wider rounded-xl active:scale-95 transition-all shadow-cyber-glow flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Spustit tisk kapesní verze (A4)</span>
          </button>
        </div>

        {/* Assembly instructions */}
        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
          <h3 className="font-display font-bold text-white text-sm flex items-center gap-1.5">
            <Info className="w-4 h-4 text-[#00F2FF]" />
            <span>Návod pro tebe a taťku: Jak složit leporelo</span>
          </h3>
          
          <div className="space-y-3">
            {[
              { step: 1, text: "Vytiskněte stránku na tiskárně na bílý papír A4 (barevně nebo černobíle)." },
              { step: 2, text: "Přeložte papír podélně napůl (vznikne dlouhý pruh) a pak ho opět rozložte." },
              { step: 3, text: "Přeložte papír napříč na čtyři díly (harmonika) a urovnejte sklady." },
              { step: 4, text: "Podle vyznačených čar papír poskládejte jako harmonikové leporelo o velikosti A7 (vejde se do dlaně!)." },
              { step: 5, text: "Gratulujeme! Máš hotový skvělý skládací sešitek, který můžeš vzít kamkoliv!" }
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
              <span>Interaktivní náhled stránek knížečky (8 stran)</span>
            </h3>
            <span className="text-[8px] font-mono font-bold bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/20 px-1.5 py-0.5 rounded-md uppercase">
              Klikni pro detail
            </span>
          </div>
          
          <p className="text-[11px] text-white/50 leading-relaxed font-medium">
            Takhle bude vypadat poskládané kapesní leporelo. Kliknutím na jakoukoliv stranu si ji můžeš zvětšit a přečíst přímo na displeji mobilu:
          </p>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            {previewPages.map((page) => (
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
                              Strana {page.nr} z 8
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
