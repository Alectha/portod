import React from 'react';
import { Mail, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-transparent text-black pt-32 pb-12 relative overflow-hidden section-bg">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-200 rounded-full filter blur-[100px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-full max-w-lg h-64 bg-pink-200 rounded-full filter blur-[100px] opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center section-content">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold max-w-4xl leading-tight mb-12 text-gray-900">
          Let's collaborate and create <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 italic font-medium">meaningful</span> digital experiences together!
        </h2>
        
        <div className="flex flex-col items-center gap-6 w-full max-w-md mt-4">
          <a 
            href="mailto:dewipspitasarii@gmail.com" 
            className="w-full group relative flex items-center justify-between px-8 py-5 text-lg font-bold text-black bg-white rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl shadow-sm border border-gray-200"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Mail size={24} className="text-indigo-500" />
              dewipspitasarii@gmail.com
            </span>
            <ArrowUpRight size={20} className="relative z-10 group-hover:rotate-45 transition-transform text-gray-400" />
          </a>

          <a 
            href="https://www.instagram.com/dewiipss_/" 
            target="_blank" 
            rel="noreferrer" 
            className="w-full group relative flex items-center justify-between px-8 py-5 text-lg font-bold text-black bg-white rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl shadow-sm border border-gray-200"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Instagram size={24} className="text-pink-500" />
              Instagram
            </span>
            <ArrowUpRight size={20} className="relative z-10 group-hover:rotate-45 transition-transform text-gray-400" />
          </a>

          <a 
            href="https://www.linkedin.com/in/dewi-puspita16/" 
            target="_blank" 
            rel="noreferrer" 
            className="w-full group relative flex items-center justify-between px-8 py-5 text-lg font-bold text-black bg-white rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl shadow-sm border border-gray-200"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Linkedin size={24} className="text-blue-500" />
              LinkedIn
            </span>
            <ArrowUpRight size={20} className="relative z-10 group-hover:rotate-45 transition-transform text-gray-400" />
          </a>
        </div>

        <div className="w-full h-px bg-gray-200 my-16"></div>

        <div className="w-full flex justify-center items-center">
          <p className="text-gray-500 text-sm font-medium">© 2026 Dewi Puspita Sari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
