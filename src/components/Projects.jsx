import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'CYNKEX GRC Platform',
    subtitle: 'Governance · Risk · Compliance',
    description: 'A full-stack GRC platform that centralises governance workflows, automates compliance tracking, and surfaces real-time risk indicators across infrastructure assets. Built to reduce manual audit overhead and enforce policy consistency at scale.',
    tags: ['Python', 'React', 'Risk Management', 'Compliance Automation', 'Dashboard'],
    demo: 'https://cynex-website-one.vercel.app',
    code: 'https://github.com/neeti26',
  },
  {
    number: '02',
    title: 'Automated GRC Engine',
    subtitle: 'Automation · Policy Enforcement · Reporting',
    description: 'An intelligent automation engine that maps security controls to compliance frameworks, generates audit-ready reports, and flags policy violations in real time. Designed to eliminate repetitive compliance tasks through rule-based and ML-driven workflows.',
    tags: ['Python', 'Automation', 'GRC', 'ML', 'REST API', 'Reporting'],
    demo: 'https://grcautomation.vercel.app',
    code: 'https://github.com/neeti26',
  },
  {
    number: '03',
    title: 'Rust Content Engine',
    subtitle: 'NLP · Content Generation · Pipeline',
    description: 'A high-performance content generation engine built with Rust and NLP techniques, capable of processing and transforming large volumes of unstructured text into structured, actionable content at low latency.',
    tags: ['Rust', 'NLP', 'Content Pipeline', 'Text Processing', 'Performance'],
    demo: 'https://contentengine-rust.vercel.app',
    code: 'https://github.com/neeti26',
  },
];

/* Minimalist geometric shape per card — Electric Mint themed */
function CardShape({ n }) {
  if (n === '01') return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="1" y="1" width="34" height="34" rx="4"
        stroke="rgba(0,245,196,0.35)" strokeWidth="1.5" />
      <rect x="8" y="8" width="20" height="20" rx="2"
        stroke="rgba(0,245,196,0.20)" strokeWidth="1" />
      <rect x="14" y="14" width="8" height="8" rx="1"
        fill="rgba(0,245,196,0.25)" />
    </svg>
  );
  if (n === '02') return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="17"
        stroke="rgba(0,245,196,0.35)" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="10"
        stroke="rgba(0,245,196,0.20)" strokeWidth="1" />
      <circle cx="18" cy="18" r="4"
        fill="rgba(0,245,196,0.30)" />
    </svg>
  );
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <polygon points="18,2 34,32 2,32"
        stroke="rgba(0,245,196,0.35)" strokeWidth="1.5" fill="none" />
      <polygon points="18,10 28,28 8,28"
        stroke="rgba(0,245,196,0.20)" strokeWidth="1" fill="none" />
      <polygon points="18,17 23,26 13,26"
        fill="rgba(0,245,196,0.25)" />
    </svg>
  );
}

export default function Projects() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="projects" style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* 1100px centered container */}
      <div style={{ maxWidth: 1100, margin: '0 auto', paddingLeft: '10%', paddingRight: '5%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          {/* Header */}
          <p style={{
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#00f5c4', marginBottom: 12,
          }}>Projects</p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900, color: '#ffffff',
            lineHeight: 1.1, letterSpacing: '-0.01em',
            marginBottom: 56,
          }}>Things I've built.</h2>

          {/* Project cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {projects.map((p) => (
              <div
                key={p.number}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 15,
                  padding: '32px 36px',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,245,196,0.22)';
                  e.currentTarget.style.background = 'rgba(0,245,196,0.03)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                }}
              >
                {/* Card top row: shape + number + title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 16 }}>
                  <CardShape n={p.number} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11, color: '#334155',
                      }}>{p.number}</span>
                      <h3 style={{
                        fontSize: 18, fontWeight: 800,
                        color: '#ffffff', letterSpacing: '-0.01em',
                        lineHeight: 1,
                      }}>{p.title}</h3>
                    </div>
                    <p style={{
                      fontSize: 11, fontWeight: 500,
                      color: '#00f5c4', letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}>{p.subtitle}</p>
                  </div>
                </div>

                {/* Description — two lines max */}
                <p style={{
                  fontSize: 13, color: '#64748b',
                  lineHeight: 1.7, marginBottom: 20,
                  maxWidth: 680,
                }}>{p.description}</p>

                {/* Bottom row: tags left, buttons right */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 16,
                }}>
                  {/* Tech stack capsules */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                        fontSize: 10, color: '#64748b',
                        background: 'rgba(0,245,196,0.04)',
                        border: '1px solid rgba(0,245,196,0.18)',
                        borderRadius: 999,
                        padding: '3px 10px',
                        letterSpacing: '0.02em',
                      }}>{tag}</span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '8px 18px',
                        background: 'rgba(0,245,196,0.10)',
                        border: '1px solid rgba(0,245,196,0.30)',
                        borderRadius: 8,
                        fontSize: 12, fontWeight: 600,
                        color: '#00f5c4',
                        textDecoration: 'none',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,245,196,0.18)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,245,196,0.10)'}
                    >
                      Live Demo <ExternalLink size={12} />
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '8px 18px',
                        background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.10)',
                        borderRadius: 8,
                        fontSize: 12, fontWeight: 500,
                        color: '#64748b',
                        textDecoration: 'none',
                        transition: 'border-color 0.2s, color 0.2s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                        e.currentTarget.style.color = '#e2e8f0';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                        e.currentTarget.style.color = '#64748b';
                      }}
                    >
                      View Code <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other projects link */}
          <div style={{ marginTop: 32, textAlign: 'left' }}>
            <a
              href="https://github.com/neeti26"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#334155',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#00f5c4'}
              onMouseLeave={e => e.currentTarget.style.color = '#334155'}
            >
              View all projects on GitHub ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
