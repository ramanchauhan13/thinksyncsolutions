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
      metric: "Smooth Delivery",
    },
    {
      quote:
        "I wanted a site that looked clean and loaded fast, and that’s exactly what they delivered. The team kept me updated the whole time and finished earlier than I expected.",
      client: "Lalit Singh Mehta",
      position: "Architect",
      metric: "Fast & Optimized",
    },
    {
      quote:
        "I’m not very tech-savvy, but these guys explained everything simply and built a site my students love using. It feels smooth and professional without being complicated.",
      client: "Dzine Tech Solution",
      position: "Coaching Center Owner",
      metric: "User Experience",
    },
    {
      quote:
        "ThinkSync Solutions really got what I wanted. They created a website that’s not only beautiful but also super easy to manage. It’s been a great experience working with them.",
      client: "Pulkit Goel",
      position: "Exporter",
      metric: "Beautiful & Manageable",
    },
    {
      quote:
        "I needed a website that could handle a lot of traffic and still look great. ThinkSync Solutions delivered exactly that, and they were great to work with throughout the process.",
      client: "QCD Globals",
      position: "Travel Agency",
      metric: "Scalable & Stunning",
    },
    {
      quote: "ThinkSync Solutions took my vision and made it a reality. The App they built is not only visually appealing but also really easy to navigate. I couldn’t be happier.",
      client:"Abhishek Singh Thakur",
      position:"Fitness Center",
      metric:"Engaging & Dynamic"
    },
  ];

  const next = () =>
    setActive((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setActive((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Graphic - Responsive font size */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] md:text-[25vw] font-black text-slate-50 select-none pointer-events-none -z-10 leading-none">
        REVIEWS
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl md:text-left">
            <div className="flex items-center gap-4 mb-2">
  <div className="flex flex-col gap-1">
    <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
    <span className="h-1 w-6 bg-blue-600/30 rounded-full"></span>
  </div>
  
  <span className="text-slate-900 font-black tracking-[0.3em] text-xs uppercase relative">
    Testimonials
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-700 group-hover:w-full"></span>
  </span>
</div>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.8] uppercase">
              CLIENT <br />
              <span className="text-blue-600">VOICES.</span>
            </h2>
          </div>

          <div className="flex justify-center gap-4 mt-4 md:mt-0">
            <button
              onClick={prev}
              className="p-4 md:p-6 border border-slate-100 hover:cursor-pointer rounded-full hover:bg-blue-600 hover:text-white transition-all group"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-4 md:p-6 bg-blue-600 text-white hover:cursor-pointer rounded-full hover:bg-slate-900 transition-all shadow-xl shadow-blue-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Interactive Carousel Box */}
        <div className="relative">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-in-out flex flex-col md:grid md:grid-cols-12 items-center gap-8 md:gap-12 ${
                i === active
                  ? "opacity-100 translate-x-0 relative z-10"
                  : "opacity-0 translate-x-10 absolute inset-0 pointer-events-none"
              }`}
            >
              {/* Quote Content */}
              <div className="md:col-span-7 lg:col-span-8">
                <Quote size={40} className="text-blue-600 mb-6 opacity-20" />
                <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-slate-900 mb-8">
                  "{r.quote}"
                </p>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg md:text-xl font-black uppercase tracking-tighter">
                    {r.client}
                  </h4>
                  <p className="text-blue-600 font-black uppercase tracking-widest text-[10px]">
                    {r.position}
                  </p>
                </div>
              </div>

              {/* Metric Card */}
              <div className="md:col-span-5 lg:col-span-4 w-full">
                <div className="w-full bg-slate-950 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white relative overflow-hidden group border border-white/5 shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                        <Star className="text-blue-400 fill-blue-400" size={18} />
                      </div>
                      <div className="flex gap-0.5">
                         {[...Array(5)].map((_, starI) => (
                           <Star key={starI} size={10} className="text-yellow-400 fill-yellow-400" />
                         ))}
                      </div>
                    </div>

                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-2">
                      Success Metric
                    </p>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                      {r.metric}
                    </h3>

                    <div className="mt-6 flex gap-1">
                      {[...Array(4)].map((_, barI) => (
                        <div key={barI} className="h-1 w-6 bg-white/10 rounded-full overflow-hidden">
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

        {/* Progress Navigation */}
        <div className="mt-16 md:mt-24 flex items-center justify-center md:justify-start gap-2 md:gap-4">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === active
                  ? "w-12 md:w-24 bg-blue-600"
                  : "w-4 md:w-8 bg-slate-100 hover:bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;