import React from "react";
import {
  BarChart3,
  Users,
  Zap,
  CheckCircle2,
  Globe,
  ShieldCheck,
} from "lucide-react";

const WhyUs = () => {
  return (
    <section id="why" className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Creative Visual Grid */}
        <div className="relative">
          {/* Decorative background element */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse" />

          <div className="grid grid-cols-2 gap-6 relative z-10">
            {/* Card 1: Growth Driven */}
            {/* Card 1: Growth Driven */}
            <div className="group bg-slate-100 rounded-[2.5rem] h-72 flex flex-col justify-between p-8 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center shadow-sm transition-all overflow-hidden p-2">
                <img
                  src="/gifs/growth.gif"
                  alt="Growth"
                  className="w-full h-full object-contain mix-blend-multiply transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase mb-1 leading-none">
                  Growth <br /> Driven
                </h3>
                <div className="h-1.5 w-8 bg-blue-600 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </div>

            {/* Card 2: User Focused */}
            <div className="group bg-blue-600 rounded-[2.5rem] h-72 translate-y-12 flex flex-col justify-between p-8 text-white shadow-xl shadow-blue-200 transition-all duration-500 hover:shadow-blue-400 hover:translate-y-8">
              <div className="w-20 h-20 bg-white backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 transition-all overflow-hidden p-2">
                <img
                  src="/gifs/no-focus.gif" 
                  alt="Users"
                  className="w-full h-full object-contain transition-all"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-1 leading-none">
                  User <br /> Focused
                </h3>
                <div className="h-1.5 w-8 bg-blue-300 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </div>

            {/* Velocity/Tech Depth Card (Full Width) */}
            {/* Velocity/Tech Depth Card (Full Width) */}
<div className="mt-10 md:mt-12 col-span-2 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 overflow-hidden relative group border border-slate-800 shadow-2xl">
  
  {/* Flex Container: Stays row on all screens to keep lines to the right */}
  <div className="relative z-10 flex items-center justify-between">
    
    <div className="flex items-center gap-3 md:gap-4">
      {/* Icon Container */}
      <div className="w-14 h-14 md:w-18 md:h-18 shrink-0 rounded-xl md:rounded-2xl p-2 bg-white flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
        <img
          src="/gifs/fast.gif"
          alt="Velocity"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Wrapper */}
      <div>
        <div className="text-[9px] md:text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1">
          Production Velocity
        </div>
        <div className="text-xl md:text-2xl font-black italic tracking-tighter uppercase leading-none text-white whitespace-nowrap">
          Shipping 60% Faster
        </div>
      </div>
    </div>

    {/* Visual "Speed" Lines - Now positioned to the right of the text */}
    <div className="flex gap-1 md:gap-1.5 h-8 md:h-12 items-end shrink-0 ml-4">
      {[30, 60, 45, 90, 100, 70].map((h, i) => (
        <div
          key={i}
          className="w-1 md:w-1.5 bg-blue-500 md:bg-slate-700 rounded-full group-hover:bg-blue-500 transition-all duration-700"
          style={{ 
            height: `${h}%`, 
            transitionDelay: `${i * 50}ms` 
          }}
        />
      ))}
    </div>
  </div>

  {/* Subtle Background Accent */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[60px] pointer-events-none" />
</div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div >

          <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.85] text-slate-900 uppercase tracking-tighter">
            Why we are the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 italic">
              right choice.
            </span>
          </h2>

          <div className="space-y-4">
            {[
              {
                title: "No Outsourcing.",
                desc: "Every line of code is written by our local, specialized team. No communication gaps, no timezone issues.",
                stat: "100%",
                label: "In-House",
                icon: <Globe className="text-blue-600" size={20} />,
              },
              {
                title: "Future Proof.",
                desc: "We don't just build for today; we architect for scale. Codebases ready for your Series B and beyond.",
                stat: "99.9%",
                label: "Scalability",
                icon: <ShieldCheck className="text-blue-600" size={20} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row gap-6 p-4 rounded-4xl transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100"
              >
                {/* Dynamic Stat Node */}
                <div className="shrink-0 w-24 h-24 bg-blue-50 rounded-3xl flex flex-col items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                  <span className="text-2xl font-black text-blue-600 group-hover:text-white transition-colors">
                    {item.stat}
                  </span>
                  <span className="text-[8px] font-black uppercase text-blue-400 group-hover:text-blue-200 transition-colors tracking-widest">
                    {item.label}
                  </span>
                </div>

                <div>
                  <h4 className="font-black text-2xl mb-2 uppercase tracking-tight text-slate-900 flex items-center gap-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Tech Stack Marquee */}
      {/* <div className="mt-24 border-t border-slate-100 pt-10">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-20 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0">
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'Tailwind'].map((tech) => (
            <span key={tech} className="text-xl font-black tracking-[0.2em] uppercase text-slate-400">
              {tech}
            </span>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default WhyUs;
