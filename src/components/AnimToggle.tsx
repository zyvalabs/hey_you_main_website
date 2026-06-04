import { useEffect, useState } from "react";

const KEY = "heyou-anim";

export function AnimToggle() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
    const initial = stored ? stored === "on" : true;
    setOn(initial);
    document.body.classList.toggle("anim-off", !initial);
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    document.body.classList.toggle("anim-off", !next);
    try { localStorage.setItem(KEY, next ? "on" : "off"); } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      title={on ? "Pause animations" : "Play animations"}
      className="fixed bottom-5 right-5 z-50 font-display text-xs md:text-sm uppercase bg-[var(--hey-yellow)] text-black border-2 border-black rounded-full px-4 py-2 shadow-[4px_4px_0_#000] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_#000] transition-all"
    >
      {on ? "⏸ Pause FX" : "▶ Play FX"}
    </button>
  );
}