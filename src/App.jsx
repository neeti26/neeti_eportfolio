import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    /* ── Global background: particle image + deep navy overlay ── */
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Deep navy-to-black overlay — lighter at top so bg shows, denser below for readability */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(3,7,18,0.72) 0%, rgba(3,7,18,0.82) 30%, rgba(3,7,18,0.90) 70%, rgba(3,7,18,0.95) 100%)',
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}
