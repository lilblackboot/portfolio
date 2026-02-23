'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      color: "accent-green",
      skills: ["TypeScript", "JavaScript", "HTML", "CSS", "Python"]
    },
    {
      title: "Frontend & Mobile",
      color: "accent-pink",
      skills: ["Next.js", "React.js", "React Native", "Expo", "Tailwind CSS"]
    },
    {
      title: "Backend & Tools",
      color: "accent-orange",
      skills: ["Firebase", "Generative AI", "Git", "GitHub", "Node.js"]
    },
    {
      title: "Design & Strategy",
      color: "accent-purple",
      skills: ["Figma", "UI/UX Design", "SEO Optimization", "Branding", "Prototyping"]
    },
    {
      title: "Core Competencies",
      color: "accent-blue",
      skills: ["Communication", "Team Collaboration", "Problem Solving", "Agile", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-green to-accent-pink mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-6 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "var(--accent-green)",
                      color: "var(--background)"
                    }}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 hover:border-accent-green transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-accent-green/20 to-accent-pink/20 rounded-full border border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
              <span className="text-gray-300">Always learning</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent-pink rounded-full animate-pulse"></div>
              <span className="text-gray-300">Problem solving</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent-orange rounded-full animate-pulse"></div>
              <span className="text-gray-300">Innovation driven</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
