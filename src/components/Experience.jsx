import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { experience } from '../data/portfolio';

export default function Experience() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="experience" style={{ padding: '120px 0' }}>
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
                      background: 'linear-gradient(to bottom, rgba(0,255,255,0.4) 0%, rgba(0,255,255,0.06) 100%)',
                    }} />
                  )}
                  <div className="tl-node" />

                  {/* LEFT */}
                  <div style={{ paddingRight: 36, paddingTop: 2, paddingBottom: 8 }}>
                    {exp.period.includes('Present') && (
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        padding: '2px 9px', borderRadius: 999,
                        background: 'rgba(0,255,255,0.07)',
                        border: '1px solid rgba(0,255,255,0.28)',
                        marginBottom: 8,
                      }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00ffff', animation: 'pulse 2s infinite', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700, color: '#00ffff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Current</span>
                      </div>
                    )}
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', lineHeight: 1.3, marginBottom: 5 }}>{exp.company}</p>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 500, color: '#00ffff', lineHeight: 1.3, marginBottom: 8 }}>{exp.role}</p>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#4a4a4a' }}>{exp.period}</p>
                  </div>

                  {/* RIGHT */}
                  <div className="tl-right">
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 14, maxWidth: 600 }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: j < exp.bullets.length - 1 ? 10 : 0 }}>
                          <span style={{ color: '#00ffff', fontSize: 11, marginTop: 3, flexShrink: 0 }}>▸</span>
                          <span style={{ color: '#666', fontSize: 13, lineHeight: 1.5 }}>{b}</span>
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


