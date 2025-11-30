'use client';

import React from 'react';
import { AlertCircle, Ban, HelpCircle, FileQuestion } from 'lucide-react';
import { motion } from 'framer-motion';

const TheProblem = () => {
  // Brand Palette
  const colors = {
    primary: '#092d60',
    accent: '#37a8b1',
    text: '#4b5563', // Gray-600
    bg: '#ffffff',
    cardBg: '#f8fafc', // Slate-50
  };

  return (
    <section className="w-full py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Col: The Narrative */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <span 
              className="font-bold uppercase tracking-widest text-xs flex items-center gap-2"
              style={{ color: colors.accent }}
            >
              <AlertCircle size={14} />
              The Client's Reality
            </span>
            <h3 
              className="text-3xl md:text-5xl font-bold leading-tight"
              style={{ color: colors.primary }}
            >
              Paralyzed by choice. <br />
              Afraid of the cost.
            </h3>
          </div>

          <p className="text-lg leading-relaxed" style={{ color: colors.text }}>
            The client wasn’t short on ideas—they had too many. They had a dozen potential tech improvements on the table, from AI integration to CRM overhauls, but no way to measure their impact.
          </p>

          <div className="space-y-4">
            {/* Pain Point 1 */}
            <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-slate-50 transition-colors hover:border-[#37a8b1]/30">
              <div className="p-2 bg-white rounded-lg shadow-sm shrink-0">
                <HelpCircle className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg" style={{ color: colors.primary }}>No Clear Winner</h4>
                <p className="text-sm mt-1" style={{ color: colors.text }}>
                  Without a framework to measure value, every idea looked equally "important," making prioritization impossible.
                </p>
              </div>
            </div>

            {/* Pain Point 2 */}
            <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-slate-50 transition-colors hover:border-[#37a8b1]/30">
              <div className="p-2 bg-white rounded-lg shadow-sm shrink-0">
                <Ban className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg" style={{ color: colors.primary }}>The Fear of Waste</h4>
                <p className="text-sm mt-1" style={{ color: colors.text }}>
                  They knew one wrong move could burn their quarterly budget with zero return to show for it.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Col: The "Chaotic Board" Visual */}
        <motion.div 
          className="relative h-[500px] w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center shadow-inner"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Background Grid (Blueprint Style) */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
                backgroundImage: `linear-gradient(${colors.primary} 1px, transparent 1px), linear-gradient(to right, ${colors.primary} 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
            }}
          ></div>
          
          {/* Floating "Ideas" representing the mess */}
          <div className="relative w-full h-full p-8 perspective-1000">
            <IdeaCard text="New CRM Integration?" top="15%" left="10%" rotate="-6deg" delay={0.1} />
            <IdeaCard text="AI Chatbot?" top="25%" right="10%" rotate="12deg" accent delay={0.2} />
            <IdeaCard text="Cloud Migration" top="50%" left="15%" rotate="-3deg" delay={0.3} />
            <IdeaCard text="App Refactor" top="60%" right="15%" rotate="6deg" accent delay={0.4} />
            <IdeaCard text="Automate Billing?" top="80%" left="35%" rotate="-2deg" delay={0.5} />
            
            {/* The Center "Confusion" Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 transition={{ type: "spring", bounce: 0.5, delay: 0.6 }}
                 className="relative"
               >
                 <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
                 <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-red-50">
                    <FileQuestion className="w-8 h-8 text-red-500" />
                 </div>
               </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// Helper component for the scattered cards
const IdeaCard = ({ text, top, left, right, rotate, accent, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20, rotate: 0 }}
    whileInView={{ opacity: 1, y: 0, rotate: rotate }}
    transition={{ delay, type: "spring", stiffness: 100 }}
    viewport={{ once: true }}
    className={`absolute px-5 py-3 rounded-lg shadow-md border text-sm font-semibold whitespace-nowrap backdrop-blur-sm
      ${accent 
        ? 'bg-[#092d60] text-white border-[#092d60]' 
        : 'bg-white text-gray-600 border-gray-200'
      }`}
    style={{ top, left, right }}
  >
    {text}
  </motion.div>
);

export default TheProblem;