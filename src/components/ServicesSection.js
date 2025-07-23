import { Globe, Rocket, Shield, Layers, Cpu, Users } from 'lucide-react';
import { services } from './data';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div data-aos="fade-down" data-aos-duration="500" data-aos-anchor-placement="top-bottom" className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored for the modern web ecosystem.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="500" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gray-900/30 backdrop-blur-xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;