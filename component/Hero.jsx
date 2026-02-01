import React from 'react'
import { ArrowRight, Zap, Cpu } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[1px] w-12 bg-blue-600"></span>
              <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase">Elite Software Partner</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] mb-8 text-slate-900">
              WE BUILD <br />
              <span className="text-blue-600 italic">THE FUTURE</span> <br />
              OF SYNC.
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
              Enterprise-grade development for startups that mean business. We transform complex logic into seamless digital experiences.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-blue-700 transition-all group">
                GET STARTED <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex -space-x-3 items-center">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200" />
                ))}
                <span className="pl-6 text-sm font-bold text-slate-400">Trusted by 50+ Leaders</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
             {/* Visual "Vibe" Element - Geometric Card Stack */}
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
                    <span className="text-[10px] uppercase font-bold text-slate-400">Uptime</span>
                  </div>
                  <div className="h-32 bg-blue-600 rounded-3xl flex flex-col items-center justify-center p-4 shadow-xl shadow-blue-200">
                    <Cpu className="text-white w-8 h-8 mb-2" />
                    <span className="text-[10px] uppercase font-bold text-blue-100">Optimized</span>
                  </div>
                </div>
                <div className="h-20 w-full bg-slate-900 rounded-2xl flex items-center justify-center">
                   <div className="flex -space-x-2">
                     {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-900" />)}
                   </div>
                </div>
              </div>
            </div>
             <div className="absolute top-10 -left-10 w-full h-full bg-blue-50 rounded-[2.5rem] -z-10 border border-blue-100 lg:-rotate-3" />
          </div>
        </div>
      </section>
  )
}

export default Hero