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

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Heyou — Your new favourite bar" },
      {
        name: "description",
        content: "Bar-first downstairs, table-led upstairs. Bangalore.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden pb-16 md:pb-0">
      <Header active="/home" />

      {/* HERO */}
      <section className="bg-[var(--hey-red)] px-4 py-5 sm:px-6 md:px-10 md:py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-8">
          <img
            src={staySvgMobile}
            alt="Stay"
            className="block h-auto w-[94vw] max-w-[420px] sm:max-w-[500px] md:w-[42%] md:max-w-none"
          />
          <img
            src={starSvg}
            alt="Star"
            className="block h-auto w-[72vw] max-w-[240px] sm:max-w-[280px] md:w-[28%] md:max-w-none"
          />
        </div>
      </section>

      {/* GLOWING */}
      <section className="bg-[var(--hey-red)]">
        <div className="mx-auto w-full max-w-7xl">
          <img
            src={heyouGlowingSvg}
            alt="Heyou"
            className="block h-auto w-full"
          />
        </div>
      </section>

      {/* FOR YOU */}
      <section className="bg-[var(--hey-red)] px-4 py-6 sm:px-6 md:px-10 md:py-10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center">
          <img
            src={forYouSvg}
            alt="For You"
            className="block h-auto w-[58vw] max-w-[240px] sm:max-w-[300px] md:h-20 md:w-auto"
          />
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-[var(--hey-black)] px-4 py-6 sm:px-6 md:px-8 md:py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
          <div className="flex w-full items-center justify-center md:w-1/2">
            <img
              src={tongueSvg}
              alt=""
              className="block h-auto w-[92vw] max-w-[440px] sm:max-w-[540px] md:w-full md:max-w-none"
            />
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
            <img
              src={onePlaceSvg}
              alt="One Place"
              className="mx-auto block h-auto w-[68vw] max-w-[300px] sm:max-w-[360px] md:w-[74%] md:max-w-none"
            />

            <div className="flex w-full max-w-md flex-row gap-3 sm:gap-4 md:max-w-xl md:gap-6">
              <Link to="/reserve" search={{ venue: "bar" }} className="flex-1">
                <div className="h-full border-2 border-black bg-[var(--hey-transparent)] p-2.5 shadow-[4px_4px_0_#000] transition-transform duration-200 hover:-translate-y-1 md:p-3">
                  <img
                    src={heyouBarSvg}
                    alt="Heyou Bar"
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </Link>

              <Link to="/reserve" search={{ venue: "dining" }} className="flex-1">
                <div className="h-full border-2 border-black bg-[var(--hey-transparent)] p-2.5 shadow-[4px_4px_0_#000] transition-transform duration-200 hover:-translate-y-1 md:p-3">
                  <img
                    src={heyouDiningSvg}
                    alt="Heyou Dining"
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}