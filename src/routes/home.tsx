import { createFileRoute } from "@tanstack/react-router";
import { Header, BottomNav } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "@tanstack/react-router";
import starSvg from '../assets/heyou/mobile/star.svg'
import staySvgMobile from '../assets/heyou/mobile/stay.svg'
import heyouGlowingSvg from '../assets/heyou/mobile/heyou glowing.svg'
import forYouSvg from '../assets/heyou/mobile/for you.svg'
import tongueSvg from '../assets/heyou/mobile/tongue.svg'
import onePlaceSvg from '../assets/heyou/mobile/one place.svg'
import heyouBarSvg from '../assets/heyou/heyyou bar.svg'
import heyouDiningSvg from '../assets/heyou/heyyou dining.svg'

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
<div className="bg-[var(--hey-red)] flex flex-col md:flex-row gap-4 md:gap-12 px-8 py-6 items-center">
<img src={staySvgMobile} alt="Stay" className="w-full md:w-1/3 h-auto block md:ml-24" />
<img src={starSvg} alt="Star" className="w-full md:w-1/3 h-auto block md:ml-96" />
</div>
      {/* GLOWING */}
      <img src={heyouGlowingSvg} alt="Heyou" className="w-full h-auto block" />

      {/* FOR YOU */}
<div className="bg-[var(--hey-red)] w-full h-68 flex items-center justify-center">
        <img src={forYouSvg} alt="For You" className="h-24 w-auto" />
      </div>

      {/* MOBILE — stacked: tongue → oneplace → cards */}
      <div className="md:hidden bg-[var(--hey-black)]">
        <img src={tongueSvg} alt="" className="w-full h-auto block" />
        <img src={onePlaceSvg} alt="One Place" className="w-full h-auto block" />
        <div className="px-4 py-6 flex flex-row gap-4 justify-center items-stretch">
          <Link to="/reserve" search={{ venue: "bar" }} className="flex-1">
            <div className="bg-[var(--hey-cream)] border-2 border-black p-3 shadow-[4px_4px_0_#000] h-full">
              <img src={heyouBarSvg} alt="Heyou Bar" className="w-full h-auto block" />
            </div>
          </Link>
          <Link to="/reserve" search={{ venue: "dining" }} className="flex-1">
            <div className="bg-[var(--hey-yellow)] border-2 border-black p-3 shadow-[4px_4px_0_#000] h-full">
              <img src={heyouDiningSvg} alt="Heyou Dining" className="w-full h-auto block" />
            </div>
          </Link>
        </div>
      </div>

      {/* DESKTOP — tongue left, right side: oneplace top + cards below */}
      <div className="hidden md:flex flex-row bg-[var(--hey-black)] items-stretch">
        {/* LEFT — tongue */}
<div className="w-1/2 flex items-center justify-center overflow-visible">
  <img src={tongueSvg} alt="" className="w-full h-auto block -ml-[30%] -mt-[10%]" />
</div>
        {/* RIGHT — oneplace + cards */}
        <div className="w-1/2 flex flex-col items-center justify-center px-8 py-8 gap-6">
<img src={onePlaceSvg} alt="One Place" className="w-3/4 h-auto block" />
<div className="flex flex-row gap-6 w-3/4 mx-auto">
            <Link to="/reserve" search={{ venue: "bar" }} className="flex-1">
              <div className="bg-[var(--hey-cream)] border-2 border-black p-3 shadow-[4px_4px_0_#000] hover:-translate-y-1 transition-transform duration-200 h-full">
                <img src={heyouBarSvg} alt="Heyou Bar" className="w-full h-auto block" />
              </div>
            </Link>
            <Link to="/reserve" search={{ venue: "dining" }} className="flex-1">
              <div className="bg-[var(--hey-yellow)] border-2 border-black p-3 shadow-[4px_4px_0_#000] hover:-translate-y-1 transition-transform duration-200 h-full">
                <img src={heyouDiningSvg} alt="Heyou Dining" className="w-full h-auto block" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <BottomNav />
    </main>
  );
}