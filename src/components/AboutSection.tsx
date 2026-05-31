import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Instagram, Linkedin } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { PORTFOLIO_DATA } from '@data/portfolioData';
import profilePortrait from '../assets/images/about-profile-portrait.jpeg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 relative bg-transparent section-bg">
      <div className="container mx-auto px-6 lg:px-12 section-content">
        <SectionHeading subtitle={PORTFOLIO_DATA.about.title}>{PORTFOLIO_DATA.about.subtitle}</SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mt-12">
          
          {/* Left Column: Photo & Links */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-5 lg:gap-6 lg:sticky lg:top-32">
            <div className="w-full aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl bg-gray-100 relative group max-w-md lg:max-w-none mx-auto lg:mx-0">
              <img 
                src={profilePortrait} 
                alt="Dewi Puspita Sari" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            <div className="flex gap-4 flex-col sm:flex-row">
              <a 
                href="https://www.linkedin.com/in/dewi-puspita16/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 py-4 rounded-2xl border border-gray-200 flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all font-medium shadow-sm"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/dewiipss_/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 py-4 rounded-2xl border border-gray-200 flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all font-medium shadow-sm"
              >
                <Instagram size={20} /> Instagram
              </a>
            </div>
          </div>

          {/* Right Column: Text & Education */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100"
            >
              <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-6">
                <span className="font-semibold text-black">Third-year Information Systems student</span> with a concentration in Digital Business, interested in digital marketing, product strategy, UI/UX design, business analysis, product and project management.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Certified in Digital Marketing and ICT Project Management by BNSP and currently participating in the MSIB program at Vinix7 in the Digital Business division. Experienced in developing digital product concepts, conducting market research, and creating user-centered solutions.
              </p>
            </motion.div>

            <div>
              <h3 className="text-3xl font-heading font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-indigo-500" size={32} />
                Education
              </h3>
              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 md:p-8 rounded-[2rem] bg-white border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all group"
                  >
                    <div>
                      <p className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{edu.institution}</p>
                      <p className="text-indigo-600 font-medium mt-1">{edu.degree}</p>
                      {edu.details && <p className="text-sm text-gray-500 mt-2">{edu.details}</p>}
                    </div>
                    <div className="shrink-0 text-left md:text-right">
                      <span className="inline-block px-4 py-2 bg-gray-50 rounded-full text-sm font-bold border border-gray-200">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
