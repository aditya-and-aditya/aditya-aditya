import React from 'react';
import { 
  Quote, 
  ShieldAlert, 
  Compass, 
  Anchor, 
  MessageSquare, 
  Fingerprint,
  Scale,
  Zap
} from 'lucide-react';

const DEEP_BLUE = '#092d60';
const ACCENT_CYAN = '#37a8b1';

const BrandingPhilosophy: React.FC = () => {
  const content: React.ReactNode = (
    <div className="max-w-5xl mx-auto p-8 font-sans bg-transparent">
      {/* Hero Header */}
      <header className="mb-16 border-b-4 border-slate-900 pb-12">
        <div className="flex items-center gap-3 mb-4" style={{ color: ACCENT_CYAN }}>
          <Fingerprint size={24} />
          <span className="font-black uppercase tracking-[0.4em] text-sm text-slate-400">The Internal Spine</span>
        </div>
        <h1 
          className="text-6xl font-black tracking-tighter mb-6 leading-none uppercase" 
          style={{ color: DEEP_BLUE }}
        >
          Branding: <br />
          <span style={{ color: ACCENT_CYAN }}>Narrative Conviction</span>
        </h1>
        <p className="text-2xl text-slate-700 max-w-3xl leading-snug font-medium border-l-4 pl-6" style={{ borderColor: DEEP_BLUE }}>
          "Authority convinces the mind. Persona convinces the relevance. Branding convinces the identity."
        </p>
      </header>

      {/* The Core Truths */}
      <section className="mb-20 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold italic" style={{ color: DEEP_BLUE }}>The Psychological Defense</h2>
          <p className="text-slate-600 leading-relaxed">
            An unbranded experience forces users to defend their choice alone. 
            A branded experience defends them for them. It provides <strong>social confidence</strong> and <strong>status coherence</strong>.
          </p>
          <div className="flex items-start gap-4 p-6 border border-slate-100">
            <ShieldAlert className="shrink-0" style={{ color: ACCENT_CYAN }} />
            <p className="text-sm text-slate-500 italic">
              "A system without branding is not neutral—it is weak. Neutrality is interpreted as a lack of leadership."
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-sm space-y-8">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Internal Governance</h3>
          <div>
            <h4 className="font-bold mb-1" style={{ color: DEEP_BLUE }}>Opinionated Defaults</h4>
            <p className="text-sm text-slate-600">If everything is configurable, nothing is branded. Defaults are the system's moral stance.</p>
          </div>
          <div>
            <h4 className="font-bold mb-1" style={{ color: DEEP_BLUE }}>World-Building Language</h4>
            <p className="text-sm text-slate-600">No generic copy. If users don't quote your terminology, your branding isn't working.</p>
          </div>
          <div>
            <h4 className="font-bold mb-1" style={{ color: DEEP_BLUE }}>Reframing Reality</h4>
            <p className="text-sm text-slate-600">"This is slower" becomes care. "We don’t support this" becomes focus.</p>
          </div>
        </div>
      </section>

      {/* Narrative Continuity Flow */}
      <section className="mb-20">
        <h2 className="text-center text-xs uppercase tracking-[0.5em] font-black text-slate-400 mb-12">The Belief Preservation Loop</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {['Marketing Promise', 'Sales Narrative', 'Product Interaction', 'System Defaults', 'Support Tone'].map((step, i) => (
            <React.Fragment key={i}>
              <div className="text-center px-4 py-2 border border-slate-200 font-bold text-sm" style={{ color: DEEP_BLUE }}>
                {step}
              </div>
              {i < 4 && <div className="hidden md:block h-px w-12 bg-slate-200"></div>}
            </React.Fragment>
          ))}
        </div>
        <p className="text-center mt-8 text-slate-500 text-sm italic">
          Consistency is not aesthetics—it is the elimination of cognitive dissonance.
        </p>
      </section>

      {/* Strategic Reframing Table */}
      <section className="mb-20 border-2" style={{ borderColor: DEEP_BLUE }}>
        <div className="p-6 border-b-2 bg-slate-50" style={{ borderColor: DEEP_BLUE }}>
          <h3 className="font-black uppercase tracking-widest text-sm" style={{ color: DEEP_BLUE }}>Branding as Reframing Philosophy</h3>
        </div>
        <div className="grid md:grid-cols-3 divide-x-2 divide-slate-100">
          <div className="p-8">
            <Scale className="mb-4" style={{ color: ACCENT_CYAN }} />
            <h4 className="font-bold text-lg mb-2">Moral Stance</h4>
            <p className="text-sm text-slate-600 italic">Speed vs. Care. Scale vs. Intimacy. Control vs. Trust.</p>
          </div>
          <div className="p-8">
            <Anchor className="mb-4" style={{ color: ACCENT_CYAN }} />
            <h4 className="font-bold text-lg mb-2">Emotional Gravity</h4>
            <p className="text-sm text-slate-600 italic">Authority is academic; Branding is meaningful.</p>
          </div>
          <div className="p-8">
            <Zap className="mb-4" style={{ color: ACCENT_CYAN }} />
            <h4 className="font-bold text-lg mb-2">Market Immunity</h4>
            <p className="text-sm text-slate-600 italic">People compare specs. They don't compare philosophies.</p>
          </div>
        </div>
      </section>

      {/* Final Triad + 1 Integration */}
      <footer className="mt-24 p-12 border-t-8 border-slate-900">
        <div className="grid md:grid-cols-4 gap-8 items-end">
          <div className="md:col-span-2">
            <h4 className="text-3xl font-black mb-4 uppercase leading-none" style={{ color: DEEP_BLUE }}>
              The Story <br />is the System
            </h4>
            <p className="text-slate-600 font-medium">
              If branding disappears when marketing is turned off, it was never branding. 
              In clienting, <strong>leadership matters.</strong> Users want the option that feels sure of itself.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4 border-l border-slate-200 pl-8">
            <div>
              <span className="block text-xs font-black text-slate-400 uppercase tracking-tighter">Engagement Metric</span>
              <span className="text-xl font-bold" style={{ color: ACCENT_CYAN }}>Quote-ability</span>
            </div>
            <div>
              <span className="block text-xs font-black text-slate-400 uppercase tracking-tighter">Retention Metric</span>
              <span className="text-xl font-bold" style={{ color: ACCENT_CYAN }}>Identity Lock-in</span>
            </div>
            <div>
              <span className="block text-xs font-black text-slate-400 uppercase tracking-tighter">Strategy Metric</span>
              <span className="text-xl font-bold" style={{ color: ACCENT_CYAN }}>Incommensurability</span>
            </div>
            <div>
              <span className="block text-xs font-black text-slate-400 uppercase tracking-tighter">Internal Metric</span>
              <span className="text-xl font-bold" style={{ color: ACCENT_CYAN }}>Zero Debate</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  return content;
};

export default BrandingPhilosophy;