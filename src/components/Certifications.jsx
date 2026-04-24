import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { certifications, education } from '../data/portfolio';
import { BadgeCheck } from 'lucide-react';

export default function Certifications() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="certifications" style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', paddingLeft: '10%', paddingRight: '5%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          {/* Header — same typography as Work Experience */}
          <p style={{
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#00f5c4', marginBottom: 12,
          }}>Credentials</p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900, color: '#ffffff',
            lineHeight: 1.1, letterSpacing: '-0.01em',
            marginBottom: 56,
          }}>Education &<br />Certifications.</h2>

          {/* ── Education: 2-col, university left / degree right ── */}
          <div style={{ marginBottom: 64 }}>
            <p style={{
              fontSize: 10, fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: '#334155', marginBottom: 20,
            }}>Education</p>

            {education.map((edu, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 48,
                alignItems: 'center',
                padding: '28px 32px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 14,
              }}>
                {/* Left — university */}
                <div>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: 'rgba(0,245,196,0.08)',
                    border: '1px solid rgba(0,245,196,0.20)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 14,
                  }}>
                    <span style={{ fontSize: 18 }}>🎓</span>
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 4, lineHeight: 1.3 }}>
                    {edu.institution}
                  </p>
                  <p style={{ fontSize: 11, color: '#475569', fontFamily: "'JetBrains Mono', monospace" }}>
                    {edu.period}
                  </p>
                </div>

                {/* Right — degree + GPA + coursework */}
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#cbd5e1', marginBottom: 6 }}>
                    {edu.degree}
                  </p>
                  <p style={{ fontSize: 13, color: '#00f5c4', fontWeight: 700, marginBottom: 14 }}>
                    GPA: {edu.gpa}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {edu.coursework.map(c => (
                      <span key={c} style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10, color: '#64748b',
                        background: 'rgba(0,245,196,0.04)',
                        border: '1px solid rgba(0,245,196,0.15)',
                        borderRadius: 999, padding: '3px 10px',
                      }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Certifications: 3-col card grid ── */}
          <div>
            <p style={{
              fontSize: 10, fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: '#334155', marginBottom: 20,
            }}>Certifications — {certifications.length} earned</p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
            }}>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    padding: '22px 20px 18px',
                    background: 'rgba(3,7,18,0.65)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 12,
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,245,196,0.22)';
                    e.currentTarget.style.background = 'rgba(0,245,196,0.04)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.background = 'rgba(3,7,18,0.65)';
                  }}
                >
                  {/* Verified badge — top-right corner */}
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    display: 'flex', alignItems: 'center', gap: 4,
                    padding: '2px 7px', borderRadius: 999,
                    background: 'rgba(0,245,196,0.08)',
                    border: '1px solid rgba(0,245,196,0.20)',
                    boxShadow: '0 0 8px rgba(0,245,196,0.12)',
                  }}>
                    <BadgeCheck size={10} color="#00f5c4" />
                    <span style={{
                      fontSize: 9, fontWeight: 700,
                      color: '#00f5c4', letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>Verified</span>
                  </div>

                  {/* Title */}
                  <p style={{
                    fontSize: 13, fontWeight: 700,
                    color: '#ffffff', lineHeight: 1.4,
                    marginBottom: 8, paddingRight: 64,
                  }}>{cert.name}</p>

                  {/* Issuer — Electric Mint */}
                  <p style={{
                    fontSize: 11, fontWeight: 600,
                    color: '#00f5c4', marginBottom: 6,
                    letterSpacing: '0.02em',
                  }}>{cert.issuer}</p>

                  {/* Date — muted */}
                  <p style={{
                    fontSize: 10, color: '#334155',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>{cert.date}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
