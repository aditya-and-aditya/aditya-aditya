'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Cormorant_Garamond, DM_Mono } from 'next/font/google';
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
    <div className={`${cormorant.variable} ${dmMono.variable} font-serif bg-[#f5f0e8] text-[#1a1410] selection:bg-[#c8832a]/20 selection:text-[#1a1410]`}>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-1 origin-left bg-[#c8832a]"
        style={{ scaleX }}
      />

      <section className="min-h-screen flex flex-col items-center justify-center p-8 border-b border-[#e8e2d8]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl"
        >
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.5em] text-[#c8832a] mb-8 block">Case Study + Spec</span>
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
          </div>
        </motion.div>
      </section>

      <section className="py-32 px-8 max-w-5xl mx-auto border-b border-[#e8e2d8]">
        <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#c8832a] mb-12">Part One: The Wound</h2>
        <div className="space-y-12 text-xl md:text-2xl font-light leading-relaxed">
          <p>You removed the middleman. You own the channel. You own the margin. You own the data. You did everything the playbook told you to do — and you're still looking at a 68% cart abandonment rate.</p>
          <p className="border-l-2 border-[#c8832a] pl-8 italic">"The middleman you removed wasn't just a distributor. He was a translator."</p>
          <p>In every luxury department store, there was a human being who read the customer, narrated the product, and converted hesitation into desire. She didn't sell fragrance. She sold a version of yourself you didn't know you wanted to be yet.</p>
          <p>You replaced her with a product page. A product page with a note pyramid that reads like a grocery receipt. That is not a product page. That is a label on a bottle that is pointing at itself.</p>
        </div>
      </section>

      <div ref={containerRef} className="relative flex flex-col lg:flex-row max-w-[1600px] mx-auto px-8 py-32 gap-16">

        <div className="w-full lg:w-[55%] space-y-48 pb-[50vh]">

          <section data-pillar="01" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#c8832a]">Pillar 01</span>
              <h3 className="text-4xl md:text-6xl font-light italic">Authority</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">Making the customer experience both the art and the craft of the product</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>A fragrance note pyramid is not Authority. It is a taxonomy. It describes the chemical composition of an experience without ever creating one.</p>
              <p><span className="font-bold text-[#1a1410]">The Craft</span> is the technical story — the sourcing, the process, the precision. The Grasse rose harvested at 5am before the dew evaporates. The 47-step cold maceration that takes eleven weeks. Craft answers the rational objection.</p>
              <p><span className="font-bold text-[#1a1410]">The Art</span> is the sensory and emotional narrative — not what the fragrance is made of, but what it does to the world. Art answers the emotional equation: <span className="italic">Does this reflect who I am?</span></p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#c8832a]/10 overflow-hidden rounded-lg">
                <AuthorityPanel />
              </div>

              <p className="bg-[#c8832a]/5 p-8 border-r-2 border-[#c8832a] text-base md:text-lg">"The competitive moat Authority builds is not just loyalty — it is comparison-irrelevance. Once you have shown the customer the full depth of what they are buying, no other product page can compete."</p>
            </div>
          </section>

          <section data-pillar="02" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#c8832a]">Pillar 02</span>
              <h3 className="text-4xl md:text-6xl font-light italic">Persona</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">Removing cluelessness from intelligent systems</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>Every fragrance DTC store greets its customers the same way. All land on the same homepage. Three of them leave.</p>
              <p>Persona is not a customer segment. It is a real-time context engine that reads the signals a customer gives — unconsciously, through behavior — and configures the experience accordingly.</p>
              <p>The novice gets a guided sensory quiz that builds confidence. The expert gets depth, provenance, and technical precision. The gift buyer gets a structured path that removes decision paralysis. The loyal customer gets continuity.</p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#c8832a]/10 overflow-hidden rounded-lg">
                <PersonaPanel />
              </div>

              <p className="bg-[#c8832a]/5 p-8 border-r-2 border-[#c8832a] text-base md:text-lg">"Persona is not personalization. Personalization gives you more of what you already clicked on. Persona gives you the version of the experience that makes you feel understood."</p>
            </div>
          </section>

          <section data-pillar="03" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#c8832a]">Pillar 03</span>
              <h3 className="text-4xl md:text-6xl font-light italic">Presence</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">How clienting tech meets the world</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>Your customer did not arrive from nowhere. Four entry points. Four emotional states. Your homepage treats them identically.</p>
              <p>Presence is the principle that your experience should know where the customer came from and configure itself to honor that context. Not gimmick personalization, but something quieter: the tone, the depth, and the visual hierarchy shift to match the emotional temperature they arrived with.</p>
              <p>Social referral: seduce first. High-intent search: show authority first. Direct navigation: reward the return. Email list: close the loop.</p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#c8832a]/10 overflow-hidden rounded-lg">
                <PresencePanel />
              </div>

              <p className="bg-[#c8832a]/5 p-8 border-r-2 border-[#c8832a] text-base md:text-lg">"Presence is not about acquisition efficiency. It is about not wasting the emotional state the customer arrived in. They came with a temperature. Presence meets them at it."</p>
            </div>
          </section>

          <section data-pillar="04" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#c8832a]">Pillar 04</span>
              <h3 className="text-4xl md:text-6xl font-light italic">Insights</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">The intelligence of the entire customer base</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>You have more behavioral data than any market research firm could buy. Most DTC brands are sitting on this data and calling it "analytics."</p>
              <p>Insights is what happens when you treat that data as a living picture of collective desire — a map of what your entire customer base is moving toward before the market has named it.</p>
              <p>In fragrance, Insights reveals things no focus group would tell you. That the word "clean" in reviews correlates with returns. That customers who filter for "unisex" have a 40% higher lifetime value.</p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#c8832a]/10 overflow-hidden rounded-lg">
                <InsightsPanel />
              </div>

              <p className="bg-[#c8832a]/5 p-8 border-r-2 border-[#c8832a] text-base md:text-lg">"The market is always telegraphing where it's going. Insights is the infrastructure that lets you read the signal before it becomes a trend."</p>
            </div>
          </section>

          <section data-pillar="05" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#c8832a]">Pillar 05</span>
              <h3 className="text-4xl md:text-6xl font-light italic">Branding</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">Why an unbranded system is garbage</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>Branding is not aesthetics. Branding is a moral stance — a specific, defensible position about who this product is for and who it is not for.</p>
              <p><span className="italic">Sillage</span> — the fictional brand in this demo — is built on a single moral stance: <span className="font-bold">Fragrance is not an accessory. It is a practice.</span></p>
              <p>The homepage does not say "shop our collection." The cart does not say "items." The confirmation email does not say "your order is confirmed." Every word in the system is downstream of the philosophy.</p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#c8832a]/10 overflow-hidden rounded-lg">
                <BrandingPanel />
              </div>

              <p className="bg-[#c8832a]/5 p-8 border-r-2 border-[#c8832a] text-base md:text-lg">"Branding is not the story you tell about your product. It is the philosophy your product enforces on the world."</p>
            </div>
          </section>

          <section data-pillar="06" className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#c8832a]">Pillar 06</span>
              <h3 className="text-4xl md:text-6xl font-light italic">UX/CX</h3>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest opacity-40 italic">The emergent property of an intelligent clienting system</p>
            </div>
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>The customer does not leave your site because the checkout was slow. The customer leaves because they reached the end of the page and still felt uncertain.</p>
              <p>When Authority, Persona, Presence, Insights, and Branding are all working — the UX resolves itself. Not because you optimized the button. Because there is no longer any friction between the customer and a confident decision.</p>

              <div className="lg:hidden h-[500px] my-12 shadow-xl border border-[#c8832a]/10 overflow-hidden rounded-lg">
                <UXPanel />
              </div>

              <p className="bg-[#c8832a]/5 p-8 border-r-2 border-[#c8832a] text-base md:text-lg">"The best DTC experience is invisible. The customer moves through it like water — without resistance, without uncertainty, without the feeling that they are being sold to."</p>
            </div>
          </section>

        </div>

        <div className="hidden lg:block lg:w-[45%] h-fit sticky top-32">
          <DemoShell activePillar={activePillar}>
            {pillars.find(p => p.id === activePillar)?.component}
          </DemoShell>

          <div className="mt-8 flex justify-between items-center px-4 font-mono text-[0.6rem] uppercase tracking-widest opacity-30">
            <span>Pillar_{activePillar}</span>
            <div className="flex gap-2">
              {pillars.map(p => (
                <div key={p.id} className={`w-1.5 h-1.5 rounded-full ${activePillar === p.id ? 'bg-[#c8832a] opacity-100' : 'bg-[#1a1410] opacity-20'}`} />
              ))}
            </div>
            <span>Demo_V1.0</span>
          </div>
        </div>

      </div>

      <section className="py-64 px-8 bg-[#0e0c0a] text-[#faf8f4] text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.5em] text-[#c8832a] mb-12 block">Conclusion</span>
          <h2 className="text-4xl md:text-7xl font-light italic mb-16 leading-tight text-balance">
            "The customer who lands on a HexaDON-built experience does not feel sold to. They feel <span className="text-[#c8832a]">found</span>."
          </h2>
          <div className="h-24 w-px bg-gradient-to-b from-[#c8832a] to-transparent mx-auto mb-16"></div>
          <p className="text-xl md:text-2xl font-light opacity-60 mb-20 max-w-2xl mx-auto">
            The question is not whether you need this. The question is what it costs you every day you build without it.
          </p>
          <button className="px-12 py-6 bg-[#c8832a] text-[#0e0c0a] font-mono text-sm uppercase tracking-[0.2em] hover:bg-[#faf8f4] transition-all duration-500">
            Book a Strategy Call
          </button>
        </motion.div>
      </section>

      <footer className="py-12 px-8 border-t border-[#e8e2d8] flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 font-mono text-[0.6rem] uppercase tracking-widest">
        <div>Aditya & Aditya — Clienting Infrastructure</div>
        <div className="flex gap-8">
          <span>aditya-aditya.tech</span>
          <span>hello@aditya-aditya.tech</span>
        </div>
      </footer>

      <style jsx global>{`
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
