"use client";

import React from "react";
import {Container} from "@/component/Container"; // 1. Imported Container

const OurClients = () => {
  const logos = [
    "QCD Globals",
    "Durga Brass Overseas",
    "ThinkNOrder",
    "Heboc Events",
    "DzineTech",
    "OM Royal GYM",
    "PotatoTrails"
  ];

  return (
    <section id="clients" className="bg-white dark:bg-[#0b0f19] overflow-hidden transition-colors duration-300">
      {/* 2. Used Container for the Header section to align with other layout sections */}
      <Container>
        {/* Header Section */}
        
          <div className="flex items-center gap-4 mb-2">
            <div className="flex flex-col gap-1">
              <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
              <span className="h-1 w-6 bg-blue-600/30 rounded-full"></span>
            </div>
            
            <span className="text-slate-900 dark:text-slate-200 font-black tracking-[0.3em] text-xs uppercase relative">
              Our Clients
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-700 group-hover:w-full"></span>
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.85] text-slate-900 dark:text-white">
            TRUSTED BY <br /> <span className="text-blue-600">THE BEST.</span>
          </h2>
        
      </Container>

      {/* 3. Placed Marquee outside Container so the animation and gradient masks extend full-bleed across the screen */}
      <div className="relative flex overflow-x-hidden border-y border-slate-300 dark:border-slate-800 py-16 group">
        <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="text-6xl lg:text-6xl font-black uppercase tracking-tighter text-slate-300 dark:text-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-700 select-none px-4"
            >
              {logo}
            </span>
          ))}
        </div>
        {/* Subtle gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-[#0b0f19] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-[#0b0f19] to-transparent z-10 pointer-events-none" />
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