import { createFileRoute } from "@tanstack/react-router";
import { Header, BottomNav } from "@/components/Header";
import drinkEatStaySvg from '../assets/heyou/mobile/drink eat stay @2x.png'
import greenSvg from '../assets/heyou/mobile/green.svg'
import blueSvg from '../assets/heyou/mobile/blue.svg'
import tongue1Svg from '../assets/heyou/mobile/tongue@2x.png'
import barSideSvg from '../assets/heyou/mobile/bar side.svg'
import { Footer } from "@/components/Footer";
import { Link } from "@tanstack/react-router";
import reserveTableBtnSvg from '../assets/heyou/reserve table png@2x.png'

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
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="w-full md:w-[60%]"><img src={greenSvg} alt="Green" className="w-full h-auto block" /></div>
        <div className="w-full md:w-[40%]"><img src={blueSvg} alt="Blue" className="w-full h-full object-cover block" /></div>
      </div>

      {/* TONGUE1 + BAR SIDE */}
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="flex-1"><img src={tongue1Svg} alt="Tongue" className="w-full h-full object-cover block" /></div>
        <div className="flex-1"><img src={barSideSvg} alt="Bar Side" className="w-full h-full object-cover block" /></div>
      </div>

      <Link to="/reservation" className="block">
        <img src={reserveTableBtnSvg} alt="Reserve Table" className="w-full h-auto block" />
      </Link>

      <Footer />
      <BottomNav />
    </div>
  );
}