import { Github, Linkedin, Code, Twitter } from "lucide-react";
import { teamMembers } from "../../components/data";
import Image from "next/image";

const iconMap = {
  Code,
};

const TeamPage = () => {
  return (
    <section id="team" className="py-20 relative">
      <div
        data-aos="fade-down"
        data-aos-duration="500"
        className="container mx-auto px-6"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Meet The Team
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The visionaries behind every pixel, every line of code, and every
            breakthrough.
          </p>
        </div>

        {/* Team Cards */}
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {teamMembers.map((member) => {
            const IconComponent = iconMap[member.icon];
            return (
              <div
                key={member.id}
                className="group relative p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                {/* Hover Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-gray-700 group-hover:border-gray-500 transition-colors duration-500">
                    <Image
                      src={member.image}
                      alt={member.name || "Member"}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>

                  {/* Name + Role */}
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p
                    className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-2`}
                  >
                    {member.role}
                  </p>

                  {/* Specialty */}
                  <p className="text-gray-400 text-sm mb-4 italic">
                    {member.specialty}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-gray-800/70 text-gray-200 rounded-full border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Socials */}
                  <div className="flex space-x-4">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter size={20} />
                      </a>
                    )}
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

export default TeamPage;
