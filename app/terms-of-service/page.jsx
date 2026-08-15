import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, Clock, AlertTriangle, Scale } from "lucide-react";

export const metadata = {
  title: "Terms of Service - ThinkSync Solutions",
  description:
    "Terms of Service for ThinkSync Solutions. Review our software development master service agreements, payment terms, code deliverables, warranty, and liability terms.",
};

const terms = [
  {
    icon: FileText,
    title: "1. Scope of Services",
    content: `ThinkSync Solutions provides custom software architecture, full-stack web and mobile application engineering, UI/UX design, cloud infrastructure, and AI workflow automation. Specific project scope, milestones, deliverable timelines, and target specs are governed by an individual Statement of Work (SOW) executed prior to development.`,
  },
  {
    icon: Scale,
    title: "2. Intellectual Property & Code Ownership",
    content: `Upon full payment of all agreed invoice milestones outlined in the SOW, ThinkSync Solutions transfers 100% full ownership of final production source code, assets, repository access, and project documentation to the client. Pre-existing internal boilerplate code or open-source libraries remain licensed under their respective open-source terms.`,
  },
  {
    icon: Clock,
    title: "3. Milestone Delivery & Revisions",
    content: `Development is conducted in synchronized iterative sprints. Clients review work against agreed acceptance criteria during milestone acceptance windows. Minor adjustments within the predefined scope are handled in active sprints. Any out-of-scope feature requests or architectural pivots require a formal Change Order.`,
  },
  {
    icon: AlertTriangle,
    title: "4. Warranty & Post-Deployment SLA",
    content: `All production releases include a standard 30-day post-launch warranty period to resolve critical bugs or regressions matching agreed SOW specs. ThinkSync Solutions is not liable for issues arising from unauthorized third-party code modifications, server infrastructure misconfigurations, or third-party API outages after handoff.`,
  },
  {
    icon: CheckCircle2,
    title: "5. Payment Terms & Billing",
    content: `Invoices are issued according to project milestone schedules. Payments must be remitted within the timeframe specified in your commercial agreement. Late payments may pause active development sprints and push back scheduled deployment target dates.`,
  },
];

const TermsOfService = () => {
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
              Master Terms
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black leading-[0.85] tracking-tight uppercase mb-8 text-slate-900">
            TERMS OF <br /> <span className="text-blue-600">SERVICE.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed italic">
            Effective Date: August 15, 2026 • Last Updated: August 2026
          </p>
        </header>

        {/* Terms Content */}
        <section className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-12">
            {terms.map((item, idx) => {
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
                6. Governing Law & Dispute Resolution
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed text-base sm:text-lg pl-9">
                These terms shall be governed by and construed in accordance with applicable laws. Any legal action or proceeding arising under these Terms will be brought exclusively in designated jurisdictions, and parties consent to personal jurisdiction therein.
              </p>
            </div>
          </div>

          {/* Sticky Summary Card */}
          <aside className="lg:col-span-4 lg:sticky lg:top-12 bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div className="text-blue-400 font-mono text-xs uppercase font-bold tracking-widest">
              Summary Statement
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight">
              100% Code Handoff Guarantee
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We build client-owned systems. No vendor lock-in, proprietary runtime locks, or hidden licensing fees on code we build for your project.
            </p>
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono">
              SYNC OPERATING SYSTEM // MSA V2
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default TermsOfService;