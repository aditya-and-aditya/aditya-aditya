'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type PersonaType = 'intimate' | 'presence' | 'memory' | 'neutral';

const questions = [
  {
    id: 1,
    text: "Where does a fragrance live for you?",
    options: [
      { text: "On the skin — intimate, for me", value: 'intimate' },
      { text: "In a room — presence, for others", value: 'presence' },
      { text: "In memory — emotional, unpredictable", value: 'memory' }
    ]
  },
  {
    id: 2,
    text: "How do you shop for something you can't try first?",
    options: [
      { text: "I read everything, then decide", weight: { intimate: 2, presence: 0, memory: 1 } },
      { text: "I trust a strong recommendation", weight: { intimate: 0, presence: 1, memory: 2 } },
      { text: "I go by instinct and return if wrong", weight: { intimate: 1, presence: 2, memory: 0 } }
    ]
  },
  {
    id: 3,
    text: "Who is this for?",
    options: [
      { text: "Me", weight: { intimate: 2, presence: 1, memory: 2 } },
      { text: "Someone I know very well", weight: { intimate: 1, presence: 0, memory: 2 } },
      { text: "Someone I want to impress", weight: { intimate: 0, presence: 2, memory: 0 } }
    ]
  }
];

export default function PersonaPanel() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ intimate: 0, presence: 0, memory: 0 });
  const [persona, setPersona] = useState<PersonaType>('neutral');
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [showReconfiguration, setShowReconfiguration] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsQuizOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (option: any) => {
    if (currentStep === 0) {
      const newScores = { ...scores };
      newScores[option.value as keyof typeof scores] += 3;
      setScores(newScores);
    } else {
      const newScores = { ...scores };
      Object.keys(option.weight).forEach(key => {
        newScores[key as keyof typeof scores] += option.weight[key];
      });
      setScores(newScores);
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalPersona = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0] as PersonaType;
      setPersona(finalPersona);
      setIsQuizOpen(false);
      setShowReconfiguration(true);
      setTimeout(() => setShowReconfiguration(false), 3000);
    }
  };

  const getHeroContent = () => {
    switch (persona) {
      case 'intimate':
        return {
          title: "Precision for the serious wearer.",
          subtitle: "Single-note soliflores. Extraction data. Provenance above all.",
          cta: "Explore the Archives"
        };
      case 'presence':
        return {
          title: "The scent they won't forget you for.",
          subtitle: "Bold signature scents. Command the room before you enter it.",
          cta: "Find Their Scent"
        };
      case 'memory':
        return {
          title: "Tell us one memory. We'll find your scent.",
          subtitle: "Narrative-led compositions. Fragments of time, bottled.",
          cta: "Start With a Story"
        };
      default:
        return {
          title: "The Scent of a Life Well-Lived.",
          subtitle: "Fine fragrance for the modern practitioner.",
          cta: "Discover Sillage"
        };
    }
  };

  const content = getHeroContent();

  return (
    <div className="h-full w-full bg-[#faf8f4] text-[#1a1410] relative flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center transition-all duration-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={persona}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="font-serif italic text-lg opacity-60 mb-12">
              {content.subtitle}
            </p>
            <button className="px-10 py-4 bg-[#c8832a] text-[#faf8f4] font-mono text-[0.7rem] uppercase tracking-[0.2em] hover:bg-[#1a1410] transition-colors duration-500">
              {content.cta}
            </button>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {showReconfiguration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="bg-[#1a1410] text-[#faf8f4] px-6 py-2 font-mono text-[0.6rem] uppercase tracking-widest shadow-2xl">
                Experience Reconfiguring to: {persona}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isQuizOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[min(380px,90vw)] bg-[#faf8f4] border-l border-[#c8832a]/30 shadow-[-20px_0_50px_rgba(0,0,0,0.05)] z-50 p-10"
          >
            <button
              onClick={() => setIsQuizOpen(false)}
              className="absolute top-4 right-4 text-[#1a1410]/30 hover:text-[#c8832a] transition-colors"
            >
              <X size={20} />
            </button>

            <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#c8832a] mb-8">
              Let us find your frequency.
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="font-serif text-2xl font-light leading-snug">
                  {questions[currentStep].text}
                </h3>

                <div className="space-y-3">
                  {questions[currentStep].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(option)}
                      className="w-full text-left p-4 border border-[#1a1410]/10 hover:border-[#c8832a] hover:bg-[#c8832a]/5 transition-all duration-300 group"
                    >
                      <span className="font-serif italic text-sm group-hover:text-[#c8832a]">{option.text}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-6 right-8 font-mono text-[0.5rem] uppercase tracking-widest opacity-30">
        Context State: {persona}
      </div>
    </div>
  );
}
