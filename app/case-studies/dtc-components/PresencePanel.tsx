'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Source = 'Instagram' | 'Google' | 'Email' | 'Direct' | 'Word of Mouth';

const sourceData: Record<Source, any> = {
  'Instagram': {
    hero: {
      visual: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
      headline: "Some things you feel before you understand them.",
      subhead: "",
      cta: "Discover Sillage",
      layout: "atmospheric"
    },
    products: "hidden"
  },
  'Google': {
    hero: {
      visual: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1000",
      headline: "Built to last 12 hours on skin. Here's why.",
      subhead: "Cold-pressed extraction. 23% concentration. No compromise.",
      cta: "See the Formulas",
      layout: "data-forward"
    },
    products: "visible"
  },
  'Email': {
    hero: {
      visual: "none",
      headline: "The one we've been holding back.",
      subhead: "New arrival. 48 hours before anyone else.",
      cta: "Your Early Access",
      layout: "minimal"
    },
    products: "single"
  },
  'Direct': {
    hero: {
      visual: "none",
      headline: "Welcome back.",
      subhead: "Three new arrivals since your last visit.",
      cta: "See What's New",
      layout: "brand-mark"
    },
    products: "new-arrivals"
  },
  'Word of Mouth': {
    hero: {
      visual: "split",
      headline: "You heard about us. Here's everything.",
      subhead: "Start anywhere. We'll find your frequency.",
      cta: "Take the Scent Quiz",
      layout: "split"
    },
    products: "bestsellers"
  }
};

export default function PresencePanel() {
  const [activeSource, setActiveSource] = useState<Source>('Instagram');

  const content = sourceData[activeSource];

  return (
    <div className="h-full w-full bg-[#faf8f4] text-[#1a1410] flex flex-col overflow-hidden">
      <div className="bg-[#1a1410] p-4 flex flex-col gap-2">
        <span className="font-mono text-[0.5rem] uppercase tracking-widest text-[#faf8f4]/40">Simulate Arrival From:</span>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(sourceData) as Source[]).map((source) => (
            <button
              key={source}
              onClick={() => setActiveSource(source)}
              className={`px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider transition-all duration-300 ${
                activeSource === source
                  ? 'bg-[#c8832a] text-[#faf8f4]'
                  : 'bg-[#faf8f4]/10 text-[#faf8f4]/60 hover:bg-[#faf8f4]/20'
              }`}
            >
              {source}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSource}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="min-h-full flex flex-col"
          >
            <section className={`relative min-h-[400px] flex items-center justify-center p-8 overflow-hidden ${
              content.hero.layout === 'brand-mark' ? 'bg-[#faf8f4]' : ''
            }`}>
              {content.hero.visual !== 'none' && content.hero.visual !== 'split' && (
                <div className="absolute inset-0 z-0">
                  <img src={content.hero.visual} alt="" className="w-full h-full object-cover opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f4]/80 to-[#faf8f4]"></div>
                </div>
              )}

              {content.hero.layout === 'split' && (
                <div className="absolute inset-0 flex z-0">
                  <div className="w-1/2 h-full bg-[#e8e2d8]"></div>
                  <div className="w-1/2 h-full bg-[#faf8f4]"></div>
                </div>
              )}

              <div className={`relative z-10 max-w-lg text-center ${
                content.hero.layout === 'data-forward' ? 'text-left max-w-xl' : ''
              }`}>
                {content.hero.layout === 'brand-mark' && (
                  <div className="mb-12 font-serif text-4xl italic tracking-[0.2em] opacity-20">SILLAGE</div>
                )}

                <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 leading-tight">
                  {content.hero.headline}
                </h2>

                {content.hero.subhead && (
                  <p className="font-serif italic text-lg opacity-60 mb-8">
                    {content.hero.subhead}
                  </p>
                )}

                <button className={`px-8 py-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-500 ${
                  content.hero.layout === 'atmospheric'
                    ? 'border border-[#1a1410]/20 hover:border-[#1a1410]'
                    : 'bg-[#c8832a] text-[#faf8f4] hover:bg-[#1a1410]'
                }`}>
                  {content.hero.cta}
                </button>
              </div>
            </section>

            <section className="p-8 border-t border-[#1a1410]/5">
              <div className="flex justify-between items-end mb-8">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#1a1410]/40">
                  {content.products === 'hidden' ? 'Scroll to reveal products' : 'Featured Collection'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={content.products === 'hidden' ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <div className="aspect-[3/4] bg-[#e8e2d8] flex items-center justify-center">
                       <span className="font-serif italic text-4xl opacity-10">S_{i}</span>
                    </div>
                    <div className="h-4 w-2/3 bg-[#1a1410]/5"></div>
                    <div className="h-3 w-1/3 bg-[#1a1410]/5"></div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
