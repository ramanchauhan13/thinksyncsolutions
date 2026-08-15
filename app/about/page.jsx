import React from "react";
import {
  ArrowDownRight,
  CheckCircle2,
  Zap,
  Users2,
  Target,
  Cpu,
  Layers,
  Lock,
  ShieldCheck,
  Code2,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About ThinkSync Solutions",
  description:
    "Learn about ThinkSync Solutions, a software development company specializing in Next.js, MERN stack, ERP systems, and AI-powered applications.",
};

const AboutPage = () => {
  const values = [
    {
      title: "Precision",
      desc: "We don't guess. We measure. Every line of code is optimized for performance and security.",
    },
    {
      title: "Sync-First",
      desc: "Communication is our backbone. We stay in total alignment with your internal teams.",
    },
    {
      title: "Scalability",
      desc: "We build for your Series B, C, and beyond. Architecture that grows with your users.",
    },
  ];

  const guarantees = [
    {
      icon: Lock,
      title: "Strict NDA & IP Ownership",
      desc: "Your intellectual property and codebase remain 100% confidential and owned entirely by your company.",
    },
    {
      icon: ShieldCheck,
      title: "Production SLA & QA",
      desc: "Rigorous automated testing, security audits, and continuous CI/CD pipelines before any live deployment.",
    },
    {
      icon: Code2,
      title: "Direct Engineer Sync",
      desc: "No non-technical account managers. Collaborate directly with architects and core developers in real-time.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Subtle Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <main className="relative z-10 max-w-full mx-auto px-6 py-20">
        {/* Section 1: The Manifesto */}
        <div className="grid lg:grid-cols-2 gap-20 mb-10">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex flex-col gap-1">
                <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
                <span className="h-1 w-6 bg-blue-600/30 rounded-full"></span>
              </div>

              <span className="text-slate-900 font-black tracking-[0.3em] text-xs uppercase relative">
                Who We Are
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase">
              WE BUILD <br /> <span className="text-blue-600 italic">TECH</span>{" "}
              THAT <br /> WORKS.
            </h1>
          </div>
          <div className="lg:pt-6">
            <p className="text-2xl md:text-4xl font-bold leading-tight mb-8 tracking-tight">
              ThinkSync Solutions was founded on a simple premise: Software
              should be a catalyst, not a bottleneck.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              We are a collective of senior engineers and designers who believe
              in the power of synchronization. By aligning deep technical
              expertise with your unique business goals, we create digital
              products that are as reliable as they are innovative.
            </p>
          </div>
        </div>

        {/* Section 2: Numbers that Matter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10 border-y border-slate-100 py-20">
          {[
            { label: "Products Shipped", val: "100+" },
            { label: "Lines of Code", val: "4.2M" },
            { label: "Client Growth", val: "140%" },
            { label: "Expert Developers", val: "5+" },
          ].map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="text-5xl md:text-7xl font-black text-blue-600 mb-2 tracking-tighter">
                {stat.val}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section 3: Core Values */}
        <div className="mb-10">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-10 text-center">
            The{" "}
            <span className="text-blue-600 italic underline">ThinkSync</span>{" "}
            Way.
          </h2>
          <div className="grid lg:grid-cols-3 gap-1px bg-slate-100 border border-slate-100 overflow-hidden rounded-[3rem]">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white p-12 flex flex-col items-center text-center group hover:bg-blue-600 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-white/20 group-hover:text-white transition-all">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white">
                  {v.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-blue-100 transition-colors">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: What We Do (SEO & Intent Optimization) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 items-start border-t border-slate-200/60 pt-20">
  {/* Left Column: Sticky Header */}
  <div className="lg:col-span-5 sticky top-12">
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 backdrop-blur-sm mb-6">
      <Layers className="text-blue-600 animate-pulse" size={18} />
      <span className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-700">
        Capabilities
      </span>
    </div>
    <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] text-slate-900">
      WHAT <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
        WE DO.
      </span>
    </h2>
  </div>

  {/* Right Column: Content Cards */}
  <div className="lg:col-span-7 space-y-6">
    <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-xl shadow-slate-900/10 border border-slate-800 transition-all duration-300 hover:shadow-2xl">
      <p className="text-xl md:text-2xl font-bold leading-relaxed tracking-tight text-slate-100">
        ThinkSync Solutions is a premier software development company
        specializing in high-performance digital architectures for startups
        and enterprises across India.
      </p>
    </div>

    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 hover:border-blue-200 transition-colors duration-300">
      <p className="text-slate-600 text-lg leading-relaxed">
        We engineer custom applications from the ground up, utilizing
        production-grade framework stacks like{" "}
        <span className="font-semibold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">
          Next.js
        </span>{" "}
        and the{" "}
        <span className="font-semibold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">
          MERN ecosystem
        </span>{" "}
        to deliver elite <strong className="text-slate-800">ERP software</strong>,{" "}
        <strong className="text-slate-800">AI-powered platforms</strong>, robust{" "}
        <strong className="text-slate-800">SaaS products</strong>, and targeted business automation systems.
      </p>

      <p className="text-slate-600 text-lg leading-relaxed pt-2 border-t border-slate-200/60">
        Whether you need to deploy enterprise cloud infrastructure, build cross-platform native mobile applications, or orchestrate highly synchronized internal management setups, we transition concepts into ultra-scalable production environments.
      </p>
    </div>
  </div>
</div>

        {/* Section 4.5: Trust & Client Guarantees */}
        <div className="mb-20 pt-16 border-t border-slate-100">
          <div className="mb-12 text-center md:text-left">
            <span className="text-blue-600 font-mono text-xs font-black uppercase tracking-[0.3em] block mb-2">
              Engineering Commitments
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              WHY CLIENTS TRUST THINKSYNC.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-600/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 5: Technologies We Use */}
        <div className="mb-24 bg-slate-50 rounded-[3rem] p-12 md:p-16 border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="text-blue-600" size={20} />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                  Engine Room
                </span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tight">
                TECHNOLOGIES WE USE
              </h2>
            </div>
            <p className="text-slate-500 text-sm font-medium max-w-xs md:text-right">
              Modern, fast, and secure primitives selected to optimize core web vitals and long-term codebase scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "React.js",
              "Node.js",
              "MongoDB",
              "Tailwind CSS",
              "React Native",
              "AI Integration",
              "Cloud Deployment",
            ].map((tech) => (
              <span
                key={tech}
                className="px-6 py-4 rounded-2xl bg-white border border-slate-200/60 font-black text-sm text-slate-800 tracking-wide transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/[0.03]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Section 6: Final Hook */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 bg-slate-900 p-16 rounded-[4rem] text-white overflow-hidden relative">
          <div className="max-w-xl z-10">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
              READY TO SYNC YOUR <br /> VISION WITH REALITY?
            </h2>
            <p className="text-slate-400 font-medium">
              Join the 50+ businesses scaling with our custom infrastructure.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-blue-600 transition-all z-10 shadow-xl shadow-blue-500/20 inline-block text-center"
          >
            Let’s Talk Shop
          </Link>
          {/* Decorative Back-text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-black opacity-[0.03] select-none pointer-events-none">
            THINK
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;