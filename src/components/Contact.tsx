'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Globe, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="text-accent-green" size={20} />,
      label: "Email",
      value: "suzanmansuri.work@gmail.com",
      href: "mailto:suzanmansuri.work@gmail.com"
    },
  
    {
      icon: <Github className="text-accent-purple" size={20} />,
      label: "GitHub",
      value: "github.com/lilblackboot",
      href: "https://github.com/lilblackboot"
    },
    {
      icon: <Linkedin className="text-accent-blue" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/suzanmansuri",
      href: "https://linkedin.com/in/suzanmansuri"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You could integrate with a service like Formspree, EmailJS, etc.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <div className="w-24 h-1 bg-gradient-to-r from-accent-green to-accent-pink mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Let's Connect</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label !== 'Email' && info.label !== 'Phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gray-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gradient-to-r from-accent-green/10 to-accent-pink/10 rounded-2xl border border-gray-800"
            >
              <h4 className="text-lg font-semibold mb-3 text-white">Current Status</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                <span className="text-gray-300">Available for freelance projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-pink rounded-full animate-pulse"></div>
                <span className="text-gray-300">Open to full-time opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Send Me a Message</h3>
            
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-accent-green focus:outline-none transition-colors duration-300"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-accent-pink focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-accent-orange focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-accent-green to-accent-pink rounded-xl font-semibold text-black hover:shadow-lg hover:shadow-accent-green/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
