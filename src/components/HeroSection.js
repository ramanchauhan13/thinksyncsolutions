import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = ({ glitchEffect, scrollToSection }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const newDots = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
    }));
    setDots(newDots);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen pt-8 lg:pt-15 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/bg.jpg')", // 🔁 Replace with your actual image path
          opacity: 0.9, // Low opacity for dark background feel
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-green-900/10"></div>
        <div className="grid grid-cols-12 h-full">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="border border-gray-800/30 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div data-aos="fade-right" data-aos-duration="500" className="mb-8">
          <h1
            className={`text-5xl md:text-7xl font-black mb-6 ${
              glitchEffect ? 'animate-pulse' : ''
            }`}
          >
            <span className="bg-gradient-to-r  from-blue-600 via-blue-800 to-gray-400 bg-clip-text text-transparent">
              IT SOFTWARE
            </span>
            <br />
            <span className="text-gray-300">TECH & SOLUTIONS</span>
          </h1>
          <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-800 to-gray-400 mx-auto max-w-md rounded-full"></div>
        </div>

        <p
          data-aos="fade-right"
          data-aos-duration="500"
          className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
        >
          We craft digital experiences that transcend the ordinary, building
          tomorrow&rsquo;s web today with cutting-edge technology and visionary
          design.
        </p>

        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="/projects"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-semibold text-white transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 transition-all duration-300 cursor-pointer"
          >
            View Our Work
            <ChevronRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.animationDelay,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
