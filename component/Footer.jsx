"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin />,
      url: "https://linkedin.com/in/thinksyncsolutions",
    },
    {
      icon: <Instagram />,
      url: "https://instagram.com/thinksync.solutions",
    },
  ];

  return (
    <footer className="bg-[#0f172a] px-6 sm:px-12 py-12 text-white rounded-t-[3rem] md:rounded-t-[5rem] relative overflow-hidden">
      {/* Background Brand Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[16vw] font-black text-white/2 select-none pointer-events-none whitespace-nowrap">
        THINKSYNC
      </div>

      <div className="max-w-full mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-6">
          {/* CTA Section */}
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.85] tracking-tighter uppercase">
              READY TO
              <br />
              <span className="text-transparent pr-2 bg-clip-text bg-linear-to-r from-blue-500 to-indigo-400 italic">
                SYNC?
              </span>
            </h2>

            <div className="flex flex-col gap-y-2 text-sm font-bold uppercase tracking-widest">
              <a
                href="mailto:team.thinksync.solutions@gmail.com"
                aria-label="Send an email to ThinkSync Solutions"
                className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 group"
              >
                team.thinksync.solutions@gmail.com
                <ArrowUpRight
                  size={14}
                  className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                />
              </a>
              <div className="flex justify-start gap-4">
                <a
                  href="tel:+918979937257"
                  aria-label="Call ThinkSync Solutions at +91 89799 37257"
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                >
                  +91 8979937257
                </a>
                <span className="text-slate-600">|</span>
                <a
                  href="tel:+919759862839"
                  aria-label="Call ThinkSync Solutions at +91 97598 62839"
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                >
                  +91 9759862839
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Grid (Updated with Insights/Blog Column) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14 border-t border-white/5 pt-8">
          {/* Expertise */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">
              Expertise
            </h4>
            <ul className="space-y-2 text-slate-400 font-bold text-sm">
              <li>
                <Link
                  href="/services"
                  aria-label="View our SaaS Development services"
                  className="hover:text-white transition-colors"
                >
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  aria-label="View our Mobile Solutions services"
                  className="hover:text-white transition-colors"
                >
                  Mobile Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  aria-label="View our Cloud Architecture services"
                  className="hover:text-white transition-colors"
                >
                  Cloud Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Insights & Blog */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">
              Insights
            </h4>
            <ul className="space-y-2 text-slate-400 font-bold text-sm">
              <li>
                <Link
                  href="/blog"
                  aria-label="Read ThinkSync Engineering Blog"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  Engineering Blog
                  <ArrowUpRight
                    size={12}
                    className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform text-blue-500"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  aria-label="Read Architecture Guides"
                  className="hover:text-white transition-colors"
                >
                  Architecture Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  aria-label="Read ERP Cost Breakdowns"
                  className="hover:text-white transition-colors"
                >
                  Cost & ROI Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-slate-400 font-bold text-sm">
              <li>
                <Link
                  href="#process"
                  aria-label="Learn about our process"
                  className="hover:text-white transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  aria-label="View client testimonials"
                  className="hover:text-white transition-colors"
                >
                  Client Voices
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">
              Socials
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"
                >
                  {React.cloneElement(item.icon, { size: 18 })}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col justify-start md:items-end">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">
                Legal
              </h4>
              <ul className="space-y-2 text-slate-400 font-bold text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    aria-label="View our privacy policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    aria-label="View our terms of service"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>© {new Date().getFullYear()} THINKSYNC SOLUTIONS</span>
          </div>

          <div className="italic">Built with precision & code.</div>

          <div className="flex gap-4">
            <a
              href="https://www.google.com/maps/search/Moradabad+India"
              aria-label="View ThinkSync Solutions location on Google Maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Moradabad, IN
            </a>
            <span className="text-slate-800">|</span>
            <span className="text-slate-400">Remote Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
