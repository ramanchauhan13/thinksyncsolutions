import { Star, ExternalLink } from 'lucide-react';
import { projects } from './data';
import { useState } from 'react';
import Image from 'next/image';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of our most innovative and impactful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/30 backdrop-blur-xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
             <div className="relative w-full aspect-video overflow-hidden group">
  <Image 
    src={project.image}
    alt={project.title}
    fill
    className="object-fit group-hover:scale-110 transition-transform duration-500"
  />
</div>
              
              <div className="p-6">
                <div className="text-sm text-cyan-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <Star className="inline w-4 h-4 mr-1" />
                    {project.stats}
                  </div>
                  <a href={project.link} className="text-cyan-400 hover:text-white transition-colors duration-300">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;