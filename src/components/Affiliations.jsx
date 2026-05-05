import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { affiliations } from '../data/portfolio';

export default function Affiliations() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="affiliations" style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 10%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          <span className="sec-label">Programs</span>
          <h2 className="sec-heading">Mentorships &<br />Affiliations.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {affiliations.map((item, i) => (
              <div key={i}
                className="hyper-glass"
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '24px 28px',
                  transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--cyan)';
                  e.currentTarget.style.background = 'rgba(59,130,246,0.04)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.background = 'var(--glass-bg)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid var(--cyan)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 700, color: 'var(--white)', marginBottom: 4, lineHeight: 1.2 }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.4 }}>{item.program}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
