'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const signals = [
  "23 customers viewing No. 3 right now",
  "Most filtered note this hour: Vetiver",
  "Abandoned cart note pattern: Oud + Rose",
  "Trending search: \"something different\"",
  "Peak add-to-cart window: 9pm – 11pm",
  "Customer affinity: Iris + Smoke (High LTV)",
  "Geo-spike: Tokyo interest in \"Before Rain\"",
  "Return rate correlation: \"Clean\" descriptor",
  "New search cluster: \"mineral leather\"",
  "Inventory alert: No. 5 maceration delay",
  "Session depth: 14m average for collectors",
  "Gift intent rising: +15% WoW",
  "Mobile conversion: Midnight over-indexing"
];

export default function InsightsPanel() {
  const [activeSignals, setActiveSignals] = useState<string[]>(signals.slice(0, 5));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSignals(prev => {
        const nextSignal = signals[Math.floor(Math.random() * signals.length)];
        const filtered = prev.filter(s => s !== nextSignal);
        return [nextSignal, ...filtered.slice(0, 4)];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full bg-[#0e0c0a] text-[#faf8f4] flex flex-col p-8 overflow-y-auto no-scrollbar selection:bg-[#c8832a]/30">
      <div className="flex justify-between items-center mb-10">
        <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[#c8832a]">Internal Infrastructure</h3>
        <div className="flex items-center gap-2 font-mono text-[0.6rem] text-[#c8832a]/60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8832a] animate-pulse"></span>
          LIVE PULSE
        </div>
      </div>

      <div className="space-y-12">
        <div className="border border-[#faf8f4]/10 bg-[#faf8f4]/5">
          <div className="px-6 py-3 border-b border-[#faf8f4]/10 flex justify-between">
            <span className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40">Live Signals</span>
            <span className="font-mono text-[0.6rem] opacity-40">NRT-V3</span>
          </div>
          <div className="p-6 h-[220px] overflow-hidden flex flex-col">
            <AnimatePresence initial={false}>
              {activeSignals.map((signal) => (
                <motion.div
                  key={signal}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5 }}
                  className="py-3 border-b border-[#faf8f4]/5 last:border-0 font-mono text-[0.7rem] tracking-tight opacity-80"
                >
                  {signal}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="border border-[#faf8f4]/10 bg-[#faf8f4]/5">
          <div className="px-6 py-3 border-b border-[#faf8f4]/10">
            <span className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40">This Week's Signal</span>
          </div>
          <div className="p-8">
            <p className="font-serif italic text-lg leading-relaxed mb-6">
              "Customers who purchase in the <span className="text-[#c8832a]">"Woody"</span> category are returning 2.3x faster than last quarter. The word <span className="text-[#c8832a]">"grounding"</span> appears in 34% of their reviews."
            </p>
            <div className="space-y-4 pt-6 border-t border-[#faf8f4]/10">
              <div className="flex gap-4">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest opacity-30 w-24">Hypothesis</span>
                <span className="font-mono text-[0.6rem] tracking-tight opacity-70">Post-summer reorientation.</span>
              </div>
              <div className="flex gap-4">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest opacity-30 w-24">Action</span>
                <span className="font-mono text-[0.6rem] tracking-tight opacity-70">Feature Woody collection in next email. Lead with the word.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#c8832a]/60 bg-[#c8832a]/5">
          <div className="px-6 py-3 border-b border-[#c8832a]/20 flex justify-between items-center">
            <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#c8832a]">Blind Spot Detected</span>
            <span className="text-[#c8832a]">⚑</span>
          </div>
          <div className="p-8">
            <p className="font-mono text-[0.7rem] tracking-tight opacity-80 mb-6 leading-relaxed">
              Customers who filter "Unisex" have 40% higher LTV but represent only 12% of homepage traffic.
            </p>
            <p className="font-serif italic text-xl text-[#c8832a]">
              "They are converting despite you."
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
