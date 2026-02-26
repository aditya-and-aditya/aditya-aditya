"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const DEEP_BLUE = '#020813'; 
const ACCENT_CYAN = '#37a8b1';

// Optimized Cinematic Fade-in
const FadeInText = ({ children, delay = 0, yOffset = 30 }: { children: React.ReactNode, delay?: number, yOffset?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

// --- HIGH-FIDELITY WIREFRAME COMPONENTS ---

const WireframeCompare = () => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
    className="my-24 grid grid-cols-1 gap-8 lg:grid-cols-2 will-change-transform"
  >
    {/* Traditional UX (Clunky) */}
    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-700/50 bg-slate-800/20 p-8 transition-colors hover:bg-slate-800/40 transform-gpu">
      <div className="mb-4 flex items-center justify-between border-b border-slate-700/50 pb-3">
        <span className="font-mono text-xs uppercase tracking-widest text-slate-500">Legacy Architecture</span>
        <span className="rounded-full bg-slate-700/50 px-3 py-1 text-[10px] text-slate-300">4,312 Results</span>
      </div>
      <div className="flex gap-6 opacity-70 transition-opacity group-hover:opacity-100">
        <div className="flex w-1/3 flex-col gap-5">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-4 w-4 shrink-0 rounded-sm border border-slate-600 bg-slate-700/30" />
              <div className="h-2 w-full rounded bg-slate-700/50" />
            </div>
          ))}
        </div>
        <div className="grid w-2/3 grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-24 rounded border border-slate-600/30 bg-slate-700/30" />
          ))}
        </div>
      </div>
    </div>

    {/* AI Agent UX (Sleek) */}
    <div className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#37a8b1]/30 bg-[#07244d]/40 p-8 shadow-xl transition-all hover:border-[#37a8b1]/60 transform-gpu">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#37a8b1] opacity-10 blur-[50px] will-change-transform pointer-events-none" />
      
      <div className="mb-4 flex items-center justify-between border-b border-[#37a8b1]/20 pb-3 relative z-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#37a8b1]">Conversational AI Agent</span>
        <span className="rounded-full bg-[#37a8b1]/20 px-3 py-1 text-[10px] font-medium text-[#37a8b1]">4 Perfect Matches</span>
      </div>
      
      {/* Animated Typing Search Bar */}
      <div className="relative mb-2 flex h-14 w-full items-center overflow-hidden rounded-xl border border-[#37a8b1]/40 bg-[#020813]/80 px-5 z-10">
        <motion.div 
          initial={{ width: "0%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="overflow-hidden whitespace-nowrap font-mono text-sm text-[#37a8b1]/90"
        >
          "A wedding in Jaipur under ₹4k..."
        </motion.div>
        <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="ml-1 inline-block h-5 w-1.5 bg-[#37a8b1]" />
      </div>

      <div className="mt-2 grid grid-cols-2 gap-5 relative z-10">
        {[1, 2].map(i => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1 + (i * 0.1) }} className="relative flex h-32 items-center justify-center rounded-xl border border-[#37a8b1]/30 bg-linear-to-b from-[#37a8b1]/10 to-transparent">
            <span className="text-2xl text-[#37a8b1] opacity-60">✦</span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const WireframeMultimodal = () => (
  <motion.div 
    initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
    className="flex w-full flex-col items-center justify-center gap-6 relative overflow-hidden rounded-3xl border border-slate-700/50 bg-[#071121]/80 p-10 shadow-2xl transform-gpu will-change-transform"
  >
    <div className="absolute inset-0 bg-linear-to-bl from-[#020813] to-transparent opacity-60 pointer-events-none"></div>
    
    <div className="relative z-10 flex w-full flex-col gap-6 rounded-2xl border border-slate-600/50 bg-[#020813] p-8">
      <div className="flex items-start gap-5">
        {/* Optimized Image Scanner */}
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-500/50 bg-slate-800 transform-gpu">
          <svg className="h-10 w-10 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <motion.div 
            animate={{ y: ["-100%", "200%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 top-0 h-1 bg-[#37a8b1] opacity-80"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center pt-2">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[#37a8b1]">
            <span className="h-2 w-2 rounded-full bg-[#37a8b1] animate-pulse"></span>
            Vision + Text Intent Analyzed
          </div>
          <div className="mb-3 h-2.5 w-full rounded bg-slate-700/50" />
          <div className="h-2.5 w-2/3 rounded bg-slate-700/50" />
        </div>
      </div>
      
      <div className="mt-2 grid grid-cols-3 gap-4 border-t border-slate-700/30 pt-6">
        {[1, 2, 3].map((i) => (
           <div key={i} className="h-20 rounded-xl border border-[#37a8b1]/20 bg-linear-to-b from-[#37a8b1]/10 to-[#020813] transition-colors hover:border-[#37a8b1]/50" />
        ))}
      </div>
    </div>
  </motion.div>
);

// --- MAIN COMPONENT ---

export default function CartThatUnderstoodHer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWarningHovered, setIsWarningHovered] = useState(false);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden selection:bg-[#37a8b1] selection:text-[#020813]"
      style={{ backgroundColor: DEEP_BLUE, color: '#e2e8f0', fontFamily: "'DM Sans', sans-serif" }}
    >
      <motion.div className="fixed left-0 right-0 top-0 z-50 h-1 origin-left shadow-sm" style={{ scaleX, backgroundColor: ACCENT_CYAN }} />

      {/* --- OPTIMIZED STATIC BACKGROUND --- */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
      <div className="fixed inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #37a8b1 1px, transparent 1px), linear-gradient(to bottom, #37a8b1 1px, transparent 1px)`, backgroundSize: '100px 100px', maskImage: 'radial-gradient(circle at top left, black 20%, transparent 80%)' }} />
      <div className="absolute right-0 top-0 z-0 h-[80vh] w-[50vw] rounded-full bg-[#37a8b1] opacity-[0.02] blur-[120px] pointer-events-none" />

      {/* --- ASYMMETRICAL HERO SECTION --- */}
      {/* Max width expanded, content anchored left */}
      <motion.header style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 mx-auto max-w-6xl px-6 pb-32 pt-40 md:pt-56 transform-gpu will-change-transform">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mb-10 inline-flex items-center gap-3 rounded-full border border-[#37a8b1]/30 bg-[#37a8b1]/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#37a8b1]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#37a8b1] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#37a8b1]"></span>
            </span>
            Next-Gen Retail CX
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8 font-serif text-6xl font-bold leading-tight tracking-tight text-white md:text-8xl lg:text-[7rem]">
            The Cart That <br/><em className="font-light italic text-[#37a8b1]">Understood</em> Her
          </motion.h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-2xl text-2xl font-light leading-relaxed text-slate-300 border-l-2 border-[#37a8b1]/30 pl-6">
            The quiet revolution happening at the intersection of AI agents, intelligent design, and the future of e-commerce.
          </motion.p>
        </div>
      </motion.header>

      {/* --- ARTICLE BODY --- */}
      <article className="relative z-10 mx-auto max-w-6xl px-6 pb-40 text-lg font-light leading-loose text-slate-300">
        
        {/* PART ONE: Standard Left Aligned Text */}
        <div className="max-w-3xl">
          <FadeInText>
            <div className="mb-6 mt-16 flex items-center gap-4 opacity-80">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#37a8b1]">Part One</span>
              <div className="h-px w-24 bg-linear-to-r from-[#37a8b1]/50 to-transparent"></div>
            </div>
            <h2 className="mb-8 font-serif text-4xl font-bold text-white md:text-5xl">The Illusion of Choice</h2>
            <p className="mb-8 text-xl">It's 11:47 PM. Priya needs an outfit for an outdoor wedding. She filters by size, color, and a ₹4,000 budget. <em className="text-white/80">2,100 results.</em> She scrolls, gets overwhelmed, and abandons her cart. Online retail has an abundance problem masquerading as a discovery problem.</p>
          </FadeInText>
        </div>

        {/* WIDE BREAKOUT: This intentionally spans the full max-w-6xl */}
        <WireframeCompare />

        <div className="max-w-3xl">
          <FadeInText>
            <p className="mb-8 text-xl leading-relaxed text-slate-200">Instead of wrestling with static database filters, imagine a simple, natural prompt. The system doesn't just sort; it acts as an intelligent agent that translates human intent. 2,000 generic results instantly collapse into 4 curated, highly relevant options.</p>
          </FadeInText>
        </div>

        {/* PART TWO: Asymmetrical Grid Split */}
        <div className="mt-40 mb-12 flex items-center gap-4 opacity-80 max-w-3xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#37a8b1]">Part Two</span>
          <div className="h-px w-24 bg-linear-to-r from-[#37a8b1]/50 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Text */}
          <div className="lg:col-span-5">
            <FadeInText>
              <h2 className="mb-8 font-serif text-4xl font-bold text-white md:text-5xl">The Interface That Listens</h2>
              <p className="mb-12 text-xl">When users stop querying a database and start having a conversation, the foundational rules of UX change. The next leap isn't just text—it's multimodal.</p>
              
              <div className="flex flex-col gap-10">
                <div className="border-l border-slate-700 pl-6">
                  <div className="mb-2 font-mono text-sm text-[#37a8b1]">01</div>
                  <strong className="mb-2 block text-xl font-medium text-white">Contextual Adaptation</strong>
                  <p className="text-base leading-relaxed text-slate-400">AI agents adapt the entire interface based on time, budget, and occasion signals, upgrading basic carousels into dynamic storefronts.</p>
                </div>
                <div className="border-l border-slate-700 pl-6">
                  <div className="mb-2 font-mono text-sm text-[#37a8b1]">02</div>
                  <strong className="mb-2 block text-xl font-medium text-white">Multimodal Reality</strong>
                  <p className="text-base leading-relaxed text-slate-400">Uploading a photo combined with text parameters bridges the ultimate gap between imagination and actual inventory.</p>
                </div>
              </div>
            </FadeInText>
          </div>
          
          {/* Right Side: Graphic */}
          <div className="lg:col-span-7">
             <WireframeMultimodal />
          </div>
        </div>

        {/* THE COST OF GETTING IT WRONG: Offset to the right */}
        <FadeInText delay={0.1}>
          <div 
            onMouseEnter={() => setIsWarningHovered(true)}
            onMouseLeave={() => setIsWarningHovered(false)}
            className={`relative mt-40 ml-auto w-full lg:w-4/5 overflow-hidden rounded-3xl border bg-[#0a0406] p-10 transition-colors duration-300 ${isWarningHovered ? 'border-[#e11d48]/60' : 'border-[#e11d48]/20'}`}
          >
            <div className={`absolute left-0 top-0 h-full bg-[#e11d48] transition-all duration-300 ${isWarningHovered ? 'w-2 opacity-100' : 'w-1 opacity-70'}`} />
            
            <div className="mb-6 flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#e11d48]/10 transition-transform duration-300 ${isWarningHovered ? 'scale-110' : ''}`}>
                <svg className="h-6 w-6 text-[#e11d48]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">The Cost of Getting It Wrong</h3>
            </div>
            
            <p className="text-lg leading-relaxed text-slate-300">
              There is a thin line between an experience that feels tailored and one that feels intrusive. When AI is weaponized to mask aggressive upselling, or prioritizes short-term conversion metrics over actual user experience, the magic instantly fades. 
              <br/><br/>
              Personalization without transparency is surveillance. If a system "understands" the user but uses that data to manipulate rather than advocate, it irrevocably destroys the most fragile currency in commerce: <strong className="text-white">Customer Trust</strong>.
            </p>
          </div>
        </FadeInText>

        {/* EPILOGUE: Right-Aligned Conclusion */}
        <FadeInText delay={0.1}>
          <div className="mt-32 ml-auto max-w-2xl border-r-4 border-[#37a8b1] bg-linear-to-l from-[#37a8b1]/10 to-transparent py-8 pr-10 text-right">
            <h2 className="mb-6 font-serif text-4xl font-bold text-white">What We're Really Building</h2>
            <p className="mb-6 text-xl text-slate-300">The confluence is most powerful when AI handles complex data models invisibly, providing genuine utility rather than an illusion of choice. The cart that understood her isn't just a search engine—it is a digital advocate.</p>
            <p className="font-serif text-2xl italic text-white">Everything else is just engineering.</p>
          </div>
        </FadeInText>

      </article>

      {/* --- FOOTER METADATA --- */}
      <footer className="relative z-10 mx-auto mt-16 max-w-6xl border-t border-slate-800/80 px-6 py-20">
        <FadeInText>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="font-mono text-xs tracking-[0.2em] text-slate-500">SYSTEM ARCHITECTURE & UX STRATEGY</p>
            <div className="flex flex-wrap gap-4">
              {['Retail AI Agents', 'UX/CX Principles', 'Full-Stack Integration', 'Data Ethics'].map((tag) => (
                <span key={tag} className="cursor-default rounded-full border border-slate-700 bg-slate-800/20 px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-slate-400 transition-colors hover:border-[#37a8b1]/50 hover:text-[#37a8b1]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeInText>
      </footer>
    </div>
  );
}