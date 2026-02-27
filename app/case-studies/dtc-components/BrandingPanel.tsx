'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const auditRows = [
  {
    generic: "Add to Cart",
    sillage: "Begin Your Bottle",
    annotation: "A bottle of Sillage is not a product in a cart. It is the start of a practice. The language reflects that from the first click."
  },
  {
    generic: "Out of Stock",
    sillage: "Currently in maturation.",
    annotation: "Out-of-stock is a failure state for most brands. For Sillage, it is craft evidence. The language turns scarcity into proof."
  },
  {
    generic: "Shop Now",
    sillage: "Find Your Frequency",
    annotation: "Sillage doesn't just sell, it aligns. The CTA shifts from transaction to discovery."
  },
  {
    generic: "Your order is confirmed",
    sillage: "It's on its way to you.",
    annotation: "Direct, personal, and atmospheric. The brand stays in the role of the narrator."
  },
  {
    generic: "Subscribe for 10% off",
    sillage: "First access, before the public.",
    annotation: "We don't discount; we invite. The value is priority and belonging, not price reduction."
  },
  {
    generic: "Product Description",
    sillage: "What it does to a room.",
    annotation: "Shifting focus from what the product is (chemical) to what it creates (emotional/spatial)."
  },
  {
    generic: "Customer Reviews",
    sillage: "From those who wear it.",
    annotation: "Treating the customer as a practitioner/wearer, not just a consumer."
  }
];

export default function BrandingPanel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="h-full w-full bg-[#faf8f4] text-[#1a1410] flex flex-col p-8 overflow-y-auto no-scrollbar selection:bg-[#c8832a]/30">
      <div className="mb-12">
        <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[#c8832a] mb-4">Pillar 05: Branding</h3>
        <p className="font-serif italic text-2xl">The Language Audit</p>
      </div>

      <div className="grid grid-cols-2 mb-4 px-4">
        <span className="font-mono text-[0.5rem] uppercase tracking-widest opacity-40">Generic DTC</span>
        <span className="font-mono text-[0.5rem] uppercase tracking-widest opacity-40">Sillage Branded</span>
      </div>

      <div className="flex flex-col border-t border-[#1a1410]/5">
        {auditRows.map((row, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative"
          >
            <div className={`grid grid-cols-2 py-6 px-4 transition-colors duration-500 cursor-default ${
              hoveredIndex === i ? 'bg-[#c8832a]/5' : ''
            }`}>
              <div className="font-serif text-[#1a1410]/40 text-sm md:text-base">
                "{row.generic}"
              </div>
              <div className="font-serif text-[#1a1410] text-sm md:text-base font-medium">
                "{row.sillage}"
              </div>
            </div>

            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="px-4 pb-6"
                >
                  <p className="font-mono text-[0.7rem] italic text-[#c8832a] leading-relaxed max-w-sm">
                    {row.annotation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
