import React from "react";
import { Search, PenTool, Terminal, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Audit",
      desc: "Analyzing your current tech debt and business goals.",
      icon: <Search size={20} />,
      color: "bg-blue-600",
    },
    {
      step: "02",
      title: "Blueprint",
      desc: "Architecture and high-fidelity UI/UX prototype mapping.",
      icon: <PenTool size={20} />,
      color: "bg-indigo-600",
    },
    {
      step: "03",
      title: "Sprint",
      desc: "Rapid, agile development with transparent weekly builds.",
      icon: <Terminal size={20} />,
      color: "bg-cyan-600",
    },
    {
      step: "04",
      title: "Sync",
      desc: "Final deployment and automated scaling support.",
      icon: <Rocket size={20} />,
      color: "bg-emerald-600",
    },
  ];

  return (
    <section id="process" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with Background Text */}
        <div className="relative mb-24 flex flex-col items-center">
          <span className="absolute -top-10 text-[10rem] font-black text-slate-100 select-none -z-0">
            WORK
          </span>
          <h2 className="relative z-10 text-5xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter text-center">
            The{" "}
            <span className="text-blue-600 italic underline decoration-wavy underline-offset-8">
              Sync
            </span>{" "}
            Workflow
          </h2>
          <p className="mt-22 text-slate-500 font-medium text-center max-w-md">
            A battle-tested methodology designed for speed, clarity, and
            results.
          </p>
        </div>

        {/* Process Path */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-12 z-0" />

          {steps.map((item, idx) => (
            <div key={idx} className="group relative z-10">
              {/* Step Number Badge */}
              <div className="flex items-center justify-center mb-8">
                <div
                  className={`w-14 h-14 rounded-full ${item.color} text-white flex items-center justify-center shadow-xl shadow-blue-200 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700 relative`}
                >
                  {item.icon}
                  {/* Floating Number */}
                  <span className="absolute -top-2 -right-2 bg-white text-slate-900 text-xs font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-slate-100">
                    {item.step}
                  </span>
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-transparent group-hover:border-blue-100 group-hover:bg-white group-hover:shadow-2xl transition-all duration-500 text-center">
                <h4 className="font-black text-xl mb-3 uppercase tracking-tight text-slate-900">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* Visual Progress Indicator */}
                <div className="mt-6 flex justify-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-4 rounded-full ${i <= idx ? item.color : "bg-slate-300"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Arrow (Visible only on small screens) */}
              {idx !== steps.length - 1 && (
                <div className="md:hidden flex justify-center py-4">
                  <div className="h-8 w-[2px] bg-slate-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
