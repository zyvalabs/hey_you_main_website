import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <>
<style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');`}</style>
      <footer className="bg-[var(--hey-black)] text-[var(--hey-cream)]">

        {/* MAIN FOOTER */}
        <div className="px-5 md:px-12 py-10 border-t border-white/10 flex flex-col md:items-center">
          <p className="text-base md:text-lg text-[var(--hey-yellow)] mb-6" style={{ fontFamily: "'Londrina Solid', cursive" }}>Find us</p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:justify-center">

            {/* Instagram */}
            <a href="https://instagram.com/heyou.letsgo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
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
            <a href="https://maps.app.goo.gl/jy6RyiFYTaArSK1g8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--hey-yellow)] group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-[var(--hey-cream)]/60">Locate us</span>
                <span className="text-xs md:text-sm font-bold text-[var(--hey-yellow)] group-hover:underline">No. 18 Ramanashree, MG Road,<br/>Ashok Nagar, Bangalore</span>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--hey-yellow)] flex-shrink-0">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-[var(--hey-cream)]/60">Call us</span>
                <span className="text-xs md:text-sm text-[var(--hey-yellow)]">080 4725 0000</span>
                  <span className="text-xs md:text-sm text-[var(--hey-yellow)]">089 0408 5005</span>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 px-5 md:px-12 py-4 text-left md:text-center">
          <p className="text-xs text-[var(--hey-cream)]/50">
            Keen Mustard Ventures — Making Your Day Since 2022
          </p>
        </div>

      </footer>
    </>
  );
}