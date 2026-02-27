'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UXPanel() {
  const [isGift, setIsGift] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: "product",
      title: "Product Page",
      content: (
        <div className="w-full max-w-sm p-8 border border-[#1a1410]/10 bg-[#faf8f4] shadow-xl">
          <div className="mb-6 font-mono text-[0.6rem] uppercase tracking-widest text-[#c8832a]">No. 3 — "Before Rain"</div>
          <h4 className="font-serif text-2xl mb-4">Petrichor · Iris Root · Vetiver</h4>
          <p className="font-serif italic text-sm opacity-60 mb-8 leading-relaxed">
            The scent of a sky about to open. Cold maceration, 11 weeks. 23% concentration. Built for skin.
          </p>
          <button className="w-full py-4 bg-[#c8832a] text-[#faf8f4] font-mono text-[0.7rem] uppercase tracking-widest hover:bg-[#1a1410] transition-colors duration-500">
            Begin Your Bottle
          </button>
        </div>
      )
    },
    {
      id: "intent",
      title: "Intent Confirmation",
      content: (
        <div className="w-full max-w-sm p-8 border border-[#1a1410]/10 bg-[#faf8f4] shadow-xl">
          <h4 className="font-serif text-xl mb-8 text-center">Before you go further — is this for you, or someone else?</h4>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setIsGift(false)}
              className={`py-4 border font-mono text-[0.6rem] uppercase tracking-widest transition-all ${!isGift ? 'bg-[#1a1410] text-[#faf8f4] border-[#1a1410]' : 'border-[#1a1410]/10 hover:border-[#1a1410]'}`}
            >
              For me
            </button>
            <button
              onClick={() => setIsGift(true)}
              className={`py-4 border font-mono text-[0.6rem] uppercase tracking-widest transition-all ${isGift ? 'bg-[#1a1410] text-[#faf8f4] border-[#1a1410]' : 'border-[#1a1410]/10 hover:border-[#1a1410]'}`}
            >
              A gift
            </button>
          </div>
        </div>
      )
    },
    {
      id: "checkout",
      title: "Checkout",
      content: (
        <div className="w-full max-w-sm p-8 border border-[#1a1410]/10 bg-[#faf8f4] shadow-xl">
          <h4 className="font-serif text-xl mb-8">Your Bottle</h4>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between font-serif text-sm">
              <span>Sillage No. 3 — Before Rain</span>
              <span>$180</span>
            </div>
            {isGift && (
              <div className="flex justify-between font-serif text-sm text-[#c8832a]">
                <span>Sillage gift box (selected)</span>
                <span>Incl.</span>
              </div>
            )}
            <div className="h-px bg-[#1a1410]/5 my-4"></div>
            <p className="font-serif italic text-xs opacity-40">Arrives in a Sillage box. Always.</p>
          </div>
          <button className="w-full py-4 bg-[#1a1410] text-[#faf8f4] font-mono text-[0.7rem] uppercase tracking-widest hover:bg-[#c8832a] transition-colors duration-500">
            Complete Your Order
          </button>
        </div>
      )
    },
    {
      id: "confirmation",
      title: "Confirmation",
      content: (
        <div className="w-full max-w-sm p-8 border border-[#1a1410]/10 bg-[#faf8f4] shadow-xl">
          <h4 className="font-serif text-xl mb-2 italic">It's on its way to you.</h4>
          <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 mb-8">No. 3 — Before Rain · Arriving within 3 days.</p>

          <div className="p-6 bg-[#c8832a]/5 border border-[#c8832a]/10 mb-8">
            <p className="font-serif italic text-sm text-[#c8832a] text-center">
              {isGift
                ? "\"They've never smelled anything like this. A gift is a memory before it is a product.\""
                : "\"Wear it first on a day with nothing else in it.\""}
            </p>
          </div>

          <button className="w-full text-center font-mono text-[0.6rem] uppercase tracking-widest text-[#c8832a] hover:text-[#1a1410] transition-colors">
            Your next frequency →
          </button>
        </div>
      )
    },
    {
      id: "insights",
      title: "The Ghost (Insights Layer)",
      content: (
        <div className="w-full max-w-sm p-8 border border-[#c8832a]/40 bg-[#0e0c0a] text-[#faf8f4] font-mono text-[0.6rem]">
          <div className="flex justify-between mb-8">
            <span className="text-[#c8832a]">DATA_LOG_V3</span>
            <span className="opacity-40">CONFIRMED</span>
          </div>
          <div className="space-y-4 opacity-70">
            <p>● TIME: 9:47PM</p>
            <p>● SOURCE: DIRECT_NAV</p>
            <p>● PERSONA: INTELLECTUAL_SELF</p>
            <p>● NOTE_AFFINITY: COOL_WET_DARK</p>
            <p>● FREQUENCY: 2nd PURCHASE / 90d</p>
          </div>
          <div className="mt-8 pt-6 border-t border-[#faf8f4]/10 italic opacity-40">
            &lt;!-- Insights layer: Feed to retention engine --&gt;
          </div>
        </div>
      )
    }
  ];

  return (
    <div
      ref={scrollRef}
      className="h-full w-full bg-[#faf8f4] flex flex-col overflow-y-scroll snap-y snap-mandatory no-scrollbar selection:bg-[#c8832a]/30"
    >
      {steps.map((step, i) => (
        <section
          key={step.id}
          className="h-full min-h-full flex-shrink-0 snap-start flex flex-col items-center justify-center p-8 relative"
        >
          <div className="absolute top-8 left-8 font-mono text-[0.5rem] uppercase tracking-widest opacity-20">
            Step 0{i + 1} — {step.title}
          </div>
          {step.content}
          {i < steps.length - 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-20">
              <span className="font-mono text-[0.5rem] uppercase tracking-widest">Scroll</span>
              <div className="w-px h-8 bg-[#1a1410]"></div>
            </div>
          )}
        </section>
      ))}

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
