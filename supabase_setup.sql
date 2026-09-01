-- ─────────────────────────────────────────────────────────────────────────────
-- VESCO SCIENCE — COMPLETE SUPABASE SETUP
-- Run this ONCE in: supabase.com/dashboard → your project → SQL Editor → Run
-- ─────────────────────────────────────────────────────────────────────────────

-- ── 1. Pages table ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.pages (
  id           uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  page_slug    text UNIQUE NOT NULL,
  content_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at   timestamptz DEFAULT now() NOT NULL,
  updated_at   timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anon read"   ON public.pages;
DROP POLICY IF EXISTS "Allow anon insert" ON public.pages;
DROP POLICY IF EXISTS "Allow anon update" ON public.pages;
DROP POLICY IF EXISTS "Allow anon delete" ON public.pages;

CREATE POLICY "Allow anon read"   ON public.pages FOR SELECT USING (true);
CREATE POLICY "Allow anon insert" ON public.pages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon update" ON public.pages FOR UPDATE USING (true);
CREATE POLICY "Allow anon delete" ON public.pages FOR DELETE USING (true);


-- ── 2. Images storage bucket ────────────────────────────────────────────────
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'images', 'images', true,
  10485760,  -- 10 MB per file
  ARRAY['image/jpeg','image/jpg','image/png','image/webp','image/gif','image/svg+xml']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 10485760;

DROP POLICY IF EXISTS "images_select" ON storage.objects;
DROP POLICY IF EXISTS "images_insert" ON storage.objects;
DROP POLICY IF EXISTS "images_update" ON storage.objects;
DROP POLICY IF EXISTS "images_delete" ON storage.objects;

CREATE POLICY "images_select" ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "images_insert" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images');
CREATE POLICY "images_update" ON storage.objects FOR UPDATE USING (bucket_id = 'images');
CREATE POLICY "images_delete" ON storage.objects FOR DELETE USING (bucket_id = 'images');
