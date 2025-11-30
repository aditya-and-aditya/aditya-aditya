'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SectionNavbar() {
  // --- State ---
  const [isFixed, setIsFixed] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('services');
  
  // Derived state: Visible only when 'fixed' AND 'not near footer'
  const isVisible = isFixed && !isNearFooter;

  const navbarRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null); // Triggers the 'fixed' state

  // === 1. Detect header visibility ===
  useEffect(() => {
    const check = () => setHeaderVisible(document.body.classList.contains('header-visible'));
    const observer = new MutationObserver(check);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    check();
    return () => observer.disconnect();
  }, []);

  // === 2. Scroll → static / fixed / visibility ===
  useEffect(() => {
    const sentinel = sentinelRef.current;
    const footer = document.querySelector('footer');

    if (!sentinel || !footer) {
      if (!footer) console.warn("SectionNavbar: <footer> element not found. Hiding logic will not work.");
      return;
    }

    const headerHeight = headerVisible
      ? parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '80')
      : 0;

    // Observer 1: Toggles 'isFixed'
    // Triggers when the sentinel scrolls past the header
    const stickyObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    // Observer 2: Toggles 'isNearFooter'
    // Triggers when the footer is 200px from the bottom of the viewport
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsNearFooter(entry.isIntersecting);
      },
      {
        rootMargin: '0px 0px -200px 0px', // Hides 200px before footer hits
        threshold: 0,
      }
    );

    stickyObserver.observe(sentinel);
    footerObserver.observe(footer);

    // Cleanup
    return () => {
      stickyObserver.disconnect();
      footerObserver.disconnect();
    };
  }, [headerVisible]); // Re-run if header visibility changes

  // === 3. Active section tracking ===
  useEffect(() => {
    // --- IMPORTANT ---
    // Update this array to match the 'id' attributes of your page sections
    const sections = ['services', 'projects', 'about', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => e.isIntersecting && setActiveSection(id),
        { rootMargin: '-20% 0px -70% 0px' } // Triggers in the middle 50% of screen
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // --- Render ---
  
  // --- IMPORTANT ---
  // Update this array to match your sections
  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '80');
  const topValue = headerVisible ? headerHeight + 16 : 16; // 16px (1rem) margin from top

  return (
    <>
      {/* This sentinel should be placed right AFTER your hero section */}
      <div ref={sentinelRef} className="h-1" />

      <motion.nav
        ref={navbarRef}
        initial={false}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -30,
          // Animate the 'top' value to account for the main header
          top: isFixed ? topValue : 'auto',
        }}
        transition={{
          opacity: { duration: 0.3 },
          y: { duration: 0.3, type: 'spring', stiffness: 400, damping: 30 },
          top: { duration: 0.3, type: 'spring', stiffness: 400, damping: 30 },
        }}
        
        // --- Styling for the floating pill ---
        className="z-40 pointer-events-none mx-auto" 
        style={{
          position: isFixed ? 'fixed' : 'static',
          width: 'fit-content',
          maxWidth: '80vw',
          pointerEvents: isVisible ? 'auto' : 'none',
          
          // Apply centering *only* when fixed
          ...(isFixed && {
            left: '50%',
            transform: 'translateX(-50%)',
          })
        }}
      >
        {/* This is the pill itself */}
        <div
          // Copied styles from your original code
          className="flex items-center gap-6 px-8 py-3 rounded-full backdrop-blur-md border shadow-lg"
          style={{
            // You can change this to a dark theme like in the video
            // backgroundColor: 'rgba(30, 30, 30, 0.85)',
            // borderColor: 'rgba(255, 255, 255, 0.1)',
            
            // Your light theme styles:
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: 'rgba(55, 168, 177, 0.2)',
            borderWidth: '2px',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="relative font-medium text-sm md:text-base transition-colors duration-300 whitespace-nowrap"
              style={{
                // Adjust colors for light/dark theme
                color: activeSection === item.id ? '#37a8b1' : '#092d60',
                // color: activeSection === item.id ? '#8ab4f8' : '#e8eaed', // Dark theme
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="section-nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                  style={{ backgroundColor: '#37a8b1' }} // Blue indicator
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </motion.nav>
    </>
  );
}