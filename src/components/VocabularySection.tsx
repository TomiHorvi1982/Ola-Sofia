import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VOCABULARY_CATEGORIES, VOCABULARY_ITEMS } from '../data';
import { Search, Heart, Volume2, Sparkles, Filter, Smile } from 'lucide-react';
import { VocabularyItem } from '../types';

interface VocabularySectionProps {
  onSpeak: (text: string) => void;
}

export default function VocabularySection({ onSpeak }: VocabularySectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('sofie_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('sofie_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Don't trigger speak
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filter items
  const filteredItems = VOCABULARY_ITEMS.filter(item => {
    // Category match
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    
    // Favorites match
    const favoriteMatch = !showOnlyFavorites || favorites.includes(item.id);

    // Search query match
    const cleanQuery = searchQuery.toLowerCase().trim();
    const searchMatch = !cleanQuery || 
      item.spanish.toLowerCase().includes(cleanQuery) ||
      item.czech.toLowerCase().includes(cleanQuery) ||
      item.pronunciation.toLowerCase().includes(cleanQuery);

    return categoryMatch && favoriteMatch && searchMatch;
  });

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-24 scrollbar-none" id="vocabulary-section">
      {/* Banner & Search controls */}
      <div className="relative bg-gradient-to-b from-[#00F2FF]/15 to-transparent p-5 text-white border-b border-white/10 rounded-b-2xl space-y-3 shrink-0">
        <h2 className="font-display text-xl font-bold flex items-center gap-2">
          <span>📚 Slovníček a fráze</span>
        </h2>
        
        {/* Search input bar */}
        <div className="relative bg-white/5 text-white rounded-xl flex items-center px-3 py-1.5 border border-white/10 focus-within:border-[#00F2FF]/40 transition-all">
          <Search className="w-4 h-4 text-white/40 shrink-0 mr-2" />
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Hledat česky, španělsky, čtení..."
            className="w-full text-xs font-semibold focus:outline-hidden bg-transparent text-white placeholder-white/35"
          />
          {searchQuery && (
            <button 
              id="clear-search"
              onClick={() => setSearchQuery('')}
              className="text-white/40 hover:text-white/70 font-bold text-xs px-1.5"
            >
              ✕
            </button>
          )}
        </div>

        {/* Favorites and Filter buttons */}
        <div className="flex gap-2 text-xs">
          <button
            id="fav-filter-btn"
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg font-bold font-mono uppercase tracking-wider transition-all border ${
              showOnlyFavorites 
                ? 'bg-rose-500/20 text-rose-400 border-rose-500/30 shadow-cyber-glow scale-[1.02]' 
                : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${showOnlyFavorites ? 'fill-current text-rose-400' : ''}`} />
            <span>Oblíbené ({favorites.length})</span>
          </button>
        </div>
      </div>

      {/* Category Horizontal scrollbar */}
      <div className="flex gap-2 overflow-x-auto p-3 bg-black/40 border-b border-white/5 scrollbar-none shrink-0">
        {VOCABULARY_CATEGORIES.map(cat => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`cat-btn-${cat.id}`}
              onClick={() => {
                setSelectedCategory(cat.id);
                setExpandedItem(null);
              }}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold border transition-all ${
                isSelected 
                  ? 'bg-[#00F2FF]/20 text-[#00F2FF] border-[#00F2FF]/30 shadow-cyber-glow' 
                  : 'bg-white/5 text-white/50 border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-xs">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Vocabulary List Container */}
      <div className="p-4 space-y-2.5">
        {filteredItems.length === 0 ? (
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center text-white/40 space-y-2">
            <Smile className="w-10 h-10 text-white/20 mx-auto" />
            <p className="font-bold text-sm text-white/80">Žádná slovíčka nenalezena</p>
            <p className="text-xs text-white/55">Zkus změnit hledané slovo nebo kategorii!</p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isFav = favorites.includes(item.id);
              const isExpanded = expandedItem === item.id;
              return (
                <motion.div
                  key={item.id}
                  layoutId={`card-${item.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => onSpeak(item.spanish)}
                  className={`bg-white/5 p-3.5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isExpanded 
                      ? 'border-[#00F2FF]/30 bg-[#00F2FF]/5 shadow-cyber-glow' 
                      : 'border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="space-y-1">
                      <div className="flex gap-2 items-center">
                        <span className="font-display font-bold text-sm text-white text-glow-cyan">
                          {item.spanish}
                        </span>
                        <div className="text-[9px] text-[#FFB800] font-bold font-mono px-1.5 py-0.5 bg-[#FFB800]/10 border border-[#FFB800]/20 rounded-md">
                          [{item.pronunciation}]
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-white/70">
                        {item.czech}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        id={`fav-btn-${item.id}`}
                        onClick={(e) => toggleFavorite(item.id, e)}
                        className="p-1.5 rounded-full hover:bg-white/5 text-white/40 active:scale-90 transition-all"
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-current text-rose-500' : 'text-white/20'}`} />
                      </button>

                      <div className="p-1.5 rounded-full bg-[#00F2FF]/15 text-[#00F2FF] border border-[#00F2FF]/20 shadow-cyber-glow">
                        <Volume2 className="w-4 h-4 shrink-0" />
                      </div>
                    </div>
                  </div>

                  {/* Example sentences */}
                  {item.exampleSpanish && (
                    <div className="mt-2 pt-2 border-t border-white/5">
                      <button
                        id={`example-toggle-${item.id}`}
                        onClick={(e) => {
                          e.stopPropagation(); // Don't trigger main word sound
                          setExpandedItem(isExpanded ? null : item.id);
                        }}
                        className="text-[10px] text-[#00F2FF] font-bold font-mono tracking-wide uppercase hover:underline flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3 text-[#00F2FF] filter drop-shadow-[0_0_4px_rgba(0,242,255,0.4)]" />
                        <span>{isExpanded ? 'Skrýt příklad' : 'Příklad ze života'}</span>
                      </button>

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-2 p-2.5 bg-black/40 rounded-xl border border-white/5 space-y-1 text-xs"
                        >
                          <div className="flex justify-between items-center gap-2">
                            <span className="font-bold text-white/90">{item.exampleSpanish}</span>
                            <button
                              id={`speak-example-${item.id}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                onSpeak(item.exampleSpanish!);
                              }}
                              className="text-[9px] font-mono uppercase bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/20 font-bold px-1.5 py-0.5 rounded-md hover:bg-[#00F2FF]/25"
                            >
                              🔊 Přehrát
                            </button>
                          </div>
                          <div className="text-[10px] text-[#FFB800] font-mono font-bold">
                            čti: [{item.examplePronunciation}]
                          </div>
                          <p className="text-white/50 font-medium text-[11px] pt-1.5 border-t border-white/5">
                            Česky: {item.exampleCzech}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
