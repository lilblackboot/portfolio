'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Lightbulb, Code, Smartphone, Globe } from 'lucide-react';
import Link from 'next/link';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    features: string[];
    challenges: string[];
    solutions: string[];
    outcomes: string[];
    role: string;
    duration: string;
    teamSize: string;
    liveUrl?: string;
    githubUrl?: string;
    images?: string[];
    color: string;
    icon: React.ReactNode;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="floating-shape bg-accent-green w-96 h-96 top-10 left-10"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="floating-shape bg-accent-pink w-80 h-80 bottom-10 right-10"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex p-4 bg-gray-800 rounded-2xl mb-6">
                {project.icon}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-4xl md:text-6xl font-bold mb-6 text-${project.color}`}
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mb-8"
            >
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 justify-center"
            >
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-accent-green to-accent-pink rounded-full font-semibold text-black hover:shadow-lg hover:shadow-accent-green/25 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-gray-700 rounded-full font-semibold text-white hover:border-gray-600 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  View Code
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <Target className="text-accent-green" size={20} />
                <h3 className="font-semibold text-white">Role</h3>
              </div>
              <p className="text-gray-300">{project.role}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-accent-pink" size={20} />
                <h3 className="font-semibold text-white">Duration</h3>
              </div>
              <p className="text-gray-300">{project.duration}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-accent-orange" size={20} />
                <h3 className="font-semibold text-white">Team Size</h3>
              </div>
              <p className="text-gray-300">{project.teamSize}</p>
            </motion.div>
          </div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Project <span className="gradient-text">Overview</span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Key <span className="gradient-text">Features</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">
                <span className="text-accent-pink">Challenges</span>
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                  >
                    <p className="text-gray-300">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">
                <span className="text-accent-green">Solutions</span>
              </h2>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                  >
                    <p className="text-gray-300">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Project <span className="gradient-text">Outcomes</span>
            </h2>
            <div className="bg-gradient-to-r from-accent-green/10 to-accent-pink/10 rounded-2xl p-8 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-6">
                {project.outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <Lightbulb className="text-accent-orange" size={20} />
                    <p className="text-gray-300">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
