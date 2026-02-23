'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/lilblackboot",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/suzanmansuri",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:suzanmansuri.work@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Suzan Mansuri</span>
            </h3>
            <p className="text-gray-400">
              Software Developer & Designer
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2026 Suzan Mansuri. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  color: "var(--accent-green)"
                }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "var(--accent-green)",
              color: "var(--background)"
            }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
