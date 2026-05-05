import { useEffect, useState } from 'react';
import { MapPin, ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import profilePhoto from '../assets/profile.jpg';

const roles = ['Data Scientist', 'ML Engineer', 'AI Engineer', 'Python Developer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const cur = roles[roleIdx];
    let t;
    if (!deleting && charIdx < cur.length)
      t = setTimeout(() => { setText(cur.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 80);
    else if (!deleting && charIdx === cur.length)
      t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && charIdx > 0)
      t = setTimeout(() => { setText(cur.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 40);
    else { setDeleting(false); setRoleIdx(i => (i + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  return (
    <>
      <style>{`
        .hero-grid { grid-template-columns: 55% 45%; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-col { justify-content: center !important; padding-right: 0 !important; }
        }
      `}</style>

      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 64 }}>
        <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '60px 10%' }}>
          <div className="hero-grid" style={{ display: 'grid', gap: 40, alignItems: 'center' }}>

            {/* ── LEFT: Text ── */}
            <div>
              {/* Status badge */}
              <div className="anim-in" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '5px 14px', borderRadius: 999,
                border: '1px solid var(--glass-border)',
                background: 'var(--glass-bg)',
                marginBottom: 24,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--cyan)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.04em', color: 'var(--text)' }}>
                  Open to Opportunities
                </span>
              </div>

              {/* Name — Playfair Display, authoritative serif, pure white */}
              <h1 className="anim-up d1" style={{
                fontFamily: "var(--sans)",
                fontSize: 'clamp(3rem, 5.5vw, 4.8rem)',
                fontWeight: 800,
                color: 'var(--white)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                marginBottom: 16,
              }}>Neeti Malu</h1>

              {/* Role — monospace, Cyber-Cyan */}
              <div className="anim-up d2" style={{ display: 'flex', alignItems: 'center', gap: 6, height: 34, marginBottom: 28 }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: 20, fontWeight: 600, color: 'var(--cyan)' }}>{text}</span>
                <span className="cursor" style={{ display: 'inline-block', width: 2, height: 22, background: 'var(--cyan)' }} />
              </div>

              {/* Bio */}
              <p className="anim-up d3" style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, maxWidth: 460, marginBottom: 16 }}>
                I build intelligent systems — fraud detectors, synthetic data generators, and NLP pipelines —
                powered by Python, ML, and a relentless curiosity for what data can do.
              </p>

              {/* Location */}
              <div className="anim-up d3" style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 36 }}>
                <MapPin size={14} color="var(--cyan)" />
                <span style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', letterSpacing: '0.04em' }}>
                  Pune, India · Remote Available
                </span>
              </div>

              {/* CTAs */}
              <div className="anim-up d4" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <a href="#projects" className="btn-cyan">View Projects <ArrowRight size={14} /></a>
                <a href="#contact" className="btn-ghost">Get In Touch</a>
                <a href="/resume.pdf" download className="btn-ghost">
                  <Download size={13} /> Resume
                </a>
              </div>
            </div>

            {/* ── RIGHT: Photo — corporate rounded rect frame ── */}
            <div className="anim-in d3 hero-photo-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <div style={{ position: 'relative' }}>

                {/* Soft radial glow behind */}
                <div style={{
                  position: 'absolute', inset: -40, zIndex: 0,
                  background: 'radial-gradient(ellipse at center, var(--cyan-dim) 0%, transparent 65%)',
                  filter: 'blur(24px)', pointerEvents: 'none',
                }} />

                {/* Corporate frame */}
                <div style={{
                  position: 'relative', zIndex: 1,
                  borderRadius: 16,
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  background: 'var(--bg2)',
                }}>
                  <img
                    src={profilePhoto}
                    alt="Neeti Malu"
                    style={{
                      width: 260, height: 320,
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                      /* Subtle brightness boost for professional look */
                      filter: 'brightness(1.05) contrast(1.02)',
                    }}
                  />
                  {/* Directional key-light overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)',
                    pointerEvents: 'none',
                  }} />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
