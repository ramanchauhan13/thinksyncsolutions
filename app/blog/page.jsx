// app/blog/page.jsx
import React from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import { ArrowUpRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Engineering Insights & Software Strategy | ThinkSync Solutions",
  description: "Deep dives into custom ERP architecture, Next.js engineering performance, enterprise cloud infrastructure, and technical build-vs-buy guides.",
  alternates: {
    canonical: "https://thinksync.in/blog",
  },
};

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans -mt-6 py-24 px-10 sm:px-12 relative overflow-hidden">
      <div className="max-w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-blue-950/60 border border-blue-500/30 text-blue-400 rounded-full text-xs font-mono uppercase tracking-widest mb-6">
            <BookOpen size={14} /> Insights & Engineering
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-6">
            SOFTWARE <span className="text-blue-500">ARCHITECTURE</span> & STRATEGY.
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl font-normal leading-relaxed">
            Technical teardowns, enterprise software cost breakdowns, and framework benchmarks written directly by our engineering leads.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                  <span className="bg-slate-800 px-3 py-1 rounded-full text-blue-400 border border-slate-700">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">{post.publishedAt}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-white transition-colors"
                >
                  Read Article <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}