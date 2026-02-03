"use client";

import React from "react";

const OurClients = () => {
  const logos = [
    "QCD Globals",
    "Durga Brass Overseas",
    "ThinkNOrder",
    "Heboc Events",
    "DzineTech",
  ];

  return (
    <section id="clients" className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-blue-600" />
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
              Strategic Partners
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
            TRUSTED BY <br /> <span className="text-blue-600">THE BEST.</span>
          </h2>
        </div>

        {/* Endless Logo Marquee - Visual Density */}
        <div className="relative flex overflow-x-hidden border-y border-slate-300 py-12 group">
          <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-300 group-hover:text-blue-600 transition-colors duration-700 select-none px-4"
              >
                {logo}
              </span>
            ))}
          </div>
          {/* Subtle gradients to fade edges */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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
