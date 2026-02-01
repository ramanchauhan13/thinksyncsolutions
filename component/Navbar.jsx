"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a slight shadow/solidify background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkStyle = (path) =>
    `relative transition-all duration-300 font-extrabold uppercase tracking-[0.15em] text-[12px] py-2 ${
      pathname === path 
        ? "text-blue-600 after:w-full" 
        : "text-slate-700 hover:text-blue-600 after:w-0 hover:after:w-full"
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300`;

  return (
    <nav 
      className={`fixed w-[95%] lg:w-[90%] left-1/2 -translate-x-1/2 top-4 z-[100] transition-all duration-500 rounded-2xl border border-white/20 
      ${scrolled 
        ? "bg-white/40 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]" 
        : "bg-white/20 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-black text-xl tracking-tighter text-[#0c2f55] group"
        >
          <div className="transition-transform duration-300 group-hover:rotate-12">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0c2f55] to-blue-600">
            THINK<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-600">SYNC</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={getLinkStyle(link.href)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* CTA Button */}
          {/* <button className="ml-4 px-5 py-2 bg-blue-600 text-white text-[12px] font-bold uppercase tracking-widest rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300">
            Get Started
          </button> */}
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden p-2 text-slate-600 hover:bg-blue-50/50 rounded-xl transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-8 flex flex-col gap-5 bg-white/80 backdrop-blur-3xl rounded-b-2xl border-t border-white/20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${getLinkStyle(link.href)} text-sm`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;