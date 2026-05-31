import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { FullscreenModal } from './FullscreenModal';
import { PORTFOLIO_DATA } from '@data/portfolioData';
import certificatePreview from '../assets/images/achievement-certificate-preview.svg';

interface Achievement {
  title: string;
  details: string;
  href?: string;
}

export const AchievementsSection: React.FC = () => {
  const [selectedAch, setSelectedAch] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="py-32 bg-transparent section-bg">
      <div className="container mx-auto px-6 lg:px-12 section-content">
        <SectionHeading subtitle="Milestones">Achievements</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {PORTFOLIO_DATA.achievements.map((ach, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedAch(ach)}
              className="cursor-pointer bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{ach.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{ach.details}</p>
              <div className="mt-auto pt-4 border-t border-gray-200 w-full text-sm font-medium text-indigo-600 flex items-center">
                Preview Certificate <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <FullscreenModal isOpen={!!selectedAch} onClose={() => setSelectedAch(null)}>
        {selectedAch && (
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-2">
              <Award size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">{selectedAch.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl">{selectedAch.details}</p>
            
            <div className="w-full max-w-4xl aspect-[1.4] bg-gray-100 mt-8 rounded-2xl overflow-hidden border-4 border-gray-200 shadow-xl relative">
                <img 
                  src={certificatePreview} 
                  alt="Certificate Preview" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                   <div className="text-left space-y-4">
                     <p className="text-white font-medium text-lg">Official Document Preview for {selectedAch.title}</p>
                     {selectedAch.href && (
                       <a
                         href={selectedAch.href}
                         target="_blank"
                         rel="noreferrer"
                         className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition-transform hover:-translate-y-0.5"
                       >
                         Open Publication
                       </a>
                     )}
                   </div>
                </div>
            </div>
          </div>
        )}
      </FullscreenModal>
    </section>
  );
};
