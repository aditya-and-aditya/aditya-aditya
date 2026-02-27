'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const craftSteps = [
  {
    title: "Harvest",
    subtitle: "Grasse Rose",
    content: "The rose fields of Grasse are picked before 7am. At 9, the petals are already losing their top accord to the morning sun. Our harvest window is two hours. The rest of the year is preparation for those two hours."
  },
  {
    title: "Extraction",
    subtitle: "Cold Press",
    content: "Heat is the enemy of nuance. We use a 47-step cold maceration process that preserves the volatile top notes often lost in industrial steam distillation. It is slow, inefficient, and essential."
  },
  {
    title: "Composition",
    subtitle: "Master Blender",
    content: "Serge Dumont works in silence. No mood boards, no marketing briefs. Only the raw materials and the memory of a specific light. He composes by subtraction, removing notes until only the truth remains."
  },
  {
    title: "Maturation",
    subtitle: "11 Weeks",
    content: "Time is our final ingredient. Every batch sits in oak vessels for eleven weeks. This allows the molecules to bind and settle, ensuring the fragrance doesn't just sit on the skin, but lives with it."
  }
];

const scenes = [
  "The first cold hour after a long summer.",
  "Concrete still warm from a vanished sun.",
  "A library no one visits anymore.",
  "The shirt you left at someone else's apartment."
];

const notes = [
  { name: "Petrichor", type: "the opening", duration: "lasts 8 mins", x: "20%", y: "30%" },
  { name: "Iris Root", type: "the body", duration: "2 hours", x: "50%", y: "50%" },
  { name: "Vetiver", type: "the ghost", duration: "stays all day", x: "80%", y: "70%" }
];

export default function AuthorityPanel() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSceneIndex((prev) => (prev + 1) % scenes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full w-full bg-[#0e0c0a] text-[#faf8f4] flex flex-col overflow-hidden selection:bg-[#c8832a]/30">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="relative z-10 border-b border-[#faf8f4]/10">
        <div className="flex overflow-x-auto no-scrollbar py-8 px-8 gap-12">
          {craftSteps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
              className="flex-shrink-0 text-left group"
            >
              <div className="font-mono text-[0.6rem] uppercase tracking-widest text-[#c8832a] mb-1">[ {step.title} ]</div>
              <div className="font-serif text-lg font-light group-hover:text-[#c8832a] transition-colors">{step.subtitle}</div>
              <div className="h-px w-0 bg-[#c8832a] group-hover:w-full transition-all duration-500 mt-2" />
            </button>
          ))}
        </div>

        <AnimatePresence>
          {activeStep !== null && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-[#faf8f4]/5"
            >
              <div className="p-8 max-w-lg">
                <p className="font-serif italic text-sm leading-relaxed text-[#faf8f4]/80">
                  {craftSteps[activeStep].content}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center p-12 overflow-hidden">
        <motion.div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative z-20 text-center cursor-default"
        >
          <h2 className="font-serif text-5xl md:text-7xl font-extralight mb-6 tracking-tight">
            Before Rain
          </h2>

          <div className="h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={sceneIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif italic text-xl md:text-2xl text-[#faf8f4]/60"
              >
                "{scenes[sceneIndex]}"
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-3 border border-[#c8832a] font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#c8832a] hover:bg-[#c8832a] hover:text-[#0e0c0a] transition-all duration-500"
          >
            Build Your Bottle
          </motion.button>
        </motion.div>

        <div className="absolute inset-0 z-10">
          <svg className="w-full h-full opacity-30">
            <AnimatePresence>
              {isHovering && (
                <>
                  <motion.path
                    d="M 20% 30% L 50% 50% L 80% 70%"
                    fill="none"
                    stroke="#c8832a"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{ pathLength: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  {notes.map((note, i) => (
                    <motion.g
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <circle cx={note.x} cy={note.y} r="3" fill="#c8832a" />
                      <text
                        x={note.x}
                        y={note.y}
                        dy="-15"
                        textAnchor="middle"
                        className="font-serif italic text-[0.6rem] fill-[#faf8f4]/80"
                      >
                        {note.name} ({note.type} — {note.duration})
                      </text>
                    </motion.g>
                  ))}
                </>
              )}
            </AnimatePresence>
          </svg>
        </div>
      </div>

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
