import { createFileRoute } from "@tanstack/react-router";
import { Header, BottomNav } from "@/components/Header";
import drinkEatStaySvg from '../assets/heyou/drinkeatstay.png'
import barSide from '../assets/heyou/bar side@2x.png'
import footerSvg from '../assets/heyou/Footer.svg'



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
      <img src={drinkEatStaySvg} alt="Drink Eat Stay" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: 0 }} />
      <img src={barSide} alt="Bar Side" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: 0 }} />
      <img src={footerSvg} alt="Footer" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: 0 }} />
      <BottomNav />
    </div>
  );
}