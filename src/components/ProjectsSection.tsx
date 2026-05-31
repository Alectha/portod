import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { FullscreenModal } from './FullscreenModal';
import { PORTFOLIO_DATA } from '@data/portfolioData';

interface Project {
  title: string;
  period: string;
  description: string;
  details: string[];
  tags: string[];
  color: string;
  coverImage?: string;
  images?: { src: string; alt: string }[];
}

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 bg-transparent section-bg text-black">
      <div className="container mx-auto px-6 lg:px-12 section-content">
        <SectionHeading subtitle="Showcase">My Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group cursor-pointer rounded-[2rem] overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`h-64 w-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center p-8`}>
                {project.coverImage ? (
                  <>
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
                )}
                <h3 className="text-4xl font-heading font-bold text-white text-center relative z-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">{project.title.split(' - ')[1] || project.title}</h3>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-20"></div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 line-clamp-2 text-sm flex-grow">{project.description}</p>
                
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  <span>View Case Study</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <FullscreenModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="space-y-8 text-black">
            <div className={`w-full h-64 md:h-96 rounded-3xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center mb-8 relative overflow-hidden`}>
              {selectedProject.coverImage ? (
                <>
                  <img
                    src={selectedProject.coverImage}
                    alt={selectedProject.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
                </>
              ) : null}
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-white text-center px-4 relative z-10 drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)]">
                {selectedProject.title.split(' - ')[1] || selectedProject.title}
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-1/3">
                <div className="sticky top-8 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Timeline</h4>
                    <p className="font-medium">{selectedProject.period}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Tags</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 space-y-8">
                <div>
                  <h3 className="text-3xl font-heading font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{selectedProject.description}</p>
                </div>

                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="space-y-4 pt-6 border-t border-gray-100">
                    <h4 className="text-2xl font-heading font-semibold">Documentation</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                      {selectedProject.images.map((image, idx) => (
                        <figure key={idx} className="rounded-2xl border border-gray-100 bg-gray-50 shadow-sm p-3">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="block w-full h-auto max-h-[520px] object-contain mx-auto"
                          />
                        </figure>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <h4 className="text-2xl font-heading font-semibold">Process & Details</h4>
                  <ul className="space-y-4">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 font-bold text-gray-400 shadow-sm">{idx + 1}</div>
                        <p className="text-gray-700 leading-relaxed">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </FullscreenModal>
    </section>
  );
};
