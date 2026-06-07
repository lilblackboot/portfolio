'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Brain, Users } from 'lucide-react';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma, SiPython, SiGooglegemini, SiGithub } from 'react-icons/si';
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiPython />, title: "python", href: "https://www.python.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGooglegemini/>, title: "gemini", href: "https://gemini.google.com" },
  { node: <SiGithub/>, title: "github", href: "https://github.com" },

];

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-accent-green" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: <Palette className="text-accent-pink" size={24} />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces"
    },
    {
      icon: <Brain className="text-accent-orange" size={24} />,
      title: "AI Integration",
      description: "Leveraging cutting-edge AI technologies in applications"
    },
    {
      icon: <Users className="text-accent-purple" size={24} />,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
       
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-green to-accent-pink mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-accent-green">
              Professional Summary
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Motivated Computer Science student specializing in AI with a strong track record 
              of delivering high-quality software solutions. Experience working with multiple 
              development teams and executing successful freelance projects.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Expert in the modern JavaScript stack (Next.js, React Native) with a focus on 
              integrating Generative AI, SEO optimization, and creating responsive, 
              user-centric designs.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <div className="text-accent-blue font-semibold mb-1">Location</div>
                <div className="text-gray-400 text-sm">Vadodara, India</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
       <div className="mt-40"> <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      /></div>
    </section>
  );
};

export default About;
