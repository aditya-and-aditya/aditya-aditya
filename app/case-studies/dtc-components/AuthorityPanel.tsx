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
    name: "Bergamot",
    type: "top",
    duration: "0 – 15 min",
    x: 15, y: 25,
    color: "#eab308", // Bright citrus yellow
    poetic: "Morning light.",
    content: "Hand-pressed bergamot from Calabria. It provides the initial flash of sunlight that cuts through the humidity."
  },
  {
    name: "Petrichor",
    type: "opening",
    duration: "0 – 8 min",
    x: 30, y: 55,
    color: "#a8c0ff", // Cold blue
    poetic: "The memory of stone.",
    content: "A synthetic construction built to replicate the specific olfactory signature of limestone after the first drops of rain."
  },
  {
    name: "Iris Root",
    type: "heart",
    duration: "1 – 5 hrs",
    x: 50, y: 35,
    color: "#d8b4fe", // Powdered purple
    poetic: "Powdered bone.",
    content: "Cold-macerated Florentine orris. Structural, vertical, and unapologetically cold."
  },
  {
    name: "Pink Pepper",
    type: "top",
    duration: "5 – 20 min",
    x: 65, y: 20,
    color: "#fb7185", // Soft rose/pink
    poetic: "Electric friction.",
    content: "A sharp, ozonic spice that mimics the static charge in the air before a storm."
  },
  {
    name: "Vetiver Bourbon",
    type: "base",
    duration: "6 hrs → forever",
    x: 80, y: 65,
    color: "#84cc16", // Earthy green
    poetic: "Volcanic earth.",
    content: "Hand-harvested Réunion vetiver. Dark without being heavy, earthy without being dirty."
  },
  {
    name: "Sandalwood",
    type: "base",
    duration: "8 hrs → forever",
    x: 45, y: 80,
    color: "#b45309", // Warm amber/brown
    poetic: "The library.",
    content: "Mysore sandalwood absolute. Creamy, lactonic, and deeply anchored in the skin."
  }
];

export default function AuthorityPanel() {
  const [layer, setLayer] = useState<'entry' | 'craft' | 'art'>('entry');
  const [expandedStage, setExpandedStage] = useState<string | null>(null);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [hoveredNote, setHoveredNote] = useState<number | null>(null);
  const [selectedNotes, setSelectedNotes] = useState<number[]>([]);

  useEffect(() => {
    if (layer === 'art') {
      const interval = setInterval(() => {
        setSceneIndex(prev => (prev + 1) % sceneLines.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [layer]);

  const toggleNote = (index: number) => {
    setSelectedNotes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index].slice(-3) // Keep only last 3 for performance/visual clarity
    );
  };

  const getBackground = () => {
    if (layer === 'craft') return '#f2ece0';
    if (layer === 'entry') return '#0a0907';

    // Art layer background with atmospheric mixing
    if (selectedNotes.length > 0) {
      const gradients = selectedNotes.map((idx, i) => {
        const note = constellationNotes[idx];
        return `radial-gradient(circle at ${note.x}% ${note.y}%, ${note.color}33 0%, transparent 50%)`;
      });
      return `${gradients.join(', ')}, #0a0907`;
    }

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
              className="font-display text-[clamp(3rem,10vw,8rem)] font-extralight text-[#faf7f2] tracking-[0.4em] leading-none mb-4 text-center"
            >
              No. 3
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="font-serif italic text-xl md:text-2xl text-[#b5893a] mb-6"
            >
              "Before Rain"
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 2, duration: 1 }}
              className="font-serif text-base text-[#faf7f2] mb-12 max-w-sm"
            >
              The scent of a sky about to open.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
              className="flex gap-12"
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
            className="flex-1 flex flex-col p-6 md:p-10 overflow-y-auto no-scrollbar"
          >
            <div className="space-y-2 mb-12">
              {productionStages.map((stage) => (
                <div key={stage.id} className="border-t border-[#1c1713]/10">
                  <button
                    onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
                    className="w-full text-left py-6 group"
                  >
                    <div className="font-mono text-[0.55rem] text-[#b5893a] mb-2 uppercase tracking-widest">{stage.id} ──</div>
                    <div className="font-serif text-lg text-[#1c1713] mb-1 uppercase tracking-tight group-hover:pl-2 transition-all duration-500">{stage.title}</div>
                    <div className="font-mono text-[0.6rem] text-[#c8c0b4] uppercase tracking-tight">{stage.subtitle}</div>

                    <AnimatePresence>
                      {expandedStage === stage.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-6 font-serif italic text-sm leading-relaxed text-[#1c1713]/70 max-w-md">
                            {stage.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              ))}
              <div className="border-t border-[#1c1713]/10 py-6">
                <div className="font-mono text-[0.55rem] text-[#b5893a] mb-2">↓</div>
                <div className="font-serif text-lg uppercase tracking-tight">Bottled.</div>
              </div>
            </div>

            <div className="mt-auto pt-12 text-center border-t border-[#1c1713]/10">
              <div className="font-mono text-xl text-[#b5893a] mb-2">23% concentration.</div>
              <div className="font-serif italic text-lg opacity-50 mb-12">Built for skin. Not for first impression.</div>
              <div className="flex justify-center gap-12 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[#c8c0b4]">
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
            className="flex-1 flex flex-col p-6 md:p-8 overflow-hidden"
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
              <div className="absolute top-0 left-0 right-0 text-center">
                <p className="font-mono text-[0.5rem] uppercase tracking-[0.3em] text-[#b5893a]/60">Select up to 3 notes to compose</p>
              </div>
              <svg viewBox="0 0 100 100" className="w-full h-full max-h-[380px] relative z-10 overflow-visible">
                {/* Curved connecting lines */}
                <motion.path
                  d="M 15 25 Q 50 10 80 65"
                  fill="none"
                  stroke="#faf7f2"
                  strokeWidth="0.1"
                  strokeOpacity="0.05"
                />
                <motion.path
                  d="M 30 55 Q 50 35 65 20"
                  fill="none"
                  stroke="#faf7f2"
                  strokeWidth="0.1"
                  strokeOpacity="0.05"
                />
                <motion.path
                  d="M 50 35 Q 45 80 80 65"
                  fill="none"
                  stroke="#faf7f2"
                  strokeWidth="0.1"
                  strokeOpacity="0.05"
                />

                {constellationNotes.map((note, i) => (
                  <g key={note.name} onClick={() => toggleNote(i)} className="cursor-pointer">
                    <motion.circle
                      cx={note.x} cy={note.y} r={selectedNotes.includes(i) ? 2 : 1.2}
                      fill={note.color}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: hoveredNote === i ? 2.5 : (selectedNotes.includes(i) ? 2 : 1),
                        opacity: 1,
                        filter: selectedNotes.includes(i) ? `drop-shadow(0 0 8px ${note.color})` : 'none'
                      }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      onMouseEnter={() => setHoveredNote(i)}
                      onMouseLeave={() => setHoveredNote(null)}
                    />
                    <motion.text
                      x={note.x} y={note.y + 7}
                      textAnchor="middle"
                      className="font-serif text-[3px] fill-[#faf7f2] uppercase tracking-wider"
                      style={{ opacity: hoveredNote === i || selectedNotes.includes(i) ? 1 : 0.4 }}
                    >
                      {note.name}
                    </motion.text>
                    <motion.text
                      x={note.x} y={note.y + 10}
                      textAnchor="middle"
                      className="font-mono text-[1.8px] fill-[#b5893a] uppercase tracking-[0.2em]"
                      style={{ opacity: hoveredNote === i || selectedNotes.includes(i) ? 0.8 : 0 }}
                    >
                      {note.duration}
                    </motion.text>
                  </g>
                ))}
              </svg>

              {/* Hover/Selection Card */}
              <AnimatePresence>
                {(hoveredNote !== null || selectedNotes.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-4 left-4 right-4 bg-[#f2ece0]/95 backdrop-blur-sm border border-[#b5893a]/30 p-4 shadow-2xl pointer-events-none z-30"
                  >
                    <div className="flex gap-6 items-start">
                      <div className="flex-1">
                        {hoveredNote !== null ? (
                          <>
                            <p className="font-mono text-[0.5rem] uppercase mb-1 tracking-[0.2em]" style={{ color: constellationNotes[hoveredNote].color }}>{constellationNotes[hoveredNote].poetic}</p>
                            <h4 className="font-serif text-lg uppercase mb-2">{constellationNotes[hoveredNote].name}</h4>
                            <p className="font-serif italic text-xs leading-relaxed text-[#1c1713]/80">
                              {constellationNotes[hoveredNote].content}
                            </p>
                          </>
                        ) : (
                          <div className="flex flex-col gap-2">
                            <p className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-[#b5893a]">Your Composition</p>
                            <div className="flex gap-4">
                              {selectedNotes.map(idx => (
                                <div key={idx} className="flex flex-col">
                                  <span className="font-serif text-xs uppercase" style={{ color: constellationNotes[idx].color }}>{constellationNotes[idx].name}</span>
                                  <span className="font-mono text-[0.4rem] opacity-50 uppercase">{constellationNotes[idx].type}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="w-px h-16 bg-[#b5893a]/20" />
                      <div className="flex flex-col justify-center">
                        <p className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-[#b5893a] mb-1">Concentration</p>
                        <p className="font-serif text-xl italic">23%</p>
                      </div>
                    </div>
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
