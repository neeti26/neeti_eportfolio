import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Affiliations from './components/Affiliations';
import Contact from './components/Contact';
import RecentActivity from './components/RecentActivity';

export default function App() {
  return (
    <div style={{ background: '#020617', minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      
      {/* Elite tech dark mode gradient (Stripe/Anthropic style) */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse at 50% -20%, rgba(37,99,235,0.15) 0%, rgba(2,6,23,0) 70%)`
      }} />

      <div style={{ position: 'relative', zIndex: 5, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Affiliations />
        <Contact />
        <RecentActivity />
      </div>
    </div>
  );
}
