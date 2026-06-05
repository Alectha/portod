import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X, Briefcase } from 'lucide-react';
import profilePortrait from '../assets/images/about-profile-portrait.jpeg';
import cvFile from '../assets/document/cv_dewips.pdf';

export const Navigation: React.FC = () => {
  const [active, setActive] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const items = ['Home', 'About', 'Experience', 'Project', 'Contact'];

  useEffect(() => {
    const ids = ['home', 'about', 'experience', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -55% 0px', threshold: 0.25 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full p-6 z-50 pointer-events-none">
      <div className="container mx-auto flex items-center justify-between gap-4 md:gap-6">
        <div className="pointer-events-auto flex items-center rounded-full border border-white/20 bg-white/50 px-5 py-3 shadow-sm backdrop-blur-md">
          <div className="font-heading font-bold text-xl tracking-tighter text-gray-900 whitespace-nowrap">
            Dewi's Portfolio
          </div>
        </div>

        <div className="pointer-events-auto flex items-center gap-3">
          <button
            type="button"
            className="md:hidden flex items-center justify-center rounded-full border border-white/20 bg-white/50 p-3 shadow-sm backdrop-blur-md text-gray-900"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="hidden md:flex items-center rounded-full border border-white/20 bg-white/50 px-3 py-2 shadow-sm backdrop-blur-md">
            {items.map((item) => {
              const id = item.toLowerCase() === 'project' ? 'projects' : item.toLowerCase();
              const isActive = active === id || (active === 'home' && id === 'home');
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-black/60 hover:text-black'}`}>
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="md:hidden container mx-auto mt-3"
          >
            <div className="pointer-events-auto rounded-3xl border border-white/20 bg-white/60 p-3 shadow-lg backdrop-blur-md">
              <div className="flex flex-col gap-1">
                {items.map((item) => {
                  const id = item.toLowerCase() === 'project' ? 'projects' : item.toLowerCase();
                  const isActive = active === id || (active === 'home' && id === 'home');
                  return (
                    <a
                      key={item}
                      href={`#${id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-black/60 hover:text-black hover:bg-white/70'}`}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden section-bg">
      {/* Background blobs moved to page-level `page-bg` for continuous background */}

      <div className="container mx-auto px-6 lg:px-12 relative z-10 section-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] mb-6">
              Hello! I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Dewi.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-lg font-light leading-relaxed">
              Digital Business & Product Strategy. Passionate about digital marketing, product strategy, UI/UX, and business development.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="group relative px-8 py-4 bg-black text-white rounded-full overflow-hidden font-medium text-lg flex items-center gap-2">
                <span className="relative z-10">Explore</span>
                <ArrowUpRight className="relative z-10 group-hover:rotate-45 transition-transform" size={20} />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </a>
              <a href={cvFile} download="cv_dewips.pdf" className="px-8 py-4 rounded-full border border-gray-300 hover:border-black transition-colors font-medium text-lg flex items-center">
                CV
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 h-[240px] sm:h-[300px] md:h-[520px] lg:h-[600px] w-full flex items-center justify-center"
          >
            {/* Abstract aesthetic image representation */}
            <div className="relative w-[72%] max-w-[210px] sm:max-w-[240px] md:w-full md:max-w-md aspect-square md:aspect-[4/5] rounded-full md:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">
               <img 
                 src={profilePortrait} 
                 alt="Dewi Puspita" 
                 className="w-full h-full object-cover scale-[1.3] origin-center" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>

            {/* Floating Tags */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
              className="hidden md:flex absolute top-20 right-10 md:-right-4 glass-panel px-4 py-3 rounded-2xl shadow-lg items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Briefcase size={16} />
              </div>
              <span className="font-medium text-sm">Digital Business</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
              className="hidden md:flex absolute bottom-40 left-0 md:-left-12 glass-panel px-4 py-3 rounded-2xl shadow-lg items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                💡
              </div>
              <span className="font-medium text-sm">Product Strategy</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
              className="hidden md:flex absolute -bottom-6 right-20 glass-panel px-4 py-3 rounded-2xl shadow-lg items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                📱
              </div>
              <span className="font-medium text-sm">Digital Marketing</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};
