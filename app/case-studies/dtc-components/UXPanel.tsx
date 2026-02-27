'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UXPanel() {
  const [activeStage, setActiveStage] = useState(0);
  const [isGift, setIsGift] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showNextFrequency, setShowNextFrequency] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Implement internal scroll lock logic
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isHovered || !scrollRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
        // Let it bubble to main page
      } else {
        e.preventDefault();
        scrollRef.current.scrollTop += e.deltaY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isHovered]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, clientHeight } = scrollRef.current;
      const stage = Math.round(scrollTop / clientHeight);
      setActiveStage(stage);
    }
  };

  useEffect(() => {
    if (activeStage === 3) {
      const timer = setTimeout(() => setShowNextFrequency(true), 8000);
      return () => clearTimeout(timer);
    }
  }, [activeStage]);

  const stages = [
    {
      id: "product",
      title: "Product Page",
      content: (
        <div className="w-full max-w-sm p-8 bg-[var(--sillage-white)] shadow-xl border border-[var(--sillage-bone)]">
          <div className="flex justify-between items-baseline mb-8">
             <span className="font-serif italic text-sm">SILLAGE</span>
             <span className="font-serif text-2xl font-light">No. 3</span>
          </div>
          <div className="h-px bg-[var(--sillage-bone)] mb-8" />
          <h4 className="font-serif text-[2rem] leading-tight mb-4 text-[#1c1713]">"Before Rain"</h4>
          <p className="font-serif italic text-sm opacity-60 mb-8 leading-relaxed">The scent of a sky about to open.</p>
          <div className="space-y-2 font-serif text-[0.8rem] mb-12 opacity-80">
            <p>· Petrichor accord — 0 to 8 minutes</p>
            <p>· Iris Root absolute — 1 to 5 hours</p>
            <p>· Vetiver Bourbon — 6 hours to forever</p>
          </div>
          <div className="font-mono text-[0.6rem] uppercase tracking-widest text-[var(--sillage-gold)] mb-8">23% concentration. 47 iterations. One batch.</div>
          <div className="flex justify-between items-center">
            <span className="font-serif text-xl">£165</span>
            <button className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--sillage-gold)] border-b border-[var(--sillage-gold)] pb-1">
              [ Begin Your Bottle ]
            </button>
          </div>
        </div>
      )
    },
    {
      id: "intent",
      title: "The Single Question",
      content: (
        <div className="w-full max-w-sm p-10 bg-[var(--sillage-white)] shadow-xl border border-[var(--sillage-bone)] text-center">
          <p className="font-mono text-[0.5rem] uppercase tracking-widest text-[var(--sillage-mist)] mb-8">No. 3 — BEFORE RAIN</p>
          <h4 className="font-serif text-xl md:text-2xl mb-10 italic leading-snug">Before we continue — <br/> is this for you, or someone else?</h4>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setIsGift(false)}
              className={`py-4 border font-mono text-[0.6rem] uppercase tracking-widest transition-all ${!isGift ? 'bg-[var(--sillage-ink)] text-[var(--sillage-white)]' : 'border-[var(--sillage-bone)] hover:border-[var(--sillage-gold)]'}`}
            >
              For me
            </button>
            <button
              onClick={() => setIsGift(true)}
              className={`py-4 border font-mono text-[0.6rem] uppercase tracking-widest transition-all ${isGift ? 'bg-[var(--sillage-ink)] text-[var(--sillage-white)]' : 'border-[var(--sillage-bone)] hover:border-[var(--sillage-gold)]'}`}
            >
              A gift
            </button>
          </div>
          <AnimatePresence>
            {isGift && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-6">
                <input type="text" placeholder="A note to include (optional)" className="w-full bg-transparent border-b border-[var(--sillage-bone)] py-2 font-serif italic text-sm focus:outline-none focus:border-[var(--sillage-gold)] transition-colors mb-4" />
                <button className="font-mono text-[0.6rem] uppercase tracking-widest text-[var(--sillage-gold)]">[ Continue ]</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )
    },
    {
      id: "checkout",
      title: "The Cart",
      content: (
        <div className="w-full max-w-sm p-10 bg-[var(--sillage-white)] shadow-xl border border-[var(--sillage-bone)]">
          <div className="font-serif italic text-lg mb-10">SILLAGE</div>
          <h4 className="font-mono text-[0.6rem] uppercase tracking-widest text-[var(--sillage-gold)] mb-6">Your Bottle</h4>
          <div className="space-y-4 mb-10">
            <div className="flex justify-between font-serif text-base">
              <span>No. 3 — Before Rain</span>
              <span>£165</span>
            </div>
            {isGift && (
              <div className="flex justify-between font-serif text-base text-[var(--sillage-gold)]">
                <span>Sillage presentation box</span>
                <span>Incl.</span>
              </div>
            )}
            <div className="border-t border-dashed border-[var(--sillage-mist)] pt-6">
              <p className="font-mono text-[0.55rem] text-[var(--sillage-mist)] italic uppercase tracking-widest">
                {isGift ? "Arrives in 2–3 days. No price on the gift box." : "Arrives in 2–3 days."}
              </p>
            </div>
          </div>
          <button className="w-full py-4 bg-[var(--sillage-ink)] text-[var(--sillage-white)] font-mono text-[0.7rem] uppercase tracking-[0.2em] hover:bg-[var(--sillage-gold)] transition-colors">
            Complete Your Order
          </button>
        </div>
      )
    },
    {
      id: "confirmation",
      title: "The Confirmation",
      content: (
        <div className="w-full max-w-sm p-10 bg-[var(--sillage-white)] shadow-xl border border-[var(--sillage-bone)]">
           <div className="font-serif italic text-lg mb-10">SILLAGE</div>
           <h4 className="font-serif text-2xl italic mb-3">It is on its way to you.</h4>
           <div className="font-mono text-[0.55rem] uppercase tracking-widest text-[var(--sillage-mist)] mb-10">No. 3 — Before Rain · Arriving within 3 days.</div>

           <div className="border-y border-dashed border-[var(--sillage-mist)] py-6 my-6 text-center">
              <p className="font-mono text-[0.55rem] uppercase tracking-widest text-[var(--sillage-gold)] mb-3">A note while you wait:</p>
              <p className="font-serif italic text-xs leading-relaxed text-[var(--sillage-ink)]/70">
                {isGift ? "\"Before you give it: put one drop on your own wrist. Know what you are giving.\"" : "\"Wear it first on a day with nothing else in it. Let it be the only interesting thing about the day.\""}
              </p>
           </div>

           <div className="h-10 flex items-center justify-center">
             <AnimatePresence>
              {showNextFrequency && (
                <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--sillage-gold)] hover:text-[var(--sillage-ink)] transition-colors">
                  [ Your next frequency → ]
                </motion.button>
              )}
             </AnimatePresence>
           </div>
        </div>
      )
    },
    {
      id: "ghost",
      title: "The Ghost",
      content: (
        <div className="w-full max-w-sm p-8 bg-[var(--sillage-black)] text-[var(--sillage-gold)] font-mono text-[0.6rem] leading-relaxed border-l-2 border-[var(--sillage-gold)]/40">
          <div className="opacity-40 mb-6 uppercase tracking-widest flex justify-between">
            <span>INSIGHTS_LOG_V2</span>
            <span>● SECURE</span>
          </div>
          <div className="space-y-4 opacity-80">
            <p>· TIME: 22:14 GMT (LATE_EVENING_PURCHASE)</p>
            <p>· SOURCE: DIRECT_NAV (RETURNING_VISITOR)</p>
            <p>· PERSONA: FIRST_TIME_BUYER (QUIZ_DRIVEN)</p>
            <p>· NOTES: COOL_WET_DARK (AFFINITY_MATCH)</p>
            <p>· SEQUENCE: FIRST_PURCHASE</p>
            <p>· LTV_PROJ: £512 (COHORT_V3)</p>
          </div>
          <div className="mt-8 pt-6 border-t border-[var(--sillage-white)]/10 italic opacity-40">
            &lt;!-- Automated email trigger: 14 days --&gt; <br/>
            &lt;!-- Soft intro to No. 2 (Threshold) --&gt;
          </div>
        </div>
      )
    }
  ];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full w-full bg-[var(--sillage-cream)] flex relative overflow-hidden"
    >

      {/* Timeline */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20">
        <div className="w-px h-32 bg-[var(--sillage-bone)] relative">
          {stages.map((_, i) => (
            <motion.div
              key={i}
              className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-[var(--sillage-gold)] transition-colors duration-500`}
              style={{
                top: `${(i / (stages.length - 1)) * 100}%`,
                backgroundColor: activeStage === i ? 'var(--sillage-gold)' : 'transparent'
              }}
            />
          ))}
          <motion.div
            className="absolute top-0 left-0 w-full bg-[var(--sillage-gold)]"
            animate={{ height: `${(activeStage / (stages.length - 1)) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-scroll snap-y snap-mandatory no-scrollbar"
      >
        {stages.map((stage, i) => (
          <section
            key={stage.id}
            className="h-full min-h-full flex-shrink-0 snap-start flex flex-col items-center justify-center p-8 relative"
          >
            <div className="absolute top-8 right-8 font-mono text-[0.45rem] uppercase tracking-widest text-[var(--sillage-gold)] opacity-40">
              STAGE_0{i + 1} — {stage.title}
            </div>
            {stage.content}
            {i < stages.length - 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-20">
                <span className="font-mono text-[0.45rem] uppercase tracking-widest">Scroll</span>
                <div className="h-6 w-px bg-[var(--sillage-ink)]" />
              </div>
            )}
          </section>
        ))}
      </div>

    </div>
  );
}
