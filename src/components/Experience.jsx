import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { experience } from '../data/portfolio';

export default function Experience() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="experience" style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 10%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          <span className="sec-label">Work Experience</span>
          <h2 className="sec-heading">Where I've worked.</h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {experience.map((exp, i) => (
              <div key={i} style={{ paddingBottom: i < experience.length - 1 ? 52 : 0, position: 'relative' }}>
                <div className="tl-grid">

                  {i < experience.length - 1 && (
                    <div className="tl-line" style={{
                      top: 6, bottom: -52,
                      background: 'linear-gradient(to bottom, var(--cyan) 0%, var(--glass-border) 100%)',
                    }} />
                  )}
                  <div className="tl-node" />

                  {/* LEFT */}
                  <div style={{ paddingRight: 36, paddingTop: 2, paddingBottom: 8 }}>
                    {exp.period.includes('Present') && (
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        padding: '3px 10px', borderRadius: 999,
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        marginBottom: 8,
                      }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 600, color: 'var(--cyan)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Current</span>
                      </div>
                    )}
                    <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--white)', lineHeight: 1.3, marginBottom: 5 }}>{exp.company}</p>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 500, color: 'var(--cyan)', lineHeight: 1.3, marginBottom: 8 }}>{exp.role}</p>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--muted)' }}>{exp.period}</p>
                  </div>

                  {/* RIGHT */}
                  <div className="tl-right">
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 14, maxWidth: 600 }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: j < exp.bullets.length - 1 ? 10 : 0 }}>
                          <span style={{ color: 'var(--cyan)', fontSize: 12, marginTop: 3, flexShrink: 0 }}>▸</span>
                          <span style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.5 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {exp.tags.map(tag => <span key={tag} className="tag-cap">{tag}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


