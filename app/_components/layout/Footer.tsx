'use client';

import Link from 'next/link';
import { Instagram, Twitter, Send, ArrowRight, Heart } from 'lucide-react';
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
    { href: 'https://www.instagram.com/aditya.and.aditya', icon: Instagram, label: 'Instagram' },
    { href: 'https://x.com/Aditya_n_Aditya', icon: Twitter, label: 'Twitter' },
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
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300 hover:-translate-y-1 bg-white/5 hover:bg-white/10"
                    style={{ color: brandColors.textLight }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition-colors"
                    style={{ color: brandColors.text }}
                    onMouseEnter={(e) => e.currentTarget.style.color = brandColors.accent}
                    onMouseLeave={(e) => e.currentTarget.style.color = brandColors.text}
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" style={{ color: brandColors.accent }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: brandColors.text }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
<div>
  <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
  <p className="text-sm mb-4" style={{ color: brandColors.text }}>
    Subscribe to our newsletter for the latest in AI trends and tech insights.
  </p>
  <div className="flex gap-2">
    <Input 
      type="email" 
      placeholder="Enter email" 
      // FIX: Inject the color variable into the className using template literal and [] syntax
      className={`bg-white/10 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-offset-0 focus-visible:ring-[${brandColors.accent}]`}
    />
    <Button 
      size="icon"
      className="shrink-0"
      style={{ backgroundColor: brandColors.accent }}
    >
      <Send size={16} />
    </Button>
  </div>
</div>
        </div>

        {/* Footer Bottom */}
        <div 
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <p style={{ color: brandColors.text }}>
            © {new Date().getFullYear()} Aditya & Aditya. All rights reserved.
          </p>
          <div className="flex items-center gap-6" style={{ color: brandColors.text }}>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}