import React from 'react'
import { ArrowUpRight, Mail, Phone, Calendar, MessageSquare, Zap } from 'lucide-react'

const ContactUs = () => {
  return (
    <section id="contact" className="py-10 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* The "Main Frame" */}
        <div className="bg-[#0f172a] rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] relative border border-white/5 group">
          
          {/* Animated Glow - follows the "creative agency" vibe */}
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-blue-600/20 blur-[140px] rounded-full group-hover:bg-blue-600/30 transition-all duration-1000" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-indigo-600/10 blur-[100px] rounded-full" />

          <div className="grid lg:grid-cols-12 relative z-10">
            
            {/* Left Side: Branding & Direct Links (7 Columns) */}
            <div className="lg:col-span-7 p-10 md:py-20 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                   <Zap className="text-blue-500 fill-blue-500/20" size={20} />
                </div>
                <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">Start the Sync</span>
              </div>

              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-12">
                Let’s build <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 italic">Something.</span>
              </h2>

              <div className="space-y-8 max-w-md">
                <div className="group/item cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:border-blue-600 transition-all duration-500 group-hover/item:-rotate-12">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Send a Brief</p>
                      <span className="text-xl md:text-2xl font-bold text-white tracking-tight">hello@thinksync.solutions</span>
                    </div>
                  </div>
                </div>

                <div className="group/item cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:border-blue-600 transition-all duration-500 group-hover/item:rotate-12">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Instant Sync</p>
                      <span className="text-xl md:text-2xl font-bold text-white tracking-tight">+1 (555) 000-SYNC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Badges */}
              <div className="mt-10 flex flex-wrap gap-8 items-center opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000">
                 <span className="text-white font-black text-lg tracking-tighter">CLUTCH.</span>
                 <div className="h-1 w-1 bg-slate-600 rounded-full" />
                 <span className="text-white font-black text-lg tracking-tighter">TOP DEVELOPER.</span>
                 <div className="h-1 w-1 bg-slate-600 rounded-full" />
                 <span className="text-white font-black text-lg tracking-tighter">UPWORK.</span>
              </div>
            </div>

            {/* Right Side: Action Cards (5 Columns) */}
            <div className="lg:col-span-5 p-6 md:p-12 flex flex-col justify-center gap-6 bg-white/[0.02] backdrop-blur-3xl">
              
              <h4 className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px] px-2">Choose your entry point</h4>

              {/* Action: Project Inquiry */}
              <button className="group/card relative bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-blue-600 transition-all duration-500 text-left overflow-hidden">
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-2">Project Brief</h3>
                    <p className="text-slate-400 group-hover/card:text-blue-100 text-sm font-medium max-w-[200px]">Send us your requirements and get a quote in 24h.</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 group-hover/card:rotate-45 transition-transform duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <MessageSquare className="absolute -bottom-4 -right-4 text-white/5 group-hover:text-white/10 transition-colors" size={100} />
              </button>

              {/* Action: Discovery Call */}
              <button className="group/card relative bg-white p-8 rounded-[2rem] hover:bg-slate-100 transition-all duration-500 text-left">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-slate-900 text-2xl font-black uppercase tracking-tighter mb-2">Strategy Call</h3>
                    <p className="text-slate-500 text-sm font-medium max-w-[200px]">Book a 15-minute technical audit with our founders.</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white group-hover/card:scale-110 transition-transform">
                    <Calendar size={20} />
                  </div>
                </div>
              </button>

              {/* Help Text */}
              <p className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-4">
                Average response time: <span className="text-blue-500 underline underline-offset-4">2 Hours</span>
              </p>
            </div>

          </div>
        </div>

        {/* Footer Branding Bar */}
        {/* <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 px-6">
          <div className="flex items-center gap-4">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">ThinkSync // SV. BRANCH</div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          
          <div className="hidden md:block h-[1px] flex-grow mx-10 bg-slate-100" />
          
          <div className="flex gap-8 items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 cursor-pointer hover:text-blue-600 transition-colors">LinkedIn</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 cursor-pointer hover:text-blue-600 transition-colors">X / Twitter</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 italic">2026 Edition</span>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default ContactUs