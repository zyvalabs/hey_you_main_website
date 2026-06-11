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
    <main className="min-h-screen overflow-x-hidden pb-16 md:pb-0">
      <Header active="/home" />

      {/* HERO */}
      <section className="bg-[var(--hey-red)]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-8 md:py-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-20">
            
            {/* STAY */}
            <div className="w-full lg:w-[55%] flex justify-center lg:justify-start">
              <img
                src={staySvgMobile}
                alt="Stay"
                className="w-full md:w-[95%] lg:w-[850px] h-auto"
              />
            </div>

            {/* STAR */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end items-start">
              <img
                src={starSvg}
                alt="Star"
                className="w-[450px] md:w-[400px] lg:w-[600px] xl:w-[750px] h-auto"
              />
            </div>

          </div>
        </div>
      </section>

      {/* GLOWING */}
      <img
        src={heyouGlowingSvg}
        alt="Heyou"
        className="w-full h-[250px] md:h-[450px] lg:h-[650px] object-cover block"
      />

      {/* FOR YOU */}
      <section className="bg-[var(--hey-red)] py-12 md:py-20">
        <div className="flex justify-center items-center">
          <img
            src={forYouSvg}
            alt="For You"
            className="w-[90%] md:w-auto h-20 md:h-36"
          />
        </div>
      </section>

      {/* ONE PLACE SECTION */}
      <section className="bg-[var(--hey-black)] overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-[55%] flex justify-start items-center overflow-hidden">
              <img
                src={tongueSvg}
                alt=""
                className="w-[115%] lg:w-[135%] max-w-none h-auto -ml-[8%]"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start justify-center px-4 py-8 md:px-8 md:py-12">

              <img
                src={onePlaceSvg}
                alt="One Place"
                className="w-[90%] md:w-[80%] lg:w-[75%] h-auto mb-10"
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