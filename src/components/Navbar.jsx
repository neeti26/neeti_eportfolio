import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    links.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'background 0.3s',
      /* Always blur — prevents circuit lines bleeding through text */
      background: scrolled ? 'rgba(6,11,20,0.95)' : 'rgba(6,11,20,0.70)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
    }}>
      {/* 15% left margin, centered nav */}
      <div style={{
        paddingLeft: '15%',
        paddingRight: '5%',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Desktop nav — 40px gap, pure white 500 weight */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }}
          className="nav-desktop">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '1rem',
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
                opacity: active === l.href.slice(1) ? 1 : 0.75,
                borderBottom: active === l.href.slice(1) ? '2px solid #38bdf8' : '2px solid transparent',
                paddingBottom: 2,
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => { if (active !== l.href.slice(1)) e.currentTarget.style.opacity = '0.7'; }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: 'auto', display: 'none' }}
          className="nav-mobile-btn">
          {open ? <X size={20} color="#ffffff" /> : <Menu size={20} color="#ffffff" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(8,12,20,0.97)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '20px 15%',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: 'var(--mono)', fontSize: '1rem', fontWeight: 600, letterSpacing: '2px', color: '#ffffff', textDecoration: 'none', textTransform: 'uppercase' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
