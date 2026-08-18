import React from "react";
import { Globe, ShieldCheck } from "lucide-react";

const WhyUs = () => {
  return (
    <section 
      id="why" 
      className="relative w-full py-12 md:py-16 lg:py-20 px-10 bg-white dark:bg-[#0b0f19] overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-full mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Creative Visual Grid */}
        <div className="relative">
          {/* Decorative background element */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 dark:bg-blue-950/40 rounded-full blur-3xl opacity-40 animate-pulse pointer-events-none" />

          <div className="grid grid-cols-2 gap-6 relative z-10">
            {/* Card 1: Growth Driven */}
            <div className="group bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] h-72 flex flex-col justify-between p-8 border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:bg-white dark:hover:bg-slate-800/90 hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm transition-all overflow-hidden p-2">
                <img
                  src="/gifs/growth.gif"
                  alt="Growth"
                  className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tighter uppercase mb-1 leading-none">
                  Growth <br /> Driven
                </h3>
                <div className="h-1.5 w-8 bg-blue-600 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </div>

            {/* Card 2: User Focused */}
            <div className="group bg-blue-600 rounded-[2.5rem] h-72 translate-y-8 lg:translate-y-12 flex flex-col justify-between p-8 text-white shadow-xl shadow-blue-200 dark:shadow-none transition-all duration-500 hover:shadow-blue-400 dark:hover:shadow-blue-600/30 hover:translate-y-6">
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
            <div className="mt-8 md:mt-10 col-span-2 bg-slate-900 dark:bg-slate-950 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 overflow-hidden relative group border border-slate-800 shadow-2xl">
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl md:rounded-2xl p-2 bg-white flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <img
                      src="/gifs/fast.gif"
                      alt="Velocity"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <div className="text-[9px] md:text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1">
                      Production Velocity
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-black italic tracking-tighter uppercase leading-none text-white whitespace-nowrap">
                      Shipping 60% Faster
                    </div>
                  </div>
                </div>

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

              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[60px] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex flex-col gap-1">
              <span className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="h-1 w-6 bg-blue-600/30 rounded-full" />
            </div>
            
            <span className="text-slate-900 dark:text-slate-200 font-black tracking-[0.3em] text-xs uppercase relative">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-[0.9] text-slate-900 dark:text-white uppercase tracking-tighter">
            Why we are the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">
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
                className="group flex flex-col sm:flex-row gap-5 p-4 rounded-3xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900/60 border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
              >
                <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-blue-50 dark:bg-slate-800 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center border border-blue-100 dark:border-slate-700 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                  <span className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors">
                    {item.stat}
                  </span>
                  <span className="text-[8px] font-black uppercase text-blue-400 dark:text-blue-300 group-hover:text-blue-200 transition-colors tracking-widest">
                    {item.label}
                  </span>
                </div>

                <div className="flex flex-col justify-center">
                  <h4 className="font-black text-xl sm:text-2xl mb-1 uppercase tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-medium leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;