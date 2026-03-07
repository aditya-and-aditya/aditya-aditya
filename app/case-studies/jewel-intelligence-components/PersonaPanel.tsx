'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PersonaPanel() {
  const familyNodes = [
    { id: 'mother', label: 'Anjali', role: 'Mother', x: -100, y: -60 },
    { id: 'fiance', label: 'Arjun', role: 'Fiancé', x: 100, y: -60 },
    { id: 'self', label: 'Riya', role: 'Self', x: 0, y: 40 },
  ];

  return (
    <div className="p-10 h-full flex flex-col bg-[#0e0c13] text-[#f2ece0] overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="flex items-center gap-6 mb-12">
        <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-2xl font-serif italic text-[#c9a84c]">
          R
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="text-2xl font-serif italic text-[#f2ece0]">Riya Malhotra</h4>
            <span className="px-3 py-1 bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[0.55rem] text-[#c9a84c] uppercase tracking-[0.2em] rounded-full font-mono">
              Wedding Buyer
            </span>
          </div>
          <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider opacity-40">
            Lifetime Spend: $42,500
          </div>
        </div>
      </div>

      {/* Family Graph */}
      <div className="relative h-64 mb-12 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Connecting lines */}
          <motion.line
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            x1="50%" y1="65%" x2="25%" y2="25%" stroke="#c9a84c" strokeWidth="1"
          />
          <motion.line
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            x1="50%" y1="65%" x2="75%" y2="25%" stroke="#c9a84c" strokeWidth="1"
          />
        </svg>

        <div className="relative w-full h-full">
          {familyNodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.2, type: 'spring', damping: 15 }}
              className="absolute flex flex-col items-center group cursor-help"
              style={{
                left: `calc(50% + ${node.x}px)`,
                top: `calc(50% + ${node.y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className={`w-12 h-12 rounded-full border border-[#c9a84c]/30 flex items-center justify-center text-[0.7rem] font-serif transition-colors group-hover:bg-[#c9a84c]/20 ${i === 2 ? 'bg-[#c9a84c]/20' : 'bg-[#16141a]'}`}>
                {node.label[0]}
              </div>
              <div className="mt-2 text-center">
                <p className="text-[0.65rem] font-medium">{node.label}</p>
                <p className="text-[0.5rem] opacity-30 uppercase tracking-tighter font-mono">{node.role}</p>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 p-3 bg-[#1c1a21] border border-[#c9a84c]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
                 <p className="text-[0.5rem] font-mono uppercase tracking-widest text-[#c9a84c]/60 mb-1">Last Purchase</p>
                 <p className="text-[0.6rem] font-medium leading-tight mb-1">Platinum Tennis Bracelet</p>
                 <p className="text-[0.45rem] opacity-30 uppercase font-mono">18 Jan 2024</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Style DNA */}
      <div className="mb-10">
        <h5 className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c9a84c]/40 font-mono mb-4">Style DNA</h5>
        <div className="flex flex-wrap gap-2">
          {['Minimal', 'Solitaire', 'Rose Gold', '16" Chain', 'Size 12'].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.05 }}
              className="px-4 py-1.5 bg-[#c9a84c]/5 border border-[#c9a84c]/10 rounded-full text-[0.6rem] uppercase tracking-wider text-[#c9a84c]/80"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Shared Registry */}
      <div className="mt-auto pt-8 border-t border-[#c9a84c]/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 bg-[#16141a] border border-[#c9a84c]/10 rounded" />
           <div className="w-10 h-10 bg-[#16141a] border border-[#c9a84c]/10 rounded" />
           <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#c9a84c]/60 font-mono ml-2">Shared Registry</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
      </div>
    </div>
  );
}
