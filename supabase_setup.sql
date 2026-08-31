-- Create the pages table
CREATE TABLE IF NOT EXISTS public.pages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  page_slug text UNIQUE NOT NULL,
  content_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Allow all access for the admin panel, MVP version. You can restrict this later)
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous read access" ON public.pages FOR SELECT USING (true);
CREATE POLICY "Allow anonymous insert access" ON public.pages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous update access" ON public.pages FOR UPDATE USING (true);
CREATE POLICY "Allow anonymous delete access" ON public.pages FOR DELETE USING (true);

-- Create a storage bucket for images
INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for the bucket
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "Allow Uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images');
CREATE POLICY "Allow Updates" ON storage.objects FOR UPDATE USING (bucket_id = 'images');
CREATE POLICY "Allow Deletes" ON storage.objects FOR DELETE USING (bucket_id = 'images');
