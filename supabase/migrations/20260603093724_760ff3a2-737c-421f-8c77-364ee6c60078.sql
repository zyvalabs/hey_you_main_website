
-- Fix missing grants on reservations (this is why insert was failing)
GRANT INSERT ON public.reservations TO anon, authenticated;
GRANT SELECT ON public.reservations TO authenticated;
GRANT ALL ON public.reservations TO service_role;

-- App settings table for admin-configurable notification email
CREATE TABLE public.app_settings (
  id INT PRIMARY KEY DEFAULT 1,
  notification_email TEXT NOT NULL DEFAULT 'mdtanveer22@gmail.com',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);

GRANT SELECT ON public.app_settings TO anon, authenticated;
GRANT UPDATE, INSERT ON public.app_settings TO authenticated;
GRANT ALL ON public.app_settings TO service_role;

ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can read settings" ON public.app_settings FOR SELECT USING (true);
CREATE POLICY "authenticated can update settings" ON public.app_settings FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "authenticated can insert settings" ON public.app_settings FOR INSERT TO authenticated WITH CHECK (true);

INSERT INTO public.app_settings (id, notification_email) VALUES (1, 'mdtanveer22@gmail.com') ON CONFLICT (id) DO NOTHING;
