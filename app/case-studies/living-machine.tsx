"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useInView } from 'framer-motion';
import { JetBrains_Mono } from 'next/font/google';
import { Power, Activity, Clock, Users, Database, ShieldAlert, Maximize2, Zap, AlertTriangle, CheckCircle2, ChevronDown, Wifi, WifiOff, History, UserCheck, Skull, Copy, Triangle, Heart, Ghost, Share2, Layers, Volume2, VolumeX } from 'lucide-react';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

const BG = '#05060a';
const NODE_PRIMARY = '#4af0ff';
const FAILURE = '#ffcc00';
const CRITICAL = '#ff4444';
const SUCCESS = '#00ffaa';

// --- Audio Engine ---
const useAudio = () => {
  const [enabled, setEnabled] = useState(false);
  const audioCtx = useRef<AudioContext | null>(null);
  const mainGain = useRef<GainNode | null>(null);
  const humOsc = useRef<OscillatorNode | null>(null);

  const init = () => {
    if (audioCtx.current) return;
    audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    mainGain.current = audioCtx.current.createGain();
    mainGain.current.gain.value = 0.05; // Very subtle
    mainGain.current.connect(audioCtx.current.destination);

    // Deep tech hum
    humOsc.current = audioCtx.current.createOscillator();
    humOsc.current.type = 'sine';
    humOsc.current.frequency.setValueAtTime(40, audioCtx.current.currentTime);
    const humGain = audioCtx.current.createGain();
    humGain.gain.value = 0.5;
    humOsc.current.connect(humGain);
    humGain.connect(mainGain.current);
    humOsc.current.start();

    setEnabled(true);
  };

  const playClick = (freq = 800, type: OscillatorType = 'square') => {
    if (!audioCtx.current || !enabled) return;
    const osc = audioCtx.current.createOscillator();
    const g = audioCtx.current.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.current.currentTime);
    osc.frequency.exponentialRampToValueAtTime(10, audioCtx.current.currentTime + 0.1);
    g.gain.setValueAtTime(0.1, audioCtx.current.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 0.1);
    osc.connect(g);
    g.connect(mainGain.current!);
    osc.start();
    osc.stop(audioCtx.current.currentTime + 0.1);
  };

  const toggle = () => {
    if (!audioCtx.current) {
      init();
    } else {
      if (audioCtx.current.state === 'suspended') {
        audioCtx.current.resume();
        setEnabled(true);
      } else {
        audioCtx.current.suspend();
        setEnabled(false);
      }
    }
  };

  return { enabled, toggle, playClick };
};

// --- Shared Components ---

const ChapterHeader = ({ number, title, quote }: { number: string, title: string, quote: string }) => (
  <div className="absolute top-20 left-10 md:left-20 z-50 pointer-events-none">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex items-center gap-4 mb-4"
    >
      <span className="text-[10px] tracking-[0.5em] text-[#4af0ff] font-bold">CH.{number}</span>
      <div className="h-[1px] w-12 bg-[#4af0ff]/30" />
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.5 }}
      transition={{ delay: 0.4 }}
      className="text-sm italic tracking-widest"
    >
      "{quote}"
    </motion.p>
  </div>
);

const KeyInsight = ({ text }: { text: string }) => (
  <div className="absolute bottom-20 left-10 md:left-20 z-50 max-w-sm pointer-events-none">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="p-6 border-l border-[#4af0ff]/20 bg-[#4af0ff]/5 backdrop-blur-md"
    >
      <span className="block text-[8px] uppercase tracking-[0.3em] mb-2 text-[#4af0ff]/60">Key Insight</span>
      <p className="text-xs leading-relaxed opacity-80 uppercase">{text}</p>
    </motion.div>
  </div>
);

const InteractionPanel = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute bottom-20 right-10 md:right-20 z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="p-8 bg-black/60 border border-white/5 backdrop-blur-xl"
    >
      {children}
    </motion.div>
  </div>
);

// --- Chapters ---

// CH.01 The Illusion of One
const Chapter1 = ({ onInteract }: { onInteract: () => void }) => {
  const [view, setView] = useState<'logical' | 'physical'>('logical');

  return (
    <section id="chapter-1" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#05060a]">
      <ChapterHeader number="01" title="The Illusion of One" quote="Many machines. One mind." />

      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {view === 'logical' ? (
            <motion.div
              key="cube"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 405 }}
              exit={{ scale: 0.5, opacity: 0, filter: 'blur(20px)' }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="w-48 h-48 border-2 border-[#4af0ff] shadow-[0_0_80px_rgba(74,240,255,0.2)] relative flex items-center justify-center"
            >
              <div className="absolute inset-4 border border-[#4af0ff]/20 animate-pulse" />
              <div className="absolute inset-0 bg-[#4af0ff]/5" />
              <Activity size={40} className="text-[#4af0ff] opacity-40" />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-8 max-w-4xl"
            >
              {[...Array(32)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, z: -100 }}
                  animate={{ opacity: 1, scale: 1, z: 0 }}
                  transition={{ delay: i * 0.01, duration: 0.5 }}
                  className="w-8 h-8 bg-[#4af0ff]/10 border border-[#4af0ff]/40 flex items-center justify-center"
                >
                   <div className="w-1 h-1 bg-[#4af0ff] animate-pulse" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <InteractionPanel>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-12">
            <span className="text-[10px] uppercase tracking-widest opacity-40">System Status</span>
            <span className="text-[10px] uppercase font-bold text-[#00ffaa] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ffaa] animate-ping" />
              Healthy
            </span>
          </div>
          <div className="h-[1px] bg-white/5 w-full" />
          <div className="flex flex-col gap-3">
             <span className="text-[8px] uppercase tracking-widest opacity-40">Perspective Toggle</span>
             <div className="flex items-center gap-2">
                <button
                  onClick={() => { setView('logical'); onInteract(); }}
                  className={`flex-1 px-4 py-3 text-[9px] uppercase tracking-widest border transition-all ${view === 'logical' ? 'bg-[#4af0ff] text-black border-[#4af0ff] font-bold' : 'border-white/10 hover:border-white/20 opacity-50'}`}
                >
                  Logical
                </button>
                <button
                  onClick={() => { setView('physical'); onInteract(); }}
                  className={`flex-1 px-4 py-3 text-[9px] uppercase tracking-widest border transition-all ${view === 'physical' ? 'bg-[#4af0ff] text-black border-[#4af0ff] font-bold' : 'border-white/10 hover:border-white/20 opacity-50'}`}
                >
                  Physical
                </button>
             </div>
          </div>
        </div>
      </InteractionPanel>

      <KeyInsight text="The system looks like one thing. It is many. The interface hides complexity behind abstraction." />
    </section>
  );
};

// CH.02 The Network Is the Battlefield
const Chapter2 = ({ onInteract }: { onInteract: () => void }) => {
  const [latency, setLatency] = useState(1);
  const [partition, setPartition] = useState(false);

  return (
    <section id="chapter-2" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#05060a] border-t border-white/5">
      <ChapterHeader number="02" title="The Network Is the Battlefield" quote="The network drops, delays, and lies." />

      <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="20%" y1="50%" x2="80%" y2="50%" stroke={partition ? "#ff4444" : "#4af0ff"} strokeWidth="1" strokeDasharray={partition ? "4 4" : "0"} opacity="0.2" />
          <line x1="20%" y1="50%" x2="50%" y2="20%" stroke={partition ? "#ff4444" : "#4af0ff"} strokeWidth="1" strokeDasharray={partition ? "4 4" : "0"} opacity="0.2" />
          <line x1="80%" y1="50%" x2="50%" y2="20%" stroke={partition ? "#ff4444" : "#4af0ff"} strokeWidth="1" strokeDasharray={partition ? "4 4" : "0"} opacity="0.2" />
        </svg>

        <div className="absolute left-[20%] top-[50%] -translate-y-1/2 w-12 h-12 border border-[#4af0ff]/40 bg-[#4af0ff]/5 flex items-center justify-center">
          <Wifi size={16} className="text-[#4af0ff] opacity-40" />
        </div>
        <div className="absolute right-[20%] top-[50%] -translate-y-1/2 w-12 h-12 border border-[#4af0ff]/40 bg-[#4af0ff]/5 flex items-center justify-center">
          <Wifi size={16} className="text-[#4af0ff] opacity-40" />
        </div>
        <div className="absolute left-[50%] top-[20%] -translate-x-1/2 w-12 h-12 border border-[#4af0ff]/40 bg-[#4af0ff]/5 flex items-center justify-center">
          <Wifi size={16} className="text-[#4af0ff] opacity-40" />
        </div>

        <AnimatePresence>
          {!partition && [...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ left: "20%", top: "50%", opacity: 0 }}
              animate={{
                left: ["20%", "80%"],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 2 * latency,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "linear"
              }}
              className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"
            />
          ))}
          {partition && (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
             >
                <div className="w-1 h-32 bg-[#ff4444] shadow-[0_0_20px_#ff4444]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#ff4444] font-bold bg-black px-2">Partition Active</span>
             </motion.div>
          )}
        </AnimatePresence>
      </div>

      <InteractionPanel>
        <div className="flex flex-col gap-8 w-64">
           <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest opacity-40">Network Latency</span>
                <span className="text-[10px] font-mono text-[#4af0ff]">{Math.round(latency * 100)}ms</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.1"
                value={latency}
                onChange={(e) => { setLatency(parseFloat(e.target.value)); onInteract(); }}
                className="w-full accent-[#4af0ff]"
              />
           </div>

           <div className="h-[1px] bg-white/5" />

           <button
            onClick={() => { setPartition(!partition); onInteract(); }}
            className={`w-full py-4 border flex items-center justify-center gap-3 transition-all ${partition ? 'bg-[#ff4444] text-white border-[#ff4444] font-bold' : 'border-white/10 hover:border-white/20'}`}
           >
              {partition ? <WifiOff size={16} /> : <Wifi size={16} />}
              <span className="text-[10px] uppercase tracking-widest">{partition ? 'Heal Network' : 'Simulate Partition'}</span>
           </button>
        </div>
      </InteractionPanel>

      <KeyInsight text="You cannot assume a message was delivered. You cannot assume it arrived in order. The network is the adversary." />
    </section>
  );
};

// CH.03 Time Is a Lie
const Chapter3 = ({ onInteract }: { onInteract: () => void }) => {
  const [timeMode, setTimeMode] = useState<'drift' | 'causal'>('drift');
  const [clocks, setClocks] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setClocks(prev => [
        prev[0] + 1.0,
        prev[1] + 0.95,
        prev[2] + 1.05
      ]);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="chapter-3" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#05060a] border-t border-white/5">
      <ChapterHeader number="03" title="Time Is a Lie" quote="There is no global clock." />

      <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
        {timeMode === 'drift' ? (
          <div className="flex items-center gap-20">
            {clocks.map((time, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-6"
              >
                <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center relative">
                   <Clock size={32} className="opacity-20" />
                   <motion.div
                    animate={{ rotate: time * 36 }}
                    className="absolute top-1/2 left-1/2 w-0.5 h-10 bg-[#4af0ff] origin-bottom -translate-x-1/2 -translate-y-full"
                   />
                </div>
                <div className="font-mono text-xl tracking-tighter">
                  {time.toFixed(2)}s
                </div>
                <span className="text-[8px] uppercase tracking-widest opacity-40">Node 0{i+1}</span>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative w-full h-64 border border-white/5 bg-white/[0.02] p-12">
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              <motion.path
                d="M 100 50 L 300 150 M 300 150 L 500 80 M 100 50 L 500 80"
                stroke="#4af0ff"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
              <circle cx="100" cy="50" r="4" fill="#4af0ff" />
              <circle cx="300" cy="150" r="4" fill="#4af0ff" />
              <circle cx="500" cy="80" r="4" fill="#4af0ff" />
            </svg>
            <div className="absolute top-4 left-10 text-[10px] uppercase tracking-widest text-[#4af0ff]">Causal Graph Reconstruction</div>
          </div>
        )}
      </div>

      <InteractionPanel>
        <div className="flex flex-col gap-6 w-64">
           <div className="flex flex-col gap-3">
             <span className="text-[8px] uppercase tracking-widest opacity-40">Synchronization Method</span>
             <button
              onClick={() => { setTimeMode(timeMode === 'drift' ? 'causal' : 'drift'); onInteract(); }}
              className={`w-full py-4 border flex items-center justify-center gap-3 transition-all ${timeMode === 'causal' ? 'bg-[#4af0ff] text-black border-[#4af0ff] font-bold' : 'border-white/10 hover:border-white/20'}`}
             >
                {timeMode === 'drift' ? <History size={16} /> : <Clock size={16} />}
                <span className="text-[10px] uppercase tracking-widest">{timeMode === 'drift' ? 'Show Causal Order' : 'Reset to Drift'}</span>
             </button>
           </div>
        </div>
      </InteractionPanel>

      <KeyInsight text="Without a global clock, you cannot know what happened first. Order must be reconstructed from causality, not timestamps." />
    </section>
  );
};

// CH.04 The Consensus Council
const Chapter4 = ({ onInteract }: { onInteract: () => void }) => {
  const [leader, setLeader] = useState(0);
  const [electing, setElecting] = useState(false);
  const nodes = [0, 1, 2, 3, 4];

  const killLeader = () => {
    onInteract();
    setElecting(true);
    setLeader(-1);
    setTimeout(() => {
      setLeader(Math.floor(Math.random() * 5));
      setElecting(false);
      onInteract();
    }, 2000);
  };

  return (
    <section id="chapter-4" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#05060a] border-t border-white/5">
      <ChapterHeader number="04" title="The Consensus Council" quote="How do strangers agree?" />

      <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
        <div className="relative w-[400px] h-[400px]">
          {nodes.map((n, i) => {
            const angle = (i * (360 / nodes.length)) * (Math.PI / 180);
            const x = Math.cos(angle) * 150;
            const y = Math.sin(angle) * 150;
            const isLeader = leader === i;

            return (
              <React.Fragment key={i}>
                <motion.div
                  initial={false}
                  animate={{
                    x, y,
                    borderColor: electing ? '#ffcc00' : (isLeader ? '#00ffaa' : 'rgba(74,240,255,0.4)'),
                    backgroundColor: isLeader ? 'rgba(0,255,170,0.1)' : 'transparent',
                    scale: isLeader ? 1.2 : 1
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 flex items-center justify-center z-20"
                >
                  {isLeader ? <UserCheck size={20} className="text-[#00ffaa]" /> : <Users size={20} className="opacity-40" />}
                </motion.div>

                {electing && nodes.map((target) => (
                    <motion.div
                      key={`${i}-${target}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.2, 0] }}
                      transition={{ repeat: Infinity, duration: 0.5, delay: Math.random() }}
                      className="absolute left-1/2 top-1/2 w-[1px] bg-[#ffcc00] origin-left z-10"
                      style={{
                        rotate: (Math.atan2(Math.sin((target * 72 * Math.PI)/180) * 150 - y, Math.cos((target * 72 * Math.PI)/180) * 150 - x) * 180) / Math.PI,
                        width: Math.sqrt(Math.pow(Math.cos((target * 72 * Math.PI)/180) * 150 - x, 2) + Math.pow(Math.sin((target * 72 * Math.PI)/180) * 150 - y, 2)),
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    />
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <InteractionPanel>
        <div className="flex flex-col gap-6 w-64">
           <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest opacity-40">Quorum Status</span>
              <span className={`text-[10px] font-bold ${electing ? 'text-[#ffcc00]' : 'text-[#00ffaa]'}`}>
                {electing ? 'Electing...' : 'Stable'}
              </span>
           </div>
           <div className="h-[1px] bg-white/5" />
           <button
            onClick={killLeader}
            disabled={electing}
            className={`w-full py-4 border flex items-center justify-center gap-3 transition-all ${electing ? 'opacity-20 cursor-not-allowed' : 'border-[#ff4444] text-[#ff4444] hover:bg-[#ff4444] hover:text-white'}`}
           >
              <Skull size={16} />
              <span className="text-[10px] uppercase tracking-widest">Kill Leader</span>
           </button>
        </div>
      </InteractionPanel>

      <KeyInsight text="Agreement requires a majority. Without it, the system stalls. With it, even leaderless systems can reach consensus." />
    </section>
  );
};

// CH.05 Replication & The Identity Problem
const Chapter5 = ({ onInteract }: { onInteract: () => void }) => {
  const [val, setVal] = useState(50);
  const [replicas, setReplicas] = useState([
    { data: 'v1', color: '#4af0ff' },
    { data: 'v1', color: '#4af0ff' },
    { data: 'v1', color: '#4af0ff' }
  ]);

  const updateReplica = () => {
    onInteract();
    const newReplicas = [...replicas];
    const index = Math.floor(Math.random() * 3);
    newReplicas[index] = { data: 'v2', color: '#ffcc00' };
    setReplicas(newReplicas);
  };

  const sync = () => {
      onInteract();
      setReplicas([
        { data: 'v2', color: '#4af0ff' },
        { data: 'v2', color: '#4af0ff' },
        { data: 'v2', color: '#4af0ff' }
      ]);
  };

  return (
    <section id="chapter-5" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#05060a] border-t border-white/5">
      <ChapterHeader number="05" title="Replication & Identity" quote="Copies exist. But which one is truth?" />

      <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
        <div className="flex gap-16">
          {replicas.map((rep, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-8"
            >
              <motion.div
                animate={{
                    borderColor: rep.color,
                    boxShadow: rep.data === 'v2' && rep.color === '#ffcc00' ? `0 0 40px ${rep.color}` : 'none'
                }}
                className="w-32 h-32 border-2 flex items-center justify-center relative bg-white/[0.02]"
              >
                 <Database size={40} style={{ color: rep.color }} className="opacity-40" />
                 <div className="absolute top-2 right-2 text-[8px] opacity-40">REP.0{i+1}</div>
                 <motion.div
                  initial={false}
                  animate={{ opacity: rep.data === 'v2' ? 1 : 0.2 }}
                  className="font-mono text-xs font-bold"
                 >
                    DATA_{rep.data}
                 </motion.div>
              </motion.div>
              {rep.data === 'v2' && rep.color === '#ffcc00' && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-[#ffcc00]"
                  >
                     <AlertTriangle size={12} />
                     <span className="text-[8px] uppercase tracking-widest font-bold">Conflicting</span>
                  </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="absolute top-[20%] right-[10%] w-32 h-32 opacity-20 hidden md:block">
           <Triangle size={128} className="text-white" />
           <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest">Consistency</span>
           <span className="absolute -bottom-4 -left-4 text-[8px] uppercase tracking-widest">Availability</span>
           <span className="absolute -bottom-4 -right-4 text-[8px] uppercase tracking-widest">Partition</span>
        </div>
      </div>

      <InteractionPanel>
        <div className="flex flex-col gap-6 w-64">
           <button
            onClick={updateReplica}
            className="w-full py-4 border border-white/10 hover:border-[#4af0ff] hover:text-[#4af0ff] transition-all flex items-center justify-center gap-3"
           >
              <Copy size={16} />
              <span className="text-[10px] uppercase tracking-widest">Update Single Replica</span>
           </button>
           <button
            onClick={sync}
            className="w-full py-4 border border-white/10 hover:border-[#00ffaa] hover:text-[#00ffaa] transition-all flex items-center justify-center gap-3"
           >
              <CheckCircle2 size={16} />
              <span className="text-[10px] uppercase tracking-widest">Force Consensus</span>
           </button>
           <div className="h-[1px] bg-white/5" />
           <div className="space-y-4">
              <span className="text-[8px] uppercase tracking-widest opacity-40">Consistency Level (CAP)</span>
              <input
                type="range"
                min="0"
                max="100"
                value={val}
                onChange={(e) => { setVal(parseInt(e.target.value)); onInteract(); }}
                className="w-full accent-[#4af0ff]"
              />
              <div className="flex justify-between text-[8px] uppercase tracking-widest opacity-40 italic">
                 <span>Availability</span>
                 <span>Consistency</span>
              </div>
           </div>
        </div>
      </InteractionPanel>

      <KeyInsight text="You can have consistency or availability during a partition. Not both. Every database makes this tradeoff." />
    </section>
  );
};

// CH.06 Failure Is Normal
const Chapter6 = ({ onInteract }: { onInteract: () => void }) => {
  const [nodes, setNodes] = useState([...Array(12)].map(() => true));
  const [mode, setMode] = useState<'single' | 'redundant'>('single');

  const killNodes = () => {
    onInteract();
    const newNodes = [...nodes];
    const killCount = Math.floor(nodes.length * 0.3);
    for(let i = 0; i < killCount; i++) {
       const idx = Math.floor(Math.random() * nodes.length);
       newNodes[idx] = false;
    }
    setNodes(newNodes);
  };

  const resetNodes = () => { onInteract(); setNodes([...Array(12)].map(() => true)); };

  const someDead = nodes.some(n => !n);
  const systemFailed = mode === 'single' && someDead;

  return (
    <section id="chapter-6" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#05060a] border-t border-white/5">
      <ChapterHeader number="06" title="Failure Is Normal" quote="Everything fails. Constantly." />

      <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
        <div className="grid grid-cols-4 gap-8">
          {nodes.map((alive, i) => (
            <motion.div
              key={i}
              animate={{
                borderColor: alive ? '#4af0ff' : '#ff4444',
                opacity: alive ? 1 : 0.2,
                scale: alive ? 1 : 0.9,
                rotateZ: alive ? 0 : Math.random() * 20 - 10
              }}
              className="w-20 h-20 border flex items-center justify-center bg-white/[0.02]"
            >
               {alive ? <Heart size={20} className="text-[#4af0ff]" /> : <Ghost size={20} className="text-[#ff4444]" />}
            </motion.div>
          ))}
        </div>

        {systemFailed && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute inset-0 bg-red-900/20 backdrop-blur-sm flex items-center justify-center z-30"
            >
               <div className="text-center p-12 border-2 border-[#ff4444] bg-black shadow-[0_0_100px_#ff4444]">
                  <AlertTriangle size={64} className="text-[#ff4444] mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">System Collapse</h3>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">Single Point of Failure Triggered</p>
               </div>
            </motion.div>
        )}
      </div>

      <InteractionPanel>
        <div className="flex flex-col gap-6 w-64">
           <div className="flex flex-col gap-3">
             <span className="text-[8px] uppercase tracking-widest opacity-40">Architecture Mode</span>
             <div className="flex gap-2">
                <button
                  onClick={() => { setMode('single'); resetNodes(); }}
                  className={`flex-1 py-3 border text-[9px] uppercase tracking-widest transition-all ${mode === 'single' ? 'bg-[#ff4444] border-[#ff4444] font-bold' : 'border-white/10 opacity-50'}`}
                >
                  Single Point
                </button>
                <button
                  onClick={() => { setMode('redundant'); resetNodes(); }}
                  className={`flex-1 py-3 border text-[9px] uppercase tracking-widest transition-all ${mode === 'redundant' ? 'bg-[#00ffaa] border-[#00ffaa] text-black font-bold' : 'border-white/10 opacity-50'}`}
                >
                  Redundant
                </button>
             </div>
           </div>
           <div className="h-[1px] bg-white/5" />
           <div className="flex gap-2">
             <button
              onClick={killNodes}
              className="flex-2 py-4 border border-[#ff4444] text-[#ff4444] hover:bg-[#ff4444] hover:text-white transition-all text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
             >
                <Skull size={14} /> Kill 30%
             </button>
             <button
              onClick={resetNodes}
              className="flex-1 py-4 border border-white/10 hover:border-white/30 transition-all text-[10px] uppercase tracking-widest"
             >
                Reset
             </button>
           </div>
        </div>
      </InteractionPanel>

      <KeyInsight text="Systems aren't reliable because nothing fails. They're reliable because they're designed for failure." />
    </section>
  );
};

// CH.07 Scale
const Chapter7 = ({ onInteract }: { onInteract: () => void }) => {
  const [load, setLoad] = useState(10);
  const [mode, setMode] = useState<'naive' | 'distributed'>('naive');

  const systemMelted = mode === 'naive' && load > 70;

  return (
    <section id="chapter-7" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#05060a] border-t border-white/5">
      <ChapterHeader number="07" title="Scale" quote="Growth changes physics." />

      <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
         <div className="grid grid-cols-10 gap-2 opacity-40">
            {[...Array(100)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        backgroundColor: systemMelted ? '#ff4444' : '#4af0ff',
                        scale: systemMelted ? [1, 1.2, 1] : 1
                    }}
                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.01 }}
                    className="w-4 h-4 rounded-sm"
                />
            ))}
         </div>

         {mode === 'distributed' && (
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 border-2 border-[#00ffaa] bg-black/80 backdrop-blur-xl flex flex-col items-center gap-4"
                >
                    <Layers size={48} className="text-[#00ffaa]" />
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#00ffaa]">Load Balancer Active</span>
                </motion.div>
             </div>
         )}

         {systemMelted && (
             <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="absolute inset-0 bg-red-900/40 backdrop-blur-md flex items-center justify-center z-30"
             >
                <div className="text-center">
                    <AlertTriangle size={80} className="text-[#ff4444] mx-auto mb-6" />
                    <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4">Catastrophic Failure</h3>
                    <p className="text-sm uppercase tracking-widest opacity-60">System cannot handle the load</p>
                </div>
             </motion.div>
         )}
      </div>

      <InteractionPanel>
        <div className="flex flex-col gap-6 w-64">
           <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest opacity-40">Traffic Load</span>
                <span className={`text-[10px] font-mono ${load > 70 ? 'text-[#ff4444]' : 'text-[#4af0ff]'}`}>{load}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={load}
                onChange={(e) => { setLoad(parseInt(e.target.value)); onInteract(); }}
                className="w-full accent-[#4af0ff]"
              />
           </div>
           <div className="h-[1px] bg-white/5" />
           <div className="flex flex-col gap-3">
             <span className="text-[8px] uppercase tracking-widest opacity-40">Architecture</span>
             <div className="flex gap-2">
                <button
                  onClick={() => { setMode('naive'); onInteract(); }}
                  className={`flex-1 py-3 border text-[9px] uppercase tracking-widest transition-all ${mode === 'naive' ? 'bg-white text-black border-white font-bold' : 'border-white/10 opacity-50'}`}
                >
                  Naive
                </button>
                <button
                  onClick={() => { setMode('distributed'); onInteract(); }}
                  className={`flex-1 py-3 border text-[9px] uppercase tracking-widest transition-all ${mode === 'distributed' ? 'bg-[#4af0ff] text-black border-[#4af0ff] font-bold' : 'border-white/10 opacity-50'}`}
                >
                  Distributed
                </button>
             </div>
           </div>
        </div>
      </InteractionPanel>

      <KeyInsight text="At small scale, simple architectures work. At large scale, the wrong architecture fails catastrophically." />
    </section>
  );
};

// --- Main Layout ---

export default function LivingMachine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(1);
  const { enabled, toggle, playClick } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 1;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          current = index + 1;
        }
      });
      setActiveChapter(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${jetbrains.variable} font-mono bg-[#05060a] text-white selection:bg-[#4af0ff] selection:text-black antialiased`}>
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
           style={{ backgroundImage: `linear-gradient(#ffffff11 1px, transparent 1px), linear-gradient(90deg, #ffffff11 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
      />

      <div className="fixed left-10 bottom-10 z-50 hidden md:flex flex-col items-start gap-2">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#4af0ff]">System Active</span>
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold tracking-tighter">0{activeChapter} <span className="text-white/20">/ 07</span></div>
          <div className="h-4 w-px bg-white/20" />
          <div className="text-[10px] uppercase tracking-widest opacity-40">Chapter Sequence</div>
        </div>
      </div>

      {/* Audio Toggle */}
      <div className="fixed top-10 right-10 z-50">
        <button
            onClick={toggle}
            className={`p-4 border rounded-full transition-all ${enabled ? 'bg-[#4af0ff] text-black border-[#4af0ff]' : 'border-white/10 text-white/40 hover:border-white/30'}`}
        >
            {enabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </div>

      <main ref={containerRef} className="relative z-10">
        <Chapter1 onInteract={() => playClick(600)} />
        <Chapter2 onInteract={() => playClick(400)} />
        <Chapter3 onInteract={() => playClick(800)} />
        <Chapter4 onInteract={() => playClick(300, 'sawtooth')} />
        <Chapter5 onInteract={() => playClick(500)} />
        <Chapter6 onInteract={() => playClick(200, 'sawtooth')} />
        <Chapter7 onInteract={() => playClick(100, 'square')} />
      </main>

      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
        {[1, 2, 3, 4, 5, 6, 7].map(n => (
          <motion.div
            key={n}
            className="flex items-center gap-4 group cursor-pointer"
            onClick={() => {
                const el = document.querySelectorAll('section')[n-1];
                el?.scrollIntoView({ behavior: 'smooth' });
                playClick(1000);
            }}
          >
            <motion.span
              animate={{ opacity: activeChapter === n ? 1 : 0, x: activeChapter === n ? 0 : 10 }}
              className="text-[8px] tracking-widest text-[#4af0ff] font-bold"
            >
                0{n}
            </motion.span>
            <motion.div
              animate={{
                scale: activeChapter === n ? 1.5 : 1,
                backgroundColor: activeChapter === n ? '#4af0ff' : 'rgba(255,255,255,0.1)'
              }}
              className="w-2 h-2 rounded-full border border-white/10 transition-colors group-hover:border-[#4af0ff]"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeChapter === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4 pointer-events-none"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] opacity-40">Initiate Descent</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={16} className="text-[#4af0ff]/60" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
