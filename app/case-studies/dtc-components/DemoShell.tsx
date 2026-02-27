'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoShellProps {
  activePillar: string;
  children: React.ReactNode;
}

export default function DemoShell({ activePillar, children }: DemoShellProps) {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] bg-[#f2ece0] border border-[#b5893a]/10 relative group">
      <AnimatePresence mode="wait">
        <motion.div
          key={activePillar}
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.04, y: -30 }}
          transition={{
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="h-full w-full relative"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#b5893a]/20 rounded-tl-xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#b5893a]/20 rounded-br-xl pointer-events-none" />
    </div>
  );
}
