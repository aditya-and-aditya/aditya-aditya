'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoShellProps {
  activePillar: string;
  children: React.ReactNode;
}

export default function DemoShell({ activePillar, children }: DemoShellProps) {
  return (
    <div className="sticky top-24 h-[calc(100vh-8rem)] w-full overflow-hidden rounded-lg shadow-2xl bg-[#0e0c0a]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activePillar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
