import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, BottomNav } from "@/components/Header";
import { Footer } from "@/components/Footer";

import starSvg from "../assets/heyou/mobile/star.svg";
import staySvgMobile from "../assets/heyou/mobile/stay.svg";
import heyouGlowingSvg from "../assets/heyou/mobile/heyou glowing.svg";
import forYouSvg from "../assets/heyou/mobile/for you.svg";
import tongueSvg from "../assets/heyou/mobile/tongue.svg";
import onePlaceSvg from "../assets/heyou/mobile/one place.svg";
import heyouBarSvg from "../assets/heyou/mobile/bar @2x.png";
import heyouDiningSvg from "../assets/heyou/mobile/dining@2x.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heyou — Your new favourite bar" },
      {
        name: "description",
        content: "Bar-first downstairs, table-led upstairs. Bangalore.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden pb-16 md:pb-0">
      <Header active="/" />

      {/* HERO */}
      <section className="bg-[var(--hey-red)] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 px-6 md:px-10 py-6">
        <img src={staySvgMobile} alt="Stay" className="w-full md:w-[60%] h-auto block" />
        <img src={starSvg} alt="Star" className="w-full md:w-[38%] h-auto block" />
      </section>

      {/* GLOWING */}
      <section>
        <img src={heyouGlowingSvg} alt="Heyou" className="w-full h-auto block" />
      </section>

      {/* FOR YOU */}
      <section className="bg-[var(--hey-red)] w-full py-8 md:py-12 flex items-center justify-center">
        <img src={forYouSvg} alt="For You" className="h-12 md:h-20 w-auto" />
      </section>

      {/* UNIFIED SECTION */}
      <section className="bg-[var(--hey-black)] flex flex-col md:flex-row items-center md:items-stretch px-4 md:px-8 py-6 md:py-10 gap-6 md:gap-10">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={tongueSvg} alt="" className="w-full max-w-[420px] md:max-w-none h-auto block" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
          <img src={onePlaceSvg} alt="One Place" className="w-2/3 md:w-3/4 h-auto block mx-auto" />

          <div className="flex flex-row gap-4 md:gap-6 w-full max-w-md md:max-w-xl">
            <Link to="/reservation" search={{ venue: "bar" }} className="flex-1">
              <div className="bg-[var(--hey-transparent)] border-2 border-black p-3 shadow-[4px_4px_0_#000] h-full hover:-translate-y-1 transition-transform duration-200">
                <img src={heyouBarSvg} alt="Heyou Bar" className="w-full h-auto block" />
              </div>
            </Link>

            <Link to="/reservation" search={{ venue: "dining" }} className="flex-1">
              <div className="bg-[var(--hey-transparent)] border-2 border-black p-3 shadow-[4px_4px_0_#000] h-full hover:-translate-y-1 transition-transform duration-200">
                <img src={heyouDiningSvg} alt="Heyou Dining" className="w-full h-auto block" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}