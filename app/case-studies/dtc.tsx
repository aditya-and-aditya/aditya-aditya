'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Cormorant_Garamond, DM_Mono, Libre_Baskerville } from 'next/font/google';
import DemoShell from './dtc-components/DemoShell';
import AuthorityPanel from './dtc-components/AuthorityPanel';
import PersonaPanel from './dtc-components/PersonaPanel';
import PresencePanel from './dtc-components/PresencePanel';
import InsightsPanel from './dtc-components/InsightsPanel';
import BrandingPanel from './dtc-components/BrandingPanel';
import UXPanel from './dtc-components/UXPanel';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono'
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-libre-baskerville'
});

const SILLAGE_COLORS = {
  black: '#0a0907',
  ink: '#1c1713',
  cream: '#f2ece0',
  bone: '#e8dfd0',
  gold: '#b5893a',
  goldLt: '#d4aa60',
  mist: '#c8c0b4',
  white: '#faf7f2',
};

const pillars = [
  { id: '01', title: 'Authority', component: <AuthorityPanel /> },
  { id: '02', title: 'Persona', component: <PersonaPanel /> },
  { id: '03', title: 'Presence', component: <PresencePanel /> },
  { id: '04', title: 'Insights', component: <InsightsPanel /> },
  { id: '05', title: 'Branding', component: <BrandingPanel /> },
  { id: '06', title: 'UX/CX', component: <UXPanel /> },
];

export default function DTCCaseStudy() {
  const [activePillar, setActivePillar] = useState('01');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0% -30% 0%',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const pillarId = entry.target.getAttribute('data-pillar');
          if (pillarId) setActivePillar(pillarId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('[data-pillar]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${cormorant.variable} ${dmMono.variable} ${libreBaskerville.variable} font-serif bg-[#f2ece0] text-[#1c1713] selection:bg-[#b5893a]/20 selection:text-[#1c1713] transition-colors duration-500`}
      style={{
        // @ts-ignore
        '--sillage-black': SILLAGE_COLORS.black,
        '--sillage-ink': SILLAGE_COLORS.ink,
        '--sillage-cream': SILLAGE_COLORS.cream,
        '--sillage-bone': SILLAGE_COLORS.bone,
        '--sillage-gold': SILLAGE_COLORS.gold,
        '--sillage-gold-lt': SILLAGE_COLORS.goldLt,
        '--sillage-mist': SILLAGE_COLORS.mist,
        '--sillage-white': SILLAGE_COLORS.white,
      }}
    >
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-1 origin-left bg-[#b5893a]"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 border-b border-[#e8dfd0]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl"
        >
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.5em] text-[#b5893a] mb-8 block">Case Study + Spec</span>
          <h1 className="text-5xl md:text-8xl font-light mb-8 leading-tight text-balance">
            HexaDON <span className="italic">×</span> Direct-to-Consumer
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-60 italic mb-12">
            "A Fragrance Brand That Made You Feel Before You Bought"
          </p>
          <div className="flex flex-wrap justify-center gap-12 font-mono text-[0.6rem] uppercase tracking-widest opacity-40">
            <div>Prepared by: Aditya & Aditya</div>
            <div>Status: Build-Ready</div>
            <div>Vertical: Fine Fragrance</div>
            <div>Demo Brand: Sillage, Paris</div>
          </div>
        </motion.div>
      </section>

      {/* The Wound */}
      <section className="py-32 px-8 max-w-4xl mx-auto border-b border-[#e8dfd0]">
        <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#b5893a] mb-12">Part One: The Wound</h2>
        <div className="space-y-12 text-xl md:text-2xl font-light leading-relaxed">
          <p>You removed the middleman. You own the channel. You own the margin. You own the data. You did everything the playbook told you to do — and you are still looking at a 68% cart abandonment rate, a return on ad spend that plateaued two quarters ago, and a repeat purchase rate that should be double what it is.</p>
          <p className="border-l-2 border-[#b5893a] pl-8 italic">"The middleman you removed wasn't just a distributor. He was a translator."</p>
          <p>In every Saks, every Harrods, every Bon Marché — there was a human being behind the counter who read the customer, narrated the product, and converted hesitation into desire. She did not sell fragrance. She sold a version of yourself you did not know you wanted to be yet. She asked where you were going tonight. She described a scent the way a novelist describes a room. She made the price feel like the smallest part of the decision.</p>
          <p>You replaced her with a product page. A product page with a note pyramid that reads like a grocery receipt. That is not a product description. That is a label on a bottle that is pointing at itself. The customer reads it, understands nothing, and closes the tab — not because the fragrance was wrong for them, but because the experience gave them nothing to hold onto.</p>
        </div>
      </section>

      <section className="py-24 px-8 max-w-4xl mx-auto mb-12">
        <h3 className="text-3xl font-light italic mb-8">Why Fragrance</h3>
        <div className="space-y-8 text-lg font-light leading-relaxed opacity-80">
          <p>Fragrance is the hardest product to sell online. It is invisible. It is subjective. It cannot be sampled through a screen. The customer is being asked to spend £165 on a sensation they can only imagine.</p>
          <p>This is not a disadvantage. This is the entire opportunity. When you cannot rely on the product to sell itself, you must build an experience so authoritative, so atmospherically complete, so precisely calibrated to the person in front of it, that the imagination does the work the nose cannot.</p>
          <p>The customer should not need to smell it. They should feel it as though they already own it, already wear it, already are the person who chooses this. That is not a UX problem. That is a clienting problem. And clienting is what HexaDON was built for.</p>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <div ref={containerRef} className="relative flex flex-col lg:flex-row max-w-[1400px] mx-auto px-8 py-32 gap-24">

        {/* Left Column: Copy */}
        <div className="w-full lg:w-[45%] space-y-96 pb-[50vh]">

          {/* Pillar 01 */}
          <section data-pillar="01" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#b5893a]">Pillar 01</span>
              <h3 className="text-4xl md:text-6xl font-light italic">Authority</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">Making the customer experience both the art and the craft of the product</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>A fragrance note pyramid is not Authority. It is a taxonomy. It describes the chemical composition of an experience without ever creating one.</p>
              <p><span className="font-bold text-[#1c1713]">The Craft</span> is the technical story. The sourcing, the process, the precision. The Grasse rose harvested at 5am before the dew evaporates. Craft answers the rational objection before the customer can form it. It transforms the price from a barrier into evidence.</p>
              <p><span className="font-bold text-[#1c1713]">The Art</span> is the sensory and emotional narrative — not what the fragrance is made of, but what it does to the world. Art answers the emotional equation: <span className="italic">Does this reflect who I am?</span></p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#b5893a]/10 overflow-hidden rounded-lg">
                <AuthorityPanel />
              </div>

              <p className="bg-[#b5893a]/5 p-8 border-r-2 border-[#b5893a] text-base md:text-lg italic">"Authority makes comparison shopping irrelevant. Once you have shown a customer the full depth of what they are about to buy, no other product page can compete. They cannot unsee it."</p>
            </div>
          </section>

          {/* Pillar 02 */}
          <section data-pillar="02" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#b5893a]">Pillar 02</span>
              <h3 className="text-4xl md:text-6xl font-light italic">Persona</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">Removing cluelessness from intelligent systems</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>Persona is not a segment. It is a real-time context engine — a living model of who is in front of the experience right now, built from the signals they give unconsciously through behavior, and used to configure every surface they encounter.</p>
              <p>In fragrance DTC, Persona solves the most fundamental conversion problem: the customer does not know how to navigate their own desire. The Persona system gives them the vocabulary. Not by asking them to fill out a form — by reading them.</p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#b5893a]/10 overflow-hidden rounded-lg">
                <PersonaPanel />
              </div>

              <p className="bg-[#b5893a]/5 p-8 border-r-2 border-[#b5893a] text-base md:text-lg italic">"Personalization gives you more of what you already clicked on. Persona gives you the version of the experience that makes you feel understood."</p>
            </div>
          </section>

          {/* Pillar 03 */}
          <section data-pillar="03" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#b5893a]">Pillar 03</span>
              <h3 className="text-4xl md:text-6xl font-light italic">Presence</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">How clienting tech meets the world</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>Presence is the principle that the experience should know where the customer came from — and honor the emotional state they arrived in. Not gimmick personalization, but something quieter: the tone, the depth, and the visual hierarchy shift to match the emotional temperature they arrived with.</p>
              <p>A customer from paid social arrives seduced. Give them atmosphere first. A customer from high-intent search arrives decided. Give them the proof. Presence is about not wasting the emotional state the customer arrived in. They came with a temperature. Presence is the discipline of meeting them at it.</p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#b5893a]/10 overflow-hidden rounded-lg">
                <PresencePanel />
              </div>

              <p className="bg-[#b5893a]/5 p-8 border-r-2 border-[#b5893a] text-base md:text-lg italic">"Presence turns your acquisition spend into relationship capital. You didn't get more customers. You stopped wasting the ones you already had."</p>
            </div>
          </section>

          {/* Pillar 04 */}
          <section data-pillar="04" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#b5893a]">Pillar 04</span>
              <h3 className="text-4xl md:text-6xl font-light italic">Insights</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">The intelligence of the entire customer base</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>You have more behavioral data than any market research firm could buy. Most DTC brands are sitting on this data and calling it "analytics." Insights is what happens when you treat that data as a living picture of collective desire — a map of what your entire customer base is moving toward before the market has named it.</p>
              <p>In fragrance, Insights reveals things no focus group would surface. That the word "clean" in product reviews correlates with returns. That customers who filter for "unisex" have a 40% higher lifetime value.</p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#b5893a]/10 overflow-hidden rounded-lg">
                <InsightsPanel />
              </div>

              <p className="bg-[#b5893a]/5 p-8 border-r-2 border-[#b5893a] text-base md:text-lg italic">"The market is always telegraphing where it is going. Insights is the infrastructure that lets you read the signal before it becomes a trend — and act while everyone else is still watching."</p>
            </div>
          </section>

          {/* Pillar 05 */}
          <section data-pillar="05" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#b5893a]">Pillar 05</span>
              <h3 className="text-4xl md:text-6xl font-light italic">Branding</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">Why an unbranded system is garbage</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>Branding is not aesthetics. It is a moral stance — a specific, defensible position about who this is for and who it is not for — embedded so deeply into every decision the system makes that the customer feels it before they read a single word.</p>
              <p>Sillage's moral stance is this: fragrance is not an accessory. It is a practice. That stance lives in every sentence the system produces. Every word is downstream of the philosophy — and the customer feels the difference even when they cannot name it.</p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#b5893a]/10 overflow-hidden rounded-lg">
                <BrandingPanel />
              </div>

              <p className="bg-[#b5893a]/5 p-8 border-r-2 border-[#b5893a] text-base md:text-lg italic">"Branding is not the story you tell about your product. It is the philosophy your product enforces on the world."</p>
            </div>
          </section>

          {/* Pillar 06 */}
          <section data-pillar="06" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#b5893a]">Pillar 06</span>
              <h3 className="text-4xl md:text-6xl font-light italic">UX/CX</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">The emergent property of an intelligent clienting system</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>The customer does not leave your site because the checkout was slow. The customer leaves because they reached the end of the page and still felt uncertain. Not about the product. About themselves. <span className="italic">Is this me? Am I the kind of person who wears this?</span></p>
              <p>When Authority, Persona, Presence, Insights, and Branding are all working — the UX resolves itself. Not because you optimized the button. Because there is no longer any friction between the customer and a confident decision.</p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#b5893a]/10 overflow-hidden rounded-lg">
                <UXPanel />
              </div>

              <p className="bg-[#b5893a]/5 p-8 border-r-2 border-[#b5893a] text-base md:text-lg italic">"The best DTC experience is invisible. The customer moves through it like they have always known it. They feel, at the end, not that they were sold to — but that they arrived somewhere they were always going."</p>
            </div>
          </section>

        </div>

        {/* Right Column: Demo Panels (Sticky) */}
        <div className="hidden lg:block lg:w-[55%]">
          <div className="sticky top-[10vh] h-[80vh] flex flex-col justify-center">
            <DemoShell activePillar={activePillar}>
              {pillars.find(p => p.id === activePillar)?.component}
            </DemoShell>

            <div className="mt-8 flex justify-between items-center px-6 font-mono text-[0.6rem] uppercase tracking-widest opacity-30">
              <span>PILLAR_{activePillar}</span>
              <div className="flex gap-3">
                {pillars.map(p => (
                  <div key={p.id} className={`w-1 h-1 rounded-full transition-all duration-500 ${activePillar === p.id ? 'bg-[#b5893a] scale-150' : 'bg-[#1c1713] opacity-20'}`} />
                ))}
              </div>
              <span>DEMO_V2.2</span>
            </div>
          </div>
        </div>

      </div>

      {/* Conclusion */}
      <section className="py-64 px-8 bg-[#0a0907] text-[#faf7f2] text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.5em] text-[#b5893a] mb-12 block">Conclusion</span>
          <h2 className="text-4xl md:text-7xl font-light italic mb-16 leading-tight text-balance">
            "The customer who lands on a HexaDON-built experience does not feel sold to. They feel <span className="text-[#b5893a]">found</span>."
          </h2>
          <div className="h-24 w-px bg-gradient-to-b from-[#b5893a] to-transparent mx-auto mb-16"></div>
          <p className="text-xl md:text-2xl font-light opacity-60 mb-20 max-w-2xl mx-auto">
            The question is not whether you need this. The question is what it costs you every day you build without it.
          </p>
          <button className="px-12 py-6 bg-[#b5893a] text-[#0a0907] font-mono text-sm uppercase tracking-[0.2em] hover:bg-[#faf7f2] transition-all duration-500">
            Book a Strategy Call
          </button>
        </motion.div>
      </section>

      <footer className="py-12 px-8 border-t border-[#e8dfd0] flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 font-mono text-[0.6rem] uppercase tracking-widest">
        <div>Aditya & Aditya — Clienting Infrastructure</div>
        <div className="flex gap-8">
          <span>adityaandaditya.tech</span>
          <span>hello@adityaandaditya.tech</span>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --sillage-black: #0a0907;
          --sillage-ink: #1c1713;
          --sillage-cream: #f2ece0;
          --sillage-bone: #e8dfd0;
          --sillage-gold: #b5893a;
          --sillage-gold-lt: #d4aa60;
          --sillage-mist: #c8c0b4;
          --sillage-white: #faf7f2;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .font-display {
          font-family: var(--font-libre-baskerville), serif;
        }
      `}</style>
    </div>
  );
}
