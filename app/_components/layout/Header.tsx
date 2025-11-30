'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        document.body.classList.add('header-visible');
      }
      // Hide header when scrolling down (but keep visible at top)
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        document.body.classList.remove('header-visible');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial state
    if (window.scrollY <= 50) {
      document.body.classList.add('header-visible');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md"
      style={{
        backgroundColor: 'white',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        // Expose height to CSS + JS
        '--header-height': '80px', // ← CHANGE THIS IF YOUR HEADER HEIGHT IS DIFFERENT
      } as React.CSSProperties}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="Aditya & Aditya Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-bold" style={{ color: '#092d60' }}>
            Aditya & Aditya
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#37a8b1]"
              style={{ color: '#092d60' }}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            style={{ backgroundColor: '#37a8b1' }}
            className="text-white hover:opacity-90"
          >
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ 
            backgroundColor: '#37a8b1',
            color: 'white',
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          backgroundColor: 'white',
          borderTopColor: '#e5e5e5',
          maxHeight: isMobileMenuOpen ? '500px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease-in-out',
        }}
        className="md:hidden border-t"
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#37a8b1]"
              style={{ color: '#092d60' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            style={{ backgroundColor: '#37a8b1' }}
            className="text-white w-full hover:opacity-90"
          >
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}