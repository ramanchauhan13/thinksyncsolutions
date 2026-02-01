'use client';

import React from 'react';

const OurClients = () => {
  const logos = ["QCD Globals", "Durga Brass Overseas", "ThinkNOrder", "Heboc Events", "DzineTech"];
  
  const testimonials = [
    {
      company: "AlphaTech",
      quote: "ThinkSync didn't just write code; they re-architected our entire vision for scalability.",
      author: "James Chen",
      role: "CTO"
    },
    {
      company: "NexusPay",
      quote: "The MERN stack migration was flawless. Zero downtime, 40% faster response times.",
      author: "Elena Vance",
      role: "VP Engineering"
    }
  ];

  return (
    <section id="clients" className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-blue-600" />
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Strategic Partners</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
            TRUSTED BY <br /> <span className="text-blue-600">THE BEST.</span>
          </h2>
        </div>

        {/* Endless Logo Marquee - Visual Density */}
        <div className="relative flex overflow-x-hidden border-y border-slate-300 py-12 group">
          <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-300 group-hover:text-blue-600 transition-colors duration-700 select-none px-4">
                {logo}
              </span>
            ))}
          </div>
          {/* Subtle gradients to fade edges */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        {/* Deep Dive Testimonials */}
        {/* <div className="grid md:grid-cols-2 gap-1px bg-slate-100 border border-slate-100 rounded-[3rem] overflow-hidden">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-12 md:p-16 flex flex-col justify-between hover:bg-blue-50 transition-colors duration-500">
              <div>
                <Quote className="text-blue-600 mb-8" size={40} fill="currentColor" fillOpacity={0.1} />
                <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-12">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-end justify-between">
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-xl">{t.author}</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{t.role} // {t.company}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-blue-600 group-hover:border-blue-600 transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Global Stats Footer */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-100 rounded-3xl overflow-hidden">
          {[
            { val: "50+", label: "Enterprises Synchronized" },
            { val: "98%", label: "Retention Rate" },
            { val: "24/7", label: "Global Monitoring" }
          ].map((stat, i) => (
            <div key={i} className="p-10 border-r border-b md:border-b-0 border-slate-100 last:border-0 hover:bg-slate-50 transition-colors group">
              <span className="block text-5xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{stat.val}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div> */}
      </div> 

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurClients;