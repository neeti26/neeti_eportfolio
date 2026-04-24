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
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('');

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#030712]/90 backdrop-blur-md border-b border-white/6' : 'bg-transparent'
    }`}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 10%' }}
        className="h-16 flex items-center justify-between">

        {/* Nav links only — no logo, no resume button */}
        <nav className="hidden md:flex items-center gap-7 w-full justify-center">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`nav-link ${active === l.href.slice(1) ? 'active' : ''}`}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-400 hover:text-white ml-auto" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-md border-b border-white/6 px-8 py-5 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
