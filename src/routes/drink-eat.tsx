import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { Header, BottomNav } from "@/components/Header";
import bartender from "@/assets/heyou/img2.jpg";
import mouth from "@/assets/heyou/img3.jpg";
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

function DrinkEat() {
  return (
    <main className="min-h-screen overflow-x-hidden pb-16 md:pb-0">

      <Header active="/drink-eat" />

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

      {/* MOUTH + FOOD TEXT */}
      <section className="grid md:grid-cols-2">
       <Reveal variant="left" className="relative overflow-hidden min-h-[400px] md:min-h-[580px]">
  <img src={mouth} alt="Food" className="absolute inset-0 w-full h-full object-cover" />
<div className="relative z-10 p-4 md:p-10 flex flex-col justify-start md:justify-end h-full pt-[30%] md:pt-0 pl-[15%] md:pl-0 md:pb-48">
    {/* mobile */}
    <div className="md:hidden space-y-1 text-black text-[12px] font-bold leading-[1.4] ml-4 max-w-[55%]" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
      <p className="mb-0">The food at Heyou</p>
      <p className="mb-0">is built around</p>
      <p className="mb-0">rounds and tables.</p>
      <p className="mb-0">Start light.</p>
      <p className="mb-0">Order with the next drink.</p>
      <p className="mb-0">Share from the fire.</p>
      <p className="mb-0">Pick up a slice.</p>
      <p className="mb-0">Stay — the table</p>
      <p className="mb-0">becomes dinner.</p>
      <p className="mb-0">Food built for</p>
      <p className="mb-0">the way people</p>
      <p className="mb-0">actually go out.</p>
    </div>
    {/* desktop */}
    <div className="hidden md:block space-y-1 text-black text-base font-bold ml-38 max-w-[65%]" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
      <p>The food at Heyou is built around rounds and tables.</p>
      <p>Start light. Order something with the next drink.</p>
      <p>Share from the fire.</p>
      <p>Pick up a slice, wrap, or burger.</p>
      <p>Stay long enough and the table becomes dinner.</p>
      <p>This is not food built as an afterthought to the bar.</p>
      <p>It is a full food program for the way people actually </p>

      <p> go out together.</p>
    </div>
  </div>
</Reveal>
        {/* mobile text below image */}
        <div className="md:hidden bg-[var(--hey-yellow)] px-5 py-4 space-y-1 text-black text-sm font-medium" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
          <p>The food at Heyou is built around rounds and tables.</p>
          <p>Start light. Order something with the next drink.</p>
          <p>Share from the fire.</p>
          <p>Pick up a slice, wrap, or burger.</p>
          <p>Stay long enough and the table becomes dinner.</p>
          <p>This is not food built as an afterthought to the bar.</p>
          <p>It is a full food program for the way people actually go out together.</p>
        </div>

        {/* RIGHT — bar sides */}
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
          <Link to="/reserve" search={{ venue: null } as any}
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