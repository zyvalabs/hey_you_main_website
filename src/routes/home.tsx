import { createFileRoute } from "@tanstack/react-router";
import { Header, BottomNav } from "@/components/Header";
import staySvg from '../assets/heyou/showup.svg'
import heyYouSvg from '../assets/heyou/hey_you.svg'
import welcomeImg from '../assets/heyou/oneplace.png'
import { Footer } from "@/components/Footer";
import { Link } from "@tanstack/react-router";
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
      <img src={staySvg} alt="Stay" className="w-full h-auto block" />
      <img src={heyYouSvg} alt="Hey You" className="w-full h-auto block" />

      <div className="relative">
        <img src={welcomeImg} alt="Welcome" className="w-full h-auto block" />

    {/* MOBILE */}
<div className="flex md:hidden absolute top-[180px] left-1/2 flex-row gap-4">
  <Link to="/reserve" search={{ venue: "bar" }}>
    <div className="bg-[var(--hey-cream)] border-2 border-black p-2 shadow-[4px_4px_0_#000] flex flex-col gap-2 w-20">
      <img src={heyouBarSvg} alt="Heyou Bar" className="w-full h-auto block" />
    </div>
  </Link>
  <Link to="/reserve" search={{ venue: "dining" }}>
    <div className="bg-[var(--hey-yellow)] border-2 border-black p-2 shadow-[4px_4px_0_#000] flex flex-col gap-2 w-20">
      <img src={heyouDiningSvg} alt="Heyou Dining" className="w-full h-auto block" />
    </div>
  </Link>
</div>

{/* TABLET */}
<div className="hidden md:flex lg:hidden absolute top-[300px] left-1/2 flex-row gap-8">
  <Link to="/reserve" search={{ venue: "bar" }}>
    <div className="bg-[var(--hey-cream)] border-2 border-black p-2 shadow-[4px_4px_0_#000] flex flex-col gap-2 w-36">
      <img src={heyouBarSvg} alt="Heyou Bar" className="w-full h-auto block" />
    </div>
  </Link>
  <Link to="/reserve" search={{ venue: "dining" }}>
    <div className="bg-[var(--hey-yellow)] border-2 border-black p-2 shadow-[4px_4px_0_#000] flex flex-col gap-2 w-36">
      <img src={heyouDiningSvg} alt="Heyou Dining" className="w-full h-auto block" />
    </div>
  </Link>
</div>

{/* LAPTOP + DESKTOP */}
<div className="hidden lg:flex absolute top-[850px] left-1/2 flex-row gap-16">
  <Link to="/reserve" search={{ venue: "bar" }}>
    <div className="bg-[var(--hey-cream)] border-2 border-black p-3 shadow-[4px_4px_0_#000] flex flex-col gap-2 w-88">
      <img src={heyouBarSvg} alt="Heyou Bar" className="w-full h-auto block" />
    </div>
  </Link>
  <Link to="/reserve" search={{ venue: "dining" }}>
    <div className="bg-[var(--hey-yellow)] border-2 border-black p-3 shadow-[4px_4px_0_#000] flex flex-col gap-2 w-88">
      <img src={heyouDiningSvg} alt="Heyou Dining" className="w-full h-auto block" />
    </div>
  </Link>
</div>
      </div>

      <Footer />
      <BottomNav />
    </main>
  );
}