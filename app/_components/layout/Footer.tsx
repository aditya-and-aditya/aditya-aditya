'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Send, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const serviceLinks = [
    { href: '#', label: 'Full Stack Development' },
    { href: '#', label: 'Data Analytics' },
    { href: '#', label: 'ML Analytics' },
    { href: '#', label: 'AI Agents' },
  ];

  const companyLinks = [
    { href: '/#about', label: 'About Us' },
    { href: '/#projects', label: 'Case Studies' },
    { href: '/#contact', label: 'Contact' },
    { href: '/#contact', label: 'Careers' },
  ];

  const socialLinks = [
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com', icon: Github, label: 'GitHub' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  ];

  const brandColors = {
    primary: '#092d60',
    accent: '#37a8b1',
    text: '#9ca3af', // Gray-400
    textLight: '#f3f4f6' // Gray-100
  };

  return (
    <footer 
      className="relative pt-20 pb-10 overflow-hidden"
      style={{ 
        background: `linear-gradient(to bottom, ${brandColors.primary}, #061e42)` 
      }}
    >
      {/* Decorative top border line */}
      <div 
        className="absolute top-0 left-0 w-full h-1" 
        style={{ 
          background: `linear-gradient(90deg, transparent, ${brandColors.accent}, transparent)` 
        }} 
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Aditya & Aditya
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: brandColors.text }}>
              Empowering businesses with cutting-edge AI agents, data analytics, and scalable web solutions. We build the future of your digital infrastructure.
            </p>
            
          </div>

          {/* Column 2: Services */}
        

          {/* Column 3: Company */}
       
          {/* Column 4: Newsletter/CTA */}


        {/* Footer Bottom */}
        <div 
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <p style={{ color: brandColors.text }}>
            © {new Date().getFullYear()} Aditya & Aditya. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );

}
