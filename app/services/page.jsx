import React from "react";
import {
  ArrowRight,
  Code2,
  Monitor,
  Cpu,
  ShieldCheck,
  Globe,
  Zap,
} from "lucide-react";
import Navbar from "../../component/Navbar";
import Link from "next/link";

const ServicesPage = () => {
  const serviceCategories = [
    {
      id: "01",
      title: "Full-Stack Engineering",
      highlight: "High-Performance Web Architecture",
      description:
        "We design and develop complete web platforms using modern JavaScript ecosystems with real-time architecture, sub-second latency, and cloud scalability.",
      features: [
        "MERN & Next.js SSR Architecture",
        "REST + WebSocket Real-Time Systems",
        "Custom API Orchestration",
        "Microservices Infrastructure",
        "Authentication & Security Layers",
        "Cloud Deployment (AWS / Vercel)",
      ],
    },
    {
      id: "02",
      title: "Custom SaaS Platforms",
      highlight: "Scalable Multi-Tenant Systems",
      description:
        "We build SaaS products engineered for performance, tenant isolation, and long-term scalability — from MVP to millions of users.",
      features: [
        "Multi-Tenant Database Design",
        "Subscription & Billing Systems",
        "Role-Based Access Control",
        "Usage Analytics",
        "Custom Admin Dashboards",
        "API-Driven Architecture",
      ],
    },
    {
      id: "03",
      title: "UI/UX Engineering",
      highlight: "Conversion-Focused Interfaces",
      description:
        "We craft high-impact user experiences that reduce churn, improve engagement, and turn complex systems into intuitive workflows.",
      features: [
        "User Journey Mapping",
        "Conversion-Optimized Design",
        "Design Systems",
        "Accessibility & Responsiveness",
        "Interactive Prototyping",
        "Performance-Optimized Frontend",
      ],
    },
    {
      id: "04",
      title: "Automation Systems",
      highlight: "AI + Workflow Intelligence",
      description:
        "We eliminate manual bottlenecks through smart automation, system triggers, and AI-powered decision flows.",
      features: [
        "Workflow Automation",
        "Custom AI Integrations",
        "Event-Driven Systems",
        "Process Optimization",
        "Data Extraction & Processing",
        "CRM / ERP Tool Integration",
      ],
    },
    {
      id: "05",
      title: "Legacy Modernization",
      highlight: "Safely Transition to Modern Cloud Stacks",
      description:
        "We migrate outdated systems into secure, scalable, cloud-native architectures without disrupting business operations.",
      features: [
        "Legacy Code Refactoring",
        "Cloud Migration",
        "Database Modernization",
        "Legacy System Bridging",
        "Performance Optimization",
        "Security Hardening",
      ],
    },
    {
      id: "06",
      title: "Mobile App Growth",
      highlight: "iOS & Android Cross-Platform",
      description:
        "We build high-performance mobile apps with a native feel using React Native, engineered for growth and engagement.",
      features: [
        "React Native Development",
        "Offline-First Sync",
        "Biometric Authentication",
        "Push Notification Logic",
        "App Store & Play Store Deployment",
        "Real-Time Data Sync",
      ],
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        {/* Texture Layer */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <main className="relative z-10 max-w-7xl mx-auto px-6 py-26">
          {/* Hero Area */}
          <div className="mb-20 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-blue-600" />
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
                Capabilities
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-10">
              WHAT WE <br /> <span className="text-blue-600">SOLVE.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-slate-400 leading-tight">
              We architect, develop, and synchronize digital products for the
              next generation of industry leaders.
            </p>
          </div>

          {/* Detailed Service Sections */}
          <div className="space-y-10">
            {serviceCategories.map((service, i) => (
              <div key={i} className="group border-t border-slate-100 pt-10">
                <div className="grid lg:grid-cols-12 gap-12">
                  {/* ID & Basic Info */}
                  <div className="lg:col-span-4">
                    <span className="text-6xl font-black text-slate-100 group-hover:text-blue-600 transition-colors duration-500 italic">
                      {service.id}
                    </span>
                    <h2 className="text-4xl font-black uppercase tracking-tighter mt-4 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-blue-600 font-black uppercase tracking-widest text-[10px]">
                      {service.highlight}
                    </p>
                  </div>

                  {/* Description & List */}
                  <div className="lg:col-span-5">
                    <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors cursor-default"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Icon/Visual Anchor */}
                  <div className="lg:col-span-3 flex justify-end items-start pt-2">
                    <div className="w-24 h-24 border border-slate-100 rounded-full flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <Zap size={32} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Hook */}
          <div className="mt-20 bg-blue-600 p-20 rounded-[4rem] text-white overflow-hidden relative group">
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                READY TO <br /> ENGINEER GROWTH?
              </h2>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-black text-sm tracking-[0.3em] uppercase hover:bg-slate-900 hover:text-white transition-all"
              >
                Consult with us
              </Link>
            </div>
            {/* Background Decorative Text */}
            <div className="absolute -bottom-10 -left-10 text-[20rem] font-black opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              SYNC
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServicesPage;
