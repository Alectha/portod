import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { PORTFOLIO_DATA } from '@data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-transparent section-bg rounded-t-[3rem]">
      <div className="container mx-auto px-6 lg:px-12 section-content">
        <SectionHeading subtitle="Expertise">Hard & Soft Skills</SectionHeading>
        
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold mb-8">Hard Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PORTFOLIO_DATA.skills.hard.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-3 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="font-medium text-sm text-gray-700">{skill.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-heading font-semibold mb-8">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {PORTFOLIO_DATA.skills.soft.map((skill, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
