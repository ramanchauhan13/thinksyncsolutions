import React from "react";
import {
  Code2,
  Layers,
  MousePointer2,
  Cpu,
  ShieldCheck,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: <Code2 size={24} />,
      gif: "/gifs/coding.gif",
      title: "Full-Stack Dev",
      desc: "MERN excellence for real-time applications.",
    },
    {
      icon: <Layers size={24} />,
      gif: "/gifs/saas.gif",
      title: "Custom SaaS",
      desc: "Multi-tenant platforms built to scale to millions.",
    },
    {
      icon: <MousePointer2 size={24} />,
      gif: "/gifs/dashboard.gif",
      title: "UI/UX Strategy",
      desc: "Conversion-focused interfaces that reduce churn.",
    },
    {
      icon: <Cpu size={24} />,
      gif: "/gifs/gear-wrench.gif",
      title: "Automation",
      desc: "Proprietary AI and workflow triggers for efficiency.",
    },
    {
      icon: <ShieldCheck size={24} />,
      gif: "/gifs/migration.gif",
      title: "Legacy Migration",
      desc: "Safely porting old tech to modern cloud stacks.",
    },
    {
      icon: <Globe size={24} />,
      gif: "/gifs/smartphone-coding.gif",
      title: "Mobile Growth",
      desc: "Native-feel cross-platform apps using React Native.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-2">
  <div className="flex flex-col gap-1">
    <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
    <span className="h-1 w-6 bg-blue-600/30 rounded-full"></span>
  </div>
  
  <span className="text-slate-900 font-black tracking-[0.3em] text-xs uppercase relative">
    What We Do
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-700 group-hover:w-full"></span>
  </span>
</div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-none tracking-tighter">
              SPECIALIZED <br />{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">
                SOLUTIONS.
              </span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs text-lg border-l-2 border-blue-600 pl-6">
            We don't do everything. We do the high-impact things{" "}
            <span className="text-slate-900 font-bold">perfectly.</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link key={i} href="/services" className="group">
              <div className="relative h-full bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                
                {/* Background Accent Blur */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl duration-500" />

                {/* GIF Icon & Arrow */}
                <div className="flex justify-between items-start mb-4">
                  <div className="relative w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center duration-500 p-1 overflow-hidden">
                    <img 
                      src={s.gif} 
                      alt={s.title} 
                      className="w-full h-full object-contain mix-blend-multiply transition-all duration-500"
                    />
                  </div>
                  <ArrowUpRight
                    className="text-slate-300 group-hover:text-blue-600 transition-colors"
                    size={24}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-1 text-slate-800 tracking-tight transition-colors group-hover:text-blue-700">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium mb-6">
                    {s.desc}
                  </p>
                </div>

                {/* Decorative Progress Bar */}
                <div className="relative h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-0 bg-linear-to-r from-blue-600 to-indigo-400 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


