'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ArrowRight, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  Trophy, 
  Layers 
} from 'lucide-react';
import { caseStudiesData } from '@/app/_lib/caseStudiesData';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function CaseStudyPage() {
  const params = useParams();
  const id = params.id as string;
  
  const study = caseStudiesData.find((s) => s.id === id);

  if (!study) {
    notFound();
  }

  // Define brand colors as variables for cleaner usage
  const colors = {
    bg: '#eff0ef',
    primary: '#092d60',
    accent: '#37a8b1',
    text: '#4b5563' // Gray-600
  };

  return (
    <main className="min-h-screen selection:bg-[#37a8b1] selection:text-white" style={{ backgroundColor: colors.bg }}>
      
      {/* Sticky Navigation Header */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-[#eff0ef]/80 border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
            style={{ color: colors.accent }}
          >
            <div className="p-2 rounded-full bg-white/50 group-hover:bg-white transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span>Back to Case Studies</span>
          </Link>
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-4 py-12 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white shadow-sm"
              style={{ color: colors.accent }}
            >
              {study.category}
            </span>
            <h1
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
              style={{ color: colors.primary }}
            >
              {study.title}
            </h1>
            <div className="h-1 w-24 rounded-full" style={{ backgroundColor: colors.accent }}></div>
          </motion.div>

          {/* Key Metrics - Floating Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {study.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative background circle */}
                <div 
                  className="absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500"
                  style={{ backgroundColor: colors.accent }}
                />
                
                <div className="relative z-10">
                  <div
                    className="text-4xl md:text-5xl font-bold mb-3 flex items-center gap-3"
                    style={{ color: colors.accent }}
                  >
                    {metric.value}
                    <TrendingUp size={28} className="opacity-80" />
                  </div>
                  <div className="font-medium text-lg" style={{ color: colors.text }}>
                    {metric.metric}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-[1fr_300px] gap-12 lg:gap-20">
            {/* Main Narrative Column */}
            <div className="space-y-16">
              
              {/* Problem */}
              <motion.section variants={itemVariants} className="relative pl-8 border-l-2 border-red-200">
                <div className="absolute -left-3 top-0 bg-[#eff0ef] p-1">
                  <Target className="text-red-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: colors.primary }}>
                  The Challenge
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  {study.problem}
                </p>
              </motion.section>

              {/* Solution */}
              <motion.section variants={itemVariants} className="relative pl-8 border-l-2" style={{ borderColor: colors.accent }}>
                <div className="absolute -left-3 top-0 bg-[#eff0ef] p-1">
                   <Layers style={{ color: colors.accent }} size={20} />
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                  Our Solution
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  {study.solution}
                </p>
              </motion.section>

              {/* Outcome */}
              <motion.section variants={itemVariants} className="relative pl-8 border-l-2 border-green-200">
                <div className="absolute -left-3 top-0 bg-[#eff0ef] p-1">
                  <Trophy className="text-green-500" size={20} />
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                  The Outcome
                </h2>
                <div className="p-6 rounded-xl bg-white/50 border border-white shadow-sm">
                  <p className="text-lg leading-relaxed text-gray-600">
                    {study.outcome}
                  </p>
                </div>
              </motion.section>
            </div>

            {/* Sidebar Column (Services & CTA) */}
            <div className="space-y-10">
              {/* Services Tags */}
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: colors.primary }}>
                  <CheckCircle2 size={18} />
                  Tech Stack & Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-opacity-20"
                      style={{
                        backgroundColor: 'rgba(55, 168, 177, 0.1)',
                        color: colors.primary,
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div 
                variants={itemVariants}
                className="p-8 rounded-2xl text-center shadow-lg relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary} 0%, #1a4585 100%)` 
                }}
              >
                {/* Abstract background shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                
                <h3 className="text-xl font-bold mb-3 text-white">
                  Have a similar project?
                </h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  Let's engineer a solution tailored to your specific needs.
                </p>
                <Button
                  asChild
                  className="w-full text-white font-semibold shadow-md transition-transform active:scale-95"
                  style={{ backgroundColor: colors.accent }}
                >
                  <Link href="/#contact" className="flex justify-center items-center gap-2">
                    Start Project
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </main>
  );
}