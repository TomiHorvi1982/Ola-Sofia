import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CoverSection from './components/CoverSection';
import PronunciationSection from './components/PronunciationSection';
import VocabularySection from './components/VocabularySection';
import PlacesSection from './components/PlacesSection';
import GamesSection from './components/GamesSection';
import PrintSection from './components/PrintSection';
import { 
  Home, 
  BookOpen, 
  BookMarked, 
  MapPin, 
  Gamepad2, 
  Printer, 
  Volume2, 
  Sparkles,
  Smartphone,
  CheckCircle
} from 'lucide-react';

type TabType = 'home' | 'pronounce' | 'vocab' | 'places' | 'games' | 'print';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [speechEnabled, setSpeechEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [waving, setWaving] = useState(true);
  const [currentTime, setCurrentTime] = useState('');

  // Live telemetry clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('cs-CZ'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Trigger speech synthesis
  const speakWord = (text: string) => {
    if (!speechEnabled) return;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop current speech
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES'; // Spanish
      utterance.rate = 0.8; // Slightly slower for child
      
      // Select Spanish voice if possible
      const voices = window.speechSynthesis.getVoices();
      const spanishVoice = voices.find(v => v.lang.startsWith('es'));
      if (spanishVoice) {
        utterance.voice = spanishVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        playSynthBeep('click');
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech synthesis is not supported in this browser.");
    }
  };

  // Web Audio API offline synth sound effects! Highly responsive.
  const playSynthBeep = (type: 'success' | 'click' | 'wrong') => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, audioCtx.currentTime); // A3
        osc.frequency.setValueAtTime(180, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
      }
    } catch (e) {
      // Audio context failed to load/blocked
    }
  };

  // Trigger simple waving hand animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setWaving(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#030509] flex flex-col items-center justify-center font-sans antialiased text-[#E0E6ED] relative overflow-hidden">
      {/* Abstract background ambient grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00F2FF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF4E00]/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* 1. Main Mobile Viewport Frame - on desktop wraps in phone mockup, on mobile full width */}
      <div className="w-full max-w-md h-screen md:h-[840px] bg-[#030509]/90 md:rounded-[2.5rem] md:shadow-[0_0_50px_rgba(0,242,255,0.15)] overflow-hidden flex flex-col border border-white/10 relative md:my-4 print:hidden z-10">
        
        {/* Top Status Bar (Simulated Phone Status Bar for immersive UX) */}
        <div className="bg-black/80 text-[#00F2FF] text-[9px] font-mono px-6 py-2.5 flex justify-between items-center select-none shrink-0 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse inline-block" />
            <span className="tracking-widest">MÁLAGA LINK: ACTIVE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[8px] opacity-70">LATENCY: 14MS</span>
            <span>{currentTime || '09:41'}</span>
          </div>
        </div>

        {/* Brand App Header */}
        <header className="bg-black/40 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <motion.div 
              animate={waving ? { rotate: [0, 20, -20, 20, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1, repeatDelay: 1 }}
              className="text-2xl cursor-pointer filter drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]"
              onClick={() => setWaving(true)}
            >
              🌸
            </motion.div>
            <div>
              <h2 className="font-display font-black text-sm text-[#E0E6ED] tracking-tight flex items-center gap-1.5">
                <span className="text-glow-cyan text-[#00F2FF]">Hola Sofía!</span>
                {isSpeaking && (
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="inline-block text-xs"
                  >
                    🗣️
                  </motion.span>
                )}
              </h2>
              <p className="text-[10px] text-white/50 font-bold tracking-wider font-mono">SECTOR: MALAGA_TRANS_07</p>
            </div>
          </div>

          <button
            id="speech-toggle-btn"
            onClick={() => {
              setSpeechEnabled(!speechEnabled);
              playSynthBeep('click');
            }}
            className={`px-3 py-1.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all border ${
              speechEnabled 
                ? 'bg-[#00F2FF]/10 text-[#00F2FF] border-[#00F2FF]/30 shadow-cyber-glow' 
                : 'bg-white/5 text-white/40 border-white/10'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${speechEnabled ? 'bg-[#00F2FF]' : 'bg-white/30'}`} />
            <span>{speechEnabled ? 'AUDIO ON' : 'AUDIO OFF'}</span>
          </button>
        </header>

        {/* 2. Main Content Container */}
        <main className="flex-1 overflow-hidden relative bg-[#030509]/30">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="h-full"
              >
                <CoverSection onSpeak={speakWord} />
              </motion.div>
            )}
            {activeTab === 'pronounce' && (
              <motion.div
                key="pronounce"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="h-full"
              >
                <PronunciationSection onSpeak={speakWord} />
              </motion.div>
            )}
            {activeTab === 'vocab' && (
              <motion.div
                key="vocab"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="h-full"
              >
                <VocabularySection onSpeak={speakWord} />
              </motion.div>
            )}
            {activeTab === 'places' && (
              <motion.div
                key="places"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="h-full"
              >
                <PlacesSection onSpeak={speakWord} />
              </motion.div>
            )}
            {activeTab === 'games' && (
              <motion.div
                key="games"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="h-full"
              >
                <GamesSection onSpeak={speakWord} />
              </motion.div>
            )}
            {activeTab === 'print' && (
              <motion.div
                key="print"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="h-full"
              >
                <PrintSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* 3. Bottom Interactive Tab Navigation Bar */}
        <nav className="bg-black/95 border-t border-white/10 px-2 py-2.5 flex justify-between items-center shrink-0 absolute bottom-0 left-0 right-0 z-30 shadow-2xl">
          {[
            { id: 'home', icon: Home, label: 'Domů' },
            { id: 'pronounce', icon: BookOpen, label: 'Čtení' },
            { id: 'vocab', icon: BookMarked, label: 'Slovíčka' },
            { id: 'places', icon: MapPin, label: 'Výlety' },
            { id: 'games', icon: Gamepad2, label: 'Hry' },
            { id: 'print', icon: Printer, label: 'Složit' }
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-tab-${tab.id}`}
                onClick={() => {
                  setActiveTab(tab.id as TabType);
                  playSynthBeep('click');
                }}
                className="flex-1 flex flex-col items-center justify-center py-0.5 select-none active:scale-95 transition-transform"
              >
                <div className={`p-2 rounded-xl transition-all ${
                  isSelected 
                    ? 'bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/30 scale-110 shadow-cyber-glow' 
                    : 'text-white/40 hover:text-white/70 border border-transparent'
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className={`text-[9px] font-semibold mt-1 tracking-wider uppercase font-mono ${
                  isSelected ? 'text-[#00F2FF] font-extrabold' : 'text-white/30'
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Printable Paper Version — COMPLETELY HIDDEN ON SCREEN, REVEALED ON PRINT */}
      <div className="hidden print:block font-sans text-black leading-relaxed" style={{ width: '210mm', height: '297mm' }}>
        
        {/* A4 Folding Page (Leporelo 2x4 grid layout) */}
        <div className="print-page">
          <div className="text-center mb-4 border-b-2 border-dashed border-slate-300 pb-2">
            <h1 className="text-xl font-extrabold text-slate-900">🇪🇸 MOJE PRVNÍ ŠPANĚLŠTINA — KAPESNÍ LEPÕRELO ☀️</h1>
            <p className="text-xs font-bold text-slate-500">Skládací tahák do kapsy pro Sofii | Prázdniny v Málaze ☀️🏖️</p>
          </div>

          <div className="print-grid grid grid-cols-2 gap-4">
            
            {/* Page 1: Obálka */}
            <div className="print-card border border-dashed border-slate-400 p-3 flex flex-col justify-between h-[65mm] bg-white">
              <div className="text-center space-y-1.5">
                <span className="text-3xl">🌸🇪🇸☀️</span>
                <h3 className="text-base font-extrabold text-slate-900 leading-tight">Moje první španělština</h3>
                <p className="text-[10px] font-bold text-slate-500">Kapesní průvodce pro Sofii</p>
                <p className="text-[9px] font-medium text-slate-600 bg-slate-100 p-1.5 rounded-md leading-relaxed">
                  Pamatuj: 😊 Usmívej se, 🙋 Pozdrav (Hola!), ❤️ Neměj strach mluvit!
                </p>
              </div>
              <div className="text-center text-[8px] font-bold text-slate-400 border-t pt-1">Stránka 1 (Obálka)</div>
            </div>

            {/* Page 2: O Málaze */}
            <div className="print-card border border-dashed border-slate-400 p-3 flex flex-col justify-between h-[65mm] bg-white">
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🌴 Málaga & Horko</h4>
                <p className="text-[9px] leading-relaxed text-slate-600">
                  Málaga leží na jihu Španělska (oblast Andalusie). Je tu Středozemní moře a 300+ slunečných dní v roce!
                </p>
                <div className="text-[8px] space-y-0.5 bg-slate-50 p-1 rounded-md border text-slate-700">
                  <div>✔ <strong>Pij vodu:</strong> Pořád pij, slunce hřeje!</div>
                  <div>✔ <strong>Klobouk:</strong> Vždy kšiltovku na hlavu.</div>
                  <div>✔ <strong>Krém:</strong> Maž se vysokým faktorem!</div>
                </div>
              </div>
              <div className="text-center text-[8px] font-bold text-slate-400 border-t pt-1">Stránka 2</div>
            </div>

            {/* Page 3: Výslovnost */}
            <div className="print-card border border-dashed border-slate-400 p-3 flex flex-col justify-between h-[65mm] bg-white">
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🗣️ Výslovnostní tahák</h4>
                <p className="text-[8px] font-bold text-slate-500">Španělština se čte snadno, stačí znát:</p>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[8px] font-medium text-slate-700">
                  <div>• H = nečte se</div>
                  <div>• LL = J [jamo]</div>
                  <div>• J = CH [chose]</div>
                  <div>• Ñ = Ň [espaňa]</div>
                  <div>• CH = Č [čurros]</div>
                  <div>• Q = K [keso]</div>
                  <div>• C + E/I = S</div>
                  <div>• V = B [bamos]</div>
                </div>
                <div className="text-[7px] text-slate-500 bg-slate-50 p-1 rounded-md border">
                  Příklad: <strong>Hola</strong> čti <em>ola</em>, <strong>Gracias</strong> čti <em>grasias</em>.
                </div>
              </div>
              <div className="text-center text-[8px] font-bold text-slate-400 border-t pt-1">Stránka 3</div>
            </div>

            {/* Page 4: Základní fráze */}
            <div className="print-card border border-dashed border-slate-400 p-3 flex flex-col justify-between h-[65mm] bg-white">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🙋 Základní fráze</h4>
                <div className="space-y-1 text-[8px] font-medium text-slate-700">
                  <div>• <strong>Hola</strong> [ola] — Ahoj</div>
                  <div>• <strong>Gracias</strong> [grasias] — Děkuji</div>
                  <div>• <strong>Por favor</strong> [por favor] — Prosím</div>
                  <div>• <strong>Adiós</strong> [adjos] — Nashledanou</div>
                  <div>• <strong>Sí / No</strong> [sí/no] — Ano / Ne</div>
                  <div>• <strong>Me llamo Sofie</strong> [me jamo] — Jmenuji se Sofie</div>
                  <div>• <strong>¿Dónde está el baño?</strong> [donde esta el baňo] — Kde je WC?</div>
                </div>
              </div>
              <div className="text-center text-[8px] font-bold text-slate-400 border-t pt-1">Stránka 4</div>
            </div>

            {/* Page 5: Na pláži & Restaurace */}
            <div className="print-card border border-dashed border-slate-400 p-3 flex flex-col justify-between h-[65mm] bg-white">
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🏖️ Pláž & Jídlo</h4>
                <div className="grid grid-cols-2 gap-1 text-[8px] font-medium text-slate-700">
                  <div>• <strong>Mar</strong> [mar] — Moře</div>
                  <div>• <strong>Playa</strong> [plaja] — Pláž</div>
                  <div>• <strong>Helado</strong> [elado] — Zmrzlina</div>
                  <div>• <strong>Agua</strong> [agva] — Voda</div>
                </div>
                <div className="text-[8px] text-slate-700 border-t pt-1 leading-normal">
                  • <strong>Quiero...</strong> [kjero] — Chci...<br />
                  • <strong>el zumo</strong> [sumo] — džus<br />
                  • <strong>la pizza</strong> [pica] — pizzu<br />
                  • <strong>patatas fritas</strong> — hranolky
                </div>
              </div>
              <div className="text-center text-[8px] font-bold text-slate-400 border-t pt-1">Stránka 5</div>
            </div>

            {/* Page 6: Čísla 1-20 */}
            <div className="print-card border border-dashed border-slate-400 p-3 flex flex-col justify-between h-[65mm] bg-white">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🔢 Číslovky 0-20</h4>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[7px] font-mono font-bold text-slate-700">
                  <div>0: cero [sero]</div>
                  <div>1: uno [uno]</div>
                  <div>2: dos [dos]</div>
                  <div>3: tres [tres]</div>
                  <div>4: cuatro [kuatro]</div>
                  <div>5: cinco [sinko]</div>
                  <div>10: diez [djes]</div>
                  <div>11: once [onse]</div>
                  <div>12: doce [dose]</div>
                  <div>15: quince [kinse]</div>
                  <div>20: veinte [bejnte]</div>
                </div>
              </div>
              <div className="text-center text-[8px] font-bold text-slate-400 border-t pt-1">Stránka 6</div>
            </div>

            {/* Page 7: Barvy & Zvířata */}
            <div className="print-card border border-dashed border-slate-400 p-3 flex flex-col justify-between h-[65mm] bg-white">
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🎨 Barvy & 🐱 Zvířátka</h4>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[8px] font-semibold text-slate-700">
                  <div>🔴 Rojo [rocho] — červená</div>
                  <div>🔵 Azul [asul] — modrá</div>
                  <div>🟢 Verde [verde] — zelená</div>
                  <div>🟡 Amarillo — žlutá</div>
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[8px] font-semibold text-slate-700 border-t pt-1.5">
                  <div>🐶 perro — pes</div>
                  <div>🐱 gato — kočka</div>
                  <div>🐴 caballo — kůň</div>
                  <div>🐟 pez — ryba</div>
                </div>
              </div>
              <div className="text-center text-[8px] font-bold text-slate-400 border-t pt-1">Stránka 7</div>
            </div>

            {/* Page 8: Slang & Tipy */}
            <div className="print-card border border-dashed border-slate-400 p-3 flex flex-col justify-between h-[65mm] bg-white">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">😎 Slang & Výlety</h4>
                <div className="space-y-0.5 text-[8px] text-slate-700">
                  <div>• <strong>¡Qué guay!</strong> [ke gvaj] — To je super!</div>
                  <div>• <strong>Vale</strong> [bale] — Dobře / Ok</div>
                  <div>• <strong>¡Vamos!</strong> [bamos] — Jdeme!</div>
                </div>
                <div className="text-[7.5px] text-slate-600 bg-slate-50 p-1.5 rounded-md border mt-1 font-medium leading-tight">
                  🐾 <strong>Výlety:</strong> Pláž La Malagueta, Sea Life Benalmádena, hrad Gibralfaro, Bioparc.
                </div>
              </div>
              <div className="text-center text-[8px] font-bold text-slate-400 border-t pt-1">Stránka 8</div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}
