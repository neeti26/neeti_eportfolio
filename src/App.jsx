import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import RecentActivity from './components/RecentActivity';

export default function App() {
  return (
    <div style={{ background: '#080c14', minHeight: '100vh' }}>

      {/* Animated network background */}
      <Background />

      {/* Soft radial glows on top of canvas */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 55% 45% at 80% 8%,  rgba(56,189,248,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 45% 35% at 12% 92%, rgba(99,102,241,0.06) 0%, transparent 70%)
        `,
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <RecentActivity />
      </div>
    </div>
  );
}
