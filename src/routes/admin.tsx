import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Heyou" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "Admin@123456";
const ADMIN_EMAIL = "admin@heyou.local";

type Reservation = {
  id: string;
  venue: string;
  guests: string;
  reservation_time: string;
  reservation_date: string;
  name: string;
  email: string;
  phone: string;
  occasion: string | null;
  notes: string | null;
  created_at: string;
};

function AdminPage() {
  const [session, setSession] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (loading) {
    return <main className="min-h-screen flex items-center justify-center text-[var(--hey-cream)]">Loading…</main>;
  }
  return (
    <main className="min-h-screen overflow-x-hidden">
      <header className="flex items-center justify-between px-5 md:px-10 py-5">
        <Link to="/" className="font-display text-2xl text-[var(--hey-cream)]">HEYOU</Link>
        <span className="font-display text-xl text-[var(--hey-yellow)]">ADMIN</span>
      </header>
      {session ? <Dashboard /> : <LoginForm />}
    </main>
  );
}

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      setErr("Invalid username or password.");
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
    });
    if (error) {
      // Bootstrap the admin account on first login.
      const { error: signUpErr } = await supabase.auth.signUp({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
      });
      if (signUpErr) {
        setBusy(false);
        setErr(signUpErr.message);
        return;
      }
      const { error: retryErr } = await supabase.auth.signInWithPassword({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
      });
      if (retryErr) {
        setBusy(false);
        setErr(retryErr.message);
        return;
      }
    }
    setBusy(false);
  }

  return (
    <section className="px-5 md:px-12 py-10">
      <form
        onSubmit={onSubmit}
        className="max-w-md mx-auto bg-[var(--hey-black)] border-2 border-black p-6 md:p-10 shadow-[10px_10px_0_#000] space-y-5 text-[var(--hey-cream)]"
      >
        <h1 className="font-display text-4xl text-[var(--hey-yellow)] text-center">Sign in</h1>
        <label className="block">
          <span className="font-display text-base text-[var(--hey-yellow)] mb-2 block">Username</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)]"
          />
        </label>
        <label className="block">
          <span className="font-display text-base text-[var(--hey-yellow)] mb-2 block">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)]"
          />
        </label>
        {err && <p className="text-center text-[var(--hey-yellow)] text-sm">{err}</p>}
        <button
          type="submit"
          disabled={busy}
          className="w-full font-display bg-[var(--hey-yellow)] text-black px-8 py-4 rounded-full text-lg hover:bg-[var(--hey-cream)] transition shadow-[6px_6px_0_#000] border-2 border-black disabled:opacity-60"
        >
          {busy ? "SIGNING IN…" : "SIGN IN"}
        </button>
      </form>
    </section>
  );
}

function Dashboard() {
  const [rows, setRows] = useState<Reservation[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [emailDraft, setEmailDraft] = useState("");
  const [savingEmail, setSavingEmail] = useState(false);
  const [emailMsg, setEmailMsg] = useState<string | null>(null);
  const [confirmOut, setConfirmOut] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  async function load() {
    const { data, error } = await supabase
      .from("reservations")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) setErr(error.message);
    else setRows(data as Reservation[]);
  }

  async function loadSettings() {
    const { data } = await supabase.from("app_settings").select("notification_email").eq("id", 1).maybeSingle();
    if (data?.notification_email) {
      setNotifyEmail(data.notification_email);
      setEmailDraft(data.notification_email);
    }
  }

  async function saveEmail(e: React.FormEvent) {
    e.preventDefault();
    setSavingEmail(true);
    setEmailMsg(null);
    const { error } = await supabase
      .from("app_settings")
      .upsert({ id: 1, notification_email: emailDraft.trim(), updated_at: new Date().toISOString() });
    setSavingEmail(false);
    if (error) setEmailMsg(error.message);
    else { setNotifyEmail(emailDraft.trim()); setEmailMsg("Saved!"); setTimeout(() => setEmailMsg(null), 2500); }
  }

  useEffect(() => {
    load();
    loadSettings();
  }, []);

  return (
    <section className="px-5 md:px-12 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--hey-cream)]">Reservations</h2>
          <div className="flex gap-3">
            <button
              onClick={load}
              className="font-display bg-[var(--hey-yellow)] text-black px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[var(--hey-cream)]"
            >
              REFRESH
            </button>
            <button
              onClick={() => setConfirmOut(true)}
              className="font-display bg-[var(--hey-red)] text-[var(--hey-cream)] px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0_#000]"
            >
              SIGN OUT
            </button>
          </div>
        </div>

        {/* Notification email config */}
        <form onSubmit={saveEmail} className="mb-6 bg-[var(--hey-black)] border-2 border-black shadow-[6px_6px_0_#000] p-5 md:p-6">
          <p className="font-display text-xl md:text-2xl text-[var(--hey-yellow)] mb-1">Notification email</p>
          <p className="text-[var(--hey-cream)]/70 text-sm mb-4">New reservation alerts go to this address. Currently: <strong className="text-[var(--hey-cream)]">{notifyEmail || "—"}</strong></p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={emailDraft}
              onChange={(e) => setEmailDraft(e.target.value)}
              placeholder="owner@heyou.com"
              className="flex-1 bg-[var(--hey-cream)] text-black border-2 border-black px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)]"
            />
            <button
              type="submit"
              disabled={savingEmail || emailDraft.trim() === notifyEmail}
              className="font-display bg-[var(--hey-yellow)] text-black px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[var(--hey-cream)] disabled:opacity-50"
            >
              {savingEmail ? "SAVING…" : "SAVE"}
            </button>
          </div>
          {emailMsg && <p className="text-[var(--hey-yellow)] text-sm mt-3">{emailMsg}</p>}
        </form>

        {err && <p className="text-[var(--hey-yellow)]">{err}</p>}
        {!rows && !err && <p className="text-[var(--hey-cream)]">Loading…</p>}
        {rows && rows.length === 0 && (
          <p className="text-[var(--hey-cream)] py-12 text-center">No reservations yet.</p>
        )}

        {rows && rows.length > 0 && (
          <div className="overflow-x-auto bg-[var(--hey-black)] border-2 border-black shadow-[8px_8px_0_#000]">
            <table className="w-full text-sm text-[var(--hey-cream)]">
              <thead className="bg-[var(--hey-red)] text-[var(--hey-cream)] font-display text-base">
                <tr>
                  <th className="text-left p-3">When</th>
                  <th className="text-left p-3">Venue</th>
                  <th className="text-left p-3">Guests</th>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Contact</th>
                  <th className="text-left p-3">Occasion</th>
                  <th className="text-left p-3">Notes</th>
                  <th className="text-left p-3">Booked</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-white/10 align-top">
                    <td className="p-3 whitespace-nowrap">{r.reservation_date} · {r.reservation_time}</td>
                    <td className="p-3 capitalize">{r.venue}</td>
                    <td className="p-3">{r.guests}</td>
                    <td className="p-3">{r.name}</td>
                    <td className="p-3">
                      <div>{r.email}</div>
                      <div className="text-white/60">{r.phone}</div>
                    </td>
                    <td className="p-3 capitalize">{r.occasion ?? "—"}</td>
                    <td className="p-3 max-w-xs">{r.notes ?? "—"}</td>
                    <td className="p-3 text-white/60 whitespace-nowrap">{new Date(r.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* SIGN-OUT CONFIRMATION */}
      {confirmOut && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-5" onClick={() => !signingOut && setConfirmOut(false)}>
          <div onClick={(e) => e.stopPropagation()} className="max-w-sm w-full bg-[var(--hey-cream)] border-2 border-black shadow-[10px_10px_0_#000] p-6 text-center">
            <h3 className="font-display text-3xl text-black">Sign out?</h3>
            <p className="text-black/80 mt-2 text-sm">You'll need to enter the admin password again to come back.</p>
            <div className="mt-6 flex gap-3 justify-center">
              <button
                onClick={() => setConfirmOut(false)}
                disabled={signingOut}
                className="font-display bg-white text-black px-5 py-2 rounded-full border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[var(--hey-yellow)]"
              >
                CANCEL
              </button>
              <button
                onClick={async () => { setSigningOut(true); await supabase.auth.signOut(); }}
                disabled={signingOut}
                className="font-display bg-[var(--hey-red)] text-[var(--hey-cream)] px-5 py-2 rounded-full border-2 border-black shadow-[4px_4px_0_#000] disabled:opacity-60"
              >
                {signingOut ? "SIGNING OUT…" : "YES, SIGN OUT"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}