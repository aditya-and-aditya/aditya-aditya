"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const DEEP_BLUE = '#092d60';
const ACCENT_CYAN = '#37a8b1';

// Cinematic Fade-in for text blocks
const FadeInText = ({ children, delay = 0, yOffset = 40 }: { children: React.ReactNode, delay?: number, yOffset?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

// Reusable animated feature card for the new concepts
const InsightCard = ({ title, children, delay = 0 }: { title: string, children: React.ReactNode, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-[#07244d]/60 p-8 shadow-xl backdrop-blur-md transition-all hover:border-[#37a8b1]/50 hover:bg-[#0c3b7a]/40"
  >
    <div className="flex items-center gap-3">
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT_CYAN }} />
      <h3 className="font-serif text-xl font-medium text-white">{title}</h3>
    </div>
    <div className="text-base font-light leading-relaxed text-slate-300">
      {children}
    </div>
  </motion.div>
);

export default function CartThatUnderstoodHer() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const visualInnerY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const quoteX = useTransform(scrollYProgress, [0.3, 0.7], ["-2%", "2%"]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden selection:bg-[#37a8b1] selection:text-[#092d60]"
      style={{ backgroundColor: DEEP_BLUE, color: '#e2e8f0', fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 origin-left"
        style={{ scaleX, backgroundColor: ACCENT_CYAN }}
      />

      {/* Textures and Orbs */}
      <div 
        className="pointer-events-none fixed inset-0 z-40 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")` }}
      />
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ y: backgroundY, backgroundImage: `radial-gradient(circle at 50% 50%, ${ACCENT_CYAN} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      />
      <motion.div 
        className="absolute top-[20%] left-[10%] z-0 h-64 w-64 rounded-full bg-[#37a8b1] opacity-5 blur-[120px]"
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* HERO SECTION */}
      <motion.header 
        style={{ y: heroTextY, opacity: heroOpacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-16 md:pt-48"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.25em]" style={{ color: ACCENT_CYAN }}
        >
          <span className="h-px w-8" style={{ backgroundColor: ACCENT_CYAN }}></span>
          Essay · AI & Design
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-8 font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          The Cart That <em className="font-style-italic font-light" style={{ color: ACCENT_CYAN }}>Understood</em> Her
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
          className="mb-12 max-w-2xl text-xl font-light leading-relaxed text-slate-300"
        >
          A story about the quiet revolution happening at the intersection of artificial intelligence and the online shopping experience — and why it matters more than we think.
        </motion.p>
      </motion.header>

      {/* HERO VISUAL */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-20">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }} animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-lg bg-[#051a3a] shadow-2xl border border-slate-800"
        >
          <motion.div style={{ y: visualInnerY }} className="absolute inset-[-20%] h-[140%] w-full">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#0c3b7a] via-[#051a3a] to-[#051a3a] opacity-80"></div>
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-[#092d60] via-transparent to-transparent opacity-90"></div>
          <div className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full border border-[#37a8b1]/50 backdrop-blur-sm">
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute h-16 w-16 rounded-full border border-[#37a8b1]" />
            <span style={{ color: ACCENT_CYAN }} className="text-2xl drop-shadow-[0_0_8px_rgba(55,168,177,0.8)]">✦</span>
          </div>
        </motion.div>
      </div>

      {/* ARTICLE BODY */}
      <article className="relative z-10 mx-auto max-w-3xl px-6 pb-32 text-lg font-light leading-loose text-slate-200">
        
        {/* PART ONE */}
        <FadeInText>
          <p className="mb-8">It's 11:47 PM on a Tuesday. Priya has a wedding to attend in nine days — her closest college friend's — and she still has nothing to wear.</p>
          <p className="mb-8">She opens her laptop. The familiar white rectangle of a shopping homepage glows back at her. She types "ethnic wear for wedding" into the search bar and hits enter. 4,312 results. She adds a filter: her size. 3,890 results. She adds another: under ₹4,000. 2,100 results. She sorts by "most popular." She scrolls. She sighs. She closes the tab.</p>
        </FadeInText>

        <FadeInText>
          <h2 className="mb-6 mt-16 font-serif text-3xl font-bold md:text-4xl text-white">
            <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.2em]" style={{ color: ACCENT_CYAN }}>Part One</span>
            The Problem Was Never the Products
          </h2>
          <p className="mb-8">Online retail has always had an abundance problem masquerading as a discovery problem. The inventory is there. The options exist. What's broken is the bridge between what a person needs and what the platform surfaces.</p>
        </FadeInText>

        <FadeInText>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }} className="my-12 rounded-r-md border-l-4 bg-[#0c3b7a]/50 p-8 italic shadow-xl backdrop-blur-md" style={{ borderColor: ACCENT_CYAN }}>
            <span className="mb-4 block font-sans text-xs font-bold uppercase not-italic tracking-widest" style={{ color: ACCENT_CYAN }}>Conversational Commerce Reimagined</span>
            <p className="mb-4 text-slate-200">Now imagine Priya opens the same website, but this time a small prompt appears: <em style={{ color: ACCENT_CYAN }}>"Tell us what you're shopping for."</em> She types: "A wedding in Jaipur next Saturday. Outdoor evening venue. I want to look Indian but not too traditional. My budget is around ₹3,500."</p>
            <p className="text-slate-200">Instead of wrestling with filters, the system handles the complexity. The page reorganises itself around her. Not 2,000 results — twenty. All in her size. All within budget. She adds one to the cart in under four minutes.</p>
          </motion.div>
        </FadeInText>

        <div className="overflow-hidden">
          <motion.div style={{ x: quoteX }} className="my-20 border-y border-slate-800 py-12">
            <blockquote className="font-serif text-2xl italic leading-relaxed text-white md:text-3xl">
              "The shift from browse-and-filter to natural language search is a massive UX upgrade for users who don't know exact product names or categories."
            </blockquote>
          </motion.div>
        </div>

        {/* PART TWO */}
        <FadeInText>
          <h2 className="mb-6 mt-16 font-serif text-3xl font-bold md:text-4xl text-white">
            <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.2em]" style={{ color: ACCENT_CYAN }}>Part Two</span>
            The Interface That Listens
          </h2>
          <p className="mb-8">The most interesting design question in e-commerce right now isn't "how do we show more products?" It's "how do we show fewer — but better?" When users stop querying a database and start having a conversation, the entire information architecture has to change.</p>
        </FadeInText>

        <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <InsightCard title="Beyond 'You Might Also Like'" delay={0.1}>
            Right now most platforms do basic suggestions, but AI can go much deeper. It understands context—time of day, occasion, budget signals—and adapts the <em>entire interface</em>, not just the product carousel. Imagine a homepage that genuinely restructures itself based on what you're likely doing right now.
          </InsightCard>
          
          <InsightCard title="The Multimodal Reality" delay={0.2}>
            AI lets users search by uploading a photo, sketching an idea, or combining image and text ("find something like this but in blue"). This removes a massive friction point. Pinterest and Google Lens are early versions, but the next generation of precise, multimodal search is what will truly bridge the gap between imagination and inventory.
          </InsightCard>
        </div>

        

        {/* PART THREE */}
        <FadeInText>
          <h2 className="mb-6 mt-20 font-serif text-3xl font-bold md:text-4xl text-white">
            <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.2em]" style={{ color: ACCENT_CYAN }}>Part Three</span>
            The AI as an Advocate
          </h2>
          <p className="mb-8">If Part Two is about finding the product, Part Three is about what happens next. The true test of AI in UX is whether it can transition from a helpful librarian to a trusted advisor.</p>
        </FadeInText>

        

        <FadeInText delay={0.1}>
          <div className="my-10 space-y-8 pl-6 border-l-2 border-slate-700">
            <div>
              <strong className="text-xl font-medium text-white" style={{ color: ACCENT_CYAN }}>Reducing Decision Fatigue</strong>
              <p className="mt-2 text-slate-300">One underexplored area is AI as a genuine decision aide. Not just showing options, but intelligently narrowing them down and explaining trade-offs in plain language. This could dramatically improve conversion while actually serving the user better.</p>
            </div>
            <div>
              <strong className="text-xl font-medium text-white" style={{ color: ACCENT_CYAN }}>The Post-Purchase UX</strong>
              <p className="mt-2 text-slate-300">Most brands drop the ball after checkout. AI can improve the experience after buying too—proactive updates, smart return assistance, and predicting issues before they happen.</p>
            </div>
          </div>
        </FadeInText>

        {/* EPILOGUE */}
        <FadeInText>
           <h2 className="mb-6 mt-24 font-serif text-3xl font-bold md:text-4xl text-white">
            <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.2em]" style={{ color: ACCENT_CYAN }}>Epilogue</span>
            What We're Really Building
          </h2>
          <p className="mb-8">A big UX challenge looming over all of this is that AI-driven personalization can easily feel manipulative or opaque. The best implementations will be ones that are transparent about <em>why</em> something is being recommended and give users genuine control—that's a real design problem worth solving.</p>
          <p className="mb-8">The confluence is most powerful when AI handles complexity invisibly, making the experience feel effortless rather than automated. The risk is when it prioritizes conversion metrics over actual user needs, which inevitably erodes trust over time.</p>
          <p className="mb-8 font-medium text-white drop-shadow-sm">The cart that understood her. That's the whole ambition, really. Everything else is just engineering.</p>
        </FadeInText>

      </article>

      {/* FOOTER */}
      <footer className="relative z-10 mx-auto max-w-4xl border-t border-slate-800 px-6 py-12">
        <FadeInText>
          <div className="flex flex-wrap gap-3">
            {['AI', 'UX Design', 'Conversational Commerce', 'Multimodal Search', 'Trust & Safety'].map((tag, i) => (
              <motion.span 
                key={tag} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded border border-slate-700 px-3 py-1 text-xs uppercase tracking-widest text-slate-400 hover:border-[#37a8b1] hover:text-[#37a8b1] transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </FadeInText>
      </footer>
    </div>
  );
}