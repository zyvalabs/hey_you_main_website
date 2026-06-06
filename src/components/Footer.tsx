import { Link } from "@tanstack/react-router";
import logoImg from '../assets/heyou/logo.svg'

export function Footer() {
  return (
    <footer className="bg-[var(--hey-black)] text-[var(--hey-cream)] px-5 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left border-t border-white/10">
      {/* LEFT — address */}
      <p className="text-xs md:text-sm max-w-[18rem] leading-relaxed text-[var(--hey-yellow)]">
        No. 18 Ramanashree, Mahatma Gandhi Road,<br/>
        Ashok Nagar, Bangalore, India 560001
      </p>

      {/* CENTER — logo */}
      <Link to="/">
        <img src={logoImg} alt="Heyou" className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300" />
      </Link>

      {/* RIGHT — Instagram */}
      <a
        href="https://instagram.com/heyou.letsgo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 group"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--hey-yellow)] group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-[10px] md:text-xs text-[var(--hey-cream)]">Follow us on Instagram</span>
          <span className="text-xs md:text-sm font-bold text-[var(--hey-yellow)] group-hover:underline">@heyou.letsgo</span>
        </div>
      </a>
    </footer>
  );
}
