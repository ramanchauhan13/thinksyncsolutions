import React from "react";
import { ExternalLink, ArrowUpRight, FolderGit2, Sparkles } from "lucide-react";
import Link from "next/link";
import { projects } from "../../data/projects";

export const metadata = {
  title: "Our Work | ThinkSync Solutions",
  description:
    "Explore case studies and featured projects built by ThinkSync Solutions, including web platforms, SaaS products, and enterprise applications.",
};

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Subtle Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")`,
        }}
      />

      <main className="relative z-10 max-w-full mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <span className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="h-1 w-6 bg-blue-600/30 rounded-full" />
            </div>
            <span className="text-slate-900 font-black tracking-[0.3em] text-xs uppercase">
              Selected Projects
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-6">
            CRAFTED WITH <br />
            <span className="text-blue-600 italic">PRECISION.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            From high-concurrency SaaS applications to custom enterprise backends, 
            here is a glimpse into how we transform ideas into production-ready software.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-12 mb-24">
          {projects.map((project, idx) => {
            const projectTags = project.stack || project.tags || [];
            const projectMetrics = project.metrics || [];

            return (
              <div
                key={project.id || idx}
                className="group bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 border border-slate-800 hover:border-slate-700 transition-all duration-500 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden shadow-2xl"
              >
                {/* Left Info Column */}
                <div className="lg:col-span-7 space-y-6 z-10">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                      <Link href={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>
                    {project.tagline && (
                      <p className="text-slate-400 font-semibold text-lg">
                        {project.tagline}
                      </p>
                    )}
                  </div>

                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {project.desc || project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  {projectTags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {projectTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-mono font-bold border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Metrics Row */}
                  {projectMetrics.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                      {projectMetrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <span className="text-emerald-400 font-mono text-xs md:text-sm font-bold block">
                            ✓ {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Visual Card Column */}
                <div className="lg:col-span-5 z-10 flex flex-col justify-between h-full bg-slate-950/60 rounded-[2rem] p-6 border border-slate-800/60 min-h-[220px] group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="flex justify-between items-start">
                    <FolderGit2 className="text-blue-500" size={32} />
                    <Link
                      href={project.slug ? `/work/${project.slug}` : project.link || "#"}
                      className="w-12 h-12 rounded-full bg-blue-600 hover:bg-white hover:text-blue-600 text-white flex items-center justify-center transition-all shadow-lg shadow-blue-600/30"
                    >
                      <ArrowUpRight size={22} />
                    </Link>
                  </div>

                  {/* Simulated Visual Preview Block */}
                  <div className="space-y-3 font-mono text-xs text-slate-400 mt-6 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase tracking-widest border-b border-slate-800 pb-2">
                      <Sparkles size={12} className="text-blue-400" /> Live Deployment
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="text-emerald-400 font-bold">
                        {project.status || "Production"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Architecture:</span>
                      <span className="text-blue-400 font-bold">Modular</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Accent Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 bg-slate-900 p-16 rounded-[4rem] text-white overflow-hidden relative">
          <div className="max-w-xl z-10">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
              HAVE A PROJECT <br /> IN MIND?
            </h2>
            <p className="text-slate-400 font-medium">
              Let’s architect software that propels your business forward.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-blue-600 transition-all z-10 shadow-xl shadow-blue-500/20 inline-block text-center"
          >
            Start A Project
          </Link>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-black opacity-[0.03] select-none pointer-events-none">
            WORK
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkPage;

// import React from "react";
// import {
//   ExternalLink,
//   Github,
//   Code2,
//   Monitor,
//   Cpu,
//   Globe,
//   ArrowRight,
// } from "lucide-react";
// import Link from "next/link";
// import { projects } from "../../data/projects";

// export const metadata = {
//   title: "Our Projects - ThinkSync Solutions",
//   description:
//     "Explore our portfolio of projects at ThinkSync Solutions, showcasing our expertise in Next.js, MERN stack, ERP systems, and AI-powered applications. See how we deliver engineered growth through innovative software solutions.",
// };

// const Projects = () => {
//   return (
//     <div className="min-h-screen bg-white py-20 px-6">
//       <div className="max-w-full">
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-4 mb-2">
//   <div className="flex flex-col gap-1">
//     <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
//     <span className="h-1 w-6 bg-blue-600/30 rounded-full"></span>
//   </div>
  
//   <span className="text-slate-900 font-black tracking-[0.3em] text-xs uppercase relative">
//     Our Work
//     <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-700 group-hover:w-full"></span>
//   </span>
// </div>
//             <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase">
//               The <br /> <span className="text-blue-600 italic">Sync</span>{" "}
//               List.
//             </h1>
//           </div>
//           <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 max-w-sm">
//             <p className="text-slate-500 font-bold text-sm leading-relaxed">
//               Every project is a partnership in precision. We don't just ship
//               code; we deliver engineered growth.
//             </p>
//           </div>
//         </div>

//         {/* Project Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((p, i) => (
//             <div
//               key={i}
//               className={`group relative p-8 rounded-[3rem] transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col justify-between h-full ${p.color} hover:shadow-2xl hover:shadow-blue-200`}
//             >
//               {/* Top Row: Meta Info */}
//               <div className="z-10 flex justify-between items-start">
//                 <div>
//                   <span className="text-xs font-black uppercase tracking-widest opacity-60">
//                     {p.id} / {p.category}
//                   </span>
//                   <h2 className="text-4xl font-black my-2 uppercase tracking-tighter">
//                     {p.title}
//                   </h2>
//                 </div>
//                 <div
//                   className={`px-4 py-2 rounded-full text-[10px] font-black border uppercase tracking-widest ${p.color.includes("white") && !p.color.includes("blue") ? "border-slate-200" : "border-current opacity-50"}`}
//                 >
//                   {p.status}
//                 </div>
//               </div>

//               {/* Center Content: Description & Stack */}
//               <div className="z-10">
//                 <p className="text-md font-medium leading-tighter mb-2 max-w-lg opacity-90">
//                   {p.desc}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {p.stack.map((tech) => (
//                     <span
//                       key={tech}
//                       className={`px-4 py-1.5 rounded-lg text-[10px] font-bold border ${p.color.includes("white") && !p.color.includes("blue") ? "bg-slate-50 border-slate-100" : "bg-white/10 border-white/20"}`}
//                     >
//                     {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Bottom Row: Actions */}
//               <div className="z-10 flex items-center gap-6 mt-4">

//   {/* Project Link */}
//   {p.link ? (
//     <Link href={`/work/${p.slug}`} rel="noopener noreferrer">
//       <span className="flex items-center gap-2 font-black text-xs uppercase tracking-widest  transition-all cursor-pointer">
//         Launch Project <ExternalLink size={14} />
//       </span>
//     </Link>
//   ) : (
//     <span className="flex items-center gap-2 font-black text-xs uppercase tracking-widest opacity-40 cursor-not-allowed">
//       Coming Soon
//     </span>
//   )}

//   <div className="h-4 w-px bg-current opacity-20"></div>

//   {/* GitHub Link */}
//   {p.github && (
//     <Link href={p.github} target="_blank" rel="noopener noreferrer">
//       <span className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
//         <Github size={20} />
//       </span>
//     </Link>
//   )}

// </div>

//               {/* Background Graphic Decor to fill space */}
//               <div className="absolute -bottom-20 -right-10 text-[18rem] font-black opacity-[0.03] select-none group-hover:opacity-[0.07] transition-opacity">
//                 {p.id}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action Bar */}
//         <div className="mt-20 p-1 bg-slate-100 rounded-[2.5rem]">
//           <div className="bg-white rounded-[2.3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200/50">
//             <div>
//               <h3 className="text-3xl font-black uppercase tracking-tight mb-2">
//                 Build your vision next.
//               </h3>
//               <p className="text-slate-500 font-medium">
//                 Limited slots available for Q3/Q4 2026 development cycles.
//               </p>
//             </div>
//             <Link
//               href="/contact"
//               className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-slate-900 transition-all flex items-center gap-3"
//             >
//               START A PROJECT <ArrowRight size={18} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
