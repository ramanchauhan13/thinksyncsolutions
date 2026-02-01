import React from 'react';
import { Code2, Layers, MousePointer2, Cpu, ShieldCheck, Globe, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Code2 size={24} />, title: "Full-Stack Dev", desc: "MERN excellence for real-time applications." },
    { icon: <Layers size={24} />, title: "Custom SaaS", desc: "Multi-tenant platforms built to scale to millions." },
    { icon: <MousePointer2 size={24} />, title: "UI/UX Strategy", desc: "Conversion-focused interfaces that reduce churn." },
    { icon: <Cpu size={24} />, title: "Automation", desc: "Proprietary AI and workflow triggers for efficiency." },
    { icon: <ShieldCheck size={24} />, title: "Legacy Migration", desc: "Safely porting old tech to modern cloud stacks." },
    { icon: <Globe size={24} />, title: "Mobile Growth", desc: "Native-feel cross-platform apps using React Native." }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase px-4 py-1 bg-blue-50 rounded-full">
              What we do
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter">
              SPECIALIZED <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">SOLUTIONS.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs text-lg border-l-2 border-blue-600 pl-6">
            We don't do everything. We do the high-impact things <span className="text-slate-900 font-bold">perfectly.</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-10 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Background Accent Blur */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors duration-500" />
              
              {/* Icon & Arrow */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-blue-600 rounded-2xl text-white group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-inner">
                  {s.icon}
                </div>
                <ArrowUpRight className="text-slate-300 group-hover:text-blue-600 transition-colors" size={20} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-slate-800 tracking-tight transition-colors group-hover:text-blue-700">
                  {s.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-8">
                  {s.desc}
                </p>
              </div>

              {/* Decorative Progress Bar */}
              <div className="relative h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-blue-600 to-indigo-400 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;