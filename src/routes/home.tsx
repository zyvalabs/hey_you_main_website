import { createFileRoute, Link } from "@tanstack/react-router";

import bartender from "@/assets/heyou/img2.jpg";
import mouth from "@/assets/heyou/img3.jpg";
import neon from "@/assets/heyou/img4.jpg";
import { Reveal } from "@/components/Reveal";
import heyouImg from '../assets/heyou/heyou.png'
import starImg from '../assets/heyou/Star.png'
import eyesImg from '../assets/heyou/Eyes.svg'
import handImg from '../assets/heyou/hand.svg'
import handsImg from '../assets/heyou/hands.svg'
import greenImg from '../assets/heyou/green1.svg'
import barSidesImg from '../assets/heyou/bar sides.svg'
import footerImg from '../assets/heyou/Footer.svg'

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Heyou — Your new favourite bar" },
      { name: "description", content: "Bar-first downstairs, table-led upstairs. Bangalore." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="relative px-5 md:px-12 pt-6 md:pt-12 pb-16 md:pb-32">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          <Reveal variant="left" className="relative">
            <img src={heyouImg} alt="Heyou" className="w-full max-w-[320px] md:max-w-[500px] h-auto mr-auto" />
            <div className="absolute -left-2 top-[42%] w-14 md:w-24 animate-wobble">
              <img src={handImg} alt="hand" className="w-full h-auto" />
            </div>
            <img src={eyesImg} alt="eyes" className="w-16 md:w-20 h-auto mt-4 md:mt-6" />
          </Reveal>
          <Reveal variant="right" delay={150} className="space-y-4 text-[var(--hey-cream)] max-w-md md:mt-16">
            <h2 className="font-display text-4xl md:text-5xl text-[var(--hey-cream)] text-shadow-pop-sm leading-[0.95]">
              Heyou.<br/>Show up.<br/>Stay a while.
            </h2>
            <div className="space-y-3 text-sm md:text-lg font-medium leading-snug" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
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

      {/* DRINKS */}
      <section className="grid md:grid-cols-2 gap-0 bg-white relative">
        <Reveal variant="left" className="overflow-hidden w-full relative z-10">
          <img src={greenImg} alt="drinks" className="w-full h-full object-cover min-h-[280px] md:min-h-[600px] md:translate-x-2" />
        </Reveal>
        <Reveal variant="right" as="div" className="overflow-hidden">
          <img src={bartender} alt="Bartender" className="w-full h-full object-cover min-h-[280px] md:min-h-[600px]" />
        </Reveal>
      </section>

      {/* FOOD */}
      <section className="grid md:grid-cols-2">
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
        <Reveal variant="right" className="relative bg-[var(--hey-red)] flex flex-col items-center justify-center min-h-[380px] md:min-h-[700px] p-6 md:p-8">
          <img src={starImg} alt="star" className="w-14 md:w-20 h-auto mb-4 mr-auto" />
          <img src={barSidesImg} alt="Bar Sides" className="w-full md:w-3/4 h-auto" />
        </Reveal>
      </section>

      {/* ONE PLACE TWO MOODS */}
      <section className="bg-[var(--hey-black)] py-12 md:py-20 px-5 md:px-12">
        <Reveal variant="zoom" className="text-center mb-10 md:mb-14">
          <h3 className="font-display text-[var(--hey-yellow)] text-shadow-pop-sm text-4xl md:text-7xl leading-[0.95]">
            One place.<br/>Two moods.
          </h3>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <Reveal variant="left">
            <div className="bg-[var(--hey-yellow)] border-2 border-black p-6 md:p-8 shadow-[6px_6px_0_#000]">
              <h4 className="font-display text-2xl md:text-3xl text-black">HEYOU Bar</h4>
              <p className="mt-3 text-black text-sm md:text-base font-medium" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
                Indoor and outdoor. 21 and over.<br/>Faster, louder, easier to walk into.
          </p>
            </div>
          </Reveal>
          <Reveal variant="right">
            <div className="bg-[var(--hey-cream)] border-2 border-black p-6 md:p-8 shadow-[6px_6px_0_#000]">
              <h4 className="font-display text-2xl md:text-3xl text-black">HEYOU Dining</h4>
              <p className="mt-3 text-black text-sm md:text-base font-medium" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
                A more settled table for families, teams, groups, and dinner that takes its time.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal variant="zoom" className="text-center mt-8 md:mt-12">
          <p className="text-[var(--hey-cream)] text-base md:text-xl font-medium mb-6" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
            One Heyou. The hour decides the mood.
          </p>
          <Link to="/reserve" className="inline-block font-display bg-[var(--hey-yellow)] text-black px-10 py-4 rounded-full text-lg md:text-xl hover:bg-[var(--hey-cream)] transition-all duration-300 shadow-[6px_6px_0_#000] border-2 border-black hover:-translate-y-1 transform">
            RESERVE A TABLE
          </Link>
        </Reveal>
      </section>

      {/* NEON */}
      <section className="overflow-hidden">
        <Reveal variant="zoom">
          <img src={neon} alt="Heyou neon sign" className="w-full h-[300px] md:h-[500px] object-cover animate-flicker" />
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer>
        <img src={footerImg} alt="Footer" className="w-full h-auto" />
      </footer>

    </main>
  );
}