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
        <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '60px 15%' }}>
          <div className="hero-grid" style={{ display: 'grid', gap: 40, alignItems: 'center' }}>

            {/* ── LEFT: Text ── */}
            <div>
              {/* Status badge */}
              <div className="anim-in" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '5px 14px', borderRadius: 999,
                border: '1px solid rgba(56,189,248,0.30)',
                background: 'rgba(56,189,248,0.06)',
                marginBottom: 24,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#38bdf8', animation: 'pulse 2s infinite', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#38bdf8' }}>
                  Open to Opportunities
                </span>
              </div>

              {/* Name — Playfair Display, authoritative serif, pure white */}
              <h1 className="anim-up d1" style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(3rem, 5.5vw, 4.8rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.0,
                letterSpacing: '-1px',
                marginBottom: 16,
              }}>Neeti Malu</h1>

              {/* Role — monospace, Cyber-Cyan */}
              <div className="anim-up d2" style={{ display: 'flex', alignItems: 'center', gap: 6, height: 34, marginBottom: 28 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 17, fontWeight: 600, color: '#38bdf8', letterSpacing: '0.04em' }}>{text}</span>
                <span className="cursor" style={{ display: 'inline-block', width: 2, height: 20, background: '#38bdf8' }} />
              </div>

              {/* Bio */}
              <p className="anim-up d3" style={{ color: '#64748b', fontSize: 14, lineHeight: 1.8, maxWidth: 440, marginBottom: 16 }}>
                I build intelligent systems — fraud detectors, synthetic data generators, and NLP pipelines —
                powered by Python, ML, and a relentless curiosity for what data can do.
              </p>

              {/* Location */}
              <div className="anim-up d3" style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 36 }}>
                <MapPin size={13} color="#38bdf8" />
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: '#475569', letterSpacing: '0.06em' }}>
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
                  background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.10) 0%, transparent 65%)',
                  filter: 'blur(20px)', pointerEvents: 'none',
                }} />

                {/* Corporate frame: rounded rect, thin sky-blue border */}
                <div style={{
                  position: 'relative', zIndex: 1,
                  borderRadius: 16,
                  border: '1.5px solid rgba(56,189,248,0.55)',
                  boxShadow: '0 0 0 1px rgba(56,189,248,0.12), 0 8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(56,189,248,0.08)',
                  overflow: 'hidden',
                  background: '#0a1020',
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
