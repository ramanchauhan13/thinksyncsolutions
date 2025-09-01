import {
  Star,
  Headphones,
  Rocket,
  Code,
  ShieldCheck,
  Briefcase,
  Server,
  Cpu,
} from "lucide-react";
import { stats } from "./data";

const iconMap = {
  Star,
  Headphones,
  Rocket,
  Code,
  ShieldCheck,
  Briefcase,
  Server,
  Cpu,
};

const WhyChooseUs = () => {
  return (
    <section
      id="about"
      className="py-20 relative bg-[url('/back.png')] bg-cover bg-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0"></div>

      <div
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-anchor-placement="top-bottom"
        className="relative container mx-auto px-6"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl py-2 font-bold mb-4 bg-gradient-to-r from-blue-600 via-blue-800 to-gray-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We are a collective of digital architects, pushing the boundaries of
            what&rsquo;s possible in web development.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div
                key={index}
                className="relative text-center p-8 rounded-xl bg-gray-900/30 backdrop-blur-xs border border-gray-700 transition-all duration-300 hover:border-blue-600"
              >
                {/* Icon */}
                <IconComponent className="w-10 h-10 mx-auto mb-4 text-cyan-400" />

                {/* Stat Number */}
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
