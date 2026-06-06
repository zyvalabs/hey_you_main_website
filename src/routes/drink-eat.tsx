import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import bartender from "@/assets/heyou/img2.jpg";
import mouth from "@/assets/heyou/img3.jpg";
import logoImg from '../assets/heyou/logo.svg'
import starImg from '../assets/heyou/Star.png'

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
  { label: "Home", href: "/home", isRoute: true },
  { label: "Drink/Eat", href: "/drink-eat", isRoute: true },
  { label: "Reserve", href: "/reserve", isRoute: true },
];

function DrinkEat() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden">

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
        <button aria-label="menu" onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-2 group z-40 relative">
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-5'}`} />
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-5'}`} />
        </button>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-20 bg-[var(--hey-black)]/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
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
          {/* <p className="font-display text-[var(--hey-yellow)] text-sm md:text-base uppercase tracking-widest mb-2">The full menu</p> */}
          <h1 className="font-display text-[var(--hey-cream)] text-shadow-pop leading-[0.9] text-[13vw] md:text-[7vw]">
            Drink.<br/>Eat.<br/>Stay.
          </h1>
        </Reveal>
      </section>

      {/* DRINKS */}
      <section className="relative bg-[var(--hey-black)]">
        <div className="grid md:grid-cols-[55%_45%]">
          <div className="relative overflow-hidden min-h-[300px] md:min-h-[580px]">
            <img src={bartender} alt="Bartender at Heyou" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--hey-black)]/60" />
          </div>
          <Reveal variant="right" className="flex flex-col justify-center p-8 md:p-12 gap-5 bg-[var(--hey-black)]">
            <div className="w-12 h-1 bg-[var(--hey-yellow)]" />
            <h2 className="font-display text-[var(--hey-yellow)] text-3xl md:text-5xl leading-[0.95]">
              ALL GREAT<br/>STORIES<br/>START WITH<br/>A DRINK
            </h2>
            <div className="space-y-3 text-[var(--hey-cream)]/80 text-sm md:text-base font-medium" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
              <p>Proper cocktails. Fast repeats. No unnecessary drama.</p>
              <p>Highballs, signatures, classics, frozen drinks, and non-alcoholic serves that hold their own.</p>
            </div>
            <img src={starImg} alt="" className="w-14 md:w-16 h-auto mt-2" />
          </Reveal>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-1 bg-[var(--hey-yellow)]" />

      {/* FOOD */}
      <section className="relative bg-[var(--hey-red)]">
        <div className="grid md:grid-cols-[45%_55%]">
          <Reveal variant="left" className="flex flex-col justify-center p-8 md:p-12 gap-5 bg-[var(--hey-red)]">
            <div className="w-12 h-1 bg-[var(--hey-black)]" />
            <h2 className="font-display text-[var(--hey-black)] text-3xl md:text-5xl leading-[0.95]">
              FOOD THAT<br/>STARTS EASY<br/>AND STAYS<br/>FOR DINNER
            </h2>
            <div className="space-y-3 text-[var(--hey-black)]/80 text-sm md:text-base font-medium" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
              <p>The food at Heyou is built around rounds and tables.</p>
              <p>Start light. Order something with the next drink. Share from the fire. Pick up a slice, wrap, or burger. Stay long enough and the table becomes dinner.</p>
              <p>This is not food built as an afterthought to the bar. It is a full food program for the way people actually go out together.</p>
            </div>
          </Reveal>
          <div className="relative overflow-hidden min-h-[300px] md:min-h-[580px]">
            <img src={mouth} alt="Food at Heyou" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--hey-red)]/40" />
          </div>
        </div>
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
    </main>
  );
}