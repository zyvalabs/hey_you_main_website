import { createFileRoute } from "@tanstack/react-router";
import { Header, BottomNav } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "@tanstack/react-router";

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
    <main className="min-h-screen overflow-x-hidden pb-16">
      <Header active="/home" />

      {/* HERO */}
      <section className="bg-[var(--hey-red)]">
        <div className="max-w-[1800px] mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-8">

            {/* STAY */}
            <div className="w-full flex justify-center">
              <img
                src={staySvgMobile}
                alt="Stay"
                className="h-auto"
                style={{ width: 'clamp(280px, 90vw, 850px)' }}
              />
            </div>

            {/* STAR */}
            <div className="w-full flex justify-center items-start">
              <img
                src={starSvg}
                alt="Star"
                className="h-auto"
                style={{ width: 'clamp(280px, 60vw, 750px)' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* GLOWING */}
      <img
        src={heyouGlowingSvg}
        alt="Heyou"
        className="w-full h-[250px] object-cover block"
      />

      {/* FOR YOU */}
      <section className="bg-[var(--hey-red)] py-12">
        <div className="flex justify-center items-center">
          <img
            src={forYouSvg}
            alt="For You"
            className="h-auto"
            style={{ width: 'clamp(250px, 80vw, 600px)' }}
          />
        </div>
      </section>

      {/* ONE PLACE SECTION */}
      <section className="bg-[var(--hey-black)] overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col items-center">

            {/* LEFT SIDE */}
            <div className="w-full flex justify-start items-center overflow-hidden">
              <img
                src={tongueSvg}
                alt=""
                className="w-[115%] max-w-none h-auto -ml-[8%]"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full flex flex-col items-center justify-center px-4 py-8">

              <img
                src={onePlaceSvg}
                alt="One Place"
                className="h-auto mb-10"
                style={{ width: 'clamp(250px, 80vw, 600px)' }}
              />

              <div className="grid grid-cols-2 gap-6 w-full max-w-[650px]">

                <Link to="/reserve" search={{ venue: "bar" }}>
                  <div className="bg-[var(--hey-transparent)] border-2 border-black p-3 shadow-[4px_4px_0_#000] hover:-translate-y-1 transition-all duration-200">
                    <img
                      src={heyouBarSvg}
                      alt="Heyou Bar"
                      className="w-full h-auto block"
                    />
                  </div>
                </Link>

                <Link to="/reserve" search={{ venue: "dining" }}>
                  <div className="bg-[var(--hey-transparent)] border-2 border-black p-3 shadow-[4px_4px_0_#000] hover:-translate-y-1 transition-all duration-200">
                    <img
                      src={heyouDiningSvg}
                      alt="Heyou Dining"
                      className="w-full h-auto block"
                    />
                  </div>
                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}