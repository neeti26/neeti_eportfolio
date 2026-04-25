import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { certifications, education } from '../data/portfolio';
import { BadgeCheck } from 'lucide-react';

export default function Certifications() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="certifications" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 10%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          <span className="sec-label">Credentials</span>
          <h2 className="sec-heading">Education &<br />Certifications.</h2>

          {/* Education card */}
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 20 }}>Education</p>
            {education.map((edu, i) => (
              <div key={i} className="hyper-glass" style={{ padding: '28px 32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, alignItems: 'center' }}>
                  <div>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(0,255,255,0.07)', border: '1px solid rgba(0,255,255,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                      <span style={{ fontSize: 18 }}>🎓</span>
                    </div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 4, lineHeight: 1.3 }}>{edu.institution}</p>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#94a3b8' }}>{edu.period}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#c8c8c8', marginBottom: 6 }}>{edu.degree}</p>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 13, color: '#00ffff', fontWeight: 700, marginBottom: 14 }}>GPA: {edu.gpa}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {edu.coursework.map(c => <span key={c} className="tag-cap">{c}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications 3-col grid */}
          <div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 20 }}>
              Certifications — {certifications.length} earned
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {certifications.map((cert, i) => (
                <div key={i}
                  style={{
                    position: 'relative', padding: '22px 20px 18px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 12,
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,255,255,0.22)'; e.currentTarget.style.background = 'rgba(0,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                >
                  {/* Verified badge */}
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    display: 'flex', alignItems: 'center', gap: 4,
                    padding: '2px 7px', borderRadius: 999,
                    background: 'rgba(0,255,255,0.07)',
                    border: '1px solid rgba(0,255,255,0.20)',
                    boxShadow: '0 0 8px rgba(0,255,255,0.10)',
                  }}>
                    <BadgeCheck size={10} color="#00ffff" />
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700, color: '#00ffff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Verified</span>
                  </div>

                  <p style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', lineHeight: 1.4, marginBottom: 8, paddingRight: 64 }}>{cert.name}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600, color: '#00ffff', marginBottom: 6 }}>{cert.issuer}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#64748b' }}>{cert.date}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


