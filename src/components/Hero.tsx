'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-30 bg-black overflow-hidden">
      {/* LBB Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-6 left-6 z-20"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-pink-400/20 to-orange-400/20 rounded-full blur-xl opacity-50"></div>
          
          {/* Logo */}
          <div className="relative z-10 px-4 py-2 bg-black/80 backdrop-blur-md rounded-lg border border-white/10">
            <span className="text-xl md:text-2xl font-bold gradient-text">LBB</span>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Image - First on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:hidden flex justify-center items-center mb-8"
          >
            <div className="relative w-full max-w-xs">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
              
              {/* Image container */}
              <div className="relative z-10 rounded-full overflow-hidden border-2 border-gray-800 shadow-2xl">
                <img
                  src="/profile_image.jpg"
                  alt="Suzan Mansuri"
                  className="w-full h-auto object-cover mix-blend-screen opacity-90"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-pink-400 rounded-full opacity-60 blur-xl"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-60 blur-xl"
              />
            </div>
          </motion.div>

          {/* Left Content */}
          <div className="text-left">
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Suzan Mansuri</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8"
            >
              Software Developer & <span className="text-accent-pink">Designer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-gray-400 max-w-lg mb-12"
            >
              Motivated Computer Science student specializing in AI with expertise in 
              Next.js, React Native, and Generative AI integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-start"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex justify-start gap-6 text-gray-400"
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

          {/* Desktop Image - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:flex justify-end padding-right-2 items-center hidden"
          >
            <div className="relative w-full max-w-md">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
              
              {/* Image container */}
              <div className="relative z-10 rounded-full overflow-hidden border-2 border-gray-800 shadow-2xl">
                <img
                  src="/profile_image.jpg"
                  alt="Suzan Mansuri"
                  className="w-full h-auto object-cover mix-blend-screen opacity-90"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-pink-400 rounded-full opacity-60 blur-xl"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-60 blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden"
      >
        <ArrowDown className="text-gray-400" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
