import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

function BoldTech({ text }) {
  const kw = ['Rust', 'Next.js', 'Vercel', 'GRC', 'React', 'Python', 'ML', 'YOLOv8', 'TensorFlow', 'OpenCV', 'NLP'];
  const regex = new RegExp(`\\b(${kw.join('|')})\\b`, 'g');
  const parts = text.split(regex);
  return <>{parts.map((p, i) => kw.includes(p) ? <strong key={i} style={{ color: '#e0e0e0', fontWeight: 700 }}>{p}</strong> : p)}</>;
}

const projects = [
  {
    number: '01', title: 'CYNKEX Company Website', subtitle: 'Web Design · Development · Deployment',
    description: 'Designed and developed the official website for CYNKEX, a cybersecurity company. Built a clean, professional web presence with modern UI, responsive layouts, and deployed on Vercel for fast global delivery.',
    tags: ['React', 'Vercel', 'Web Design', 'Responsive UI', 'Deployment'],
    demo: 'https://cynex-website-one.vercel.app', code: 'https://github.com/neeti26',
  },
  {
    number: '02', title: 'Automated GRC Engine', subtitle: 'Automation · Policy Enforcement · Reporting',
    description: 'An intelligent automation engine that maps security controls to compliance frameworks, generates audit-ready reports, and flags policy violations in real time. Designed to eliminate repetitive compliance tasks through rule-based and ML-driven workflows.',
    tags: ['Python', 'Automation', 'GRC', 'ML', 'REST API', 'Reporting'],
    demo: 'https://grcautomation.vercel.app', code: 'https://github.com/neeti26',
  },
  {
    number: '03', title: 'Rust Content Engine', subtitle: 'NLP · Content Generation · Pipeline',
    description: 'A high-performance content generation engine built with Rust and NLP techniques, capable of processing and transforming large volumes of unstructured text into structured, actionable content at low latency.',
    tags: ['Rust', 'NLP', 'Content Pipeline', 'Text Processing', 'Performance'],
    demo: 'https://contentengine-rust.vercel.app', code: 'https://github.com/neeti26',
  },
];

function CardShape({ n }) {
  if (n === '01') return <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><rect x="1" y="1" width="32" height="32" rx="4" stroke="rgba(0,255,255,0.35)" strokeWidth="1.5"/><rect x="7" y="7" width="20" height="20" rx="2" stroke="rgba(0,255,255,0.18)" strokeWidth="1"/><rect x="13" y="13" width="8" height="8" rx="1" fill="rgba(0,255,255,0.22)"/></svg>;
  if (n === '02') return <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><circle cx="17" cy="17" r="16" stroke="rgba(0,255,255,0.35)" strokeWidth="1.5"/><circle cx="17" cy="17" r="9" stroke="rgba(0,255,255,0.18)" strokeWidth="1"/><circle cx="17" cy="17" r="4" fill="rgba(0,255,255,0.25)"/></svg>;
  return <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><polygon points="17,2 32,30 2,30" stroke="rgba(0,255,255,0.35)" strokeWidth="1.5" fill="none"/><polygon points="17,9 26,27 8,27" stroke="rgba(0,255,255,0.18)" strokeWidth="1" fill="none"/><polygon points="17,16 22,25 12,25" fill="rgba(0,255,255,0.22)"/></svg>;
}

export default function Projects() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="projects" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 10%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          <span className="sec-label">Projects</span>
          <h2 className="sec-heading">Things I've built.</h2>

          {/* Equal-height cards grid — buttons pinned to bottom */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, alignItems: 'stretch' }}>
            {projects.map(p => (
              <div key={p.number}
                className="hyper-glass"
                style={{
                  padding: '32px 32px 28px',
                  transition: 'border-color 0.2s, background 0.2s',
                  display: 'flex', flexDirection: 'column',   /* flex column for pinning */
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(56,189,248,0.55)';
                  e.currentTarget.style.background = 'rgba(56,189,248,0.05)';
                  e.currentTarget.style.boxShadow = '0 0 0 1px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top: icon + title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 14 }}>
                  <CardShape n={p.number} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#64748b' }}>{p.number}</span>
                      <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: '#f0f4f8', letterSpacing: '-0.3px', lineHeight: 1.2 }}>{p.title}</h3>
                    </div>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 500, color: '#38bdf8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.subtitle}</p>
                  </div>
                </div>

                {/* Description — flex-1 pushes buttons to bottom */}
                <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
                  <BoldTech text={p.description} />
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {p.tags.map(tag => <span key={tag} className="tag-cap">{tag}</span>)}
                </div>

                {/* Buttons — always at bottom */}
                <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-cyan"
                    style={{ animation: 'demo-pulse 2.5s ease-in-out infinite', padding: '8px 18px', fontSize: 12, flex: 1, justifyContent: 'center' }}
                    onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                    onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}>
                    Live Demo <ExternalLink size={12} />
                  </a>
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn-ghost"
                    style={{ padding: '8px 18px', fontSize: 12, flex: 1, justifyContent: 'center' }}>
                    View Code <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32 }}>
            <a href="https://github.com/neeti26" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'}
              onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
              View all projects on GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


