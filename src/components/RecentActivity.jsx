const activities = [
  {
    tag: 'Latest Deployed',
    title: 'CYNKEX GRC Platform',
    desc: 'Official website for CYNKEX, a cybersecurity company — built with React and deployed on Vercel.',
    href: 'https://cynex-website-one.vercel.app',
  },
  {
    tag: 'Currently Researching',
    title: 'Fraud Detection in Decentralized Systems',
    desc: 'Exploring ML-based anomaly detection techniques applied to on-chain transaction data and smart contract behaviour.',
    href: null,
  },
];

export default function RecentActivity() {
  return (
    <section style={{ padding: '0 0 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(5%, 8vw, 12%)' }}>

        <span className="sec-label">Recent Activity</span>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 8 }}>
          {activities.map(({ tag, title, desc, href }) => (
            <div
              key={tag}
              className="hyper-glass"
              style={{ padding: '24px 28px', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--cyan)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
            >
              {/* Mint monospace tag */}
              <span style={{
                fontFamily: 'var(--sans)',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'var(--text)',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: 999,
                padding: '3px 10px',
                display: 'inline-block',
                marginBottom: 12,
              }}>{tag}</span>

              {/* Title */}
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', fontSize: 15, fontWeight: 700, color: 'var(--white)', marginBottom: 8, textDecoration: 'none', lineHeight: 1.3 }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}>
                  {title} ↗
                </a>
              ) : (
                <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--white)', marginBottom: 8, lineHeight: 1.3 }}>{title}</p>
              )}

              {/* Description */}
              <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
