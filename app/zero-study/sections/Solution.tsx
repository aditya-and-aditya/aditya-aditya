'use client';

import React, { useRef, useState, useEffect } from 'react';
import { CheckCircle2, Search, BarChart3, Users, Settings, Wrench, FileSpreadsheet, Map, Code2, LineChart, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';

const steps = [
  { id: 1, icon: Search, title: "Intake", fullTitle: "Idea Overload Intake", desc: "Collected all proposed projects and clarified core business outcomes the client wanted." },
  { id: 2, icon: BarChart3, title: "Metrics", fullTitle: "ROI Metrics Setup", desc: "Defined how we will measure wins—revenue, cost savings, efficiency, error reduction." },
  { id: 3, icon: Settings, title: "Scan", fullTitle: "System Deep Scan", desc: "Mapped backend systems, integrations, data flows, and identified failure points." },
  { id: 4, icon: Users, title: "Interviews", fullTitle: "Team Interviews", desc: "Understood operational issues, recurring technical blockers, and process inefficiencies." },
  { id: 5, icon: Wrench, title: "Audit", fullTitle: "Technical Audit", desc: "Analyzed logs, data throughput, API performance, workflow timing, and failure rates." },
  { id: 6, icon: FileSpreadsheet, title: "Feasibility", fullTitle: "Feasibility Eval", desc: "Estimated engineering effort, dependencies, infra needs, scalability, and risks per idea." },
  { id: 7, icon: LineChart, title: "Modeling", fullTitle: "ROI Modeling", desc: "Balanced potential business impact against engineering cost, time, and maintenance load." },
  { id: 8, icon: Map, title: "Priority", fullTitle: "Priority Matrix", desc: "Finalized top 3 high-value projects with a step-by-step build plan and ROI timeline." },
  { id: 9, icon: Code2, title: "Build", fullTitle: "Engineering Build", desc: "Designed, coded, tested, and shipped the automation workflow with real-time monitoring." },
  { id: 10, icon: CheckCircle2, title: "Validation", fullTitle: "ROI Validation", desc: "Measured efficiency gains, cost reductions, and confirmed actual ROI matched projections." },
];

const colors = {
  bg: '#051937',      // Very Dark Blue
  card: '#092d60',    // Brand Blue
  accent: '#37a8b1',  // Teal
  text: '#9ca3af',    // Gray
  white: '#ffffff'
};

const SolutionScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  // We make the section tall (1000vh) so scrolling feels deliberate and not too fast
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Listener: Update the active step based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll (0 to 1) to step index (0 to 9)
    const stepIndex = Math.floor(latest * steps.length);
    // Clamp value to ensure it never exceeds bounds
    const cleanIndex = Math.min(stepIndex, steps.length - 1);
    
    if (cleanIndex !== activeStep) {
      setActiveStep(cleanIndex);
    }
  });

  // Dynamic Background Gradient based on step (shifts slightly)
  const bgGradient = `radial-gradient(circle at ${50 + (activeStep * 5)}% 50%, #092d60 0%, #051937 70%)`;

  return (
    <section ref={targetRef} className="relative h-[1000vh]">
      
      {/* The Sticky Container - Stays Fixed while you scroll the 1000vh height */}
      <div 
        className="sticky top-0 h-screen overflow-hidden flex"
        style={{ background: bgGradient, transition: 'background 1s ease' }}
      >
        
        {/* --- LEFT SIDE: Ambient Background Text --- */}
        <div className="w-1/2 h-full relative hidden md:flex items-center justify-center overflow-hidden">
             {/* Giant Faint Number */}
             <div className="absolute left-10 top-1/2 -translate-y-1/2 font-black text-[400px] leading-none opacity-5 text-white select-none">
                {steps[activeStep].id}
             </div>

             {/* Animated Big Text Background */}
             <div className="relative z-10 px-12">
                <AnimatePresence mode='wait'>
                    <motion.h2
                        key={activeStep}
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-6xl lg:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-white/20 to-white/0"
                    >
                        {steps[activeStep].title}
                    </motion.h2>
                </AnimatePresence>
             </div>
        </div>

        {/* --- RIGHT SIDE: The Content Card --- */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8 relative z-20">
            
            {/* The Glass Panel */}
            <div 
                className="w-full max-w-lg min-h-[500px] rounded-3xl p-10 flex flex-col justify-center shadow-2xl backdrop-blur-xl border border-white/10"
                style={{ 
                    backgroundColor: 'rgba(5, 25, 55, 0.6)', // Semi-transparent dark blue
                }}
            >
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex flex-col h-full"
                    >
                        {/* Header: Icon + Step Counter */}
                        <div className="flex items-center justify-between mb-10">
                            <div 
                                className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 bg-white/5"
                                style={{ color: colors.accent }}
                            >
                                {React.createElement(steps[activeStep].icon, { size: 24 })}
                            </div>
                            <span className="font-mono text-sm tracking-widest text-white/30">
                                0{steps[activeStep].id} / 10
                            </span>
                        </div>

                        {/* Text Content */}
                        <div className="mb-auto">
                            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                                {steps[activeStep].fullTitle}
                            </h3>
                            <p className="text-lg leading-relaxed" style={{ color: colors.text }}>
                                {steps[activeStep].desc}
                            </p>
                        </div>

                        {/* Footer / CTA Visual */}
                        <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-4 group cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                                <ArrowRight size={18} style={{ color: colors.accent }} />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-white/50 group-hover:text-white transition-colors">
                                Learn more about this phase
                            </span>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress Indicator on the far right edge */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                {steps.map((_, i) => (
                    <motion.div 
                        key={i}
                        className="w-1.5 rounded-full bg-white/20 transition-all duration-300"
                        animate={{ 
                            height: i === activeStep ? 32 : 6,
                            backgroundColor: i === activeStep ? colors.accent : 'rgba(255,255,255,0.2)' 
                        }}
                    />
                ))}
            </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionScroll;