import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRONUNCIATION_RULES, PRONUNCIATION_PRACTICE } from '../data';
import { BookOpen, Volume2, Sparkles, Check, AlertCircle } from 'lucide-react';

interface PronunciationSectionProps {
  onSpeak: (text: string) => void;
}

export default function PronunciationSection({ onSpeak }: PronunciationSectionProps) {
  const [activeRuleIndex, setActiveRuleIndex] = useState<number | null>(null);
  
  // Interactive mini quiz states
  const quizQuestions = [
    { word: "Hola", choices: ["hola", "ola", "chola"], correct: "ola", explanation: "H se vůbec nečte, ignoruj ho!" },
    { word: "España", choices: ["espana", "espaňa", "espacha"], correct: "espaňa", explanation: "Ñ s vlnovkou čteme jako české Ň." },
    { word: "Helado", choices: ["chelado", "elado", "helado"], correct: "elado", explanation: "H je tiché, čte se to přímo 'elado'." },
    { word: "Llamo", choices: ["lamo", "jamo", "llamo"], correct: "jamo", explanation: "Dvojité LL čteme v Andalusii jako J." },
    { word: "Cinco", choices: ["cinko", "sinko", "činko"], correct: "sinko", explanation: "C před E/I čtou v Málaze jako S." }
  ];

  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleSelectAnswer = (qIdx: number, choice: string) => {
    if (answers[qIdx]) return; // Answered already
    setAnswers({ ...answers, [qIdx]: choice });
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-24 scrollbar-none" id="pronunciation-section">
      {/* Tab Header Banner */}
      <div className="relative bg-gradient-to-b from-[#00F2FF]/15 to-transparent p-5 text-white border-b border-white/10 rounded-b-2xl">
        <h2 className="font-display text-xl font-bold flex items-center gap-2 text-white">
          <BookOpen className="w-5 h-5 text-[#00F2FF] filter drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]" /> <span>Jak číst španělštinu 🗣️</span>
        </h2>
        <p className="text-xs text-white/80 font-medium leading-relaxed mt-1">
          Dobrá zpráva, Sofi! Španělština se čte mnohem jednodušeji než angličtina. Většinu slov přečteš přesně tak, jak jsou napsaná! Stačí znát několik pravidel.
        </p>
      </div>

      <div className="p-4 space-y-5">
        {/* Samohlásky block */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
          <h3 className="font-display font-bold text-[#00F2FF] text-glow-cyan text-sm mb-2 flex items-center gap-1.5">
            <span>🅰️ Samohlásky</span>
          </h3>
          <p className="text-xs text-white/60 mb-3 font-medium">
            Ve španělštině se samohlásky čtou vždy stejně, nikdy se nemění.
          </p>
          <div className="overflow-hidden border border-white/10 rounded-xl">
            <table className="w-full text-xs text-left text-white/80">
              <thead className="bg-white/5 text-white/50 border-b border-white/10 font-bold">
                <tr>
                  <th className="p-2 text-center font-mono text-[9px] uppercase tracking-wider">Písmeno</th>
                  <th className="p-2 font-mono text-[9px] uppercase tracking-wider">Čti</th>
                  <th className="p-2 font-mono text-[9px] uppercase tracking-wider">Příklad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/2.5">
                  <td className="p-2 text-center font-bold text-[#00F2FF]">A</td>
                  <td className="p-2 font-mono text-[#FFB800]">[a]</td>
                  <td className="p-2">casa → <span className="font-bold text-white">kasa</span></td>
                </tr>
                <tr className="hover:bg-white/2.5">
                  <td className="p-2 text-center font-bold text-[#00F2FF]">E</td>
                  <td className="p-2 font-mono text-[#FFB800]">[e]</td>
                  <td className="p-2">leche → <span className="font-bold text-white">leče</span></td>
                </tr>
                <tr className="hover:bg-white/2.5">
                  <td className="p-2 text-center font-bold text-[#00F2FF]">I</td>
                  <td className="p-2 font-mono text-[#FFB800]">[i]</td>
                  <td className="p-2">amigo → <span className="font-bold text-white">amigo</span></td>
                </tr>
                <tr className="hover:bg-white/2.5">
                  <td className="p-2 text-center font-bold text-[#00F2FF]">O</td>
                  <td className="p-2 font-mono text-[#FFB800]">[o]</td>
                  <td className="p-2">hola → <span className="font-bold text-white">ola</span></td>
                </tr>
                <tr className="hover:bg-white/2.5">
                  <td className="p-2 text-center font-bold text-[#00F2FF]">U</td>
                  <td className="p-2 font-mono text-[#FFB800]">[u]</td>
                  <td className="p-2">uno → <span className="font-bold text-white">uno</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Rules Accordion */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
          <h3 className="font-display font-bold text-[#FFB800] text-glow-orange text-sm mb-3">
            📘 Pravidla výslovnosti písmen
          </h3>
          <div className="space-y-2">
            {PRONUNCIATION_RULES.map((rule, idx) => {
              const isOpen = activeRuleIndex === idx;
              return (
                <div key={idx} className="border border-white/5 rounded-xl overflow-hidden transition-all">
                  <button
                    id={`rule-btn-${idx}`}
                    onClick={() => setActiveRuleIndex(isOpen ? null : idx)}
                    className={`w-full flex items-center justify-between p-3 text-left transition-all text-xs font-bold font-mono tracking-wide ${
                      isOpen ? 'bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/20 shadow-cyber-glow' : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <span>{rule.letter}</span>
                    <span className="text-white/40">{isOpen ? '▲' : '▼'}</span>
                  </button>
                  {isOpen && (
                    <div className="p-3 bg-black/40 text-xs border-t border-white/5 space-y-1.5">
                      <p className="text-white/80 leading-relaxed font-semibold">
                        💡 {rule.rule}
                      </p>
                      <div className="p-2 bg-[#FFB800]/5 border border-[#FFB800]/10 rounded-lg text-white/60 font-medium font-mono">
                        Příklad: <code className="font-mono text-[#FFB800] font-bold">{rule.example}</code>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mini tahák */}
        <div className="bg-[#00F2FF]/5 p-4 rounded-2xl border border-[#00F2FF]/25 relative">
          <div className="absolute top-2.5 right-2.5 text-[#00F2FF]">
            <Sparkles className="w-5 h-5 filter drop-shadow-[0_0_5px_rgba(0,242,255,0.4)] animate-pulse" />
          </div>
          <h3 className="font-display font-bold text-[#00F2FF] text-glow-cyan text-sm mb-2 flex items-center gap-1.5">
            <span>⭐ Rychlý mini tahák</span>
          </h3>
          <div className="grid grid-cols-2 gap-2 text-[10px] font-bold font-mono uppercase text-white">
            <div className="bg-white/5 border border-white/5 p-2 rounded-lg">🚫 H = nečte se</div>
            <div className="bg-white/5 border border-white/5 p-2 rounded-lg">🗣️ J = CH</div>
            <div className="bg-white/5 border border-white/5 p-2 rounded-lg">🐈 Ñ = Ň</div>
            <div className="bg-white/5 border border-white/5 p-2 rounded-lg">🙋 LL = J</div>
            <div className="bg-white/5 border border-white/5 p-2 rounded-lg">🍫 CH = Č</div>
            <div className="bg-white/5 border border-white/5 p-2 rounded-lg">🍋 C + E/I = S</div>
            <div className="bg-white/5 border border-white/5 p-2 rounded-lg">👞 Z = S</div>
            <div className="bg-white/5 border border-white/5 p-2 rounded-lg">🧀 Q = K</div>
            <div className="bg-white/5 border border-white/5 p-2 rounded-lg">🍇 V ≈ B</div>
          </div>
        </div>

        {/* Practice Zone */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
          <h3 className="font-display font-bold text-[#00F2FF] text-glow-cyan text-sm mb-2 flex items-center gap-1.5">
            <Volume2 className="w-4 h-4 text-[#00F2FF]" /> <span>Zkus si přečíst (Trénink)</span>
          </h3>
          <p className="text-xs text-white/50 mb-4 font-medium">
            Klepni na slovo, poslechni si španělský hlas a porovnej ho s českou nápovědou!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PRONUNCIATION_PRACTICE.map((item, idx) => (
              <button
                key={idx}
                id={`practice-btn-${idx}`}
                onClick={() => onSpeak(item.word)}
                className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-[#00F2FF]/5 border border-white/5 hover:border-[#00F2FF]/20 rounded-xl text-left active:scale-98 transition-all"
              >
                <div>
                  <span className="font-display font-bold text-sm text-white">{item.word}</span>
                  <div className="text-[10px] text-[#FFB800] font-bold font-mono mt-0.5">
                    čti: [{item.reading}]
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white/40">{item.translation}</span>
                  <div className="p-1.5 bg-[#00F2FF] hover:bg-[#00F2FF]/80 text-black font-bold rounded-full text-[10px] shadow-cyber-glow">🔊</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mini Kvíz */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
          <h3 className="font-display font-bold text-[#FFB800] text-glow-orange text-sm mb-1 flex items-center gap-1.5">
            <span>🎯 Malý kvíz výslovnosti</span>
          </h3>
          <p className="text-xs text-white/40 mb-4 font-medium">
            Sofi, vyzkoušej si, zda víš, jak se přečtou tato slova!
          </p>

          <div className="space-y-4">
            {quizQuestions.map((q, qIdx) => {
              const selected = answers[qIdx];
              const isCorrect = selected === q.correct;
              return (
                <div key={qIdx} className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-[#00F2FF]">OTÁZKA {qIdx + 1}</span>
                    <button 
                      id={`quiz-speak-${qIdx}`}
                      onClick={() => onSpeak(q.word)}
                      className="text-[9px] font-mono uppercase tracking-wide px-2 py-1 bg-[#00F2FF]/10 text-[#00F2FF] font-bold rounded-md hover:bg-[#00F2FF]/20 border border-[#00F2FF]/20 active:scale-95 transition-all"
                    >
                      🗣️ Přehrát
                    </button>
                  </div>
                  <h4 className="text-xs font-bold text-white/90">
                    Jak se správně čte slovo <span className="text-[#00F2FF] text-glow-cyan font-display">„{q.word}“</span>?
                  </h4>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {q.choices.map((choice) => {
                      const isChoiceSelected = selected === choice;
                      const isChoiceCorrect = choice === q.correct;
                      
                      let btnStyle = "bg-white/5 border-white/15 text-white/80 hover:bg-white/10";
                      if (selected) {
                        if (isChoiceCorrect) {
                          btnStyle = "bg-[#00F2FF]/20 border-[#00F2FF] text-[#00F2FF] font-bold shadow-cyber-glow";
                        } else if (isChoiceSelected) {
                          btnStyle = "bg-[#FF4E00]/20 border-[#FF4E00] text-[#FF4E00] font-bold";
                        } else {
                          btnStyle = "bg-white/2 border-white/5 text-white/20 pointer-events-none";
                        }
                      }

                      return (
                        <button
                          key={choice}
                          id={`quiz-opt-${qIdx}-${choice}`}
                          onClick={() => handleSelectAnswer(qIdx, choice)}
                          disabled={!!selected}
                          className={`py-1.5 px-1 rounded-lg border text-center text-xs font-bold font-mono transition-all ${btnStyle}`}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>

                  {selected && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-xs border-t border-white/10 pt-2 flex gap-1.5 mt-1"
                    >
                      {isCorrect ? (
                        <Check className="w-4 h-4 text-[#00F2FF] shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-[#FF4E00] shrink-0" />
                      )}
                      <div>
                        <strong className={isCorrect ? "text-[#00F2FF] text-glow-cyan font-bold" : "text-[#FF4E00] font-bold"}>
                          {isCorrect ? "Správně! 🎉" : "Chybička! 😢"}
                        </strong>
                        <p className="text-white/60 mt-0.5">{q.explanation}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
