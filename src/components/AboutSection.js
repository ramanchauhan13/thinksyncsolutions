// import { Briefcase, Users, Award, Shield } from 'lucide-react';
import { stats } from './data';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div data-aos="fade-down" data-aos-duration="500" data-aos-anchor-placement="top-bottom" className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl py-2 font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Team ThinkSync
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a collective of digital architects, pushing the boundaries of what&rsquo;s possible in web development.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="500"  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-900/30 backdrop-blur-xl border border-gray-800">
                <IconComponent className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;