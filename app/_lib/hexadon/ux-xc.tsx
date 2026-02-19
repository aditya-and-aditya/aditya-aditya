import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  UserCircle2, 
  Radar, 
  BarChart4, 
  Fingerprint,
  Home,
  ArrowRight
} from 'lucide-react';

const DEEP_BLUE = '#092d60';
const ACCENT_CYAN = '#37a8b1';

const EmergentUX: React.FC = () => {
  const content: React.ReactNode = (
    <div className="max-w-5xl mx-auto p-8 font-sans bg-transparent">
      {/* Hero Header */}
      <header className="mb-16 border-b border-slate-200 pb-12 text-center md:text-left">
        <h1 
          className="text-5xl font-black tracking-tight mb-6 leading-tight" 
          style={{ color: DEEP_BLUE }}
        >
          UX: The <span style={{ color: ACCENT_CYAN }}>Emergent Property</span> <br />
          of Intelligence
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          UX is not a surface layer or a journey diagram. It is what naturally emerges when 
          Mastery, Context, and Identity operate in alignment.
        </p>
      </header>

      {/* The Pillars of Friction Removal */}
      <section className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.4em] font-black mb-12 text-slate-400">The Friction Removal Engine</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { pillar: 'Authority', removes: 'Cognitive Friction', icon: <ShieldCheck size={20} /> },
            { pillar: 'Persona', removes: 'Relevance Friction', icon: <UserCircle2 size={20} /> },
            { pillar: 'Presence', removes: 'Contextual Friction', icon: <Radar size={20} /> },
            { pillar: 'Insights', removes: 'Temporal Friction', icon: <BarChart4 size={20} /> },
            { pillar: 'Branding', removes: 'Identity Friction', icon: <Fingerprint size={20} /> },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 border border-slate-100 hover:shadow-sm transition-all">
              <div className="mb-4" style={{ color: ACCENT_CYAN }}>{item.icon}</div>
              <h4 className="font-bold text-sm mb-1" style={{ color: DEEP_BLUE }}>{item.pillar}</h4>
              <p className="text-[10px] uppercase font-black text-slate-400 tracking-tighter">Removes</p>
              <p className="text-xs font-semibold mt-1 leading-tight">{item.removes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergent UX Definition Cards */}
      <section className="mb-20 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border-l-4" style={{ borderColor: DEEP_BLUE }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: DEEP_BLUE }}>Earned Competence</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Authority creates a sense of **Calm**. When the system is master of its craft, 
              the user never asks "Am I missing something?" The interface stops being a 
              stepping stone and becomes the final destination.
            </p>
          </div>
          <div className="p-8 border-l-4" style={{ borderColor: ACCENT_CYAN }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: DEEP_BLUE }}>Appropriate Appropriateness</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Persona ensures UX is never generic. It isn't about being "personal"—it's 
              about being **Appropriate**. It knows what to reveal, what to withhold, 
              and how much cognitive load the user can handle right now.
            </p>
          </div>
        </div>

        <div className="p-8 border border-slate-100">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: DEEP_BLUE }}>
             <Zap size={20} style={{ color: ACCENT_CYAN }} />
             Anti-Fragile Design
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm mb-6">
            Insights make UX evolutionary. At scale, the system uses behavioral truth to detect 
            friction before users complain and adjust flows continuously. Feedback is implicit, 
            constant, and real.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="px-3 py-1 bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">Not Designed</span>
            <span className="px-3 py-1 bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">Earned</span>
            <span className="px-3 py-1 bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">Operationalized</span>
          </div>
        </div>
      </section>

      {/* The Emergent States */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: DEEP_BLUE }}>The User Experience Output</h2>
        <div className="flex flex-col md:flex-row justify-between gap-6 px-12 italic text-slate-500 font-medium">
          <div className="flex items-center gap-2 font-bold" style={{ color: DEEP_BLUE }}><ArrowRight size={16} /> Understood</div>
          <div className="flex items-center gap-2 font-bold" style={{ color: DEEP_BLUE }}><ArrowRight size={16} /> Guided</div>
          <div className="flex items-center gap-2 font-bold" style={{ color: DEEP_BLUE }}><ArrowRight size={16} /> Confident</div>
          <div className="flex items-center gap-2 font-bold" style={{ color: DEEP_BLUE }}><ArrowRight size={16} /> Unrushed</div>
          <div className="flex items-center gap-2 font-bold" style={{ color: DEEP_BLUE }}><ArrowRight size={16} /> At Home</div>
        </div>
      </section>

      {/* Final Integrated Footer */}
      <footer className="mt-24 p-12 border-2" style={{ borderColor: DEEP_BLUE }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-md">
            <h4 className="text-2xl font-black mb-4 uppercase leading-none flex items-center gap-2" style={{ color: DEEP_BLUE }}>
              <Home style={{ color: ACCENT_CYAN }} />
              The Final Loop
            </h4>
            <p className="text-slate-600 font-medium leading-relaxed">
              UX is the behavioral surface of an intelligent clienting system. 
              It is mastery, understanding, and conviction—operationalized into 
              every click, every silence, and every recommendation.
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-2">System Status</p>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: ACCENT_CYAN }}></div>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: ACCENT_CYAN }}></div>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: ACCENT_CYAN }}></div>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: ACCENT_CYAN }}></div>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: ACCENT_CYAN }}></div>
            </div>
            <p className="mt-4 font-mono text-sm font-bold uppercase" style={{ color: DEEP_BLUE }}>Fully Integrated</p>
          </div>
        </div>
      </footer>
    </div>
  );

  return content;
};

export default EmergentUX;