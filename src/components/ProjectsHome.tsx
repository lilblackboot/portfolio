'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Brain } from 'lucide-react';

const ProjectsHome = () => {
  const projects = [
    {
      title: "goGuide — Campus Navigation System",
      description: "Developed a cross-platform (Mobile & Web) campus guide tailored for Parul University students. Built a responsive student dashboard and mobile interface to facilitate easy access to campus facilities and academic resources.",
      tech: ["React Native", "React", "TypeScript", "Firebase"],
      icon: <Globe className="text-accent-green" size={24} />,
      features: ["Cross-platform", "Student Dashboard", "Campus Facilities", "Accessibility"],
      color: "accent-green",
      detailUrl: "/goguide"
    },
    {
      title: "Nutriwise — AI-Powered Food Scanner",
      description: "Engineered a health-focused mobile application that utilizes Gemini AI to scan barcodes and provide instant nutritional analysis. Integrated backend logic for real-time data processing and personalized health recommendations.",
      tech: ["React Native", "Expo", "Gemini AI", "Firebase"],
      icon: <Brain className="text-accent-pink" size={24} />,
      features: ["AI Integration", "Barcode Scanning", "Nutritional Analysis", "Real-time Processing"],
      color: "accent-pink",
      detailUrl: "/nutriwise"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-green to-accent-pink mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden group"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r from-${project.color}/20 to-transparent p-6 border-b border-gray-800`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-800 rounded-xl">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.detailUrl}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                      aria-label="View project details"
                    >
                      <ExternalLink size={18} className="text-gray-400" />
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={18} className="text-gray-400" />
                    </motion.button>
                  </div>
                </div>
                <h3 className={`text-2xl font-bold text-${project.color} mb-2`}>
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "var(--accent-green)",
                          color: "var(--background)"
                        }}
                        className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700 hover:border-accent-green transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-gray-400 text-sm"
                      >
                        <div className={`w-2 h-2 bg-${project.color} rounded-full`}></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 rounded-full font-semibold text-white hover:border-accent-blue hover:text-accent-blue transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Projects
            <Github size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHome;
