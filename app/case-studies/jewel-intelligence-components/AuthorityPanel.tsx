'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AuthorityPanel() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="p-8 h-full flex flex-col items-center justify-center bg-[#0e0c13] text-[#f2ece0] overflow-hidden">
      <motion.div
        className="relative w-full max-w-sm aspect-[3/4] cursor-pointer"
        style={{ perspective: '1000px' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Front Face: Piece Registry Card */}
          <div
            className="absolute inset-0 bg-[#16141a] border border-[rgba(201,168,76,0.3)] rounded-xl p-8 flex flex-col shadow-2xl"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h4 className="text-[0.6rem] uppercase tracking-[0.2em] text-[#c9a84c]/60 font-mono mb-1">SKU Identity</h4>
                <p className="text-xl font-serif italic text-[#c9a84c]">Eternal Solitaire</p>
              </div>
              <div className="px-2 py-1 border border-green-500/30 bg-green-500/10 rounded text-[0.5rem] text-green-400 uppercase tracking-widest font-mono">
                Verified
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[0.65rem] font-mono uppercase tracking-wider">
                <div>
                  <span className="block opacity-30 mb-1">Stone</span>
                  <span>1.2ct Diamond</span>
                </div>
                <div>
                  <span className="block opacity-30 mb-1">Serial</span>
                  <span>JI-882-QX</span>
                </div>
                <div>
                  <span className="block opacity-30 mb-1">Hallmark</span>
                  <div className="w-8 h-8 mt-1 border border-[#c9a84c]/20 rounded-full flex items-center justify-center opacity-40">
                    <span className="text-[0.4rem]">AU</span>
                  </div>
                </div>
                <div>
                  <span className="block opacity-30 mb-1">Date</span>
                  <span>04 Nov 2022</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#c9a84c]/10">
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#c9a84c]/40 font-mono mb-4">Service History</p>
                <div className="space-y-4">
                  {[
                    { date: '12 Oct 23', label: 'Polish', icon: '✨' },
                    { date: '15 Apr 23', label: 'Inspection', icon: '🔍' },
                    { date: '04 Nov 22', label: 'Warranty', icon: '📜' }
                  ].map((entry, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <span className="text-xs">{entry.icon}</span>
                      <span className="text-[0.6rem] font-mono opacity-40">{entry.date}</span>
                      <span className="text-[0.65rem] uppercase tracking-wider">{entry.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <button className="mt-8 w-full py-3 border border-[#c9a84c]/20 bg-[#c9a84c]/5 text-[0.6rem] uppercase tracking-[0.2em] text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors rounded">
              Upload Certificate
            </button>
          </div>

          {/* Back Face: Verified Stamp */}
          <div
            className="absolute inset-0 bg-[#16141a] border border-[#c9a84c]/50 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-2xl"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="w-32 h-32 border-2 border-[#c9a84c]/30 rounded-full flex items-center justify-center relative mb-6">
              <div className="absolute inset-2 border border-[#c9a84c]/20 rounded-full animate-pulse" />
              <div className="rotate-[-12deg] border-2 border-[#c9a84c] px-4 py-1 rounded text-[#c9a84c] font-serif italic text-xl">
                Verified
              </div>
            </div>
            <h5 className="font-serif italic text-2xl mb-4 text-[#c9a84c]">Authenticity Guaranteed</h5>
            <p className="text-[0.7rem] font-mono uppercase tracking-tighter opacity-60 max-w-[200px]">
              This digital identity is cryptographically linked to the physical piece.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
