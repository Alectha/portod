import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { FullscreenModal } from './FullscreenModal';
import { PORTFOLIO_DATA } from '@data/portfolioData';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const ExperienceSection: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <section id="experience" className="py-32 bg-transparent section-bg">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl section-content">
        <SectionHeading subtitle="Career Path">Professional Experience</SectionHeading>
        
        <div className="relative border-l-2 border-gray-100 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0 space-y-12">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative md:grid md:grid-cols-5 md:gap-8 group cursor-pointer"
              onClick={() => setSelectedExp(exp)}
            >
              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:block absolute left-[20%] -translate-x-1/2 w-4 h-4 rounded-full bg-gray-200 group-hover:bg-indigo-500 group-hover:scale-150 transition-all z-10 border-4 border-white top-1"></div>
              {/* Timeline Dot (Mobile) */}
              <div className="md:hidden absolute -left-[37px] w-4 h-4 rounded-full bg-gray-200 group-hover:bg-indigo-500 transition-all top-2 border-2 border-white"></div>

              <div className="md:col-span-1 md:text-right md:pr-12 pt-1">
                <span className="text-sm font-bold text-indigo-500 uppercase tracking-wider">{exp.period}</span>
              </div>
              
              <div className="md:col-span-4 bg-gray-50 rounded-3xl p-8 group-hover:bg-white group-hover:shadow-xl transition-all border border-transparent group-hover:border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-bl-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 className="text-2xl font-heading font-bold mb-1">{exp.role}</h3>
                <p className="text-lg text-gray-500 mb-4">{exp.company}</p>
                <p className="text-gray-600 line-clamp-2">{exp.description[0]}</p>
                
                <div className="mt-6 flex items-center text-sm font-semibold text-indigo-600">
                  Read more details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[20%] w-0.5 bg-gray-100"></div>
        </div>
      </div>

      <FullscreenModal isOpen={!!selectedExp} onClose={() => setSelectedExp(null)}>
        {selectedExp && (
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4">{selectedExp.period}</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">{selectedExp.role}</h2>
              <p className="text-xl text-gray-500 mt-2">{selectedExp.company}</p>
            </div>
            
            <div className="w-full h-px bg-gray-100"></div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-heading">Key Responsibilities & Contributions:</h4>
              <ul className="space-y-3">
                {selectedExp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                    <p>{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Briefcase className="text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 italic">This experience significantly contributed to my skills in digital business development and operational execution.</p>
            </div>
          </div>
        )}
      </FullscreenModal>
    </section>
  );
};
