import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { skills } from '../data/portfolio';

export default function Skills() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="skills" style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* 1000px centered container */}
      <div style={{ maxWidth: 1000, margin: '0 auto', paddingLeft: '8%', paddingRight: '8%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          {/* Header */}
          <p style={{
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#00f5c4', marginBottom: 12,
          }}>Skills</p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900, color: '#ffffff',
            lineHeight: 1.1, letterSpacing: '-0.01em',
            marginBottom: 56,
          }}>Technical stack.</h2>

          {/* 4-column grid — one column per category */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40,
            alignItems: 'start',
          }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                {/* Category header — bold Electric Mint */}
                <p style={{
                  fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: '#00f5c4',
                  marginBottom: 20,
                  lineHeight: 1.4,
                }}>{category}</p>

                {/* Skill capsules */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {items.map(skill => (
                    <span key={skill.name} style={{
                      display: 'block',
                      padding: '7px 14px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 8,
                      fontSize: 12,
                      color: '#94a3b8',
                      fontWeight: 500,
                      letterSpacing: '0.01em',
                      transition: 'border-color 0.15s, color 0.15s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,245,196,0.25)';
                      e.currentTarget.style.color = '#e2e8f0';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = '#94a3b8';
                    }}
                    >{skill.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
