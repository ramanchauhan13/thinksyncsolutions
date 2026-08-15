// app/blog/[slug]/page.jsx
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/data/posts";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | ThinkSync Solutions`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://thinksync.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      url: `https://thinksync.in/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema.org Article Structured Data for GEO & Google Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "ThinkSync Solutions",
      url: "https://thinksync.in",
    },
    publisher: {
      "@type": "Organization",
      name: "ThinkSync Solutions",
      url: "https://thinksync.in",
    },
    datePublished: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thinksync.in/blog/${post.slug}`,
    },
  };

  return (
    <article className="min-h-screen bg-slate-950 text-white font-sans -my-6 py-20 px-10">
      {/* Inject Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Insights
        </Link>

        {/* Article Meta */}
        <div className="mb-8">
          <span className="px-3 py-1 bg-blue-950/80 text-blue-400 border border-blue-500/30 rounded-full text-xs font-mono uppercase tracking-widest">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white my-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 border-b border-slate-800 pb-6">
            <span className="flex items-center gap-2">
              <User size={14} className="text-blue-400" /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-blue-400" /> {post.publishedAt}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-blue-400" /> {post.readTime}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert prose-blue max-w-none text-slate-300 leading-relaxed font-normal whitespace-pre-line">
          {post.content}
        </div>

        {/* CTA Footer */}
        <div className="mt-16 p-8 bg-slate-900 border border-slate-800 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-white mb-2">Need a custom software solution built?</h3>
          <p className="text-slate-400 text-sm mb-6">
            Let's discuss your architectural requirements, timelines, and budget expectations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-all shadow-lg"
          >
            Schedule Technical Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}