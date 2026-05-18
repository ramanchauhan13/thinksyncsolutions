import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Cpu, Calendar, Briefcase, Globe } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ThinkSync Solutions`,
    description: project.desc,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      {/* Subtle Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Breadcrumb / Category header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
            <span className="h-1 w-6 bg-blue-600/30 rounded-full"></span>
          </div>
          <span className="text-slate-900 font-black tracking-[0.3em] text-xs uppercase">
            {project.category || "Case Study"}
          </span>
        </div>

        {/* Hero Title Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-slate-100 pb-10 mb-10">
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-slate-950">
              {project.title}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pt-4 flex lg:justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group whitespace-nowrap bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-blue-500/10 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Live Deployment
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Overview & Specs Split-Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Extensive Case Study Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
                The Brief
              </h2>
              <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed tracking-tight">
                {project.desc}
              </p>
            </div>
            
            {/* Added container fallback for richer markdown descriptions if added later */}
            {project.longDesc && (
              <div className="text-slate-500 text-lg leading-relaxed space-y-4 pt-4 border-t border-slate-100">
                <p>{project.longDesc}</p>
              </div>
            )}
          </div>

          {/* Right Column: Bento-Style Technical Spec Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100">
            

            {/* Core Tech Stack Section spanning full horizontal space */}
            <div className="sm:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/40">
              <div className="flex items-center gap-2 text-slate-400 mb-4">
                <Cpu size={14} className="text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-wider">Engineered Ecosystem</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 font-black text-xs text-slate-800 tracking-wide hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Back Navigation Anchor */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-colors"
          >
            ← Return to Portfolio Hub
          </Link>
        </div>
      </main>
    </div>
  );
}