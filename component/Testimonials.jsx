"use client";

import React, { useState } from "react";
import { Quote, Star, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const REVIEWS = [
  {
    id: 0,
    quote:
      "Working with ThinkSync Solutions was super easy. They listened to what I needed and turned my ideas into a really smooth, modern website. It honestly made my job a lot easier.",
    client: "Ayush Gaur",
    position: "Event Manager",
    company: "Live Events Co.",
    metric: "Smooth Delivery",
    rating: 5,
  },
  {
    id: 1,
    quote:
      "I wanted a site that looked clean and loaded fast, and that’s exactly what they delivered. The team kept me updated the whole time and finished earlier than I expected.",
    client: "Lalit Singh Mehta",
    position: "Architect",
    positionShort: "Architecture",
    metric: "Fast & Optimized",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "I’m not very tech-savvy, but these guys explained everything simply and built a site my students love using. It feels smooth and professional without being complicated.",
    client: "Dzine Tech Solution",
    position: "Coaching Center Owner",
    metric: "User Experience",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "ThinkSync Solutions really got what I wanted. They created a website that’s not only beautiful but also super easy to manage. It’s been a great experience working with them.",
    client: "Pulkit Goel",
    position: "Exporter",
    metric: "Easy to Manage",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "I needed a website that could handle a lot of traffic and still look great. ThinkSync Solutions delivered exactly that, and they were great to work with throughout the process.",
    client: "QCD Globals",
    position: "Travel Agency",
    metric: "Scalable & High Traffic",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "ThinkSync Solutions took my vision and made it a reality. The App they built is not only visually appealing but also really easy to navigate. I couldn’t be happier.",
    client: "Abhishek Singh Thakur",
    position: "Fitness Center",
    metric: "Engaging & Dynamic",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-slate-50/50 dark:bg-[#090d16] overflow-hidden transition-colors duration-300"
    >
      {/* Background Graphic Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-slate-200/40 dark:text-slate-900/50 select-none pointer-events-none -z-10 leading-none tracking-tighter">
        VOICES
      </div>

      <div className="max-w-full mx-auto px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex flex-col gap-1">
                <span className="h-1 w-10 bg-blue-600 rounded-full" />
                <span className="h-1 w-5 bg-blue-600/30 rounded-full" />
              </div>
              <span className="text-slate-900 dark:text-slate-200 font-black tracking-[0.25em] text-xs uppercase">
                Testimonials
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.88] uppercase">
              Client <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">
                Feedback.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm self-start md:self-auto">
            <Sparkles className="text-blue-600 dark:text-blue-400" size={18} />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              100% Satisfaction Rate
            </span>
          </div>
        </div>

        {/* Reviews Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => {
            const isActive = activeId === review.id;

            return (
              <div
                key={review.id}
                onClick={() => setActiveId(review.id)}
                className={`group cursor-pointer relative p-8 rounded-[2rem] transition-all duration-500 flex flex-col justify-between border ${
                  isActive
                    ? "bg-slate-950 text-white border-slate-800 shadow-2xl shadow-blue-900/20 md:-translate-y-2"
                    : "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-slate-200/80 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-xl"
                }`}
              >
                {/* Background Glow Effect for Active Card */}
                {isActive && (
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 rounded-full blur-[60px] pointer-events-none" />
                )}

                <div>
                  {/* Top Header: Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>

                    <Quote
                      size={28}
                      className={`transition-colors ${
                        isActive
                          ? "text-blue-500 opacity-80"
                          : "text-slate-300 dark:text-slate-600 group-hover:text-blue-500"
                      }`}
                    />
                  </div>

                  {/* Review Text */}
                  <p
                    className={`text-sm sm:text-base font-semibold leading-relaxed mb-8 ${
                      isActive ? "text-slate-200" : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    "{review.quote}"
                  </p>
                </div>

                {/* Footer Section */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-end justify-between">
                  <div>
                    <h4
                      className={`font-black text-base uppercase tracking-tight ${
                        isActive ? "text-white" : "text-slate-900 dark:text-slate-100"
                      }`}
                    >
                      {review.client}
                    </h4>
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isActive ? "text-blue-400" : "text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {review.position}
                    </p>
                  </div>

                  {/* Highlight Metric Pill */}
                  <div
                    className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    }`}
                  >
                    <CheckCircle2 size={12} />
                    <span>{review.metric}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
              Ready to build your next big idea?
            </h3>
            <p className="text-blue-100 text-sm font-medium">
              Join our growing list of satisfied partners across tech, fitness, export, and education.
            </p>
          </div>

          <a
            href="#contact"
            aria-label="Start a project with ThinkSync Solutions"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3.5 rounded-2xl font-black uppercase text-xs tracking-wider hover:bg-slate-100 transition-colors shadow-md"
          >
            <span>Start A Project</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;