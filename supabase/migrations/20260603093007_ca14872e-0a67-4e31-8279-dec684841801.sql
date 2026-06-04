
CREATE TABLE public.reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  venue text NOT NULL,
  guests text NOT NULL,
  reservation_time text NOT NULL,
  reservation_date date NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  occasion text,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.reservations TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.reservations TO authenticated;
GRANT ALL ON public.reservations TO service_role;

ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can insert reservation"
  ON public.reservations FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "authenticated can read reservations"
  ON public.reservations FOR SELECT
  TO authenticated
  USING (true);
