'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-accent-green text-lg font-medium">Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Suzan Mansuri</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            Software Developer & <span className="text-accent-pink">Designer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 px-4"
          >
            Motivated Computer Science student specializing in AI with expertise in 
            Next.js, React Native, and Generative AI integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-400 via-pink-500 to-orange-400 rounded-full font-semibold text-black hover:shadow-lg hover:shadow-pink-400/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ExternalLink size={18} />
            </motion.a>
            
            <motion.a
              href="#projects"
              className="px-6 py-3 sm:px-8 sm:py-4 border border-gray-600 rounded-full font-semibold text-white hover:border-pink-400 hover:text-pink-400 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowDown size={18} />
            </motion.a>
            <motion.a
              href="#"
              className="px-6 py-3 sm:px-8 sm:py-4 border border-gray-600 rounded-full font-semibold text-white hover:border-pink-400 hover:text-pink-400 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <ArrowDown size={18} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center gap-6 text-gray-400"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-green">2+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-pink">10+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-orange">5+</div>
              <div className="text-sm">Technologies</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-gray-400" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
