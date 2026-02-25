"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useInView } from 'framer-motion';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { ArrowRight, ChevronRight, Zap, Search, Users, Eye, Shield, Star, Award, Layers, MousePointer2, Settings, Compass, BookOpen } from 'lucide-react';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
});

const PARCHMENT = '#F5F0E8';
const GOLD = '#C9A84C';
const DARK = '#0D0C0A';

// --- Components ---

const SectionTitle = ({ number, title, subtitle }: { number: string, title: string, subtitle?: string }) => (
  <div className="mb-16">
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="block font-sans text-xs font-medium uppercase tracking-[0.3em] mb-4"
      style={{ color: GOLD }}
    >
      Chapter {number}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="font-serif text-4xl md:text-6xl font-light mb-6"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl text-lg font-light leading-relaxed opacity-70"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ChapterIndicator = ({ currentChapter }: { currentChapter: number }) => (
  <div className="fixed top-1/2 left-10 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8">
    {[1, 2, 3, 4, 5, 6].map((num) => (
      <div key={num} className="flex items-center gap-4 group cursor-pointer">
        <div
          className="h-[1px] bg-black/20 transition-all duration-500 group-hover:w-12"
          style={{ width: currentChapter === num ? '48px' : '12px', backgroundColor: currentChapter === num ? GOLD : 'rgba(0,0,0,0.2)' }}
        />
        <span
          className="font-serif text-xs italic opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ color: currentChapter === num ? GOLD : 'inherit' }}
        >
          0{num}
        </span>
      </div>
    ))}
  </div>
);

// --- Hero Section ---

const Hero = () => {
  const words = "The Architecture of Luxury Clienteling".split(" ");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden bg-[#0D0C0A]">
      {/* 3D-like Particle Background */}
      <div className="absolute inset-0 perspective-1000">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: GOLD,
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              z: Math.random() * 500 - 250,
            }}
            animate={{
              z: [0, 500],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 sticky top-0 h-screen flex flex-col items-center justify-center w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 font-sans text-xs font-medium uppercase tracking-[0.5em]"
          style={{ color: GOLD }}
        >
          Strategy · Architecture
        </motion.div>

        <h1 className="font-serif text-5xl md:text-8xl font-light text-[#F5F0E8] leading-tight max-w-5xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, rotateX: -45, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 text-white">Scroll to Begin</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-12 w-px bg-gradient-to-b from-[#C9A84C] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- Persona Section ---

const Persona = () => {
  const dimensions = [
    { name: "Intent", desc: "Why this purchase exists in their life at this moment. Self-reward, gifting, signaling." },
    { name: "Constraints", desc: "Time sensitivity, discretion requirements, and cultural expectations." },
    { name: "Knowledge State", desc: "From logo-driven beginners to technical experts and archive collectors." },
    { name: "Decision Posture", desc: "Exploring, comparing, validating, or ready to commit to a legacy." },
    { name: "Bandwidth", desc: "Whether they want quick orientation or deep, slow technical immersion." },
    { name: "Sensitivities", desc: "Obsession with provenance, understatement, and the elimination of selling." }
  ];

  return (
    <section className="py-32 px-6 bg-[#F5F0E8] relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          number="01"
          title="The Context Engine"
          subtitle="Luxury operates in specifics. A system that cannot detect the distinction between a liquidity milestone and a generational heirloom is systemically blind."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-24">
          {dimensions.map((dim, i) => (
            <motion.div
              key={dim.name}
              initial={{ opacity: 0, rotateY: 20, y: 30 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden aspect-[4/5] bg-black/5 p-8 flex flex-col justify-end transition-all duration-700 group-hover:bg-black/10">
                <div className="absolute top-8 left-8 text-[10px] uppercase tracking-widest opacity-30">Dimension 0{i+1}</div>
                <h3 className="font-serif text-3xl mb-4 italic leading-none">{dim.name}</h3>
                <div className="h-px w-0 bg-[#C9A84C] group-hover:w-full transition-all duration-700" />
              </div>
              <p className="font-sans text-sm font-light leading-relaxed opacity-60 px-2">{dim.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Branding Section ---

const Branding = () => {
  const [activeSide, setActiveSide] = useState<'left' | 'right' | null>(null);

  const axes = [
    { left: "Speed", right: "Care" },
    { left: "Scale", right: "Intimacy" },
    { left: "Control", right: "Trust" },
    { left: "Accessibility", right: "Rarity" }
  ];

  return (
    <section className="py-32 px-6 bg-[#F5F0E8] border-t border-black/5 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          number="02"
          title="The Internal Spine"
          subtitle="Defaults are moral positions. Opinionated defaults communicate philosophy in the interaction itself."
        />

        <div className="mt-32 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 mb-12 px-4">
            <span className="text-[10px] uppercase tracking-widest opacity-40">Conventional</span>
            <span className="text-center text-[10px] uppercase tracking-widest opacity-40">The Moral Axis</span>
            <span className="text-right text-[10px] uppercase tracking-widest opacity-40">Luxury Identity</span>
          </div>

          <div className="space-y-4">
            {axes.map((axis, i) => (
              <div key={i} className="group relative flex items-center justify-between py-10 px-6 border border-black/5 bg-white/30 backdrop-blur-sm overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-[#C9A84C]/5 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <motion.span
                  animate={{
                    opacity: activeSide === 'right' ? 0.2 : 1,
                    scale: activeSide === 'left' ? 1.05 : 1,
                    x: activeSide === 'left' ? 10 : 0
                  }}
                  className="font-serif text-2xl md:text-4xl cursor-default transition-all duration-500"
                >
                  {axis.left}
                </motion.span>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-[1px] bg-black/10" />
                  <div
                    className="w-2 h-2 rounded-full border border-[#C9A84C] transition-all duration-500"
                    style={{ backgroundColor: activeSide ? GOLD : 'transparent' }}
                  />
                  <div className="w-12 h-[1px] bg-black/10" />
                </div>

                <motion.span
                  animate={{
                    opacity: activeSide === 'left' ? 0.2 : 1,
                    scale: activeSide === 'right' ? 1.05 : 1,
                    x: activeSide === 'right' ? -10 : 0
                  }}
                  onMouseEnter={() => setActiveSide('right')}
                  onMouseLeave={() => setActiveSide(null)}
                  className="font-serif text-2xl md:text-4xl cursor-default transition-all duration-500 text-right"
                >
                  {axis.right}
                </motion.span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Presence Section ---

const Presence = () => {
  const entries = [
    { icon: <Users size={20} />, label: "Private Referral", color: "#C9A84C" },
    { icon: <Search size={20} />, label: "Direct Intent", color: "#0D0C0A" },
    { icon: <Zap size={20} />, label: "AI Concierge", color: "#C9A84C" },
    { icon: <Eye size={20} />, label: "Aesthetic Entry", color: "#0D0C0A" }
  ];

  return (
    <section className="py-32 px-6 bg-[#F5F0E8] overflow-hidden relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          number="03"
          title="Reception as Design"
          subtitle="Search implies problem-solving. Social implies discovery. Referral implies trust transfer. Tone must honor the manner of arrival."
        />

        <div className="relative h-[600px] flex items-center justify-center mt-20">
          {/* Central Hub */}
          <motion.div
            className="relative z-20 w-40 h-40 rounded-full flex flex-col items-center justify-center bg-white shadow-[0_0_100px_rgba(201,168,76,0.15)] border border-[#C9A84C]/20"
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-2 rounded-full border border-black/5 border-dashed animate-spin-slow" />
            <BookOpen size={24} style={{ color: GOLD }} className="mb-2" />
            <span className="font-serif text-sm italic tracking-widest">Unified Soul</span>
          </motion.div>

          {/* Orbiting Entry Points */}
          {entries.map((entry, i) => {
            const angle = (i * 90) * (Math.PI / 180);
            const radius = 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ x: x * 1.5, y: y * 1.5, opacity: 0 }}
                  whileInView={{ x: x, y: y, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: i * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="absolute z-30 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="p-6 rounded-none border border-black/5 bg-white shadow-xl flex flex-col items-center gap-3 w-40"
                  >
                    <div className="p-3 rounded-full bg-black/5 group-hover:bg-[#C9A84C]/10 transition-colors">
                      {entry.icon}
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-center">{entry.label}</span>
                  </motion.div>
                </motion.div>

                {/* Visual Flow Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                  <motion.path
                    d={`M ${500 + x} ${300 + y} L 500 300`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
                    stroke="black"
                    strokeWidth="1"
                    fill="none"
                    className="md:block hidden"
                  />
                </svg>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Insights Section ---

const Insights = () => {
  const layers = [
    { title: "The Living Internet", desc: "Aesthetics evolve online faster than collections do. Tracking perception before it becomes trend.", icon: <Compass /> },
    { title: "The Addressable Market", desc: "The broader cultural context. Luxury adapts deliberately, not reactively.", icon: <Search /> },
    { title: "The Client Base", desc: "Behavioral patterns that reveal structural evolution. Detecting slow movements across generations.", icon: <Users /> }
  ];

  return (
    <section className="py-32 px-6 bg-[#F5F0E8] overflow-hidden relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          number="04"
          title="The Intelligence of Continuity"
          subtitle="Insights is the detection of slow movements. Small shifts in the client's relationship to the category are more meaningful than spikes."
        />

        <div className="relative mt-40 h-[600px] flex flex-col items-center">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ y: 100 * i, opacity: 0, rotateX: -20, scale: 0.9 + i * 0.05 }}
              whileInView={{ y: 40 * i, opacity: 1, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.4, ease: "easeOut" }}
              className="absolute w-full max-w-2xl p-10 border border-black/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl"
              style={{
                zIndex: 10 - i,
                marginTop: `${i * -80}px`
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-serif text-3xl italic">{layer.title}</h3>
                <div style={{ color: GOLD }} className="opacity-50">{layer.icon}</div>
              </div>
              <p className="font-sans text-sm font-light leading-relaxed opacity-60 max-w-md">{layer.desc}</p>
              <div className="mt-8 flex gap-2">
                {[1, 2, 3].map(j => (
                  <div key={j} className="h-1 flex-1 bg-black/5 overflow-hidden">
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ duration: 2, delay: 1 + i * 0.2 + j * 0.1 }}
                      className="h-full bg-[#C9A84C]/30 w-full"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Authority Section ---

const Authority = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0.3, 0.5, 0.7], ["0%", "-15%", "0%"]);
  const xRight = useTransform(scrollYProgress, [0.3, 0.5, 0.7], ["0%", "15%", "0%"]);
  const rotateLeft = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, -5, 0]);
  const rotateRight = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 5, 0]);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#F5F0E8] border-t border-black/5 overflow-hidden relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          number="05"
          title="Proof Before Purchase"
          subtitle="Heritage is marketing. Authority is experience. If a client must leave the ecosystem to validate a purchase, the system is incomplete."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-32 relative">
          <motion.div
            style={{ x: xLeft, rotateY: rotateLeft }}
            className="p-16 border border-black/5 bg-white shadow-2xl z-20"
          >
            <div className="flex items-center gap-4 mb-10">
              <Award size={32} style={{ color: GOLD }} />
              <h3 className="font-serif text-3xl uppercase tracking-widest font-light italic leading-none">The Craft</h3>
            </div>
            <p className="font-sans text-base font-light leading-relaxed opacity-60 mb-12">
              Rational proof. Documentary evidence of origin, precision metrics, and lifetime maintenance projections.
            </p>
            <div className="space-y-6">
              {["Quarry-level traceability", "Atelier-level metrics", "Production timestamps"].map(text => (
                <div key={text} className="flex items-center gap-4 text-xs tracking-widest uppercase font-medium">
                  <div className="w-1 h-1 bg-[#C9A84C]" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ x: xRight, rotateY: rotateRight }}
            className="p-16 border border-black/5 bg-[#0D0C0A] text-[#F5F0E8] shadow-2xl z-10 md:-ml-8 md:mt-16"
          >
            <div className="flex items-center gap-4 mb-10">
              <Star size={32} style={{ color: GOLD }} />
              <h3 className="font-serif text-3xl uppercase tracking-widest font-light italic leading-none">The Art</h3>
            </div>
            <p className="font-sans text-base font-light leading-relaxed opacity-40 mb-12 text-white">
              Emotional proof. Meaning architecture. Narrative framing around legacy, ritual, and cultural gravity.
            </p>
             <div className="space-y-6">
              {["Identity Archetypes", "Ritual Guidance", "Spatial Philosophy"].map(text => (
                <div key={text} className="flex items-center gap-4 text-xs tracking-widest uppercase font-medium">
                  <div className="w-1 h-1 bg-[#C9A84C]" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- UX Section ---

const UX = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const demos = [
    {
      title: "One-Card Verdict",
      desc: "Instant sufficiency. Sufficient detail, sufficient authority, sufficient alignment in a single glance.",
      icon: <Layers size={18} />
    },
    {
      title: "Reveal-on-Intent",
      desc: "Depth is earned. Precision revealed on demand, never dumped. Respecting the client's cognitive bandwidth.",
      icon: <MousePointer2 size={18} />
    },
    {
      title: "Concierge Handoff",
      desc: "A polished interaction, not a handoff. The system remembers, so the human advisor can understand.",
      icon: <Settings size={18} />
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#F5F0E8] border-t border-black/5 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          number="06"
          title="The Emergent Surface"
          subtitle="When all layers act together, the interface becomes a destination. Calm, precise, and inevitable."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-24">
          <div className="lg:col-span-5 space-y-4">
            {demos.map((demo, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveDemo(i)}
                className={`w-full text-left p-8 transition-all duration-500 border ${activeDemo === i ? 'border-[#C9A84C] bg-white shadow-xl' : 'border-black/5 hover:border-black/20'}`}
              >
                <div className="flex items-center gap-4 mb-4" style={{ color: activeDemo === i ? GOLD : 'inherit' }}>
                  <div className={`p-2 rounded-full ${activeDemo === i ? 'bg-[#C9A84C]/10' : 'bg-black/5'}`}>
                    {demo.icon}
                  </div>
                  <h4 className="font-serif text-2xl italic leading-none">{demo.title}</h4>
                </div>
                <AnimatePresence>
                  {activeDemo === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="font-sans text-sm font-light leading-relaxed opacity-60"
                    >
                      {demo.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-7 aspect-square md:aspect-video lg:aspect-auto h-full min-h-[500px] bg-white border border-black/5 flex items-center justify-center relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(${GOLD} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />

            <AnimatePresence mode="wait">
              {activeDemo === 0 && (
                <motion.div
                  key="demo0"
                  initial={{ opacity: 0, y: 50, rotateX: 20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="w-80 p-10 border border-black/10 bg-white shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative z-10"
                >
                  <div className="h-48 bg-[#F5F0E8] mb-8 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-4 border border-black/[0.03] rounded-full"
                    />
                    <Award style={{ color: GOLD, opacity: 0.3 }} size={60} />
                  </div>
                  <div className="space-y-4">
                    <div className="h-5 w-3/4 bg-black/5" />
                    <div className="h-3 w-full bg-black/[0.03]" />
                    <div className="h-3 w-1/2 bg-[#C9A84C]/10" />
                  </div>
                  <div className="mt-10 pt-6 border-t border-black/5 flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest opacity-30">Authenticity Verified</span>
                    <Shield size={16} style={{ color: GOLD }} />
                  </div>
                </motion.div>
              )}
              {activeDemo === 1 && (
                <motion.div
                  key="demo1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, letterSpacing: "0.4em" }}
                    className="px-12 py-4 border border-black/20 font-sans text-[10px] uppercase tracking-[0.3em] cursor-pointer bg-white z-20"
                  >
                    Hover to Peek Depth
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-3 gap-6"
                  >
                    {[1, 2, 3].map(j => (
                      <div key={j} className="w-24 h-24 border border-black/5 bg-[#F5F0E8] flex flex-col items-center justify-center gap-2 shadow-lg">
                        <div className="w-8 h-[1px] bg-[#C9A84C]" />
                        <span className="text-[9px] uppercase tracking-tighter opacity-40 italic">Spec 0{j}</span>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
              {activeDemo === 2 && (
                <motion.div
                  key="demo2"
                  className="relative flex flex-col items-center gap-8 max-w-sm px-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-20 h-20 rounded-full border border-[#C9A84C]/30 flex items-center justify-center bg-white shadow-xl"
                  >
                    <Users size={28} style={{ color: GOLD }} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 bg-[#0D0C0A] text-[#F5F0E8] shadow-2xl relative"
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0D0C0A] rotate-45" />
                    <p className="font-serif text-lg italic leading-relaxed text-center">
                      "Welcome back. I see you're evaluating the Piana collection's heritage. Shall I call our archivist for a private viewing?"
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Component ---

export default function LuxuryClienteling() {
  const [currentChapter, setCurrentChapter] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Chapter tracking logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          current = index;
        }
      });
      setCurrentChapter(current); // Adjust if necessary based on section count
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${cormorant.variable} ${inter.variable} font-sans selection:bg-[#C9A84C] selection:text-white antialiased`}
      style={{ backgroundColor: PARCHMENT, color: DARK }}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-1.5 origin-left"
        style={{ scaleX, backgroundColor: GOLD }}
      />

      <ChapterIndicator currentChapter={currentChapter} />

      <Hero />
      <div id="chapter-1"><Persona /></div>
      <div id="chapter-2"><Branding /></div>
      <div id="chapter-3"><Presence /></div>
      <div id="chapter-4"><Insights /></div>
      <div id="chapter-5"><Authority /></div>
      <div id="chapter-6"><UX /></div>

      {/* Final thought / Footer */}
      <section className="py-64 px-6 bg-[#0D0C0A] text-[#F5F0E8] text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
             initial={{ width: 0 }}
             whileInView={{ width: 100 }}
             className="h-px bg-[#C9A84C] mx-auto mb-16"
          />
          <span className="block font-sans text-xs font-medium uppercase tracking-[0.6em] mb-12" style={{ color: GOLD }}>Epilogue</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light italic leading-tight mb-16">
            "Luxury buyers do not want to be convinced. They want to feel <span style={{ color: GOLD }}>understood</span>."
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <p className="text-sm tracking-[0.4em] uppercase opacity-40">End of Architecture</p>
            <div className="h-32 w-px bg-gradient-to-b from-[#C9A84C] to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
