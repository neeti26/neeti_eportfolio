import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { personalInfo } from '../data/portfolio';
import { Mail, Link, Code2, ArrowUpRight, MapPin } from 'lucide-react';

const EMAIL = 'neetimalu26@gmail.com';

const connectCards = [
  { icon: Mail,  label: 'Email',    value: EMAIL,          isAction: true,  actionLabel: 'Open Gmail' },
  { icon: Link,  label: 'LinkedIn', value: 'neeti-malu',   isAction: false, href: personalInfo.linkedin, actionLabel: 'Visit Profile' },
  { icon: Code2, label: 'GitHub',   value: 'neeti26',      isAction: false, href: personalInfo.github,   actionLabel: 'View Repos' },
];

export default function Contact() {
  const [ref, visible] = useIntersectionObserver();

  const openGmail = () => window.open(`https://mail.google.com/mail/?view=cm&to=${EMAIL}`, '_blank');

  return (
    <section id="contact" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 10%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          <span className="sec-label">Contact</span>

          {/* Headline — DM Sans */}
          <h2 style={{
            fontFamily: "'DM Sans', 'Inter', sans-serif",
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-1px', textAlign: 'center',
            marginBottom: 48,
            background: 'linear-gradient(135deg, #f0f4f8 0%, #f0f4f8 35%, #38bdf8 65%, #0ea5e9 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Let's build<br />something together.
          </h2>

          {/* 3 connect cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
            {connectCards.map(({ icon: Icon, label, value, isAction, href, actionLabel }) => {
              const Wrapper = isAction ? 'button' : 'a';
              const props = isAction
                ? { onClick: openGmail, type: 'button' }
                : { href, target: '_blank', rel: 'noopener noreferrer' };

              return (
                <Wrapper key={label} {...props}
                  className="hyper-glass"
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', gap: 12, padding: '32px 20px',
                    cursor: 'pointer', textDecoration: 'none', textAlign: 'center',
                    transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,255,255,0.30)'; e.currentTarget.style.background = 'rgba(0,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(0,255,255,0.07)',
                    border: '1px solid rgba(0,255,255,0.22)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 16px rgba(0,255,255,0.10)',
                  }}>
                    <Icon size={20} color="#00ffff" />
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: 0 }}>{label}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#4a4a4a', margin: 0, wordBreak: 'break-all' }}>{value}</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 600, color: '#333', letterSpacing: '0.06em' }}>
                    <ArrowUpRight size={11} color="#333" />{actionLabel}
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Info bar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '14px 24px',
            background: 'rgba(0,0,0,0.40)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: 10, marginBottom: 48, opacity: 0.7,
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--mono)', fontSize: 11, color: '#888', letterSpacing: '0.06em' }}>
              <MapPin size={12} color="#00ffff" />
              Pune, India · Remote Available
            </span>
          </div>

          {/* Copyright */}
          <p style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 10, color: '#222', letterSpacing: '0.08em' }}>
            © {new Date().getFullYear()} Neeti Malu
          </p>

        </div>
      </div>
    </section>
  );
}


