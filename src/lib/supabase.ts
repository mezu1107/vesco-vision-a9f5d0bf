import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// ── Lazy singleton ─────────────────────────────────────────────────────────
// We defer createClient() to first call so the Supabase Realtime WebSocket
// never initialises at module load time. This fixes the Vercel / Nitro Node.js
// runtime crash that happens when the module is imported by the SSR bundle.

let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (_client) return _client;

  // Read env vars — works in Vite (import.meta.env) and in Nitro/Node (process.env)
  const url =
    (typeof import.meta !== "undefined" ? (import.meta as any).env?.VITE_SUPABASE_URL : undefined) ??
    (typeof process !== "undefined" ? process.env?.VITE_SUPABASE_URL : undefined) ??
    "https://placeholder-url.supabase.co";

  const key =
    (typeof import.meta !== "undefined" ? (import.meta as any).env?.VITE_SUPABASE_ANON_KEY : undefined) ??
    (typeof process !== "undefined" ? process.env?.VITE_SUPABASE_ANON_KEY : undefined) ??
    "placeholder-key";

  // No-op WebSocket transport — prevents any real WS connection being opened.
  // We only need Supabase REST for DB queries; Realtime is not used.
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

  _client = createClient(url, key, {
    realtime: {
      transport: NoopWS as any,
      params: { eventsPerSecond: 0 },
    },
  });

  return _client;
}

// Export a stable reference that delegates everything to the lazy singleton.
// All supabase.from(...), supabase.storage etc. calls go through getClient().
export const supabase = {
  get auth()    { return getClient().auth; },
  get storage() { return getClient().storage; },
  from(table: string) { return getClient().from(table); },
  rpc(fn: string, args?: object) { return getClient().rpc(fn, args); },
  channel(name: string) { return getClient().channel(name); },
  removeChannel(channel: any) { return getClient().removeChannel(channel); },
  getChannels() { return getClient().getChannels(); },
};

export function hasValidSupabaseConfig(): boolean {
  const url =
    (typeof import.meta !== "undefined" ? (import.meta as any).env?.VITE_SUPABASE_URL : undefined) ??
    (typeof process !== "undefined" ? process.env?.VITE_SUPABASE_URL : undefined) ??
    "";

  const key =
    (typeof import.meta !== "undefined" ? (import.meta as any).env?.VITE_SUPABASE_ANON_KEY : undefined) ??
    (typeof process !== "undefined" ? process.env?.VITE_SUPABASE_ANON_KEY : undefined) ??
    "";

  return !!(
    url &&
    key &&
    url !== "https://placeholder-url.supabase.co"
  );
}
