/**
 * AI PDF Import — reads a PDF as text and intelligently maps extracted
 * headings, body text, and lists into the page's section data structure.
 *
 * No external AI API needed — uses heuristic text parsing that understands
 * common section patterns from the Vesco brand document style.
 */
import { useState, useRef } from "react";
import { FileText, Sparkles, X, AlertCircle, CheckCircle2, Upload } from "lucide-react";

interface Props {
  pageSlug: string;
  currentData: any;
  onImport: (merged: any) => void;
}

// ── helpers ─────────────────────────────────────────────────────────────────

function cleanText(s: string) {
  return s.replace(/\s+/g, " ").trim();
}

/**
 * Very lightweight PDF text extractor — reads the raw PDF bytes and
 * grabs all BT/ET (begin-text/end-text) stream content. Works on most
 * simple PDFs without needing pdf.js.
 */
async function extractTextFromPdf(file: File): Promise<string> {
  const buf = await file.arrayBuffer();
  const bytes = new Uint8Array(buf);
  const decoder = new TextDecoder("latin1");
  const raw = decoder.decode(bytes);

  // Collect all text between BT ... ET markers
  const chunks: string[] = [];
  const regex = /BT\s([\s\S]*?)ET/g;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(raw)) !== null) {
    // Extract strings inside parentheses (Tj / TJ operators)
    const inner = m[1];
    const strRe = /\(([^)]*)\)/g;
    let sm: RegExpExecArray | null;
    while ((sm = strRe.exec(inner)) !== null) {
      const txt = sm[1].replace(/\\(\d{3})/g, (_, oct) =>
        String.fromCharCode(parseInt(oct, 8))
      ).replace(/\\\n/g, "").replace(/\\n/g, "\n").replace(/\\/g, "");
      if (txt.trim()) chunks.push(txt);
    }
  }

  if (chunks.length > 0) return chunks.join(" ");

  // Fallback: grab printable ASCII text runs (less accurate but works)
  const printable = raw.replace(/[^\x20-\x7e\n]/g, " ").replace(/ {4,}/g, "\n");
  const lines = printable.split("\n").map(cleanText).filter((l) => l.length > 3);
  return lines.join("\n");
}

// ── heuristic mapper ────────────────────────────────────────────────────────

function mapTextToPageData(text: string, slug: string, current: any): any {
  const lines = text
    .split(/\n|(?<=\.)\s{2,}/)
    .map(cleanText)
    .filter((l) => l.length > 2);

  // Helpers
  const isHeading = (l: string) =>
    l === l.toUpperCase() && l.length > 3 && l.length < 80 && /[A-Z]/.test(l);
  const isShort = (l: string) => l.length < 80;
  const firstLong = (from: number, minLen = 60) => {
    for (let i = from; i < Math.min(from + 15, lines.length); i++) {
      if (lines[i].length >= minLen) return lines[i];
    }
    return "";
  };
  const paragraphAfter = (keyword: string): string => {
    const idx = lines.findIndex((l) =>
      l.toLowerCase().includes(keyword.toLowerCase())
    );
    if (idx === -1) return "";
    return firstLong(idx + 1, 40);
  };
  const listAfter = (keyword: string, max = 8): string[] => {
    const idx = lines.findIndex((l) =>
      l.toLowerCase().includes(keyword.toLowerCase())
    );
    if (idx === -1) return [];
    const results: string[] = [];
    for (let i = idx + 1; i < Math.min(idx + 20, lines.length); i++) {
      const l = lines[i];
      if (l.length < 6 || isHeading(l)) continue;
      if (l.length < 70) results.push(l.replace(/^[•\-–●·\d]+\.?\s*/, ""));
      if (results.length >= max) break;
    }
    return results;
  };

  if (slug === "home") {
    const merged = JSON.parse(JSON.stringify(current));

    // Hero
    const heroIdx = lines.findIndex(
      (l) =>
        l.toLowerCase().includes("advancing") ||
        l.toLowerCase().includes("biotechnology") ||
        isHeading(l)
    );
    if (heroIdx !== -1 && lines[heroIdx]) {
      merged.hero = {
        ...merged.hero,
        heading: cleanText(lines[heroIdx]),
        subheading: cleanText(lines[heroIdx + 1] || merged.hero?.subheading || ""),
        body: cleanText(firstLong(heroIdx + 2) || merged.hero?.body || ""),
      };
    }

    // About
    const aboutCopy = paragraphAfter("who we are") || paragraphAfter("biotechnology meets");
    if (aboutCopy) {
      merged.about = { ...merged.about, copy: cleanText(aboutCopy) };
    }

    // Trust bar
    const trustList = listAfter("capability") || listAfter("r&d driven");
    if (trustList.length > 0) merged.trustBar = trustList;

    // Core technology cards
    const techIdx = lines.findIndex((l) => l.toLowerCase().includes("technology") && isShort(l));
    if (techIdx !== -1) {
      const cardTitles = listAfter("technology", 4);
      if (cardTitles.length > 0) {
        merged.coreTechnology = {
          ...merged.coreTechnology,
          heading: cleanText(lines[techIdx]),
          cards: cardTitles.map((title, i) => ({
            num: String(i + 1).padStart(2, "0"),
            title,
            body: cleanText(firstLong(techIdx + i + 2, 40) || merged.coreTechnology?.cards?.[i]?.body || ""),
          })),
        };
      }
    }

    // Manufacturing
    const mfgCopy = paragraphAfter("manufacturing");
    if (mfgCopy) merged.manufacturing = { ...merged.manufacturing, copy: cleanText(mfgCopy) };

    // Final CTA
    const ctaIdx = lines.findIndex((l) => l.toLowerCase().includes("build") || l.toLowerCase().includes("partnership"));
    if (ctaIdx !== -1) {
      merged.finalCta = {
        ...merged.finalCta,
        heading: cleanText(lines[ctaIdx] || merged.finalCta?.heading || ""),
        copy: cleanText(firstLong(ctaIdx + 1, 40) || merged.finalCta?.copy || ""),
      };
    }

    return merged;
  }

  if (slug === "about") {
    const merged = JSON.parse(JSON.stringify(current));

    // Hero
    const heroLine = lines.find((l) => l.toLowerCase().includes("advancing") || isHeading(l));
    if (heroLine) {
      merged.hero = { ...merged.hero, heading: cleanText(heroLine) };
      const heroCopy = firstLong(lines.indexOf(heroLine) + 1, 50);
      if (heroCopy) merged.hero.copy = cleanText(heroCopy);
    }

    // Who We Are
    const whoIdx = lines.findIndex((l) => l.toLowerCase().includes("who we are"));
    if (whoIdx !== -1) {
      merged.whoWeAre = {
        ...merged.whoWeAre,
        copy: cleanText(firstLong(whoIdx + 1, 40) || merged.whoWeAre?.copy || ""),
      };
      const capList = listAfter("capabilities");
      if (capList.length > 0) {
        merged.whoWeAre.capabilities = capList.map((title) => ({
          title,
          desc: cleanText(firstLong(lines.indexOf(title) + 1, 30) || ""),
        }));
      }
    }

    // Scientific approach
    const sciIdx = lines.findIndex((l) => l.toLowerCase().includes("scientific approach") || l.toLowerCase().includes("biological science"));
    if (sciIdx !== -1) {
      merged.scientificApproach = {
        ...merged.scientificApproach,
        copy: cleanText(firstLong(sciIdx + 1, 40) || merged.scientificApproach?.copy || ""),
      };
    }

    // Quality
    const qualIdx = lines.findIndex((l) => l.toLowerCase().includes("quality") && isShort(l));
    if (qualIdx !== -1) {
      const qualPoints = listAfter("quality approach");
      if (qualPoints.length > 0) {
        merged.quality = {
          ...merged.quality,
          points: qualPoints.map((title, i) => ({
            num: String(i + 1).padStart(2, "0"),
            title: title.replace(/^\d+\s*[–—-]\s*/, ""),
            desc: cleanText(firstLong(qualIdx + i + 2, 30) || ""),
          })),
        };
      }
    }

    // Vision / Mission
    const visionIdx = lines.findIndex((l) => l.toLowerCase().includes("vision"));
    if (visionIdx !== -1) {
      merged.visionMission = {
        ...merged.visionMission,
        vision: {
          ...merged.visionMission?.vision,
          copy: cleanText(firstLong(visionIdx + 1, 40) || merged.visionMission?.vision?.copy || ""),
        },
      };
    }
    const missionIdx = lines.findIndex((l) => l.toLowerCase().includes("mission"));
    if (missionIdx !== -1) {
      merged.visionMission = {
        ...merged.visionMission,
        mission: {
          ...merged.visionMission?.mission,
          copy: cleanText(firstLong(missionIdx + 1, 40) || merged.visionMission?.mission?.copy || ""),
        },
      };
    }

    // Final CTA
    const ctaIdx = lines.findIndex((l) => l.toLowerCase().includes("build") || l.toLowerCase().includes("next generation"));
    if (ctaIdx !== -1) {
      merged.finalCta = {
        ...merged.finalCta,
        title: cleanText(lines[ctaIdx]),
        copy: cleanText(firstLong(ctaIdx + 1, 30) || merged.finalCta?.copy || ""),
      };
    }

    return merged;
  }

  return current;
}

// ── component ────────────────────────────────────────────────────────────────

export function PdfImport({ pageSlug, currentData, onImport }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "reading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState<any>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file.name.toLowerCase().endsWith(".pdf")) {
      setStatus("error");
      setMessage("Please upload a PDF file.");
      return;
    }
    setStatus("reading");
    setMessage("Extracting text from PDF…");

    try {
      const text = await extractTextFromPdf(file);
      setMessage("Mapping content to page sections…");

      await new Promise((r) => setTimeout(r, 600));

      const merged = mapTextToPageData(text, pageSlug, currentData);
      setPreview(merged);
      setStatus("done");
      setMessage(`Content extracted! Review the changes below, then click "Apply to Page".`);
    } catch (err: any) {
      setStatus("error");
      setMessage("Failed to read PDF: " + (err?.message || "Unknown error"));
    }
  };

  const handleApply = () => {
    if (preview) {
      onImport(preview);
      setOpen(false);
      setStatus("idle");
      setPreview(null);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-purple-600/10 hover:bg-purple-600/20 border border-purple-400/30 text-purple-600 text-xs font-bold px-4 py-2.5 rounded-lg transition"
      >
        <Sparkles className="w-3.5 h-3.5" />
        AI PDF Import
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center">
              <Sparkles className="w-4.5 h-4.5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm">AI PDF Import</h3>
              <p className="text-slate-400 text-xs">Upload a brand doc to auto-fill sections</p>
            </div>
          </div>
          <button onClick={() => { setOpen(false); setStatus("idle"); setPreview(null); }} className="text-slate-400 hover:text-slate-600 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Drop zone */}
          <div
            className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center cursor-pointer hover:border-purple-400 hover:bg-purple-50/50 transition"
            onClick={() => fileRef.current?.click()}
            onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              ref={fileRef}
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
            />
            <FileText className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <p className="text-sm text-slate-500">Drop your PDF here or <span className="text-purple-600 font-semibold">browse</span></p>
            <p className="text-xs text-slate-300 mt-1">Brand docs, brochures, content sheets</p>
          </div>

          {/* Status */}
          {status !== "idle" && (
            <div className={`flex items-start gap-3 rounded-xl px-4 py-3 text-sm ${
              status === "reading" ? "bg-blue-50 text-blue-700" :
              status === "done" ? "bg-green-50 text-green-700" :
              "bg-red-50 text-red-700"
            }`}>
              {status === "reading" && <span className="w-4 h-4 mt-0.5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />}
              {status === "done" && <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />}
              {status === "error" && <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />}
              <span>{message}</span>
            </div>
          )}

          {/* Preview of sections that will be updated */}
          {preview && status === "done" && (
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-3 max-h-52 overflow-y-auto">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Sections to update:</p>
              <ul className="space-y-1">
                {Object.keys(preview).map((k) => (
                  <li key={k} className="text-xs text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="font-medium capitalize">{k.replace(/([A-Z])/g, " $1")}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        {status === "done" && preview && (
          <div className="flex justify-end gap-3 px-5 pb-5">
            <button
              onClick={() => { setStatus("idle"); setPreview(null); }}
              className="text-slate-500 text-sm hover:text-slate-700 transition px-4 py-2"
            >
              Discard
            </button>
            <button
              onClick={handleApply}
              className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Apply to Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
