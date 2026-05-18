import React from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Monitor,
  Cpu,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { projects } from "../../data/projects";

export const metadata = {
  title: "Our Projects - ThinkSync Solutions",
  description:
    "Explore our portfolio of projects at ThinkSync Solutions, showcasing our expertise in Next.js, MERN stack, ERP systems, and AI-powered applications. See how we deliver engineered growth through innovative software solutions.",
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-2">
  <div className="flex flex-col gap-1">
    <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
    <span className="h-1 w-6 bg-blue-600/30 rounded-full"></span>
  </div>
  
  <span className="text-slate-900 font-black tracking-[0.3em] text-xs uppercase relative">
    Our Work
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-700 group-hover:w-full"></span>
  </span>
</div>
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase">
              The <br /> <span className="text-blue-600 italic">Sync</span>{" "}
              List.
            </h1>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 max-w-sm">
            <p className="text-slate-500 font-bold text-sm leading-relaxed">
              Every project is a partnership in precision. We don't just ship
              code; we deliver engineered growth.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-[3rem] transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col justify-between h-full ${p.color} hover:shadow-2xl hover:shadow-blue-200`}
            >
              {/* Top Row: Meta Info */}
              <div className="z-10 flex justify-between items-start">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest opacity-60">
                    {p.id} / {p.category}
                  </span>
                  <h2 className="text-4xl font-black my-2 uppercase tracking-tighter">
                    {p.title}
                  </h2>
                </div>
                <div
                  className={`px-4 py-2 rounded-full text-[10px] font-black border uppercase tracking-widest ${p.color.includes("white") && !p.color.includes("blue") ? "border-slate-200" : "border-current opacity-50"}`}
                >
                  {p.status}
                </div>
              </div>

              {/* Center Content: Description & Stack */}
              <div className="z-10">
                <p className="text-md font-medium leading-tighter mb-2 max-w-lg opacity-90">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-1.5 rounded-lg text-[10px] font-bold border ${p.color.includes("white") && !p.color.includes("blue") ? "bg-slate-50 border-slate-100" : "bg-white/10 border-white/20"}`}
                    >
                    {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Actions */}
              <div className="z-10 flex items-center gap-6 mt-4">

  {/* Project Link */}
  {p.link ? (
    <Link href={`/projects/${p.slug}`} rel="noopener noreferrer">
      <span className="flex items-center gap-2 font-black text-xs uppercase tracking-widest  transition-all cursor-pointer">
        Launch Project <ExternalLink size={14} />
      </span>
    </Link>
  ) : (
    <span className="flex items-center gap-2 font-black text-xs uppercase tracking-widest opacity-40 cursor-not-allowed">
      Coming Soon
    </span>
  )}

  <div className="h-4 w-px bg-current opacity-20"></div>

  {/* GitHub Link */}
  {p.github && (
    <Link href={p.github} target="_blank" rel="noopener noreferrer">
      <span className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <Github size={20} />
      </span>
    </Link>
  )}

</div>

              {/* Background Graphic Decor to fill space */}
              <div className="absolute -bottom-20 -right-10 text-[18rem] font-black opacity-[0.03] select-none group-hover:opacity-[0.07] transition-opacity">
                {p.id}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-20 p-1 bg-slate-100 rounded-[2.5rem]">
          <div className="bg-white rounded-[2.3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200/50">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-2">
                Build your vision next.
              </h3>
              <p className="text-slate-500 font-medium">
                Limited slots available for Q3/Q4 2026 development cycles.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-slate-900 transition-all flex items-center gap-3"
            >
              START A PROJECT <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
