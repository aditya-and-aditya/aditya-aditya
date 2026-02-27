'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Source = 'INSTAGRAM' | 'GOOGLE' | 'EMAIL' | 'DIRECT' | 'A FRIEND';

export default function PresencePanel() {
  const [activeSource, setActiveSource] = useState<Source>('INSTAGRAM');

  return (
    <div className="h-full w-full bg-[var(--sillage-cream)] text-[var(--sillage-ink)] flex flex-col overflow-hidden">

      {/* Source Bar */}
      <div className="bg-[var(--sillage-black)] p-4 flex items-center gap-6">
        <span className="font-mono text-[0.65rem] text-[var(--sillage-mist)] uppercase tracking-widest whitespace-nowrap">ARRIVING FROM:</span>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {(['INSTAGRAM', 'GOOGLE', 'EMAIL', 'DIRECT', 'A FRIEND'] as Source[]).map(source => (
            <button
              key={source}
              onClick={() => setActiveSource(source)}
              className={`px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider whitespace-nowrap transition-all ${activeSource === source ? 'text-[var(--sillage-gold)] border border-[var(--sillage-gold)]' : 'text-[var(--sillage-mist)] hover:text-[var(--sillage-white)]'}`}
            >
              {source}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Container */}
      <div className="flex-1 relative overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSource}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            {activeSource === 'INSTAGRAM' && (
              <div className="h-full flex flex-col items-center justify-center p-12 text-center relative bg-[var(--sillage-black)]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2a1f14] to-[#0a0907] opacity-60" />
                <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                <div className="relative z-10 space-y-4">
                  <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 0.6, y: 0 }} transition={{ delay: 0.2 }} className="font-serif text-[2.2rem] text-[var(--sillage-white)] leading-tight">Some things you feel</motion.p>
                  <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 0.9, y: 0 }} transition={{ delay: 0.4 }} className="font-serif italic text-[2.2rem] text-[var(--sillage-white)] leading-tight">before you understand them.</motion.p>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                  <span className="font-mono text-[0.5rem] uppercase tracking-widest text-[var(--sillage-white)]">Scroll</span>
                  <div className="h-12 w-px bg-[var(--sillage-gold)] animate-pulse" />
                </motion.div>
              </div>
            )}

            {activeSource === 'GOOGLE' && (
              <div className="h-full flex p-12 bg-[var(--sillage-white)]">
                <div className="w-[60%] flex flex-col justify-center pr-12">
                  <span className="font-mono text-[0.65rem] text-[var(--sillage-gold)] uppercase tracking-widest mb-6 block">THE ANSWER TO YOUR SEARCH</span>
                  <h2 className="font-serif text-[2.8rem] text-[var(--sillage-ink)] leading-[1.1] mb-6">Built to last 8 hours <br/> on skin. Here is why.</h2>
                  <div className="font-mono text-[0.8rem] text-charcoal space-y-2 mb-10 opacity-70">
                    <p>23% concentration.</p>
                    <p>Cold-press extraction.</p>
                    <p>47 iterations.</p>
                  </div>
                  <div className="flex gap-8">
                    <button className="font-mono text-[0.7rem] uppercase tracking-widest border-b border-[var(--sillage-gold)] text-[var(--sillage-gold)] pb-1">See the Formula</button>
                    <button className="font-mono text-[0.7rem] uppercase tracking-widest border-b border-[var(--sillage-ink)] text-[var(--sillage-ink)] pb-1">Start With No. 3</button>
                  </div>

                  <div className="mt-16 space-y-4 max-w-xs">
                    {[
                      { name: 'No. 1 — Morning', val: 90, h: '10h' },
                      { name: 'No. 2 — Threshold', val: 75, h: '8h' },
                      { name: 'No. 3 — Before Rain', val: 75, h: '8h' }
                    ].map(item => (
                      <div key={item.name} className="space-y-1">
                        <div className="flex justify-between font-mono text-[0.6rem] uppercase tracking-tighter opacity-40">
                          <span>{item.name}</span>
                          <span>{item.h}</span>
                        </div>
                        <div className="h-1 w-full bg-[var(--sillage-bone)]">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${item.val}%` }} transition={{ duration: 0.8, delay: 0.5 }} className="h-full bg-[var(--sillage-gold)]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[40%] flex items-center justify-center bg-[var(--sillage-bone)]/30">
                  <span className="font-serif italic text-6xl opacity-10">S_3</span>
                </div>
              </div>
            )}

            {activeSource === 'EMAIL' && (
              <div className="h-full flex flex-col items-center justify-center p-12 bg-[var(--sillage-white)] text-center">
                <span className="font-mono text-[0.65rem] text-[var(--sillage-gold)] uppercase tracking-widest mb-12 block">For subscribers — 48 hours early.</span>
                <h2 className="font-serif italic text-[3rem] text-[var(--sillage-ink)] leading-tight mb-16">The one we have <br/> been holding back.</h2>

                <div className="w-full max-w-sm aspect-[4/3] bg-[var(--sillage-bone)] mb-16 flex items-center justify-center relative overflow-hidden group">
                  <span className="font-serif italic text-5xl opacity-10">No. 2 — Threshold</span>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[0.6rem] text-[var(--sillage-ink)] opacity-40">
                    <span>£175</span>
                    <span>INTELLECTUAL_S_2</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <p className="font-mono text-[0.65rem] italic text-[var(--sillage-mist)]">
                    Three others have opened this email. <br/> None have ordered yet.
                  </p>
                  <div className="font-mono text-[0.7rem] text-[var(--sillage-gold)] uppercase tracking-widest">
                    [ Your Early Access Ends in 47:22:58 ]
                  </div>
                </div>
              </div>
            )}

            {activeSource === 'DIRECT' && (
              <div className="h-full flex flex-col items-center justify-center p-12 bg-[var(--sillage-white)]">
                <div className="font-serif text-4xl italic tracking-[0.2em] opacity-20 mb-20">SILLAGE</div>
                <div className="max-w-md w-full space-y-12">
                  <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="font-serif text-[1.4rem] text-[var(--sillage-ink)]">
                    Three things have changed <br/> since your last visit.
                  </motion.h2>
                  <div className="space-y-8">
                    {[
                      { l: 'STOCK', r: 'No. 2 "Threshold" is back in stock.' },
                      { l: 'NOTES', r: 'New production notes added to No. 3.' },
                      { l: 'NEXT', r: 'The next fragrance has a name.' }
                    ].map((row, i) => (
                      <motion.div key={row.l} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + i * 0.3 }} className="flex gap-8 group cursor-pointer">
                        <span className="font-mono text-[0.6rem] text-[var(--sillage-gold)] w-12">── {row.l}</span>
                        <span className="font-mono text-[0.65rem] text-[var(--sillage-ink)] group-hover:text-[var(--sillage-gold)] transition-colors">{row.r}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSource === 'A FRIEND' && (
              <div className="h-full flex flex-col bg-[var(--sillage-white)]">
                <div className="flex-1 flex border-b border-[var(--sillage-bone)]">
                  <div className="w-1/2 p-12 flex flex-col justify-center border-r border-[var(--sillage-bone)]">
                    <h2 className="font-serif italic text-[2.5rem] leading-tight text-[var(--sillage-ink)]">You heard <br/> about us.</h2>
                  </div>
                  <div className="w-1/2 p-12 flex flex-col justify-center bg-[var(--sillage-cream)]">
                    <h2 className="font-serif text-[2.5rem] leading-tight text-[var(--sillage-ink)]">Here is <br/> everything.</h2>
                  </div>
                </div>
                <div className="p-12 max-w-2xl mx-auto space-y-8 text-center">
                  <div className="space-y-4 font-serif text-[1.1rem] leading-relaxed opacity-70">
                    <p>Sillage is not for everyone. It is the trail a fragrance leaves in the air after a person has passed through. It is the invisible proof that someone was there.</p>
                    <p>We do not announce ourselves. We make something that lasts on the skin and lingers in the memory. That is all.</p>
                    <p className="italic">Start anywhere.</p>
                  </div>
                  <button className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--sillage-gold)] border-b border-[var(--sillage-gold)] pb-1 hover:text-[var(--sillage-ink)] hover:border-[var(--sillage-ink)] transition-all">
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
