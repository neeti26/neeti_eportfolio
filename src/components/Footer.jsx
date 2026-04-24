import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0e0d0c] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#7a6e62]">
          Neeti Malu<span className="text-[#c9a96e]">.</span>
        </p>
        <p className="text-[11px] text-[#7a6e62]">
          © {new Date().getFullYear()} · Data Scientist & ML Engineer
        </p>
        <div className="flex gap-6">
          {[
            { label: 'GitHub',   href: personalInfo.github },
            { label: 'LinkedIn', href: personalInfo.linkedin },
            { label: 'Email',    href: `mailto:${personalInfo.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[11px] font-semibold tracking-widest uppercase text-[#7a6e62] hover:text-[#c9a96e] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
