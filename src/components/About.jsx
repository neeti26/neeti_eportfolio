import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MapPin, Globe, Briefcase } from 'lucide-react';

const statusPills = [
  { icon: MapPin,    label: 'Location',  value: 'Pune, India' },
  { icon: Globe,     label: 'Languages', value: 'EN · HI · MR · DE' },
  { icon: Briefcase, label: 'Status',    value: 'Open to Opportunities' },
];

const focusTiles = [
  { name: 'Machine\nLearning' },
  { name: 'NLP' },
  { name: 'Deep\nLearning' },
  { name: 'Data\nScience' },
  { name: 'Python' },
  { name: 'AI' },
];

/* Inline SVG circuit pattern for tiles */
const circuitBg = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(0,245,196,0.08)' stroke-width='1'%3E%3Cpath d='M10 0v20h20M40 0v10h10v10M0 30h10v20M50 30h10M30 60v-20h-10M60 40h-10v-10'/%3E%3Ccircle cx='10' cy='20' r='2' fill='rgba(0,245,196,0.15)'/%3E%3Ccircle cx='40' cy='10' r='2' fill='rgba(0,245,196,0.15)'/%3E%3Ccircle cx='50' cy='20' r='2' fill='rgba(0,245,196,0.15)'/%3E%3Ccircle cx='10' cy='30' r='2' fill='rgba(0,245,196,0.15)'/%3E%3Ccircle cx='30' cy='40' r='2' fill='rgba(0,245,196,0.15)'/%3E%3C/g%3E%3C/svg%3E")`;

export default function About() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="about" style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', paddingLeft: '8%', paddingRight: '8%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#00f5c4', marginBottom: 12,
          }}>About</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>

            {/* ── LEFT: glassmorphism card ── */}
            <div style={{ position: 'relative' }}>
              {/* Radial glow behind card */}
              <div style={{
                position: 'absolute', inset: -30, zIndex: 0,
                background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(0,245,196,0.07) 0%, transparent 70%)',
                borderRadius: 28, pointerEvents: 'none',
              }} />

              {/* Glass card */}
              <div style={{
                position: 'relative', zIndex: 1,
                background: 'rgba(3,7,18,0.60)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,245,196,0.22)',
                borderRadius: 18,
                padding: '36px 32px',
              }}>
                {/* Serif headline */}
                <h2 style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '2.6rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  letterSpacing: '-0.5px',
                  marginBottom: 28,
                }}>
                  Analytical.<br />Curious.<br />Impact-driven.
                </h2>

                {/* Bio — pure white, 1.9 line-height */}
                <p style={{
                  color: '#ffffff',
                  fontSize: 14,
                  lineHeight: 1.9,
                  margin: 0,
                  opacity: 0.82,
                }}>
                  I specialise in building production-grade ML systems — from{' '}
                  <span style={{ color: '#00f5c4', fontWeight: 600, opacity: 1 }}>
                    fraud detection models that hit 0.94 F1-score
                  </span>{' '}
                  to VAE-powered synthetic data generators that close class-imbalance gaps in
                  cybersecurity datasets.{' '}
                  <span style={{ color: '#00f5c4', fontWeight: 600, opacity: 1 }}>
                    My NLP pipelines map customer emotion to business outcomes
                  </span>{' '}
                  — turning unstructured text into decisions stakeholders can act on.
                </p>
              </div>
            </div>

            {/* ── RIGHT: Education + status pills + focus tiles ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

              {/* Education */}
              <div>
                <p style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: '#334155', marginBottom: 10,
                }}>Education</p>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 4, lineHeight: 1.3 }}>
                  Bachelor of Computer Application
                </p>
                <p style={{ fontSize: 12, color: '#475569', lineHeight: 1.5 }}>
                  Bharati Vidyapeeth Deemed University, Pune
                </p>
              </div>

              {/* Status pills — dark bg, glowing mint icon */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {statusPills.map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '10px 14px',
                    background: 'rgba(0,0,0,0.35)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 10,
                  }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                      background: 'rgba(0,245,196,0.08)',
                      border: '1px solid rgba(0,245,196,0.20)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 0 8px rgba(0,245,196,0.15)',
                    }}>
                      <Icon size={13} color="#00f5c4" />
                    </div>
                    <div>
                      <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#334155', marginBottom: 1 }}>{label}</p>
                      <p style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Focus — geometric square tiles with circuit bg */}
              <div>
                <p style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: '#334155', marginBottom: 10,
                }}>Focus</p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 8,
                }}>
                  {focusTiles.map(({ name }) => (
                    <div key={name} style={{
                      aspectRatio: '1',
                      background: 'rgba(0,245,196,0.03)',
                      border: '1px solid rgba(0,245,196,0.15)',
                      borderRadius: 10,
                      backgroundImage: circuitBg,
                      backgroundSize: '60px 60px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: 8,
                      transition: 'border-color 0.2s, background 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,245,196,0.35)';
                      e.currentTarget.style.background = 'rgba(0,245,196,0.06)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,245,196,0.15)';
                      e.currentTarget.style.background = 'rgba(0,245,196,0.03)';
                    }}
                    >
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10, fontWeight: 600,
                        color: '#00f5c4', textAlign: 'center',
                        lineHeight: 1.4, whiteSpace: 'pre-line',
                        letterSpacing: '0.02em',
                      }}>{name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
