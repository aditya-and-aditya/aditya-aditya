'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Cormorant_Garamond, DM_Sans, Cinzel } from 'next/font/google';
import DemoShell from './jewel-intelligence-components/DemoShell';
import AuthorityPanel from './jewel-intelligence-components/AuthorityPanel';
import PersonaPanel from './jewel-intelligence-components/PersonaPanel';
import PresencePanel from './jewel-intelligence-components/PresencePanel';
import InsightsPanel from './jewel-intelligence-components/InsightsPanel';
import BrandingPanel from './jewel-intelligence-components/BrandingPanel';
import UXPanel from './jewel-intelligence-components/UXPanel';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans'
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel'
});

const pillars = [
  { id: 'authority', num: '01', title: 'Authority', component: <AuthorityPanel />,
    subhead: "Prove it. Protect it. Keep it forever.",
    body: "Every piece carries a provenance card and a lifetime service history — trust that sells.",
    features: [
      { term: "The Piece Registry", desc: "Permanent digital identity for every SKU." },
      { term: "Knowledge Cards", desc: "Gemstone grading and care advice in the profile." },
      { term: "The Service Ledger", desc: "Automated reminders for maintenance and warranty." },
      { term: "Authenticity Workflows", desc: "Scan and upload certificates at point of sale." }
    ],
    kpis: ["% disputes resolved", "Service revenue", "Upload rate"]
  },
  { id: 'persona', num: '02', title: 'Persona', component: <PersonaPanel />,
    subhead: "Remember them like family.",
    body: "One profile, every generation — no re-asking, no awkward sizing.",
    features: [
      { term: "The Golden Profile", desc: "Contact, family graph, and lifetime spend in one record." },
      { term: "Persona Buckets", desc: "Automatic classification: Wedding, Investor, Gifter, Collector." },
      { term: "Style DNA", desc: "Stores finger sizes, stone shapes, and aesthetic preferences." },
      { term: "Family Accounts", desc: "Connected profiles for coordinated family registries." }
    ],
    kpis: ["Upsell %", "Time saved", "Registry conv."]
  },
  { id: 'presence', num: '03', title: 'Presence', component: <PresencePanel />,
    subhead: "One conversation, every channel.",
    body: "From DM to yes — the context never dies.",
    features: [
      { term: "Omnichannel Timeline", desc: "Stitches web, Instagram, WhatsApp, and store visits." },
      { term: "WhatsApp Business", desc: "Centralized, branded, and trackable conversations." },
      { term: "Offline-First Tablet", desc: "Complete sales even when the network fails." },
      { term: "Event Flows", desc: "Capture RSVPs directly into the CRM." }
    ],
    kpis: ["Response time", "Social to Store", "Missed leads"]
  },
  { id: 'insights', num: '04', title: 'Insights', component: <InsightsPanel />,
    subhead: "Don't guess. Predict.",
    body: "Know who's buying, what they want, and the exact day to call.",
    features: [
      { term: "Occasion Engine", desc: "Turns anniversaries into automated campaign triggers." },
      { term: "Propensity Scoring", desc: "ML-ranked lists of likely buyers, ready to act on." },
      { term: "Tray Analytics", desc: "Reveals which trays close and which associates convert." },
      { term: "Owner Dashboard", desc: "AOV, repeat rate, and salesperson performance." }
    ],
    kpis: ["Pred. vs Actual", "Tray to Sale", "LTV by Bucket"]
  },
  { id: 'branding', num: '05', title: 'Branding', component: <BrandingPanel />,
    subhead: "Everything feels premium.",
    body: "Branded touchpoints that convert curiosity into pride.",
    features: [
      { term: "Branded Templates", desc: "Consistency across WhatsApp, e-receipts, and invites." },
      { term: "White-Glove Workflows", desc: "VIP previews and private showroom bookings." },
      { term: "Digital Artefacts", desc: "Branded digital certificates tied to POS." },
      { term: "Experience Automation", desc: "Pre-visit SMS and milestone gift triggers." }
    ],
    kpis: ["Open/Reply rate", "RSVP Conv.", "Post-purchase NPS"]
  },
  { id: 'ux', num: '06', title: 'UX / CX', component: <UXPanel />,
    subhead: "Prepare. Present. Close.",
    body: "An associate opens a profile and everything is already ahead of them.",
    features: [
      { term: "Try-Tray Workflow", desc: "Prepare curated trays before the customer arrives." },
      { term: "One-Tap Checkout", desc: "Complete sale and dispatch certificate in one motion." },
      { term: "Aftercare Automation", desc: "Handles insurance renewal and check-in alerts." },
      { term: "VIP Tier Experiences", desc: "Early access and private follow-ups for top tier." }
    ],
    kpis: ["Walk-in Conv.", "AOV by Cohort", "Speed to Sale"]
  }
];

export default function JewelIntelligence() {
  const [activePillar, setActivePillar] = useState(pillars[0].id);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActivePillar(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0% -40% 0%' });

    pillars.forEach(p => {
      const el = document.getElementById(p.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${cormorant.variable} ${dmSans.variable} ${cinzel.variable} bg-[#0e0c13] text-[#f2ece0] selection:bg-[#c9a84c]/30 selection:text-[#f2ece0] transition-colors duration-500`}>
      {/* Grain Overlay */}
      <div className="grain fixed inset-0 pointer-events-none z-[999] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      {/* Scroll Progress Track */}
      <div className="scroll-track fixed left-8 top-1/2 -translate-y-1/2 w-[1px] h-40 bg-[#c9a84c]/10 z-[100] hidden md:block">
        <motion.div
          className="scroll-fill w-full bg-[#c9a84c] origin-top"
          style={{ height: '100%', scaleY }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[110] px-12 py-8 flex justify-between items-center backdrop-blur-md bg-[#0e0c13]/50 border-b border-[#c9a84c]/10">
        <span className="font-cinzel text-xl tracking-[0.3em] text-[#c9a84c]">JEWEL INTELLIGENCE</span>
        <div className="hidden lg:flex gap-8">
          {pillars.map(p => (
            <button
              key={p.id}
              onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`text-[0.6rem] uppercase tracking-[0.3em] font-sans transition-all duration-300 ${activePillar === p.id ? 'text-[#c9a84c]' : 'text-[#f2ece0]/40 hover:text-[#f2ece0]'}`}
            >
              {p.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
        <div className="hero__ring absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none perspective-[1000px]">
           {[1, 2, 3].map((i) => (
             <motion.div
               key={i}
               animate={{ rotateX: [0, 360], rotateY: [0, i * 120], rotateZ: [0, 360] }}
               transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
               className="ring__orbit absolute w-[500px] h-[500px] border border-[#c9a84c] rounded-full"
               style={{ opacity: 0.6 - i * 0.1 }}
             />
           ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-center z-10 max-w-4xl"
        >
          <span className="font-sans text-[0.7rem] uppercase tracking-[0.8em] text-[#c9a84c] mb-12 block">Product Case Study</span>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-12 tracking-tighter text-white">
            Jewel Intelligence
          </h1>
          <p className="text-xl md:text-2xl font-sans font-light opacity-60 italic max-w-2xl mx-auto">
            "Every customer feels like your only customer."
          </p>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="mt-24 opacity-40"
          >
            <div className="w-px h-16 bg-gradient-to-b from-[#c9a84c] to-transparent mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Pillars */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
        {pillars.map((p, idx) => (
          <section
            key={p.id}
            id={p.id}
            className={`ji-section min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center py-32 ${idx % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}
          >
            {/* Copy Column */}
            <div className={`ji-section__copy space-y-12 ${idx % 2 !== 0 ? 'lg:[direction:ltr]' : ''}`}>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <span className="pillar-label font-cinzel text-[#c9a84c] text-2xl tracking-widest">{p.num} — {p.title}</span>
                </div>

                <h2 className="headline text-4xl md:text-6xl font-serif italic tracking-tight text-white leading-tight">
                   {p.subhead}
                </h2>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="gold-rule h-px bg-[#c9a84c]/30"
                />
              </div>

              <div className="space-y-12">
                <p className="body-copy text-xl font-sans font-light leading-relaxed opacity-60">
                   {p.body}
                </p>

                <div className="feature-list space-y-6">
                  {p.features.map((f, fi) => (
                    <motion.div
                      key={fi}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + fi * 0.1 }}
                      className="flex flex-col gap-1"
                    >
                      <span className="font-sans font-bold text-[#c9a84c] text-sm uppercase tracking-widest">{f.term}</span>
                      <span className="font-sans font-light opacity-60 text-lg leading-relaxed">{f.desc}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="kpi-row flex flex-wrap gap-4 pt-4">
                  {p.kpis.map((k, ki) => (
                    <span key={ki} className="kpi-chip px-5 py-2 border border-[#c9a84c]/20 rounded-full font-sans text-[0.6rem] uppercase tracking-[0.2em] text-[#c9a84c] bg-[#c9a84c]/5">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Column */}
            <div className={`ji-section__demo h-[650px] lg:h-[750px] w-full ${idx % 2 !== 0 ? 'lg:[direction:ltr]' : ''}`}>
               <DemoShell title={`${p.title} Demo`}>
                  {p.component}
               </DemoShell>
            </div>
          </section>
        ))}
      </div>

      {/* Footer / Conclusion */}
      <section className="py-64 px-8 border-t border-[#c9a84c]/10 text-center bg-[#0a0907]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-16"
        >
          <span className="font-sans text-[0.7rem] uppercase tracking-[0.8em] text-[#c9a84c] block">Conclusion</span>
          <h2 className="text-5xl md:text-8xl font-serif italic leading-tight text-white">
            "Trust is the currency. Jewel Intelligence is the vault."
          </h2>
          <div className="h-px w-32 bg-[#c9a84c]/40 mx-auto" />
          <button className="px-12 py-6 bg-[#c9a84c] text-[#0e0c13] font-sans text-xs uppercase tracking-[0.5em] font-bold hover:bg-white transition-all duration-700 rounded-sm">
            Scale Your Relationship
          </button>
        </motion.div>
      </section>

      <footer className="py-16 px-12 border-t border-[#c9a84c]/5 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30 font-sans text-[0.6rem] uppercase tracking-[0.4em]">
        <div>Aditya & Aditya — Jewel Intelligence Architecture</div>
        <div className="flex gap-12">
          <span>adityaandaditya.tech</span>
          <span>hello@adityaandaditya.tech</span>
        </div>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
