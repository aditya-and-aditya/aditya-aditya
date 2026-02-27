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
    content: "Orris root from Florence takes three years to mature in the ground before harvest. After harvest, it takes another eleven weeks of cold maceration to extract the irone — the compound that gives iris its powdered, almost bone-like quality. You cannot rush irone. Every formula that has tried to shortcut this smells like iris in quotation marks. Ours does not."
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
    x: 15, y: 50,
    color: "#a8c0ff", // Cold blue
    poetic: "The memory of stone.",
    content: "The first eight minutes. A synthetic accord — the only one we use. Built to replicate limestone in summer rain. Gone before you realise it was there. That is the point."
  },
  {
    name: "Iris Root",
    type: "the body",
    duration: "1 – 5 hrs",
    x: 50, y: 30,
    color: "#d8b4fe", // Powdered purple
    poetic: "Powdered bone.",
    content: "The heart of the experience. Cold-macerated Florentine orris. It provides a structural, vertical quality that anchors the volatile petrichor."
  },
  {
    name: "Vetiver Bourbon",
    type: "the ghost",
    duration: "6 hrs → forever",
    x: 85, y: 60,
    color: "#84cc16", // Earthy green
    poetic: "Volcanic earth.",
    content: "Dark without being heavy. Réunion vetiver character: dark without being heavy, earthy without being dirty."
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

  const getBackground = () => {
    if (layer === 'craft') return '#f2ece0';
    if (layer === 'entry') return '#0a0907';

    // Art layer background with atmospheric mixing
    if (hoveredNote !== null) {
      const note = constellationNotes[hoveredNote];
      return `radial-gradient(circle at ${note.x}% ${note.y}%, ${note.color}22 0%, #0a0907 70%)`;
    }

    return 'radial-gradient(circle at 50% 50%, #b5893a11 0%, #0a0907 80%)';
  };

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col transition-all duration-1000" style={{ background: getBackground() }}>

      <AnimatePresence mode="wait">
        {/* Layer 1: Entry */}
        {layer === 'entry' && (
          <motion.div
            key="entry"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col items-center justify-center p-8 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2 }}
              className="font-display text-[clamp(4rem,14vw,12rem)] font-extralight text-[#faf7f2] tracking-[0.4em] leading-none mb-4"
            >
              No. 3
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="font-serif italic text-2xl md:text-3xl text-[#b5893a] mb-8"
            >
              "Before Rain"
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 2, duration: 1 }}
              className="font-serif text-lg text-[#faf7f2] mb-16 max-w-sm"
            >
              The scent of a sky about to open.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
              className="flex gap-16"
            >
              <button
                onClick={() => setLayer('craft')}
                className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[#b5893a] border-b border-[#b5893a]/30 pb-1 hover:text-[#faf7f2] hover:border-[#faf7f2] transition-all duration-500"
              >
                [ THE CRAFT ]
              </button>
              <button
                onClick={() => setLayer('art')}
                className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[#b5893a] border-b border-[#b5893a]/30 pb-1 hover:text-[#faf7f2] hover:border-[#faf7f2] transition-all duration-500"
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="flex-1 flex flex-col p-8 md:p-16 overflow-y-auto no-scrollbar"
          >
            <div className="space-y-2 mb-16">
              {productionStages.map((stage) => (
                <div key={stage.id} className="border-t border-[#1c1713]/10">
                  <button
                    onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
                    className="w-full text-left py-8 group"
                  >
                    <div className="font-mono text-[0.6rem] text-[#b5893a] mb-3 uppercase tracking-widest">{stage.id} ──</div>
                    <div className="font-serif text-xl text-[#1c1713] mb-1 uppercase tracking-tight group-hover:pl-2 transition-all duration-500">{stage.title}</div>
                    <div className="font-mono text-[0.65rem] text-[#c8c0b4] uppercase tracking-tight">{stage.subtitle}</div>

                    <AnimatePresence>
                      {expandedStage === stage.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-8 font-serif italic text-base leading-relaxed text-[#1c1713]/70 max-w-md">
                            {stage.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              ))}
              <div className="border-t border-[#1c1713]/10 py-8">
                <div className="font-mono text-[0.6rem] text-[#b5893a] mb-3">↓</div>
                <div className="font-serif text-xl uppercase tracking-tight">Bottled.</div>
              </div>
            </div>

            <div className="mt-auto pt-16 text-center border-t border-[#1c1713]/10">
              <div className="font-mono text-2xl text-[#b5893a] mb-3">23% concentration.</div>
              <div className="font-serif italic text-xl opacity-50 mb-16">Built for skin. Not for first impression.</div>
              <div className="flex justify-center gap-16 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[#c8c0b4]">
                <button onClick={() => setLayer('entry')} className="hover:text-[#b5893a] transition-colors">← Entry</button>
                <button onClick={() => setLayer('art')} className="hover:text-[#b5893a] transition-colors">Art →</button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Layer 3: The Art */}
        {layer === 'art' && (
          <motion.div
            key="art"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col p-8 md:p-12 overflow-hidden"
          >
            {/* Evaporation Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              <svg width="100%" height="100%">
                <filter id="noiseFilterArt">
                  <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" seed="2" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilterArt)" />
              </svg>
            </div>

            {/* Scent Constellation */}
            <div className="relative flex-1 flex flex-col justify-center items-center">
              <svg viewBox="0 0 100 100" className="w-full h-full max-h-[350px] relative z-10 overflow-visible">
                <motion.path
                  d="M 15 50 C 30 20, 70 20, 85 60"
                  fill="none"
                  stroke="#faf7f2"
                  strokeWidth="0.15"
                  strokeOpacity="0.15"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                {constellationNotes.map((note, i) => (
                  <g key={note.name}>
                    <motion.circle
                      cx={note.x} cy={note.y} r="1.2"
                      fill={note.color}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: hoveredNote === i ? 2 : 1,
                        opacity: 1,
                        boxShadow: hoveredNote === i ? `0 0 20px ${note.color}` : 'none'
                      }}
                      transition={{ delay: i * 0.6, duration: 0.4 }}
                      onMouseEnter={() => setHoveredNote(i)}
                      onMouseLeave={() => setHoveredNote(null)}
                      className="cursor-pointer"
                    />
                    <motion.text
                      x={note.x} y={note.y + 7}
                      textAnchor="middle"
                      className="font-serif text-[3.5px] fill-[#faf7f2]"
                      style={{ opacity: hoveredNote === i ? 1 : 0.6 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      transition={{ delay: i * 0.6 + 0.3 }}
                    >
                      {note.name}
                    </motion.text>
                    <motion.text
                      x={note.x} y={note.y + 10}
                      textAnchor="middle"
                      className="font-mono text-[2.2px] fill-[#b5893a] uppercase tracking-[0.2em]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.6 + 0.4 }}
                    >
                      {note.duration}
                    </motion.text>
                  </g>
                ))}
              </svg>

              {/* Hover Card */}
              <AnimatePresence>
                {hoveredNote !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute z-20 w-56 bg-[#f2ece0] border border-[#b5893a] p-6 shadow-2xl pointer-events-none"
                    style={{
                      left: `${constellationNotes[hoveredNote].x}%`,
                      top: `${constellationNotes[hoveredNote].y + 18}%`,
                      transform: 'translateX(-50%)',
                      borderColor: constellationNotes[hoveredNote].color
                    }}
                  >
                    <p className="font-mono text-[0.55rem] uppercase mb-3 tracking-[0.2em]" style={{ color: constellationNotes[hoveredNote].color }}>{constellationNotes[hoveredNote].poetic}</p>
                    <p className="font-serif italic text-sm leading-relaxed text-[#1c1713]">
                      {constellationNotes[hoveredNote].content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Scene Lines */}
            <div className="h-24 flex items-center justify-center text-center px-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={sceneIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="font-serif italic text-xl md:text-2xl text-[#faf7f2] opacity-50 leading-relaxed"
                >
                  "{sceneLines[sceneIndex]}"
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-auto flex flex-col items-center gap-10">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6 }}
                className="font-mono text-[0.75rem] uppercase tracking-[0.3em] text-[#b5893a] hover:text-[#faf7f2] relative group pb-1"
              >
                [ Begin Your Bottle ]
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#faf7f2] group-hover:w-full transition-all duration-700" />
              </motion.button>

              <div className="flex justify-center gap-16 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[#c8c0b4]">
                <button onClick={() => setLayer('craft')} className="hover:text-[#b5893a] transition-colors">← Craft</button>
                <button onClick={() => setLayer('entry')} className="hover:text-[#b5893a] transition-colors">Entry</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
