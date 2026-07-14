import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS } from '../data';
import { Gamepad2, Award, RefreshCw, CheckCircle2, HelpCircle, Flame, Star } from 'lucide-react';

interface GamesSectionProps {
  onSpeak: (text: string) => void;
}

interface CardType {
  id: number;
  val: string;
  type: 'spanish' | 'czech';
  matchId: number; // same matchId for the matching pair
  isFlipped: boolean;
  isMatched: boolean;
  emoji: string;
}

export default function GamesSection({ onSpeak }: GamesSectionProps) {
  const [activeGame, setActiveGame] = useState<'quiz' | 'pexeso'>('quiz');

  // --- QUIZ STATE ---
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAns, setSelectedAns] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleQuizAnswer = (ans: string) => {
    setSelectedAns(ans);
    const q = QUIZ_QUESTIONS[currentQ];
    if (ans === q.correctAnswer) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    setSelectedAns(null);
    if (currentQ < QUIZ_QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelectedAns(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const getQuizFeedback = () => {
    const percent = (quizScore / QUIZ_QUESTIONS.length) * 100;
    if (percent === 100) return { title: "👑 Královna Málagy!", desc: "Sofi, ty jsi naprostá jednička! Španělsky už umíš perfektně, v Málaze tě nikdo nezaskočí!", emoji: "👸" };
    if (percent >= 70) return { title: "⭐️ Španělská hvězda!", desc: "Úžasný výsledek! Jsi skvěle připravená na pláž i do zmrzlinárny!", emoji: "🌟" };
    if (percent >= 40) return { title: "🍦 Zmrzlinová badatelka!", desc: "Hezká práce! Určitě si v Málaze bez problémů objednáš velkou zmrzku!", emoji: "🍦" };
    return { title: "🏖️ Plážový začátečník!", desc: "Skvělý pokus! Zkus si projít slovíčka ještě jednou a zkus kvíz znovu. Učení je hra!", emoji: "🐠" };
  };

  // --- PEXESO STATE ---
  const [pexCards, setPexCards] = useState<CardType[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]); // indexes
  const [pexMoves, setPexMoves] = useState(0);
  const [pexFinished, setPexFinished] = useState(false);

  const pexData = [
    { matchId: 1, spanish: "Sol", czech: "Slunce", emoji: "☀️" },
    { matchId: 2, spanish: "Helado", czech: "Zmrzlina", emoji: "🍦" },
    { matchId: 3, spanish: "Playa", czech: "Pláž", emoji: "🏖️" },
    { matchId: 4, spanish: "Perro", czech: "Pes", emoji: "🐶" },
    { matchId: 5, spanish: "Agua", czech: "Voda", emoji: "💧" },
    { matchId: 6, spanish: "Gracias", czech: "Děkuji", emoji: "🙏" },
    { matchId: 7, spanish: "Hola", czech: "Ahoj", emoji: "👋" },
    { matchId: 8, spanish: "Rojo", czech: "Červená", emoji: "🔴" }
  ];

  const initPexeso = () => {
    const cards: CardType[] = [];
    let idCounter = 0;
    pexData.forEach((d) => {
      // Spanish card
      cards.push({
        id: idCounter++,
        val: d.spanish,
        type: 'spanish',
        matchId: d.matchId,
        isFlipped: false,
        isMatched: false,
        emoji: d.emoji
      });
      // Czech card
      cards.push({
        id: idCounter++,
        val: d.czech,
        type: 'czech',
        matchId: d.matchId,
        isFlipped: false,
        isMatched: false,
        emoji: d.emoji
      });
    });

    // Shuffle
    const shuffled = cards.sort(() => Math.random() - 0.5);
    setPexCards(shuffled);
    setSelectedCards([]);
    setPexMoves(0);
    setPexFinished(false);
  };

  useEffect(() => {
    initPexeso();
  }, []);

  const handleCardClick = (idx: number) => {
    if (selectedCards.length >= 2 || pexCards[idx].isFlipped || pexCards[idx].isMatched) return;

    // Speak Spanish card
    if (pexCards[idx].type === 'spanish') {
      onSpeak(pexCards[idx].val);
    } else {
      // Speak the corresponding Spanish word for learning
      const match = pexData.find(d => d.matchId === pexCards[idx].matchId);
      if (match) onSpeak(match.spanish);
    }

    const updated = [...pexCards];
    updated[idx].isFlipped = true;
    setPexCards(updated);

    const newSelected = [...selectedCards, idx];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setPexMoves(prev => prev + 1);
      const firstCard = pexCards[newSelected[0]];
      const secondCard = pexCards[newSelected[1]];

      if (firstCard.matchId === secondCard.matchId) {
        // MATCH!
        setTimeout(() => {
          const matchedCards = pexCards.map((card, cidx) => {
            if (cidx === newSelected[0] || cidx === newSelected[1]) {
              return { ...card, isMatched: true };
            }
            return card;
          });
          setPexCards(matchedCards);
          setSelectedCards([]);

          // Check if all matched
          if (matchedCards.every(card => card.isMatched)) {
            setPexFinished(true);
          }
        }, 600);
      } else {
        // NO MATCH
        setTimeout(() => {
          const resetCards = pexCards.map((card, cidx) => {
            if (cidx === newSelected[0] || cidx === newSelected[1]) {
              return { ...card, isFlipped: false };
            }
            return card;
          });
          setPexCards(resetCards);
          setSelectedCards([]);
        }, 1200);
      }
    }
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-24 scrollbar-none" id="games-section">
      {/* Tab Banner */}
      <div className="relative bg-gradient-to-b from-[#00F2FF]/15 to-transparent p-5 text-white border-b border-white/10 rounded-b-2xl space-y-3 shrink-0">
        <h2 className="font-display text-xl font-bold flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-[#00F2FF] filter drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]" /> <span>Hry a kvízy 🎮</span>
        </h2>
        
        {/* Toggle game tabs */}
        <div className="flex bg-white/5 p-1 rounded-xl text-xs font-bold text-center border border-white/10">
          <button
            id="tab-btn-quiz"
            onClick={() => setActiveGame('quiz')}
            className={`flex-1 py-1.5 rounded-lg transition-all font-mono uppercase tracking-wider text-[10px] ${
              activeGame === 'quiz' ? 'bg-[#00F2FF]/20 text-[#00F2FF] border border-[#00F2FF]/20 shadow-cyber-glow' : 'text-white/40 hover:text-white'
            }`}
          >
            🎯 Kvíz španělštiny
          </button>
          <button
            id="tab-btn-pexeso"
            onClick={() => {
              setActiveGame('pexeso');
              initPexeso();
            }}
            className={`flex-1 py-1.5 rounded-lg transition-all font-mono uppercase tracking-wider text-[10px] ${
              activeGame === 'pexeso' ? 'bg-[#00F2FF]/20 text-[#00F2FF] border border-[#00F2FF]/20 shadow-cyber-glow' : 'text-white/40 hover:text-white'
            }`}
          >
            🧩 Pexeso páry
          </button>
        </div>
      </div>

      <div className="p-4 flex-1">
        <AnimatePresence mode="wait">
          {/* --- QUIZ SCREEN --- */}
          {activeGame === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {!quizFinished ? (
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
                  {/* Progress info */}
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold text-white/40 uppercase">
                    <span>Otázka {currentQ + 1} z {QUIZ_QUESTIONS.length}</span>
                    <span className="text-[#00F2FF] bg-[#00F2FF]/10 border border-[#00F2FF]/20 px-2 py-0.5 rounded-md shadow-cyber-glow">
                      Skóre: {quizScore}
                    </span>
                  </div>

                  {/* Question Title */}
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase font-bold text-[#FFB800] tracking-widest font-mono">
                      Typ: {QUIZ_QUESTIONS[currentQ].type === 'pronunciation' ? 'Výslovnost 🗣️' : 'Slovíčka 📖'}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {QUIZ_QUESTIONS[currentQ].question}
                    </h3>
                  </div>

                  {/* Options List */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {QUIZ_QUESTIONS[currentQ].options.map((option) => {
                      const isCorrect = option === QUIZ_QUESTIONS[currentQ].correctAnswer;
                      const isSelected = selectedAns === option;

                      let btnStyle = "bg-white/5 border-white/5 hover:bg-white/10 text-white/80";
                      if (selectedAns) {
                        if (isCorrect) {
                          btnStyle = "bg-[#00F2FF]/20 border-[#00F2FF] text-[#00F2FF] font-bold scale-[1.01] shadow-cyber-glow";
                        } else if (isSelected) {
                          btnStyle = "bg-[#FF4E00]/20 border-[#FF4E00] text-[#FF4E00] font-bold";
                        } else {
                          btnStyle = "bg-white/2 border-white/5 text-white/20 pointer-events-none";
                        }
                      }

                      return (
                        <button
                          key={option}
                          id={`game-opt-${currentQ}-${option}`}
                          onClick={() => handleQuizAnswer(option)}
                          disabled={!!selectedAns}
                          className={`w-full p-3.5 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span className="font-display">{option}</span>
                          {selectedAns && isCorrect && <span className="text-[#00F2FF] text-xs">✓ Correct</span>}
                          {selectedAns && isSelected && !isCorrect && <span className="text-[#FF4E00] text-xs">✕ Error</span>}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation card */}
                  {selectedAns && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1 text-xs"
                    >
                      <strong className={selectedAns === QUIZ_QUESTIONS[currentQ].correctAnswer ? 'text-[#00F2FF] text-glow-cyan font-bold block' : 'text-[#FF4E00] font-bold block'}>
                        {selectedAns === QUIZ_QUESTIONS[currentQ].correctAnswer ? '✨ Skvěle, Sofi!' : '😢 Nevadí!'}
                      </strong>
                      <p className="text-white/70 leading-relaxed font-medium">
                        {QUIZ_QUESTIONS[currentQ].explanation}
                      </p>
                      
                      <button
                        id="next-quiz-btn"
                        onClick={handleNextQuiz}
                        className="w-full mt-3 py-2.5 bg-[#00F2FF] hover:bg-[#00F2FF]/80 text-black text-xs font-bold rounded-xl shadow-cyber-glow active:scale-95 transition-all text-center"
                      >
                        {currentQ < QUIZ_QUESTIONS.length - 1 ? 'Další otázka ➔' : 'Ukázat výsledky 🏆'}
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : (
                // QUIZ COMPLETED VIEW
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-5 backdrop-blur-md"
                >
                  <div className="text-6xl">{getQuizFeedback().emoji}</div>
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-bold text-[#00F2FF] text-glow-cyan">
                      {getQuizFeedback().title}
                    </h3>
                    <p className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-widest">
                      DOKONČILA JSI KVÍZ S VÝSLEDKEM:
                    </p>
                  </div>

                  <div className="inline-block bg-[#00F2FF]/10 px-6 py-3 rounded-2xl border border-[#00F2FF]/20 shadow-cyber-glow">
                    <span className="text-3xl font-extrabold text-[#00F2FF] font-mono">{quizScore}</span>
                    <span className="text-white/40 text-[9px] font-bold font-mono block mt-0.5 uppercase tracking-wider">správně z {QUIZ_QUESTIONS.length}</span>
                  </div>

                  <p className="text-white/80 text-xs leading-relaxed max-w-sm mx-auto font-medium">
                    {getQuizFeedback().desc}
                  </p>

                  <div className="pt-2">
                    <button
                      id="restart-quiz-btn"
                      onClick={resetQuiz}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#00F2FF] hover:bg-[#00F2FF]/80 text-black text-xs font-bold rounded-xl shadow-cyber-glow active:scale-95 transition-all"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Zkusit znovu</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* --- PEXESO SCREEN --- */}
          {activeGame === 'pexeso' && (
            <motion.div
              key="pexeso"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4 text-center"
            >
              <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase text-white/40 px-1">
                <span>Páruj španělské slovo a český překlad!</span>
                <span className="bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/20 px-2 py-0.5 rounded-md shadow-cyber-glow">Tahů: {pexMoves}</span>
              </div>

              {!pexFinished ? (
                /* Grid 4x4 */
                <div className="grid grid-cols-4 gap-2.5 max-w-md mx-auto">
                  {pexCards.map((card, idx) => {
                    const isOpen = card.isFlipped || card.isMatched;
                    return (
                      <button
                        key={card.id}
                        id={`pexeso-card-${idx}`}
                        onClick={() => handleCardClick(idx)}
                        disabled={isOpen}
                        className={`aspect-square w-full rounded-xl border relative transition-all duration-300 font-bold overflow-hidden select-none active:scale-95 ${
                          card.isMatched
                            ? 'bg-[#00F2FF]/15 border-[#00F2FF]/50 text-[#00F2FF] scale-[0.98] shadow-cyber-glow'
                            : card.isFlipped
                            ? card.type === 'spanish'
                              ? 'bg-[#00F2FF]/20 border-[#00F2FF] text-[#00F2FF] shadow-cyber-glow'
                              : 'bg-[#FFB800]/20 border-[#FFB800] text-[#FFB800]'
                            : 'bg-white/5 border-white/10 hover:border-white/20 text-white/30'
                        }`}
                      >
                        {isOpen ? (
                          <div className="flex flex-col items-center justify-center h-full p-1 leading-tight">
                            <span className="text-lg">{card.emoji}</span>
                            <span className="text-[9px] font-bold block break-words max-w-full leading-none tracking-tight text-white mt-0.5">
                              {card.val}
                            </span>
                            <span className={`text-[7px] font-mono font-extrabold uppercase mt-1 px-1 rounded-sm ${
                              card.type === 'spanish' ? 'bg-[#00F2FF]/10 text-[#00F2FF]' : 'bg-[#FFB800]/10 text-[#FFB800]'
                            }`}>
                              {card.type === 'spanish' ? 'ESP' : 'CZ'}
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full text-[#00F2FF]/20">
                            <Gamepad2 className="w-5 h-5 animate-pulse" />
                            <span className="text-[7px] font-bold font-mono tracking-widest mt-1 uppercase text-[#00F2FF]/40">PEXESO</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* PEXESO FINISHED VIEW */
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-4 backdrop-blur-md"
                >
                  <div className="text-6xl">🏆</div>
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-bold text-[#00F2FF] text-glow-cyan">🎉 Skvěle, Sofi! Vyhrála jsi!</h3>
                    <p className="text-white/40 text-[9px] font-mono font-bold uppercase tracking-wider">
                      SPÁROVALA JSI VŠECHNA SLOVÍČKA A PŘEKLADY!
                    </p>
                  </div>

                  <div className="inline-block bg-[#00F2FF]/15 px-6 py-2 rounded-2xl border border-[#00F2FF]/30 text-xs font-mono font-bold text-[#00F2FF] shadow-cyber-glow">
                    DOKONČENO NA <span className="text-lg font-black text-[#00F2FF]">{pexMoves}</span> TAHŮ
                  </div>

                  <p className="text-white/70 text-xs font-medium max-w-sm mx-auto leading-relaxed">
                    Krásná práce! Hra ti pomáhá si slovíčka zapamatovat ještě rychleji. Chceš si pexeso zahrát znovu s novým rozmístěním karet?
                  </p>

                  <div className="pt-2">
                    <button
                      id="restart-pexeso-btn"
                      onClick={initPexeso}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#00F2FF] hover:bg-[#00F2FF]/80 text-black text-xs font-bold rounded-xl shadow-cyber-glow active:scale-95 transition-all"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Hrát znovu</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
