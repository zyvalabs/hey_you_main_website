import { Link } from "@tanstack/react-router";
import logoImg from '../assets/heyou/red logo.svg'

export function Footer() {
  return (
    <footer className="bg-[var(--hey-black)] text-[var(--hey-cream)]">
      
      {/* MAIN FOOTER */}
      <div className="px-5 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10">
        
        {/* LEFT — Keen Mustard */}
        <div className="text-left">
          <p className="font-display text-base md:text-lg text-[var(--hey-yellow)] mb-2">Keen Mustard Ventures</p>
          <p className="text-xs md:text-sm text-[var(--hey-cream)]/70 leading-relaxed">
            A hospitality endeavor that is keen on crafting distinctive gastronomic experiences that excite, delight and unite.
          </p>
        </div>

        {/* CENTER — logo */}
        <div className="flex flex-col items-start md:items-center gap-3">
          <Link to="/home">
            <img src={logoImg} alt="Heyou" className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300" />
          </Link>
        </div>

        {/* RIGHT — Social + Location */}
        <div className="flex flex-col items-start gap-4">
          <p className="font-display text-base md:text-lg text-[var(--hey-yellow)]">Find us</p>
          
          {/* Instagram */}
          <a
            href="https://instagram.com/heyou.letsgo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--hey-yellow)] group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-[var(--hey-cream)]/60">Follow us on Instagram</span>
              <span className="text-xs md:text-sm font-bold text-[var(--hey-yellow)] group-hover:underline">@heyou.letsgo</span>
            </div>
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/jy6RyiFYTaArSK1g8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--hey-yellow)] group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-[var(--hey-cream)]/60">Locate us</span>
              <span className="text-xs md:text-sm font-bold text-[var(--hey-yellow)] group-hover:underline">No. 18 Ramanashree, MG Road,<br/>Ashok Nagar, Bangalore</span>
            </div>
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 px-5 md:px-12 py-4 text-left md:text-center">
        <p className="text-xs text-[var(--hey-cream)]/50">
          Keen Mustard Ventures — Bringing you a slice of the Good Life since 2022
        </p>
      </div>

    </footer>
  );
}