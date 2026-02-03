"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const reviews = [
    {
      quote:
        "Working with ThinkSync Solutions was super easy. They listened to what I needed and turned my ideas into a really smooth, modern website. It honestly made my job a lot easier.",
      client: "Ayush Gaur",
      position: "Event Manager",
      metric: "Smooth Project Delivery",
    },
    {
      quote:
        "I wanted a site that looked clean and loaded fast, and that’s exactly what they delivered. The team kept me updated the whole time and finished earlier than I expected.",
      client: "Lalit Singh Mehta",
      position: "Architect",
      metric: "Fast & Optimized Website",
    },
    {
      quote:
        "I’m not very tech-savvy, but these guys explained everything simply and built a site my students love using. It feels smooth and professional without being complicated.",
      client: "Dzine Tech Solution",
      position: "Coaching Center Owner",
      metric: "User-Friendly Experience",
    },
  ];

  const next = () =>
    setActive((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setActive((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <section id="testimonials" className="py-10 bg-white relative overflow-hidden">
      {/* Background Graphic - Massive "SYNC" for Vibe */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[25vw] font-black text-slate-50 select-none pointer-events-none -z-10">
        REVIEWS
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-0.5 w-12 bg-blue-600"></span>
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
                Proof of Performance
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none uppercase">
              CLIENT <br /> <span className="text-blue-600">VOICES.</span>
            </h2>
          </div>

          <div className="flex gap-4 mt-8 md:mt-0">
            <button
              onClick={prev}
              className="p-6 border border-slate-100 hover:cursor-pointer rounded-full hover:bg-blue-600 hover:text-white transition-all group"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-6 bg-blue-600 text-white hover:cursor-pointer rounded-full hover:bg-slate-900 transition-all shadow-xl shadow-blue-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Interactive Carousel Box */}
        <div className="relative min-h-70 flex items-center">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col md:grid md:grid-cols-12 items-center gap-12 ${
                i === active
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20 pointer-events-none"
              }`}
            >
              {/* Quote Content */}
              <div className="md:col-span-8">
                <Quote size={60} className="text-blue-600 mb-8 opacity-20" />
                <p className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-8">
                  "{r.quote}"
                </p>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tighter">
                    {r.client}
                  </h4>
                  <p className="text-blue-600 font-black uppercase tracking-widest text-[10px]">
                    {r.position}
                  </p>
                </div>
              </div>

              {/* Metric Card - The "Vibe" Filler */}
              <div className="md:col-span-5 lg:col-span-4 w-full h-full flex items-center">
                <div className="w-full bg-slate-950 p-8 rounded-[2.5rem] text-white relative overflow-hidden group border border-white/5 shadow-2xl">
                  {/* Glowing background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-50 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                        <Star
                          className="text-blue-400 fill-blue-400"
                          size={20}
                        />
                      </div>
                      <span className="px-3 py-1 rounded-full border border-white/20 text-[9px] font-black uppercase tracking-widest text-slate-400">
                        {r.tag}
                      </span>
                    </div>

                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-2">
                      Success Metric
                    </p>
                    <h3 className="text-4xl font-black tracking-tighter text-white">
                      {r.metric}
                    </h3>

                    <div className="mt-6 flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="h-1 w-6 bg-white/10 rounded-full overflow-hidden"
                        >
                          <div className="h-full bg-blue-600 w-full animate-pulse" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        {/* Dynamic Navigation Progress */}
        <div className="mt-24 flex items-center gap-4">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === active
                  ? "w-24 bg-blue-600"
                  : "w-8 bg-slate-100 hover:bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
