'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Internal scroll handling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isHovered || !scrollRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) return;
      e.preventDefault();
      scrollRef.current.scrollTop += e.deltaY;
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isHovered]);

  const renderExpertView = () => (
    <div className="flex flex-col items-center text-center">
      <h2 className="font-serif text-2xl md:text-3xl mb-8 md:mb-12 text-[#1c1713]">Three new arrivals. <br/> <span className="italic">The archive is waiting.</span></h2>
      <div className="grid grid-cols-3 gap-4 md:gap-6 w-full">
        {products.map(p => (
          <div key={p.id} className="text-left group">
            <div className="aspect-[3/4] bg-[#e8dfd0] mb-3 flex items-center justify-center relative overflow-hidden">
               <span className="font-serif italic text-3xl opacity-10">S_{p.id}</span>
               <div className="absolute inset-0 bg-[#b5893a]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="font-serif text-xs md:text-sm mb-1 text-[#1c1713]">{p.name}</div>
            <div className="font-mono text-[0.55rem] md:text-[0.6rem] text-[#c8c0b4] mb-2">{p.price} · {p.concentration}</div>
          </div>
        ))}
      </div>
      <button className="mt-12 font-mono text-[0.65rem] uppercase tracking-widest text-[#b5893a] border-b border-[#b5893a] pb-1 hover:text-[#1c1713] hover:border-[#1c1713] transition-colors">
        [ Explore the Archive ]
      </button>
    </div>
  );

  const renderFirstTimeView = () => (
    <div className="flex flex-col items-center text-center w-full max-w-sm">
      <h2 className="font-serif text-2xl md:text-3xl mb-10 italic text-[#1c1713]">Tell us one thing you remember <br/> and we'll find your scent.</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={quizStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="w-full bg-[#e8dfd0]/50 p-8 shadow-sm border border-[#b5893a]/10"
        >
          {quizStep === 1 && (
            <div className="space-y-6">
              <p className="font-serif text-lg text-[#1c1713]">Where does a scent live for you?</p>
              <div className="flex flex-col gap-2">
                {["On my skin — quiet, for me", "In a room — I want to change the air", "In memory — I chase a feeling"].map(opt => (
                  <button key={opt} onClick={() => setQuizStep(2)} className="text-left p-3 border border-[#c8c0b4]/30 hover:border-[#b5893a] transition-colors font-serif italic text-sm text-[#1c1713]">{opt}</button>
                ))}
              </div>
            </div>
          )}
          {quizStep === 2 && (
            <div className="space-y-6">
              <p className="font-serif text-lg text-[#1c1713]">How do you usually find things you love?</p>
              <div className="flex flex-col gap-2">
                {["Someone tells me — I trust recommendations", "I read everything before I decide", "I don't plan it — it finds me"].map(opt => (
                  <button key={opt} onClick={() => setQuizStep(3)} className="text-left p-3 border border-[#c8c0b4]/30 hover:border-[#b5893a] transition-colors font-serif italic text-sm text-[#1c1713]">{opt}</button>
                ))}
              </div>
            </div>
          )}
          {quizStep === 3 && (
            <div className="space-y-6">
              <p className="font-serif text-lg text-[#1c1713]">Is this for you, or someone else?</p>
              <div className="flex flex-col gap-2">
                {["For me", "For someone I want to understand", "For someone I want to impress"].map(opt => (
                  <button key={opt} onClick={() => setQuizStep(1)} className="text-left p-3 border border-[#c8c0b4]/30 hover:border-[#b5893a] transition-colors font-serif italic text-sm text-[#1c1713]">{opt}</button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );

  const renderGiftView = () => (
    <div className="flex flex-col items-center text-center w-full max-w-sm">
      <h2 className="font-serif text-2xl md:text-3xl mb-10 text-[#1c1713]">The scent they won't forget you for.</h2>

      <div className="w-full bg-[#e8dfd0]/50 p-8 shadow-sm border border-[#b5893a]/10 space-y-6">
        <p className="font-serif text-lg text-[#1c1713]">Tell us about them.</p>
        <div className="space-y-6 text-left">
          <div>
            <label className="font-mono text-[0.6rem] uppercase tracking-widest text-[#c8c0b4] mb-2 block">Three words you'd use:</label>
            <input
              type="text"
              value={giftInput}
              onChange={(e) => setGiftInput(e.target.value)}
              placeholder="quiet, thoughtful, specific"
              className="w-full bg-transparent border-b border-[#c8c0b4] py-2 font-serif italic text-[#1c1713] focus:outline-none focus:border-[#b5893a] transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-[0.6rem] uppercase tracking-widest text-[#c8c0b4] mb-3 block">The occasion:</label>
            <div className="flex flex-wrap gap-2">
              {["Birthday", "Anniversary", "Thank you", "No reason"].map(opt => (
                <button key={opt} className="px-3 py-1.5 border border-[#c8c0b4]/30 hover:border-[#b5893a] transition-colors font-mono text-[0.55rem] uppercase tracking-widest text-[#1c1713]">{opt}</button>
              ))}
            </div>
          </div>
        </div>
        <button className="w-full py-4 bg-[#1c1713] text-[#faf7f2] font-mono text-[0.65rem] uppercase tracking-widest hover:bg-[#b5893a] transition-colors">
          Find Their Scent
        </button>
      </div>

      <p className="mt-6 font-serif italic text-xs opacity-60 text-[#1c1713]">
        Everything arrives in a Sillage gift box. <br/>
        No receipt. No price. Unless you want one.
      </p>
    </div>
  );

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={scrollRef}
      className="h-full w-full bg-[#f2ece0] flex flex-col p-8 overflow-y-auto no-scrollbar relative selection:bg-[#b5893a]/20"
    >

      {/* Persona Indicator */}
      <div className="h-8 mb-10 border-b border-[#c8c0b4]/20 flex items-center flex-shrink-0">
        <span className="font-mono text-[0.6rem] text-[#b5893a] tracking-widest uppercase">
          READING CONTEXT: ▸ {isTyping ? '_' : personaLabels[activePersona]}
        </span>
      </div>

      {/* Homepage Preview */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-12 font-serif text-3xl italic tracking-[0.2em] opacity-20 text-[#1c1713]">SILLAGE</div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePersona}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex justify-center"
          >
            {activePersona === 'expert' && renderExpertView()}
            {activePersona === 'first-time' && renderFirstTimeView()}
            {activePersona === 'gift' && renderGiftView()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persona Switcher */}
      <div className="mt-12 pt-6 border-t border-[#c8c0b4]/20 flex justify-center gap-6 flex-shrink-0">
        {(Object.keys(personaLabels) as PersonaID[]).map(id => (
          <button
            key={id}
            onClick={() => setActivePersona(id)}
            className={`font-mono text-[0.55rem] uppercase tracking-widest transition-all duration-300 ${activePersona === id ? 'text-[#b5893a] border-b border-[#b5893a] pb-1' : 'text-[#c8c0b4] hover:text-[#1c1713]'}`}
          >
            {personaLabels[id]}
          </button>
        ))}
      </div>

    </div>
  );
}
