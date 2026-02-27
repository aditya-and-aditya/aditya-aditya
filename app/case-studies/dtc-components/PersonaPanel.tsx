'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PersonaID = 'expert' | 'first-time' | 'gift';

const products = [
  { id: 1, name: "No. 1 — The Morning After", price: "£195", desc: "Intimate. Warm skin over cool linen.", concentration: "22%", longevity: "10h on skin" },
  { id: 2, name: "No. 2 — Threshold", price: "£175", desc: "The moment before a decision.", concentration: "20%", longevity: "8h on skin" },
  { id: 3, name: "No. 3 — Before Rain", price: "£165", desc: "Petrichor. The sky before it opens.", concentration: "23%", longevity: "8h on skin" }
];

export default function PersonaPanel() {
  const [activePersona, setActivePersona] = useState<PersonaID>('first-time');
  const [isTyping, setIsTyping] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [giftInput, setGiftInput] = useState('');

  const personaLabels: Record<PersonaID, string> = {
    expert: 'THE SERIOUS WEARER',
    'first-time': 'THE FIRST TIME',
    gift: 'THE GIFT'
  };

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => setIsTyping(false), 1000);
    return () => clearTimeout(timer);
  }, [activePersona]);

  const renderExpertView = () => (
    <div className="flex flex-col items-center text-center">
      <h2 className="font-serif text-3xl mb-12">Three new arrivals. <br/> <span className="italic">The archive is waiting.</span></h2>
      <div className="grid grid-cols-3 gap-6 w-full max-w-lg">
        {products.map(p => (
          <div key={p.id} className="text-left group">
            <div className="aspect-[3/4] bg-[var(--sillage-bone)] mb-4 flex items-center justify-center relative overflow-hidden">
               <span className="font-serif italic text-4xl opacity-10">S_{p.id}</span>
               <div className="absolute inset-0 bg-[var(--sillage-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="font-serif text-sm mb-1">{p.name}</div>
            <div className="font-mono text-[0.65rem] text-[var(--sillage-mist)] mb-2">{p.price} · {p.concentration} · {p.longevity}</div>
          </div>
        ))}
      </div>
      <button className="mt-16 font-mono text-[0.7rem] uppercase tracking-widest text-[var(--sillage-gold)] border-b border-[var(--sillage-gold)] pb-1 hover:text-[var(--sillage-ink)] hover:border-[var(--sillage-ink)] transition-colors">
        [ Explore the Archive ]
      </button>
    </div>
  );

  const renderFirstTimeView = () => (
    <div className="flex flex-col items-center text-center w-full max-w-lg">
      <h2 className="font-serif text-3xl mb-12 italic">Tell us one thing you remember <br/> and we'll find your scent.</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={quizStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="w-full bg-[var(--sillage-bone)] p-10 shadow-sm"
        >
          {quizStep === 1 && (
            <div className="space-y-8">
              <p className="font-serif text-xl">Where does a scent live for you?</p>
              <div className="flex flex-col gap-3">
                {["On my skin — quiet, for me", "In a room — I want to change the air", "In memory — I chase a feeling"].map(opt => (
                  <button key={opt} onClick={() => setQuizStep(2)} className="text-left p-4 border border-[var(--sillage-mist)]/30 hover:border-[var(--sillage-gold)] transition-colors font-serif italic text-sm">{opt}</button>
                ))}
              </div>
            </div>
          )}
          {quizStep === 2 && (
            <div className="space-y-8">
              <p className="font-serif text-xl">How do you usually find things you love?</p>
              <div className="flex flex-col gap-3">
                {["Someone tells me — I trust recommendations", "I read everything before I decide", "I don't plan it — it finds me"].map(opt => (
                  <button key={opt} onClick={() => setQuizStep(3)} className="text-left p-4 border border-[var(--sillage-mist)]/30 hover:border-[var(--sillage-gold)] transition-colors font-serif italic text-sm">{opt}</button>
                ))}
              </div>
            </div>
          )}
          {quizStep === 3 && (
            <div className="space-y-8">
              <p className="font-serif text-xl">Is this for you, or someone else?</p>
              <div className="flex flex-col gap-3">
                {["For me", "For someone I want to understand", "For someone I want to impress"].map(opt => (
                  <button key={opt} onClick={() => setQuizStep(1)} className="text-left p-4 border border-[var(--sillage-mist)]/30 hover:border-[var(--sillage-gold)] transition-colors font-serif italic text-sm">{opt}</button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );

  const renderGiftView = () => (
    <div className="flex flex-col items-center text-center w-full max-w-lg">
      <h2 className="font-serif text-3xl mb-12">The scent they won't forget you for.</h2>

      <div className="w-full bg-[var(--sillage-bone)] p-10 shadow-sm space-y-8">
        <p className="font-serif text-xl">Tell us about them.</p>
        <div className="space-y-6 text-left">
          <div>
            <label className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--sillage-mist)] mb-2 block">Three words you'd use:</label>
            <input
              type="text"
              value={giftInput}
              onChange={(e) => setGiftInput(e.target.value)}
              placeholder="quiet, thoughtful, specific"
              className="w-full bg-transparent border-b border-[var(--sillage-mist)] py-2 font-serif italic focus:outline-none focus:border-[var(--sillage-gold)] transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--sillage-mist)] mb-4 block">The occasion:</label>
            <div className="flex flex-wrap gap-4">
              {["Birthday", "Anniversary", "Thank you", "No reason"].map(opt => (
                <button key={opt} className="px-4 py-2 border border-[var(--sillage-mist)]/30 hover:border-[var(--sillage-gold)] transition-colors font-mono text-[0.6rem] uppercase tracking-widest">{opt}</button>
              ))}
            </div>
          </div>
        </div>
        <button className="w-full py-4 bg-[var(--sillage-ink)] text-[var(--sillage-white)] font-mono text-[0.7rem] uppercase tracking-widest hover:bg-[var(--sillage-gold)] transition-colors">
          Find Their Scent
        </button>
      </div>

      <p className="mt-8 font-serif italic text-sm opacity-60">
        Everything arrives in a Sillage gift box. <br/>
        No receipt. No price. Unless you want one.
      </p>
    </div>
  );

  return (
    <div className="h-full w-full bg-[var(--sillage-cream)] text-[var(--sillage-ink)] flex flex-col p-8 overflow-hidden relative border border-[var(--sillage-gold)]/20 shadow-inner">

      {/* Persona Indicator */}
      <div className="h-8 mb-12 border-b border-[var(--sillage-mist)]/20 flex items-center">
        <span className="font-mono text-[0.65rem] text-[var(--sillage-gold)] tracking-widest uppercase">
          READING CONTEXT: ▸ {isTyping ? '_' : personaLabels[activePersona]}
        </span>
      </div>

      {/* Homepage Preview */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-16 font-serif text-4xl italic tracking-[0.2em] opacity-30">SILLAGE</div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePersona}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            {activePersona === 'expert' && renderExpertView()}
            {activePersona === 'first-time' && renderFirstTimeView()}
            {activePersona === 'gift' && renderGiftView()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persona Switcher */}
      <div className="mt-auto pt-8 border-t border-[var(--sillage-mist)]/20 flex justify-center gap-8">
        {(Object.keys(personaLabels) as PersonaID[]).map(id => (
          <button
            key={id}
            onClick={() => setActivePersona(id)}
            className={`font-mono text-[0.6rem] uppercase tracking-widest transition-all duration-300 ${activePersona === id ? 'text-[var(--sillage-gold)] border-b border-[var(--sillage-gold)] pb-1' : 'text-[var(--sillage-mist)] hover:text-[var(--sillage-ink)]'}`}
          >
            {personaLabels[id]}
          </button>
        ))}
      </div>

    </div>
  );
}
