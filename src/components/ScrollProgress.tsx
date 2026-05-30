import React from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="fixed top-1/2 right-4 md:right-8 -translate-y-1/2 z-50 h-32 w-1 bg-gray-200/50 rounded-full hidden sm:block backdrop-blur-sm">
      <motion.div 
        className="w-full bg-indigo-500 rounded-full origin-top shadow-[0_0_10px_rgba(99,102,241,0.8)]"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
};
