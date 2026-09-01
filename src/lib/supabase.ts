import { createClient } from "@supabase/supabase-js";

// ── Environment variables ──────────────────────────────────────────────────
// Vite injects VITE_* vars into both the client bundle AND the SSR/Nitro
// server bundle at build time via import.meta.env. This is the only reliable
// way to read them in TanStack Start + Vercel deploys.
const SUPABASE_URL: string =
  import.meta.env.VITE_SUPABASE_URL ?? "https://placeholder-url.supabase.co";

const SUPABASE_ANON_KEY: string =
  import.meta.env.VITE_SUPABASE_ANON_KEY ?? "placeholder-key";

// ── Supabase public storage base URL ──────────────────────────────────────
// Used in fallback.ts to build permanent image URLs that work on Vercel.
export const SUPABASE_STORAGE_URL = `${SUPABASE_URL}/storage/v1/object/public/images`;

// ── Client (lazy singleton) ────────────────────────────────────────────────
// createClient() is called once on first use. Realtime is disabled with a
// no-op WebSocket class so the Node.js 20 "no native WebSocket" warning never
// fires on the Vercel runtime.
let _client: ReturnType<typeof createClient> | null = null;

function getClient() {
  if (_client) return _client;

  class NoopWS {
    static CONNECTING = 0;
    static OPEN = 1;
    static CLOSING = 2;
    static CLOSED = 3;
    readyState = 3;
    onopen: (() => void) | null = null;
    onclose: (() => void) | null = null;
    onerror: (() => void) | null = null;
    onmessage: (() => void) | null = null;
    close() {}
    send() {}
  }

  _client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    realtime: {
      transport: NoopWS as any,
      params: { eventsPerSecond: 0 },
    },
  });

  return _client;
}

// Stable wrapper — delegates to lazy singleton on every call
export const supabase = {
  get auth()    { return getClient().auth; },
  get storage() { return getClient().storage; },
  from(table: string)              { return getClient().from(table); },
  rpc(fn: string, args?: object)   { return getClient().rpc(fn, args); },
  channel(name: string)            { return getClient().channel(name); },
  removeChannel(ch: any)           { return getClient().removeChannel(ch); },
  getChannels()                    { return getClient().getChannels(); },
};

// ── Config check ───────────────────────────────────────────────────────────
export function hasValidSupabaseConfig(): boolean {
  return !!(
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    SUPABASE_URL !== "https://placeholder-url.supabase.co" &&
    SUPABASE_ANON_KEY !== "placeholder-key"
  );
}
