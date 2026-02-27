'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  Code, 
  Brain, 
  Cloud, 
  Smartphone, 
  ChevronRight,
  TrendingUp 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

function ServiceItem({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <motion.li
      whileHover={{ x: 4 }}
      className="flex items-center gap-4 p-3 rounded-lg transition-all group cursor-pointer"
      style={{ backgroundColor: 'rgba(55, 168, 177, 0.05)' }}
      role="listitem"
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(55, 168, 177, 0.1)' }}>
        <Icon style={{ color: '#37a8b1' }} size={20} aria-hidden="true" />
      </div>
      <span className="font-medium grow" style={{ color: '#092d60' }}>{title}</span>
      <ChevronRight 
        style={{ color: '#37a8b1' }}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
        size={20} 
        aria-hidden="true"
      />
    </motion.li>
  );
}

export default function Hero() {
  const featuredServices = useMemo(
    () => [
      { icon: Code, title: 'Web Development' },
      { icon: Brain, title: 'AI Integration' },
      { icon: Cloud, title: 'Cloud Deployment' },
      { icon: Smartphone, title: 'Mobile Solutions' },
    ],
    []
  );

  return (
    <section 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ backgroundColor: '#eff0ef' }}
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br opacity-20" style={{ backgroundImage: 'linear-gradient(to bottom right, #092d60, #37a8b1)' }} />
      
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundColor: '#37a8b1', opacity: 0.1 }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundColor: '#092d60', opacity: 0.1 }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
              style={{ backgroundColor: 'rgba(55, 168, 177, 0.1)', color: '#37a8b1', borderColor: 'rgba(55, 168, 177, 0.2)' }}
              role="status"
              aria-label="AI-Powered Tech Solutions"
            >
              <Sparkles size={16} aria-hidden="true" />
              <span className="text-sm font-medium">Your next breakthrough, built on our foundation.</span>
            </motion.div>

            <h1 
              id="hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: '#092d60' }}
            >
              From <span style={{ color: '#37a8b1' }}>Business</span> Problems
              <br className="hidden lg:block" /> to Measurable Results
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl mb-8 max-w-2xl"
              style={{ color: '#666' }}
            >
              We don’t just build technology. We find the highest-impact projects for your business and deliver them from start to finish.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="text-white text-lg px-8 py-6 group shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: '#37a8b1' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2a8490')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#37a8b1')}
                aria-label="Get started with our services"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </Link>
              </Button>

              <Button
              asChild
              size="lg"
              variant="outline"
              className="
                text-lg px-8 py-6 
                border-2 border-[#092d60] 
              text-[#092d60] 
                bg-transparent 
              hover:bg-[#092d60] hover:text-white 
              hover:border-[#092d60]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37a8b1]
                transition-all duration-200"
              aria-label="View our portfolio"
              >
                <Link href="#projects">View Our Work</Link>
                </Button>
            </motion.div>

            {/* IMAGE SECTION */}
            <div className="w-full">
              <Image
                src="/images/Hero-img.png"
                alt="Hero Section Image"
                width={881}
                height={283}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE – CARD */}
          <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="order-last"
    >
      <div className="max-w-md mx-auto w-full">
        <Card 
          className="p-6 md:p-8 bg-white shadow-2xl transition-colors flex flex-col gap-6" 
          style={{ borderColor: 'rgba(55, 168, 177, 0.2)', borderWidth: '2px' }}
        >
          {/* Header & Text Content */}
          <div>
            <p 
              className="text-sm font-bold tracking-widest uppercase mb-2" 
              style={{ color: '#37a8b1' }}
            >
              Featured Zero Study
            </p>
            <h3 
              className="text-2xl md:text-3xl font-bold mb-3 leading-tight" 
              style={{ color: '#092d60' }}
            >
              Achieving Exponential Growth
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Discover how a strategic shift in technology and process led to a massive increase in key metrics for our client, setting a new industry benchmark.
            </p>
          </div>

          {/* Scaled-down Animated Graph */}
          <div 
            className="relative w-full h-48 rounded-xl flex items-end justify-center gap-2 md:gap-3 p-4 overflow-hidden shadow-inner"
            style={{ backgroundColor: '#092d60' }}
          >
            {/* Animated Bars */}
            {[30, 50, 40, 75, 95].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: '0%' }}
                whileInView={{ height: `${height}%` }}
                transition={{ duration: 1, delay: i * 0.2, ease: "backOut" }}
                viewport={{ once: true }}
                className="w-6 md:w-8 rounded-t-sm relative group"
                style={{ backgroundColor: '#37a8b1' }} 
              >
                 {/* Hover Glow Effect */}
                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-t-sm" />
              </motion.div>
            ))}
            
            {/* Floating ROI Badge */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full font-bold shadow-lg flex items-center gap-1.5 text-xs md:text-sm"
              style={{ color: '#092d60' }}
            >
              <TrendingUp size={14} />
              <span>300% ROI</span>
            </motion.div>
          </div>

          {/* Call to Action Button */}
          <Button
            asChild
            className="w-full transition-all py-6 font-semibold group hover:opacity-90 mt-2"
            style={{ 
              backgroundColor: '#092d60', 
              color: 'white',
              boxShadow: '0 4px 14px 0 rgba(9, 45, 96, 0.2)'
            }}
          >
            <Link href="/zero-study" className="flex items-center justify-center gap-2">
              Read the Story
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          
        </Card>
      </div>
    </motion.div>

        </div>
      </div>
    </section>
  );
}
