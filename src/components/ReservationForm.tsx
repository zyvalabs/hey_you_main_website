import type { ChangeEvent, FormEvent } from "react";
import handGlass1Svg from "../assets/heyou/hand glass1.svg";

const TIMES = [
  "11:30am",
  "12:00pm",
  "12:30pm",
  "01:00pm",
  "01:30pm",
  "02:00pm",
  "02:30pm",
  "03:00pm",
  "03:30pm",
  "04:00pm",
  "04:30pm",
  "05:00pm",
  "05:30pm",
  "06:00pm",
  "06:30pm",
  "07:00pm",
  "07:30pm",
  "08:00pm",
  "08:30pm",
  "09:00pm",
  "09:30pm",
  "10:00pm",
  "10:30pm",
  "11:00pm",
  "11:30pm",
];

const GUESTS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9+",
  "Group of 10+",
  "Group of 25+",
  "Corporate Party",
  "Party Group",
];

type Props = {
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  guests: string;
  setGuests: (v: string) => void;
  date: string;
  setDate: (v: string) => void;
  time: string;
  setTime: (v: string) => void;
  occasion: string;
  setOccasion: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;
  allFilled: boolean;
  saving: boolean;
  error: string | null;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export function ReservationForm({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  guests,
  setGuests,
  date,
  setDate,
  time,
  setTime,
  occasion,
  setOccasion,
  notes,
  setNotes,
  allFilled,
  saving,
  error,
  onSubmit,
}: Props) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full md:w-3/5 bg-[var(--hey-red)] flex justify-center px-5 py-8 md:px-10 md:py-12">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap');`}</style>

      <form onSubmit={onSubmit} className="w-full max-w-xl space-y-4">
        <h2
          className="mb-2 text-2xl md:text-3xl text-[var(--hey-cream)]"
          style={{ fontFamily: "'Londrina Solid', cursive" }}
        >
          Your Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Field label="Name" required>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 100))}
              required
              placeholder="Full name"
            />
          </Field>

          <Field label="Email" required>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.slice(0, 255))}
              required
              placeholder="you@email.com"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Field label="Phone" required>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.slice(0, 20))}
              required
              placeholder="+91 98xxxxxxxx"
            />
          </Field>

          <Field label="Guests" required>
            <Select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            >
              <option value="">— Select —</option>
              {GUESTS.map((guest) => (
                <option key={guest} value={guest}>
                  {guest}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Field label="Date" required>
            <input
              type="date"
              required
              value={date}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDate(e.target.value)
              }
              min={today}
              className="w-full border-2 border-black bg-[var(--hey-cream)] px-3 py-2.5 text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)]"
            />
          </Field>

          <Field label="Time" required>
            <Select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">— Select —</option>
              {TIMES.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <Field label="Special Occasion?">
          <Select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="">— None —</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </Select>
        </Field>

        <Field label="Special Requests (Optional)">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value.slice(0, 1000))}
            rows={3}
            className="w-full resize-none border-2 border-black bg-[var(--hey-cream)] px-3 py-2.5 text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)]"
            placeholder="Allergens, accessibility, anything else…"
          />
        </Field>

        {allFilled && (
          <div className="space-y-1.5 border-2 border-white/20 bg-[var(--hey-black)] p-4 text-xs text-[var(--hey-cream)] transition-all duration-300">
            <p
              className="mb-2 text-sm text-[var(--hey-yellow)]"
              style={{ fontFamily: "'Londrina Solid', cursive" }}
            >
              Good to Know
            </p>
            <p>· Heyou Bar entry is 21 and over.</p>
            <p>· Heyou is non-smoking indoors.</p>
            <p>· Tell us about allergies or celebrations while booking.</p>
            <p>· Tables are held for 15 minutes after the reserved time.</p>
          </div>
        )}

        <div className="relative">
          <div className="space-y-3">
            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-full border-2 border-black bg-[var(--hey-yellow)] px-8 py-4 text-base md:text-lg text-black shadow-[6px_6px_0_#000] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--hey-cream)] disabled:opacity-60"
              style={{ fontFamily: "'Londrina Solid', cursive" }}
            >
              {saving ? "SAVING…" : "CONFIRM RESERVATION"}
            </button>

            <p className="text-xs text-[var(--hey-cream)]/60">
              <span className="text-[var(--hey-cream)]">*</span> Required fields
            </p>

            {error && (
              <p className="text-center text-sm font-bold text-[var(--hey-yellow)]">
                {error}
              </p>
            )}
          </div>

          <div className="pointer-events-none absolute right-[-180px] top-1/2 hidden -translate-y-1/2 xl:flex">
            <img src={handGlass1Svg} alt="" className="h-[420px] w-auto" />
          </div>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  children,
  required = false,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span
        className="mb-1 block text-xs md:text-sm text-[var(--hey-yellow)]"
        style={{ fontFamily: "'Londrina Solid', cursive" }}
      >
        {label}
        {required && <span className="ml-0.5 text-[var(--hey-cream)]">*</span>}
      </span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full border-2 border-black bg-[var(--hey-cream)] px-3 py-2.5 text-sm font-medium text-black transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)]"
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full cursor-pointer appearance-none border-2 border-black bg-[var(--hey-cream)] px-3 py-2.5 pr-12 text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='black' d='M5 8l5 5 5-5z'/></svg>\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 0.75rem center",
        backgroundSize: "20px",
        fontFamily: "'Londrina Solid', cursive",
      }}
    />
  );
}