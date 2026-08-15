import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | ThinkSync Solutions",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative flex items-center justify-center">
      {/* Texture Layer */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-8">
          <Terminal size={14} className="text-blue-400" /> Error Code: 404_ROUTE_NOT_FOUND
        </div>

        <h1 className="text-7xl sm:text-9xl font-black uppercase tracking-tight text-slate-900 mb-6">
          OUT OF <br /><span className="text-blue-600">SYNC.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mx-auto mb-10">
          The endpoint or page you are trying to reach does not exist or has been relocated to another service path.
        </p>

        <Link
          href="/"
          aria-label="Return to ThinkSync Solutions Home"
          className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-black text-xs tracking-[0.2em] uppercase hover:bg-blue-600 transition-colors shadow-lg"
        >
          <ArrowLeft size={16} /> Return to Engine
        </Link>
      </div>
    </div>
  );
}