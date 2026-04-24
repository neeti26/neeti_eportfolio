import { useEffect, useState } from 'react';
import { MapPin, ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import profilePhoto from '../assets/profile.jpg';

const roles = ['Data Scientist', 'ML Engineer', 'AI Engineer', 'Python Developer'];

/* Subtle dark-metallic circuit SVG pattern */
const CIRCUIT_SVG = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(180,200,220,0.07)' stroke-width='1'%3E%3Cpath d='M0 20h20v20M40 0v20h20M80 40H60v20M20 80V60H0M60 80V60h20M0 60h20M80 20H60'/%3E%3Ccircle cx='20' cy='20' r='2.5' fill='rgba(180,200,220,0.10)'/%3E%3Ccircle cx='60' cy='20' r='2.5' fill='rgba(180,200,220,0.10)'/%3E%3Ccircle cx='20' cy='60' r='2.5' fill='rgba(180,200,220,0.10)'/%3E%3Ccircle cx='60' cy='60' r='2.5' fill='rgba(180,200,220,0.10)'/%3E%3Ccircle cx='40' cy='40' r='2' fill='rgba(180,200,220,0.08)'/%3E%3C/g%3E%3C/svg%3E")`;

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
        /* Hexagon clip-path */
        .hex-clip {
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
        }
        /* Fade edges into background via radial mask */
        .hex-fade {
          -webkit-mask-image: radial-gradient(ellipse 88% 92% at 50% 50%, black 55%, transparent 100%);
          mask-image: radial-gradient(ellipse 88% 92% at 50% 50%, black 55%, transparent 100%);
        }
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

            {/* ── RIGHT: Photo with hexagon mask + circuit bg ── */}
            <div className="anim-in d3 hero-photo-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <div style={{ position: 'relative', width: 300, height: 340 }}>

                {/* Circuit pattern layer behind photo */}
                <div style={{
                  position: 'absolute', inset: -30, zIndex: 0,
                  backgroundImage: CIRCUIT_SVG,
                  backgroundSize: '80px 80px',
                  opacity: 0.6,
                  borderRadius: 8,
                }} />

                {/* Radial glow halo */}
                <div style={{
                  position: 'absolute', inset: -40, zIndex: 1,
                  background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.09) 0%, transparent 65%)',
                  filter: 'blur(16px)',
                  pointerEvents: 'none',
                }} />

                {/* Photo container — hexagon clip + edge fade */}
                <div className="hex-clip hex-fade" style={{
                  position: 'relative', zIndex: 2,
                  width: '100%', height: '100%',
                  overflow: 'hidden',
                }}>
                  <img
                    src={profilePhoto}
                    alt="Neeti Malu"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                  {/* Directional key-light overlay — soft white from top-left */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)',
                    pointerEvents: 'none',
                  }} />
                  {/* Bottom fade into background */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
                    background: 'linear-gradient(to top, #080c14 0%, transparent 100%)',
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
