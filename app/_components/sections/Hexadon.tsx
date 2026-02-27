'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Hexagon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- CONSTANTS & DATA ---
const DEEP_BLUE = '#092d60';
const ACCENT_CYAN = '#37a8b1';

// 1. The Single Pillar Content
const PILLARS = [
  { id: 0, title: 'Authority', description: 'Making Customers Experience Both the Art and the Craft of Your Product.' },
  { id: 1, title: 'Persona', description: 'Removing Cluelessness from Intelligent Systems.' },
  { id: 2, title: 'Presence', description: 'How Clienting Tech Meets the World.' },
  { id: 3, title: 'Insights', description: 'The Intelligence of the Entire Customer Base.' },
  { id: 4, title: 'Branding', description: 'Why an Unbranded System Is Garbage.' },
  { id: 5, title: 'UX / Customer Experience', description: 'The Emergent Property of an Intelligent Clienting System.' },
];

// 2. The "Combined" Content (Synergies)
// Keys are sorted indices joined by comma (e.g., "0,1" means Pillar 0 and Pillar 1 are selected)
const COMBINATIONS: Record<string, { title: string; description: string }> = {
  // --- 6-WAY: THE SINGULARITY ---
  "0,1,2,3,4,5": {
    title: "The Sovereign Experience",
    description: "The ultimate state. Mastery, context, reception, scale, and story collapse into a single, unrepeatable behavioral surface. Competition becomes a category error."
  },

  // --- THE 5-WAY SYNERGIES (Exhaustive Set) ---
  "0,1,2,3,4": {
    title: "Sovereign Intelligence",
    description: "Complete strategic alignment of Mastery, Persona, Context, Scale, and Story — a fully loaded engine that simply needs a UX surface to ignite."
  },
  "0,1,2,3,5": {
    title: "The Adaptive Oracle",
    description: "Technically and contextually perfect UX that learns at scale. Functionally flawless, but feels like an alien utility — precise without ever being felt."
  },
  "0,1,2,4,5": {
    title: "The Personalized Monument",
    description: "A high-conviction, tailored world that feels solid and deeply personal. Without Insights, it cannot sense broad market shifts and gradually calcifies."
  },
  "0,1,3,4,5": {
    title: "The Strategic Advisor",
    description: "Deeply understood, authoritative, and on-brand. Without Presence, it fails to receive users correctly — forcing a cold reset at the very first doorway."
  },
  "0,2,3,4,5": {
    title: "The Authoritative Broadcast",
    description: "A masterful reception layer with scale and story. Without Persona, it treats the entire population as a single high-intent monolith — right for the crowd, wrong for anyone in it."
  },
  "1,2,3,4,5": {
    title: "The Empathetic Environment",
    description: "A warm, adaptive, and intelligent brand home. Without Authority, it earns trust through feeling rather than fact — and cannot survive the first hard question."
  },

  // --- 4-WAY COMBINATIONS (The 15 Unique Permutations) ---
  "0,1,2,3": { title: "The Logic Fortress", description: "Pure intelligence that maps the user, the moment, and the market with precision — but without Identity, it is a fortress no one wants to live in." },
  "0,1,2,4": { title: "The Trusted Guide", description: "A deeply personal, high-conviction expert arrival. Without Insights, it speaks with authority about a world that may have already moved on." },
  "0,1,2,5": { title: "The Fluid Mentor", description: "Technical mastery that adapts to the user's arrival and expertise in real time. A perfect teacher who never quite tells you who it is." },
  "0,1,3,4": { title: "The Market Authority", description: "Collective data positions individual mastery as the industry standard — making every competitor's offering feel like an earlier draft." },
  "0,1,3,5": { title: "The Smart Specialist", description: "An interface that draws from crowd intelligence to teach the individual with precision. Maximum efficiency, minimum soul." },
  "0,1,4,5": { title: "The Conviction Expert", description: "A tailored, branded surface that proves mastery and closes with confidence. Powerful, but navigating by a map it never updates." },
  "0,2,3,4": { title: "The Institutional Giant", description: "Masterful at reception, scale, and narrative. Without Persona, it commands respect from everyone and intimacy with no one." },
  "0,2,3,5": { title: "The Reactive Power", description: "Adapts its entry and interface to mass behavior with speed and authority. Fast, accurate, and unmistakably impersonal." },
  "0,2,4,5": { title: "The Intentional Entry", description: "Every entry point is a calibrated blend of technical proof and brand story. Impactful arrival — the journey beyond it doesn't yet exist." },
  "0,3,4,5": { title: "The Industry Standard", description: "The definitive, market-aware choice wrapped in a refined surface. Trusted by all, known by none." },
  "1,2,3,4": { title: "The Relationship Architect", description: "Built for long-term loyalty and a deep sense of belonging. Without Authority, it earns love but cannot justify the price tag." },
  "1,2,3,5": { title: "The Living Environment", description: "A space that holds your history, reads your present, and anticipates your next move. High empathy, low proof." },
  "1,2,4,5": { title: "The Persona Sanctuary", description: "A seamless, branded home that receives the user perfectly. Deeply welcoming — and completely blind to what the market is becoming." },
  "1,3,4,5": { title: "The Identity Engine", description: "Evolves the brand story in lockstep with the user's own identity. Deeply loyal — but cannot explain why the product is technically superior." },
  "2,3,4,5": { title: "The Market Mirror", description: "Reflects current culture and external trends with perfect fidelity. Maximally 'now' — and structurally unable to be anything else." },

  // --- 3-WAY COMBINATIONS (The 20 Unique Permutations) ---
  "0,1,2": { title: "The Contextual Expert", description: "Knows the craft, the person, and the doorway. The perfect concierge who never needs to be asked twice." },
  "0,1,3": { title: "The Validated Mentor", description: "Individual mastery backed by collective data — advice that feels personal and lands with market-grade credibility." },
  "0,1,4": { title: "The Philosophical Guide", description: "Technical depth meets personal recognition and brand conviction. Less product, more worldview." },
  "0,1,5": { title: "The Tailored Masterclass", description: "Teaches the craft at exactly the user's pace and depth — neither condescending nor overwhelming." },
  "0,2,3": { title: "The Authoritative Signal", description: "Technical mastery that arrives attuned to market context — proof delivered at exactly the right cultural frequency." },
  "0,2,4": { title: "The Sovereign Entry", description: "High-authority, high-conviction reception that asserts brand dominance from the first pixel." },
  "0,2,5": { title: "The Fluid Authority", description: "Technical depth that restructures its own visual hierarchy around the entry point — mastery that meets you where you are." },
  "0,3,4": { title: "The Industry Titan", description: "Market-leading mastery wrapped in a brand narrative robust enough to become the category's reference point." },
  "0,3,5": { title: "The Evidential Surface", description: "An interface that proves quality through behavior — scaled data rendered visible as design." },
  "0,4,5": { title: "The Premium Object", description: "The 'Apple' state: mastery and philosophy told through a surface so refined the craft becomes invisible." },
  "1,2,3": { title: "The Social Chameleon", description: "Reads the individual and their arrival context against the backdrop of collective trends — always in register." },
  "1,2,4": { title: "The Persona Welcome", description: "Receives the individual into the brand's world immediately — recognition before explanation." },
  "1,2,5": { title: "The Adaptive Greeting", description: "A UX that reconfigures around who you are and the path you traveled to get here." },
  "1,3,4": { title: "The Cohort Storyteller", description: "Uses market-wide behavioral data to tell the brand story in a language specific to each type of person." },
  "1,3,5": { title: "The Smart Assistant", description: "Draws from the crowd's collective navigation to smooth the individual's path — wisdom at scale, applied with precision." },
  "1,4,5": { title: "The Identity Mirror", description: "A branded surface that reflects the user's own values back at them — belonging engineered into every interaction." },
  "2,3,4": { title: "The Cultural Attaché", description: "Receives users from the open market into a brand narrative that feels not just credible, but current." },
  "2,3,5": { title: "The Trend Interface", description: "A UX surface that shifts based on referral origin and mass-market behavioral patterns — tuned to the moment." },
  "2,4,5": { title: "The Seamless Invite", description: "Brand story and UX converge at the entry point to manufacture a 'vibe' that feels inevitable rather than designed." },
  "3,4,5": { title: "The Evolutionary Brand", description: "The brand narrative is not published — it is grown, continuously reshaped by the behavior of the people inside it." },

  // --- 2-WAY COMBINATIONS (The Foundations) ---
  "0,1": {
    title: "The Expert Advisor",
    description: "Authority + Persona: Technical mastery aimed with precision. The system stops lecturing and starts advising — calibrated exactly to the depth the user's fluency requires."
  },
  "0,2": {
    title: "The Authoritative Arrival",
    description: "Authority + Presence: Competence is projected the moment the user lands, converting the entry point into an act of trust-building before a word is read."
  },
  "0,3": {
    title: "The Validated Standard",
    description: "Authority + Insights: Internal craft benchmarked against collective market behavior — proof that internal standards don't just meet expectations, they set them."
  },
  "0,4": {
    title: "The Incommensurable Moat",
    description: "Authority + Branding: Technical mastery reframed as a philosophy. The product is no longer a utility to be compared — it is a worldview to be adopted."
  },
  "0,5": {
    title: "The Transparent Craft",
    description: "Authority + UX: The interface becomes a lens into the product's mastery — using progressive disclosure to prove quality without ever triggering overwhelm."
  },
  "1,2": {
    title: "The Intuitive Recognition",
    description: "Persona + Presence: External context primes the internal model. The user feels recognized and at home before they have consciously registered where they are."
  },
  "1,3": {
    title: "The Learning Personalization",
    description: "Persona + Insights: Individual models refined by collective behavioral truth — learning from the many to serve the one with increasing precision."
  },
  "1,4": {
    title: "The Identity Match",
    description: "Persona + Branding: The user's specific values are mapped onto the brand's philosophy — not just recognition, but resonance."
  },
  "1,5": {
    title: "The Appropriate Interface",
    description: "Persona + UX: Complexity, tone, and depth recalibrate to the user's knowledge state — removing not just friction, but irrelevance."
  },
  "2,3": {
    title: "The Contextual Pulse",
    description: "Presence + Insights: Entry point trends across the entire base are monitored, allowing the system to anticipate the needs of incoming traffic before it arrives."
  },
  "2,4": {
    title: "The Brand Posture",
    description: "Presence + Branding: The brand's soul translated consistently across every context — the story remains coherent whether entry is via ad, referral, or cold search."
  },
  "2,5": {
    title: "The Fluid Transition",
    description: "Presence + UX: Layout and pace adapt to the user's origin, ensuring the move from external world to internal experience is seamless rather than jarring."
  },
  "3,4": {
    title: "The Evolutionary Narrative",
    description: "Insights + Branding: The brand story is kept alive by real-world behavioral data — a philosophy that evolves without ever losing its spine."
  },
  "3,5": {
    title: "The Anti-Fragile Surface",
    description: "Insights + UX: Friction doesn't accumulate — it's dissolved by aggregate intelligence, detected and corrected before any individual user thinks to report it."
  },
  "4,5": {
    title: "The Meaningful Interaction",
    description: "Branding + UX: Every interaction reinforces the story. Friction isn't removed — it's replaced with meaning, turning features into expressions of philosophy."
  }
};

// 3. Hexagon Coordinates
const HEX_POINTS = [
  { x: 50, y: 5 },   // Top
  { x: 90, y: 27 },  // Top Right
  { x: 90, y: 73 },  // Bottom Right
  { x: 50, y: 95 },  // Bottom
  { x: 10, y: 73 },  // Bottom Left
  { x: 10, y: 27 },  // Top Left
];

export default function ClientingTeaser() {
  // Start with EMPTY state
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  
  // Logic to determine what text to show
  const activeContent = useMemo(() => {
    // CASE 1: Empty State
    if (selectedIndices.length === 0) {
      return {
        id: 'intro',
        title: 'Explore the 6 Pillars',
        description: 'Select the points on the HexaDON to get to know a teaser about what we come up in the modern day online shopping experience and how they optimize themselves in combination.',
        isIntro: true
      };
    }

    // CASE 2: Single Selection
    if (selectedIndices.length === 1) {
      return PILLARS[selectedIndices[0]];
    }

    // CASE 3: Multiple Selections
    // Sort indices to match our key format (e.g., "0,1" not "1,0")
    const comboKey = [...selectedIndices].sort().join(',');

    // Check if we have a specific written synergy for this combo
    if (COMBINATIONS[comboKey]) {
      return { id: comboKey, ...COMBINATIONS[comboKey] };
    }

    // Fallback if no specific combo text exists: Generic Summary
    return {
      id: 'combo-generic',
      title: 'Compound Strategy',
      description: `Integrating ${selectedIndices.map(i => PILLARS[i].title).join(' + ')} creates a robust retention layer that outperforms isolated strategies.`
    };

  }, [selectedIndices]);

  const togglePoint = (index: number) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  return (
    <section className="relative py-12 overflow-hidden" style={{ backgroundColor: '#eff0ef' }}>
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-1/2 opacity-19 bg-linear-to-tr from-[#092d60] to-[#37a8b1]"  />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
          style={{ backgroundColor: DEEP_BLUE }}
        >
          <div className="flex flex-col lg:flex-row min-h-[500px]">
            
            {/* LEFT SIDE: Dynamic Text */}
            <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-20">
              <motion.div className="space-y-6">
                
                {/* Header Label */}
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase opacity-80" style={{ color: ACCENT_CYAN }}>
                  {activeContent.id === 'intro' ? <Sparkles className="w-4 h-4 animate-pulse" /> : <Hexagon className="w-4 h-4" />}
                  <span>{activeContent.id === 'intro' ? 'Clienting Hexagon' : 'Research Findings'}</span>
                </div>

                {/* Main Content Area */}
                <div className="min-h-[180px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeContent.id || activeContent.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                        {activeContent.title}
                      </h2>
                      <p className={`text-lg leading-relaxed ${activeContent.id === 'intro' ? 'text-white/60' : 'text-gray-300'}`}>
                        {activeContent.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Status Bar for Selected Points */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="text-sm text-gray-400">
                    {selectedIndices.length === 0 ? "Click nodes to activate:" : "Active Factors:"}
                  </div>
                  <div className="flex gap-2">
                    {PILLARS.map((p, i) => (
                      <div 
                        key={i}
                        onClick={() => togglePoint(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          selectedIndices.includes(i) ? 'scale-150' : 'bg-white/20 hover:bg-white/50'
                        }`}
                        style={{ backgroundColor: selectedIndices.includes(i) ? ACCENT_CYAN : undefined }}
                      />
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button 
                    asChild 
                    className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#092d60] transition-all"
                  >
                    <Link href="/HexaDON" className="flex items-center gap-2">
                      Read Full Analysis <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Interactive Hexagon */}
            <div className="lg:w-1/2 bg-black/20 p-8 md:p-12 flex items-center justify-center relative overflow-hidden group/canvas">
               
               {/* Ambient Glow */}
               <div className="absolute inset-0 bg-linear-to-tr from-[#37a8b1]/20 to-transparent opacity-50 pointer-events-none" />

               <div className="relative w-full max-w-md aspect-square select-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                    
                    {/* 1. Base Hexagon Wireframe */}
                    <polygon 
                      points={HEX_POINTS.map(p => `${p.x},${p.y}`).join(' ')}
                      fill="none"
                      stroke="white"
                      strokeOpacity="0.1"
                      strokeWidth="0.5"
                    />

                    {/* 2. Active Connections Lines */}
                    {selectedIndices.map((startIndex) => 
                      selectedIndices.map((endIndex) => {
                         if (startIndex >= endIndex) return null; 
                         return (
                           <motion.line
                             key={`${startIndex}-${endIndex}`}
                             initial={{ pathLength: 0, opacity: 0 }}
                             animate={{ pathLength: 1, opacity: 0.6 }}
                             x1={HEX_POINTS[startIndex].x}
                             y1={HEX_POINTS[startIndex].y}
                             x2={HEX_POINTS[endIndex].x}
                             y2={HEX_POINTS[endIndex].y}
                             stroke={ACCENT_CYAN}
                             strokeWidth="1" // Thicker lines for connections
                           />
                         );
                      })
                    )}

                    {/* 3. Interactive Nodes */}
                    {HEX_POINTS.map((point, index) => {
                      const isActive = selectedIndices.includes(index);
                      
                      return (
                        <g 
                          key={index} 
                          onClick={() => togglePoint(index)}
                          className="cursor-pointer group/node"
                        >
                          {/* Hover Target Area */}
                          <circle cx={point.x} cy={point.y} r="3" fill="transparent" />
                          
                          {/* Pulse Effect for Empty State */}
                          {selectedIndices.length === 0 && (
                             <motion.circle
                               cx={point.x} cy={point.y}
                               initial={{ r: 1.5, opacity: 0.5 }}
                               animate={{ r: [1.5, 4, 1.5], opacity: [0.5, 0, 0.5] }}
                               transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                               stroke="white"
                               strokeWidth="0.2"
                               fill="none"
                             />
                          )}

                          {/* Outer Ring */}
                          <motion.circle 
                            cx={point.x} 
                            cy={point.y} 
                            animate={{ 
                              r: isActive ? 4 : 1.5,
                              fillOpacity: isActive ? 0.3 : 0 
                            }}
                            fill={ACCENT_CYAN}
                            stroke={isActive ? ACCENT_CYAN : 'white'}
                            strokeOpacity={isActive ? 1 : 0.4}
                            strokeWidth={isActive ? 0.5 : 0.5}
                            className="transition-all duration-300"
                          />

                          {/* Inner Dot */}
                          <motion.circle 
                            cx={point.x} 
                            cy={point.y} 
                            r={isActive ? 2 : 0.5}
                            fill={isActive ? ACCENT_CYAN : 'white'}
                            className="group-hover/node:scale-150 transition-transform origin-center"
                          />
                        </g>
                      );
                    })}
                 </svg>

                 {/* Center Label inside Hexagon */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center transition-opacity duration-500" style={{ opacity: selectedIndices.length === 0 ? 0.3 : 1 }}>
                       <div className="text-4xl font-bold text-white/10 tracking-tighter">
                         {selectedIndices.length > 0 ? selectedIndices.length : '6'}
                       </div>
                       <div className="text-[10px] text-white/20 uppercase tracking-widest">
                         {selectedIndices.length > 0 ? 'Selected' : 'Pillars'}
                       </div>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
