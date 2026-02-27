'use client';

import { motion } from 'framer-motion';
import { Rocket, HeartHandshake, Code2, CheckCircle, Quote, ArrowRight, Sparkles } from 'lucide-react';
import { useMemo } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

function ValueCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center p-6 rounded-xl border border-transparent hover:border-gray-100 transition-colors"
    >
      <div
        className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
        style={{ backgroundColor: 'rgba(55, 168, 177, 0.1)' }}
      >
        <Icon style={{ color: '#37a8b1' }} size={32} />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: '#092d60' }}>
        {title}
      </h3>
      <p style={{ color: '#666' }}>
        {description}
      </p>
    </motion.div>
  );
}

function TeamMember({
  name,
  role,
  image,
  index,
}: {
  name: string;
  role: string;
  image: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 overflow-hidden relative"
        style={{ borderColor: 'rgba(55, 168, 177, 0.2)' }}
      >
        <Image
          src={image}
          alt={name}
          width={128} 
          height={128}
          className="object-cover w-full h-full"
        />
      </div>
      <h4 className="text-lg font-bold" style={{ color: '#092d60' }}>
        {name}
      </h4>
      <p className="text-sm font-medium tracking-wide uppercase" style={{ color: '#37a8b1' }}>
        {role}
      </p>
    </motion.div>
  );
}

export default function About() {
  const values = useMemo(
    () => [
      {
        icon: Rocket,
        title: 'More Than Just Code',
        description:
          'We aren\'t here to just close tickets. We are here to build a legacy. Your project is the foundation of our reputation.',
      },
      {
        icon: HeartHandshake,
        title: 'Your Success is Our Future',
        description:
          'We view every project as a steppingstone. If you don\'t succeed, we don\'t succeed. We are invested in your growth.',
      },
      {
        icon: Code2,
        title: 'Future-Proof Engineering',
        description:
          'We don\'t use outdated methods. We build with the future in mind because we are building for the long haul.',
      },
    ],
    []
  );

  const teamMembers = useMemo(
    () => [
      { 
        name: 'Aditya Dixit', 
        role: 'Co-Founder & The CEO guy',
        image: '/images/dixit.png' 
      },
      { 
        name: 'Aditya Upadhyay', 
        role: 'Co-Founder & The CTO guy',
        image: '/images/upadhyay.png'
      },
    ],
    []
  );

  const expertise = [
    'Web Development',
    'AI Agents',
    'SaaS Architecture',
    'Modern UI/UX',
    'Data Analytics',
    'Machine Learning',
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#092d60' }}
          >
            The Aditya & Aditya Promise
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#666' }}>
            We are a fresh, hungry team of engineers dedicated to transforming businesses. We are building our agency one successful partnership at a time.
          </p>
        </motion.div>

        {/* The "Manifesto" / Philosophy Block */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20 p-8 md:p-12 rounded-2xl relative"
            style={{ 
                backgroundColor: 'rgba(9, 45, 96, 0.03)',
                borderLeft: '4px solid #37a8b1'
            }}
        >
            <Quote className="absolute top-8 left-8 opacity-10" size={48} color="#092d60" />
            <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#092d60' }}>
                    Why Choose Us?
                </h3>
                <p className="text-xl md:text-2xl italic leading-relaxed font-medium" style={{ color: '#4b5563' }}>
                    "For us, your work is not just a number, but a <span style={{ color: '#37a8b1' }}>steppingstone for our upcoming future</span>. We are here not just to build Tech solutions for you, but to create something that will make a mark for the future."
                </p>
            </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {values.map((value, index) => (
            <ValueCard key={value.title} {...value} index={index} />
          ))}
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-wider uppercase mb-2 block" style={{ color: '#37a8b1' }}>The Builders</span>
            <h3
              className="text-3xl font-bold"
              style={{ color: '#092d60' }}
            >
              Meet The Founders
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.name} {...member} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Services CTA — replaces Expertise */}
        
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  viewport={{ once: true }}
  className="relative max-w-3xl mx-auto"
>
  {/* Outer glow border */}
  <div
    className="absolute -inset-px rounded-2xl pointer-events-none"
    style={{
      background: 'linear-gradient(135deg, rgba(55,168,177,0.5) 0%, rgba(9,45,96,0.15) 50%, rgba(55,168,177,0.3) 100%)',
      filter: 'blur(0.5px)',
    }}
  />

  {/* Card */}
  <div
    className="relative rounded-2xl overflow-hidden px-8 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6"
    style={{
      background: 'linear-gradient(135deg, #06193a 0%, #092d60 60%, #0a2448 100%)',
    }}
  >
    {/* Noise texture */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px 128px',
      }}
    />

    {/* Spotlight */}
    <div
      className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(55,168,177,0.1) 0%, transparent 70%)' }}
    />

    {/* Top shimmer line */}
    <div
      className="absolute top-0 left-0 right-0 h-px pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(55,168,177,0.7) 40%, rgba(255,255,255,0.2) 50%, rgba(55,168,177,0.7) 60%, transparent)',
      }}
    />

    {/* Left: text */}
    <div className="relative z-10 text-center md:text-left">
      <p
        className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
        style={{ color: '#37a8b1' }}
      >
        What We Offer
      </p>
      <h3
        className="text-xl md:text-2xl font-bold leading-snug"
        style={{ color: 'white', letterSpacing: '-0.03em' }}
      >
        Ready to see what we can{' '}
        <span
          style={{
            background: 'linear-gradient(90deg, #37a8b1, #7adde4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          build for you?
        </span>
      </h3>
    </div>

    {/* Right: CTA button */}
    <div className="relative z-10 shrink-0">
      <Link href="/services">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm overflow-hidden whitespace-nowrap"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #37a8b1, #2a8f98)',
              boxShadow: '0 0 28px rgba(55,168,177,0.45), 0 4px 12px rgba(55,168,177,0.25)',
            }}
          />
          {/* Shimmer sweep */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)',
            }}
          />
          <span className="relative z-10 text-white">Explore Our Services</span>
          <motion.div
            className="relative z-10"
            animate={{ x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowRight size={15} color="white" />
          </motion.div>
        </motion.button>
      </Link>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}