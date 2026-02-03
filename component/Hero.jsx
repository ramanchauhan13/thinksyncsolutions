import React from "react";
import { ArrowRight, Zap, Cpu } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative py-26 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-[1px] w-12 bg-blue-600"></span>
            <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase">
              Elite Software Partner
            </span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] mb-8 text-slate-900">
            WE BUILD <br />
            <span className="text-blue-600 italic">THE FUTURE</span> <br />
            OF SYNC.
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
            Enterprise-grade development for startups that mean business. We
            transform complex logic into seamless digital experiences.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-blue-700 transition-all group"
            >
              GET STARTED
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            {/* <div className="flex -space-x-3 items-center">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200" />
                ))}
                <span className="pl-6 text-sm font-bold text-slate-400">Trusted by 50+ Leaders</span>
              </div> */}
          </div>
        </div>

        {/* <div className="relative">
          <div className="relative bg-white border border-white/40 shadow-2xl rounded-[3rem] p-10 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-200" />
                <div className="w-3 h-3 rounded-full bg-blue-200" />
              </div>
              <div className="h-2 w-24 bg-blue-200 rounded-full" />
            </div>
            <div className="space-y-6">
              <div className="h-12 w-full bg-blue-200 rounded-2xl flex items-center px-4">
                <div className="h-2 w-2/3 bg-blue-600 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-slate-100 rounded-3xl border border-slate-100 flex flex-col items-center justify-center p-4">
                  <span className="text-3xl font-black text-blue-600">99%</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    Uptime
                  </span>
                </div>
                <div className="h-32 bg-blue-600 rounded-3xl flex flex-col items-center justify-center p-4 shadow-xl shadow-blue-200">
                  <Cpu className="text-white w-8 h-8 mb-2" />
                  <span className="text-[10px] uppercase font-bold text-blue-100">
                    Optimized
                  </span>
                </div>
              </div>
              <div className="h-20 w-full bg-slate-900 rounded-2xl flex items-center justify-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-900"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-10 -left-10 w-full h-full bg-blue-50 rounded-[2.5rem] -z-10 border border-blue-100 lg:-rotate-3" />
        </div> */}
        <div className="relative">
          {/* The "Code Engine" - Represents your development depth */}
          <div className="relative bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-800 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <div className="text-[10px] text-slate-500 font-mono ml-4 uppercase tracking-widest">
                think_sync_engine.js
              </div>
            </div>

            <div className="font-mono text-sm space-y-3">
              <div className="flex gap-4">
                <span className="text-slate-600">01</span>
                <span className="text-blue-400">import</span>
                <span className="text-slate-300">{" { Sync } "}</span>
                <span className="text-blue-400">from</span>
                <span className="text-emerald-400">'@thinksync/core'</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600">02</span>
                <span className="text-purple-400">const</span>
                <span className="text-slate-300">deployFuture = () ={">"}</span>
                <span className="text-blue-400">true</span>
              </div>
              <div className="flex gap-4 opacity-50">
                <span className="text-slate-600">03</span>
                <span className="text-slate-400">
                  // Transforming logic into experience
                </span>
              </div>
              <div className="h-20 bg-blue-600/10 rounded-xl border border-blue-500/20 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-1 h-4 bg-blue-500 animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-blue-400 font-bold uppercase tracking-tighter">
                    System Synchronized
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* The "Mobile Result" - Floating on top to show the final product */}
          <div className="absolute -bottom-10 -right-4 w-40 h-72 bg-white rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl hidden md:block transform lg:rotate-6 hover:rotate-0 transition-all duration-500">
            <div className="w-12 h-1 bg-slate-200 mx-auto mt-3 rounded-full" />
            <div className="p-4 mt-6">
              <div className="w-full h-32 bg-slate-100 rounded-2xl mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20" />
                <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600 w-8 h-8" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 rounded-full" />
                <div className="h-2 w-2/3 bg-slate-100 rounded-full" />
                <div className="pt-4">
                  <div className="h-8 w-full bg-blue-600 rounded-lg shadow-lg shadow-blue-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
