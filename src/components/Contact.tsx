'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-accent-lime" size={20} />,
      label: "Email",
      value: "suzanmansuri.work@gmail.com",
      href: "mailto:suzanmansuri.work@gmail.com"
    },
  
    {
      icon: <Github className="text-accent-pink" size={20} />,
      label: "GitHub",
      value: "github.com/lilblackboot",
      href: "https://github.com/lilblackboot"
    },
    {
      icon: <Linkedin className="text-accent-lime" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/suzanmansuri",
      href: "https://linkedin.com/in/suzanmansuri"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E7FE55] to-[#FBD4FE] mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-3 sm:p-4 bg-gray-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{info.label}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{info.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#E7FE55]/10 via-[#FBD4FE]/10 to-[#E7FE55]/10 rounded-2xl border border-gray-800 p-6 sm:p-8 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Current Status</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#E7FE55] rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm sm:text-base">Available for freelance projects</span>
              </div>
              <div className="hidden sm:block w-px h-4 sm:h-6 bg-gray-700"></div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm sm:text-base">Open to full-time opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
