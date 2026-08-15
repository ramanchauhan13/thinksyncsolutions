import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, Database, Cookie, Bell } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - ThinkSync Solutions",
  description:
    "Privacy Policy for ThinkSync Solutions. Read how we handle client confidential data, IP ownership, project telemetry, and data protection standards.",
};

const sections = [
  {
    icon: Eye,
    title: "1. Information We Collect",
    content: `When you interact with ThinkSync Solutions—whether by requesting a project estimate, entering into a service agreement, or communicating directly with our engineering team—we collect information necessary to deliver high-quality software services. This includes contact details (name, corporate email, phone number), billing data, project briefs, architectural specs, and communication records from channels like Slack, Teams, or email.`,
  },
  {
    icon: Database,
    title: "2. How We Use Your Data",
    content: `We collect and process your information solely to engineer, test, deploy, and maintain custom software solutions. We use this data to execute client discovery, deliver project updates, process invoice payments, manage source code repositories, and comply with legal or contractual requirements. We do not sell, rent, or trade client personal or project data to third parties.`,
  },
  {
    icon: Lock,
    title: "3. IP Protection & Non-Disclosure (NDA)",
    content: `At ThinkSync Solutions, client confidentiality is paramount. All proprietary codebases, database schemas, business logic, design assets, and deployment credentials remain your sole Intellectual Property (IP). Our engineers operate under strict Non-Disclosure Agreements (NDAs), and access to production environments is strictly role-restricted.`,
  },
  {
    icon: Cookie,
    title: "4. Infrastructure & Third-Party Vendors",
    content: `To provide cloud deployments and continuous integration, we utilize trusted enterprise infrastructure providers (such as AWS, Vercel, MongoDB Atlas, and GitHub). Each third-party platform adheres to SOC 2 Type II and ISO 27001 compliance standards. Data stored within these environments remains governed by enterprise-grade security protocols.`,
  },
  {
    icon: Bell,
    title: "5. Cookies & Telemetry",
    content: `Our public web properties use minimal, privacy-centric analytics tools to evaluate traffic patterns and page loading performance. We do not track visitors across external web properties or deploy intrusive ad-retargeting pixels without explicit consent.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Texture Layer */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")`,
        }}
      />

      <main className="relative z-10 max-w-full mx-auto px-10 py-16 lg:py-24">
        {/* Navigation Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            aria-label="Back to ThinkSync Solutions Home"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>

        {/* Header */}
        <header className="mb-20 max-w-4xl border-b border-slate-200/80 pb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex flex-col gap-1">
              <span className="h-1 w-10 bg-blue-600 rounded-full" />
              <span className="h-1 w-5 bg-blue-600/30 rounded-full" />
            </div>

            <span className="text-slate-900 font-black tracking-[0.25em] text-xs uppercase">
              Legal & Compliance
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black leading-[0.85] tracking-tight uppercase mb-8 text-slate-900">
            PRIVACY <br /> <span className="text-blue-600">POLICY.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed italic">
            Effective Date: August 15, 2026 • Last Updated: August 2026
          </p>
        </header>

        {/* Content Section */}
        <section className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-12">
            {sections.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="group border-b border-slate-200/80 pb-10">
                  <div className="flex items-center gap-3 text-blue-600 mb-4">
                    <IconComp size={24} />
                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg pl-9">
                    {item.content}
                  </p>
                </div>
              );
            })}

            <div className="pt-4">
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-4">
                6. Contact Privacy Team
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg pl-9">
                If you have questions regarding this Privacy Policy or wish to exercise data privacy rights for your organization, reach out directly to our security officer at{" "}
                <a
                  href="mailto:privacy@thinksync.solutions"
                  aria-label="Email ThinkSync Solutions Privacy Team"
                  className="text-blue-600 font-bold underline hover:text-slate-900 transition-colors"
                >
                  privacy@thinksync.solutions
                </a>
                .
              </p>
            </div>
          </div>

          {/* Sticky Quick Summary Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-12 bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase font-bold tracking-widest">
              <ShieldCheck size={18} /> Direct Guarantee
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight">
              Data Isolation Assurance
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We never utilize client source code, proprietary algorithms, or data payloads to train public or third-party AI models without written authorization.
            </p>
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono">
              SECURITY PROTOCOL // NDA-VERIFIED
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;