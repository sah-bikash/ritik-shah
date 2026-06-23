import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Testimonials from './components/sections/Testimonials';
import Achievements from './components/sections/Achievements';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import BackToTop from './components/ui/BackToTop';

export default function App() {
  useEffect(() => {
    // Remove loading state after initial render
    document.body.classList.add('loaded');
  }, []);

  return (
    <Layout>
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Testimonials />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <BackToTop />
    </Layout>
  );
}