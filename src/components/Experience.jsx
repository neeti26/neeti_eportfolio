import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { experience } from '../data/portfolio';

export default function Experience() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="experience" className="py-28 border-t border-white/6">
      {/* Max-width 1100px, centered, 10% left padding */}
      <div style={{ maxWidth: 1100, margin: '0 auto', paddingLeft: '10%', paddingRight: '5%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          {/* Section label + heading — aligned to same left edge as company names */}
          <p style={{
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#00f5c4', marginBottom: 12,
          }}>Work Experience</p>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900, color: '#ffffff',
            lineHeight: 1.1, letterSpacing: '-0.01em',
            marginBottom: 64,
          }}>Where I've worked.</h2>

          {/* Timeline — vertical line at 30% of container */}
          <div style={{ position: 'relative' }}>

            {/* Vertical line at exactly 30% */}
            <div style={{
              position: 'absolute',
              left: '30%',
              top: 6,
              bottom: 6,
              width: 1,
              background: 'linear-gradient(to bottom, rgba(0,245,196,0.5) 0%, rgba(0,245,196,0.12) 80%, transparent 100%)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {experience.map((exp, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '30% 70%',
                    position: 'relative',
                    paddingBottom: i < experience.length - 1 ? 52 : 0,
                  }}
                >
                  {/* ── LEFT: company / role / date (30%) ── */}
                  <div style={{ paddingRight: 36, paddingTop: 2 }}>

                    {/* Current badge */}
                    {exp.period.includes('Present') && (
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        padding: '2px 9px', borderRadius: 999,
                        background: 'rgba(0,245,196,0.08)',
                        border: '1px solid rgba(0,245,196,0.28)',
                        marginBottom: 8,
                      }}>
                        <span style={{
                          width: 5, height: 5, borderRadius: '50%',
                          background: '#00f5c4',
                          animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
                          flexShrink: 0,
                        }} />
                        <span style={{
                          fontSize: 9, fontWeight: 700,
                          color: '#00f5c4',
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                        }}>Current</span>
                      </div>
                    )}

                    <p style={{
                      fontSize: 14, fontWeight: 700,
                      color: '#ffffff', lineHeight: 1.3, marginBottom: 5,
                    }}>{exp.company}</p>

                    <p style={{
                      fontSize: 12, fontWeight: 500,
                      color: '#00f5c4', lineHeight: 1.3, marginBottom: 8,
                    }}>{exp.role}</p>

                    <p style={{
                      fontSize: 11, color: '#475569',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>{exp.period}</p>
                  </div>

                  {/* ── Timeline node at 30% boundary ── */}
                  <div style={{
                    position: 'absolute',
                    left: '30%',
                    top: 6,
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    width: 11, height: 11,
                    borderRadius: '50%',
                    background: '#00f5c4',
                    border: '2px solid #030712',
                    /* Electric Mint glow */
                    boxShadow: '0 0 0 3px rgba(0,245,196,0.12), 0 0 12px rgba(0,245,196,0.55)',
                  }} />

                  {/* ── RIGHT: bullets + tags (70%) ── */}
                  <div style={{ paddingLeft: 40, paddingTop: 2 }}>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 14, maxWidth: 600 }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{
                          display: 'flex', alignItems: 'flex-start', gap: 10,
                          marginBottom: j < exp.bullets.length - 1 ? 10 : 0,
                        }}>
                          <span style={{
                            color: '#00f5c4', fontSize: 11,
                            marginTop: 3, flexShrink: 0, lineHeight: 1,
                          }}>▸</span>
                          <span style={{
                            color: '#64748b', fontSize: 13, lineHeight: 1.5,
                          }}>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags — dark capsules, mint border */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {exp.tags.map(tag => (
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
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
