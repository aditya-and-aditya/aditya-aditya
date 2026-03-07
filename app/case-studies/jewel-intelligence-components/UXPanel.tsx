'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function UXPanel() {
  const [isPrepared, setIsPrepared] = useState(false);

  const trayItems = [
    { id: 1, name: 'Minimal Chain', size: '16 inch', note: 'Matches preference', price: '$2,400' },
    { id: 2, name: 'Diamond Studs', size: '0.5ct', note: 'She prefers minimal', price: '$1,850' },
    { id: 3, name: 'Platinum Ring', size: 'Size 12', note: 'Family legacy piece', price: '$5,200' },
  ];

  return (
    <div className="p-10 h-full flex flex-col bg-[#0e0c13] text-[#f2ece0] overflow-y-auto no-scrollbar">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h4 className="text-2xl font-serif italic mb-1">Riya Malhotra</h4>
          <p className="text-[0.65rem] font-mono uppercase tracking-[0.3em] opacity-40">4:00 PM Appointment — Tray 03</p>
        </div>
        <div className="text-right">
           <p className="text-[0.55rem] font-mono uppercase tracking-widest opacity-30 mb-1">Stylist</p>
           <p className="text-[0.7rem] font-medium uppercase tracking-wider">Aditya M.</p>
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-center px-1">
          <h5 className="text-[0.6rem] uppercase tracking-[0.4em] text-[#c9a84c]/60 font-mono">Tray Configuration</h5>
          <span className="text-[0.55rem] font-mono opacity-40 uppercase tracking-widest">3 items reserved</span>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {trayItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="group bg-[#16141a] border border-[#c9a84c]/10 rounded-xl p-5 flex items-center gap-6 hover:border-[#c9a84c]/30 transition-all duration-500 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#0e0c13] rounded-lg border border-[#c9a84c]/10 flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                 <div className="w-8 h-8 border border-[#c9a84c]/20 rounded-full opacity-20" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/5 to-transparent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[0.85rem] font-medium truncate text-[#f2ece0]/90">{item.name}</p>
                  <span className="text-[0.7rem] font-serif italic text-[#c9a84c] ml-4">{item.price}</span>
                </div>
                <div className="flex gap-4 text-[0.6rem] font-mono opacity-40 uppercase tracking-tighter mb-3">
                  <span>{item.size}</span>
                  <span className="text-[#c9a84c]/70 px-2 py-0.5 border border-[#c9a84c]/20 rounded-sm">Reserved</span>
                </div>
                {item.note && (
                   <p className="text-[0.65rem] italic opacity-50 font-serif leading-tight">
                     "{item.note}"
                   </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsPrepared(true)}
          className={`w-full py-5 rounded-xl font-mono text-[0.75rem] uppercase tracking-[0.4em] transition-all duration-700 border ${isPrepared ? 'bg-[#c9a84c] text-[#0e0c13] border-transparent shadow-[0_0_30px_rgba(201,168,76,0.3)]' : 'bg-transparent text-[#c9a84c]/80 border-[#c9a84c]/30 hover:bg-[#c9a84c]/5'}`}
        >
          {isPrepared ? 'Marked Prepared ✓' : 'Mark Prepared'}
        </motion.button>
        {isPrepared && (
           <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="text-center mt-4 text-[0.5rem] font-mono uppercase tracking-[0.2em]"
           >
             System sync complete · {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
           </motion.p>
        )}
      </div>
    </div>
  );
}
