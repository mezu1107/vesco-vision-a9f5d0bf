import { useState, useRef } from "react";
import { Upload, Link2, X, Image as ImageIcon, AlertTriangle, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Props {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export function ImageUpload({ value, onChange, label = "Image" }: Props) {
  // Default to URL tab — always works without Supabase config
  const [tab, setTab] = useState<"upload" | "url">("url");
  const [urlInput, setUrlInput] = useState(value.startsWith("http") ? value : "");
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "warn" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setUploading(true);
    setUploadStatus("idle");
    setStatusMsg("");

    try {
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      // ── Try Supabase Storage ──────────────────────────────────────────
      const { data, error: upErr } = await supabase.storage
        .from("images")
        .upload(fileName, file, { upsert: true });

      if (data && !upErr) {
        // ✅ Supabase worked — get permanent public URL
        const { data: pub } = supabase.storage.from("images").getPublicUrl(fileName);
        onChange(pub.publicUrl);
        setUploadStatus("success");
        setStatusMsg("Uploaded to Supabase — URL is permanent.");
      } else {
        // ⚠️ Supabase failed — fall back to local blob URL with a clear warning
        const localUrl = URL.createObjectURL(file);
        onChange(localUrl);
        setUploadStatus("warn");
        setStatusMsg(
          upErr?.message?.includes("bucket")
            ? "Storage bucket 'images' not found. Run supabase_setup.sql in your Supabase project. Image saved locally — paste a permanent URL before saving."
            : !upErr
            ? "Supabase not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to Vercel environment variables. Image saved locally only."
            : `Supabase error: ${upErr.message}. Image saved locally — paste a permanent URL before saving.`
        );
      }
    } catch (err: any) {
      // Network / config error
      const localUrl = URL.createObjectURL(file);
      onChange(localUrl);
      setUploadStatus("warn");
      setStatusMsg(
        "Could not reach Supabase. Check your VITE_SUPABASE_URL env var. Image saved locally — paste a permanent URL before saving the page."
      );
    }

    setUploading(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleFile(file);
  };

  const handleUrlApply = () => {
    const trimmed = urlInput.trim();
    if (!trimmed) {
      setUploadStatus("error");
      setStatusMsg("Please enter a valid URL.");
      return;
    }
    onChange(trimmed);
    setUploadStatus("success");
    setStatusMsg("URL applied.");
  };

  const isPreviewable =
    value &&
    (value.startsWith("http") ||
      value.startsWith("blob:") ||
      value.startsWith("/") ||
      value.startsWith("data:"));

  return (
    <div className="space-y-3">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</span>

      {/* Preview */}
      {isPreviewable && (
        <div className="relative group rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
          <img src={value} alt="preview" className="w-full h-40 object-cover" />
          {value.startsWith("blob:") && (
            <div className="absolute bottom-0 left-0 right-0 bg-amber-500/90 text-white text-[10px] font-semibold text-center py-1 px-2">
              ⚠ Local preview only — paste a permanent URL to keep after save
            </div>
          )}
          <button
            onClick={() => { onChange(""); setUploadStatus("idle"); setStatusMsg(""); }}
            className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border border-slate-200 rounded-lg overflow-hidden text-xs font-semibold">
        {(["url", "upload"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 flex items-center justify-center gap-1.5 transition ${
              tab === t ? "bg-slate-800 text-white" : "bg-white text-slate-500 hover:bg-slate-50"
            }`}
          >
            {t === "url" ? <Link2 className="w-3 h-3" /> : <Upload className="w-3 h-3" />}
            {t === "url" ? "Paste URL" : "Upload File"}
          </button>
        ))}
      </div>

      {/* URL tab */}
      {tab === "url" && (
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUrlApply()}
              placeholder="https://your-supabase.co/storage/v1/object/public/images/..."
              className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
            />
            <button
              onClick={handleUrlApply}
              className="bg-teal text-[#05231f] text-xs font-bold px-4 py-2 rounded-lg hover:bg-teal/85 transition shrink-0"
            >
              Apply
            </button>
          </div>
          <p className="text-[10px] text-slate-400">
            Paste any public image URL — Supabase Storage, Cloudinary, Unsplash, etc.
          </p>
        </div>
      )}

      {/* Upload tab */}
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
              <span className="text-xs">Uploading to Supabase…</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <ImageIcon className="w-6 h-6" />
              <span className="text-xs">
                Drop image here or <span className="text-teal font-semibold">browse</span>
              </span>
              <span className="text-[10px] text-slate-300">PNG, JPG, WEBP, GIF · Uploads to Supabase Storage</span>
            </div>
          )}
        </div>
      )}

      {/* Status message */}
      {statusMsg && (
        <div
          className={`flex items-start gap-2 rounded-lg px-3 py-2 text-[11px] ${
            uploadStatus === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : uploadStatus === "warn"
              ? "bg-amber-50 text-amber-700 border border-amber-200"
              : "bg-red-50 text-red-600 border border-red-200"
          }`}
        >
          {uploadStatus === "success" ? (
            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
          ) : (
            <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
          )}
          <span>{statusMsg}</span>
        </div>
      )}
    </div>
  );
}
