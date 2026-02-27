'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, ChevronRight } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#092d60]">
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#37a8b1]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#061e42]/80 rounded-full blur-[120px] pointer-events-none" />
      
      {/* --- Subtle Grid Pattern --- */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ 
          backgroundImage: 'linear-gradient(#37a8b1 1px, transparent 1px), linear-gradient(90deg, #37a8b1 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#37a8b1]/30 bg-[#37a8b1]/10 backdrop-blur-sm">
              <Sparkles size={16} className="text-[#37a8b1] animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-[#37a8b1] uppercase">
                Tech Confluenced with Business
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              Architecting Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#37a8b1] to-white">
                Digital Infrastructure
              </span>
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#9ca3af] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            From intelligent AI agents to scalable Tech Solutions, we build high-performance technologies that drive measurable growth for your enterprise.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Button */}
            <Link href="#services" className="w-full sm:w-auto">
              <div className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 w-full rounded-full font-semibold text-white bg-[#37a8b1] overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(55,168,177,0.4)]">
                <div className="absolute inset-0 bg-linear-to-r from-[#37a8b1] to-[#248188] transition-transform duration-300 group-hover:scale-105" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Services
                  <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
                </span>
              </div>
            </Link>

            {/* Secondary Button */}
            <Link href="/#contact" className="w-full sm:w-auto">
              <div className="group inline-flex items-center justify-center gap-2 px-8 py-4 w-full rounded-full font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40">
                Book a Consultation
                <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 text-[#37a8b1]" />
              </div>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* --- Bottom Fade into White Section --- */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent" />
    </section>
  );
}