import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const navItems = [
  { id: 'hero',          label: 'Home' },
  { id: 'about',         label: 'About' },
  { id: 'experience',    label: 'Experience' },
  { id: 'projects',      label: 'Projects' },
  { id: 'skills',        label: 'Skills' },
  { id: 'certifications',label: 'Credentials' },
  { id: 'contact',       label: 'Contact' },
];

export default function Sidebar() {
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.3 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── Mobile top bar ── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1e1e1e] h-14 flex items-center justify-between px-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#4f8ef7] flex items-center justify-center">
            <span className="text-white text-[10px] font-black">NM</span>
          </div>
          <span className="text-white font-semibold text-sm">Neeti Malu</span>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-[#555] hover:text-white transition-colors">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-14">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="relative bg-[#0f0f0f] border-r border-[#1e1e1e] w-64 h-full p-5 flex flex-col gap-1">
            {navItems.map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)}
                className={`nav-link w-full text-left ${active === id ? 'active' : ''}`}>
                <span className="nav-dot" />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Desktop fixed sidebar ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 flex-col bg-[#0a0a0a] border-r border-[#1a1a1a] z-40">

        {/* Profile block */}
        <div className="p-6 border-b border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#4f8ef7] flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-black">NM</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Neeti Malu</p>
              <p className="text-[#555] text-xs mt-0.5">Data Scientist</p>
            </div>
          </div>
          <div className="badge w-full justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to Opportunities
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 flex flex-col gap-0.5 overflow-y-auto">
          {navItems.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`nav-link w-full text-left ${active === id ? 'active' : ''}`}>
              <span className="nav-dot" />
              {label}
            </button>
          ))}
        </nav>

        {/* Bottom contact */}
        <div className="p-4 border-t border-[#1a1a1a] space-y-2">
          <a href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2.5 text-[#555] hover:text-[#e2e2e2] transition-colors text-xs truncate">
            <Mail size={12} className="shrink-0 text-[#4f8ef7]" />
            {personalInfo.email}
          </a>
          <div className="flex gap-2 pt-1">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-[10px] font-semibold text-[#555] hover:text-[#4f8ef7] border border-[#1e1e1e] hover:border-[#4f8ef7]/30 rounded-md py-1.5 transition-all">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-[10px] font-semibold text-[#555] hover:text-[#4f8ef7] border border-[#1e1e1e] hover:border-[#4f8ef7]/30 rounded-md py-1.5 transition-all">
              LinkedIn
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
