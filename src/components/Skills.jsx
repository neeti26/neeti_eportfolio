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
    <section id="skills" style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 10%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          <span className="sec-label">Skills</span>
          <h2 className="sec-heading">Technical stack.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, alignItems: 'start' }}>
            {allCategories.map(([category, items]) => (
              <div key={category}>
                {/* Category header */}
                <p style={{
                  fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 600,
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                  color: 'var(--cyan)', marginBottom: 14,
                }}>{category}</p>

                {/* Skill boxes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {items.map(skill => (
                    <span key={skill.name}
                      style={{
                        display: 'block',
                        padding: '9px 14px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 8,
                        fontSize: 13,
                        color: 'var(--muted)',
                        fontWeight: 500,
                        cursor: 'default',
                        transition: 'border-color 0.15s, color 0.15s, background 0.15s',
                        lineHeight: 1.4,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--cyan)';
                        e.currentTarget.style.color = 'var(--white)';
                        e.currentTarget.style.background = 'rgba(59,130,246,0.06)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.color = 'var(--muted)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
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

