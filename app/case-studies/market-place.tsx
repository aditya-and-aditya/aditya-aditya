'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';

// --- DATA ---
const PILLARS = [
  {
    id: '01',
    name: 'Authority',
    marketplace: {
      headline: "Make your platform the place serious buyers trust — not just visit.",
      body: [
        "Your marketplace is a sea of listings. Most of them feel the same. Same photo format. Same bullet-point descriptions. Same star ratings that buyers have learned to distrust.",
        "You cannot fix this seller by seller. You need a platform-level mechanism that transforms listings into destinations — places where a buyer encounters genuine mastery, not just metadata.",
        "Authority is that mechanism. It is the infrastructure that allows every serious seller on your platform to surface the craft behind their product — the sourcing story, the engineering precision, the cultural lineage — in a way that makes the price feel like evidence, not obstacle."
      ],
      result: "Lower logistics costs from fewer returns. Higher seller satisfaction from better-converting listings.",
      metrics: [
        { label: "Returns", value: "-30%" },
        { label: "Seller CSAT", value: "+45%" },
        { label: "Trust Index", value: "9.2" }
      ]
    },
    retailer: {
      headline: "Make your price tag feel like proof, not a barrier.",
      body: [
        "You know your product better than anyone. You know the 21-day fermentation. The hand-finished buttonholes. The R-value of the insulation. The designer whose work inspired the silhouette.",
        "Your customer doesn't. And right now, your store isn't telling them. Authority is the framework for translating your expertise into customer conviction — not as marketing copy, but as evidence.",
        "When the craft is visible, comparison shopping stops. The customer isn't looking for a better option. They've already decided."
      ],
      result: "Customers who understand what they paid for don't return it. Authority turns your expertise into your most durable competitive asset.",
      metrics: [
        { label: "Returns", value: "-25%" },
        { label: "Word of Mouth", value: "↑↑" },
        { label: "Conviction", value: "100%" }
      ]
    }
  },
  {
    id: '02',
    name: 'Persona',
    marketplace: {
        headline: "Your platform treats every buyer the same. They notice — and they leave.",
        body: [
            "A first-time explorer. A power user. A gift-buyer with no category knowledge. An expert who just needs confirmation. All four land on the same interface. Three of them leave confused or bored.",
            "Persona is the intelligence layer that ends this — a real-time context engine that reads each buyer's intent, knowledge level, and constraints, and configures the experience accordingly.",
            "The novice gets guided discovery. The expert gets depth and precision. The returning buyer gets continuity — the platform remembers."
        ],
        result: "Buyers don't just find products. They feel found. It is the difference between a catalogue and a concierge.",
        metrics: [
            { label: "Bounce Rate", value: "-40%" },
            { label: "Loyalty", value: "+60%" },
            { label: "Churn", value: "↓" }
        ]
    },
    retailer: {
        headline: "Your store speaks to an average customer. Your best customers are anything but average.",
        body: [
            "Some customers walk in knowing exactly what they want. Others need to be led. Right now your store gives all of them the same experience. Persona fixes this at the system level.",
            "It identifies where each customer is in their relationship with your brand — and adjusts what they see, how it's framed, and how much they're guided versus trusted.",
            "The result is a store that feels, to every customer, like it was built specifically for them — because in the moment they're in it, it was."
        ],
        result: "Higher average order value from customers who feel understood. Lower churn from customers who feel remembered.",
        metrics: [
            { label: "AOV", value: "+22%" },
            { label: "Retention", value: "3.5x" },
            { label: "Relationship", value: "True" }
        ]
    }
  },
  {
    id: '03',
    name: 'Presence',
    marketplace: {
        headline: "Buyers enter from fifty different places. They all land in the same generic experience.",
        body: [
            "A buyer from Pinterest. A buyer from Google Shopping. A buyer from a text link. Four contexts. Four emotional states. Your marketplace shows all four the same homepage.",
            "Presence reads the entry point — source, search term, device, time — and configures what that buyer encounters: the tone, the depth, the visual hierarchy.",
            "High-intent search: show proof. Passive social referral: seduce first. Direct navigation: reward familiarity."
        ],
        result: "The same acquisition spend converts at a multiple. Presence is what makes paid acquisition stop feeling like a leaky bucket.",
        metrics: [
            { label: "ROAS", value: "2.4x" },
            { label: "CAC", value: "-18%" },
            { label: "Efficiency", value: "Max" }
        ]
    },
    retailer: {
        headline: "Your customer is in a different mood every time they arrive. Your store never knows.",
        body: [
            "A customer from an email campaign is primed. One from a social post is curious but uncommitted. Presence configures your retail experience based on the context your customer arrived in.",
            "The first thing they encounter is the right thing, not the default thing.",
            "Every channel stops being a separate strategy and becomes one coherent system where the customer never feels reset."
        ],
        result: "Every channel stops being a separate strategy and becomes one coherent system.",
        metrics: [
            { label: "OMNI-Lift", value: "+30%" },
            { label: "Friction", value: "Zero" },
            { label: "Context", value: "Deep" }
        ]
    }
  },
  {
    id: '04',
    name: 'Insights',
    marketplace: {
        headline: "Your marketplace generates more behavioral data than any research firm could buy. You're barely reading it.",
        body: [
            "Every session. Every search. Every abandoned cart. Every filter nobody uses. It's all there.",
            "Insights scales Persona to your full buyer population — turning behavioral truth into intelligence before the market moves.",
            "Which categories are about to explode. Which buyer cohorts are underserved. The platforms that feel culturally alive aren't lucky. They have Insights."
        ],
        result: "You stop chasing the market. You start shaping it.",
        metrics: [
            { label: "Trend Read", value: "Realtime" },
            { label: "Ops Loss", value: "-50%" },
            { label: "Intelligence", value: "100%" }
        ]
    },
    retailer: {
        headline: "Your next bestseller is already in your data. Insights finds it before the season ends.",
        body: [
            "Your customers are telling you things constantly — through what they buy, what they almost buy, what they share.",
            "Insights is the framework that translates customer behavior into product intelligence — which lines to expand, which to retire, where demand is shifting.",
            "A buying strategy that's led by behavioral truth rather than gut feel."
        ],
        result: "Fewer dead-stock mistakes. Faster reads on what's working.",
        metrics: [
            { label: "Sell-thru", value: "+15%" },
            { label: "Inventory", value: "Lean" },
            { label: "Decisions", value: "Logic" }
        ]
    }
  },
  {
    id: '05',
    name: 'Branding',
    marketplace: {
        headline: "Amazon exists. You need a philosophy, not just a platform.",
        body: [
            "You are not going to win on selection or price. You are going to win on who your marketplace is for — and the conviction with which you hold that position.",
            "Branding is the moral stance embedded into every default decision your platform makes — what you curate, how you write your empty states, what your homepage assumes about the reader.",
            "A marketplace with genuine branding attracts the right buyers. Identity lock-in is worth more than any marketing budget."
        ],
        result: "Sellers pay more to be on a platform that means something. Buyers pay more to buy from one.",
        metrics: [
            { label: "NPS", value: "85" },
            { label: "Referral", value: "+40%" },
            { label: "Identity", value: "Locked" }
        ]
    },
    retailer: {
        headline: "In a world of infinite options, your store needs a worldview — not just a vibe.",
        body: [
            "Anyone can have good products. What cannot be replicated is a philosophy — a set of beliefs about the world that is embedded into every decision your store makes.",
            "Branding in the HexaDON framework gives that philosophy structure — so it doesn't live in the founder's head but in the system itself.",
            "When your customers start quoting your language, wearing your worldview — you have a brand. Everything else is just a store."
        ],
        result: "Price elasticity. Customers who are loyal not to your product but to who they become when they choose it.",
        metrics: [
            { label: "Premium", value: "+30%" },
            { label: "Moat", value: "Durable" },
            { label: "Brand Equity", value: "High" }
        ]
    }
  },
  {
    id: '06',
    name: 'UX/CX',
    marketplace: {
        headline: "The best marketplace UX is invisible. It disappears into confidence.",
        body: [
            "Your UX team is optimizing the wrong things. Buyers are leaving because they feel uncertain — not because the button was the wrong shade.",
            "HexaDON's UX/CX pillar is what emerges when Authority, Persona, Presence, Insights, and Branding remove every friction between a buyer and a confident decision.",
            "The buyer moves through your marketplace like they've always known it."
        ],
        result: "Relationships at marketplace scale are the only moat that compounds without limit.",
        metrics: [
            { label: "CVR", value: "+12%" },
            { label: "UX Debt", value: "Zero" },
            { label: "Confidence", value: "Max" }
        ]
    },
    retailer: {
        headline: "Your customer's experience is not your website. It is the sum of every moment they spend with your brand.",
        body: [
            "The email. The packaging. The return process. Each of these is a moment of either friction or belonging.",
            "HexaDON's UX/CX pillar unifies these moments into a single coherent experience — one that is not designed but earned by every other pillar working in alignment.",
            "Consistency is what turns customers into clients — and clients into advocates."
        ],
        result: "A customer who feels the same quality of relationship whether opening their first order or their tenth.",
        metrics: [
            { label: "LTV", value: "5x" },
            { label: "Advocacy", value: "High" },
            { label: "Experience", value: "One" }
        ]
    }
  }
];

// --- COMPONENTS ---

const Hero = () => {
    return (
      <section className="min-h-screen bg-hex-ink text-white flex flex-col relative overflow-hidden">
        {/* Ghosted Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
            <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.03, scale: 1 }}
                transition={{ duration: 2 }}
                className="text-[25vw] font-bold font-playfair uppercase tracking-tighter text-white"
                style={{ WebkitTextStroke: '1px white', fill: 'transparent' }}
            >
                HexaDON
            </motion.span>
        </div>

        <div className="flex-1 grid md:grid-cols-2 relative z-10">
          {/* Marketplace Column */}
          <div className="p-8 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
               <span className="text-xs font-dm tracking-widest uppercase opacity-40 mb-4 block">The Marketplace</span>
               {["Ten thousand sellers.", "Five million products.", "A buyer who feels nothing."].map((line, i) => (
                  <motion.h2
                     key={i}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 + i * 0.2 }}
                     className="text-3xl md:text-5xl font-playfair italic leading-tight mb-2"
                  >
                    {line}
                  </motion.h2>
               ))}
            </motion.div>
          </div>

          {/* Retailer Column */}
          <div className="p-8 md:p-20 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
               <span className="text-xs font-dm tracking-widest uppercase opacity-40 mb-4 block">The Retailer</span>
               {["A curated collection.", "A real story.", "A customer who buys once — then disappears."].map((line, i) => (
                  <motion.h2
                     key={i}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 + i * 0.2 }}
                     className="text-3xl md:text-5xl font-playfair italic leading-tight mb-2"
                  >
                    {line}
                  </motion.h2>
               ))}
            </motion.div>
          </div>
        </div>

        {/* Shared Reveal */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2.2, duration: 1.2 }}
           className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        >
           <h1 className="text-3xl md:text-6xl lg:text-7xl font-playfair italic text-hex-gold text-center px-4 bg-hex-ink/90 py-12 w-full">
             Different scale. Different model. Same wound.
           </h1>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-[10px] font-dm tracking-widest uppercase">Scroll to Diagnose</span>
            <ChevronDown size={16} />
        </div>

        {/* Background Textures */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      </section>
    );
};

const WhatIsClienting = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0.1, 0.4], [1, 15]);
    const opacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.05]);
    const textOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.8, 0.9], [0, 1, 1, 0]);

    return (
        <section ref={container} className="h-[300vh] bg-hex-paper relative overflow-hidden">
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <motion.div style={{ scale, opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="text-hex-gold font-playfair italic font-bold">CLIENTING</span>
                </motion.div>

                <div className="relative z-10 max-w-2xl px-6 text-center">
                    <motion.div style={{ opacity: textOpacity }} className="space-y-16">
                        <div className="space-y-4">
                            <p className="text-2xl md:text-4xl font-playfair italic">"A transaction ends at checkout."</p>
                            <p className="text-2xl md:text-4xl font-playfair italic text-hex-gold">"A client begins there."</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-xl md:text-2xl">The businesses that dominate their category are not better at selling.</p>
                            <p className="text-xl md:text-2xl font-bold">They are better at clienting.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const PillarSection = ({ audience, setAudience }: { audience: 'marketplace' | 'retailer', setAudience: (a: 'marketplace' | 'retailer') => void }) => {
    const [activePillar, setActivePillar] = useState(0);

    return (
        <section className="bg-hex-paper text-hex-ink relative">
            <div className="flex flex-col lg:flex-row">
                {/* Sticky Left Panel */}
                <div className="lg:w-[35vw] lg:h-screen lg:sticky lg:top-0 p-8 md:p-16 flex flex-col justify-between border-r border-hex-border bg-hex-paper/95 backdrop-blur-md z-30">
                    <div className="flex flex-row lg:flex-col items-start gap-12 h-full">
                        {/* Vertical Dot Progress */}
                        <div className="hidden lg:flex flex-col gap-6 pt-2">
                            {PILLARS.map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`h-2 w-2 rounded-full transition-all duration-500 ${i === activePillar ? 'bg-hex-gold scale-150' : 'bg-hex-border'}`}
                                    animate={i === activePillar ? { boxShadow: "0 0 10px #c9a84c" } : { boxShadow: "none" }}
                                />
                            ))}
                        </div>

                        <div className="flex-1 space-y-8">
                            <div className="space-y-2">
                                <motion.span
                                    key={activePillar}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-6xl font-playfair italic text-hex-gold opacity-10 block"
                                >
                                    {PILLARS[activePillar].id}
                                </motion.span>
                                <motion.h2
                                    key={`${PILLARS[activePillar].name}-${audience}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-4xl md:text-5xl font-playfair italic font-bold leading-tight"
                                >
                                    {PILLARS[activePillar].name}
                                </motion.h2>
                            </div>

                            {/* Audience Toggle - Tab Style */}
                            <div className="flex bg-hex-ink/5 p-1 rounded-sm border border-hex-border w-fit">
                                <button
                                    onClick={() => setAudience('marketplace')}
                                    className={`px-4 py-1.5 text-[9px] font-dm tracking-[0.2em] uppercase transition-all ${audience === 'marketplace' ? 'bg-hex-ink text-hex-gold' : 'text-hex-ink/40 hover:text-hex-ink'}`}
                                >
                                    Marketplace
                                </button>
                                <button
                                    onClick={() => setAudience('retailer')}
                                    className={`px-4 py-1.5 text-[9px] font-dm tracking-[0.2em] uppercase transition-all ${audience === 'retailer' ? 'bg-hex-ink text-hex-gold' : 'text-hex-ink/40 hover:text-hex-ink'}`}
                                >
                                    Retailer
                                </button>
                            </div>

                            <p className="text-sm font-dm uppercase tracking-widest text-hex-gold/60">
                                PILLAR {PILLARS[activePillar].id} — FOR {audience}s
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:block text-[10px] font-dm tracking-widest uppercase opacity-30 mt-auto">
                        HexaDON Framework / Aditya & Aditya
                    </div>
                </div>

                {/* Scrollable Right Content */}
                <div className="flex-1">
                    {PILLARS.map((pillar, index) => (
                        <PillarContent
                            key={pillar.id}
                            pillar={pillar}
                            audience={audience}
                            onInView={() => setActivePillar(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const MetricItem = ({ value, label }: { value: string, label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (isInView) {
            const numeric = parseFloat(value.replace(/[^0-9.]/g, ''));
            if (isNaN(numeric)) {
                setDisplayValue(value);
                return;
            }

            let start = 0;
            const end = numeric;
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = progress * end;

                const prefix = value.startsWith('+') ? '+' : value.startsWith('-') ? '-' : '';
                const suffix = value.endsWith('%') ? '%' : value.endsWith('x') ? 'x' : '';

                setDisplayValue(`${prefix}${current.toFixed(current % 1 === 0 ? 0 : 1)}${suffix}`);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setDisplayValue(value);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, value]);

    return (
        <div ref={ref}>
            <div className="text-xl font-bold text-hex-gold font-dm">{displayValue}</div>
            <div className="text-[8px] font-dm tracking-tighter uppercase opacity-50">{label}</div>
        </div>
    );
};

const PillarContent = ({ pillar, audience, onInView }: { pillar: typeof PILLARS[0], audience: 'marketplace' | 'retailer', onInView: () => void }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });
    const content = pillar[audience];

    useEffect(() => {
        if (isInView) onInView();
    }, [isInView, onInView]);

    return (
        <div ref={ref} className="min-h-screen p-8 md:p-24 flex flex-col justify-center border-b border-hex-border relative overflow-hidden">
            <div className="absolute top-10 left-10 text-[12vw] font-playfair italic text-hex-gold opacity-[0.03] select-none pointer-events-none">
                {pillar.id}
            </div>

            <div className="max-w-xl relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${pillar.id}-${audience}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-playfair italic mb-8 leading-tight text-hex-rust">
                            {content.headline}
                        </h3>

                        <div className="space-y-6 text-lg text-hex-ink/80 leading-relaxed font-cormorant">
                            {content.body.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mt-12 p-8 bg-hex-ink text-white rounded-sm border-l-4 border-hex-gold shadow-2xl"
                        >
                            <span className="text-[10px] font-dm tracking-widest uppercase text-hex-gold block mb-4">
                                Your {audience} Result
                            </span>
                            <p className="text-xl font-playfair italic mb-8 opacity-90">
                                {content.result}
                            </p>

                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                                {content.metrics.map((m, i) => (
                                    <MetricItem key={i} value={m.value} label={m.label} />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

const Resolution = ({ audience }: { audience: 'marketplace' | 'retailer' }) => {
    return (
        <section className="min-h-screen bg-hex-slate text-white flex flex-col justify-center items-center p-8 md:p-24 text-center">
            <div className="max-w-3xl space-y-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={audience}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-xs font-dm tracking-widest uppercase text-hex-gold mb-8">The Conclusion</h2>
                        {audience === 'marketplace' ? (
                            <p className="text-2xl md:text-3xl font-playfair italic leading-relaxed">
                                The marketplace that wins is not the largest. It is not the cheapest.
                                It is the one where buyers feel — inexplicably, reliably — that this is where I belong.
                            </p>
                        ) : (
                            <p className="text-2xl md:text-3xl font-playfair italic leading-relaxed">
                                The retailer that wins is not the one with the most products.
                                It is the one whose customers come back because the experience of buying there is part of who they are.
                            </p>
                        )}
                        <p className="text-hex-gold/60">HexaDON builds that feeling into your platform's architecture.</p>
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-12 border-t border-white/10"
                >
                    <p className="text-3xl md:text-5xl font-playfair italic text-hex-gold leading-tight">
                        "The question is not whether you need this.
                        The question is what it costs you every day you build without it."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

const CTA = ({ audience }: { audience: 'marketplace' | 'retailer' }) => {
    return (
        <section className="min-h-screen bg-hex-paper flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
             {/* Pulse Background */}
             <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 2.5, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute w-96 h-96 border border-hex-gold rounded-full pointer-events-none"
             />

             <div className="relative z-10 max-w-4xl space-y-12">
                <h2 className="text-4xl md:text-6xl font-playfair italic">Ready to win?</h2>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a
                        href={`https://calendly.com/aditya-aditya/strategy?audience=marketplace`}
                        className={`group relative px-10 py-6 border-2 transition-all duration-500 ${audience === 'marketplace' ? 'bg-hex-ink text-hex-gold border-hex-ink scale-105' : 'border-hex-border hover:border-hex-ink'}`}
                    >
                        <div className="text-xs font-dm tracking-widest uppercase mb-2">For Marketplaces</div>
                        <div className="text-xl font-playfair italic flex items-center gap-2">
                            Book Strategy Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </a>

                    <a
                        href={`https://calendly.com/aditya-aditya/strategy?audience=retailer`}
                        className={`group relative px-10 py-6 border-2 transition-all duration-500 ${audience === 'retailer' ? 'bg-hex-ink text-hex-gold border-hex-ink scale-105' : 'border-hex-border hover:border-hex-ink'}`}
                    >
                        <div className="text-xs font-dm tracking-widest uppercase mb-2">For Retailers</div>
                        <div className="text-xl font-playfair italic flex items-center gap-2">
                            Book Strategy Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </a>
                </div>

                <div className="pt-20 opacity-40">
                    <p className="text-xs font-dm tracking-widest uppercase">Aditya & Aditya — Clienting Infrastructure</p>
                </div>
             </div>
        </section>
    );
}

export default function MarketPlaceCaseStudy() {
  const [audience, setAudience] = useState<'marketplace' | 'retailer'>('marketplace');

  return (
    <div className="min-h-screen bg-hex-paper text-hex-ink font-cormorant selection:bg-hex-gold/30 relative">
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-20 noise-bg" />

      <main>
        <Hero />
        <WhatIsClienting />
        <PillarSection audience={audience} setAudience={setAudience} />
        <Resolution audience={audience} />
        <CTA audience={audience} />
      </main>
    </div>
  );
}
