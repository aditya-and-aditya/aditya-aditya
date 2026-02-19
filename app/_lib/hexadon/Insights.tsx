import React from 'react';
import { 
  Globe, 
  BarChart3, 
  LineChart, 
  Database, 
  Network, 
  FastForward,
  MessageSquareQuote,
  TrendingUp
} from 'lucide-react';

const DEEP_BLUE = '#092d60';
const ACCENT_CYAN = '#37a8b1';

const StrategicInsights: React.FC = () => {
  const content: React.ReactNode = (
    <div className="max-w-5xl mx-auto p-8 font-sans bg-transparent">
      {/* Header Section */}
      <header className="mb-16 border-b border-slate-200 pb-12">
        <div className="flex items-center gap-3 mb-4" style={{ color: ACCENT_CYAN }}>
          <Globe size={20} />
          <span className="font-black uppercase tracking-[0.3em] text-sm">Strategic Intelligence</span>
        </div>
        <h1 
          className="text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]" 
          style={{ color: DEEP_BLUE }}
        >
          Insights: <span style={{ color: ACCENT_CYAN }}>Scaled Persona</span> <br />
          The Collective Intelligence Layer
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed italic">
          "If Persona is understanding one customer deeply, Insights are about understanding all customers collectively, over time, and across contexts."
        </p>
      </header>

      {/* The Three Layers of Insights */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-10" style={{ color: DEEP_BLUE }}>Multi-Layered Intelligence</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 relative group transition-all hover:shadow-lg">
            <div className="mb-6" style={{ color: ACCENT_CYAN }}><Database size={28} /></div>
            <h4 className="font-bold text-lg mb-3" style={{ color: DEEP_BLUE }}>The Customer Base</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">Behavioral patterns across cohorts, preference clusters, and the evolution of needs over time.</p>
          </div>
          <div className="p-8 border border-slate-100 relative group transition-all hover:shadow-lg">
            <div className="mb-6" style={{ color: ACCENT_CYAN }}><TrendingUp size={28} /></div>
            <h4 className="font-bold text-lg mb-3" style={{ color: DEEP_BLUE }}>The Addressable Market</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">Cultural shifts and changing expectations shaped by other brands and emerging tastes.</p>
          </div>
          <div className="p-8 border border-slate-100 relative group transition-all hover:shadow-lg">
            <div className="mb-6" style={{ color: ACCENT_CYAN }}><Network size={28} /></div>
            <h4 className="font-bold text-lg mb-3" style={{ color: DEEP_BLUE }}>The Living Internet</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">Aesthetics, narratives, and external trends that shape internal demand and language.</p>
          </div>
        </div>
      </section>

      {/* The Sacrosanct Feedback Loop */}
      <section className="mb-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6" style={{ color: DEEP_BLUE }}>The Feedback Duty</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            In modern clienting, the system itself takes on the duty of listening. It eliminates the noise of biased, delayed, or anecdotal reporting.
          </p>
          <ul className="space-y-4">
            {[
              { label: "Broader", desc: "Covers the entire base, not just loud minorities." },
              { label: "Longer-Term", desc: "Identifies patterns over time vs. momentary reactions." },
              { label: "More Honest", desc: "Prioritizes behavior over stated intent." }
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-1" style={{ color: ACCENT_CYAN }}><LineChart size={16} /></span>
                <div>
                  <span className="font-bold" style={{ color: DEEP_BLUE }}>{item.label}:</span>
                  <span className="text-slate-500 text-sm ml-2">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-l-4 p-8 bg-slate-50/50" style={{ borderColor: ACCENT_CYAN }}>
          <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-6 italic">The Intelligence Output</h4>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-sm font-bold" style={{ color: DEEP_BLUE }}>Product Decisions</span>
              <span className="text-xs font-mono" style={{ color: ACCENT_CYAN }}>→ Logic</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-sm font-bold" style={{ color: DEEP_BLUE }}>Design Direction</span>
              <span className="text-xs font-mono" style={{ color: ACCENT_CYAN }}>→ Aesthetics</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-sm font-bold" style={{ color: DEEP_BLUE }}>Messaging Evolution</span>
              <span className="text-xs font-mono" style={{ color: ACCENT_CYAN }}>→ Language</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold" style={{ color: DEEP_BLUE }}>Roadmap Priority</span>
              <span className="text-xs font-mono" style={{ color: ACCENT_CYAN }}>→ Velocity</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Role in the Triad */}
      <section className="mb-20">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-1 p-6 border-2 border-slate-900 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-900 leading-tight">The <br />Clienting <br />Stack</h3>
          </div>
          <div className="md:col-span-1 p-6 border border-slate-100 text-center">
            <p className="text-xs uppercase tracking-widest font-bold mb-2 text-slate-400">Authority</p>
            <p className="text-sm font-bold" style={{ color: DEEP_BLUE }}>Earns Trust</p>
            <p className="text-[10px] mt-2 text-slate-500 italic">Mastery of the Product</p>
          </div>
          <div className="md:col-span-1 p-6 border border-slate-100 text-center">
            <p className="text-xs uppercase tracking-widest font-bold mb-2 text-slate-400">Persona</p>
            <p className="text-sm font-bold" style={{ color: DEEP_BLUE }}>Earns Intimacy</p>
            <p className="text-[10px] mt-2 text-slate-500 italic">Understanding the Individual</p>
          </div>
          <div className="md:col-span-1 p-6 border-2 text-center" style={{ borderColor: ACCENT_CYAN }}>
            <p className="text-xs uppercase tracking-widest font-bold mb-2 text-slate-400">Insights</p>
            <p className="text-sm font-bold" style={{ color: DEEP_BLUE }}>Earns Longevity</p>
            <p className="text-[10px] mt-2 text-slate-500 italic">Understanding the System</p>
          </div>
        </div>
      </section>

      {/* Final Strategic Impact */}
      <footer className="mt-24 p-12 bg-transparent border-t-4 border-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h4 className="text-2xl font-bold mb-4" style={{ color: DEEP_BLUE }}>Evolution via Observation</h4>
            <p className="text-slate-600 leading-relaxed italic">
              "The organization doesn’t just serve customers well today—it adapts intelligently to who they are becoming tomorrow."
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <div className="flex items-baseline gap-1" style={{ color: ACCENT_CYAN }}>
                <span className="text-4xl font-black italic">10X</span>
                <span className="text-sm font-bold">Feedback</span>
              </div>
              <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mt-2">Cycle Speed</p>
            </div>
            <div>
              <div className="flex items-baseline gap-1" style={{ color: DEEP_BLUE }}>
                <span className="text-4xl font-black italic">Zero</span>
                <span className="text-sm font-bold">Guess</span>
              </div>
              <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mt-2">Roadmap Risk</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  return content;
};

export default StrategicInsights;