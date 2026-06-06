import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/Reveal";
import logoImg from '../assets/heyou/logo.svg'
import footerImg from '../assets/heyou/Footer.svg'

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Heyou" },
      { name: "description", content: "Book a table at Heyou Bar or Heyou Dining, Bangalore." },
      { property: "og:title", content: "Reserve a Table — Heyou" },
      { property: "og:description", content: "Book a table at Heyou Bar or Heyou Dining, Bangalore." },
    ],
  }),
  component: Reserve,
});

const TIMES = [
  "12:00pm","12:30pm","01:00pm","01:30pm","02:00pm","02:30pm","03:00pm","03:30pm",
  "04:00pm","04:30pm","05:00pm","05:30pm","06:00pm","06:30pm","07:00pm","07:30pm",
  "08:00pm","08:30pm","09:00pm","09:30pm","10:00pm","10:30pm","11:00pm",
];
const GUESTS = ["1","2","3","4","5","6","7","8","9+"];
type Venue = "bar" | "dining";

function Reserve() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [venue, setVenue] = useState<Venue>("bar");
  const [barSection, setBarSection] = useState<"indoor" | "outdoor">("indoor");
  const [guests, setGuests] = useState("2");
  const [time, setTime] = useState("07:00pm");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !date) return;
    setSaving(true);
    setError(null);
    const { error: err } = await supabase.from("reservations").insert({
      venue, guests, reservation_time: time, reservation_date: date,
      name: name.trim(), email: email.trim(), phone: phone.trim(),
      occasion: occasion || null, notes: notes || null,
      bar_section: venue === "bar" ? barSection : null,
    });
    setSaving(false);
    if (err) { setError(err.message || "Could not save. Please try again."); return; }
    setSubmitted(true);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setSubmitted(false);
    setName(""); setEmail(""); setPhone(""); setOccasion(""); setNotes(""); setDate("");
  }

  // CONFIRMATION
  if (submitted) {
    const venueLabel = venue === "bar" ? "Heyou Bar" : "Heyou Dining";
    return (
      <main className="min-h-screen overflow-x-hidden">
        <header className="relative z-30 flex items-center justify-between px-5 py-4 md:px-10 backdrop-blur-sm bg-[var(--hey-red)]/90 sticky top-0 border-b border-white/10">
          <div className="w-8" />
          <Link to="/"><img src={logoImg} alt="Heyou" className="h-10 w-auto" /></Link>
          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-[var(--hey-cream)] hover:text-[var(--hey-yellow)] transition-colors" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>Home</Link>
        </header>
        <section className="px-5 md:px-12 py-12 md:py-20 flex items-center justify-center min-h-[80vh]">
          <Reveal variant="zoom" className="w-full max-w-2xl">
            <div className="bg-[var(--hey-yellow)] border-2 border-black p-8 md:p-12 shadow-[12px_12px_0_#000] text-center relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[var(--hey-red)] border-2 border-black shadow-[4px_4px_0_#000] flex items-center justify-center text-[var(--hey-cream)] text-3xl font-display animate-bounce">✓</div>
              <p className="font-bold uppercase tracking-widest text-sm text-[var(--hey-red)] mb-2">You're booked.</p>
              <h1 className="font-display text-4xl md:text-6xl text-black text-shadow-pop-sm leading-none">We've saved your<br/>table at Heyou.</h1>
              <p className="mt-5 text-black text-base md:text-lg font-medium">Table for <strong>{guests}</strong> at <strong>{venueLabel}</strong></p>
              <p className="text-black text-base font-medium">
                <strong>{new Date(date).toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}</strong> · <strong>{time}</strong>
              </p>
              <div className="mt-4 bg-[var(--hey-cream)] border-2 border-black p-4 text-left text-sm text-black space-y-1">
                <p><span className="font-bold">Name:</span> {name}</p>
                <p><span className="font-bold">Email:</span> {email}</p>
                <p><span className="font-bold">Phone:</span> {phone}</p>
                {occasion && <p className="capitalize"><span className="font-bold">Occasion:</span> {occasion}</p>}
                {notes && <p><span className="font-bold">Notes:</span> {notes}</p>}
              </div>
              <p className="mt-4 text-xs text-black/70">You'll receive a confirmation shortly. If your plan changes, please let us know.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/" className="font-display bg-black text-[var(--hey-cream)] px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[var(--hey-red)] transition-all duration-200">BACK TO HOME</Link>
                <button onClick={resetForm} className="font-display bg-[var(--hey-cream)] text-black px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0_#000] hover:bg-white transition-all duration-200">BOOK ANOTHER</button>
              </div>
            </div>
          </Reveal>
        </section>
        <footer><img src={footerImg} alt="Footer" className="w-full h-auto" /></footer>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden flex flex-col">

      {/* NAV */}
      <header className="relative z-30 flex items-center justify-between px-5 py-4 md:px-10 backdrop-blur-sm bg-[var(--hey-red)]/90 sticky top-0 border-b border-white/10 transition-all duration-300">
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
          <Link to="/" className="text-[var(--hey-cream)] hover:text-[var(--hey-yellow)] transition-colors duration-200 hover:-translate-y-0.5 transform inline-block">About</Link>
          <Link to="/drink-eat" className="text-[var(--hey-cream)] hover:text-[var(--hey-yellow)] transition-colors duration-200 hover:-translate-y-0.5 transform inline-block">Drink/Eat</Link>
          <Link to="/reserve" className="text-[var(--hey-yellow)]">Reserve</Link>
        </nav>
        <div className="md:hidden w-8" />
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/"><img src={logoImg} alt="Heyou" className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300" /></Link>
        </div>
        <button aria-label="menu" onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-2 group z-40 relative">
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-5'}`} />
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-7 bg-[var(--hey-cream)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-5'}`} />
        </button>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-20 bg-[var(--hey-black)]/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <Link to="/" onClick={() => setMenuOpen(false)} className="font-display text-[var(--hey-cream)] text-5xl hover:text-[var(--hey-yellow)] transition-all duration-200">About</Link>
        <Link to="/drink-eat" onClick={() => setMenuOpen(false)} className="font-display text-[var(--hey-cream)] text-5xl hover:text-[var(--hey-yellow)] transition-all duration-200">Drink/Eat</Link>
        <Link to="/reserve" onClick={() => setMenuOpen(false)} className="font-display text-[var(--hey-yellow)] text-5xl">Reserve</Link>
      </div>

      {/* MAIN CONTENT — two col on desktop */}
      <div className="flex flex-col md:flex-row flex-1 min-h-[calc(100vh-64px)]">

        {/* LEFT — venue picker */}
        <div className="md:w-2/5 bg-[var(--hey-black)] flex flex-col justify-center px-6 py-8 md:px-10 md:py-12 gap-6 border-r-2 border-white/10">
          <div>
            <h1 className="font-display text-[var(--hey-cream)] text-shadow-pop-sm text-4xl md:text-6xl leading-[0.95]">Reserve</h1>
            <p className="mt-2 text-[var(--hey-cream)] text-sm md:text-base font-medium opacity-80" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
              Pick your floor. Pick your hour.<br/>We'll save you a table.
            </p>
          </div>

          {/* Bar card */}
          <button
            type="button"
            onClick={() => setVenue("bar")}
            className={`text-left border-2 border-black p-5 transition-all duration-300 shadow-[4px_4px_0_#000] w-full group ${venue === "bar" ? "bg-[var(--hey-yellow)] -translate-y-1 shadow-[6px_6px_0_#000]" : "bg-[var(--hey-red)] hover:-translate-y-0.5"}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-black">HEYOU Bar</h3>
                <ul className="mt-2 space-y-0.5 text-xs md:text-sm text-black font-medium">
                  <li>· 21 and over</li>
                  <li>· Ground floor. Faster, louder, walk-in friendly.</li>
                </ul>
                {venue === "bar" && (
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setBarSection("indoor"); }}
                      className={`px-3 py-1 text-xs font-bold border-2 border-black transition-all duration-200 ${barSection === "indoor" ? "bg-black text-[var(--hey-cream)]" : "bg-white text-black"}`}
                    >Indoor</button>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setBarSection("outdoor"); }}
                      className={`px-3 py-1 text-xs font-bold border-2 border-black transition-all duration-200 ${barSection === "outdoor" ? "bg-black text-[var(--hey-cream)]" : "bg-white text-black"}`}
                    >Outdoor</button>
                  </div>
                )}
              </div>
              <div className={`w-5 h-5 rounded-full border-2 border-black mt-1 flex-shrink-0 transition-all duration-200 ${venue === "bar" ? "bg-black" : "bg-transparent"}`} />
            </div>
          </button>

          {/* Dining card */}
          <button
            type="button"
            onClick={() => setVenue("dining")}
            className={`text-left border-2 border-black p-5 transition-all duration-300 shadow-[4px_4px_0_#000] w-full group ${venue === "dining" ? "bg-[var(--hey-yellow)] -translate-y-1 shadow-[6px_6px_0_#000]" : "bg-[var(--hey-cream)] hover:-translate-y-0.5"}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-black">HEYOU Dining</h3>
                <ul className="mt-2 space-y-0.5 text-xs md:text-sm text-black font-medium">
                  <li>· First floor</li>
                  <li>· Table-led service for groups, families,</li>
                  <li>&nbsp;&nbsp;team dinners, and meals that take their time.</li>
                </ul>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 border-black mt-1 flex-shrink-0 transition-all duration-200 ${venue === "dining" ? "bg-black" : "bg-transparent"}`} />
            </div>
          </button>

          {/* Good to know */}
          <div className="bg-[var(--hey-red)]/30 border border-white/20 p-4 text-xs text-[var(--hey-cream)] space-y-1.5 rounded-sm">
            <p className="font-display text-sm text-[var(--hey-yellow)] mb-2">Good to Know</p>
            <p>· Heyou Bar entry is 21 and over.</p>
            <p>· Heyou is non-smoking indoors.</p>
            <p>· Tell us about allergies or celebrations while booking.</p>
            <p>· Tables are held for 15 minutes after the reserved time.</p>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="md:w-3/5 bg-[var(--hey-red)] flex flex-col justify-center px-6 py-8 md:px-10 md:py-12">
          <form onSubmit={onSubmit} className="space-y-4 w-full max-w-lg mx-auto">
            <h2 className="font-display text-[var(--hey-cream)] text-2xl md:text-3xl mb-2">Your Details</h2>

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Name">
                <Input value={name} onChange={(e) => setName(e.target.value.slice(0,100))} required placeholder="Full name" />
              </Field>
              <Field label="Email">
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value.slice(0,255))} required placeholder="you@email.com" />
              </Field>
            </div>

            {/* Phone + Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Phone">
                <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value.slice(0,20))} required placeholder="+91 98xxxxxxxx" />
              </Field>
              <Field label="Guests">
                <Select value={guests} onChange={(e) => setGuests(e.target.value)}>
                  {GUESTS.map((g) => <option key={g} value={g}>{g}</option>)}
                </Select>
              </Field>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Date">
                <input
                  type="date" required value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-3 py-2.5 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)] text-sm"
                />
              </Field>
              <Field label="Time">
                <Select value={time} onChange={(e) => setTime(e.target.value)}>
                  {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                </Select>
              </Field>
            </div>

            {/* Occasion */}
            <Field label="Special Occasion?">
              <Select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="">— None —</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </Select>
            </Field>

            {/* Notes */}
            <Field label="Special Requests (Optional)">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value.slice(0,1000))}
                rows={2}
                className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-3 py-2.5 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)] text-sm resize-none"
                placeholder="Allergens, accessibility, anything else…"
              />
            </Field>

            <button
              type="submit"
              disabled={saving}
              className="w-full font-display bg-[var(--hey-yellow)] text-black px-8 py-4 rounded-full text-lg hover:bg-[var(--hey-cream)] transition-all duration-300 shadow-[6px_6px_0_#000] border-2 border-black disabled:opacity-60 hover:-translate-y-0.5 transform"
            >
              {saving ? "SAVING…" : "CONFIRM RESERVATION"}
            </button>

            {error && <p className="text-center text-[var(--hey-yellow)] font-bold text-sm">{error}</p>}
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer><img src={footerImg} alt="Footer" className="w-full h-auto" /></footer>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-display text-xs md:text-sm text-[var(--hey-yellow)] mb-1">{label}</span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-3 py-2.5 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)] transition-all duration-200 text-sm"
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-3 py-2.5 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)] appearance-none cursor-pointer text-sm"
      style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='black' d='M5 8l5 5 5-5z'/></svg>\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '20px' }}
    />
  );
}