import React from 'react';
import { 
  Radio, 
  MapPin, 
  MousePointer2, 
  Zap, 
  Waypoints, 
  Merge,
  Eye,
  Minimize2
} from 'lucide-react';

const DEEP_BLUE = '#092d60';
const ACCENT_CYAN = '#37a8b1';

const PresenceLayer: React.FC = () => {
  const content: React.ReactNode = (
    <div className="max-w-5xl mx-auto p-8 font-sans bg-transparent">
      {/* Hero Header */}
      <header className="mb-16 border-b border-slate-200 pb-12">
        <h1 
          className="text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]" 
          style={{ color: DEEP_BLUE }}
        >
          Presence: <span style={{ color: ACCENT_CYAN }}>Contextual Alignment</span> <br />
          How Systems Meet the World
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed italic">
          "Presence is not where customers come from. Presence is how your system receives them."
        </p>
      </header>

      {/* The Reception Framework */}
      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">The Input</h3>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-500">
              <span className="px-2 py-1 border border-slate-200">Ads</span>
              <span className="px-2 py-1 border border-slate-200">Social</span>
              <span className="px-2 py-1 border border-slate-200">AI Agents</span>
              <span className="px-2 py-1 border border-slate-200">Referrals</span>
              <span className="px-2 py-1 border border-slate-200">Offline</span>
            </div>
            <p className="text-sm text-slate-500">Fragmented Entry Points</p>
          </div>

          <div className="flex justify-center">
            <Merge size={48} className="rotate-90 md:rotate-0" style={{ color: ACCENT_CYAN }} />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">The Presence Layer</h3>
            <p className="font-bold text-lg" style={{ color: DEEP_BLUE }}>
              Absorbing context to eliminate the "Reset" feeling.
            </p>
          </div>
        </div>
      </section>

      {/* Triad of Interaction */}
      <section className="mb-20 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Authority",
            sub: "What you know",
            desc: "The technical and artistic depth of the product.",
            icon: <Eye size={20} />
          },
          {
            title: "Persona",
            sub: "Who you know",
            desc: "The situational model of the specific individual.",
            icon: <Radio size={20} />
          },
          {
            title: "Presence",
            sub: "How you show up",
            desc: "The interface between intelligence and the external world.",
            icon: <Waypoints size={20} />
          }
        ].map((item, i) => (
          <div key={i} className="border-t-4 pt-6" style={{ borderColor: i === 2 ? ACCENT_CYAN : DEEP_BLUE }}>
            <div className="flex items-center gap-2 mb-2" style={{ color: i === 2 ? ACCENT_CYAN : DEEP_BLUE }}>
              {item.icon}
              <span className="font-bold text-xl">{item.title}</span>
            </div>
            <p className="text-xs uppercase font-black tracking-widest text-slate-400 mb-4">{item.sub}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Adaptive Decision Engine */}
      <section className="mb-20 p-10 border border-slate-100">
        <h2 className="text-2xl font-bold mb-8" style={{ color: DEEP_BLUE }}>The Adaptive Response</h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          <div className="flex gap-4">
            <Zap className="shrink-0" style={{ color: ACCENT_CYAN }} size={24} />
            <div>
              <h4 className="font-bold mb-2 text-slate-900">Immediate Revelation</h4>
              <p className="text-sm text-slate-600 leading-relaxed">What must be surfaced right now based on incoming intent (e.g., high-intent referral needs depth immediately).</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Minimize2 className="shrink-0" style={{ color: ACCENT_CYAN }} size={24} />
            <div>
              <h4 className="font-bold mb-2 text-slate-900">Deliberate Withholding</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Preventing cognitive overload for casual browsers by delaying technical craft details.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MousePointer2 className="shrink-0" style={{ color: ACCENT_CYAN }} size={24} />
            <div>
              <h4 className="font-bold mb-2 text-slate-900">Intent Translation</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Reading the source (Search vs. Social) to adjust the initial tone and visual hierarchy.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="shrink-0" style={{ color: ACCENT_CYAN }} size={24} />
            <div>
              <h4 className="font-bold mb-2 text-slate-900">Seamless Continuity</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Ensuring the customer feels recognized, not reset, regardless of which "doorway" they used.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion / Bridge */}
      <footer className="mt-24 p-10 border-2" style={{ borderColor: DEEP_BLUE }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h4 className="text-2xl font-bold mb-2" style={{ color: DEEP_BLUE }}>Presence: The Interface</h4>
            <p className="text-slate-600">
              Without presence, even the best systems collapse into generic flows. Presence turns every external entry into an <strong>intentional experience</strong>.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
             <div className="flex items-center justify-between gap-8 border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Intent</span>
                <span className="font-mono text-sm" style={{ color: ACCENT_CYAN }}>Experience</span>
             </div>
             <div className="flex items-center justify-between gap-8 border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Source</span>
                <span className="font-mono text-sm" style={{ color: ACCENT_CYAN }}>Tone</span>
             </div>
             <div className="flex items-center justify-between gap-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Context</span>
                <span className="font-mono text-sm" style={{ color: ACCENT_CYAN }}>Relevance</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );

  return content;
};

export default PresenceLayer;