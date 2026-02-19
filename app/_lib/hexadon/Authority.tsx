import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Palette, 
  Maximize2, 
  ArrowRightCircle,
  CheckCircle2
} from 'lucide-react';

const DEEP_BLUE = '#092d60';
const ACCENT_CYAN = '#37a8b1';

const AuthorityExperience: React.FC = () => {
  const content: React.ReactNode = (
    <div className="max-w-5xl mx-auto p-8 font-sans bg-transparent">
      {/* Hero Section */}
      <header className="mb-16 border-b border-slate-200 pb-12">
        <h1 
          className="text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]" 
          style={{ color: DEEP_BLUE }}
        >
          Authority: The Convergence of <br />
          <span style={{ color: ACCENT_CYAN }}>Art & Craft</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          The definitive platform strategy where technical mastery meets emotional resonance, 
          dissolving customer doubt and building an impenetrable competitive moat.
        </p>
      </header>

      {/* Dual Pillars Section */}
      <section className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2" style={{ color: ACCENT_CYAN }}>
            <Cpu size={24} />
            <span className="font-bold uppercase tracking-widest text-sm text-slate-400">The Craft</span>
          </div>
          <h2 className="text-3xl font-bold" style={{ color: DEEP_BLUE }}>Technical Mastery</h2>
          <p className="text-slate-600 leading-relaxed">
            The "How" and "What." It addresses materials, engineering precision, and functionality. 
            It solves the rational equation: <span className="font-semibold text-slate-900">"Will this perform to my standards?"</span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2" style={{ color: ACCENT_CYAN }}>
            <Palette size={24} />
            <span className="font-bold uppercase tracking-widest text-sm text-slate-400">The Art</span>
          </div>
          <h2 className="text-3xl font-bold" style={{ color: DEEP_BLUE }}>Emotional Resonance</h2>
          <p className="text-slate-600 leading-relaxed">
            The "Why." It addresses beauty, cultural meaning, and aspiration. 
            It solves the emotional equation: <span className="font-semibold text-slate-900">"Does this reflect who I am?"</span>
          </p>
        </div>
      </section>

      {/* Expanded Industry Applications */}
      <section className="mb-20">
        <h2 
          className="text-xs uppercase tracking-[0.4em] font-black mb-12"
          style={{ color: ACCENT_CYAN }}
        >
          Detailed Industry Applications
        </h2>
        
        <div className="space-y-16">
          {/* Luxury Fashion */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold" style={{ color: DEEP_BLUE }}>Luxury Fashion</h3>
              <p className="text-sm font-medium mt-2" style={{ color: ACCENT_CYAN }}>The Weave & The Wearing</p>
            </div>
            <div className="md:col-span-2 text-slate-700 space-y-4">
              <p>
                <strong>The Craft:</strong> Digital "material forensics" allows customers to zoom into the 12-gauge knit of a Mongolian cashmere sweater. By explaining pilling resistance and hand-finished buttonholes, you prove the price point through durability.
              </p>
              <p>
                <strong>The Art:</strong> Positioning the garment within a "studied nonchalance" narrative. It’s not just a sweater; it’s a uniform for the creatively ambitious, referencing 1940s workwear silhouettes adapted for modern drape.
              </p>
            </div>
          </div>

          {/* Specialty Coffee */}
          <div className="grid md:grid-cols-3 gap-8 border-t border-slate-100 pt-12">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold" style={{ color: DEEP_BLUE }}>Specialty Coffee</h3>
              <p className="text-sm font-medium mt-2" style={{ color: ACCENT_CYAN }}>The Bean & The Ritual</p>
            </div>
            <div className="md:col-span-2 text-slate-700 space-y-4">
              <p>
                <strong>The Craft:</strong> Precision is paramount. Authority is built by sharing the exact 21-day fermentation process, water temperature guides, and chemical compound developments during a City+ roast.
              </p>
              <p>
                <strong>The Art:</strong> Transforming a beverage into a sensory journey. Language shifts from "acidic" to "opens with white flower aromatics and a clean finish," connecting the customer to the producer’s specific philosophy.
              </p>
            </div>
          </div>

          {/* Real Estate */}
          <div className="grid md:grid-cols-3 gap-8 border-t border-slate-100 pt-12">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold" style={{ color: DEEP_BLUE }}>Real Estate</h3>
              <p className="text-sm font-medium mt-2" style={{ color: ACCENT_CYAN }}>The Foundation & The Future</p>
            </div>
            <div className="md:col-span-2 text-slate-700 space-y-4">
              <p>
                <strong>The Craft:</strong> Transparency regarding "Architectural Anatomy." Buyers see 3D floor plans that highlight load-bearing walls, insulation R-values, and HVAC capacities—the infrastructure of comfort.
              </p>
              <p>
                <strong>The Art:</strong> "Spatial Poetry." Using time-lapse light studies to show how a living room feels at sunset, or describing "front-porch culture" to sell the emotional safety and community of a neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Outcome */}
      <footer className="mt-24 p-10 border-2" style={{ borderColor: DEEP_BLUE }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-2" style={{ color: DEEP_BLUE }}>Building the Competitive Moat</h4>
            <p className="text-slate-600 italic">"Authority makes comparison shopping irrelevant."</p>
          </div>
          <div className="flex gap-6">
             <div className="text-center">
                <span className="block text-xl font-bold" style={{ color: ACCENT_CYAN }}>↓30%</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold text-slate-400">Returns</span>
             </div>
             <div className="text-center">
                <span className="block text-xl font-bold" style={{ color: ACCENT_CYAN }}>↑PRM</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold text-slate-400">Pricing</span>
             </div>
             <div className="text-center">
                <span className="block text-xl font-bold" style={{ color: ACCENT_CYAN }}>10/10</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold text-slate-400">Loyalty</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );

  return content;
};

export default AuthorityExperience;