import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { Header, BottomNav } from "@/components/Header";

export const Route = createFileRoute("/reserve")({
  validateSearch: (search: Record<string, unknown>) => ({
    venue: (search.venue as string) || null,
  }),
  head: () => ({
    meta: [
      { title: "Reserve a Table — Heyou" },
      { name: "description", content: "Book a table at Heyou Bar or Heyou Dining, Bangalore." },
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
  const search = useSearch({ from: "/reserve" });
  const [venue, setVenue] = useState<Venue | null>((search.venue as Venue) || null);
  const [barSection, setBarSection] = useState<"indoor" | "outdoor">("indoor");
  const [guests, setGuests] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [venueError, setVenueError] = useState(false);

  // Show Good to Know only when all required fields filled
  const allFilled = useMemo(() => {
    return venue !== null &&
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      phone.trim().length > 0 &&
      guests !== "" &&
      date !== "" &&
      time !== "";
  }, [venue, name, email, phone, guests, date, time]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!venue) { setVenueError(true); return; }
    if (!name.trim() || !email.trim() || !phone.trim() || !date || !time || !guests) return;
    setSaving(true);
    setError(null);
    const { error: err } = await supabase.from("reservations").insert({
      venue, guests, reservation_time: time, reservation_date: date,
      name: name.trim(), email: email.trim(), phone: phone.trim(),
      occasion: occasion || null, notes: notes || null,
      bar_section: (venue === "bar" ? barSection : null) as string | null,
    } as any);
    setSaving(false);
    if (err) { setError(err.message || "Could not save. Please try again."); return; }
    setSubmitted(true);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setSubmitted(false);
    setVenue(null); setName(""); setEmail(""); setPhone("");
    setOccasion(""); setNotes(""); setDate(""); setGuests(""); setTime("");
  }

  // CONFIRMATION
  if (submitted) {
    const venueLabel = venue === "bar" ? "Heyou Bar" : "Heyou Dining";
    return (
      <main className="min-h-screen overflow-x-hidden pb-16 md:pb-0">
        <Header active="" />
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
                <Link to="/home" className="font-display bg-black text-[var(--hey-cream)] px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[var(--hey-red)] transition-all duration-200">BACK TO HOME</Link>
                <button onClick={resetForm} className="font-display bg-[var(--hey-cream)] text-black px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0_#000] hover:bg-white transition-all duration-200">BOOK ANOTHER</button>
              </div>
            </div>
          </Reveal>
        </section>
        <Footer />
        <BottomNav />
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden flex flex-col pb-16 md:pb-0">

      <Header active="/reserve" />

      {/* MAIN — two col desktop */}
      <div className="flex flex-col md:flex-row flex-1">

        {/* LEFT — venue picker */}
        <div className="md:w-2/5 bg-[var(--hey-black)] flex flex-col justify-center px-6 py-8 md:px-10 md:py-12 gap-5 border-r border-white/10">
          <div>
            <h1 className="font-display text-[var(--hey-cream)] text-shadow-pop-sm text-4xl md:text-5xl leading-[0.95]">Reserve</h1>
            <p className="mt-2 text-[var(--hey-cream)]/70 text-sm font-medium" style={{ fontFamily: "'Londrina Solid', sans-serif" }}>
              Pick your floor. Pick your hour.<br/>We'll save you a table.
            </p>
          </div>

          {/* Venue error */}
          {venueError && !venue && (
            <p className="text-[var(--hey-yellow)] text-xs font-bold">Please select a venue to continue.</p>
          )}

          {/* BAR CARD */}
          <button type="button" onClick={() => { setVenue("bar"); setVenueError(false); }}
            className={`text-left border-2 border-black p-5 transition-all duration-300 shadow-[4px_4px_0_#000] w-full ${venue === "bar" ? "bg-[var(--hey-yellow)] -translate-y-1 shadow-[6px_6px_0_#000]" : "bg-[var(--hey-red)] hover:-translate-y-0.5"}`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl text-black">HEYOU Bar</h3>
                <ul className="mt-2 space-y-0.5 text-xs md:text-sm text-black font-medium">
                  <li>· 21 and over</li>
                  <li>· Ground floor. Faster, louder, walk-in friendly.</li>
                </ul>
                {venue === "bar" && (
                  <div className="mt-3 flex gap-2">
                    <button type="button" onClick={(e) => { e.stopPropagation(); setBarSection("indoor"); }}
                      className={`px-3 py-1 text-xs font-bold border-2 border-black transition-all duration-200 ${barSection === "indoor" ? "bg-black text-[var(--hey-cream)]" : "bg-white text-black"}`}>
                      Indoor
                    </button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setBarSection("outdoor"); }}
                      className={`px-3 py-1 text-xs font-bold border-2 border-black transition-all duration-200 ${barSection === "outdoor" ? "bg-black text-[var(--hey-cream)]" : "bg-white text-black"}`}>
                      Outdoor
                    </button>
                  </div>
                )}
              </div>
              <div className={`w-5 h-5 rounded-full border-2 border-black mt-1 flex-shrink-0 transition-all duration-200 ${venue === "bar" ? "bg-black" : "bg-transparent"}`} />
            </div>
          </button>

          {/* DINING CARD */}
          <button type="button" onClick={() => { setVenue("dining"); setVenueError(false); }}
            className={`text-left border-2 border-black p-5 transition-all duration-300 shadow-[4px_4px_0_#000] w-full ${venue === "dining" ? "bg-[var(--hey-yellow)] -translate-y-1 shadow-[6px_6px_0_#000]" : "bg-[var(--hey-cream)] hover:-translate-y-0.5"}`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl text-black">HEYOU Dining</h3>
                <ul className="mt-2 space-y-0.5 text-xs md:text-sm text-black font-medium">
                  <li>· First floor</li>
                  <li>· Table-led service for groups, families, team dinners.</li>
                </ul>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 border-black mt-1 flex-shrink-0 transition-all duration-200 ${venue === "dining" ? "bg-black" : "bg-transparent"}`} />
            </div>
          </button>
        </div>

        {/* RIGHT — form */}
        <div className="md:w-3/5 bg-[var(--hey-red)] flex flex-col justify-center px-6 py-8 md:px-10 md:py-12">
          <form onSubmit={onSubmit} className="space-y-4 w-full max-w-lg mx-auto">
            <h2 className="font-display text-[var(--hey-cream)] text-2xl md:text-3xl mb-2">Your Details</h2>

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Name" required>
                <Input value={name} onChange={(e) => setName(e.target.value.slice(0,100))} required placeholder="Full name" />
              </Field>
              <Field label="Email" required>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value.slice(0,255))} required placeholder="you@email.com" />
              </Field>
            </div>

            {/* Phone + Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Phone" required>
                <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value.slice(0,20))} required placeholder="+91 98xxxxxxxx" />
              </Field>
              <Field label="Guests" required>
                <Select value={guests} onChange={(e) => setGuests(e.target.value)} required>
                  <option value="">— Select —</option>
                  {GUESTS.map((g) => <option key={g} value={g}>{g}</option>)}
                </Select>
              </Field>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Date" required>
                <input type="date" required value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-3 py-2.5 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)] text-sm" />
              </Field>
              <Field label="Time" required>
                <Select value={time} onChange={(e) => setTime(e.target.value)} required>
                  <option value="">— Select —</option>
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
              <textarea value={notes} onChange={(e) => setNotes(e.target.value.slice(0,1000))} rows={2}
                className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-3 py-2.5 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)] text-sm resize-none"
                placeholder="Allergens, accessibility, anything else…" />
            </Field>

            {/* GOOD TO KNOW — only shows when all filled */}
            {allFilled && (
              <div className="bg-[var(--hey-black)] border-2 border-white/20 p-4 text-xs text-[var(--hey-cream)] space-y-1.5 transition-all duration-300">
                <p className="font-display text-sm text-[var(--hey-yellow)] mb-2">Good to Know</p>
                <p>· Heyou Bar entry is 21 and over.</p>
                <p>· Heyou is non-smoking indoors.</p>
                <p>· Tell us about allergies or celebrations while booking.</p>
                <p>· Tables are held for 15 minutes after the reserved time.</p>
              </div>
            )}

            <button type="submit" disabled={saving}
              className="w-full font-display bg-[var(--hey-yellow)] text-black px-8 py-4 rounded-full text-lg hover:bg-[var(--hey-cream)] transition-all duration-300 shadow-[6px_6px_0_#000] border-2 border-black disabled:opacity-60 hover:-translate-y-0.5 transform">
              {saving ? "SAVING…" : "CONFIRM RESERVATION"}
            </button>

            <p className="text-xs text-[var(--hey-cream)]/60"><span className="text-[var(--hey-cream)]">*</span> Required fields</p>
            {error && <p className="text-center text-[var(--hey-yellow)] font-bold text-sm">{error}</p>}
          </form>
        </div>
      </div>

      <Footer />
      <BottomNav />
    </main>
  );
}

function Field({ label, children, required = false }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="block font-display text-xs md:text-sm text-[var(--hey-yellow)] mb-1">
        {label}{required && <span className="text-[var(--hey-cream)] ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props}
      className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-3 py-2.5 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)] transition-all duration-200 text-sm" />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props}
      className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-3 py-2.5 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)] appearance-none cursor-pointer text-sm"
      style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='black' d='M5 8l5 5 5-5z'/></svg>\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '20px' }} />
  );
}