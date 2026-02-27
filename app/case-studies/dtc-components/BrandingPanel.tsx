'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const auditRows = [
  { generic: "Add to Cart", sillage: "Begin Your Bottle", note: "A bottle is not a product in a cart. It is the beginning of a practice." },
  { generic: "Out of Stock", sillage: "Currently in maturation.", note: "Scarcity reframed as craft evidence. The limitation becomes the proof." },
  { generic: "Shop Now", sillage: "Find Your Frequency", note: "Sillage doesn't just sell, it aligns. The CTA shifts from transaction to discovery." },
  { generic: "Your order is confirmed.", sillage: "It is on its way to you.", note: "Direct, personal, and atmospheric. The brand stays in the role of the narrator." },
  { generic: "Subscribe for 10% off", sillage: "First access. Before anyone else.", note: "We don't discount; we invite. The value is priority and belonging, not price reduction." },
  { generic: "Product Description", sillage: "What it does to a room.", note: "Shifting focus from what the product is (chemical) to what it creates (emotional/spatial)." },
  { generic: "Customer Reviews", sillage: "From those who wear it.", note: "Reviews are not endorsements. They are testimony. The language reflects that." },
  { generic: "Free Returns", sillage: "If it is not right, we make it right.", note: "Removing technical jargon in favor of a personal guarantee of accuracy." },
  { generic: "You might also like", sillage: "Others who share your frequency.", note: "The system identifies patterns of desire, not just similar product categories." },
  { generic: "Limited Time Offer", sillage: "One batch. When it is gone, it is gone.", note: "Urgency without manufacture. This is a fact, not a tactic." },
  { generic: "New Arrivals", sillage: "What has changed since you were last here.", note: "New arrivals assumes every visitor is new. This assumes they are not." },
  { generic: "Best Sellers", sillage: "What most people reach for first.", note: "A clinical observation of behavior, rather than a popularity contest." }
];

export default function BrandingPanel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Internal scroll handling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isHovered || !scrollRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) return;
      e.preventDefault();
      scrollRef.current.scrollTop += e.deltaY;
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={scrollRef}
      className="h-full w-full bg-[#f2ece0] text-[#1c1713] flex flex-col p-8 md:p-12 overflow-y-auto no-scrollbar selection:bg-[#b5893a]/20"
    >

      <div className="mb-12 flex-shrink-0">
        <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#b5893a] mb-4">Pillar 05: Branding</h3>
        <p className="font-serif italic text-3xl">The Language Audit</p>
      </div>

      <div className="grid grid-cols-2 mb-4 px-4 flex-shrink-0">
        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#c8c0b4]">GENERIC DTC</span>
        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#b5893a]">SILLAGE</span>
      </div>

      <div className="flex flex-col border-t border-[#e8dfd0]">
        {auditRows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative border-b border-[#e8dfd0] transition-colors duration-500 cursor-default ${hoveredIndex === i ? 'bg-[#b5893a]/[0.06]' : ''}`}
          >
            <div className="grid grid-cols-2 py-5 px-4">
              <div className="font-serif text-[#c8c0b4] text-base md:text-lg">
                "{row.generic}"
              </div>
              <div className="font-serif text-[#1c1713] text-base md:text-lg font-medium">
                "{row.sillage}"
              </div>
            </div>

            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 pb-5 overflow-hidden"
                >
                  <p className="font-serif italic text-[0.8rem] text-[#b5893a] leading-relaxed max-w-sm">
                    "{row.note}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2 }}
        className="mt-12 pt-8 text-center space-y-2 border-t border-[#e8dfd0] flex-shrink-0"
      >
        <p className="font-serif italic text-lg leading-relaxed">Every word above is a decision.</p>
        <p className="font-serif italic text-lg leading-relaxed">Most brands make them by default.</p>
        <p className="font-serif italic text-lg leading-relaxed">Sillage makes them by conviction.</p>
      </motion.div>

    </div>
  );
}
