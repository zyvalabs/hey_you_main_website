import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import starImg from '../assets/heyou/Star.png'
import eyesImg from '../assets/heyou/Eyes.svg'
import handImg from '../assets/heyou/hand.svg'
import handsImg from '../assets/heyou/hands.svg'
import { useState } from "react";
import logoImg from '../assets/heyou/logo.svg'

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Heyou — Your new favourite bar" },
      { name: "description", content: "Bar-first downstairs, table-led upstairs. Bangalore." },
    ],
  }),
  component: Home,
});

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Drink/Eat", href: "/drink-eat" },
  { label: "Reserve", href: "/reserve" },
];

function BottomNav() {
  const location = useLocation();
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--hey-black)] border-t-2 border-white/10 flex items-center justify-around px-2 py-2 safe-area-pb">
      {/* Home */}
      <Link to="/home" className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-all duration-200 ${location.pathname === '/home' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)]/60'}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>Home</span>
      </Link>
      {/* Drink/Eat */}
      <Link to="/drink-eat" className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-all duration-200 ${location.pathname === '/drink-eat' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)]/60'}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>Drink/Eat</span>
      </Link>
      {/* Reserve */}
      <Link to="/reserve" className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-all duration-200 ${location.pathname === '/reserve' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)]/60'}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>Reserve</span>
      </Link>
    </nav>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden pb-16 md:pb-0">

      {/* NAV — desktop only */}
      <header className="relative z-30 flex items-center justify-between px-5 py-4 md:px-10 backdrop-blur-sm bg-[var(--hey-red)]/90 sticky top-0 border-b border-white/10 transition-all duration-300">
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
          {navLinks.map((l) =>
            <Link key={l.label} to={l.href as "/"}
              className={`transition-colors duration-200 hover:-translate-y-0.5 transform inline-block ${l.href === '/home' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)] hover:text-[var(--hey-yellow)]'}`}>
              {l.label}
            </Link>
          )}
        </nav>
        <div className="md:hidden w-8" />
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/home">
            <img src={logoImg} alt="Heyou" className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300" />
          </Link>
        </div>
        {/* Desktop hamburger */}
        <button aria-label="menu" onClick={() => setMenuOpen(!menuOpen)} className="hidden md:flex flex-col gap-1.5 p-2 group z-40 relative">
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-5'}`} />
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-5'}`} />
        </button>
        {/* Mobile — just logo, no hamburger */}
        <div className="md:hidden w-8" />
      </header>

      {/* DESKTOP MOBILE MENU */}
      <div className={`fixed inset-0 z-20 bg-[var(--hey-black)]/95 backdrop-blur-md hidden md:flex flex-col items-center justify-center gap-10 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((l, i) =>
          <Link key={l.label} to={l.href as "/"} onClick={() => setMenuOpen(false)}
            className={`font-display text-5xl transition-all duration-200 hover:scale-110 transform ${l.href === '/home' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)] hover:text-[var(--hey-yellow)]'}`}
            style={{ transitionDelay: `${i * 60}ms` }}>{l.label}</Link>
        )}
      </div>

      {/* HERO */}
      <section className="relative px-5 md:px-12 pt-6 md:pt-12 pb-10 md:pb-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* LEFT — big headline */}
<Reveal variant="left" className="relative flex flex-col items-start md:pl-24">
<h1 className="font-display text-[var(--hey-cream)] text-shadow-pop leading-[0.9] text-[16vw] md:text-[8vw] text-left">
  Heyou.<br/>Show up.<br/>Stay a<br/>while.
</h1>
            <div className="absolute -left-2 top-[42%] w-14 md:w-20 animate-wobble">
              <img src={handImg} alt="hand" className="w-full h-auto" />
            </div>
            <img src={eyesImg} alt="eyes" className="w-16 md:w-20 h-auto mt-4 md:mt-6" />
          </Reveal>
          {/* RIGHT — copy */}
      <Reveal variant="right" delay={150} className="space-y-4 text-[var(--hey-cream)] max-w-md md:mt-16">
  <div className="space-y-3 text-base md:text-xl font-medium leading-snug" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
    <p>For the kind of plan that changes as the evening goes on.</p>
    <p>One drink becomes another. Snacks become dinner. A quick catch-up turns into a longer table.</p>
    <p>Downstairs keeps the bar moving. Upstairs lets the evening settle in.</p>
    <p>Food and drink built around how people actually go out in India.</p>
  </div>
  <div className="flex items-center gap-4 mt-4">
    <img src={eyesImg} alt="eyes" className="w-16 md:w-20 h-auto" />
    <img src={starImg} alt="star" className="w-20 md:w-28 h-auto ml-auto" />
  </div>
</Reveal>
        </div>
      </section>

      {/* HANDS STRIP */}
      <section className="bg-checker relative pb-0 pt-16 md:pt-24">
        <div className="flex items-end justify-center">
          <img src={handsImg} alt="hands" className="w-full h-auto object-contain" />
        </div>
      </section>

      {/* BLACK BANNER */}
      <section className="bg-[#1a1a1a] py-12 md:py-20 text-center px-5">
        <Reveal variant="zoom">
          <h3 className="font-display text-[var(--hey-cream)] text-shadow-pop-sm text-4xl md:text-7xl leading-[0.95]">
            This one's for you.
          </h3>
          <p className="mt-4 text-[var(--hey-cream)] text-base md:text-xl font-medium max-w-xl mx-auto" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
            Welcome to your new favourite bar. Come for one drink. See where the table goes.
          </p>
        </Reveal>
      </section>

      {/* ONE PLACE TWO MOODS */}
      <section className="bg-[var(--hey-red)] py-14 md:py-24 px-5 md:px-12">
        <Reveal variant="zoom" className="text-center mb-10 md:mb-16">
          <h3 className="font-display text-[var(--hey-yellow)] text-shadow-pop-sm text-4xl md:text-7xl leading-[0.95]">
            One place.<br/>Two moods.
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <Reveal variant="left">
            <div className="bg-[var(--hey-yellow)] border-2 border-black shadow-[6px_6px_0_#000] p-6 md:p-10 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-display text-2xl md:text-4xl text-black leading-tight">HEYOU<br/>Bar</h4>
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[var(--hey-red)] border-2 border-black flex-shrink-0 flex items-center justify-center">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[var(--hey-cream)]" />
                </div>
              </div>
              <ul className="space-y-2 text-black text-sm md:text-base font-medium flex-1" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
                <li className="flex items-start gap-2"><span className="text-[var(--hey-red)] font-bold">·</span>Indoor and outdoor. 21 and over.</li>
                <li className="flex items-start gap-2"><span className="text-[var(--hey-red)] font-bold">·</span>Faster, louder, easier to walk into.</li>
              </ul>
              <Link to="/reserve" className="mt-6 inline-block font-display bg-black text-[var(--hey-cream)] px-6 py-3 rounded-full text-sm md:text-base border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[var(--hey-red)] transition-all duration-200 text-center">
                RESERVE BAR
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="bg-[var(--hey-cream)] border-2 border-black shadow-[6px_6px_0_#000] p-6 md:p-10 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-display text-2xl md:text-4xl text-black leading-tight">HEYOU<br/>Dining</h4>
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[var(--hey-red)] border-2 border-black flex-shrink-0 flex items-center justify-center">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[var(--hey-yellow)]" />
                </div>
              </div>
              <ul className="space-y-2 text-black text-sm md:text-base font-medium flex-1" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
                <li className="flex items-start gap-2"><span className="text-[var(--hey-red)] font-bold">·</span>A more settled table for families, teams, groups.</li>
                <li className="flex items-start gap-2"><span className="text-[var(--hey-red)] font-bold">·</span>Dinner that takes its time.</li>
              </ul>
              <Link to="/reserve" className="mt-6 inline-block font-display bg-black text-[var(--hey-cream)] px-6 py-3 rounded-full text-sm md:text-base border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[var(--hey-red)] transition-all duration-200 text-center">
                RESERVE DINING
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal variant="zoom" className="text-center mt-10 md:mt-14">
          <p className="text-[var(--hey-cream)] text-base md:text-xl font-medium mb-6" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
            One Heyou. The hour decides the mood.
          </p>
          <Link to="/reserve" className="inline-block font-display bg-[var(--hey-yellow)] text-black px-10 py-4 rounded-full text-lg md:text-xl hover:bg-[var(--hey-cream)] transition-all duration-300 shadow-[6px_6px_0_#000] border-2 border-black hover:-translate-y-1 transform">
            RESERVE A TABLE
          </Link>
        </Reveal>
      </section>

      <Footer />

      {/* MOBILE BOTTOM NAV */}
      <BottomNav />
    </main>
  );
}