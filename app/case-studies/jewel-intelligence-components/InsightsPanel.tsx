'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function InsightsPanel() {
  const [hovered, setHovered] = useState<number | null>(null);

  const opportunities = [
    { name: 'Sarah J.', occasion: 'Wedding Anniversary', days: 18, score: 92, action: 'Send preview invite' },
    { name: 'Michael R.', occasion: 'Birthday Milestone', days: 12, score: 85, action: 'Stylist call' },
    { name: 'Elena K.', occasion: 'Engagement Anniversary', days: 24, score: 78, action: 'Sequence trigger' },
    { name: 'David W.', occasion: 'Push Present Window', days: 45, score: 94, action: 'Bespoke catalog' },
  ];

  const kpis = [
    { label: 'Conversion Rate', value: '14.2%', trend: '+2.4%' },
    { label: 'Avg Order Value', value: '$8,420', trend: '+1.8%' },
    { label: 'Repeat Rate', value: '38%', trend: '+4.2%' },
  ];

  return (
    <div className="p-10 h-full flex flex-col bg-[#0e0c13] text-[#f2ece0] overflow-y-auto no-scrollbar">
      <div className="mb-10">
        <h4 className="text-[0.65rem] uppercase tracking-[0.4em] text-[#c9a84c]/60 font-mono mb-2">Top Opportunities — Next 90 Days</h4>
        <p className="text-xl font-serif italic text-[#f2ece0]">Upcoming Occasions Board</p>
      </div>

      <div className="space-y-4 mb-12 flex-1">
        {opportunities.map((opp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-20"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="w-full h-full relative"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: hovered === i ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-[#16141a] border border-[#c9a84c]/10 rounded-xl p-5 flex items-center justify-between"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium">{opp.name}</span>
                    <span className="text-[0.55rem] font-mono opacity-30 uppercase tracking-widest">{opp.occasion}</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="flex-1 h-1 bg-[#c9a84c]/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${opp.score}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 1.2 }}
                          className="h-full bg-[#c9a84c]/70"
                        />
                     </div>
                     <span className="text-[0.5rem] font-mono opacity-30">{opp.days}d left</span>
                  </div>
                </div>
                <div className="ml-6 px-3 py-1.5 border border-[#c9a84c]/20 bg-[#c9a84c]/5 rounded text-[0.55rem] uppercase tracking-widest text-[#c9a84c] font-mono">
                  {opp.action}
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 bg-[#1c1a21] border border-[#c9a84c]/30 rounded-xl p-5 flex flex-col justify-center"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <p className="text-[0.55rem] font-mono uppercase tracking-[0.2em] text-[#c9a84c]/50 mb-1">Suggested Message</p>
                <p className="text-[0.75rem] italic opacity-90 leading-snug font-serif">
                   "Hi {opp.name.split(' ')[0]}, we noticed your {opp.occasion} is in {opp.days} days. Shall we prepare a gift selection?"
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* KPI Tiles */}
      <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#c9a84c]/10">
        {kpis.map((kpi, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-[0.55rem] font-mono uppercase tracking-widest opacity-40 mb-1">{kpi.label}</span>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-xl font-serif text-[#f2ece0]">{kpi.value}</span>
              <span className="text-[0.55rem] text-green-500 font-mono">{kpi.trend}</span>
            </div>
            {/* Sparkline */}
            <div className="h-6 w-full relative">
               <svg className="absolute inset-0 w-full h-full overflow-visible">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    d={`M 0 15 Q 20 ${5+i*5} 40 ${15-i*5} T 80 ${10+i*3} T 120 15`}
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
               </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
