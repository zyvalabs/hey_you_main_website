import handGlass1Svg from '../assets/heyou/hand glass1.svg'

const TIMES = [
  "11:30am",
  "12:00pm","12:30pm","01:00pm","01:30pm","02:00pm","02:30pm","03:00pm","03:30pm",
  "04:00pm","04:30pm","05:00pm","05:30pm","06:00pm","06:30pm","07:00pm","07:30pm",
  "08:00pm","08:30pm","09:00pm","09:30pm","10:00pm","10:30pm","11:00pm","11:30pm",
];
const GUESTS = ["1","2","3","4","5","6","7","8","9+","Group of 10+","Group of 25+","Corporate Party","Party Group"];

interface Props {
  name: string; setName: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  phone: string; setPhone: (v: string) => void;
  guests: string; setGuests: (v: string) => void;
  date: string; setDate: (v: string) => void;
  time: string; setTime: (v: string) => void;
  occasion: string; setOccasion: (v: string) => void;
  notes: string; setNotes: (v: string) => void;
  allFilled: boolean;
  saving: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
}

export function ReservationForm({ name, setName, email, setEmail, phone, setPhone, guests, setGuests, date, setDate, time, setTime, occasion, setOccasion, notes, setNotes, allFilled, saving, error, onSubmit }: Props) {
  return (
    <div className="md:w-3/5 bg-[var(--hey-red)] flex flex-col justify-start md:justify-center px-6 py-8 md:px-10 md:py-12">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap');`}</style>
      <form onSubmit={onSubmit} className="space-y-4 w-full max-w-lg mx-auto">
        <h2 className="text-[var(--hey-cream)] text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Londrina Solid', cursive" }}>Your Details</h2>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Name" required>
            <Input value={name} onChange={(e) => setName(e.target.value.slice(0,100))} required placeholder="Full name" />
          </Field>
          <Field label="Email" required>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value.slice(0,255))} required placeholder="you@email.com" />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-3">
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

        <div className="grid grid-cols-2 gap-3">
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

        <Field label="Special Occasion?">
          <Select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value="">— None —</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </Select>
        </Field>

        <Field label="Special Requests (Optional)">
          <textarea value={notes} onChange={(e) => setNotes(e.target.value.slice(0,1000))} rows={2}
            className="w-full bg-[var(--hey-cream)] text-black border-2 border-black px-3 py-2.5 font-medium focus:outline-none focus:ring-4 focus:ring-[var(--hey-yellow)] text-sm resize-none"
            placeholder="Allergens, accessibility, anything else…" />
        </Field>

        {allFilled && (
          <div className="bg-[var(--hey-black)] border-2 border-white/20 p-4 text-xs text-[var(--hey-cream)] space-y-1.5 transition-all duration-300">
            <p className="text-sm text-[var(--hey-yellow)] mb-2" style={{ fontFamily: "'Londrina Solid', cursive" }}>Good to Know</p>
            <p>· Heyou Bar entry is 21 and over.</p>
            <p>· Heyou is non-smoking indoors.</p>
            <p>· Tell us about allergies or celebrations while booking.</p>
            <p>· Tables are held for 15 minutes after the reserved time.</p>
          </div>
        )}

        <div className="relative">
          <div className="pr-0 space-y-3">
            <button type="submit" disabled={saving}
              className="w-full bg-[var(--hey-yellow)] text-black px-8 py-4 rounded-full text-lg hover:bg-[var(--hey-cream)] transition-all duration-300 shadow-[6px_6px_0_#000] border-2 border-black disabled:opacity-60 hover:-translate-y-0.5 transform"
              style={{ fontFamily: "'Londrina Solid', cursive" }}>
              {saving ? "SAVING…" : "CONFIRM RESERVATION"}
            </button>
            <p className="text-xs text-[var(--hey-cream)]/60"><span className="text-[var(--hey-cream)]">*</span> Required fields</p>
            {error && <p className="text-center text-[var(--hey-yellow)] font-bold text-sm">{error}</p>}
          </div>
          <div className="absolute -right-80 top-30 bottom-0 flex items-center" style={{ pointerEvents: 'none' }}>
            <img src={handGlass1Svg} alt="" style={{ height: 'clamp(300px, 40vw, 600px)', width: 'auto', marginRight: 'clamp(-20px, -2vw, -40px)', marginTop: 'clamp(-200px, -25vw, -400px)' }} />
          </div>
        </div>

      </form>
    </div>
  );
}

function Field({ label, children, required = false }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs md:text-sm text-[var(--hey-yellow)] mb-1" style={{ fontFamily: "'Londrina Solid', cursive" }}>
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
      style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='black' d='M5 8l5 5 5-5z'/></svg>\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '20px', fontFamily: "'Londrina Solid', cursive" }} />
  );
}