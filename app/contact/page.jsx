"use client";

import React, { useState } from "react";
import { Send, Globe, Mail, Phone, CheckCircle2 } from "lucide-react";

const ContactPage = () => {
  const [activeType, setActiveType] = useState("Development");

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Texture Layer */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-26">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Editorial Content */}
          <div className="sticky">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-blue-600" />
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
                Project Inquiry
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-12">
              LET’S <br /> <span className="text-blue-600">SYNC.</span>
            </h1>
            <p className="text-2xl font-bold text-slate-400 leading-tight mb-10 max-w-md italic">
              "We transform technical debt into digital equity. Tell us what
              you're building."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-50 border-t border-slate-100 pt-6">
              <div>
                <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] mb-4">
                  Direct Email
                </p>
                <a
                  href="mailto:team.thinksync.solutions@gmail.com"
                  className="text-xl font-black hover:text-blue-600 transition-colors"
                >
                  team.thinksync.solutions@gmail.com
                </a>
              </div>
              <div>
                <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] mb-4">
                  Urgent Call
                </p>
                <a
                  href="tel:+918979937257"
                  className="text-xl font-black hover:text-blue-600 transition-colors"
                >
                  +91 8979937257
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: The Premium Form */}
          <div className="relative">
            {/* Subtle glow behind the form */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-40 -z-10" />

            <div className="bg-white p-8 md:p-10 rounded-[3.5rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
              <form className="space-y-8">
                {/* 1. Project Type Selector (The "Modern" touch) */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 block">
                    What are we building?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["Development", "UI/UX Design", "Automation"].map(
                      (type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setActiveType(type)}
                          className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                            activeType === type
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                              : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                          }`}
                        >
                          {type}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                {/* 2. Full Name Input */}
                <div className="group relative">
                  <input
                    type="text"
                    required
                    className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 focus:outline-none focus:border-blue-600 transition-all font-bold text-xl placeholder-transparent"
                    placeholder="Full Name"
                    id="name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-blue-600 pointer-events-none"
                  >
                    Full Name
                  </label>
                </div>

                {/* 3. Email Input */}
                <div className="group relative">
                  <input
                    type="email"
                    required
                    className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 focus:outline-none focus:border-blue-600 transition-all font-bold text-xl placeholder-transparent"
                    placeholder="Email"
                    id="email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-blue-600 pointer-events-none"
                  >
                    Email Address
                  </label>
                </div>

                {/* 4. Phone Number Input */}
                <div className="group relative">
                  <input
                    type="tel"
                    required
                    className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 focus:outline-none focus:border-blue-600 transition-all font-bold text-xl placeholder-transparent"
                    placeholder="Phone Number"
                    id="phone"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-blue-600 pointer-events-none"
                  >
                    Phone Number
                  </label>
                </div>

                {/* 4. Project Brief */}
                <div className="group relative">
                  <textarea
                    rows={3}
                    required
                    className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 focus:outline-none focus:border-blue-600 transition-all font-bold text-xl placeholder-transparent resize-none"
                    placeholder="Brief"
                    id="brief"
                  />
                  <label
                    htmlFor="brief"
                    className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-blue-600 pointer-events-none"
                  >
                    Brief description
                  </label>
                </div>

                {/* 5. Submit Button */}
                <button className="group w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-blue-600 transition-all flex items-center justify-center gap-4 relative overflow-hidden shadow-2xl">
                  <span className="relative z-10">Initialize Sync</span>
                  <Send
                    size={16}
                    className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />

                  {/* Subtle hover effect light */}
                  <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700" />
                </button>

                {/* <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-widest">
                  Secure transmission // AES-256 Encrypted
                </p> */}
              </form>
            </div>
          </div>
        </div>

        {/* Footer Marquee */}
        <div className="mt-14 border-t border-slate-100 flex flex-wrap justify-between items-center gap-12 grayscale opacity-30">
          <span className="font-black text-2xl tracking-tighter">
            THINKSYNC SOLUTIONS.
          </span>
          <span className="font-black text-2xl tracking-tighter italic text-blue-600">
            READY TO BUILD.
          </span>
          <span className="font-black text-2xl tracking-tighter">© 2026</span>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
