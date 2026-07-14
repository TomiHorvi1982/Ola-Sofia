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
      <div className="hidden print:block print-page-wrapper font-sans text-black leading-relaxed">
        
        {/* A4 Folding Page 1 (Leporelo 2x4 grid layout - Strany 1-8) */}
        <div className="print-page mb-8">
          <div className="text-center mb-1 pb-0.5 border-b border-dashed border-slate-300">
            <h2 className="text-[9px] font-extrabold text-slate-800">🇪🇸 MOJE PRVNÍ ŠPANĚLŠTINA — KAPESNÍ LEPÕRELO (LIST 1 Č. 1-8) ☀️</h2>
          </div>

          <div className="print-grid grid grid-cols-2 gap-2">
            
            {/* Page 1: Obálka */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="text-center space-y-1">
                <span className="text-2xl block">🌸🇪🇸☀️</span>
                <h3 className="text-sm font-extrabold text-slate-900 leading-tight">Moje první španělština</h3>
                <p className="text-[9px] font-bold text-slate-500">Kapesní průvodce pro Sofii 👸</p>
                <p className="text-[8px] font-medium text-slate-700 bg-slate-100 p-1.5 rounded border border-slate-200 leading-relaxed">
                  Pamatuj: 😊 Usmívej se, 🙋 Pozdrav (Hola!), ❤️ Neměj strach mluvit a užij si Málagu!
                </p>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 1 (Obálka)</div>
            </div>

            {/* Page 2: O Málaze */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5 flex justify-between">
                  <span>🌴 Málaga & Španělsko</span>
                  <span className="text-[9px]">🇪🇸</span>
                </h4>
                <p className="text-[7.5px] leading-tight text-slate-600">
                  Málaga leží na jihu Španělska (Andalusie). Je tu Středozemní moře a 300+ slunečných dní v roce!
                </p>
                <div className="text-[7px] space-y-0.5 bg-slate-50 p-1 rounded border border-slate-150 text-slate-700">
                  <div>💧 <strong>Pij vodu:</strong> Pořád pij, slunce hřeje!</div>
                  <div>🧢 <strong>Klobouk:</strong> Vždy kšiltovku na hlavu.</div>
                  <div>🧴 <strong>Krém:</strong> Pravidelně se maž SPF 50+.</div>
                  <div>💶 <strong>Měna:</strong> Platí se zde eurem (€).</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 2</div>
            </div>

            {/* Page 3: Výslovnost */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🗣️ Výslovnostní tahák</h4>
                <p className="text-[7.5px] font-bold text-slate-500">Španělština se čte snadno, stačí znát:</p>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[7px] font-medium text-slate-700">
                  <div>• H = nečte se [ola]</div>
                  <div>• LL = J [jamo]</div>
                  <div>• J = CH [chamón]</div>
                  <div>• Ñ = Ň [espaňa]</div>
                  <div>• CH = Č [čurros]</div>
                  <div>• Q = K [keso]</div>
                  <div>• C+E/I = S [sena]</div>
                  <div>• V = B [bamos]</div>
                </div>
                <div className="text-[7px] text-slate-500 bg-slate-50 px-1 py-0.5 rounded border border-slate-150 leading-tight">
                  Příklad: <strong>Hola</strong> čti [ola], <strong>Gracias</strong> čti [grasias].
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 3</div>
            </div>

            {/* Page 4: Základní fráze */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">👋 Základní fráze</h4>
                <div className="space-y-0.5 text-[7.5px] font-medium text-slate-700">
                  <div>• <strong>Hola</strong> [ola] — Ahoj / Dobrý den</div>
                  <div>• <strong>Buenos días</strong> [buenos dýas] — Dobré ráno</div>
                  <div>• <strong>Buenas tardes</strong> [buenas t.] — Dobré odpoledne</div>
                  <div>• <strong>Buenas noches</strong> [buenas n.] — Dobrou noc</div>
                  <div>• <strong>Gracias</strong> [grasias] — Děkuji</div>
                  <div>• <strong>Por favor</strong> [por favor] — Prosím</div>
                  <div>• <strong>Adiós</strong> [adjos] — Nashledanou</div>
                  <div>• <strong>Sí / No</strong> — Ano / Ne</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 4</div>
            </div>

            {/* Page 5: Seznámení & Potřeby */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🙋 Seznámení & Potřeby</h4>
                <div className="space-y-0.5 text-[7px] font-medium text-slate-700">
                  <div>• <strong>¿Cómo te llamas?</strong> [komo te jamas] — Jak se jmenuješ?</div>
                  <div>• <strong>Me llamo Sofie.</strong> [me jamo] — Jmenuji se Sofie.</div>
                  <div>• <strong>¿Dónde está el baño?</strong> [donde esta] — Kde je WC?</div>
                  <div>• <strong>Tengo sed.</strong> [tengo sed] — Mám žízeň.</div>
                  <div>• <strong>Tengo hambre.</strong> [tengo ambre] — Mám hlad.</div>
                  <div>• <strong>¡Ayuda!</strong> [ajuda] — Pomoc!</div>
                  <div>• <strong>Estoy perdida.</strong> [estoj perdida] — Ztratila jsem se.</div>
                  <div>• <strong>Soy de Chequia.</strong> [soj de čekia] — Jsem z Česka.</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 5</div>
            </div>

            {/* Page 6: Na pláži */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🏖️ Slovíčka na pláži</h4>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[7.5px] font-semibold text-slate-700">
                  <div>• <strong>El mar</strong> — Moře</div>
                  <div>• <strong>La playa</strong> — Pláž</div>
                  <div>• <strong>La arena</strong> — Písek</div>
                  <div>• <strong>El sol</strong> — Slunce</div>
                  <div>• <strong>La toalla</strong> — Ručník</div>
                  <div>• <strong>La ola</strong> — Vlna</div>
                  <div>• <strong>Concha</strong> — Mušle</div>
                  <div>• <strong>Gafas</strong> — Brýle</div>
                </div>
                <div className="text-[7px] text-slate-500 bg-slate-50 px-1 py-0.5 rounded border border-slate-150 leading-tight">
                  🏖️ <strong>Pláž v Málaze:</strong> Jmenuje se <em>La Malagueta</em> a má super obří nápis z písku!
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 6</div>
            </div>

            {/* Page 7: Čísla 0-10 */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🔢 Číslovky 0-10</h4>
                <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[7.5px] font-mono font-bold text-slate-700">
                  <div>0: cero [sero]</div>
                  <div>1: uno [uno]</div>
                  <div>2: dos [dos]</div>
                  <div>3: tres [tres]</div>
                  <div>4: cuatro [kuatro]</div>
                  <div>5: cinco [sinko]</div>
                  <div>6: seis [sejs]</div>
                  <div>7: siete [sjete]</div>
                  <div>8: ocho [očo]</div>
                  <div>9: nueve [nuebe]</div>
                  <div>10: diez [djes]</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 7</div>
            </div>

            {/* Page 8: Čísla 11-20 */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🔢 Číslovky 11-20</h4>
                <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[7.5px] font-mono font-bold text-slate-700">
                  <div>11: once [onse]</div>
                  <div>12: doce [dose]</div>
                  <div>13: trece [trese]</div>
                  <div>14: catorce [katorse]</div>
                  <div>15: quince [kinse]</div>
                  <div>16: dieciséis [djesiséjs]</div>
                  <div>17: diecisiete [djesisjete]</div>
                  <div>18: dieciocho [djesisočo]</div>
                  <div>19: diecinueve [djesisnuebe]</div>
                  <div>20: veinte [bejnte]</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 8</div>
            </div>

          </div>
        </div>

        {/* A4 Folding Page 2 (Leporelo 2x4 grid layout - Strany 9-16) */}
        <div className="print-page">
          <div className="text-center mb-1 pb-0.5 border-b border-dashed border-slate-300">
            <h2 className="text-[9px] font-extrabold text-slate-800">🇪🇸 MOJE PRVNÍ ŠPANĚLŠTINA — KAPESNÍ LEPÕRELO (LIST 2 Č. 9-16) ☀️</h2>
          </div>

          <div className="print-grid grid grid-cols-2 gap-2">
            
            {/* Page 9: Co ochutnat */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🥘 Jídlo - Co ochutnat?</h4>
                <div className="space-y-0.5 text-[7px] font-semibold text-slate-700 leading-tight">
                  <div>🍦 <strong>Helado</strong> [elado] — Obří kopečky zmrzliny!</div>
                  <div>🍩 <strong>Churros</strong> [čurros] — Sladké tyčinky s čokoládou.</div>
                  <div>🥘 <strong>Paella</strong> [paeja] — Žlutá rýže se šafránem a kuřetem.</div>
                  <div>🥪 <strong>Bocadillo</strong> [bokadijo] — Plněná bageta (šunka/sýr).</div>
                  <div>🍉 <strong>Melón</strong> — Super sladký žlutý meloun na pláž.</div>
                  <div>🐟 <strong>Espeto</strong> — Sardinky opékané na klacku v písku.</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 9</div>
            </div>

            {/* Page 10: V restauraci */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🍦 V restauraci</h4>
                <div className="space-y-0.5 text-[7.5px] font-medium text-slate-700">
                  <div>• <strong>Quiero...</strong> [kjero...] — Chci... / Můžu dostat...</div>
                  <div>• <strong>el zumo</strong> [sumo] — džus</div>
                  <div>• <strong>la pizza</strong> [pica] — pizzu</div>
                  <div>• <strong>el pollo</strong> [pojo] — kuře</div>
                  <div>• <strong>patatas fritas</strong> — hranolky</div>
                  <div>• <strong>¿Cuánto cuesta?</strong> [kuanto kuesta] — Kolik to stojí?</div>
                  <div>• <strong>La cuenta, por favor.</strong> [la kuenta] — Účet, prosím.</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 10</div>
            </div>

            {/* Page 11: Barvy */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🎨 Barvy (Colores)</h4>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[7.5px] font-semibold text-slate-700">
                  <div>🔴 <strong>Rojo</strong> [rocho] — červená</div>
                  <div>🔵 <strong>Azul</strong> [asul] — modrá</div>
                  <div>🟢 <strong>Verde</strong> — zelená</div>
                  <div>🟡 <strong>Amarillo</strong> — žlutá</div>
                  <div>⚪ <strong>Blanco</strong> — bílá</div>
                  <div>⚫ <strong>Negro</strong> — černá</div>
                  <div>🟤 <strong>Marrón</strong> — hnědá</div>
                  <div>🟠 <strong>Naranja</strong> — oranžová</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 11</div>
            </div>

            {/* Page 12: Zvířátka */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🐱 Zvířátka (Animales)</h4>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[7.5px] font-semibold text-slate-700">
                  <div>🐶 <strong>perro</strong> — pes</div>
                  <div>🐱 <strong>gato</strong> — kočka</div>
                  <div>🐴 <strong>caballo</strong> [kabajo] — kůň</div>
                  <div>🐟 <strong>pez</strong> [pes] — ryba</div>
                  <div>🐦 <strong>pájaro</strong> [pacharo] — pták</div>
                  <div>🐢 <strong>tortuga</strong> — želva</div>
                  <div>🐬 <strong>delfín</strong> — delfín</div>
                  <div>🦜 <strong>papagayo</strong> — papoušek</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 12</div>
            </div>

            {/* Page 13: Slang */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">😎 Andaluský slang</h4>
                <p className="text-[7.5px] text-slate-500 font-bold">Mluv v Málaze jako místní star!</p>
                <div className="space-y-0.5 text-[7px] font-semibold text-slate-700 leading-snug">
                  <div>• <strong>¡Qué guay!</strong> [ke gvaj] — To je super / cool!</div>
                  <div>• <strong>Vale</strong> [bale] — Dobře / Ok / Beru.</div>
                  <div>• <strong>¡Vamos!</strong> [bamos] — Jdeme! / Pojďme!</div>
                  <div>• <strong>Chulo</strong> [čulo] — Hezké / Pěkné.</div>
                  <div>• <strong>Guapo/a</strong> [guapo] — Krásný/á / Fešák.</div>
                  <div>• <strong>No ni ná</strong> [no ni na] — No jasně! / A jak by ne!</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 13</div>
            </div>

            {/* Page 14: Desatero */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🎒 Desatero na cesty</h4>
                <div className="space-y-0.5 text-[6.5px] font-medium text-slate-700 leading-tight">
                  <div>1. Vždy pozdrav s úsměvem: <strong>„Hola!“</strong>.</div>
                  <div>2. Za vše poděkuj: <strong>„Gracias“</strong>.</div>
                  <div>3. Neboj se mluvit, i s chybami ti pomohou.</div>
                  <div>4. Pij hodně čisté studené vody.</div>
                  <div>5. Nos klobouk, kšiltovku a sluneční brýle.</div>
                  <div>6. Hlídej si batůžek a mobil v davu lidí.</div>
                  <div>7. Poslouchej rodiče a drž se jich.</div>
                  <div>8. Ztracená stůj na místě! Popros policii o pomoc.</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 14</div>
            </div>

            {/* Page 15: Výlety */}
            <div className="print-card border border-dashed border-slate-400 p-2.5 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 border-b pb-0.5">🎡 Super výlety v Málaze</h4>
                <div className="space-y-0.5 text-[6.8px] font-semibold text-slate-700 leading-tight">
                  <div>🏰 <strong>Hrad Gibralfaro:</strong> Pevnost s výhledem a papoušky.</div>
                  <div>🏖️ <strong>Pláž La Malagueta:</strong> Koupání a obří pískový nápis.</div>
                  <div>🐠 <strong>Sea Life:</strong> Obří podmořský tunel s rejnoky.</div>
                  <div>🐒 <strong>Bioparc Fuengirola:</strong> Zoo jako deštný prales.</div>
                  <div>🎢 <strong>Aqualand Torremolinos:</strong> Skluzavky a tobogány.</div>
                  <div>🛍️ <strong>Calle Larios:</strong> Nádherná pěší zóna plná zmrzliny.</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 15</div>
            </div>

            {/* Page 16: Diplom */}
            <div className="print-card border border-dashed border-slate-400 p-2 flex flex-col justify-between h-[58mm] bg-white text-slate-900">
              <div className="text-center space-y-0.5">
                <span className="text-xl block">🏆⭐🤴</span>
                <h5 className="text-[9px] font-black text-amber-600 tracking-wider">Cestovatelský diplom</h5>
                <h4 className="text-[10px] font-extrabold text-slate-900 leading-tight">Sofi — Královna Málagy</h4>
                <div className="text-[6.5px] font-bold text-slate-700 space-y-0.5 bg-amber-50/50 p-1 rounded border border-amber-200 text-left">
                  <div>☐ Snědla jsem aspoň 5 zmrzlin 🍦</div>
                  <div>☐ Koupala se v moři a stavěla hrady 🏖️</div>
                  <div>☐ Sama jsem španělsky objednala jídlo 🙋</div>
                  <div>☐ Umím španělsky počítat do 10! 🔢</div>
                </div>
              </div>
              <div className="text-center text-[7.5px] font-bold text-slate-400 border-t pt-0.5">Stránka 16 (Diplom)</div>
            </div>

          </div>
        </div>

      </div>
      
    </div>
  );
}
