import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Header1 as Header, BottomNav1 as BottomNav } from "@/components/Header1";
import { Footer } from "@/components/Footer";
import { VenuePicker } from "../components/VenuePicker";
import { ReservationForm } from "../components/ReservationForm";
import { ReservationConfirmation } from "../components/ReservationConfirmation";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const Route = createFileRoute("/reservation")({
validateSearch: (search: Record<string, unknown>) => ({
  venue: (search.venue as string) || undefined,
}),
  head: () => ({
    meta: [
      { title: "Reserve a Table — Heyou" },
      {
        name: "description",
        content: "Book a table at Heyou Bar or Heyou Dining, Bangalore.",
      },
    ],
  }),
  component: Reserve,
});

type Venue = "bar" | "dining";

function Reserve() {
  const search = useSearch({ from: "/reservation" });
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

  const allFilled = useMemo(() => {
    return (
      venue !== null &&
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      phone.trim().length > 0 &&
      guests !== "" &&
      date !== "" &&
      time !== ""
    );
  }, [venue, name, email, phone, guests, date, time]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!venue) {
      setVenueError(true);
      return;
    }
    if (!name.trim() || !email.trim() || !phone.trim() || !date || !time || !guests) return;

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
      bar_section: venue === "bar" ? barSection : null,
    } as any);

    setSaving(false);

    if (err) {
      setError(err.message || "Could not save. Please try again.");
      return;
    }

    // GTM: reservation conversion event (fires only on successful submit)
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "heyou_reservation_submit_success",
        form_name: "Heyou Reservation",
        page_path: window.location.pathname,
        venue,
        guests,
        reservation_date: date,
        reservation_time: time,
        bar_section: venue === "bar" ? barSection : null,
      });
    }

    try {
      const payload = {
        name,
        email,
        phone,
        venue,
        guests,
        date,
        time,
        occasion,
        notes,
        bar_section: venue === "bar" ? barSection : null,
      };

      await fetch(
        "https://mtwvsobgsxvjmoqjgpkr.supabase.co/functions/v1/send-reservation-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization":
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10d3Zzb2Jnc3h2am1vcWpncGtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3Mjg4MzYsImV4cCI6MjA5NjMwNDgzNn0.tiP2bM3xgznWt-B0RZa3FsBOQskD1whSILjCyn0I9m4",
          },
          body: JSON.stringify(payload),
        }
      );
    } catch {}

    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function resetForm() {
    setSubmitted(false);
    setVenue(null);
    setName("");
    setEmail("");
    setPhone("");
    setOccasion("");
    setNotes("");
    setDate("");
    setGuests("");
    setTime("");
  }

  if (submitted) {
    return (
      <ReservationConfirmation
        venue={venue!}
        guests={guests}
        date={date}
        time={time}
        name={name}
        email={email}
        phone={phone}
        occasion={occasion}
        notes={notes}
        onReset={resetForm}
      />
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden flex flex-col pb-16 md:pb-0">
      <Header active="/reservation" />

      <section className="flex flex-col md:flex-row flex-1">
        <VenuePicker
          venue={venue}
          venueError={venueError}
          barSection={barSection}
          onVenueSelect={(v) => {
            setVenue(v);
            setVenueError(false);
          }}
          onBarSectionSelect={setBarSection}
        />

        <ReservationForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          guests={guests}
          setGuests={setGuests}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          occasion={occasion}
          setOccasion={setOccasion}
          notes={notes}
          setNotes={setNotes}
          allFilled={allFilled}
          saving={saving}
          error={error}
          onSubmit={onSubmit}
        />
      </section>

      <Footer />
      <BottomNav />
    </main>
  );
}