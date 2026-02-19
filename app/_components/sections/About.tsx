'use client';

import { motion } from 'framer-motion';
import { Rocket, HeartHandshake, Code2, CheckCircle, Quote } from 'lucide-react';
import { useMemo } from 'react';
import Image from 'next/image'; 

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

        {/* Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3
            className="text-2xl font-bold mb-8"
            style={{ color: '#092d60' }}
          >
            Technologies We Mastered For You
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {expertise.map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 rounded-full flex items-center gap-2 border transition-all hover:scale-105"
                style={{
                  backgroundColor: 'white',
                  borderColor: 'rgba(55, 168, 177, 0.3)',
                  color: '#092d60',
                }}
              >
                <CheckCircle size={16} style={{ color: '#37a8b1' }} />
                <span className="font-semibold text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}