import { Github, Linkedin, Twitter } from 'lucide-react';
import { teamMembers } from './data';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 relative">
      <div data-aos="fade-down" data-aos-duration="500" className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Meet The Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The visionaries behind every pixel, every line of code, and every breakthrough.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="500" className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const IconComponent = member.icon;
            return (
              <div
                key={member.id}
                className="group relative p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-xl transition-all duration-500 hover:border-gray-600 hover:transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${member.color} p-3 mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-2`}>
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">{member.specialty}</p>
                  <p className="text-gray-300 text-sm mb-6">{member.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {/* <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors duration-300">
                      <Github size={20} />
                    </a> */}
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors duration-300">
                      <Linkedin size={20} />
                    </a>
                    {/* <a href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors duration-300">
                      <Twitter size={20} />
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;