import React from 'react';
import { motion } from 'motion/react';
import { PLACES_TO_VISIT } from '../data';
import { MapPin, Star, Sparkles, Navigation } from 'lucide-react';

interface PlacesSectionProps {
  onSpeak: (text: string) => void;
}

export default function PlacesSection({ onSpeak }: PlacesSectionProps) {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-24 scrollbar-none" id="places-section">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-b from-[#00F2FF]/15 to-transparent p-5 text-white border-b border-white/10 rounded-b-2xl">
        <h2 className="font-display text-xl font-bold flex items-center gap-2">
          <Navigation className="w-5 h-5 text-[#00F2FF] filter drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]" /> <span>Tipy na super výlety 🎢</span>
        </h2>
        <p className="text-xs text-white/85 font-medium leading-relaxed mt-1">
          Sofi, tady najdeš ty nejlepší pláže, aquaparky, zoologické zahrady a zajímavá místa v Málaze a okolí, která stojí za to s rodiči prozkoumat!
        </p>
      </div>

      {/* Places List */}
      <div className="p-4 space-y-4">
        {PLACES_TO_VISIT.map((place) => (
          <div key={place.id} className="bg-white/5 rounded-2xl border border-white/5 hover:border-white/15 p-4 shadow-none space-y-3 relative overflow-hidden transition-all">
            {/* Backdrop emoji */}
            <div className="absolute top-2 right-2 text-4xl opacity-10 pointer-events-none select-none">
              {place.emoji}
            </div>

            {/* Title & rating */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{place.emoji}</span>
                <h3 className="font-display font-bold text-white text-sm text-glow-cyan">
                  {place.name}
                </h3>
              </div>
              
              <div className="flex items-center gap-2 text-[10px] text-white/50 font-semibold font-mono">
                <span className="flex items-center gap-1 text-[#00F2FF] bg-[#00F2FF]/10 border border-[#00F2FF]/20 px-2 py-0.5 rounded-md">
                  <MapPin className="w-3 h-3" /> {place.location}
                </span>
                <span className="bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20 px-2 py-0.5 rounded-md">
                  {place.distance}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 text-xs leading-relaxed font-medium">
              {place.description}
            </p>

            {/* Stars & Fun fact */}
            <div className="pt-2 border-t border-white/5 flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-1 font-mono">
                  <span className="text-white/40 text-[9px] font-bold uppercase tracking-wider">Zábava:</span>
                  <div className="flex text-[#FFB800]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${i < place.rating ? 'fill-current' : 'text-white/10'}`} 
                      />
                    ))}
                  </div>
                </div>

                <button
                  id={`speak-place-${place.id}`}
                  onClick={() => onSpeak(place.name)}
                  className="text-[9px] font-mono uppercase tracking-wide bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/20 font-bold px-2.5 py-1 rounded-lg hover:bg-[#00F2FF]/20 flex items-center gap-1 active:scale-95 transition-all"
                >
                  🔊 Vyslovit
                </button>
              </div>

              {/* Child-oriented trivia */}
              <div className="bg-[#FFB800]/5 p-2.5 rounded-xl border border-[#FFB800]/15 flex gap-2 items-start">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB800] shrink-0 mt-0.5" />
                <div className="text-[10px]">
                  <strong className="text-[#FFB800] block font-bold font-mono uppercase tracking-wider text-[9px] mb-0.5">Tajný tip:</strong>
                  <span className="text-white/80 font-medium leading-relaxed">{place.funFact}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
