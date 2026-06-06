import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import bartender from "@/assets/heyou/img2.jpg";
import mouth from "@/assets/heyou/img3.jpg";
import logoImg from '../assets/heyou/logo.svg'
import footerImg from '../assets/heyou/Footer.svg'
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

function DrinkEat() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* NAV */}
      <header className="relative z-30 flex items-center justify-between px-5 py-4 md:px-10 backdrop-blur-sm bg-[var(--hey-red)]/90 sticky top-0 border-b border-white/10 transition-all duration-300">
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
          <Link to="/" className="text-[var(--hey-cream)] hover:text-[var(--hey-yellow)] transition-colors duration-200 hover:-translate-y-0.5 transform inline-block">About</Link>
          <Link to="/drink-eat" className="text-[var(--hey-yellow)]">Drink/Eat</Link>
          <Link to="/reserve" className="text-[var(--hey-cream)] hover:text-[var(--hey-yellow)] transition-colors duration-200 hover:-translate-y-0.5 transform inline-block">Reserve</Link>
        </nav>
        <div className="md:hidden w-8" />
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/">
            <img src={logoImg} alt="Heyou" className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300" />
          </Link>
        </div>
        <button
          aria-label="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 group z-40 relative"
        >
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-5'}`} />
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-5'}`} />
        </button>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-20 bg-[var(--hey-black)]/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <Link to="/" onClick={() => setMenuOpen(false)} className="font-display text-[var(--hey-cream)] text-5xl hover:text-[var(--hey-yellow)] transition-all duration-200">About</Link>
        <Link to="/drink-eat" onClick={() => setMenuOpen(false)} className="font-display text-[var(--hey-yellow)] text-5xl">Drink/Eat</Link>
        <Link to="/reserve" onClick={() => setMenuOpen(false)} className="font-display text-[var(--hey-cream)] text-5xl hover:text-[var(--hey-yellow)] transition-all duration-200">Reserve</Link>
      </div>

      {/* PAGE HERO */}
      <section className="px-5 md:px-12 pt-10 pb-12 md:pt-16 md:pb-20 bg-[var(--hey-red)]">
        <Reveal variant="zoom">
          <h1 className="font-display text-[var(--hey-cream)] text-shadow-pop leading-[0.95] text-[14vw] md:text-[8vw]">
            Drink.<br/>Eat.<br/>Stay.
          </h1>
        </Reveal>
      </section>

      {/* DRINKS SECTION */}
      <section className="grid md:grid-cols-2">
        {/* LEFT — image */}
        <Reveal variant="left" className="overflow-hidden">
          <img
            src={bartender}
            alt="Bartender at Heyou"
            className="w-full h-full object-cover min-h-[300px] md:min-h-[600px]"
          />
        </Reveal>
        {/* RIGHT — text */}
        <Reveal variant="right" className="bg-[var(--hey-black)] flex flex-col justify-center p-8 md:p-14 min-h-[300px] md:min-h-[600px]">
          <h2 className="font-display text-[var(--hey-yellow)] text-shadow-pop-sm text-4xl md:text-6xl leading-[0.95] mb-6">
            ALL GREAT<br/>STORIES<br/>START WITH<br/>A DRINK
          </h2>
          <div className="space-y-4 text-[var(--hey-cream)] text-base md:text-lg font-medium" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
            <p>Proper cocktails. Fast repeats. No unnecessary drama.</p>
            <p>Highballs, signatures, classics, frozen drinks, and non-alcoholic serves that hold their own.</p>
          </div>
          <img src={starImg} alt="" className="w-16 md:w-20 h-auto mt-8" />
        </Reveal>
      </section>

      {/* FOOD SECTION */}
      <section className="grid md:grid-cols-2">
        {/* LEFT — text on checker */}
        <Reveal variant="left" className="bg-checker flex flex-col justify-center p-8 md:p-14 min-h-[300px] md:min-h-[600px]">
          <h2 className="font-display text-[var(--hey-cream)] text-shadow-pop-sm text-4xl md:text-6xl leading-[0.95] mb-6">
            FOOD THAT<br/>STARTS EASY<br/>AND STAYS<br/>FOR DINNER
          </h2>
          <div className="space-y-4 text-[var(--hey-cream)] text-base md:text-lg font-medium" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
            <p>The food at Heyou is built around rounds and tables.</p>
            <p>Start light. Order something with the next drink. Share from the fire. Pick up a slice, wrap, or burger. Stay long enough and the table becomes dinner.</p>
            <p>This is not food built as an afterthought to the bar. It is a full food program for the way people actually go out together.</p>
          </div>
        </Reveal>
        {/* RIGHT — image */}
        <Reveal variant="right" className="overflow-hidden">
          <img
            src={mouth}
            alt="Food at Heyou"
            className="w-full h-full object-cover min-h-[300px] md:min-h-[600px]"
          />
        </Reveal>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[var(--hey-yellow)] py-16 md:py-24 text-center px-5 border-y-2 border-black">
        <Reveal variant="zoom">
          <h3 className="font-display text-black text-shadow-pop-sm text-4xl md:text-7xl leading-[0.95]">
            Come for one drink.<br/>See where the table goes.
          </h3>
          <Link
            to="/reserve"
            className="inline-block mt-10 font-display bg-[var(--hey-red)] text-[var(--hey-cream)] px-10 py-5 rounded-full text-xl md:text-2xl hover:bg-black transition-all duration-300 shadow-[6px_6px_0_#000] border-2 border-black hover:-translate-y-1 transform"
          >
            RESERVE A TABLE
          </Link>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer>
        <img src={footerImg} alt="Footer" className="w-full h-auto" />
      </footer>

    </main>
  );
}