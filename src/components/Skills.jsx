import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { skills } from '../data/portfolio';

const research = [
  { name: 'Fraud Detection in Decentralized Systems' },
  { name: 'VAE-based Synthetic Data Generation' },
  { name: 'LLM Fine-tuning & Prompt Engineering' },
  { name: 'Anomaly Detection in Network Traffic' },
  { name: 'Explainable AI (XAI)' },
];

export default function Skills() {
  const [ref, visible] = useIntersectionObserver();

  const allCategories = [
    ...Object.entries(skills),
    ['Research', research],
  ];

  return (
    <section id="skills" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 10%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          <span className="sec-label">Skills</span>
          <h2 className="sec-heading">Technical stack.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, alignItems: 'start' }}>
            {allCategories.map(([category, items]) => (
              <div key={category}>
                {/* Category header */}
                <p style={{
                  fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: '#38bdf8', marginBottom: 14,
                }}>{category}</p>

                {/* Skill boxes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {items.map(skill => (
                    <span key={skill.name}
                      style={{
                        display: 'block',
                        padding: '9px 14px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: 8,
                        fontSize: 13,
                        color: '#cbd5e1',       /* clearly visible */
                        fontWeight: 500,
                        cursor: 'default',
                        transition: 'border-color 0.15s, color 0.15s, background 0.15s',
                        lineHeight: 1.4,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'rgba(56,189,248,0.40)';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.background = 'rgba(56,189,248,0.06)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                        e.currentTarget.style.color = '#cbd5e1';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
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

