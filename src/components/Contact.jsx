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
    <section id="contact" style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 10%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          <span className="sec-label">Contact</span>

          {/* Headline — DM Sans */}
          <h2 style={{
            fontFamily: "var(--sans)",
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.02em', textAlign: 'center',
            marginBottom: 48,
            color: 'var(--white)'
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
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; e.currentTarget.style.background = 'rgba(59,130,246,0.06)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.background = 'var(--glass-bg)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(59,130,246,0.1)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color="var(--cyan)" />
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--white)', margin: 0 }}>{label}</p>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', margin: 0, wordBreak: 'break-all' }}>{value}</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500, color: 'var(--text)', letterSpacing: '0.04em' }}>
                    <ArrowUpRight size={12} color="var(--text)" />{actionLabel}
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Info bar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '14px 24px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: 10, marginBottom: 48,
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', letterSpacing: '0.04em' }}>
              <MapPin size={14} color="var(--cyan)" />
              Pune, India · Remote Available
            </span>
          </div>

          {/* Copyright */}
          <p style={{ textAlign: 'center', fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', letterSpacing: '0.04em' }}>
            © {new Date().getFullYear()} Neeti Malu
          </p>

        </div>
      </div>
    </section>
  );
}


