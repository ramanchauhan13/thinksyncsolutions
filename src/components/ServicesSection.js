import {
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  Layers,
  LifeBuoy,
} from 'lucide-react';
import { services } from './data';

const iconComponents = {
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  Layers,
  LifeBuoy,
};

const ServicesSection = () => {
  return (
  <section
  id="services"
  className="py-20 relative bg-[url('/back.png')] bg-cover bg-center"
>
  {/* Dark overlay to make text readable */}
  <div className="absolute inset-0"></div>

  <div
    className="relative container mx-auto px-6"
    data-aos="fade-down"
    data-aos-duration="500"
    data-aos-anchor-placement="top-bottom"
  >
    {/* Section Heading Main */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-blue-700 to-gray-400 bg-clip-text text-transparent">
        Our Services
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        Comprehensive digital solutions tailored for the modern web ecosystem.
      </p>
    </div>

    {/* Service Cards */}
    <div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      {services.map((service, index) => {
        const Icon = iconComponents[service.icon];
        return (
          <div
            key={index}
            className="group p-8 rounded-2xl bg-gray-900/30 backdrop-blur-xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105"
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-blue-500 transition-colors">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
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
