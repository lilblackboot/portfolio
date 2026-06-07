'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer - Intern",
      company: "Nishant Technologies",
      period: "October 2025 – Present",
      location: "Remote",
      type: "accent-green",
      achievements: [
        "Spearheaded the integration of Generative AI models into client web and mobile applications to automate workflows and enhance feature intelligence.",
        "Developed scalable frontend architectures for high-performance dashboards using Next.js and React Native.",
        "Collaborated with design teams to translate Figma concepts into pixel-perfect, responsive user interfaces."
      ]
    },
    {
      title: "Web Developer",
      company: "Lumea Marketing Agency",
      period: "Jan 2026 – Present",
      location: "Remote",
      type: "accent-pink",
      achievements: [
        "Implemented technical SEO strategies and performance optimizations, significantly improving organic search rankings for client websites.",
        "Designed high-quality digital assets and maintained visual brand consistency across platforms using Figma.",
        "Managed web infrastructure to ensure responsive design and fast load times across mobile and desktop devices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-green to-accent-pink mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gray-800"></div>
              )}
              
              <div className="flex gap-8">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className={`w-16 h-16 rounded-full bg-${exp.type} flex items-center justify-center flex-shrink-0`}
                >
                  <div className="w-8 h-8 bg-black rounded-full"></div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 text-${exp.type}`}>
                        {exp.title}
                      </h3>
                      <h4 className="text-xl text-gray-300 mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end text-gray-400 text-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + achIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-3 text-gray-300"
                      >
                        <span className={`text-${exp.type} mt-1`}>•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-orange to-accent-purple rounded-full font-semibold text-black hover:shadow-lg hover:shadow-accent-orange/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
