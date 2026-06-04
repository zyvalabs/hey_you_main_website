import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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
  const [venue, setVenue] = useState<Venue>("bar");
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
      venue,
      guests,
      reservation_time: time,
      reservation_date: date,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      occasion: occasion || null,
      notes: notes || null,
    });
    setSaving(false);
    if (err) {
      setError(err.message || "Could not save your reservation. Please try again.");
      return;
    }
    setSubmitted(true);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setSubmitted(false);
    setName(""); setEmail(""); setPhone(""); setOccasion(""); setNotes(""); setDate("");
  }

  if (submitted) {
    const venueLabel = venue === "bar" ? "Heyou Bar" : "Heyou Dining";
    return (
      <main className="min-h-screen overflow-x-hidden">
        <header className="relative z-20 flex items-center justify-between px-5 py-5 md:px-10">
          <Link to="/" className="font-display text-2xl md:text-3xl text-[var(--hey-cream)]">HEYOU</Link>
          <Link to="/" className="text-xs md:text-sm font-bold uppercase tracking-wide text-[var(--hey-cream)] hover:text-[var(--hey-yellow)]">Home</Link>
        </header>
        <section className="px-5 md:px-12 py-12 md:py-20">
          <div className="max-w-2xl mx-auto bg-[var(--hey-yellow)] border-2 border-black p-8 md:p-12 shadow-[12px_12px_0_#000] text-center relative">
            <div className="absolute -top-6 -right-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--hey-red)] border-2 border-black shadow-[4px_4px_0_#000] flex items-center justify-center text-[var(--hey-cream)] text-3xl md:text-4xl font-display animate-bounce">✓</div>
            <p className="font-bold uppercase tracking-widest text-sm text-[var(--hey-red)]">Confirmed!</p>
            <h1 className="font-display text-5xl md:text-7xl text-black text-shadow-pop-sm leading-none mt-3">See you,<br/>{name.split(" ")[0]}!</h1>
            <p className="mt-6 text-black text-lg md:text-xl">
              Table for <strong>{guests}</strong> at <strong>{venueLabel}</strong>
            </p>
            <p className="mt-1 text-black text-lg md:text-xl">
              <strong>{new Date(date).toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}</strong> · <strong>{time}</strong>
            </p>
            <div className="mt-6 bg-[var(--hey-cream)] border-2 border-black p-4 text-left text-sm md:text-base text-black space-y-1">
              <p><span className="font-bold">Name:</span> {name}</p>
              <p><span className="font-bold">Email:</span> {email}</p>
              <p><span className="font-bold">Phone:</span> {phone}</p>
              {occasion && <p className="capitalize"><span className="font-bold">Occasion:</span> {occasion}</p>}
              {notes && <p><span className="font-bold">Notes:</span> {notes}</p>}
            </div>
            <p className="mt-6 text-sm text-black/80">A confirmation will be sent to <strong>{email}</strong>. Tables are held 15 minutes past your slot.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/" className="font-display bg-black text-[var(--hey-cream)] px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[var(--hey-red)] transition">BACK TO HOME</Link>
              <button onClick={resetForm} className="font-display bg-[var(--hey-cream)] text-black px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0_#000] hover:bg-white transition">BOOK ANOTHER</button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="relative z-20 flex items-center justify-between px-5 py-5 md:px-10">
        <nav className="flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-wide text-[var(--hey-cream)]">
          <Link to="/" className="hover:text-[var(--hey-yellow)]">About</Link>
          <a href="#" className="hover:text-[var(--hey-yellow)]">Drink/Eat</a>
          <Link to="/reserve" className="text-[var(--hey-yellow)]">Reserve</Link>
        </nav>
        <Link to="/" className="font-display text-2xl md:text-3xl text-[var(--hey-cream)] absolute left-1/2 -translate-x-1/2">HEYOU</Link>
        <button aria-label="menu" className="flex flex-col gap-1.5 p-2">
          <span className="block h-0.5 w-7 bg-[var(--hey-cream)]" />
          <span className="block h-0.5 w-7 bg-[var(--hey-cream)]" />
        </button>
      </header>

      {/* HERO */}
      <section className="px-5 md:px-12 pt-4 pb-10 md:pb-16 text-center">
        <h1 className="font-display text-[var(--hey-cream)] text-shadow-pop leading-[0.95] text-[16vw] md:text-[9vw]">
          Reserve
        </h1>
        <p className="mt-4 text-[var(--hey-cream)] max-w-xl mx-auto text-base md:text-lg">
          Pick your floor, pick your hour. We'll save the table.
        </p>
      </section>

      {/* VENUE PICKER */}
      <section className="px-5 md:px-12 pb-8">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-5">
          <VenueCard
            active={venue === "bar"}
            onClick={() => setVenue("bar")}
            title="Heyou Bar"
            sub="Indoor / Outdoor"
            details={["Ground floor", "21 and over", "Faster, louder, walk-in friendly"]}
            bg="var(--hey-yellow)"
          />
          <VenueCard
            active={venue === "dining"}
            onClick={() => setVenue("dining")}
            title="Heyou Dining"
            sub="First floor"
            details={["Table-led service", "Built for groups & families", "Dinner that takes its time"]}
            bg="var(--hey-cream)"
          />
        </div>
      </section>

      {/* FORM */}
      <section className="px-5 md:px-12 pb-20">
        <form
          onSubmit={onSubmit}
          className="max-w-3xl mx-auto bg-[var(--hey-black)] border-2 border-black p-6 md:p-10 shadow-[10px_10px_0_#000] space-y-6 text-[var(--hey-cream)]"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Number of Guests">
              <Select value={guests} onChange={(e) => setGuests(e.target.value)}>
                {GUESTS.map((g) => <option key={g} value={g}>{g}</option>)}
              </Select>
            </Field>
            <Field label="Reservation Time">
              <Select value={time} onChange={(e) => setTime(e.target.value)}>
                {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
              </Select>
            </Field>
          </div>

          <Field label="Reservation Date">
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)]"
            />
          </Field>

          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Your Name">
              <Input value={name} onChange={(e) => setName(e.target.value.slice(0,100))} required placeholder="Full name" />
            </Field>
            <Field label="Email">
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value.slice(0,255))} required placeholder="you@email.com" />
            </Field>
          </div>

          <Field label="Phone Number">
            <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value.slice(0,20))} required placeholder="+91 98xxxxxxxx" />
          </Field>

          <Field label="Is it a Special Occasion?">
            <Select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option value="">— Please choose an option —</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </Select>
          </Field>

          <Field label="Special Requests (Optional)">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value.slice(0,1000))}
              rows={4}
              className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)]"
              placeholder="Allergens, accessibility, anything else…"
            />
          </Field>

          {/* House rules */}
          <div className="bg-[var(--hey-red)] border-2 border-black p-4 text-sm leading-relaxed">
            <p className="font-display text-lg mb-2 text-[var(--hey-yellow)]">A few serious slices:</p>
            <ul className="space-y-1 list-disc pl-5">
              <li>Bar is 21 and over. Carry a valid ID.</li>
              <li>Heyou is a non-smoking venue indoors.</li>
              <li>Birthday & anniversary surprises welcome — let us know in advance.</li>
              <li>Tell us about allergens here so the kitchen can plan around them.</li>
              <li>Tables held for 15 minutes past your slot.</li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full font-display bg-[var(--hey-yellow)] text-black px-8 py-5 rounded-full text-xl hover:bg-[var(--hey-cream)] transition shadow-[6px_6px_0_#000] border-2 border-black disabled:opacity-60"
          >
            {saving ? "SAVING…" : "CONFIRM RESERVATION"}
          </button>

          {error && <p className="text-center text-[var(--hey-yellow)] font-bold">{error}</p>}

        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--hey-black)] text-[var(--hey-cream)] px-5 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-xs md:text-sm max-w-[18rem]">No. 18 Ramanashree, Mahatma Gandhi Road, Ashok Nagar, Bangalore, India 560001</p>
        <h4 className="font-display text-3xl md:text-4xl text-[var(--hey-red)] text-shadow-pop-sm">HEYOU</h4>
        <p className="text-xs md:text-sm">Follow us on instagram:<br/><a href="#" className="font-bold text-[var(--hey-yellow)]">@heyou.letsgo</a></p>
      </footer>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-display text-base md:text-lg text-[var(--hey-yellow)] mb-2">{label}</span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)]"
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)] appearance-none cursor-pointer bg-[length:20px] bg-no-repeat bg-[right_1rem_center]"
      style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='black' d='M5 8l5 5 5-5z'/></svg>\")" }}
    />
  );
}

function VenueCard({
  active, onClick, title, sub, details, bg,
}: {
  active: boolean; onClick: () => void; title: string; sub: string; details: string[]; bg: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ background: bg }}
      className={`text-left border-2 border-black p-5 md:p-6 transition shadow-[6px_6px_0_#000] ${active ? "ring-4 ring-[var(--hey-yellow)] -translate-y-1" : "hover:-translate-y-1"}`}
    >
      <h3 className="font-display text-2xl md:text-3xl text-black">{title}</h3>
      <p className="font-bold text-sm md:text-base text-[var(--hey-red)] uppercase tracking-wide">{sub}</p>
      <ul className="mt-3 space-y-1 text-sm md:text-base text-black font-medium">
        {details.map((d) => <li key={d}>· {d}</li>)}
      </ul>
    </button>
  );
}