/**
 * Visual section editors — one component per page section type.
 * Each editor receives `data` (the section's current value) and `onChange`
 * (a setter that receives the updated section object).
 */
import { Plus, Trash2, GripVertical, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { ImageUpload } from "./ImageUpload";

// ─── small shared primitives ────────────────────────────────────────────────

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </label>
      {children}
    </div>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 bg-white"
    />
  );
}

function TextArea({
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 resize-y bg-white"
    />
  );
}

function CollapsibleCard({
  title,
  badge,
  children,
  onRemove,
  defaultOpen = false,
}: {
  title: string;
  badge?: string;
  children: React.ReactNode;
  onRemove?: () => void;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 cursor-pointer select-none" onClick={() => setOpen(!open)}>
        <GripVertical className="w-4 h-4 text-slate-300" />
        <span className="flex-1 text-sm font-semibold text-slate-700">{title}</span>
        {badge && <span className="text-[10px] bg-teal/10 text-teal font-bold px-2 py-0.5 rounded-full">{badge}</span>}
        {onRemove && (
          <button
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            className="text-slate-300 hover:text-red-400 transition p-1 rounded"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
        {open ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </div>
      {open && <div className="p-4 space-y-4 border-t border-slate-100">{children}</div>}
    </div>
  );
}

function AddItemButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 text-slate-400 text-sm py-3 rounded-xl hover:border-teal hover:text-teal transition"
    >
      <Plus className="w-4 h-4" /> {label}
    </button>
  );
}

// ─── HERO SECTION ──────────────────────────────────────────────────────────

export function HeroEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  const set = (key: string, val: string) => onChange({ ...data, [key]: val });
  return (
    <div className="space-y-4">
      <Field label="Main Heading">
        <TextArea value={data.heading || ""} onChange={(v) => set("heading", v)} rows={2} placeholder="Advancing Regenerative Biotechnology" />
      </Field>
      <Field label="Sub-heading">
        <TextInput value={data.subheading || ""} onChange={(v) => set("subheading", v)} placeholder="From scientific discovery to scalable manufacturing." />
      </Field>
      {data.body !== undefined && (
        <Field label="Body Text">
          <TextArea value={data.body || ""} onChange={(v) => set("body", v)} rows={3} />
        </Field>
      )}
      {data.copy !== undefined && (
        <Field label="Body Copy">
          <TextArea value={data.copy || ""} onChange={(v) => set("copy", v)} rows={4} />
        </Field>
      )}
      {data.buttonText !== undefined && (
        <Field label="Button Label">
          <TextInput value={data.buttonText || ""} onChange={(v) => set("buttonText", v)} />
        </Field>
      )}
      {Array.isArray(data.buttons) && (
        <Field label="Buttons">
          <div className="space-y-2">
            {data.buttons.map((btn: string, i: number) => (
              <TextInput key={i} value={btn} onChange={(v) => {
                const arr = [...data.buttons];
                arr[i] = v;
                onChange({ ...data, buttons: arr });
              }} placeholder={`Button ${i + 1}`} />
            ))}
          </div>
        </Field>
      )}
      {data.image !== undefined && (
        <ImageUpload value={data.image || ""} onChange={(v) => set("image", v)} label="Background Image" />
      )}
    </div>
  );
}

// ─── TRUST BAR ─────────────────────────────────────────────────────────────

export function TrustBarEditor({ data, onChange }: { data: string[]; onChange: (d: string[]) => void }) {
  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-400 font-medium">Capability tags shown below the hero. Drag to reorder.</p>
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <GripVertical className="w-4 h-4 text-slate-300 shrink-0" />
          <TextInput value={item} onChange={(v) => {
            const arr = [...data];
            arr[i] = v;
            onChange(arr);
          }} placeholder={`Tag ${i + 1}`} />
          <button onClick={() => onChange(data.filter((_, idx) => idx !== i))} className="text-slate-300 hover:text-red-400 transition">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
      <AddItemButton label="Add Tag" onClick={() => onChange([...data, "New Tag"])} />
    </div>
  );
}

// ─── ABOUT SECTION ─────────────────────────────────────────────────────────

export function AboutEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  const set = (k: string, v: string) => onChange({ ...data, [k]: v });
  return (
    <div className="space-y-4">
      {data.smallHeading !== undefined && (
        <Field label="Small Heading (eyebrow)">
          <TextInput value={data.smallHeading || ""} onChange={(v) => set("smallHeading", v)} />
        </Field>
      )}
      <Field label="Main Heading">
        <TextArea value={data.mainHeading || data.heading || ""} onChange={(v) => set(data.mainHeading !== undefined ? "mainHeading" : "heading", v)} rows={2} />
      </Field>
      <Field label="Copy">
        <TextArea value={data.copy || ""} onChange={(v) => set("copy", v)} rows={4} />
      </Field>
      {data.subheading !== undefined && (
        <Field label="Sub-heading">
          <TextInput value={data.subheading || ""} onChange={(v) => set("subheading", v)} />
        </Field>
      )}
      {data.buttonText !== undefined && (
        <Field label="Button Label">
          <TextInput value={data.buttonText || ""} onChange={(v) => set("buttonText", v)} />
        </Field>
      )}
      {data.image !== undefined && (
        <ImageUpload value={data.image || ""} onChange={(v) => set("image", v)} label="Section Image" />
      )}
    </div>
  );
}

// ─── CAPABILITIES LIST ─────────────────────────────────────────────────────

export function CapabilitiesEditor({ data, onChange }: { data: { title: string; desc: string }[]; onChange: (d: any) => void }) {
  const update = (i: number, key: string, val: string) => {
    const arr = [...data];
    arr[i] = { ...arr[i], [key]: val };
    onChange(arr);
  };
  return (
    <div className="space-y-3">
      {data.map((item, i) => (
        <CollapsibleCard
          key={i}
          title={item.title || `Capability ${i + 1}`}
          onRemove={() => onChange(data.filter((_, idx) => idx !== i))}
          defaultOpen={i === 0}
        >
          <Field label="Title">
            <TextInput value={item.title} onChange={(v) => update(i, "title", v)} />
          </Field>
          <Field label="Description">
            <TextArea value={item.desc} onChange={(v) => update(i, "desc", v)} rows={2} />
          </Field>
        </CollapsibleCard>
      ))}
      <AddItemButton label="Add Capability" onClick={() => onChange([...data, { title: "New Capability", desc: "" }])} />
    </div>
  );
}

// ─── CARDS (Core Technology) ────────────────────────────────────────────────

export function CardsEditor({ data, onChange }: { data: { num: string; title: string; body: string }[]; onChange: (d: any) => void }) {
  const update = (i: number, key: string, val: string) => {
    const arr = [...data];
    arr[i] = { ...arr[i], [key]: val };
    onChange(arr);
  };
  return (
    <div className="space-y-3">
      {data.map((card, i) => (
        <CollapsibleCard
          key={i}
          title={card.title || `Card ${i + 1}`}
          badge={card.num}
          onRemove={() => onChange(data.filter((_, idx) => idx !== i))}
          defaultOpen={i === 0}
        >
          <div className="grid grid-cols-2 gap-3">
            <Field label="Number">
              <TextInput value={card.num} onChange={(v) => update(i, "num", v)} placeholder="01" />
            </Field>
            <Field label="Title">
              <TextInput value={card.title} onChange={(v) => update(i, "title", v)} />
            </Field>
          </div>
          <Field label="Body">
            <TextArea value={card.body} onChange={(v) => update(i, "body", v)} rows={2} />
          </Field>
        </CollapsibleCard>
      ))}
      <AddItemButton label="Add Card" onClick={() => onChange([...data, { num: `0${data.length + 1}`, title: "New Card", body: "" }])} />
    </div>
  );
}

// ─── CORE TECHNOLOGY SECTION ────────────────────────────────────────────────

export function CoreTechEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  return (
    <div className="space-y-5">
      <Field label="Section Heading">
        <TextInput value={data.heading || ""} onChange={(v) => onChange({ ...data, heading: v })} />
      </Field>
      <Field label="Button Label">
        <TextInput value={data.buttonText || ""} onChange={(v) => onChange({ ...data, buttonText: v })} />
      </Field>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">Technology Cards</p>
        <CardsEditor data={data.cards || []} onChange={(cards) => onChange({ ...data, cards })} />
      </div>
    </div>
  );
}

// ─── PROCESS / STEPS LIST ──────────────────────────────────────────────────

export function StepsListEditor({
  data,
  onChange,
  label = "Steps",
}: {
  data: string[];
  onChange: (d: string[]) => void;
  label?: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</p>
      {data.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-teal w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <TextInput value={step} onChange={(v) => {
            const arr = [...data];
            arr[i] = v;
            onChange(arr);
          }} placeholder={`Step ${i + 1}`} />
          <button onClick={() => onChange(data.filter((_, idx) => idx !== i))} className="text-slate-300 hover:text-red-400 transition shrink-0">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
      <AddItemButton label={`Add ${label.replace(/s$/, "")}`} onClick={() => onChange([...data, ""])} />
    </div>
  );
}

// ─── EXOSOME SECTION ───────────────────────────────────────────────────────

export function ExosomeSectionEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  const set = (k: string, v: any) => onChange({ ...data, [k]: v });
  return (
    <div className="space-y-4">
      <Field label="Section Label (eyebrow)">
        <TextInput value={data.leftHeading || ""} onChange={(v) => set("leftHeading", v)} />
      </Field>
      <Field label="Heading">
        <TextArea value={data.leftSubheading || ""} onChange={(v) => set("leftSubheading", v)} rows={2} />
      </Field>
      <ImageUpload value={data.image || ""} onChange={(v) => set("image", v)} label="Background Image" />
      <StepsListEditor data={data.process || []} onChange={(v) => set("process", v)} label="Process Steps" />
    </div>
  );
}

// ─── MANUFACTURING SECTION ─────────────────────────────────────────────────

export function ManufacturingEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  const set = (k: string, v: any) => onChange({ ...data, [k]: v });
  return (
    <div className="space-y-4">
      {data.heading !== undefined && (
        <Field label="Heading">
          <TextInput value={data.heading || ""} onChange={(v) => set("heading", v)} />
        </Field>
      )}
      {data.subheading !== undefined && (
        <Field label="Sub-heading">
          <TextInput value={data.subheading || ""} onChange={(v) => set("subheading", v)} />
        </Field>
      )}
      {data.copy !== undefined && (
        <Field label="Copy">
          <TextArea value={data.copy || ""} onChange={(v) => set("copy", v)} rows={3} />
        </Field>
      )}
      {data.footer !== undefined && (
        <Field label="Footer note">
          <TextInput value={data.footer || ""} onChange={(v) => set("footer", v)} />
        </Field>
      )}
      {data.buttonText !== undefined && (
        <Field label="Button Label">
          <TextInput value={data.buttonText || ""} onChange={(v) => set("buttonText", v)} />
        </Field>
      )}
      {data.image !== undefined && (
        <ImageUpload value={data.image || ""} onChange={(v) => set("image", v)} label="Section Image" />
      )}
      {Array.isArray(data.steps) && (
        <StepsListEditor data={data.steps} onChange={(v) => set("steps", v)} label="Manufacturing Steps" />
      )}
      {Array.isArray(data.flow) && (
        <StepsListEditor data={data.flow} onChange={(v) => set("flow", v)} label="Process Flow" />
      )}
    </div>
  );
}

// ─── QUALITY SECTION ───────────────────────────────────────────────────────

export function QualityEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  const set = (k: string, v: any) => onChange({ ...data, [k]: v });

  // Quality points can be strings[] or {num, title, desc}[]
  const isObjectPoints = data.points?.length > 0 && typeof data.points[0] === "object";

  return (
    <div className="space-y-4">
      <Field label="Heading">
        <TextInput value={data.heading || ""} onChange={(v) => set("heading", v)} />
      </Field>
      {data.subheading !== undefined && (
        <Field label="Sub-heading">
          <TextInput value={data.subheading || ""} onChange={(v) => set("subheading", v)} />
        </Field>
      )}
      {data.copy !== undefined && (
        <Field label="Copy">
          <TextArea value={data.copy || ""} onChange={(v) => set("copy", v)} rows={3} />
        </Field>
      )}
      {data.buttonText !== undefined && (
        <Field label="Button Label">
          <TextInput value={data.buttonText || ""} onChange={(v) => set("buttonText", v)} />
        </Field>
      )}
      {data.image !== undefined && (
        <ImageUpload value={data.image || ""} onChange={(v) => set("image", v)} label="Section Image" />
      )}

      {/* Points — two variants */}
      {isObjectPoints ? (
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Quality Points</p>
          {data.points.map((pt: any, i: number) => (
            <CollapsibleCard
              key={i}
              title={pt.title || `Point ${i + 1}`}
              badge={pt.num}
              onRemove={() => set("points", data.points.filter((_: any, idx: number) => idx !== i))}
              defaultOpen={i === 0}
            >
              <div className="grid grid-cols-2 gap-3">
                <Field label="Number"><TextInput value={pt.num} onChange={(v) => {
                  const arr = [...data.points]; arr[i] = { ...arr[i], num: v }; set("points", arr);
                }} /></Field>
                <Field label="Title"><TextInput value={pt.title} onChange={(v) => {
                  const arr = [...data.points]; arr[i] = { ...arr[i], title: v }; set("points", arr);
                }} /></Field>
              </div>
              <Field label="Description">
                <TextArea value={pt.desc} onChange={(v) => {
                  const arr = [...data.points]; arr[i] = { ...arr[i], desc: v }; set("points", arr);
                }} rows={2} />
              </Field>
            </CollapsibleCard>
          ))}
          <AddItemButton label="Add Point" onClick={() => set("points", [...data.points, { num: `0${data.points.length + 1}`, title: "New Point", desc: "" }])} />
        </div>
      ) : (
        <StepsListEditor data={data.points || []} onChange={(v) => set("points", v)} label="Quality Points" />
      )}
    </div>
  );
}

// ─── PARTNERSHIP ───────────────────────────────────────────────────────────

export function PartnershipEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  const set = (k: string, v: any) => onChange({ ...data, [k]: v });
  return (
    <div className="space-y-4">
      <Field label="Section Heading"><TextInput value={data.heading || ""} onChange={(v) => set("heading", v)} /></Field>
      <Field label="Sub-heading"><TextInput value={data.subheading || ""} onChange={(v) => set("subheading", v)} /></Field>
      <Field label="Title"><TextInput value={data.title || ""} onChange={(v) => set("title", v)} /></Field>
      <Field label="Copy"><TextArea value={data.copy || ""} onChange={(v) => set("copy", v)} rows={3} /></Field>
      {data.diagram && (
        <>
          <Field label="Left Partner (Vesco)">
            <TextArea value={data.diagram.left || ""} onChange={(v) => set("diagram", { ...data.diagram, left: v })} rows={2} />
          </Field>
          <Field label="Right Partner (EverCeutical)">
            <TextArea value={data.diagram.right || ""} onChange={(v) => set("diagram", { ...data.diagram, right: v })} rows={2} />
          </Field>
        </>
      )}
      <Field label="Product Platforms"><TextArea value={data.platforms || ""} onChange={(v) => set("platforms", v)} rows={2} /></Field>
    </div>
  );
}

// ─── VISION & MISSION ──────────────────────────────────────────────────────

export function VisionMissionEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  const setV = (k: string, v: string) => onChange({ ...data, vision: { ...data.vision, [k]: v } });
  const setM = (k: string, v: string) => onChange({ ...data, mission: { ...data.mission, [k]: v } });
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <p className="text-xs font-bold text-teal uppercase tracking-wider">Vision</p>
        <Field label="Heading"><TextInput value={data.vision?.heading || ""} onChange={(v) => setV("heading", v)} /></Field>
        <Field label="Title"><TextArea value={data.vision?.title || ""} onChange={(v) => setV("title", v)} rows={2} /></Field>
        <Field label="Copy"><TextArea value={data.vision?.copy || ""} onChange={(v) => setV("copy", v)} rows={4} /></Field>
      </div>
      <div className="space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <p className="text-xs font-bold text-teal uppercase tracking-wider">Mission</p>
        <Field label="Heading"><TextInput value={data.mission?.heading || ""} onChange={(v) => setM("heading", v)} /></Field>
        <Field label="Title"><TextArea value={data.mission?.title || ""} onChange={(v) => setM("title", v)} rows={2} /></Field>
        <Field label="Copy"><TextArea value={data.mission?.copy || ""} onChange={(v) => setM("copy", v)} rows={4} /></Field>
      </div>
    </div>
  );
}

// ─── FINAL CTA ─────────────────────────────────────────────────────────────

export function FinalCtaEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  const set = (k: string, v: any) => onChange({ ...data, [k]: v });
  return (
    <div className="space-y-4">
      {data.heading !== undefined && (
        <Field label="Section Label"><TextInput value={data.heading || ""} onChange={(v) => set("heading", v)} /></Field>
      )}
      {data.title !== undefined && (
        <Field label="Main Title"><TextArea value={data.title || ""} onChange={(v) => set("title", v)} rows={2} /></Field>
      )}
      <Field label="Copy"><TextArea value={data.copy || ""} onChange={(v) => set("copy", v)} rows={3} /></Field>
      {Array.isArray(data.buttons) && (
        <Field label="Buttons">
          <div className="space-y-2">
            {data.buttons.map((btn: string, i: number) => (
              <TextInput key={i} value={btn} onChange={(v) => {
                const arr = [...data.buttons]; arr[i] = v; set("buttons", arr);
              }} placeholder={`Button ${i + 1}`} />
            ))}
          </div>
        </Field>
      )}
      {data.buttonText !== undefined && (
        <Field label="Button Label"><TextInput value={data.buttonText || ""} onChange={(v) => set("buttonText", v)} /></Field>
      )}
    </div>
  );
}

// ─── SCIENTIFIC APPROACH ───────────────────────────────────────────────────

export function ScientificApproachEditor({ data, onChange }: { data: any; onChange: (d: any) => void }) {
  const set = (k: string, v: any) => onChange({ ...data, [k]: v });
  return (
    <div className="space-y-4">
      <Field label="Heading"><TextInput value={data.heading || ""} onChange={(v) => set("heading", v)} /></Field>
      <Field label="Sub-heading"><TextInput value={data.subheading || ""} onChange={(v) => set("subheading", v)} /></Field>
      <Field label="Copy"><TextArea value={data.copy || ""} onChange={(v) => set("copy", v)} rows={4} /></Field>
      <ImageUpload value={data.image || ""} onChange={(v) => set("image", v)} label="Section Image" />
    </div>
  );
}
