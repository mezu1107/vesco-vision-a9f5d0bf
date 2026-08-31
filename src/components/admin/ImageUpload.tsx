import { useState, useRef } from "react";
import { Upload, Link2, X, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Props {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export function ImageUpload({ value, onChange, label = "Image" }: Props) {
  const [tab, setTab] = useState<"upload" | "url">("upload");
  const [urlInput, setUrlInput] = useState(value.startsWith("http") ? value : "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setUploading(true);
    setError("");
    try {
      // Try Supabase first
      const ext = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { data, error: upErr } = await supabase.storage
        .from("images")
        .upload(fileName, file, { upsert: true });

      if (data && !upErr) {
        const { data: pub } = supabase.storage.from("images").getPublicUrl(fileName);
        onChange(pub.publicUrl);
      } else {
        // Fallback: create a local object URL (works without Supabase)
        const localUrl = URL.createObjectURL(file);
        onChange(localUrl);
      }
    } catch {
      // Last resort fallback
      const localUrl = URL.createObjectURL(file);
      onChange(localUrl);
    }
    setUploading(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleFile(file);
  };

  const handleUrlApply = () => {
    if (urlInput.trim()) {
      onChange(urlInput.trim());
      setError("");
    } else {
      setError("Please enter a valid URL");
    }
  };

  const isPreviewable = value && (value.startsWith("http") || value.startsWith("blob:") || value.startsWith("/") || value.startsWith("data:"));

  return (
    <div className="space-y-3">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</span>

      {/* Preview */}
      {isPreviewable && (
        <div className="relative group rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
          <img src={value} alt="preview" className="w-full h-40 object-cover" />
          <button
            onClick={() => onChange("")}
            className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border border-slate-200 rounded-lg overflow-hidden text-xs font-semibold">
        {(["upload", "url"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 flex items-center justify-center gap-1.5 transition ${
              tab === t ? "bg-slate-800 text-white" : "bg-white text-slate-500 hover:bg-slate-50"
            }`}
          >
            {t === "upload" ? <Upload className="w-3 h-3" /> : <Link2 className="w-3 h-3" />}
            {t === "upload" ? "Upload File" : "Paste URL"}
          </button>
        ))}
      </div>

      {tab === "upload" && (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileRef.current?.click()}
          className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center cursor-pointer hover:border-teal hover:bg-teal/5 transition"
        >
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
          {uploading ? (
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <span className="w-5 h-5 border-2 border-teal border-t-transparent rounded-full animate-spin" />
              <span className="text-xs">Uploading…</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <ImageIcon className="w-6 h-6" />
              <span className="text-xs">Drop image here or <span className="text-teal font-semibold">browse</span></span>
              <span className="text-[10px] text-slate-300">PNG, JPG, WEBP, GIF</span>
            </div>
          )}
        </div>
      )}

      {tab === "url" && (
        <div className="flex gap-2">
          <input
            type="url"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUrlApply()}
            placeholder="https://example.com/image.jpg"
            className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
          />
          <button
            onClick={handleUrlApply}
            className="bg-teal text-[#05231f] text-xs font-bold px-4 py-2 rounded-lg hover:bg-teal/85 transition"
          >
            Apply
          </button>
        </div>
      )}

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
