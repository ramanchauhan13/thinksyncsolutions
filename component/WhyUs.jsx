import React from 'react'
import { BarChart3, Users, Zap, CheckCircle2 } from 'lucide-react'

const WhyUs = () => {
  return (
    <section id="why" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Creative Visual Grid */}
        <div className="relative">
          {/* Decorative background element */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60" />
          
          <div className="grid grid-cols-2 gap-6 relative z-10">
            {/* Card 1: Growth Driven */}
            <div className="group bg-slate-50 rounded-[2.5rem] h-72 flex flex-col justify-between p-8 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <BarChart3 size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase mb-1">Growth<br/>Driven</h3>
                <div className="h-1 w-8 bg-blue-600 group-hover:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Card 2: User Focused */}
            <div className="group bg-blue-600 rounded-[2.5rem] h-72 translate-y-12 flex flex-col justify-between p-8 text-white shadow-xl shadow-blue-200 transition-all duration-500 hover:shadow-blue-300 hover:translate-y-8">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                <Users size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-1">User<br/>Focused</h3>
                <div className="h-1 w-8 bg-blue-300 group-hover:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Hidden on mobile, decorative card on desktop */}
            {/* <div className="hidden mt-12 md:flex bg-slate-900 rounded-[2.5rem] h-48 -translate-y-4 col-span-2 p-8 items-center gap-6 text-white group">
               <div className="w-16 h-16 rounded-full border-4 border-blue-600 border-t-transparent animate-spin-slow flex items-center justify-center">
                  <Zap className="text-blue-500 fill-blue-500" />
               </div>
               <div>
                  <div className="text-sm font-bold text-blue-400 uppercase tracking-widest">Velocity</div>
                  <div className="text-xl font-bold italic">"Shipping 40% faster than industry standard."</div>
               </div>
            </div> */}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="pt-12 lg:pt-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">Our Advantage</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-10 leading-[0.9] text-slate-900 uppercase tracking-tighter">
            Why we are the <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">right choice.</span>
          </h2>

          <div className="space-y-6">
            {[
              { 
                title: "No Outsourcing.", 
                desc: "Every line of code is written by our local, specialized team. No communication gaps, no timezone issues.",
                icon: <CheckCircle2 className="text-blue-600" size={20} />
              },
              { 
                title: "Future Proof.", 
                desc: "We don't just build for today; we architect for scale. Our codebases are ready for your Series B and beyond.",
                icon: <CheckCircle2 className="text-slate-300 group-hover:text-blue-600" size={20} />
              }
            ].map((item, i) => (
              <div key={i} className="group flex gap-6 p-6 rounded-3xl transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-black text-xl mb-2 uppercase tracking-tight text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs