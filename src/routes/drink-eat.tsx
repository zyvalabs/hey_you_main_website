import { createFileRoute } from "@tanstack/react-router";
import { Header, BottomNav } from "@/components/Header";
import drinkEatStaySvg from '../assets/heyou/mobile/drinkeatstay.svg'
import greenSvg from '../assets/heyou/mobile/green.svg'
import blueSvg from '../assets/heyou/mobile/blue.svg'
import tongue1Svg from '../assets/heyou/mobile/toungue2.svg'
import barSideSvg from '../assets/heyou/mobile/bar side.svg'
import { Footer } from "@/components/Footer";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/drink-eat")({
  head: () => ({
    meta: [
      { title: "Drink / Eat — Heyou" },
      { name: "description", content: "Proper cocktails and food built around how people actually go out together." },
    ],
  }),
  component: DrinkEat,
});

function DrinkEat() {
  return (
    <div className="bg-[var(--hey-black)]">
      <Header active="/drink-eat" />
      <img src={drinkEatStaySvg} alt="Drink Eat Stay" className="w-full h-auto block" />

      {/* GREEN + BLUE */}
<div className="flex flex-col md:flex-row -mt-[13%]">
  <div className="flex-1 overflow-hidden">
    <img src={greenSvg} alt="Green" className="w-full h-auto block" />
  </div>
  <div className="flex-1">
    <img src={blueSvg} alt="Blue" className="w-full h-auto block" />
  </div>
</div>

{/* TONGUE1 + BAR SIDE */}
<div className="flex flex-col md:flex-row">
  <div className="flex-1"><img src={tongue1Svg} alt="Tongue" className="w-full h-auto block" /></div>
  <div className="flex-1"><img src={barSideSvg} alt="Bar Side" className="w-full h-auto block" /></div>
</div>

      <Footer />
      <BottomNav />
    </div>
  );
}