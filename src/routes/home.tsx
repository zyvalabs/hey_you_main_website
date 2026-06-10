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
      <img src={welcomeImg} alt="Welcome" className="w-full h-auto block" />

      {/* VENUE CARDS */}
      <div className="bg-[var(--hey-black)] px-4 py-6 flex flex-row gap-4 justify-center items-stretch">
        <Link to="/reserve" search={{ venue: "bar" }} className="flex-1 max-w-xs">
          <div className="bg-[var(--hey-cream)] border-2 border-black p-3 shadow-[4px_4px_0_#000] hover:-translate-y-1 transition-transform duration-200 h-full">
            <img src={heyouBarSvg} alt="Heyou Bar" className="w-full h-auto block" />
          </div>
        </Link>
        <Link to="/reserve" search={{ venue: "dining" }} className="flex-1 max-w-xs">
          <div className="bg-[var(--hey-yellow)] border-2 border-black p-3 shadow-[4px_4px_0_#000] hover:-translate-y-1 transition-transform duration-200 h-full">
            <img src={heyouDiningSvg} alt="Heyou Dining" className="w-full h-auto block" />
          </div>
        </Link>
      </div>

      <Footer />
      <BottomNav />
    </main>
  );
}