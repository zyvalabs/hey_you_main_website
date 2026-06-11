import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import logoImg from '../assets/heyou/logo.svg'

const navLinks = [
  { label: "About", href: "/home" },
  { label: "Drink/Eat", href: "/drink-eat" },
  { label: "Reserve", href: "/reservation" },
];

export function Header1({ active }: { active: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 flex items-center bg-[var(--hey-red)] sticky top-0 border-b border-white/10" style={{ minHeight: '52px' }}>
        {/* LEFT — desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-widest px-10" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
          {navLinks.map((l) =>
            <Link key={l.label} to={l.href as "/"}
              className={`transition-colors duration-200 hover:-translate-y-0.5 transform inline-block ${active === l.href ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)] hover:text-[var(--hey-yellow)]'}`}>
              {l.label}
            </Link>
          )}
        </nav>

        {/* CENTER — logo absolutely centered */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center py-2">
          <Link to="/home">
            <img
              src={logoImg}
              alt="Heyou"
              className="w-auto hover:scale-105 transition-transform duration-300"
              style={{ height: '36px' }}
            />
          </Link>
        </div>

        {/* RIGHT — hamburger desktop, spacer mobile */}
        <div className="ml-auto px-4 md:px-10 flex items-center">
          <button
            aria-label="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="hidden md:flex flex-col gap-1.5 p-2 group z-40 relative"
          >
            <span className={`block h-0.5 w-6 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-4'}`} />
            <span className={`block h-0.5 w-6 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-4'}`} />
          </button>
          {/* mobile spacer to balance logo centering */}
          <div className="md:hidden w-8" />
        </div>
      </header>

      {/* DESKTOP MENU OVERLAY */}
      <div className={`fixed inset-0 z-20 bg-[var(--hey-black)]/95 backdrop-blur-md hidden md:flex flex-col items-center justify-center gap-10 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((l, i) =>
          <Link key={l.label} to={l.href as "/"} onClick={() => setMenuOpen(false)}
            className={`font-display text-5xl transition-all duration-200 hover:scale-110 transform ${active === l.href ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)] hover:text-[var(--hey-yellow)]'}`}
            style={{ transitionDelay: `${i * 60}ms` }}>{l.label}</Link>
        )}
      </div>
    </>
  );
}

export function BottomNav1() {
  const location = useLocation();
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--hey-black)] border-t border-white/10 flex items-center justify-around px-2 py-1.5">
      <Link to="/home" className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all duration-200 ${location.pathname === '/home' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)]/60'}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>About</span>
      </Link>
      <Link to="/drink-eat" className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all duration-200 ${location.pathname === '/drink-eat' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)]/60'}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>Drink/Eat</span>
      </Link>
      <Link to="/reservation" className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all duration-200 ${location.pathname === '/reservation' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)]/60'}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>Reserve</span>
      </Link>
    </nav>
  );
}