import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import bartender from "@/assets/heyou/img2.jpg";
import mouth from "@/assets/heyou/img3.jpg";
import neon from "@/assets/heyou/img4.jpg";
import { Reveal } from "@/components/Reveal";
import heyouImg from '../assets/heyou/heyou.png'
import starImg from '../assets/heyou/Star.png'
import eyesImg from '../assets/heyou/Eyes.svg'
import handImg from '../assets/heyou/hand.svg'
import handsImg from '../assets/heyou/hands.svg'
import welcomeImg from '../assets/heyou/welcome.svg'
import greenImg from '../assets/heyou/green1.svg'
import barSidesImg from '../assets/heyou/bar sides.svg'
import footerImg from '../assets/heyou/Footer.svg'
import logoImg from '../assets/heyou/logo.svg'
import moodsImg from '../assets/heyou/moods.svg'
import bookImg from '../assets/heyou/book.svg'

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heyou — Your new favourite bar" },
      { name: "description", content: "Bar-first downstairs, table-led upstairs. Bangalore." },
      { property: "og:title", content: "Heyou — Your new favourite bar" },
      { property: "og:description", content: "Bar-first downstairs, table-led upstairs. Bangalore." },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "About", href: "#" },
  { label: "Drink/Eat", href: "/drink-eat", isRoute: true },
  { label: "Reserve", href: "/reserve", isRoute: true },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* NAV */}
      <header className="relative z-30 flex items-center justify-between px-5 py-4 md:px-10 backdrop-blur-sm bg-[var(--hey-red)]/90 sticky top-0 border-b border-white/10 transition-all duration-300">
        {/* LEFT — nav links desktop only */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
          {navLinks.map((l) =>
            l.isRoute ? (
              <Link key={l.label} to={l.href as "/"} className="text-[var(--hey-cream)] hover:text-[var(--hey-yellow)] transition-colors duration-200 hover:-translate-y-0.5 transform inline-block">{l.label}</Link>
            ) : (
              <a key={l.label} href={l.href} className="text-[var(--hey-cream)] hover:text-[var(--hey-yellow)] transition-colors duration-200 hover:-translate-y-0.5 transform inline-block">{l.label}</a>
            )
          )}
        </nav>

        {/* mobile spacer */}
        <div className="md:hidden w-8" />

        {/* CENTER — logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img src={logoImg} alt="Heyou" className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300" />
        </div>

        {/* RIGHT — hamburger */}
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
        {navLinks.map((l, i) =>
          l.isRoute ? (
            <Link
              key={l.label}
              to={l.href as "/"}
              onClick={() => setMenuOpen(false)}
              className="font-display text-[var(--hey-cream)] text-5xl hover:text-[var(--hey-yellow)] transition-all duration-200 hover:scale-110 transform"
              style={{ transitionDelay: `${i * 60}ms` }}
            >{l.label}</Link>
          ) : (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-[var(--hey-cream)] text-5xl hover:text-[var(--hey-yellow)] transition-all duration-200 hover:scale-110 transform"
              style={{ transitionDelay: `${i * 60}ms` }}
            >{l.label}</a>
          )
        )}
      </div>

      {/* HERO */}
      <section className="relative px-5 md:px-12 pt-6 md:pt-12 pb-16 md:pb-32">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          <Reveal variant="left" className="relative">
            <img src={heyouImg} alt="Heyou" className="w-full max-w-[320px] md:max-w-[500px] h-auto mr-auto" />
            {/* sticker - hand */}
            <div className="absolute -left-2 top-[42%] w-14 md:w-24 animate-wobble">
              <img src={handImg} alt="hand" className="w-full h-auto" />
            </div>
            {/* eyes */}
            <img src={eyesImg} alt="eyes" className="w-16 md:w-20 h-auto mt-4 md:mt-6" />
          </Reveal>
          <Reveal variant="right" delay={150} className="space-y-4 md:space-y-5 text-[var(--hey-cream)] text-sm md:text-lg max-w-md md:mt-16 font-medium leading-snug">
            <div style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
              <p className="mb-3">Heyou is built for the kind of plan that changes as the evening goes on.</p>
              <p className="mb-3">One drink becomes another. Snacks become dinner. A quick catch-up becomes a longer table. Downstairs keeps the bar moving. Upstairs lets the night settle in.</p>
              <p>This is not global food for the sake of variety. This is food and drink built around how people actually go out in India.</p>
            </div>
            {/* eyes + star row */}
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
      <section className="bg-[#1a1a1a] py-12 md:py-24 text-center px-5">
        <Reveal variant="zoom">
          <img src={welcomeImg} alt="Welcome" className="w-full max-w-xs md:max-w-2xl mx-auto h-auto" />
        </Reveal>
      </section>

      {/* DRINKS */}
      <section className="grid md:grid-cols-2 gap-0 bg-white relative">
        <Reveal variant="left" className="overflow-hidden w-full relative z-10">
          <img src={greenImg} alt="drinks" className="w-full h-full object-cover min-h-[280px] md:min-h-[600px] md:translate-x-2" />
        </Reveal>
        <Reveal variant="right" as="div" className="overflow-hidden">
          <img src={bartender} alt="Bartender pouring at Heyou" className="w-full h-full object-cover min-h-[280px] md:min-h-[600px]" />
        </Reveal>
      </section>

      {/* FOOD */}
      <section className="grid md:grid-cols-2">
        {/* LEFT — mouth photo + yellow text box */}
        <Reveal variant="left" className="relative min-h-[380px] md:min-h-[700px] bg-checker">
          <img src={mouth} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative p-6 md:p-12">
            <div className="bg-[var(--hey-yellow)] border-2 border-black p-4 md:p-5 max-w-[220px] md:max-w-xs shadow-[6px_6px_0_#000] text-black text-xs md:text-base font-medium" style={{ fontFamily: "'Londrina Solid', sans-serif", transform: 'rotate(-3deg)' }}>
              <p className="font-bold mb-2">The food at Heyou is built around rounds and tables.</p>
              <p className="mb-2">Start light. Order something with the next drink. Share from the fire. Pick up a taco, slice, wrap, or burger. Stay long enough and the table becomes dinner.</p>
              <p>This is not a menu built for categories. It is built for how people eat when they are out together.</p>
            </div>
          </div>
        </Reveal>
        {/* RIGHT — red bg + bar sides svg + star */}
        <Reveal variant="right" className="relative bg-[var(--hey-red)] flex flex-col items-center justify-center min-h-[380px] md:min-h-[700px] p-6 md:p-8">
          <img src={starImg} alt="star" className="w-14 md:w-20 h-auto mb-4 mr-auto" />
          <img src={barSidesImg} alt="Bar Sides" className="w-full md:w-3/4 h-auto" />
        </Reveal>
      </section>

      {/* TWO MOODS */}
      <section className="grid md:grid-cols-[40%_60%] bg-[var(--hey-red)]">
        <Reveal variant="left" className="flex flex-col items-start justify-center p-6 md:p-10 gap-5 md:gap-6">
          <img src={moodsImg} alt="One place. Two moods." className="w-full h-auto max-w-[280px] md:max-w-none" />
          <div className="space-y-3 text-[var(--hey-yellow)] text-sm md:text-lg font-medium" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
            <p>Downstairs is bar-first: faster, louder, easier to walk into.</p>
            <p>Upstairs is table-led: more comfortable, more settled, built for families, teams, groups, and dinner that takes its time.</p>
            <p>It is one Heyou. The hour decides the mood.</p>
          </div>
          <Link to="/reserve">
            <img src={bookImg} alt="Book a table" className="w-36 md:w-48 h-auto hover:scale-105 transition-transform duration-300" />
          </Link>
        </Reveal>
        <Reveal variant="right" className="overflow-hidden">
          <img src={neon} alt="Heyou neon sign" className="w-full h-full object-cover min-h-[280px] md:min-h-[450px] animate-flicker" />
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer>
        <img src={footerImg} alt="Footer" className="w-full h-auto" />
      </footer>

    </main>
  );
}