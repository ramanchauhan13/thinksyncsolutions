import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowUpRight,
  Cpu,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Globe,
  Layers,
  Activity,
} from "lucide-react";

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
    description: project.desc || project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectTags = project.stack || project.tags || [];
  const projectMetrics = project.metrics || [];
  const projectHighlights = project.highlights || project.features || [];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden transition-colors duration-300">
      {/* Subtle Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")`,
        }}
      />

      <main className="relative z-10 max-w-full mx-auto px-6 py-16 md:py-20">
        {/* Top Return Navigation */}
        <div className="mb-10">
          <Link
            href="/work"
            aria-label="Return to ThinkSync Solutions Work Page"
            className="inline-flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Selected Projects
          </Link>
        </div>

        {/* Category Badge & Title Block */}
        <div className="space-y-4 mb-10 border-b border-slate-100 dark:border-slate-800 pb-10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 text-xs font-mono font-bold tracking-widest uppercase">
              {project.category || "Case Study"}
            </span>
            <span className="text-slate-400 font-mono text-xs">•</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {project.status || "Production Ready"}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.88] text-slate-950 dark:text-white">
                {project.title}
              </h1>
              {project.tagline && (
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold tracking-tight mt-4">
                  {project.tagline}
                </p>
              )}
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={project.link || "#"}
                aria-label={`Visit the live deployment of ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group whitespace-nowrap bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-slate-900 dark:hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-blue-500/20 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                Live Deployment
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Live Website Preview Frame */}
        <div className="mb-16 rounded-[2.5rem] bg-slate-900 dark:bg-slate-950 p-4 md:p-6 border border-slate-800 shadow-2xl overflow-hidden relative group">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 rounded-2xl border border-slate-800 mb-4 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-slate-500 hidden sm:inline-block">
                {project.link || "https://thinksync.in"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest">
              <Sparkles size={12} className="text-blue-400" /> Interactive Showcase
            </div>
          </div>

          <div className="relative h-[320px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
            <img
              src={
  project.image ||
  `https://api.microlink.io/?url=${encodeURIComponent(
    project.link || "https://thinksync.in"
  )}&screenshot=true&meta=false&embed=screenshot.url`
}
              alt={`${project.title} interface preview`}
              className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Overview & Tech Specs Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Details */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                // The Executive Summary
              </h2>
              <p className="text-xl md:text-2xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed tracking-tight">
                {project.desc || project.description}
              </p>
            </div>

            {project.longDesc && (
              <div className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                  Detailed Solution Breakdown
                </h3>
                <p>{project.longDesc}</p>
              </div>
            )}

            {/* Highlights List if present */}
            {projectHighlights.length > 0 && (
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                  Key Engineering Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium"
                    >
                      <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Dark Bento Card Specifications */}
          <div className="lg:col-span-5 bg-slate-900 dark:bg-slate-950 text-white p-6 md:p-8 rounded-[2.5rem] border border-slate-800 space-y-6 shadow-2xl relative overflow-hidden">
            {/* Header tag inside bento */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Layers size={16} /> Architecture & Specs
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                ID: {project.id || project.slug}
              </span>
            </div>

            {/* Metric Metrics Grid */}
            {projectMetrics.length > 0 && (
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Activity size={12} className="text-emerald-400" /> Key Impact Metrics
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {projectMetrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between font-mono text-xs"
                    >
                      <span className="text-slate-400">Metric 0{mIdx + 1}</span>
                      <span className="text-emerald-400 font-bold truncate">
                        ✓ {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Tech Stack Badges */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-slate-400">
                <Cpu size={14} className="text-blue-400" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                  Engineered Ecosystem
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {projectTags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 font-mono text-xs font-bold text-slate-200 hover:border-blue-500 hover:text-blue-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct URL Anchor */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe size={14} className="text-blue-400" /> Target URL
              </span>
              <a
                href={project.link || "#"}
                aria-label={`Visit the live deployment of ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-bold truncate max-w-[180px]"
              >
                {project.link ? project.link.replace(/^https?:\/\//, "") : "thinksync.in"}
              </a>
            </div>

            {/* Subtle Accent Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-[70px] pointer-events-none" />
          </div>
        </div>

        {/* Bottom Navigation Footer */}
        <div className="mt-20 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/work"
            aria-label="Return to ThinkSync Solutions Work Page"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            ← Return to Selected Projects
          </Link>
          <a
            href={project.link || "#"}
            aria-label={`Launch the live deployment of ${project.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Launch Live Platform <ArrowUpRight size={14} />
          </a>
        </div>
      </main>
    </div>
  );
}