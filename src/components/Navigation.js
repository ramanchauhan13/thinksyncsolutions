import { Menu, X } from "lucide-react";
import logo from "../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

const Navigation = ({
  currentSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
   const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-xl border-b border-gray-800">
      <div
        data-aos="fade-down"
        data-aos-duration="500"
        className="container mx-auto px-6 py-4"
      >
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          
          <Link href="/" onClick={handleClick}>
          <div className="flex items-center space-x-3">
            <Image
              src={logo}
              alt="ThinkSync Solutions Logo"
              width={40}
              height={40}
              className="rounded-full h-10 bg-white object-contain"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              THINKSYNC SOLUTIONS
            </div>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-cyan-400 transition-colors font-bold text-lg duration-300 ${
                  currentSection === item.id ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
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
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 hover:text-cyan-400 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
