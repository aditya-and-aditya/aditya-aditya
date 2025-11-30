'use client';

import React from 'react';
import { Check, TrendingUp, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const OutcomeSection = () => {
  // Brand Palette
  const colors = {
    primary: '#092d60', // Deep Blue
    accent: '#37a8b1',  // Teal
    text: '#4b5563',    // Slate-600
    bg: '#ffffff',      // White
  };

  return (
    <section className="w-full py-32 bg-white border-b border-gray-100 relative overflow-hidden">
      
      {/* Background Ambience - Teal Glow for 'Success' */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-5"
        style={{ backgroundColor: colors.accent }}
      ></div>

      <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: The Narrative */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span 
              className="font-mono text-sm tracking-wider uppercase mb-2 block font-bold"
              style={{ color: colors.accent }}
            >
              // Mission Accomplished
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: colors.primary }}>
              Absolute Clarity. <br />
              <span className="text-gray-400">Measurable Returns.</span>
            </h2>
          </div>

          <p className="text-lg leading-relaxed" style={{ color: colors.text }}>
            The paralysis vanished. Armed with our roadmap, the client confidently invested in the <strong style={{ color: colors.primary }}>#1 ranked project</strong> on the list—an intelligent automation workflow.
          </p>

          <p className="text-lg leading-relaxed" style={{ color: colors.text }}>
            They didn't just "hope" it would work. They knew the math. The system was deployed, and exactly as projected, they hit their ROI targets in record time.
          </p>

          {/* Services Tags */}
          <div className="pt-8">
            <p className="text-xs uppercase tracking-widest mb-4 font-bold text-gray-400">Services Deployed</p>
            <div className="flex flex-wrap gap-3">
              <ServiceBadge text="Strategic Tech Consultancy" colors={colors} />
              <ServiceBadge text="ROI Prioritization" colors={colors} />
              <ServiceBadge text="Workflow Automation" colors={colors} />
            </div>
          </div>
        </motion.div>

        {/* Right Column: The "Winning Project" Card */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white border border-gray-100 rounded-3xl p-8 relative shadow-2xl">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-6">
              <div>
                <p className="text-xs uppercase tracking-wider mb-1 font-bold text-gray-400">Selected Initiative</p>
                <h3 className="text-2xl font-bold" style={{ color: colors.primary }}>Automation Workflow</h3>
              </div>
              <div 
                className="px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2"
                style={{ 
                  backgroundColor: 'rgba(55, 168, 177, 0.1)',
                  color: colors.accent,
                  border: `1px solid rgba(55, 168, 177, 0.2)`
                }}
              >
                <Check size={14} />
                Implemented
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-6">
              <MetricBox 
                icon={Clock} 
                label="Time to ROI" 
                value="3 Months" 
                sub="Ahead of schedule" 
                colors={colors}
              />
              <MetricBox 
                icon={Target} 
                label="Accuracy" 
                value="100%" 
                sub="Matches Projection" 
                colors={colors}
              />
            </div>

            {/* The "Graph" Visual */}
            <div className="mt-8 p-6 rounded-2xl border border-gray-100 bg-slate-50">
              <div className="flex justify-between items-end h-32 gap-3">
                <Bar height="30%" delay={0.1} />
                <Bar height="45%" delay={0.2} />
                <Bar height="40%" delay={0.3} />
                <Bar height="60%" delay={0.4} />
                <Bar height="55%" delay={0.5} />
                <Bar height="85%" color={colors.accent} delay={0.6} active />
                <Bar height="100%" color={colors.accent} delay={0.7} active />
              </div>
              <div className="flex justify-between mt-3 text-xs font-mono font-medium text-gray-400">
                <span>Month 1</span>
                <span style={{ color: colors.accent }}>Month 3 (ROI Hit)</span>
              </div>
            </div>

          </div>

          {/* Decorative Elements behind card */}
          <div 
            className="absolute -z-10 -top-6 -right-6 w-full h-full rounded-3xl opacity-50"
            style={{ backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0' }}
          ></div>
        </motion.div>

      </div>
    </section>
  );
};

// Helper Components
const ServiceBadge = ({ text, colors }: { text: string, colors: any }) => (
  <span 
    className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-default border"
    style={{ 
      backgroundColor: '#f8fafc',
      borderColor: '#e2e8f0',
      color: colors.primary
    }}
  >
    {text}
  </span>
);

const MetricBox = ({ icon: Icon, label, value, sub, colors }: any) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2 mb-2 text-gray-400">
      <Icon size={16} />
      <span className="text-xs uppercase tracking-wide font-bold">{label}</span>
    </div>
    <div className="text-3xl font-bold" style={{ color: colors.primary }}>{value}</div>
    <div className="text-xs font-semibold" style={{ color: colors.accent }}>{sub}</div>
  </div>
);

const Bar = ({ height, color = "#cbd5e1", delay = 0, active = false }: { height: string, color?: string, delay?: number, active?: boolean }) => (
  <motion.div 
    initial={{ height: 0 }}
    whileInView={{ height: height }}
    transition={{ duration: 0.8, delay: delay, type: "spring" }}
    viewport={{ once: true }}
    className={`w-full rounded-t-sm relative group`}
    style={{ backgroundColor: color }}
  >
    {active && (
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white shadow-md text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap" style={{ color: color }}>
        {height} Growth
      </div>
    )}
  </motion.div>
);

export default OutcomeSection;