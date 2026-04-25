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
    <div style={{ background: '#060b14', minHeight: '100vh' }}>

      {/* Layer 1 — deep navy base gradient */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `
          linear-gradient(160deg,
            #060b14 0%,
            #081020 25%,
            #0a1428 50%,
            #081020 75%,
            #060b14 100%
          )
        `,
      }} />

      {/* Layer 2 — diagonal subtle lines (premium consulting look) */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 60px,
            rgba(56,189,248,0.025) 60px,
            rgba(56,189,248,0.025) 61px
          )
        `,
      }} />

      {/* Layer 3 — radial glows for depth */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 70% 50% at 75% 15%, rgba(56,189,248,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 50% 40% at 15% 80%, rgba(99,102,241,0.06) 0%, transparent 65%),
          radial-gradient(ellipse 40% 30% at 50% 50%, rgba(56,189,248,0.03) 0%, transparent 70%)
        `,
      }} />

      {/* Layer 4 — animated network nodes */}
      <Background />

      <div style={{ position: 'relative', zIndex: 5 }}>
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
