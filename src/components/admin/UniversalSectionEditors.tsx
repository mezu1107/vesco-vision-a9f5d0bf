/**
 * Universal section editors for every page type beyond home/about.
 * Each editor receives `data` (current section value) and `onChange`.
 */
import { Plus, Trash2, GripVertical, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { ImageUpload } from "./ImageUpload";

// ── shared primitives ──────────────────────────────────────────────────────

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</label>
      {children}
    </div>
  );
}

export function TI({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input type="text" value={value ?? ""} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 bg-white" />
  );
}

export function TA({ value, onChange, placeholder, rows = 3 }: { value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <textarea value={value ?? ""} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows}
      className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 resize-y bg-white" />
  );
}

export function Card({ title, badge, children, onRemove, defaultOpen = false }:
  { title: string; badge?: string; children: React.ReactNode; onRemove?: () => void; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 cursor-pointer select-none" onClick={() => setOpen(!open)}>
        <GripVertical className="w-4 h-4 text-slate-300" />
        <span className="flex-1 text-sm font-semibold text-slate-700">{title}</span>
        {badge && <span className="text-[10px] bg-teal/10 text-teal font-bold px-2 py-0.5 rounded-full">{badge}</span>}
        {onRemove && <button onClick={e => { e.stopPropagation(); onRemove(); }} className="text-slate-300 hover:text-red-400 transition p-1 rounded"><Trash2 className="w-3.5 h-3.5" /></button>}
        {open ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </div>
      {open && <div className="p-4 space-y-4 border-t border-slate-100">{children}</div>}
    </div>
  );
}

export function AddBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 text-slate-400 text-sm py-3 rounded-xl hover:border-teal hover:text-teal transition">
      <Plus className="w-4 h-4" /> {label}
    </button>
  );
}

export function StringList({ data, onChange, label = "Items" }: { data: string[]; onChange: (d: string[]) => void; label?: string }) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</p>
      {(data ?? []).map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-teal w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <TI value={item} onChange={v => { const a = [...data]; a[i] = v; onChange(a); }} />
          <button onClick={() => onChange(data.filter((_, idx) => idx !== i))} className="text-slate-300 hover:text-red-400 transition shrink-0"><Trash2 className="w-4 h-4" /></button>
        </div>
      ))}
      <AddBtn label={`Add ${label.replace(/s$/, "")}`} onClick={() => onChange([...(data ?? []), ""])} />
    </div>
  );
}

// ── Generic hero editor (works for all pages) ─────────────────────────────

export function GenericHeroEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  const s = (k: string, v: any) => onChange({ ...data, [k]: v });
  return (
    <div className="space-y-4">
      {data?.eyebrow !== undefined && <Field label="Eyebrow"><TI value={data.eyebrow} onChange={v => s("eyebrow", v)} /></Field>}
      {data?.title !== undefined && <Field label="Title"><TA value={data.title} onChange={v => s("title", v)} rows={2} /></Field>}
      {data?.heading !== undefined && <Field label="Heading"><TA value={data.heading} onChange={v => s("heading", v)} rows={2} /></Field>}
      {data?.subtitle !== undefined && <Field label="Subtitle"><TI value={data.subtitle} onChange={v => s("subtitle", v)} /></Field>}
      {data?.lead !== undefined && <Field label="Lead / Intro"><TA value={data.lead} onChange={v => s("lead", v)} rows={3} /></Field>}
      {data?.intro !== undefined && <Field label="Intro"><TA value={data.intro} onChange={v => s("intro", v)} rows={3} /></Field>}
      {data?.body !== undefined && <Field label="Body"><TA value={data.body} onChange={v => s("body", v)} rows={4} /></Field>}
      {data?.copy !== undefined && <Field label="Copy"><TA value={data.copy} onChange={v => s("copy", v)} rows={4} /></Field>}
      {data?.cta !== undefined && <Field label="CTA Button"><TI value={data.cta} onChange={v => s("cta", v)} /></Field>}
      {data?.image !== undefined && <ImageUpload value={data.image ?? ""} onChange={v => s("image", v)} label="Background Image" />}
    </div>
  );
}

// ── Image+text split section (used on many pages) ─────────────────────────

export function ImageSectionEditor({ data, onChange, label = "Image Section" }: { data: any; onChange: (d: any) => void; label?: string }) {
  const s = (k: string, v: any) => onChange({ ...data, [k]: v });
  return (
    <div className="space-y-4">
      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</p>
      {data?.eyebrow !== undefined && <Field label="Eyebrow"><TI value={data.eyebrow} onChange={v => s("eyebrow", v)} /></Field>}
      {data?.title !== undefined && <Field label="Title"><TA value={data.title} onChange={v => s("title", v)} rows={2} /></Field>}
      {data?.body !== undefined && <Field label="Body"><TA value={data.body} onChange={v => s("body", v)} rows={3} /></Field>}
      {data?.body1 !== undefined && <Field label="Paragraph 1"><TA value={data.body1} onChange={v => s("body1", v)} rows={3} /></Field>}
      {data?.body2 !== undefined && <Field label="Paragraph 2"><TA value={data.body2} onChange={v => s("body2", v)} rows={3} /></Field>}
      {data?.image !== undefined && <ImageUpload value={data.image ?? ""} onChange={v => s("image", v)} label="Image" />}
    </div>
  );
}

// ── Numbered steps (process flow) ─────────────────────────────────────────

export function NumberedStepsEditor({ data, onChange }: { data: { num: string; title: string; body: string }[]; onChange: (d: any) => void }) {
  const update = (i: number, k: string, v: string) => { const a = [...data]; a[i] = { ...a[i], [k]: v }; onChange(a); };
  return (
    <div className="space-y-3">
      {(data ?? []).map((step, i) => (
        <Card key={i} title={step.title || `Step ${i + 1}`} badge={step.num} onRemove={() => onChange(data.filter((_, idx) => idx !== i))} defaultOpen={i === 0}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Number"><TI value={step.num} onChange={v => update(i, "num", v)} /></Field>
            <Field label="Title"><TI value={step.title} onChange={v => update(i, "title", v)} /></Field>
          </div>
          <Field label="Body"><TA value={step.body} onChange={v => update(i, "body", v)} rows={2} /></Field>
        </Card>
      ))}
      <AddBtn label="Add Step" onClick={() => onChange([...(data ?? []), { num: `0${(data ?? []).length + 1}`, title: "", body: "" }])} />
    </div>
  );
}

// ── FAQ categories editor ─────────────────────────────────────────────────

export function FaqEditor({ data, onChange }: { data: { title: string; items: { q: string; a: string }[] }[]; onChange: (d: any) => void }) {
  const updateCat = (i: number, k: string, v: any) => { const a = [...data]; a[i] = { ...a[i], [k]: v }; onChange(a); };
  const updateItem = (ci: number, ii: number, k: string, v: string) => {
    const a = [...data]; const items = [...a[ci].items]; items[ii] = { ...items[ii], [k]: v }; a[ci] = { ...a[ci], items }; onChange(a);
  };
  return (
    <div className="space-y-4">
      {(data ?? []).map((cat, ci) => (
        <Card key={ci} title={cat.title || `Category ${ci + 1}`} onRemove={() => onChange(data.filter((_, i) => i !== ci))} defaultOpen={ci === 0}>
          <Field label="Category Title"><TI value={cat.title} onChange={v => updateCat(ci, "title", v)} /></Field>
          <div className="space-y-3 mt-2">
            {cat.items.map((item, ii) => (
              <Card key={ii} title={item.q?.slice(0, 50) || `Q ${ii + 1}`} onRemove={() => updateCat(ci, "items", cat.items.filter((_, idx) => idx !== ii))}>
                <Field label="Question"><TI value={item.q} onChange={v => updateItem(ci, ii, "q", v)} /></Field>
                <Field label="Answer"><TA value={item.a} onChange={v => updateItem(ci, ii, "a", v)} rows={3} /></Field>
              </Card>
            ))}
            <AddBtn label="Add Q&A" onClick={() => updateCat(ci, "items", [...cat.items, { q: "", a: "" }])} />
          </div>
        </Card>
      ))}
      <AddBtn label="Add Category" onClick={() => onChange([...(data ?? []), { title: "New Category", items: [] }])} />
    </div>
  );
}

// ── Resources docs editor ─────────────────────────────────────────────────

export function ResourcesDocsEditor({ data, onChange }: { data: { title: string; meta: string; restricted: boolean }[]; onChange: (d: any) => void }) {
  const update = (i: number, k: string, v: any) => { const a = [...data]; a[i] = { ...a[i], [k]: v }; onChange(a); };
  return (
    <div className="space-y-3">
      {(data ?? []).map((doc, i) => (
        <Card key={i} title={doc.title || `Document ${i + 1}`} onRemove={() => onChange(data.filter((_, idx) => idx !== i))} defaultOpen={i === 0}>
          <Field label="Document Title"><TI value={doc.title} onChange={v => update(i, "title", v)} /></Field>
          <Field label="Meta (e.g. PDF · Corporate)"><TI value={doc.meta} onChange={v => update(i, "meta", v)} /></Field>
          <div className="flex items-center gap-3 mt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={doc.restricted} onChange={e => update(i, "restricted", e.target.checked)} className="w-4 h-4 accent-teal rounded" />
              <span className="text-sm text-slate-600">Restricted (requires access request)</span>
            </label>
          </div>
        </Card>
      ))}
      <AddBtn label="Add Document" onClick={() => onChange([...(data ?? []), { title: "", meta: "PDF · Corporate", restricted: false }])} />
    </div>
  );
}

// ── Technology cards editor ───────────────────────────────────────────────

export function TechCardsEditor({ data, onChange }: { data: { num: string; slug: string; title: string; body: string }[]; onChange: (d: any) => void }) {
  const update = (i: number, k: string, v: string) => { const a = [...data]; a[i] = { ...a[i], [k]: v }; onChange(a); };
  return (
    <div className="space-y-3">
      {(data ?? []).map((card, i) => (
        <Card key={i} title={card.title || `Card ${i + 1}`} badge={card.num} onRemove={() => onChange(data.filter((_, idx) => idx !== i))} defaultOpen={i === 0}>
          <div className="grid grid-cols-3 gap-3">
            <Field label="Number"><TI value={card.num} onChange={v => update(i, "num", v)} /></Field>
            <Field label="Slug"><TI value={card.slug} onChange={v => update(i, "slug", v)} placeholder="e.g. exosome" /></Field>
            <Field label="Title"><TI value={card.title} onChange={v => update(i, "title", v)} /></Field>
          </div>
          <Field label="Body"><TA value={card.body} onChange={v => update(i, "body", v)} rows={2} /></Field>
        </Card>
      ))}
      <AddBtn label="Add Technology Card" onClick={() => onChange([...(data ?? []), { num: `0${(data ?? []).length + 1}`, slug: "", title: "", body: "" }])} />
    </div>
  );
}

// ── Products categories editor ────────────────────────────────────────────

export function ProductCategoriesEditor({ data, onChange }: { data: { key: string; title: string; items: { slug: string; name: string }[] }[]; onChange: (d: any) => void }) {
  const updateCat = (i: number, k: string, v: any) => { const a = [...data]; a[i] = { ...a[i], [k]: v }; onChange(a); };
  const updateItem = (ci: number, ii: number, k: string, v: string) => {
    const a = [...data]; const items = [...a[ci].items]; items[ii] = { ...items[ii], [k]: v }; a[ci] = { ...a[ci], items }; onChange(a);
  };
  return (
    <div className="space-y-4">
      {(data ?? []).map((cat, ci) => (
        <Card key={ci} title={cat.title || `Category ${ci + 1}`} onRemove={() => onChange(data.filter((_, i) => i !== ci))} defaultOpen={ci === 0}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Key (internal)"><TI value={cat.key} onChange={v => updateCat(ci, "key", v)} /></Field>
            <Field label="Category Title"><TI value={cat.title} onChange={v => updateCat(ci, "title", v)} /></Field>
          </div>
          <div className="space-y-2 mt-2">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Products in this category</p>
            {cat.items.map((item, ii) => (
              <div key={ii} className="flex items-center gap-2">
                <TI value={item.slug} onChange={v => updateItem(ci, ii, "slug", v)} placeholder="slug" />
                <TI value={item.name} onChange={v => updateItem(ci, ii, "name", v)} placeholder="Display name" />
                <button onClick={() => updateCat(ci, "items", cat.items.filter((_, idx) => idx !== ii))} className="text-slate-300 hover:text-red-400 transition shrink-0"><Trash2 className="w-4 h-4" /></button>
              </div>
            ))}
            <AddBtn label="Add Product" onClick={() => updateCat(ci, "items", [...cat.items, { slug: "", name: "" }])} />
          </div>
        </Card>
      ))}
      <AddBtn label="Add Category" onClick={() => onChange([...(data ?? []), { key: "", title: "New Category", items: [] }])} />
    </div>
  );
}

// ── Articles editor ───────────────────────────────────────────────────────

export function ArticlesEditor({ data, onChange }: { data: { slug: string; category: string; title: string; excerpt: string }[]; onChange: (d: any) => void }) {
  const update = (i: number, k: string, v: string) => { const a = [...data]; a[i] = { ...a[i], [k]: v }; onChange(a); };
  return (
    <div className="space-y-3">
      {(data ?? []).map((art, i) => (
        <Card key={i} title={art.title?.slice(0, 50) || `Article ${i + 1}`} badge={art.category} onRemove={() => onChange(data.filter((_, idx) => idx !== i))} defaultOpen={i === 0}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Slug (URL)"><TI value={art.slug} onChange={v => update(i, "slug", v)} placeholder="e.g. why-exosomes-matter" /></Field>
            <Field label="Category"><TI value={art.category} onChange={v => update(i, "category", v)} /></Field>
          </div>
          <Field label="Title"><TI value={art.title} onChange={v => update(i, "title", v)} /></Field>
          <Field label="Excerpt"><TA value={art.excerpt} onChange={v => update(i, "excerpt", v)} rows={2} /></Field>
        </Card>
      ))}
      <AddBtn label="Add Article" onClick={() => onChange([...(data ?? []), { slug: "", category: "Exosome Science", title: "", excerpt: "" }])} />
    </div>
  );
}

// ── Values / principles list ──────────────────────────────────────────────

export function ValuesEditor({ data, onChange }: { data: { title: string; body: string }[]; onChange: (d: any) => void }) {
  const update = (i: number, k: string, v: string) => { const a = [...data]; a[i] = { ...a[i], [k]: v }; onChange(a); };
  return (
    <div className="space-y-3">
      {(data ?? []).map((val, i) => (
        <Card key={i} title={val.title || `Value ${i + 1}`} onRemove={() => onChange(data.filter((_, idx) => idx !== i))} defaultOpen={i === 0}>
          <Field label="Title"><TI value={val.title} onChange={v => update(i, "title", v)} /></Field>
          <Field label="Body"><TA value={val.body} onChange={v => update(i, "body", v)} rows={2} /></Field>
        </Card>
      ))}
      <AddBtn label="Add Value" onClick={() => onChange([...(data ?? []), { title: "", body: "" }])} />
    </div>
  );
}

// ── Coverage / regions list ────────────────────────────────────────────────

export function RegionsEditor({ data, onChange }: { data: { name: string; status: string }[]; onChange: (d: any) => void }) {
  const update = (i: number, k: string, v: string) => { const a = [...data]; a[i] = { ...a[i], [k]: v }; onChange(a); };
  return (
    <div className="space-y-3">
      {(data ?? []).map((r, i) => (
        <div key={i} className="flex items-center gap-2">
          <TI value={r.name} onChange={v => update(i, "name", v)} placeholder="Region name" />
          <TI value={r.status} onChange={v => update(i, "status", v)} placeholder="Status (e.g. Active)" />
          <button onClick={() => onChange(data.filter((_, idx) => idx !== i))} className="text-slate-300 hover:text-red-400 transition shrink-0"><Trash2 className="w-4 h-4" /></button>
        </div>
      ))}
      <AddBtn label="Add Region" onClick={() => onChange([...(data ?? []), { name: "", status: "Active" }])} />
    </div>
  );
}

// ── Facility areas editor ─────────────────────────────────────────────────

export function FacilityAreasEditor({ data, onChange }: { data: { title: string; body: string }[]; onChange: (d: any) => void }) {
  const update = (i: number, k: string, v: string) => { const a = [...data]; a[i] = { ...a[i], [k]: v }; onChange(a); };
  return (
    <div className="space-y-3">
      {(data ?? []).map((area, i) => (
        <Card key={i} title={area.title || `Area ${i + 1}`} onRemove={() => onChange(data.filter((_, idx) => idx !== i))} defaultOpen={i === 0}>
          <Field label="Area Name"><TI value={area.title} onChange={v => update(i, "title", v)} /></Field>
          <Field label="Description"><TA value={area.body} onChange={v => update(i, "body", v)} rows={2} /></Field>
        </Card>
      ))}
      <AddBtn label="Add Facility Area" onClick={() => onChange([...(data ?? []), { title: "", body: "" }])} />
    </div>
  );
}

// ── Form fields editor ────────────────────────────────────────────────────

export function FormFieldsEditor({ data, onChange }: { data: { label: string; ph: string }[]; onChange: (d: any) => void }) {
  const update = (i: number, k: string, v: string) => { const a = [...data]; a[i] = { ...a[i], [k]: v }; onChange(a); };
  return (
    <div className="space-y-2">
      {(data ?? []).map((f, i) => (
        <div key={i} className="flex items-center gap-2">
          <TI value={f.label} onChange={v => update(i, "label", v)} placeholder="Field label" />
          <TI value={f.ph} onChange={v => update(i, "ph", v)} placeholder="Placeholder text" />
          <button onClick={() => onChange(data.filter((_, idx) => idx !== i))} className="text-slate-300 hover:text-red-400 transition shrink-0"><Trash2 className="w-4 h-4" /></button>
        </div>
      ))}
      <AddBtn label="Add Field" onClick={() => onChange([...(data ?? []), { label: "", ph: "" }])} />
    </div>
  );
}

// ── Characterization groups editor ────────────────────────────────────────

export function CharGroupsEditor({ data, onChange }: { data: { title: string; items: string[] }[]; onChange: (d: any) => void }) {
  const updateGroup = (i: number, k: string, v: any) => { const a = [...data]; a[i] = { ...a[i], [k]: v }; onChange(a); };
  return (
    <div className="space-y-3">
      {(data ?? []).map((g, i) => (
        <Card key={i} title={g.title || `Group ${i + 1}`} onRemove={() => onChange(data.filter((_, idx) => idx !== i))} defaultOpen={i === 0}>
          <Field label="Group Title"><TI value={g.title} onChange={v => updateGroup(i, "title", v)} /></Field>
          <StringList data={g.items} onChange={v => updateGroup(i, "items", v)} label="Methods / Items" />
        </Card>
      ))}
      <AddBtn label="Add Group" onClick={() => onChange([...(data ?? []), { title: "", items: [] }])} />
    </div>
  );
}
