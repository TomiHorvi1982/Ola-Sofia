import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SPAIN_INFO, MALAGA_INFO, ADVICE_ITEMS, CHECKLIST_ITEMS, TASTE_ITEMS, TRAVEL_COMMANDMENTS } from '../data';
import { Sun, CheckSquare, Square, Flame, Compass, Heart, Compass as CompassIcon, Sparkles } from 'lucide-react';

interface CoverSectionProps {
  onSpeak: (text: string) => void;
}

export default function CoverSection({ onSpeak }: CoverSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState<'intro' | 'spain' | 'packing' | 'food'>('intro');
  const [packedItems, setPackedItems] = useState<string[]>(() => {
    const saved = localStorage.getItem('sofie_packed_items');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('sofie_packed_items', JSON.stringify(packedItems));
  }, [packedItems]);

  const togglePacked = (id: string) => {
    if (packedItems.includes(id)) {
      setPackedItems(packedItems.filter(item => item !== id));
    } else {
      setPackedItems([...packedItems, id]);
    }
  };

  const packingProgress = Math.round((packedItems.length / CHECKLIST_ITEMS.length) * 100);

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-24 scrollbar-none" id="cover-section">
      {/* Visual Banner */}
      <div className="relative bg-gradient-to-b from-[#00F2FF]/15 to-transparent p-6 pt-8 text-white rounded-b-[2rem] border-b border-white/10 text-center overflow-hidden">
        {/* Sparkles/Matrix backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="inline-block text-5xl mb-2 filter drop-shadow-[0_0_15px_rgba(0,242,255,0.5)] animate-bounce">🇪🇸</div>
          <h1 className="font-display text-2xl font-black tracking-tight text-[#E0E6ED] leading-tight">
            Moje první španělština
          </h1>
          <p className="font-mono text-[#00F2FF] text-[10px] font-bold mt-2 tracking-widest bg-[#00F2FF]/10 border border-[#00F2FF]/20 inline-block px-4 py-1 rounded-full uppercase">
            ☀️ PRŮVODCE PRO SOFII 🏖️
          </p>
        </motion.div>
      </div>

      {/* Sub-navigation tabs for Cover section */}
      <div className="flex gap-1.5 p-1.5 mx-4 mt-4 bg-white/5 border border-white/10 rounded-xl shrink-0">
        {[
          { id: 'intro', label: '👋 Ahoj' },
          { id: 'spain', label: '🌍 Málaga' },
          { id: 'packing', label: '🎒 Sbaleno' },
          { id: 'food', label: '🍦 Mňamky' }
        ].map(tab => (
          <button
            key={tab.id}
            id={`subtab-${tab.id}`}
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`flex-1 text-center py-2 text-[10px] font-bold font-mono tracking-wider uppercase rounded-lg transition-all ${
              activeSubTab === tab.id 
                ? 'bg-[#00F2FF]/20 text-[#00F2FF] border border-[#00F2FF]/30 shadow-cyber-glow scale-[1.02]' 
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="p-4 flex-1">
        <AnimatePresence mode="wait">
          {activeSubTab === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Personalized greeting */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00F2FF]/5 rounded-full pointer-events-none" />
                <h2 className="font-display text-xl font-bold text-[#00F2FF] text-glow-cyan flex items-center gap-2 mb-2">
                  <span>Ahoj Sofi!</span> 🌸
                </h2>
                <p className="text-white/80 text-xs leading-relaxed">
                  Za pár dní poletíš do krásného španělského města <strong className="text-[#00F2FF]">Málaga</strong>. Čeká tě moře, pláže, spousta zmrzliny, palmy, nové kamarádky a kamarádi i úplně nový jazyk.
                </p>
                <p className="text-white/70 text-xs leading-relaxed mt-2">
                  Neboj se, nemusíš umět španělsky dokonale. Stačí pár slovíček a úsměv. Španělé mají obrovskou radost, když se někdo snaží mluvit jejich jazykem!
                </p>

                <div className="mt-4 bg-[#FFB800]/5 p-3.5 rounded-xl border border-[#FFB800]/20 space-y-2">
                  <h3 className="font-mono font-bold text-[#FFB800] text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Pamatuj si tři věci:
                  </h3>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-white">
                    <div className="bg-white/5 border border-white/5 p-2 rounded-lg">😊 Usmívej se</div>
                    <div className="bg-white/5 border border-white/5 p-2 rounded-lg">🙋 Pozdrav</div>
                    <div className="bg-white/5 border border-white/5 p-2 rounded-lg">❤️ Neměj strach</div>
                  </div>
                </div>
              </div>

              {/* Basic Travel Commandments */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                <h2 className="font-display text-base font-bold text-[#00F2FF] text-glow-cyan mb-3 flex items-center gap-2">
                  <span>📝 Desatero malé cestovatelky</span>
                </h2>
                <div className="space-y-2.5">
                  {TRAVEL_COMMANDMENTS.map((item) => (
                    <div key={item.id} className="flex gap-3 text-xs items-start bg-white/2.5 hover:bg-white/5 border border-white/5 p-2.5 rounded-xl transition-all">
                      <span className="text-xl shrink-0">{item.emoji}</span>
                      <div className="space-y-0.5">
                        <span className="font-mono font-bold text-[10px] text-[#00F2FF] mr-1.5">{String(item.id).padStart(2, '0')}.</span>
                        <span className="text-white/80 font-medium leading-relaxed">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSubTab === 'spain' && (
            <motion.div
              key="spain"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Spain Card */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md relative">
                <div className="absolute top-4 right-4 text-3xl">👑</div>
                <h2 className="font-display text-lg font-bold text-[#FFB800] text-glow-orange flex items-center gap-2 mb-3">
                  <span>🇪🇸 {SPAIN_INFO.title}</span>
                </h2>
                
                <div className="grid grid-cols-2 gap-2.5 text-xs mb-4">
                  <div className="bg-white/5 border border-white/5 p-2.5 rounded-xl font-mono">
                    <span className="text-white/40 block text-[9px] font-bold uppercase tracking-wider">Oficiální název</span>
                    <span className="font-bold text-[#00F2FF] text-[10px]">{SPAIN_INFO.officialName}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-2.5 rounded-xl font-mono">
                    <span className="text-white/40 block text-[9px] font-bold uppercase tracking-wider">Hlavní město</span>
                    <span className="font-bold text-[#E0E6ED]">{SPAIN_INFO.capital}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-2.5 rounded-xl font-mono">
                    <span className="text-white/40 block text-[9px] font-bold uppercase tracking-wider">Měna</span>
                    <span className="font-bold text-[#00F2FF]">{SPAIN_INFO.currency}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-2.5 rounded-xl font-mono">
                    <span className="text-white/40 block text-[9px] font-bold uppercase tracking-wider">Král</span>
                    <span className="font-bold text-[#E0E6ED]">{SPAIN_INFO.king}</span>
                  </div>
                </div>
                <p className="text-white/70 text-xs leading-relaxed border-t border-white/5 pt-3">
                  {SPAIN_INFO.description}
                </p>
              </div>

              {/* Malaga Card */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                <h2 className="font-display text-lg font-bold text-[#00F2FF] text-glow-cyan flex items-center gap-2 mb-2">
                  <span>🌍 {MALAGA_INFO.title}</span>
                </h2>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00F2FF] bg-[#00F2FF]/10 px-3 py-1 border border-[#00F2FF]/20 rounded-full inline-block mb-3">
                  📍 {MALAGA_INFO.location} • 🌊 {MALAGA_INFO.sea}
                </div>
                <p className="text-white/70 text-xs leading-relaxed mb-4">
                  {MALAGA_INFO.description}
                </p>

                <div className="space-y-2 bg-white/5 p-3 rounded-xl border border-white/5">
                  <h3 className="font-mono font-bold text-[10px] text-white/40 uppercase tracking-widest mb-1.5">Co tě v Málaze čeká:</h3>
                  {MALAGA_INFO.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-white/90 font-medium">
                      {h}
                    </div>
                  ))}
                </div>

                <div className="mt-4 bg-[#FF4E00]/10 p-4 rounded-xl border border-[#FF4E00]/20 flex gap-3 items-start">
                  <Sun className="w-5 h-5 text-[#FF4E00] shrink-0 mt-0.5 animate-spin-slow" />
                  <div className="text-xs">
                    <strong className="text-[#FF4E00] block font-bold text-glow-orange font-mono uppercase tracking-wider text-[10px]">Počasí a sluníčko:</strong>
                    <span className="text-white/80 leading-relaxed text-xs">{MALAGA_INFO.weather}</span>
                  </div>
                </div>
              </div>

              {/* Weather advice */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                <h2 className="font-display text-base font-bold text-[#FF4E00] text-glow-orange mb-3 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#FF4E00]" /> <span>Jak přežít horko (🌞 Tipy)</span>
                </h2>
                <div className="space-y-2">
                  {ADVICE_ITEMS.map((adv) => (
                    <div key={adv.id} className="flex gap-2.5 items-center bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <span className="text-xl">{adv.emoji}</span>
                      <p className="text-white/80 text-xs font-medium leading-relaxed">{adv.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Picasso Fun Fact */}
              <div className="bg-gradient-to-br from-[#00F2FF]/15 to-[#FF4E00]/5 border border-white/10 p-5 rounded-2xl text-white">
                <h3 className="font-mono font-bold text-xs mb-1.5 flex items-center gap-1.5 text-[#FFB800] uppercase tracking-wider">
                  🎨 Věděla jsi, že...
                </h3>
                <p className="text-white/80 text-xs leading-relaxed font-medium">
                  Slavný malíř <strong>Pablo Picasso</strong> se narodil právě v Málaze? Na hlavním náměstí najdeš dům, kde jako malý kluk bydlel, a hned kousek vedle je muzeum s jeho úžasnými barevnými obrazy!
                </p>
              </div>
            </motion.div>
          )}

          {activeSubTab === 'packing' && (
            <motion.div
              key="packing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                <h2 className="font-display text-lg font-bold text-[#00F2FF] text-glow-cyan mb-1 flex items-center gap-2">
                  <span>🎒 Co si sbalit do kufru?</span>
                </h2>
                <p className="text-[10px] text-white/40 mb-4 font-mono font-bold uppercase tracking-wider">
                  ZAŠKRTÁVEJ POLOŽKY PODLE TOHO, JAK JE BALÍŠ DO KUFŘÍKU!
                </p>

                {/* Progress bar */}
                <div className="mb-5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="flex justify-between text-xs font-bold font-mono text-[#00F2FF] mb-1">
                    <span>STAV BALENÍ</span>
                    <span>{packingProgress}% HOTOVO</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#00F2FF] h-full shadow-cyber-glow transition-all duration-500 ease-out" 
                      style={{ width: `${packingProgress}%` }}
                    />
                  </div>
                  {packingProgress === 100 && (
                    <motion.p 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-[10px] text-[#00F2FF] text-glow-cyan font-bold text-center mt-2 font-mono uppercase tracking-wider"
                    >
                      🎉 ÚŽASNÉ, SOFI! MÁŠ KOMPLET SBALENO! PRÁZDNINY MOHOU ZAČÍT! 🏖️
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  {CHECKLIST_ITEMS.map((item) => {
                    const isPacked = packedItems.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        id={`pack-btn-${item.id}`}
                        onClick={() => togglePacked(item.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl text-left border transition-all ${
                          isPacked 
                            ? 'bg-[#00F2FF]/5 border-[#00F2FF]/20 text-white/40' 
                            : 'bg-white/5 hover:bg-white/10 border-white/5 text-white/90'
                        }`}
                      >
                        <span className="text-xl shrink-0">{item.emoji}</span>
                        <span className={`text-xs font-semibold flex-1 ${isPacked ? 'line-through opacity-60' : ''}`}>
                          {item.label}
                        </span>
                        <div className="shrink-0">
                          {isPacked ? (
                            <div className="w-5 h-5 rounded-full bg-[#00F2FF] flex items-center justify-center text-black font-extrabold text-[11px] shadow-cyber-glow">✓</div>
                          ) : (
                            <div className="w-5 h-5 rounded-md border-2 border-white/20 hover:border-[#00F2FF]/40" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {activeSubTab === 'food' && (
            <motion.div
              key="food"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                <h2 className="font-display text-[#FFB800] text-glow-orange text-base font-bold mb-1 flex items-center gap-2">
                  <span>🍦 6 španělských dobrot, které musíš ochutnat</span>
                </h2>
                <p className="text-[10px] text-white/40 mb-4 font-mono font-bold uppercase tracking-wider">
                  KLEPNI NA TLAČÍTKO PRO SPRÁVNOU VÝSLOVNOST DOBROTY!
                </p>

                <div className="grid grid-cols-1 gap-3.5">
                  {TASTE_ITEMS.map((item, index) => (
                    <div key={index} className="bg-white/5 p-3.5 rounded-2xl border border-white/5 space-y-2 relative overflow-hidden hover:border-white/10 transition-all">
                      <div className="absolute top-2 right-2 text-3xl opacity-10 pointer-events-none select-none">{item.emoji}</div>
                      
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex gap-2 items-center">
                            <span className="text-xl">{item.emoji}</span>
                            <span className="font-bold text-white text-sm font-display">{item.name}</span>
                          </div>
                          <div className="text-[9px] text-[#FFB800] font-bold font-mono mt-1 bg-[#FFB800]/15 border border-[#FFB800]/25 px-2 py-0.5 rounded-md inline-block uppercase tracking-wider">
                            čti: [{item.pronunciation}]
                          </div>
                        </div>

                        <button
                          id={`speak-food-${index}`}
                          onClick={() => onSpeak(item.name)}
                          className="p-2 rounded-full bg-[#00F2FF] hover:bg-[#00F2FF]/80 text-black shadow-cyber-glow active:scale-95 transition-all text-xs"
                        >
                          🔊
                        </button>
                      </div>

                      <div className="text-xs">
                        <span className="font-bold text-[#00F2FF] block mt-1">{item.translation}</span>
                        <p className="text-white/70 mt-1 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
