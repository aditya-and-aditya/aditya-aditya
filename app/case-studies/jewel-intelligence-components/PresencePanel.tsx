'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PresencePanel() {
  const [hovered, setHovered] = useState<number | null>(null);

  const timelineEntries = [
    { type: 'Store Visit', icon: '📍', time: 'Today', detail: 'Active Now', status: 'active' },
    { type: 'WhatsApp', icon: '💬', time: 'Today, 10:42 AM', detail: 'Confirmed appointment', preview: 'Can we also see the studs?' },
    { type: 'Website', icon: '🌐', time: 'Yesterday', detail: 'Viewed Eternal Solitaire (3x)', skus: [1, 2] },
    { type: 'WhatsApp', icon: '💬', time: '2 days ago', detail: 'Inquiry: Custom engraving', preview: 'Hi, I was wondering if we can add a date?' },
    { type: 'Instagram', icon: '📸', time: '3 days ago', detail: 'Lead: Royal Collection' },
  ];

  return (
    <div className="p-8 h-full flex flex-col bg-[#0e0c13] text-[#f2ece0] overflow-y-auto no-scrollbar">
      <div className="flex justify-between items-center mb-12">
        <h4 className="text-[0.65rem] uppercase tracking-[0.4em] text-[#c9a84c]/60 font-mono">Omnichannel Timeline</h4>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[0.55rem] uppercase tracking-widest text-green-500 font-mono">Live Session</span>
        </div>
      </div>

      <div className="relative ml-3 border-l border-[#c9a84c]/10 pl-10 space-y-8">
        {timelineEntries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="relative group"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Dot */}
            <div className={`absolute -left-[45px] top-2 w-3 h-3 rounded-full border-2 border-[#0e0c13] z-10 transition-colors duration-500 ${entry.status === 'active' ? 'bg-[#c9a84c] shadow-[0_0_10px_rgba(201,168,76,0.8)]' : 'bg-[#c9a84c]/30 group-hover:bg-[#c9a84c]'}`} />

            <div className={`p-5 rounded-xl border transition-all duration-500 cursor-default ${entry.status === 'active' ? 'bg-[#c9a84c]/10 border-[#c9a84c]/40 shadow-2xl' : 'bg-[#16141a] border-[#c9a84c]/5 group-hover:border-[#c9a84c]/20 shadow-lg'}`}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs opacity-50">{entry.icon}</span>
                  <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] opacity-40">{entry.type}</span>
                </div>
                <span className="text-[0.55rem] font-mono opacity-25">{entry.time}</span>
              </div>

              <p className="text-[0.75rem] font-medium tracking-wide text-[#f2ece0]/90">{entry.detail}</p>

              {entry.skus && (
                <div className="flex gap-2 mt-4">
                  {[1, 2].map(t => (
                    <div key={t} className="w-12 h-12 bg-[#0e0c13] border border-[#c9a84c]/10 rounded-lg overflow-hidden flex items-center justify-center">
                       <div className="w-6 h-6 border border-[#c9a84c]/20 rounded-full opacity-30" />
                    </div>
                  ))}
                </div>
              )}

              <AnimatePresence>
                {hovered === i && entry.preview && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-4 pt-4 border-t border-[#c9a84c]/10"
                  >
                    <p className="text-[0.7rem] italic opacity-60 leading-relaxed font-serif text-[#c9a84c]">
                      "{entry.preview}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pulsing indicator for active */}
            {entry.status === 'active' && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-[#c9a84c]/5 pointer-events-none"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
