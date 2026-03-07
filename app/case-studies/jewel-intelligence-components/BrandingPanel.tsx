'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BrandingPanel() {
  const [typedMessage, setTypedMessage] = useState('');
  const fullMessage = "✨ Hi Riya — your Diamond Necklace (Order #JR2026-091) is ready. Private preview at 4:00 PM tomorrow. Reply ✅ to confirm.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedMessage(fullMessage.slice(0, i));
      i++;
      if (i > fullMessage.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-10 h-full flex flex-col items-center justify-center bg-[#0e0c13] text-[#f2ece0]">
      {/* Phone Frame */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 80 }}
        className="w-full max-w-[280px] aspect-[9/18.5] bg-[#000000] rounded-[3rem] border-[8px] border-[#1c1a21] shadow-2xl relative overflow-hidden flex flex-col"
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1c1a21] rounded-b-3xl z-20" />

        {/* Header */}
        <div className="pt-10 pb-4 px-6 border-b border-[#c9a84c]/10 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#16141a] border border-[#c9a84c]/20 flex items-center justify-center text-[0.7rem] font-serif italic text-[#c9a84c]">JI</div>
          <div>
            <p className="text-[0.75rem] font-medium leading-none mb-1">Jewel Intelligence</p>
            <p className="text-[0.55rem] opacity-40 leading-none font-mono">Official Store</p>
          </div>
        </div>

        {/* Chat Thread */}
        <div className="flex-1 p-5 space-y-6 overflow-y-auto no-scrollbar">
          <div className="mx-auto bg-[#c9a84c]/5 border border-[#c9a84c]/10 rounded px-3 py-1 text-[0.45rem] font-mono uppercase tracking-[0.2em] text-center opacity-40 w-max">
            Today
          </div>

          <div className="max-w-[85%] bg-[#16141a] border border-[#c9a84c]/15 rounded-2xl rounded-tl-none p-4 relative shadow-xl">
            <p className="text-[0.75rem] leading-relaxed text-[#f2ece0]/90">
              {typedMessage}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1 h-3.5 bg-[#c9a84c] ml-1 align-middle"
              />
            </p>
            <div className="flex justify-end items-center gap-1 mt-2 opacity-20">
               <span className="text-[0.5rem] font-mono">10:45 AM</span>
               <span className="text-[0.6rem]">✓✓</span>
            </div>
          </div>
        </div>

        {/* Template Selector */}
        <div className="p-5 bg-[#16141a] border-t border-[#c9a84c]/10">
          <p className="text-[0.55rem] font-mono uppercase tracking-[0.3em] opacity-30 mb-4">Branded Templates</p>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {['Event Invite', 'Care Tip', 'Anniversary', 'VIP Access'].map((t, i) => (
              <div
                key={i}
                className={`flex-shrink-0 px-4 py-2 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/5 text-[0.55rem] uppercase tracking-widest font-mono ${i === 3 ? 'text-[#c9a84c] border-[#c9a84c]/50' : 'opacity-40'}`}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
