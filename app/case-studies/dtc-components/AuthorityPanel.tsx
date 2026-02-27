'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const productionStages = [
  {
    id: "01",
    title: "THE PETRICHOR ACCORD",
    subtitle: "Proprietary synthesis. 3 years in development.",
    content: "Petrichor is not a natural material. It is a memory. The accord that opens No. 3 is a synthetic construction built to replicate the specific olfactory signature of limestone after the first drops of rain hit dry stone in summer. We worked on it for three years. Those eight minutes are the whole argument."
  },
  {
    id: "02",
    title: "IRIS ROOT EXTRACTION",
    subtitle: "Cold maceration. 11 weeks. Florentine orris.",
    content: "Orris root from Florence takes three years to mature in the ground before harvest. After harvest, it takes another eleven weeks of cold maceration to extract the irone — the compound that gives iris its powdered, almost bone-like quality. You cannot rush irone. Ours does not."
  },
  {
    id: "03",
    title: "VETIVER BOURBON",
    subtitle: "Hand-harvested, Réunion Island. 18-month soil ageing.",
    content: "Vetiver from Réunion Island is the only vetiver we use. The soil is volcanic. The roots go deeper than anywhere else — sometimes two metres — and the depth is what gives Réunion vetiver its particular character: dark without being heavy, earthy without being dirty. We age the raw material in soil for 18 months before extraction."
  },
  {
    id: "04",
    title: "COMPOSITION",
    subtitle: "Master blender: Serge Dumont, Grasse. 47 iterations.",
    content: "Serge Dumont works in silence. No mood boards, no marketing briefs. Only the raw materials and the memory of a specific light. He composes by subtraction, removing notes until only the truth remains."
  },
  {
    id: "05",
    title: "MATURATION",
    subtitle: "Rested in sealed oak vessels. 8 weeks post-blend.",
    content: "Time is our final ingredient. Every batch sits in oak vessels for eight weeks. This allows the molecules to bind and settle, ensuring the fragrance doesn't just sit on the skin, but lives with it."
  }
];

const sceneLines = [
  "The first cold hour after a long summer.",
  "Concrete still warm from a vanished sun.",
  "A library no one visits anymore.",
  "The shirt you left at someone else's apartment.",
  "Somewhere between arrival and belonging.",
  "The walk home from the last train."
];

const constellationNotes = [
  {
    name: "Petrichor",
    type: "the opening",
    duration: "0 – 8 min",
    x: 80, y: 80,
    poetic: "The memory of stone.",
    content: "The first eight minutes. A synthetic accord — the only one we use. Built to replicate limestone in summer rain. Gone before you realise it was there. That is the point."
  },
  {
    name: "Iris Root",
    type: "the body",
    duration: "1 – 5 hrs",
    x: 300, y: 60,
    poetic: "Powdered bone.",
    content: "The heart of the experience. Cold-macerated Florentine orris. It provides a structural, vertical quality that anchors the volatile petrichor."
  },
  {
    name: "Vetiver Bourbon",
    type: "the ghost",
    duration: "6 hrs → forever",
    x: 520, y: 100,
    poetic: "Volcanic earth.",
    content: "Dark without being heavy. The volcanic soil of Réunion Island gives this vetiver an earthed character that remains long after the other notes have evaporated."
  }
];

export default function AuthorityPanel() {
  const [layer, setLayer] = useState<'entry' | 'craft' | 'art'>('entry');
  const [expandedStage, setExpandedStage] = useState<string | null>(null);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [hoveredNote, setHoveredNote] = useState<number | null>(null);

  useEffect(() => {
    if (layer === 'art') {
      const interval = setInterval(() => {
        setSceneIndex(prev => (prev + 1) % sceneLines.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [layer]);

  return (
    <div className="h-full w-full relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: layer === 'craft' ? 'var(--sillage-cream)' : 'var(--sillage-black)' }}>

      <AnimatePresence mode="wait">
        {/* Layer 1: Entry */}
        {layer === 'entry' && (
          <motion.div
            key="entry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-serif text-[15vw] font-extralight text-[var(--sillage-white)] tracking-[0.3em] mb-4"
            >
              No. 3
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="font-serif italic text-3xl text-[var(--sillage-gold)] mb-8"
            >
              "Before Rain"
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              className="font-serif text-xl text-[var(--sillage-white)] opacity-70 mb-16"
            >
              The scent of a sky about to open.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
              className="flex gap-12 mt-auto"
            >
              <button
                onClick={() => setLayer('craft')}
                className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--sillage-gold)] border-b border-[var(--sillage-gold)] pb-1 hover:text-[var(--sillage-white)] hover:border-[var(--sillage-white)] transition-colors"
              >
                [ THE CRAFT ]
              </button>
              <button
                onClick={() => setLayer('art')}
                className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--sillage-gold)] border-b border-[var(--sillage-gold)] pb-1 hover:text-[var(--sillage-white)] hover:border-[var(--sillage-white)] transition-colors"
              >
                [ THE ART ]
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Layer 2: The Craft */}
        {layer === 'craft' && (
          <motion.div
            key="craft"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 p-8 flex flex-col overflow-y-auto no-scrollbar"
          >
            <div className="space-y-4 mb-12">
              {productionStages.map((stage) => (
                <div key={stage.id} className="border-t border-[var(--sillage-mist)]/30">
                  <button
                    onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
                    className="w-full text-left py-6 group"
                  >
                    <div className="font-mono text-[0.65rem] text-[var(--sillage-gold)] mb-2">{stage.id} ──</div>
                    <div className="font-serif text-lg text-[var(--sillage-ink)] mb-1">{stage.title}</div>
                    <div className="font-mono text-[0.7rem] text-[var(--sillage-mist)] uppercase tracking-tight">{stage.subtitle}</div>

                    <AnimatePresence>
                      {expandedStage === stage.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-6 font-serif italic text-sm leading-relaxed text-[var(--sillage-ink)]/80 max-w-lg">
                            {stage.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              ))}
              <div className="border-t border-[var(--sillage-mist)]/30 py-6">
                <div className="font-mono text-[0.65rem] text-[var(--sillage-gold)] mb-2">↓</div>
                <div className="font-serif text-lg">Bottled.</div>
              </div>
            </div>

            <div className="mt-auto pt-12 text-center">
              <div className="font-mono text-xl text-[var(--sillage-gold)] mb-2">23% concentration.</div>
              <div className="font-serif italic text-lg opacity-60 mb-8">Built for skin. Not for first impression.</div>
              <div className="flex justify-center gap-12 font-mono text-[0.65rem] uppercase tracking-widest text-[var(--sillage-mist)]">
                <button onClick={() => setLayer('entry')} className="hover:text-[var(--sillage-gold)] transition-colors">← Back to Entry</button>
                <button onClick={() => setLayer('art')} className="hover:text-[var(--sillage-gold)] transition-colors">Explore The Art →</button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Layer 3: The Art */}
        {layer === 'art' && (
          <motion.div
            key="art"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col p-12 overflow-hidden"
          >
            {/* Evaporation Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg width="100%" height="100%">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3">
                    <animate attributeName="seed" values="0;100" dur="8s" repeatCount="indefinite" />
                  </feTurbulence>
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>
            </div>

            {/* Scent Constellation */}
            <div className="relative flex-1 flex flex-col justify-center items-center">
              <svg width="600" height="200" viewBox="0 0 600 200" className="relative z-10 overflow-visible">
                <motion.path
                  d="M 80 80 C 180 20, 380 20, 520 100"
                  fill="none"
                  stroke="var(--sillage-mist)"
                  strokeWidth="0.5"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {constellationNotes.map((note, i) => (
                  <g key={note.name}>
                    <motion.circle
                      cx={note.x} cy={note.y} r="4"
                      fill="var(--sillage-gold)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.4 }}
                      onMouseEnter={() => setHoveredNote(i)}
                      onMouseLeave={() => setHoveredNote(null)}
                      className="cursor-pointer"
                    />
                    <motion.text
                      x={note.x} y={note.y + 24}
                      textAnchor="middle"
                      className="font-serif text-[1.1rem] fill-[var(--sillage-white)] opacity-80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.4 + 0.2 }}
                    >
                      {note.name}
                    </motion.text>
                    <motion.text
                      x={note.x} y={note.y + 42}
                      textAnchor="middle"
                      className="font-mono text-[0.6rem] fill-[var(--sillage-gold)] uppercase"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.4 + 0.3 }}
                    >
                      {note.duration}
                    </motion.text>
                    <motion.text
                      x={note.x} y={note.y + 58}
                      textAnchor="middle"
                      className="font-serif italic text-[0.9rem] fill-[var(--sillage-white)] opacity-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.4 + 0.4 }}
                    >
                      {note.poetic}
                    </motion.text>
                  </g>
                ))}
              </svg>

              {/* Hover Card */}
              <AnimatePresence>
                {hoveredNote !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    className="absolute z-20 w-64 bg-[var(--sillage-cream)] border border-[var(--sillage-gold)] p-6 shadow-2xl pointer-events-none"
                    style={{
                      left: constellationNotes[hoveredNote].x + (hoveredNote === 2 ? -280 : 40),
                      top: constellationNotes[hoveredNote].y - 20
                    }}
                  >
                    <p className="font-serif italic text-sm leading-relaxed text-[var(--sillage-ink)]">
                      {constellationNotes[hoveredNote].content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Scene Lines */}
            <div className="h-16 flex items-center justify-center text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={sceneIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.8 }}
                  className="font-serif italic text-xl text-[var(--sillage-white)] opacity-60"
                >
                  "{sceneLines[sceneIndex]}"
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-auto flex flex-col items-center gap-12">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6 }}
                className="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-[var(--sillage-gold)] hover:text-[var(--sillage-white)] relative group"
              >
                [ Begin Your Bottle ]
                <span className="absolute bottom-0 left-0 w-full h-px bg-[var(--sillage-gold)] group-hover:bg-[var(--sillage-white)] transition-all group-hover:w-full w-0" />
              </motion.button>

              <div className="flex justify-center gap-12 font-mono text-[0.65rem] uppercase tracking-widest text-[var(--sillage-mist)]">
                <button onClick={() => setLayer('craft')} className="hover:text-[var(--sillage-gold)] transition-colors">← Back to Craft</button>
                <button onClick={() => setLayer('entry')} className="hover:text-[var(--sillage-gold)] transition-colors">Back to Entry</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
