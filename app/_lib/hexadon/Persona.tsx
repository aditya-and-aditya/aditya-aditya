import React from 'react';
import { 
  Users, 
  Cpu, 
  Settings2, 
  EyeOff, 
  Zap, 
  Activity,
  RefreshCw,
  Focus
} from 'lucide-react';

const DEEP_BLUE = '#092d60';
const ACCENT_CYAN = '#37a8b1';

const PersonaInfrastructure: React.FC = () => {
  const content: React.ReactNode = (
    <div className="max-w-5xl mx-auto p-8 font-sans bg-transparent">
      {/* Hero Header */}
      <header className="mb-16 border-b border-slate-200 pb-12">
        <h1 
          className="text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]" 
          style={{ color: DEEP_BLUE }}
        >
          Persona: The Context Engine <br />
          <span style={{ color: ACCENT_CYAN }}>Removing System Cluelessness</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed italic">
          "If Authority answers why a product matters, Persona answers why it matters to this person, right now."
        </p>
      </header>

      {/* The Definition Shift */}
      <section className="mb-20 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-slate-400">The Shift</h2>
          <div className="h-1 w-12 mb-6" style={{ backgroundColor: ACCENT_CYAN }}></div>
        </div>
        <div className="md:col-span-2">
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xs font-bold uppercase mb-2 text-slate-500">From: Static Profile</h3>
              <p className="text-slate-700 font-medium border-l-2 border-slate-200 pl-4">
                Demographics, segments, and rigid labels that optimize for averages.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase mb-2" style={{ color: ACCENT_CYAN }}>To: Context Engine</h3>
              <p className="text-slate-900 font-bold border-l-2 pl-4" style={{ borderColor: ACCENT_CYAN }}>
                A living, testable model of intent, constraints, and knowledge state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Modeling Grid */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-10" style={{ color: DEEP_BLUE }}>Modeling the Situational Reality</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { label: 'Intent', icon: <Focus size={18} />, desc: 'What the user is actually trying to do.' },
            { label: 'Constraints', icon: <Settings2 size={18} />, desc: 'Time, budget, skill, and environment.' },
            { label: 'Knowledge State', icon: <Cpu size={18} />, desc: 'Novice → Expert spectrum.' },
            { label: 'Decision Posture', icon: <Activity size={18} />, desc: 'Exploring vs. Committing.' },
            { label: 'Bandwidth', icon: <Zap size={18} />, desc: 'Deep dive vs. quick skim.' },
            { label: 'Sensitivities', icon: <EyeOff size={18} />, desc: 'What they notice or avoid.' },
          ].map((item, i) => (
            <div key={i} className="p-6 border border-slate-100 group hover:border-cyan-200 transition-colors">
              <div className="mb-4" style={{ color: ACCENT_CYAN }}>{item.icon}</div>
              <h4 className="font-bold mb-2" style={{ color: DEEP_BLUE }}>{item.label}</h4>
              <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Applied Persona: Case Studies */}
      <section className="mb-20 bg-slate-50/50 p-10 rounded-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: DEEP_BLUE }}>One Product. Multiple Realities.</h2>
        
        <div className="space-y-16">
          {/* Coffee Example */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-bold text-white rounded-full" style={{ backgroundColor: DEEP_BLUE }}>Vertical: Specialty Coffee</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">Persona A: The Beginner</h4>
                <p className="text-slate-700">System emphasizes <strong>sensory language</strong> and <strong>rituals</strong>. It explains ratios and grind sizes to prevent failure and build confidence.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400" style={{ color: ACCENT_CYAN }}>Persona B: The Expert</h4>
                <p className="text-slate-700">System shows <strong>extraction curves</strong> and <strong>roast development</strong>. Narrative is minimized to allow for high-precision control.</p>
              </div>
            </div>
          </div>

          {/* Furniture Example */}
          <div className="border-t border-slate-200 pt-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-bold text-white rounded-full" style={{ backgroundColor: DEEP_BLUE }}>Vertical: Furniture</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">Persona A: First-Timer</h4>
                <p className="text-slate-700">Focus on <strong>longevity</strong> and <strong>durability</strong>. Visuals show wear-over-time and explain structural joints.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400" style={{ color: ACCENT_CYAN }}>Persona B: Design Literate</h4>
                <p className="text-slate-700">Focus on <strong>lineage</strong> and <strong>philosophy</strong>. References designers and movements while assuming structural competence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Loop (Infrastructure) */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <RefreshCw size={32} style={{ color: ACCENT_CYAN }} />
          <h2 className="text-3xl font-bold" style={{ color: DEEP_BLUE }}>The Testable Model Loop</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {['Hypothesize Context', 'Act (UX/Authority)', 'Observe Response', 'Update Model'].map((step, i) => (
            <div key={i} className="relative p-6 border-t-2 border-slate-900">
              <span className="absolute -top-3 right-4 font-mono text-xs font-bold bg-white px-2 text-slate-400">0{i+1}</span>
              <p className="font-bold text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Footer */}
      <footer className="mt-24 p-10 border-2" style={{ borderColor: DEEP_BLUE }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h4 className="text-2xl font-bold mb-2" style={{ color: DEEP_BLUE }}>Scaling Trust via Precision</h4>
            <p className="text-slate-600">
              Personalization without Persona is noise. Persona-based personalization compounds trust, turning optimization into <strong>relationship formation</strong>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT_CYAN }}></div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 italic">Faster Decisioning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT_CYAN }}></div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 italic">Lower Bounce Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT_CYAN }}></div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 italic">Zero Patronization</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT_CYAN }}></div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 italic">High Acceptance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  return content;
};

export default PersonaInfrastructure;