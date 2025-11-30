'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming this is a custom button component

// Mocked Data structure (as in the provided snippet)
const featuredZeroStudy = {
  title: 'Achieving Exponential Growth',
  shortDescription: 'Discover how a strategic shift in technology and process led to a massive increase in key metrics for our client, setting a new industry benchmark.',
  link: '/zero-study',
};

// Define colors based on the provided snippet
const DEEP_BLUE = '#092d60';
const ACCENT_CYAN = '#37a8b1';
// Retaining a bright color for the bottom split to keep the visual contrast from the original image
const SPLIT_COLOR = '#white'; 

// A custom animated graph component
const AnimatedGraph = () => {
  return (
    // Reduced height of the graph container slightly from h-80 to h-64
    <div className="relative w-full h-64 bg-white/5 rounded-2xl border border-white/10 flex items-end justify-center gap-4 p-8 overflow-hidden backdrop-blur-sm shadow-xl">
      {/* Animated Bars */}
      {[30, 50, 40, 75, 95].map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: '0%' }}
          whileInView={{ height: `${height}%` }}
          transition={{ duration: 1, delay: i * 0.2, ease: "backOut" }}
          viewport={{ once: true }}
          className="w-8 md:w-12 rounded-t-md relative group"
          style={{ backgroundColor: ACCENT_CYAN }} 
        >
           {/* Hover Glow Effect */}
           <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        </motion.div>
      ))}
      
      {/* Floating ROI Badge */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="absolute top-6 right-6 bg-white text-[#092d60] px-4 py-2 rounded-full font-bold shadow-2xl flex items-center gap-2"
      >
        <TrendingUp size={16} />
        <span>300% ROI</span>
      </motion.div>
    </div>
  );
};

export default function FeaturedProjectSection() {
  return (
    // Outer container: Reduced vertical padding from py-12 to py-8
    <section className="relative pt-8 pb-8 overflow-hidden bg-white">
      
      {/* New Background Layers */}
      {/* Layer 1: Bottom Split Color (50% of section height) */}
      <div 
        className="absolute top-1/2 inset-x-0 bottom-0" 
        style={{ backgroundColor: SPLIT_COLOR, zIndex: 0 }} 
      />
      
      {/* Layer 2: Top Gradient Texture */}
      <div className="absolute top-0 inset-x-0 h-1/2" style={{ zIndex: 0 }}>
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ backgroundImage: 'linear-gradient(to bottom right, #092d60, #37a8b1)' }} 
        />
      </div>
      
      {/* Centering and Max Width Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Content Area (Deep Blue Box) */}
        <div 
          className="text-white rounded-3xl overflow-hidden shadow-2xl"
          style={{ backgroundColor: DEEP_BLUE, borderRadius: '24px' }}
        >
          {/* Reduced min-height from min-h-[500px] to min-h-[400px] */}
          <div className="flex flex-col lg:flex-row min-h-[400px]">
            
            {/* Left Side: Text and Story Link */}
            {/* Reduced vertical padding on content from p-16 to p-12 on large screens */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-3" // Reduced space between elements
              >
                {/* Small Text */}
                <p 
                  className="text-xl md:text-2xl mb-1 font-serif" 
                  style={{ color: ACCENT_CYAN }}
                >
                  Featured Zero Study:
                </p>
                
                {/* Main Headline */}
                <h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight" // Reduced headline size slightly
                >
                  {featuredZeroStudy.title}
                </h1>
                
                {/* Decorative Line */}
                <div 
                  className="w-10 h-1 mb-4" // Reduced line width and margin
                  style={{ backgroundColor: ACCENT_CYAN }}
                ></div>

                <p className="text-gray-300 text-base max-w-md pb-3">
                    {featuredZeroStudy.shortDescription}
                </p>
                
                {/* Read The Story Link/Button */}
                <Button 
                    asChild 
                    className="text-white border-white hover:bg-white transition-colors"
                    style={{ borderColor: ACCENT_CYAN, color: ACCENT_CYAN, backgroundColor: DEEP_BLUE }}
                    variant="outline"
                    size="lg"
                >
                    <Link href={featuredZeroStudy.link} className="flex items-center gap-2 hover:text-[#092d60]! hover:bg-white!">
                        Read the Story
                        <ArrowRight size={18} />
                    </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Right Side: Animated Graph */}
            {/* Reduced vertical padding on content from p-16 to p-12 on large screens */}
            <motion.div
                className="lg:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
              <AnimatedGraph />
              <p className="text-center text-xs text-gray-400 mt-4 uppercase tracking-wider">
                Measurable Growth via Strategic Tech
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}