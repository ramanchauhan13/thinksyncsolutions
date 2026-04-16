import React from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  Zap,
} from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section id="contact" className="py-12 md:py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto"> {/* Tightened from 7xl to 6xl */}
        
        {/* The "Main Frame" - Added max-height for large screens */}
        <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative border border-white/5 group min-h-[500px]">
          
          {/* Background Glows - Reduced intensity for laptop screens */}
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all duration-1000 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10 h-full">
            
            {/* Left Side: Branding & Info */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                    <Zap className="text-blue-500 fill-blue-500/20" size={16} />
                  </div>
                  <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[9px]">
                    Start the Sync
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-10">
                  Let’s build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 italic">
                    Something.
                  </span>
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <a href="mailto:team.thinksync.solutions@gmail.com" className="group/item block max-w-fit">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-11 h-11 rounded-xl p-3 bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-blue-600 transition-all">
                        <Mail className="text-white" size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-0.5">Send a Brief</p>
                        <span className="text-sm md:text-lg font-bold text-white tracking-tight break-all">
                          team.thinksync.solutions@gmail.com
                        </span>
                      </div>
                    </div>
                  </a>

                  {/* Phone */}
                  {/* Phone Item with 2 Numbers */}
<div className="group/item block max-w-fit">
  <div className="flex items-center gap-4">
    {/* Icon remains static or links to the primary number */}
    <div className="shrink-0 w-11 h-11 rounded-xl p-3 bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-blue-500 transition-all">
      <Phone className="text-white" size={18} />
    </div>
    <div className="min-w-0">
      <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-0.5">
        Instant Sync
      </p>
      <div className="text-sm md:text-lg font-bold text-white tracking-tight flex items-center gap-2 flex-wrap">
        <a 
          href="tel:+918979937257" 
          className="hover:text-blue-500 transition-colors whitespace-nowrap"
        >
          +91 89799 37257
        </a>
        
        <span className="text-slate-700 font-light">|</span>
        
        <a 
          href="tel:+919759862839" 
          className="hover:text-blue-500 transition-colors whitespace-nowrap"
        >
          +91 97598 62839
        </a>
      </div>
    </div>
  </div>
</div>
                </div>
              </div>

              {/* Verified Badges - Scaled down for laptop */}
              <div className="mt-12 flex flex-wrap gap-4 items-center opacity-30 grayscale group-hover:opacity-80 transition-all duration-700">
                <span className="text-white font-black text-xs tracking-tighter uppercase">Clutch</span>
                <div className="h-1 w-1 bg-slate-600 rounded-full" />
                <span className="text-white font-black text-xs tracking-tighter uppercase">Top Developer</span>
                <div className="h-1 w-1 bg-slate-600 rounded-full" />
                <span className="text-white font-black text-xs tracking-tighter uppercase">Upwork</span>
              </div>
            </div>

            {/* Right Side: Action Cards - Tightened padding */}
            <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-center gap-4 bg-white/[0.01] backdrop-blur-xl">
              <h4 className="text-white/40 font-black uppercase tracking-[0.2em] text-[9px] px-1 mb-1">
                Choose your entry point
              </h4>

              {/* Project Inquiry Card - More compact */}
              <Link href="/contact" className="group/card relative bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-blue-600 transition-all duration-500 text-left overflow-hidden">
                <div className="relative z-10 flex justify-between items-center">
                  <div>
                    <h3 className="text-white text-lg font-black uppercase tracking-tighter mb-1">Project Brief</h3>
                    <p className="text-slate-400 group-hover/card:text-blue-100 text-xs font-medium max-w-[180px]">
                      Get a quote in 24h.
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 group-hover/card:rotate-45 transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>

              {/* Strategy Call Card */}
              <Link href="/contact" className="group/card relative bg-white p-6 rounded-2xl hover:bg-slate-100 transition-all duration-500 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-slate-900 text-lg font-black uppercase tracking-tighter mb-1">Strategy Call</h3>
                    <p className="text-slate-500 text-xs font-medium max-w-[180px]">
                      Book a technical audit.
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <Calendar size={18} />
                  </div>
                </div>
              </Link>

              <p className="text-center text-slate-600 text-[8px] font-bold uppercase tracking-widest mt-2">
                Avg. response: <span className="text-blue-500">2 Hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;