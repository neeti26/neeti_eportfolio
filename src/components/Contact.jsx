import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { personalInfo } from '../data/portfolio';
import { Mail, Link, Code2, ArrowUpRight, MapPin } from 'lucide-react';

const EMAIL = 'neetimalu26@gmail.com';

export default function Contact() {
  const [ref, visible] = useIntersectionObserver();

  const openGmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${EMAIL}`,
      '_blank'
    );
  };

  const connectCards = [
    {
      icon: Mail,
      label: 'Email',
      value: EMAIL,
      action: openGmail,
      actionLabel: 'Open Gmail',
      isAction: true,
    },
    {
      icon: Link,
      label: 'LinkedIn',
      value: 'neeti-malu',
      href: personalInfo.linkedin,
      actionLabel: 'Visit Profile',
      isAction: false,
    },
    {
      icon: Code2,
      label: 'GitHub',
      value: 'neeti26',
      href: personalInfo.github,
      actionLabel: 'View Repos',
      isAction: false,
    },
  ];

  return (
    <section id="contact" style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', paddingLeft: '8%', paddingRight: '8%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          {/* Section label */}
          <p style={{
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#00f5c4', marginBottom: 20, textAlign: 'center',
          }}>Contact</p>

          {/* Massive headline with mint gradient */}
          <h2 style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            textAlign: 'center',
            marginBottom: 56,
            background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 40%, #00f5c4 70%, #00ddb0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Let's build<br />something together.
          </h2>

          {/* 3 connect cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginBottom: 20,
          }}>
            {connectCards.map(({ icon: Icon, label, value, href, action, actionLabel, isAction }) => {
              const Wrapper = isAction ? 'button' : 'a';
              const wrapperProps = isAction
                ? { onClick: action, type: 'button' }
                : { href, target: '_blank', rel: 'noopener noreferrer' };

              return (
                <Wrapper
                  key={label}
                  {...wrapperProps}
                  style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 12, padding: '32px 20px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 14,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
                    textAlign: 'center',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,245,196,0.30)';
                    e.currentTarget.style.background = 'rgba(0,245,196,0.05)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(0,245,196,0.08)',
                    border: '1px solid rgba(0,245,196,0.20)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 16px rgba(0,245,196,0.10)',
                  }}>
                    <Icon size={20} color="#00f5c4" />
                  </div>

                  {/* Label */}
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: 0 }}>{label}</p>

                  {/* Value */}
                  <p style={{
                    fontSize: 11, color: '#475569',
                    fontFamily: "'JetBrains Mono', monospace",
                    margin: 0, wordBreak: 'break-all',
                  }}>{value}</p>

                  {/* Action label */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    fontSize: 11, fontWeight: 600,
                    color: '#334155',
                    letterSpacing: '0.06em',
                  }}>
                    <ArrowUpRight size={11} />
                    {actionLabel}
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Info bar — location only */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 24px',
            background: 'rgba(0,0,0,0.30)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 10,
            marginBottom: 48,
          }}>
            <span style={{
              display: 'flex', alignItems: 'center', gap: 7,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, color: '#475569',
            }}>
              <MapPin size={12} color="#00f5c4" />
              Pune, India · Remote Available
            </span>
          </div>

          {/* Copyright — centered, muted */}
          <p style={{
            textAlign: 'center',
            fontSize: 11, color: '#1e293b',
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.06em',
          }}>
            © {new Date().getFullYear()} Neeti Malu · Data Scientist & ML Engineer
          </p>

        </div>
      </div>
    </section>
  );
}
