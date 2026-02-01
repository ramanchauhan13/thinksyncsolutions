import React from 'react';
import { ArrowDownRight, CheckCircle2, Zap, Users2, Target } from 'lucide-react';

const AboutPage = () => {
  const values = [
    { title: "Precision", desc: "We don't guess. We measure. Every line of code is optimized for performance and security." },
    { title: "Sync-First", desc: "Communication is our backbone. We stay in total alignment with your internal teams." },
    { title: "Scalability", desc: "We build for your Series B, C, and beyond. Architecture that grows with your users." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")` }}>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-26">
        
        {/* Section 1: The Manifesto */}
        <div className="grid lg:grid-cols-2 gap-20 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-blue-600" />
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">The Manifesto</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter uppercase">
              WE BUILD <br /> <span className="text-blue-600 italic">TECH</span> THAT <br /> WORKS.
            </h1>
          </div>
          <div className="lg:pt-24">
            <p className="text-2xl md:text-4xl font-bold leading-tight mb-8 tracking-tight">
              ThinkSync Solutions was founded on a simple premise: Software should be a catalyst, not a bottleneck.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              We are a collective of senior engineers and designers who believe in the power of synchronization. By aligning deep technical expertise with your unique business goals, we create digital products that are as reliable as they are innovative.
            </p>
          </div>
        </div>

        {/* Section 2: Numbers that Matter (The Vibe Filler) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10 border-y border-slate-100 py-20">
          {[
            { label: "Products Shipped", val: "100+" },
            { label: "Lines of Code", val: "4.2M" },
            { label: "Client Growth", val: "140%" },
            { label: "Expert Developers", val: "5+" },
          ].map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="text-5xl md:text-7xl font-black text-blue-600 mb-2 tracking-tighter">{stat.val}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section 3: Core Values (Non-Bento Grid) */}
        <div className="mb-10">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-10 text-center">
            The <span className="text-blue-600 italic underline">ThinkSync</span> Way.
          </h2>
          <div className="grid lg:grid-cols-3 gap-1px bg-slate-100 border border-slate-100 overflow-hidden rounded-[3rem]">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-12 flex flex-col items-center text-center group hover:bg-blue-600 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-white/20 group-hover:text-white transition-all">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-blue-100 transition-colors">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Final Hook */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 bg-slate-900 p-16 rounded-[4rem] text-white overflow-hidden relative">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
              READY TO SYNC YOUR <br /> VISION WITH REALITY?
            </h2>
            <p className="text-slate-400 font-medium">Join the 50+ businesses scaling with our custom infrastructure.</p>
          </div>
          <button className="whitespace-nowrap bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-blue-600 transition-all z-10 shadow-xl shadow-blue-500/20">
            Let’s Talk Shop
          </button>
          {/* Decorative Back-text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-black opacity-[0.03] select-none pointer-events-none">
            THINK
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;