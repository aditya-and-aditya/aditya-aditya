'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const signals = [
  "No. 3 viewed for 4m 32s · no add to cart [note: Iris Root · Vetiver]",
  "Search: \"something like rain but warmer\"",
  "No. 1 added to cart · source: email",
  "Cart abandoned · item: No. 2 · step: shipping",
  "Filter applied: \"unisex\" · session 3+ pages",
  "Review submitted · \"wearing this to a funeral\"",
  "No. 3 wishlist add · returning visitor",
  "Search: \"does it last\"",
  "Geo-spike: Paris · cluster around No. 2",
  "Affinity detected: Iris + Smoke [High LTV]",
  "Session depth: 14m average for collectors",
  "Gift intent rising: +15% WoW",
  "Mobile conversion: Midnight over-indexing"
];

export default function InsightsPanel() {
  const [activeSignals, setActiveSignals] = useState<string[]>(signals.slice(0, 6));
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const signalInterval = setInterval(() => {
      setActiveSignals(prev => {
        const nextSignal = signals[Math.floor(Math.random() * signals.length)];
        const filtered = prev.filter(s => s !== nextSignal);
        return [nextSignal, ...filtered.slice(0, 5)];
      });
    }, 3000);

    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(signalInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="h-full w-full bg-[var(--sillage-black)] text-[var(--sillage-white)] flex flex-col p-10 overflow-hidden font-mono selection:bg-[var(--sillage-gold)]/30">

      {/* Dashboard Header */}
      <div className="flex justify-between items-end mb-12 border-b border-[var(--sillage-white)]/10 pb-4">
        <div className="space-y-1">
          <div className="text-[0.65rem] uppercase tracking-[0.2em] flex items-center gap-2">
            SILLAGE / INTELLIGENCE LAYER
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[var(--sillage-gold)]" />
            <span className="text-[var(--sillage-gold)]">LIVE</span>
          </div>
        </div>
        <div className="text-[0.6rem] text-[var(--sillage-mist)] opacity-60 text-right">
          {time.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short' }).toUpperCase()} <br/>
          {time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })} · 127 ACTIVE SESSIONS
        </div>
      </div>

      <div className="flex-1 space-y-12 overflow-y-auto no-scrollbar">

        {/* Layer A: Live Signals */}
        <div>
          <h4 className="text-[0.65rem] uppercase tracking-widest text-[var(--sillage-gold)] mb-6 opacity-60">LIVE SIGNALS</h4>
          <div className="h-[240px] relative overflow-hidden flex flex-col gap-2">
            <AnimatePresence initial={false}>
              {activeSignals.map((signal, i) => (
                <motion.div
                  key={signal}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex gap-4 py-3 border-b border-[var(--sillage-white)]/5 last:border-0"
                >
                  <span className="text-[var(--sillage-gold)] flex-shrink-0">→</span>
                  <span className="text-[0.7rem] tracking-tight text-[var(--sillage-white)]/90 flex-1">{signal.split(' · ')[0]}</span>
                  {signal.includes(' · ') && (
                    <span className="text-[0.6rem] text-[var(--sillage-mist)] opacity-50 uppercase">{signal.split(' · ')[1]}</span>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Layer B: Weekly Pattern */}
        <div className="bg-[var(--sillage-white)]/5 p-8 space-y-8 border border-[var(--sillage-white)]/10">
          <h4 className="text-[0.65rem] uppercase tracking-widest text-[var(--sillage-gold)] opacity-60">THIS WEEK'S PATTERN</h4>
          <div className="space-y-6">
            <p className="font-serif text-[1.1rem] italic leading-relaxed text-[var(--sillage-white)]/90">
              Customers in the <span className="text-[var(--sillage-gold)]">Woody</span> category are returning 2.3x faster than last quarter.
            </p>
            <p className="font-serif text-[1.1rem] italic leading-relaxed text-[var(--sillage-white)]/90">
              The word <span className="text-[var(--sillage-gold)]">"grounding"</span> appears in 34% of their recent reviews — up from 8% in Q3.
            </p>
            <div className="pt-6 border-t border-[var(--sillage-white)]/10 space-y-4">
              <p className="text-[0.7rem] text-[var(--sillage-mist)] opacity-80">This is a post-summer reorientation signal. They are looking for a familiar fragrance, not a new one.</p>
              <div className="bg-[var(--sillage-white)]/5 p-4 flex gap-4 items-center">
                <span className="text-[0.6rem] uppercase tracking-widest text-[var(--sillage-gold)]">Recommendation</span>
                <span className="text-[0.7rem] italic opacity-90">Subject line: "Still here."</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-[0.6rem] text-[var(--sillage-mist)] opacity-50">
            <span>CONFIDENCE: HIGH · 847 DATA POINTS</span>
            <span>GEN: 06 MAR</span>
          </div>
        </div>

        {/* Layer C: Blind Spot */}
        <div className="bg-[var(--sillage-gold)]/5 p-8 border border-[var(--sillage-gold)]/40 relative">
          <div className="absolute top-8 right-8 text-[var(--sillage-gold)] text-xl">⚑</div>
          <h4 className="text-[0.65rem] uppercase tracking-widest text-[var(--sillage-gold)] mb-8">BLIND SPOT DETECTED</h4>
          <div className="space-y-6">
            <p className="text-[0.75rem] leading-relaxed text-[var(--sillage-white)]/80">
              Customers who filter "unisex" represent 12% of sessions but 31% of revenue.
              AOV: £192 vs £141 site average.
            </p>
            <p className="font-serif text-xl text-[var(--sillage-white)] leading-tight">
              "They are converting despite Sillage. Not because of it."
            </p>
            <div className="pt-6 border-t border-[var(--sillage-gold)]/20">
              <span className="text-[0.6rem] uppercase tracking-widest text-[var(--sillage-gold)] block mb-2">PRIORITY: URGENT</span>
              <p className="text-[0.7rem] text-[var(--sillage-mist)]">Create a dedicated entry point for this cohort. Lead with frequency alignment, not gender categories.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
