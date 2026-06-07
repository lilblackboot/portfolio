'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      specialization: "(Specialization in AI)",
      institution: "Parul University",
      location: "Vadodara",
      period: "2026",
      type: "accent-lime",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "Higher Secondary Education",
      specialization: "(12th Grade)",
      institution: "Oxford English School",
      location: "Patan",
      period: "2022",
      type: "accent-pink",
      icon: <Award size={24} />
    }
  ];

  const achievements = [
    "AI Specialization with focus on Machine Learning and Deep Learning",
    "Strong foundation in Computer Science fundamentals",
    "Hands-on experience with modern development technologies",
    "Multiple successful projects demonstrating practical skills"
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-green to-accent-pink mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gray-800"></div>
              )}
              
              <div className="flex gap-8">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className={`w-16 h-16 rounded-full bg-${edu.type}/20 border-2 border-${edu.type} flex items-center justify-center flex-shrink-0`}
                >
                  <div className={`text-${edu.type}`}>
                    {edu.icon}
                  </div>
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
                      <h3 className={`text-2xl font-bold mb-2 text-${edu.type}`}>
                        {edu.degree}
                      </h3>
                      <p className="text-gray-400 mb-2">{edu.specialization}</p>
                      <h4 className="text-xl text-gray-300">{edu.institution}</h4>
                    </div>
                    <div className="flex flex-col md:items-end text-gray-400 text-sm mt-4 md:mt-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-accent-green/10 to-accent-pink/10 rounded-2xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Key <span className="gradient-text">Achievements</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-accent-green to-accent-pink rounded-full"></div>
                  <span className="text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
