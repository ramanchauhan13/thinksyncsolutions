import { ChevronRight } from 'lucide-react';

const HeroSection = ({ glitchEffect, scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen pt-10 flex items-center justify-center relative">
      <div className="absolute inset-0 opacity-20">
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

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h1 className={`text-6xl md:text-8xl font-black mb-6 ${glitchEffect ? 'animate-pulse' : ''}`}>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              THE FUTURE
            </span>
            <br />
            <span className="text-white">IS NOW</span>
          </h1>
          <div className="h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 mx-auto max-w-md rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
          We craft digital experiences that transcend the ordinary, building tomorrow's web today with cutting-edge technology and visionary design.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-semibold text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            View Our Work
            <ChevronRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;