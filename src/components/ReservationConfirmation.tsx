import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { Header, BottomNav } from "@/components/Header";

interface Props {
  venue: "bar" | "dining";
  guests: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  occasion: string;
  notes: string;
  onReset: () => void;
}

export function ReservationConfirmation({ venue, guests, date, time, name, email, phone, occasion, notes, onReset }: Props) {
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
              <button onClick={onReset} className="font-display bg-[var(--hey-cream)] text-black px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0_#000] hover:bg-white transition-all duration-200">BOOK ANOTHER</button>
            </div>
          </div>
        </Reveal>
      </section>
      <Footer />
      <BottomNav />
    </main>
  );
}