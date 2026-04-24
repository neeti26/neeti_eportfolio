import { useEffect, useState } from 'react';
import { MapPin, ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import profilePhoto from '../assets/profile.jpg';

const roles = ['Data Scientist', 'ML Engineer', 'Python Developer', 'AI Engineer'];

/* ── Neural network corner nodes ── */
function NeuralCorners() {
  return (
    <>
      {[
        { top: -6, left: -6 },
        { top: -6, right: -6 },
        { bottom: -6, left: -6 },
        { bottom: -6, right: -6 },
      ].map((pos, i) => (
        <div key={i} style={{ position: 'absolute', ...pos, zIndex: 20 }}>
          {/* Pulse ring */}
          <div style={{
            position: 'absolute',
            width: 24, height: 24,
            borderRadius: '50%',
            background: 'rgba(0,245,196,0.18)',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            animation: `neural-pulse 2.4s ease-in-out infinite`,
            animationDelay: `${i * 0.6}s`,
          }} />
          {/* Node dot */}
          <div style={{
            width: 10, height: 10,
            borderRadius: '50%',
            background: '#00f5c4',
            border: '2px solid #030712',
            boxShadow: '0 0 8px rgba(0,245,196,0.9)',
            animation: `node-glow 2.4s ease-in-out infinite`,
            animationDelay: `${i * 0.6}s`,
          }} />
        </div>
      ))}
    </>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [text, setText]         = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx]   = useState(0);

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
        @keyframes neural-pulse {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.5; }
          50%  { transform: translate(-50%,-50%) scale(2.4); opacity: 0; }
          100% { transform: translate(-50%,-50%) scale(1);   opacity: 0.5; }
        }
        @keyframes node-glow {
          0%,100% { box-shadow: 0 0 6px rgba(0,245,196,0.7); }
          50%      { box-shadow: 0 0 18px rgba(0,245,196,1), 0 0 32px rgba(0,245,196,0.35); }
        }
      `}</style>

      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>

        {/* ── Centered container: max 1200px, 10% inner margin each side ── */}
        <div style={{
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '96px 10% 80px',
        }}>

          {/* ── 60 / 40 grid ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60% 40%',
            gap: 48,
            alignItems: 'center',
          }}>

            {/* ══ LEFT: Text block ══ */}
            <div>

              {/* Status badge */}
              <div className="anim-in" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 14px', borderRadius: 999,
                border: '1px solid rgba(0,245,196,0.30)',
                background: 'rgba(0,245,196,0.07)',
                marginBottom: 28,
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#00f5c4',
                  animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: 11, fontWeight: 600,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: '#00f5c4',
                }}>Open to Opportunities</span>
              </div>

              {/* Name */}
              <h1 className="anim-up d1" style={{
                fontSize: 'clamp(2.6rem, 5vw, 3.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 18,
              }}>
                Neeti Malu
              </h1>

              {/* Typewriter — bold clean sans-serif, Electric Mint */}
              <div className="anim-up d2" style={{
                display: 'flex', alignItems: 'center', gap: 6,
                height: 36, marginBottom: 28,
              }}>
                <span style={{
                  fontSize: 20,
                  fontWeight: 700,
                  fontFamily: 'Inter, -apple-system, sans-serif',
                  color: '#00f5c4',
                  letterSpacing: '-0.01em',
                }}>{text}</span>
                <span className="cursor" style={{
                  display: 'inline-block', width: 2, height: 22,
                  background: '#00f5c4',
                }} />
              </div>

              {/* Bio — line-height 1.6 */}
              <p className="anim-up d3" style={{
                color: '#94a3b8',
                fontSize: 15,
                lineHeight: 1.6,
                maxWidth: 480,
                marginBottom: 18,
              }}>
                I build intelligent systems — fraud detectors, synthetic data generators,
                and NLP pipelines — powered by Python, ML, and a relentless curiosity
                for what data can do.
              </p>

              {/* Location */}
              <div className="anim-up d3" style={{
                display: 'flex', alignItems: 'center', gap: 7,
                color: '#64748b', fontSize: 13, marginBottom: 36,
              }}>
                <MapPin size={13} color="#00f5c4" style={{ flexShrink: 0 }} />
                Pune, India · Available for Remote & On-site
              </div>

              {/* CTA buttons */}
              <div className="anim-up d4" style={{
                display: 'flex', flexWrap: 'wrap', gap: 12,
                marginBottom: 0,
              }}>
                <a href="#projects" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '10px 24px',
                  background: '#ffffff', color: '#0f172a',
                  fontSize: 13, fontWeight: 700, borderRadius: 8,
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  transition: 'background 0.2s',
                }}>
                  View Projects <ArrowRight size={14} />
                </a>
                <a href="#contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '10px 24px',
                  border: '1px solid rgba(0,245,196,0.40)',
                  color: '#00f5c4',
                  fontSize: 13, fontWeight: 600, borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}>
                  Get In Touch
                </a>
                <a href="/resume.pdf" download style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '10px 24px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#cbd5e1',
                  fontSize: 13, fontWeight: 500, borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}>
                  <Download size={13} /> Resume
                </a>
              </div>

              {/* Stats bar removed */}
            </div>

            {/* ══ RIGHT: Photo — 100px from right edge, 15% larger than previous ══ */}
            <div className="anim-in d3" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: 100,
            }}>
              <div style={{ position: 'relative' }}>

                {/* Mint glow — scales with image */}
                <div style={{
                  position: 'absolute', inset: -40,
                  borderRadius: 32,
                  background: 'radial-gradient(ellipse at center, rgba(0,245,196,0.13) 0%, transparent 68%)',
                  filter: 'blur(20px)',
                  pointerEvents: 'none',
                }} />

                {/* Glassmorphism frame */}
                <div style={{
                  position: 'relative',
                  padding: 3,
                  borderRadius: 20,
                  background: 'linear-gradient(135deg, rgba(0,245,196,0.30) 0%, rgba(255,255,255,0.05) 50%, rgba(0,245,196,0.15) 100%)',
                  boxShadow: '0 0 50px rgba(0,245,196,0.11), 0 24px 70px rgba(0,0,0,0.55)',
                }}>
                  {/* Photo — 285×356 */}
                  <div style={{
                    width: 285, height: 356,
                    borderRadius: 16,
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <img
                      src={profilePhoto}
                      alt="Neeti Malu"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>

                  {/* Neural corner nodes */}
                  <NeuralCorners />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
