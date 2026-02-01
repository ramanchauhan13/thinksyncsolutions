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

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "QCD Travels",
      category: "Full Stack – Next.js",
      desc: "A scalable travel discovery platform where users explore destinations, check real-time availability details, interact with an AI-powered chatbot for assistance, and connect directly with travel authorities for inquiries.",
      stack: ["Next.js", "MongoDB", "Tailwind CSS"],
      color: "bg-blue-600 text-white",
      status: "Live",
    },
    {
      id: "02",
      title: "Durga Brass Overseas",
      category: "Website Development",
      desc: "A modern website for a leading brassware exporter, featuring an interactive product catalog, client testimonials, and integrated inquiry forms to boost global outreach.",
      stack: ["Next.js", "MongoDB", "Tailwind CSS"],
      color: "bg-white text-slate-900",
      status: "Production",
    },
    {
      id: "03",
      title: "ThinkNOrder",
      category: "Business Solutions",
      desc: "An AI-driven order management system that streamlines order processing, inventory tracking, and customer communication for small to medium-sized enterprises.",
      stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      color: "bg-slate-900 text-slate-100",
      status: "Production",
    },
    {
      id: "04",
      title: "Hevoc Events",
      category: "Event Management Platform",
      desc: "A comprehensive event management platform that allows users to create, manage, and promote events with features like ticketing, scheduling, and attendee engagement tools.",
      stack: ["Next.js", "Tailwind CSS"],
      color: "bg-blue-50 text-blue-600",
      status: "Live",
    },
    {
      id: "05",
      title: "DzineTech Solutions",
      category: "Corporate Website",
      desc: "A sleek corporate website for a tech solutions provider, showcasing services, case studies, and a blog to establish thought leadership in the industry.",
      stack: ["Next.js", "Tailwind CSS"],
      color: "bg-blue-600 text-white",
      status: "Live",
    },
    {
      id: "06",
      title: "OM Royal GYM",
      category: "Fitness Center App",
      desc: "A user-friendly app for a fitness center that offers class scheduling, trainer profiles, workout tracking, and membership management to enhance client engagement.",
      stack: ["React Native", "Node.js", "MongoDB"],
      color: "bg-white text-slate-900",
      status: "Development",
    },
    {
      id: "07",
      title: "PotatoTrails",
      category: "Travel Blog",
      desc: "A visually appealing travel blog platform where users can share travel experiences, tips, and itineraries, complete with photo galleries and interactive maps.",
      stack: ["React.js", "Node.js","MongoDB", "Tailwind CSS"],
      color: "bg-slate-900 text-slate-100",
      status: "Live",
    }
  ];

  return (
      <div className="min-h-screen bg-white py-26 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-12 bg-blue-600"></span>
                <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">
                  Proven Shipments
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
                className={`group relative p-10 rounded-[3rem] transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col justify-between h-[400px] ${p.color} hover:shadow-2xl hover:shadow-blue-200`}
              >
                {/* Top Row: Meta Info */}
                <div className="z-10 flex justify-between items-start">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest opacity-60">
                      {p.id} / {p.category}
                    </span>
                    <h2 className="text-4xl font-black mt-2 uppercase tracking-tighter">
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
                  <p className="text-lg font-medium leading-relaxed mb-8 max-w-md opacity-90">
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
                <div className="z-10 flex items-center gap-6">
                  <button className="flex items-center gap-2 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Launch Project <ExternalLink size={14} />
                  </button>
                  <div className="h-4 w-[1px] bg-current opacity-20"></div>
                  <button className="opacity-60 hover:opacity-100 transition-opacity">
                    <Github size={20} />
                  </button>
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
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-slate-900 transition-all flex items-center gap-3">
                START A PROJECT <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;
