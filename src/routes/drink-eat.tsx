import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import bartender from "@/assets/heyou/img2.jpg";
import mouth from "@/assets/heyou/img3.jpg";
import logoImg from '../assets/heyou/logo.svg'
import starImg from '../assets/heyou/Star.png'
import storiesImg from '../assets/heyou/stories.svg'
import barSidesImg from '../assets/heyou/bar sides.svg'

export const Route = createFileRoute("/drink-eat")({
  head: () => ({
    meta: [
      { title: "Drink / Eat — Heyou" },
      { name: "description", content: "Proper cocktails and food built around how people actually go out together." },
    ],
  }),
  component: DrinkEat,
});

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Drink/Eat", href: "/drink-eat" },
  { label: "Reserve", href: "/reserve" },
];

function BottomNav() {
  const location = useLocation();
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--hey-black)] border-t-2 border-white/10 flex items-center justify-around px-2 py-2">
      <Link to="/home" className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-all duration-200 ${location.pathname === '/home' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)]/60'}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>Home</span>
      </Link>
      <Link to="/drink-eat" className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-all duration-200 ${location.pathname === '/drink-eat' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)]/60'}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>Drink/Eat</span>
      </Link>
      <Link to="/reserve" className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-all duration-200 ${location.pathname === '/reserve' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)]/60'}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>Reserve</span>
      </Link>
    </nav>
  );
}

function DrinkEat() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden pb-16 md:pb-0">

      {/* NAV */}
      <header className="relative z-30 flex items-center justify-between px-5 py-4 md:px-10 backdrop-blur-sm bg-[var(--hey-red)]/90 sticky top-0 border-b border-white/10 transition-all duration-300">
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
          {navLinks.map((l) =>
            <Link key={l.label} to={l.href as "/"}
              className={`transition-colors duration-200 hover:-translate-y-0.5 transform inline-block ${l.href === '/drink-eat' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)] hover:text-[var(--hey-yellow)]'}`}>
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
        <button aria-label="menu" onClick={() => setMenuOpen(!menuOpen)} className="hidden md:flex flex-col gap-1.5 p-2 group z-40 relative">
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-5'}`} />
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-5'}`} />
        </button>
        <div className="md:hidden w-8" />
      </header>

      {/* DESKTOP MENU OVERLAY */}
      <div className={`fixed inset-0 z-20 bg-[var(--hey-black)]/95 backdrop-blur-md hidden md:flex flex-col items-center justify-center gap-10 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((l, i) =>
          <Link key={l.label} to={l.href as "/"} onClick={() => setMenuOpen(false)}
            className={`font-display text-5xl transition-all duration-200 hover:scale-110 transform ${l.href === '/drink-eat' ? 'text-[var(--hey-yellow)]' : 'text-[var(--hey-cream)] hover:text-[var(--hey-yellow)]'}`}
            style={{ transitionDelay: `${i * 60}ms` }}>{l.label}</Link>
        )}
      </div>

      {/* HERO */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-end bg-[var(--hey-black)] px-5 md:px-12 pb-10 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={bartender} alt="" className="w-full h-full object-cover" />
        </div>
        <Reveal variant="left" className="relative z-10">
          <h1 className="font-display text-[var(--hey-cream)] text-shadow-pop leading-[0.9] text-[13vw] md:text-[7vw]">
            Drink.<br/>Eat.<br/>Stay.
          </h1>
        </Reveal>
      </section>

      {/* STORIES SVG + BARTENDER */}
      <section className="grid md:grid-cols-2">
        <Reveal variant="left" className="overflow-hidden min-h-[300px] md:min-h-[500px]">
          <img src={storiesImg} alt="All great stories" className="w-full h-full object-cover" />
        </Reveal>
        <div className="relative overflow-hidden min-h-[300px] md:min-h-[500px]">
          <img src={bartender} alt="Bartender" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-1 bg-[var(--hey-yellow)]" />

      {/* MOUTH + FOOD TEXT OVERLAY */}
      <section className="grid md:grid-cols-2">
        {/* LEFT — img3 with food text on top */}
{/* LEFT — img3 with food text on top */}
<Reveal variant="left" className="relative overflow-hidden min-h-[400px] md:min-h-[580px]">
  <img src={mouth} alt="Food" className="absolute inset-0 w-full h-full object-cover" />
  <div className="relative z-10 p-6 md:p-10 flex flex-col justify-center h-full">


{/* desktop overlay */}
<div className="hidden md:block space-y-1 text-black text-sm font-bold ml-28 max-w-[65%]" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
  <p>The food at Heyou is built around rounds and tables.</p>
  <p>Start light. Order something with the next drink.</p>
  <p>Share from the fire.</p>
  <p>Pick up a slice, wrap, or burger.</p>
  <p>Stay long enough and the table becomes dinner.</p>
  <p>This is not food built as an afterthought to the bar.</p>
  <p>It is a full food program for the way people actually</p>
  <p>go out together.</p>
</div>

{/* mobile — below image */}
<div className="md:hidden bg-[var(--hey-yellow)] px-5 py-4 space-y-1 text-black text-sm font-medium" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
  <p>The food at Heyou is built around rounds and tables.</p>
  <p>Start light. Order something with the next drink.</p>
  <p>Share from the fire.</p>
  <p>Pick up a slice, wrap, or burger.</p>
  <p>Stay long enough and the table becomes dinner.</p>
  <p>This is not food built as an afterthought to the bar.</p>
  <p>It is a full food program for the way people actually go out together.</p>
</div>
  </div>
</Reveal>

        {/* RIGHT — bar sides svg on red */}
        <Reveal variant="right" className="relative bg-[var(--hey-red)] flex flex-col items-center justify-center min-h-[300px] md:min-h-[580px] p-6 md:p-8">
          <img src={starImg} alt="star" className="w-14 md:w-20 h-auto mb-4 mr-auto" />
          <img src={barSidesImg} alt="Bar Sides" className="w-full md:w-3/4 h-auto" />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-[var(--hey-yellow)] py-16 md:py-24 text-center px-5">
        <Reveal variant="zoom">
          <h3 className="font-display text-black text-4xl md:text-7xl leading-[0.95] mb-8">
            Come for one drink.<br/>See where the table goes.
          </h3>
          <Link to="/reserve"
            className="inline-block font-display bg-[var(--hey-black)] text-[var(--hey-cream)] px-10 py-4 rounded-full text-lg md:text-xl hover:bg-[var(--hey-red)] transition-all duration-300 shadow-[6px_6px_0_#000] border-2 border-black hover:-translate-y-1 transform">
            RESERVE A TABLE
          </Link>
        </Reveal>
      </section>

      <Footer />
      <BottomNav />

    </main>
  );
}