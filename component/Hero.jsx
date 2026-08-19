"use client";
import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import {Container} from "@/component/Container";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <Container className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT COLUMN: TEXT */}
        <div className="z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
              <span className="h-1 w-6 bg-blue-600/30 rounded-full"></span>
            </div>

            <span className="text-slate-900 dark:text-slate-200 font-black tracking-[0.3em] text-xs uppercase relative">
              Elite Software Partner
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-700 group-hover:w-full"></span>
            </span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] mb-10 text-slate-900 dark:text-white">
            WE BUILD <br />
            <span className="text-blue-600 italic">THE FUTURE</span> <br />
            OF SYNC.
          </h1>
          <p className="lg:text-xl text-lg text-slate-500 dark:text-slate-400 lg:mb-10 mb-6 max-w-lg leading-relaxed font-medium">
            Whether you're launching a new platform or scaling up, we build
            high-performance digital solutions tailored to your goals. We break
            down complex tech hurdles into clean, reliable, and user-friendly
            software that drives real results.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/work"
              aria-label="View our portfolio of work at ThinkSync Solutions"
              className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all"
            >
              OUR WORK
            </Link>

            <Link
              href="/contact"
              aria-label="Contact ThinkSync Solutions to get started on your project"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all group shadow-lg shadow-blue-500/20"
            >
              GET STARTED
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: CODE ENGINE (EXACT ORIGINAL SIZING) */}
        <div className="relative">
          {/* The "Code Engine" Card */}
          <div className="relative bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-slate-800 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-2xl mx-auto">
            {/* Window Header */}
            <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <div className="text-[9px] md:text-[10px] text-slate-500 font-mono ml-4 uppercase tracking-widest truncate">
                think_sync_engine.js
              </div>
            </div>

            {/* Code Content */}
            <div className="font-mono text-xs md:text-sm space-y-3 overflow-x-hidden">
              <div className="flex gap-3 md:gap-4">
                <span className="text-slate-600 shrink-0">01</span>
                <div className="truncate">
                  <span className="text-blue-400">import</span>
                  <span className="text-slate-300">{" { Sync } "}</span>
                  <span className="text-blue-400">from</span>
                  <span className="text-emerald-400 ml-1">
                    '@thinksync/core'
                  </span>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <span className="text-slate-600 shrink-0">02</span>
                <span className="text-purple-400">const</span>
                <span className="text-slate-300 ml-1">
                  deployFuture = () =&gt;
                </span>
                <span className="text-blue-400 ml-1">true</span>
              </div>

              <div className="flex gap-3 md:gap-4 flex-wrap">
                <span className="text-slate-600 shrink-0">03</span>
                <div className="flex flex-wrap items-center">
                  <span className="text-purple-400">await</span>
                  <span className="text-slate-300 ml-1">Sync.</span>
                  <span className="text-yellow-200">initialize</span>
                  <span className="text-slate-300">({"{"} mode: </span>
                  <span className="text-emerald-400">'instant'</span>
                  <span className="text-slate-300"> {"}"})</span>
                </div>
              </div>

              {/* Line 04 - Deployment Trigger */}
              <div className="flex gap-2 lg:gap-4">
                <span className="text-slate-600">04</span>
                <span className="text-purple-400">export default</span>
                <span className="text-slate-300"> deployFuture;</span>
              </div>

              {/* Status Console */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                    Live Production Stream
                  </span>
                </div>

                <div className="space-y-1 font-mono text-[10px] md:text-[11px]">
                  <p className="text-slate-400 flex items-center gap-2">
                    <span className="text-emerald-500">✔</span> Optimization
                    engine primed...
                  </p>
                  <p className="text-blue-400 animate-pulse">
                    &gt; Deployment in progress_
                  </p>
                </div>
              </div>

              {/* Sync Visualizer */}
              <div className="h-14 md:h-16 bg-blue-600/10 rounded-xl border border-blue-500/20 flex items-center justify-center mt-4">
                <div className="flex flex-col items-center">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-0.5 md:w-1 h-3 md:h-4 bg-blue-500 animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-[8px] md:text-[10px] text-blue-400 font-bold uppercase tracking-tighter">
                    System Synchronized
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* The "Mobile Result" */}
          <div className="absolute -bottom-10 -right-4 w-36 h-64 lg:w-40 lg:h-72 bg-white dark:bg-slate-900 rounded-[2.5rem] border-[6px] md:border-8 border-slate-900 dark:border-slate-800 shadow-2xl hidden md:block transform lg:rotate-6 hover:rotate-0 transition-all duration-500">
            <div className="w-10 h-1 bg-slate-200 dark:bg-slate-700 mx-auto mt-3 rounded-full" />
            <div className="p-4 mt-4">
              <div className="w-full h-24 lg:h-32 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-4 overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-10" />
                <Zap className="text-blue-600 dark:text-blue-400 w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full" />
                <div className="h-1.5 w-2/3 bg-slate-100 dark:bg-slate-800 rounded-full" />
                <div className="pt-4">
                  <div className="h-7 lg:h-8 w-full bg-blue-600 rounded-lg shadow-lg shadow-blue-200 dark:shadow-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-blue-500/20 blur-[80px] md:blur-[100px] -z-10" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
