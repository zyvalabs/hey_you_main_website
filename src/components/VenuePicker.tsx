import reserveTextSvg from '../assets/heyou/reserve text.svg'
import heyouBarSvg from '../assets/heyou/heyyou bar.svg'
import heyouDiningSvg from '../assets/heyou/heyyou dining.svg'

type Venue = "bar" | "dining";

interface Props {
  venue: Venue | null;
  venueError: boolean;
  barSection: "indoor" | "outdoor";
  onVenueSelect: (v: Venue) => void;
  onBarSectionSelect: (s: "indoor" | "outdoor") => void;
}

export function VenuePicker({ venue, venueError, barSection, onVenueSelect, onBarSectionSelect }: Props) {
  return (
    <div className="w-full bg-[var(--hey-black)] flex flex-col justify-start px-6 py-8 gap-5 border-r border-white/10">
      <img src={reserveTextSvg} alt="Reserve" style={{ width: '100%', height: 'auto', display: 'block' }} />

      {venueError && !venue && (
        <p className="text-[var(--hey-yellow)] text-xs font-bold">Please select a venue to continue.</p>
      )}

      <div className="flex flex-row gap-3">
        {/* BAR CARD */}
        <button type="button" onClick={() => onVenueSelect("bar")}
          className={`flex-1 text-left border-2 border-black p-4 transition-all duration-300 shadow-[4px_4px_0_#000] ${venue === "bar" ? "bg-[var(--hey-yellow)] -translate-y-1 shadow-[6px_6px_0_#000]" : "bg-[var(--hey-black)] hover:-translate-y-0.5"}`}>
          <div className="flex flex-col gap-2">
            <img src={heyouBarSvg} alt="Heyou Bar" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div className={`w-4 h-4 rounded-full border-2 border-black self-end transition-all duration-200 ${venue === "bar" ? "bg-black" : "bg-transparent"}`} />
            {venue === "bar" && (
              <div className="flex gap-2 mt-1">
                <button type="button" onClick={(e) => { e.stopPropagation(); onBarSectionSelect("indoor"); }}
                  className={`py-1 text-xs font-bold border-2 border-black transition-all duration-200 ${
                    barSection === "indoor"
                      ? "flex-[2] py-2 text-sm bg-black text-[var(--hey-cream)] scale-105 shadow-[3px_3px_0_#555]"
                      : "flex-1 py-1 text-xs bg-white text-black opacity-50 scale-95"
                  }`}>
                  Indoor
                </button>
                <button type="button" onClick={(e) => { e.stopPropagation(); onBarSectionSelect("outdoor"); }}
                  className={`py-1 text-xs font-bold border-2 border-black transition-all duration-200 ${
                    barSection === "outdoor"
                      ? "flex-[2] py-2 text-sm bg-black text-[var(--hey-cream)] scale-105 shadow-[3px_3px_0_#555]"
                      : "flex-1 py-1 text-xs bg-white text-black opacity-50 scale-95"
                  }`}>
                  Outdoor
                </button>
              </div>
            )}
          </div>
        </button>

        {/* DINING CARD */}
        <button type="button" onClick={() => onVenueSelect("dining")}
          className={`flex-1 text-left border-2 border-black p-4 transition-all duration-300 shadow-[4px_4px_0_#000] ${venue === "dining" ? "bg-[var(--hey-yellow)] -translate-y-1 shadow-[6px_6px_0_#000]" : "bg-[var(--hey-black)] hover:-translate-y-0.5"}`}>
          <div className="flex flex-col gap-2">
            <img src={heyouDiningSvg} alt="Heyou Dining" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div className={`w-4 h-4 rounded-full border-2 border-black self-end transition-all duration-200 ${venue === "dining" ? "bg-black" : "bg-transparent"}`} />
          </div>
        </button>
      </div>
    </div>
  );
}