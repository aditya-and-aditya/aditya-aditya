'use client';

import React from 'react';
import { ArrowDown, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const CaseStudyHero = () => {
  // Brand Colors
  const colors = {
    bg: '#092d60',      // Deep Blue
    accent: '#37a8b1',  // Teal
    text: '#ffffff',    // White
    muted: '#9ca3af'    // Gray-400 equivalent
  };

  return (
    <section 
      className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >
      
      {/* Background Ambience - 'Tech Grid' */}
      <div className="absolute inset-0 w-full h-full">
        {/* Grid Pattern */}
        <div 
            className="absolute inset-0 opacity-10" 
            style={{ 
                backgroundImage: `linear-gradient(${colors.accent} 1px, transparent 1px), linear-gradient(to right, ${colors.accent} 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }}
        />
        {/* Radial Vignette to focus attention on center */}
        <div 
            className="absolute inset-0"
            style={{ 
                background: `radial-gradient(circle at center, transparent 0%, ${colors.bg} 80%)` 
            }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Eyebrow Tag */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <span 
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-lg backdrop-blur-md"
                style={{ 
                    backgroundColor: 'rgba(55, 168, 177, 0.1)', 
                    border: `1px solid rgba(55, 168, 177, 0.3)`,
                    color: colors.accent
                }}
            >
                <TrendingUp size={14} />
                Case Study: ROI Prioritization
            </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          "Which Tech Project Will <br className="hidden md:block" />
          <span 
            className="bg-clip-text text-transparent bg-linear-to-r from-white via-[#37a8b1] to-[#37a8b1]"
          >
            Actually Make Us Money?
          </span>"
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
            style={{ color: '#d1d5db' }} // Gray-300
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
          A business with a dozen ideas, a limited budget, and a paralyzing fear of choosing the wrong one. They had the ambition, but they lacked the math to back it up.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
            opacity: { delay: 1, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <span 
            className="text-xs uppercase tracking-widest font-medium"
            style={{ color: colors.accent }}
        >
            The Reality
        </span>
        <ArrowDown className="w-5 h-5" style={{ color: colors.accent }} />
      </motion.div>

    </section>
  );
};

export default CaseStudyHero;