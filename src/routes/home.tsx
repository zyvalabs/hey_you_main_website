import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { Header, BottomNav } from "@/components/Header";
import starImg from '../assets/heyou/Star.png'
import eyesImg from '../assets/heyou/Eyes.svg'
import heartImg from '../assets/heyou/heart.svg'
import handImg from '../assets/heyou/hand.svg'
import handsImg from '../assets/heyou/hands.svg'

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
    <main className="min-h-screen overflow-x-hidden pb-16 md:pb-0">

      <Header active="/home" />

      {/* HERO */}
      <section className="relative px-5 md:px-12 pt-6 md:pt-12 pb-10 md:pb-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">

          {/* LEFT — title + hand + eye */}
          <Reveal variant="left" className="relative md:pl-24">
            {/* hand — desktop only, absolute left of title */}
            <div className="hidden md:block absolute -left-6 top-4 w-32 animate-wobble">
              <img src={handImg} alt="hand" className="w-full h-auto" />
            </div>
            <h1 className="font-display text-[var(--hey-cream)] text-shadow-pop leading-[0.9] text-[15vw] md:text-[7.5vw] text-left">
              Heyou.<br/>Show up.<br/>Stay a<br/>while.
            </h1>
            {/* hand — mobile only, below title */}
            <div className="md:hidden w-16 animate-wobble mt-3">
              <img src={handImg} alt="hand" className="w-full h-auto" />
            </div>
            {/* eye — below title/hand */}
            <img src={heartImg} alt="eyes" className="w-16 md:w-28 h-auto mt-4 md:mt-6" />
          </Reveal>

          {/* RIGHT — text + eyes + star */}
          <Reveal variant="right" delay={150} className="space-y-4 text-[var(--hey-cream)] max-w-md md:mt-16">
          <div className="space-y-3 text-xl md:text-2xl font-medium leading-snug" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
              <p>For the kind of plan that changes as the evening goes on.</p>
              <p>One drink becomes another. Snacks become dinner. A quick catch-up turns into a longer table.</p>
              <p>Downstairs keeps the bar moving. Upstairs lets the evening settle in.</p>
              <p>Food and drink built around how people actually go out in India.</p>
            </div>
<div className="flex items-center justify-end gap-4 mt-6 -mr-5 md:-mr-48">
  <img src={eyesImg} alt="eyes" className="w-16 md:w-24 h-auto" />
  <img src={starImg} alt="star" className="w-32 md:w-84 h-auto" />
</div>
          </Reveal>

        </div>
      </section>

      {/* HANDS STRIP */}
      <section className="bg-checker relative pb-0 pt-12 md:pt-24">
        <div className="flex items-end justify-center">
          <img src={handsImg} alt="hands" className="w-full h-auto object-contain" />
        </div>
      </section>

      {/* BLACK BANNER */}
      <section className="bg-[#1a1a1a] py-10 md:py-20 text-center px-5">
        <Reveal variant="zoom">
          <h3 className="font-display text-[var(--hey-cream)] text-shadow-pop-sm text-3xl md:text-7xl leading-[0.95]">
            This one's for you.
          </h3>
          <p className="mt-3 text-[var(--hey-cream)] text-sm md:text-xl font-medium max-w-xl mx-auto" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
            Welcome to your new favourite bar. Come for one drink. See where the table goes.
          </p>
        </Reveal>
      </section>

      {/* ONE PLACE TWO MOODS */}
      <section className="bg-[var(--hey-red)] py-12 md:py-24 px-5 md:px-12">
        <Reveal variant="zoom" className="text-center mb-8 md:mb-16">
          <h3 className="font-display text-[var(--hey-yellow)] text-shadow-pop-sm text-3xl md:text-7xl leading-[0.95]">
            One place.<br/>Two moods.
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          <Reveal variant="left">
            <div className="bg-[var(--hey-yellow)] border-2 border-black shadow-[4px_4px_0_#000] md:shadow-[6px_6px_0_#000] p-5 md:p-10 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-display text-xl md:text-4xl text-black leading-tight">HEYOU<br/>Bar</h4>
                <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-[var(--hey-red)] border-2 border-black flex-shrink-0 flex items-center justify-center">
                  <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[var(--hey-cream)]" />
                </div>
              </div>
              <ul className="space-y-1.5 text-black text-xs md:text-base font-medium flex-1" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
                <li className="flex items-start gap-2"><span className="text-[var(--hey-red)] font-bold">·</span>Indoor and outdoor. 21 and over.</li>
                <li className="flex items-start gap-2"><span className="text-[var(--hey-red)] font-bold">·</span>Faster, louder, easier to walk into.</li>
              </ul>
              <Link to="/reserve" search={{ venue: "bar" } as any}
                className="mt-4 md:mt-6 inline-block font-display bg-black text-[var(--hey-cream)] px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-base border-2 border-black shadow-[3px_3px_0_#000] hover:bg-[var(--hey-red)] transition-all duration-200 text-center">
                RESERVE BAR
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="bg-[var(--hey-cream)] border-2 border-black shadow-[4px_4px_0_#000] md:shadow-[6px_6px_0_#000] p-5 md:p-10 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-display text-xl md:text-4xl text-black leading-tight">HEYOU<br/>Dining</h4>
                <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-[var(--hey-red)] border-2 border-black flex-shrink-0 flex items-center justify-center">
                  <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[var(--hey-yellow)]" />
                </div>
              </div>
              <ul className="space-y-1.5 text-black text-xs md:text-base font-medium flex-1" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
                <li className="flex items-start gap-2"><span className="text-[var(--hey-red)] font-bold">·</span>A more settled table for families, teams, groups.</li>
                <li className="flex items-start gap-2"><span className="text-[var(--hey-red)] font-bold">·</span>Dinner that takes its time.</li>
              </ul>
              <Link to="/reserve" search={{ venue: "dining" } as any}
                className="mt-4 md:mt-6 inline-block font-display bg-black text-[var(--hey-cream)] px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-base border-2 border-black shadow-[3px_3px_0_#000] hover:bg-[var(--hey-red)] transition-all duration-200 text-center">
                RESERVE DINING
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal variant="zoom" className="text-center mt-8 md:mt-14">
          <p className="text-[var(--hey-cream)] text-sm md:text-xl font-medium mb-5" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
            One Heyou. The hour decides the mood.
          </p>
          <Link to="/reserve" search={{ venue: null } as any}
            className="inline-block font-display bg-[var(--hey-yellow)] text-black px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-xl hover:bg-[var(--hey-cream)] transition-all duration-300 shadow-[4px_4px_0_#000] md:shadow-[6px_6px_0_#000] border-2 border-black hover:-translate-y-1 transform">
            RESERVE A TABLE
          </Link>
        </Reveal>
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}