import React from 'react';
import { motion } from 'motion/react';
import { Printer, Info, Check, ShieldAlert, FileText, ChevronRight } from 'lucide-react';
import { PRONUNCIATION_RULES, TRAVEL_COMMANDMENTS } from '../data';

export default function PrintSection() {
  const handlePrint = () => {
    window.print();
  };

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
            className="w-full py-3 bg-[#00F2FF] hover:bg-[#00F2FF]/80 text-black text-xs font-mono font-bold uppercase tracking-wider rounded-xl active:scale-95 transition-all shadow-cyber-glow flex items-center justify-center gap-1.5"
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

        {/* Paper Preview */}
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2.5">
          <h3 className="font-display font-bold text-white text-xs flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-[#00F2FF]" />
            <span>Náhled tiskových stránek leporela (8 stránek)</span>
          </h3>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 border border-dashed border-white/10 rounded-lg bg-black/20">
              <span className="font-mono font-bold text-[#00F2FF] uppercase tracking-wider block mb-0.5">Strana 1: Obálka ☀️</span>
              <span className="text-white/50 leading-normal">Název průvodce, věnování pro Sofii a sluneční doplňky.</span>
            </div>
            <div className="p-2 border border-dashed border-white/10 rounded-lg bg-black/20">
              <span className="font-mono font-bold text-[#00F2FF] uppercase tracking-wider block mb-0.5">Strana 2: Málaga & Horko 🌴</span>
              <span className="text-white/50 leading-normal">Základní tipy, jak přežít horko a tipy o Málaze.</span>
            </div>
            <div className="p-2 border border-dashed border-white/10 rounded-lg bg-black/20">
              <span className="font-mono font-bold text-[#00F2FF] uppercase tracking-wider block mb-0.5">Strana 3: Výslovnost 🗣️</span>
              <span className="text-white/50 leading-normal">Mini tahák (H se nečte, LL = J, J = CH, Ñ = Ň).</span>
            </div>
            <div className="p-2 border border-dashed border-white/10 rounded-lg bg-black/20">
              <span className="font-mono font-bold text-[#00F2FF] uppercase tracking-wider block mb-0.5">Strana 4: Základy fráze 👋</span>
              <span className="text-white/50 leading-normal">Hola, Gracias, Por favor, ¿Dónde está el baño?</span>
            </div>
            <div className="p-2 border border-dashed border-white/10 rounded-lg bg-black/20">
              <span className="font-mono font-bold text-[#00F2FF] uppercase tracking-wider block mb-0.5">Strana 5: Na pláži & jídlo 🏖️</span>
              <span className="text-white/50 leading-normal">Slovíčka jako Mar, Playa, Helado, Quiero pizza...</span>
            </div>
            <div className="p-2 border border-dashed border-white/10 rounded-lg bg-black/20">
              <span className="font-mono font-bold text-[#00F2FF] uppercase tracking-wider block mb-0.5">Strana 6: Čísla 1-20 🔢</span>
              <span className="text-white/50 leading-normal">Uno, dos, tres, cuatro, diez, quince, veinte...</span>
            </div>
            <div className="p-2 border border-dashed border-white/10 rounded-lg bg-black/20">
              <span className="font-mono font-bold text-[#00F2FF] uppercase tracking-wider block mb-0.5">Strana 7: Barvy & Zvířátka 🐱</span>
              <span className="text-white/50 leading-normal">Rojo, azul, verde, amarillo, perro, gato, pez.</span>
            </div>
            <div className="p-2 border border-dashed border-white/10 rounded-lg bg-black/20">
              <span className="font-mono font-bold text-[#00F2FF] uppercase tracking-wider block mb-0.5">Strana 8: Slang & Výlety 😎</span>
              <span className="text-white/50 leading-normal">¡Qué guay!, Vale, ¡Vamos!, Sea Life, Gibralfaro.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
