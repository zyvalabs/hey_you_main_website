import reserveTextSvg from "../assets/heyou/reserve text.svg";
import heyouBarSvg from "../assets/heyou/heyyou bar.svg";
import heyouDiningSvg from "../assets/heyou/heyyou dining.svg";
import handGlassSvg from "../assets/heyou/hand glass.svg";

type Venue = "bar" | "dining";

interface Props {
  venue: Venue | null;
  venueError: boolean;
  barSection: "indoor" | "outdoor";
  onVenueSelect: (v: Venue) => void;
  onBarSectionSelect: (s: "indoor" | "outdoor") => void;
}

export function VenuePicker({
  venue,
  venueError,
  barSection,
  onVenueSelect,
  onBarSectionSelect,
}: Props) {
  return (
    <div className="relative w-full md:w-2/5 bg-[var(--hey-black)] px-5 py-8 md:px-10 md:py-12 border-b md:border-b-0 md:border-r border-white/10">
      <div className="max-w-xl mx-auto space-y-5">
        <img
          src={reserveTextSvg}
          alt="Reserve"
          className="w-full h-auto block"
        />

        {venueError && !venue && (
          <p className="text-[var(--hey-yellow)] text-xs font-bold">
            Please select a venue to continue.
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => onVenueSelect("bar")}
            className={`flex-1 text-left border-2 border-black p-4 transition-all duration-300 shadow-[4px_4px_0_#000] ${
              venue === "bar"
                ? "bg-[var(--hey-yellow)] -translate-y-1 shadow-[6px_6px_0_#000]"
                : "bg-[var(--hey-black)] hover:-translate-y-0.5"
            }`}
          >
            <div className="flex flex-col gap-2">
              <img src={heyouBarSvg} alt="Heyou Bar" className="w-full h-auto block" />
              <div
                className={`w-4 h-4 rounded-full border-2 border-black self-end transition-all duration-200 ${
                  venue === "bar" ? "bg-black" : "bg-transparent"
                }`}
              />

              {venue === "bar" && (
                <div className="flex gap-2 mt-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBarSectionSelect("indoor");
                    }}
                    className={`flex-1 py-2 text-xs font-bold border-2 border-black transition-all duration-200 ${
                      barSection === "indoor"
                        ? "bg-black text-[var(--hey-cream)]"
                        : "bg-white text-black opacity-60"
                    }`}
                  >
                    Indoor
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBarSectionSelect("outdoor");
                    }}
                    className={`flex-1 py-2 text-xs font-bold border-2 border-black transition-all duration-200 ${
                      barSection === "outdoor"
                        ? "bg-black text-[var(--hey-cream)]"
                        : "bg-white text-black opacity-60"
                    }`}
                  >
                    Outdoor
                  </button>
                </div>
              )}
            </div>
          </button>

          <button
            type="button"
            onClick={() => onVenueSelect("dining")}
            className={`flex-1 text-left border-2 border-black p-4 transition-all duration-300 shadow-[4px_4px_0_#000] ${
              venue === "dining"
                ? "bg-[var(--hey-yellow)] -translate-y-1 shadow-[6px_6px_0_#000]"
                : "bg-[var(--hey-black)] hover:-translate-y-0.5"
            }`}
          >
            <div className="flex flex-col gap-2">
              <img src={heyouDiningSvg} alt="Heyou Dining" className="w-full h-auto block" />
              <div
                className={`w-4 h-4 rounded-full border-2 border-black self-end transition-all duration-200 ${
                  venue === "dining" ? "bg-black" : "bg-transparent"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-[-40px] top-8 pointer-events-none z-10">
        <img
          src={handGlassSvg}
          alt=""
          className="w-auto h-[180px]"
        />
      </div>
    </div>
  );
}