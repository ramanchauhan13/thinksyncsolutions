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
    <section id="contact" className="py-12 md:py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* The "Main Frame" */}
        <div className="bg-[#0f172a] rounded-3xl md:rounded-[3.5rem] overflow-hidden shadow-2xl relative border border-white/5 group">
          
          {/* Background Glows - Adjusted for mobile visibility */}
          <div className="absolute top-[-10%] right-[-10%] w-[80%] md:w-[60%] h-[60%] md:h-[120%] bg-blue-600/20 blur-[80px] md:blur-[140px] rounded-full group-hover:bg-blue-600/30 transition-all duration-1000" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[40%] md:h-[80%] bg-indigo-600/10 blur-[60px] md:blur-[100px] rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
            
            {/* Left Side: Branding & Direct Links */}
            <div className="lg:col-span-7 p-8 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                  <Zap className="text-blue-500 fill-blue-500/20" size={18} />
                </div>
                <span className="text-blue-500 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px]">
                  Start the Sync
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-10 md:mb-12">
                Let’s build <br />{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-indigo-400 italic">
                  Something.
                </span>
              </h2>

              <div className="space-y-6 md:space-y-8 max-w-md">
                {/* Email Item */}
                <a href="mailto:team.thinksync.solutions@gmail.com" className="group/item block">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl p-3 md:p-4 bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:border-blue-600 transition-all duration-500 group-hover/item:-rotate-12">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                        Send a Brief
                      </p>
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight break-all">
                        team.thinksync.solutions@gmail.com
                      </span>
                    </div>
                  </div>
                </a>

                {/* Phone Item */}
                <a href="tel:+918979937257" className="group/item block">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl p-3 md:p-4 bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:border-blue-600 transition-all duration-500 group-hover/item:rotate-12">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                        Instant Sync
                      </p>
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                        +91 8979937257
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Verified Badges */}
              <div className="mt-12 md:mt-16 flex flex-wrap gap-4 md:gap-8 items-center opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000">
                <span className="text-white font-black text-base md:text-lg tracking-tighter">
                  CLUTCH.
                </span>
                <div className="h-1 w-1 bg-slate-600 rounded-full" />
                <span className="text-white font-black text-base md:text-lg tracking-tighter">
                  TOP DEVELOPER.
                </span>
                <div className="h-1 w-1 bg-slate-600 rounded-full" />
                <span className="text-white font-black text-base md:text-lg tracking-tighter">
                  UPWORK.
                </span>
              </div>
            </div>

            {/* Right Side: Action Cards */}
            <div className="lg:col-span-5 p-6 md:p-12 flex flex-col justify-center gap-4 md:gap-6 bg-white/2 backdrop-blur-3xl">
              <h4 className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px] px-2 mb-2">
                Choose your entry point
              </h4>

              {/* Action: Project Inquiry */}
              <Link href="/contact" className="group/card relative bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl md:rounded-4xl hover:bg-blue-600 transition-all duration-500 text-left overflow-hidden block">
                <div className="relative z-10 flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-2">
                      Project Brief
                    </h3>
                    <p className="text-slate-400 group-hover/card:text-blue-100 text-sm font-medium max-w-50">
                      Send us your requirements and get a quote in 24h.
                    </p>
                  </div>
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 group-hover/card:rotate-45 transition-transform duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <MessageSquare
                  className="absolute -bottom-4 -right-4 text-white/5 group-hover:text-white/10 transition-colors"
                  size={80}
                />
              </Link>

              {/* Action: Discovery Call */}
              <Link href="/contact" className="group/card relative bg-white p-6 md:p-8 rounded-3xl md:rounded-4xl hover:bg-slate-100 transition-all duration-500 text-left block">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-slate-900 text-xl md:text-2xl font-black uppercase tracking-tighter mb-2">
                      Strategy Call
                    </h3>
                    <p className="text-slate-500 text-sm font-medium max-w-50">
                      Book a 15-minute technical audit with us.
                    </p>
                  </div>
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white group-hover/card:scale-110 transition-transform">
                    <Calendar size={20} />
                  </div>
                </div>
              </Link>

              {/* Help Text */}
              <p className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-4">
                Average response time:{" "}
                <span className="text-blue-500 underline underline-offset-4">
                  2 Hours
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;