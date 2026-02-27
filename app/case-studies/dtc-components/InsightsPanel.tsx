'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      className="h-full w-full bg-[#0a0907] text-[#faf7f2] flex flex-col p-8 md:p-10 overflow-y-auto no-scrollbar font-mono selection:bg-[#b5893a]/30"
    >

      <div className="flex justify-between items-end mb-10 border-b border-[#faf7f2]/10 pb-4 flex-shrink-0">
        <div className="space-y-1">
          <div className="text-[0.6rem] uppercase tracking-[0.2em] flex items-center gap-2">
            SILLAGE / INTELLIGENCE LAYER
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#b5893a]" />
            <span className="text-[#b5893a]">LIVE</span>
          </div>
        </div>
        <div className="text-[0.55rem] text-[#c8c0b4] opacity-60 text-right">
          {time.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short' }).toUpperCase()} <br/>
          {time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })} · 127 ACTIVE
        </div>
      </div>

      <div className="space-y-10">
        <div>
          <h4 className="text-[0.6rem] uppercase tracking-widest text-[#b5893a] mb-4 opacity-60">LIVE SIGNALS</h4>
          <div className="h-[200px] relative overflow-hidden flex flex-col gap-1">
            <AnimatePresence initial={false}>
              {activeSignals.map((signal) => (
                <motion.div
                  key={signal}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-3 py-2 border-b border-[#faf7f2]/5 last:border-0"
                >
                  <span className="text-[#b5893a] flex-shrink-0">→</span>
                  <span className="text-[0.65rem] tracking-tight text-[#faf7f2]/90 flex-1 truncate">{signal.split(' · ')[0]}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-[#faf7f2]/5 p-6 space-y-6 border border-[#faf7f2]/10">
          <h4 className="text-[0.6rem] uppercase tracking-widest text-[#b5893a] opacity-60">THIS WEEK'S PATTERN</h4>
          <div className="space-y-4">
            <p className="font-serif text-[1rem] italic leading-relaxed text-[#faf7f2]/90">
              Customers in the Woody category are returning 2.3x faster than last quarter.
            </p>
            <div className="pt-4 border-t border-[#faf7f2]/10 space-y-3">
              <p className="text-[0.65rem] text-[#c8c0b4] opacity-80">Post-summer reorientation. They are looking for a familiar fragrance.</p>
              <div className="bg-[#faf7f2]/5 p-3 flex gap-3 items-center">
                <span className="text-[0.55rem] uppercase tracking-widest text-[#b5893a]">Action</span>
                <span className="text-[0.65rem] italic opacity-90">Subject: "Still here."</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#b5893a]/5 p-6 border border-[#b5893a]/40 relative">
          <div className="absolute top-6 right-6 text-[#b5893a] text-lg">⚑</div>
          <h4 className="text-[0.6rem] uppercase tracking-widest text-[#b5893a] mb-6">BLIND SPOT</h4>
          <div className="space-y-4">
            <p className="text-[0.7rem] leading-relaxed text-[#faf7f2]/80">
              Customers who filter "unisex" represent 12% of sessions but 31% of revenue.
            </p>
            <p className="font-serif text-lg text-[#faf7f2] leading-tight">
              "They are converting despite Sillage."
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
