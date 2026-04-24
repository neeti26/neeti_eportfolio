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
    <section style={{ padding: '0 0 80px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(5%, 8vw, 12%)' }}>

        <span className="sec-label">Recent Activity</span>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 8 }}>
          {activities.map(({ tag, title, desc, href }) => (
            <div
              key={tag}
              className="hyper-glass"
              style={{ padding: '24px 28px', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              {/* Mint monospace tag */}
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#38bdf8',
                background: 'rgba(56,189,248,0.07)',
                border: '1px solid rgba(56,189,248,0.20)',
                borderRadius: 999,
                padding: '2px 9px',
                display: 'inline-block',
                marginBottom: 12,
              }}>{tag}</span>

              {/* Title */}
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', fontSize: 15, fontWeight: 700, color: '#f0f4f8', marginBottom: 8, textDecoration: 'none', lineHeight: 1.3 }}
                  onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'}
                  onMouseLeave={e => e.currentTarget.style.color = '#f0f4f8'}>
                  {title} ↗
                </a>
              ) : (
                <p style={{ fontSize: 15, fontWeight: 700, color: '#f0f4f8', marginBottom: 8, lineHeight: 1.3 }}>{title}</p>
              )}

              {/* Description */}
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: '#475569', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
