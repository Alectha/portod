import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { FullscreenModal } from './FullscreenModal';
import { PORTFOLIO_DATA } from '@data/portfolioData';

interface Organization {
  role: string;
  name: string;
  period: string;
  desc: string;
  image?: string;
  coverImage?: string;
  images?: { src: string; alt: string }[];
}

export const OrganizationsSection: React.FC = () => {
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);

  return (
    <section id="organization" className="py-32 bg-transparent section-bg relative overflow-hidden">
      {/* Decorative elements for scrapbook feel (kept but made subtle) */}
      <div className="absolute top-10 left-10 w-32 h-8 bg-pink-200/20 -rotate-12 blur-sm"></div>
      <div className="absolute bottom-20 right-20 w-40 h-10 bg-blue-200/20 rotate-6 blur-sm"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading subtitle="Extracurricular">Recap Organization</SectionHeading>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-16 perspective-1000">
          {PORTFOLIO_DATA.organizations.map((org, idx) => {
            const rotation = idx % 2 === 0 ? `rotate-1` : `-rotate-1`;
            
            return (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                className={`w-full sm:w-[calc(50%-20px)] lg:w-[calc(33%-27px)] bg-white p-4 pb-12 shadow-xl border border-gray-200 cursor-pointer relative ${rotation} transition-transform duration-300`}
                style={{ 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                onClick={() => setSelectedOrg(org)}
              >
                {/* Tape decoration */}
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-md rotate-3 z-10 border border-white/20 shadow-sm" 
                  style={{ clipPath: 'polygon(0 10%, 100% 0, 95% 90%, 5% 100%)'}}
                ></div>
                
                <div className="aspect-video bg-gray-100 mb-4 flex items-center justify-center overflow-hidden border border-gray-200 rounded-2xl">
                  {org.coverImage || org.image ? (
                    <img src={org.coverImage || org.image} alt={org.name} className="w-full h-full object-cover" />
                  ) : (
                    <Users className="text-gray-300" size={40} />
                  )}
                </div>
                
                <div className="font-handwriting text-center">
                  <h3 className="font-bold text-lg leading-tight mb-1">{org.name}</h3>
                  <p className="text-sm font-medium text-indigo-600">{org.role}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <FullscreenModal isOpen={!!selectedOrg} onClose={() => setSelectedOrg(null)}>
        {selectedOrg && (
          <div className="space-y-8 py-12 text-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto flex items-center justify-center shadow-inner overflow-hidden">
                {selectedOrg.coverImage || selectedOrg.image ? <img src={selectedOrg.coverImage || selectedOrg.image} alt={selectedOrg.name} className="w-full h-full object-cover" /> : <Users className="text-gray-400" size={40} />}
              </div>
              <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-bold text-gray-600 tracking-wider uppercase">
                {selectedOrg.period}
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">{selectedOrg.name}</h2>
              <h3 className="text-xl md:text-2xl text-indigo-600 font-medium">{selectedOrg.role}</h3>
              <div className="w-16 h-1 bg-gray-200 mx-auto my-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {selectedOrg.desc}
              </p>
            </div>

            {selectedOrg.images && selectedOrg.images.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-gray-100 text-left">
                <h4 className="text-2xl font-heading font-semibold text-center">Documentation</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                  {selectedOrg.images.map((image, idx) => (
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
          </div>
        )}
      </FullscreenModal>
    </section>
  );
};
