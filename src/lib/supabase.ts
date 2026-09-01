import { createClient } from "@supabase/supabase-js";

// Vite automatically injects VITE_* vars into import.meta.env in both
// client and SSR (Nitro/Vercel) bundles at build time. No typeof guards needed.
const SUPABASE_URL: string = import.meta.env.VITE_SUPABASE_URL ?? "https://placeholder-url.supabase.co";
const SUPABASE_ANON_KEY: string = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "placeholder-key";

// Lazy singleton — defer createClient() so the Realtime WebSocket never
// initialises at module load time (fixes Node.js 20 "no native WebSocket" on Vercel).
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

export const supabase = {
  get auth()    { return getClient().auth; },
  get storage() { return getClient().storage; },
  from(table: string)            { return getClient().from(table); },
  rpc(fn: string, args?: object) { return getClient().rpc(fn, args); },
  channel(name: string)          { return getClient().channel(name); },
  removeChannel(ch: any)         { return getClient().removeChannel(ch); },
  getChannels()                  { return getClient().getChannels(); },
};

export function hasValidSupabaseConfig(): boolean {
  return !!(
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    SUPABASE_URL !== "https://placeholder-url.supabase.co" &&
    SUPABASE_ANON_KEY !== "placeholder-key"
  );
}
