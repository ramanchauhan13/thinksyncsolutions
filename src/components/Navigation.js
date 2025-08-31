'use client'

import { Menu, X } from "lucide-react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-xl border-b border-gray-800">
      <div
        data-aos="fade-down"
        data-aos-duration="500"
        className="container mx-auto px-6 py-4"
      >
        <div className="flex items-center justify-around">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={logo}
              alt="ThinkSync Solutions Logo"
              width={50}
              height={50}
              className="rounded-full h-10 object-contain"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-700 to-blue-300 bg-clip-text text-transparent">
              THINKSYNC SOLUTIONS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  className={`transition-colors font-bold text-lg duration-300 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-300 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 font-semibold">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block w-full text-left py-2 transition-colors duration-300 ${
                    isActive
                      ? "text-cyan-400 font-bold"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
