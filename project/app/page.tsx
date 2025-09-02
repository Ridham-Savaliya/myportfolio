import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import StarfieldBackground from '@/components/ui/StarfieldBackground';

export default function Home() {
  return (
    <main className="relative">
      <StarfieldBackground />
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about" className="py-20">
        <About />
      </section>
      
      <section id="skills" className="py-20">
        <Skills />
      </section>
      
      <section id="projects" className="py-20">
        <Projects />
      </section>
      
      <section id="experience" className="py-20">
        <Experience />
      </section>
      
      <section id="achievements" className="py-20">
        <Achievements />
      </section>
      
      <section id="contact" className="py-20">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
}