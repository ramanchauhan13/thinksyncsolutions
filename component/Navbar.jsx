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
  { name: "Our Work", href: "/work" },
  { name: "Team", href: "/team" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkStyle = (path) =>
    `relative transition-all duration-300 font-bold uppercase tracking-[0.15em] text-[12px] py-2 ${
      pathname === path
        ? "text-blue-600 after:w-full"
        : "text-slate-700 hover:text-blue-600 after:w-0 hover:after:w-full"
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300`;

  return (
    <nav
      className={`fixed w-[92%] max-w-7xl left-1/2 -translate-x-1/2 top-4 z-50 transition-all duration-500 rounded-2xl border border-white/20 ${
        scrolled
          ? "bg-white/60 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.08)]"
          : "bg-white/30 backdrop-blur-md"
      }`}
    >
      <div className="max-w-full mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-black text-2xl tracking-wider text-[#0c2f55] group"
        >
          <div className="transition-transform duration-300 group-hover:rotate-12">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={30}
              height={30}
              className="w-auto h-auto"
            />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0c2f55] to-blue-600">
            THINK
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-600">
              SYNC
            </span>
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
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4 bg-white/90 backdrop-blur-3xl rounded-b-2xl border-t border-white/20">
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



// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

// const NAV_LINKS = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Our Work", href: "/work" },
//   { name: "Team", href: "/team" },
//   { name: "Contact", href: "/contact" },
// ];

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
//       <nav
//         className={`pointer-events-auto w-full max-w-7xl transition-all duration-500 ease-out rounded-2xl border ${
//           scrolled
//             ? "bg-slate-900/80 border-slate-800/80 shadow-[0_20px_50px_rgba(15,23,42,0.3)] backdrop-blur-xl py-2.5 px-4"
//             : "bg-white/70 border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md py-3 px-6"
//         }`}
//       >
//         <div className="flex items-center justify-between">
          
//           {/* BRAND LOGO */}
//           <Link
//             href="/"
//             className="group flex items-center gap-3 font-black text-xl tracking-tight transition-transform active:scale-95"
//           >
//             <div
//               className={`p-2 rounded-xl border transition-all duration-300 group-hover:rotate-6 ${
//                 scrolled
//                   ? "bg-blue-600/10 border-blue-500/20 text-blue-400"
//                   : "bg-blue-50 border-blue-100 text-blue-600 shadow-sm"
//               }`}
//             >
//               <Image
//                 src="/logo1.png"
//                 alt="Think Sync Logo"
//                 width={24}
//                 height={24}
//                 className="w-6 h-6 object-contain"
//               />
//             </div>
            
//             <div className="flex flex-col">
//               <span
//                 className={`font-black tracking-wider text-lg leading-none transition-colors duration-300 ${
//                   scrolled ? "text-white" : "text-slate-900"
//                 }`}
//               >
//                 THINK<span className="text-blue-600">SYNC</span>
//               </span>
//               <span
//                 className={`text-[9px] font-bold tracking-[0.25em] uppercase transition-colors ${
//                   scrolled ? "text-slate-400" : "text-slate-500"
//                 }`}
//               >
//                 Solutions
//               </span>
//             </div>
//           </Link>

//           {/* DESKTOP NAVIGATION */}
//           <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-xl border border-slate-200/50 dark:bg-slate-800/40 dark:border-slate-700/50">
//             {NAV_LINKS.map((link) => {
//               const isActive = pathname === link.href;

//               return (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`relative px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
//                     isActive
//                       ? scrolled
//                         ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
//                         : "bg-slate-900 text-white shadow-md shadow-slate-900/10"
//                       : scrolled
//                       ? "text-slate-300 hover:text-white hover:bg-slate-800/60"
//                       : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* ACTION BUTTON & MOBILE TOGGLE */}
//           <div className="flex items-center gap-3">
//             <Link
//               href="/contact"
//               className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 active:scale-95"
//             >
//               <span>Get Started</span>
//               <ArrowUpRight size={14} className="stroke-[2.5]" />
//             </Link>

//             {/* Mobile Toggle Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle navigation"
//               className={`lg:hidden p-2.5 rounded-xl border transition-all duration-300 active:scale-90 ${
//                 scrolled
//                   ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
//                   : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
//               }`}
//             >
//               {isOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE MENU DROPDOWN */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//             isOpen
//               ? "max-h-[420px] opacity-100 mt-4 border-t pt-4"
//               : "max-h-0 opacity-0 mt-0 pt-0 border-t-0"
//           } ${scrolled ? "border-slate-800" : "border-slate-200/60"}`}
//         >
//           <div className="flex flex-col gap-1.5 pb-2">
//             {NAV_LINKS.map((link) => {
//               const isActive = pathname === link.href;

//               return (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
//                     isActive
//                       ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
//                       : scrolled
//                       ? "text-slate-300 hover:bg-slate-800/80"
//                       : "text-slate-700 hover:bg-slate-100"
//                   }`}
//                 >
//                   <span>{link.name}</span>
//                   {isActive && <Sparkles size={14} className="text-white" />}
//                 </Link>
//               );
//             })}

//             <div className="pt-2 sm:hidden">
//               <Link
//                 href="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-blue-600 shadow-md shadow-blue-600/30"
//               >
//                 <span>Get Started</span>
//                 <ArrowUpRight size={14} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;