import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import ProjectsHome from '@/components/ProjectsHome';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsHome />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
