'use client';

import Link from 'next/link';
import { Instagram, Twitter } from 'lucide-react';

export default function Footer() {
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

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-gradient-to-b from-[#092d60] to-[#061e42]">
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#37a8b1] to-transparent opacity-80 z-10" />

      {/* --- BACKGROUND WIREFRAME SVGs --- */}
      
      {/* 1. Central Data Node Wireframe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.40] z-0">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
          <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="2" strokeDasharray="4 12" />
          <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="400" cy="400" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
          <path d="M100 400 H700 M400 100 V700 M188 188 L612 612 M188 612 L612 188" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <rect x="380" y="380" width="40" height="40" stroke="currentColor" strokeWidth="2" transform="rotate(45 400 400)" />
          <circle cx="400" cy="100" r="6" fill="currentColor" />
          <circle cx="400" cy="700" r="6" fill="currentColor" />
          <circle cx="100" cy="400" r="6" fill="currentColor" />
          <circle cx="700" cy="400" r="6" fill="currentColor" />
        </svg>
      </div>

      {/* 2. Bottom Right Tech Grid */}
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-[0.80] z-0" style={{ maskImage: 'radial-gradient(circle at bottom right, black, transparent)' }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" className="text-[#37a8b1]" />
        </svg>
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="max-w-md space-y-6">
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Aditya & Aditya
            </h3>
            <p className="text-sm leading-relaxed text-[#9ca3af]">
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
                    className="group flex items-center justify-center p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 bg-white/5 hover:bg-[#37a8b1]/10 text-[#f3f4f6] hover:text-[#37a8b1] border border-white/5 hover:border-[#37a8b1]/30"
                    aria-label={social.label}
                  >
                    <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="md:min-w-[200px]">
            <h4 className="text-white font-semibold mb-6 tracking-wider uppercase text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#37a8b1]" />
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm font-medium text-[#9ca3af] transition-colors hover:text-[#37a8b1]"
                  >
                    <span className="w-0 h-[2px] bg-[#37a8b1] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-3 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-[#9ca3af]">
          <p>
            © {new Date().getFullYear()} Aditya & Aditya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}