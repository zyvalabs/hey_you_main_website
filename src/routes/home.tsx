import { createFileRoute } from "@tanstack/react-router";
import { Header, BottomNav } from "@/components/Header";
import staySvg from '../assets/heyou/stay.svg'
import heyYouSvg from '../assets/heyou/hey_you.svg'
import welcomeImg from '../assets/heyou/welcome.png'
import footerSvg from '../assets/heyou/footer.svg'

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
      <img src={footerSvg} alt="Footer" className="w-full h-auto block" />
      <BottomNav />
    </main>
  );
}