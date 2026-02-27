'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Source = 'INSTAGRAM' | 'GOOGLE' | 'EMAIL' | 'DIRECT' | 'A FRIEND';

export default function PresencePanel() {
  const [activeSource, setActiveSource] = useState<Source>('INSTAGRAM');
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={scrollRef}
      className="h-full w-full bg-[#f2ece0] text-[#1c1713] flex flex-col overflow-y-auto no-scrollbar"
    >

      {/* Source Bar */}
      <div className="bg-[#0a0907] p-4 flex items-center gap-4 flex-shrink-0">
        <span className="font-mono text-[0.55rem] text-[#c8c0b4] uppercase tracking-widest whitespace-nowrap">ARRIVING FROM:</span>
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {(['INSTAGRAM', 'GOOGLE', 'EMAIL', 'DIRECT', 'A FRIEND'] as Source[]).map(source => (
            <button
              key={source}
              onClick={() => setActiveSource(source)}
              className={`px-2 py-1 font-mono text-[0.5rem] uppercase tracking-wider whitespace-nowrap transition-all ${activeSource === source ? 'text-[#b5893a] border border-[#b5893a]' : 'text-[#c8c0b4] hover:text-[#faf7f2]'}`}
            >
              {source}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Container */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSource}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="h-full flex flex-col"
          >
            {activeSource === 'INSTAGRAM' && (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative bg-[#0a0907] min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2a1f14] to-[#0a0907] opacity-60" />
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                <div className="relative z-10 space-y-4">
                  <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 0.6, y: 0 }} transition={{ delay: 0.2 }} className="font-serif text-2xl md:text-3xl text-[#faf7f2] leading-tight">Some things you feel</motion.p>
                  <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 0.9, y: 0 }} transition={{ delay: 0.4 }} className="font-serif italic text-2xl md:text-3xl text-[#faf7f2] leading-tight">before you understand them.</motion.p>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                  <span className="font-mono text-[0.45rem] uppercase tracking-widest text-[#faf7f2]">Scroll</span>
                  <div className="h-10 w-px bg-[#b5893a]" />
                </motion.div>
              </div>
            )}

            {activeSource === 'GOOGLE' && (
              <div className="flex-1 flex flex-col md:flex-row p-8 bg-[#faf7f2] min-h-[400px]">
                <div className="w-full md:w-[60%] flex flex-col justify-center md:pr-8">
                  <span className="font-mono text-[0.6rem] text-[#b5893a] uppercase tracking-widest mb-4 block">THE ANSWER TO YOUR SEARCH</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#1c1713] leading-[1.1] mb-6">Built to last 8 hours <br/> on skin. Here is why.</h2>
                  <div className="font-mono text-[0.7rem] text-[#1c1713] space-y-2 mb-8 opacity-70">
                    <p>23% concentration. Cold-press extraction.</p>
                  </div>
                  <div className="flex gap-6 mb-12">
                    <button className="font-mono text-[0.65rem] uppercase tracking-widest border-b border-[#b5893a] text-[#b5893a] pb-1">See the Formula</button>
                    <button className="font-mono text-[0.65rem] uppercase tracking-widest border-b border-[#1c1713] text-[#1c1713] pb-1">Start With No. 3</button>
                  </div>

                  <div className="space-y-4 max-w-xs">
                    {[
                      { name: 'No. 1 — Morning', val: 90, h: '10h' },
                      { name: 'No. 2 — Threshold', val: 75, h: '8h' },
                      { name: 'No. 3 — Before Rain', val: 75, h: '8h' }
                    ].map(item => (
                      <div key={item.name} className="space-y-1">
                        <div className="flex justify-between font-mono text-[0.55rem] uppercase tracking-tighter opacity-40">
                          <span>{item.name}</span>
                          <span>{item.h}</span>
                        </div>
                        <div className="h-1 w-full bg-[#e8dfd0]">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${item.val}%` }} transition={{ duration: 0.8, delay: 0.5 }} className="h-full bg-[#b5893a]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex md:w-[40%] items-center justify-center bg-[#e8dfd0]/30">
                  <span className="font-serif italic text-5xl opacity-10">S_3</span>
                </div>
              </div>
            )}

            {activeSource === 'EMAIL' && (
              <div className="flex-1 flex flex-col items-center justify-center p-12 bg-[#faf7f2] text-center min-h-[400px]">
                <span className="font-mono text-[0.6rem] text-[#b5893a] uppercase tracking-widest mb-8 block">For subscribers — 48 hours early.</span>
                <h2 className="font-serif italic text-3xl md:text-4xl text-[#1c1713] leading-tight mb-12">The one we have <br/> been holding back.</h2>

                <div className="w-full max-w-xs aspect-[4/3] bg-[#e8dfd0] mb-12 flex items-center justify-center relative overflow-hidden group">
                  <span className="font-serif italic text-3xl opacity-10">No. 2 — Threshold</span>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[0.5rem] text-[#1c1713] opacity-40">
                    <span>£175</span>
                    <span>INTELLECTUAL_S_2</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="font-mono text-[0.6rem] italic text-[#c8c0b4]">
                    Three others have opened this email. <br/> None have ordered yet.
                  </p>
                  <div className="font-mono text-[0.65rem] text-[#b5893a] uppercase tracking-widest">
                    [ ACCESS ENDS IN 47:22:58 ]
                  </div>
                </div>
              </div>
            )}

            {activeSource === 'DIRECT' && (
              <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[#faf7f2] min-h-[400px]">
                <div className="font-serif text-3xl italic tracking-[0.2em] opacity-20 mb-12 text-[#1c1713]">SILLAGE</div>
                <div className="max-w-xs w-full space-y-10">
                  <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="font-serif text-xl text-[#1c1713] leading-snug">
                    Three things have changed <br/> since your last visit.
                  </motion.h2>
                  <div className="space-y-6">
                    {[
                      { l: 'STOCK', r: 'No. 2 "Threshold" is back in stock.' },
                      { l: 'NOTES', r: 'New production notes added to No. 3.' },
                      { l: 'NEXT', r: 'The next fragrance has a name.' }
                    ].map((row, i) => (
                      <motion.div key={row.l} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + i * 0.3 }} className="flex gap-6 group cursor-pointer">
                        <span className="font-mono text-[0.55rem] text-[#b5893a] w-12 flex-shrink-0">── {row.l}</span>
                        <span className="font-mono text-[0.6rem] text-[#1c1713] group-hover:text-[#b5893a] transition-colors">{row.r}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSource === 'A FRIEND' && (
              <div className="flex-1 flex flex-col bg-[#faf7f2] min-h-[400px]">
                <div className="flex border-b border-[#e8dfd0]">
                  <div className="w-1/2 p-8 flex flex-col justify-center border-r border-[#e8dfd0]">
                    <h2 className="font-serif italic text-2xl md:text-3xl leading-tight text-[#1c1713]">You heard <br/> about us.</h2>
                  </div>
                  <div className="w-1/2 p-8 flex flex-col justify-center bg-[#f2ece0]">
                    <h2 className="font-serif text-2xl md:text-3xl leading-tight text-[#1c1713]">Here is <br/> everything.</h2>
                  </div>
                </div>
                <div className="p-8 max-w-md mx-auto space-y-8 text-center flex-1 flex flex-col justify-center">
                  <div className="space-y-4 font-serif text-base leading-relaxed opacity-70 text-[#1c1713]">
                    <p>Sillage is not for everyone. It is the trail a fragrance leaves in the air after a person has passed through. It is the invisible proof that someone was there.</p>
                    <p className="italic">Start anywhere.</p>
                  </div>
                  <button className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#b5893a] border-b border-[#b5893a] pb-1 hover:text-[#1c1713] hover:border-[#1c1713] transition-all">
                    [ Find Your Frequency ]
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
