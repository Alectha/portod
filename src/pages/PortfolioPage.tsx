import React from 'react';
import { motion } from 'framer-motion';
import { GlobalStyles } from '@components/GlobalStyles';
import {
  Navigation,
  HeroSection,
  AboutSection,
  AchievementsSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  OrganizationsSection,
  Footer,
  ScrollProgress,
} from '@components/sections';

export const PortfolioPage: React.FC = () => {
  return (
    <div className="antialiased selection:bg-indigo-200 selection:text-indigo-900 overflow-x-hidden w-full max-w-full">
      <GlobalStyles />
      <div className="grain-overlay"></div>

      {/* Page-level background blobs so Home background spans entire page */}
      <div className="page-bg pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      <ScrollProgress />

      <Navigation />

      <main className="overflow-x-hidden w-full max-w-full">
        <HeroSection />
        <div className="relative z-20 mt-8 md:mt-10 overflow-hidden bg-black text-white py-3 md:py-4 shadow-xl pointer-events-none rotate-[-2deg] md:rotate-[-3deg] scale-[1.03]">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap origin-left text-lg md:text-xl font-heading font-medium tracking-wide items-center px-6"
          >
            <span>DIGITAL BUSINESS</span> <span>✦</span> <span>PRODUCT MANAGEMENT</span> <span>✦</span> <span>UI/UX DESIGN</span> <span>✦</span> <span>MARKET RESEARCH</span> <span>✦</span>
            <span>DIGITAL BUSINESS</span> <span>✦</span> <span>PRODUCT MANAGEMENT</span> <span>✦</span> <span>UI/UX DESIGN</span> <span>✦</span> <span>MARKET RESEARCH</span> <span>✦</span>
          </motion.div>
        </div>
        <AboutSection />
        <AchievementsSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <OrganizationsSection />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;