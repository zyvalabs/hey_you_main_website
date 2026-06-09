import { useState, useEffect } from "react";
import heyYouSvg from '../assets/heyou/hey_you.svg'

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => setLoaded(true), 500);
    } else {
      window.addEventListener("load", () => setTimeout(() => setLoaded(true), 500));
    }
  }, []);

  return (
    <>
      {/* LOADER */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'var(--hey-black)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'opacity 0.6s ease, visibility 0.6s ease',
        opacity: loaded ? 0 : 1,
        visibility: loaded ? 'hidden' : 'visible',
        pointerEvents: loaded ? 'none' : 'all',
      }}>
        <img src={heyYouSvg} alt="Heyou" style={{ width: '200px', height: 'auto' }} />
      </div>

      {/* PAGE */}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        {children}
      </div>
    </>
  );
}