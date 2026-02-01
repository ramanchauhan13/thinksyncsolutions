import React from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {

  const socialLinks = [
  // {
  //   icon: <Twitter />,
  //   url: "https://twitter.com/yourusername",
  // },
  {
    icon: <Linkedin />,
    url: "https://linkedin.com/in/thinksyncsolutions",
  },
  {
    icon: <Github />,
    url: "https://github.com/thinksyncsolutions",
  },
  {
    icon: <Instagram />,
    url: "https://instagram.com/thinksync.solutions",
  },
];
  return (
    <footer className="bg-[#0f172a] pt-24 pb-10 px-6 text-white rounded-t-[3rem] md:rounded-t-[5rem] relative overflow-hidden">
      {/* Massive Background Text - Brand Identity */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
        THINKSYNC
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Left: Call to Action */}
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter uppercase">
              READY TO<br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 italic">SYNC UP?</span>
            </h2>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest">
              <a href="mailto:team.thinksyncsolutions@gmail.com" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 group">
                team.thinksyncsolutions@gmail.com
                <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+918979937257" className="text-slate-400 hover:text-blue-500 transition-colors">
                +91 8979937257
              </a>
            </div>
          </div>

          {/* Right: The Magnetic Button */}
          <div className="relative group self-center lg:self-start">
            <div className="absolute inset-0 bg-blue-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
            <button className="relative w-48 h-48 md:w-56 md:h-56 bg-white text-slate-900 rounded-full font-black text-xl hover:bg-blue-600 hover:text-white transition-all duration-500 flex flex-col items-center justify-center shadow-2xl uppercase tracking-tighter overflow-hidden">
              <span className="relative z-10">Hire Us</span>
              <span className="text-[10px] opacity-60 mt-2">Right Now</span>
              {/* Spinning decorative text would go here in a real implementation */}
            </button>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-t border-white/5 pt-16">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-6">Expertise</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">SaaS Development</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mobile Solutions</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cloud Architecture</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Our Process</li>
              <li className="hover:text-white cursor-pointer transition-colors">Client Voices</li>
              <li className="hover:text-white cursor-pointer transition-colors">Global Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-6">Socials</h4>
           <div className="flex gap-4">
  {socialLinks.map((item, i) => (
    <a
      key={i}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer"
    >
      {React.cloneElement(item.icon, { size: 18 })}
    </a>
  ))}
</div>
          </div>
          <div className="flex flex-col justify-end items-end">
            <div className="text-right">
              <div className="text-xs font-black uppercase tracking-widest text-white mb-2 underline decoration-blue-600 decoration-2 underline-offset-4">Legal</div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Privacy Policy</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Terms of Service</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span>© {new Date().getFullYear()} THINKSYNC SOLUTIONS</span>
           </div>
           <div className="italic">Built with precision & code.</div>
           <div className="flex gap-4">
              <span className="text-slate-400">Moradabad, IN</span>
              <span className="text-slate-800">|</span>
              <span className="text-slate-400">Remote Global</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;