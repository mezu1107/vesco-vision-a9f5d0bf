import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://placeholder-url.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "placeholder-key";

// Create the client with Realtime completely disabled.
// We only use Supabase for REST database queries — no subscriptions needed.
// The WebSocket warning on Node.js 20 comes from the Realtime transport
// initialising at startup; setting transport to a no-op class prevents it.
class NoopSocket {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSING = 2;
  static CLOSED = 3;
  readyState = NoopSocket.CLOSED;
  onopen: (() => void) | null = null;
  onclose: (() => void) | null = null;
  onerror: (() => void) | null = null;
  onmessage: (() => void) | null = null;
  close() {}
  send() {}
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    transport: NoopSocket as any,
    params: { eventsPerSecond: 0 },
  },
});

export const hasValidSupabaseConfig = () =>
  !!(
    import.meta.env.VITE_SUPABASE_URL &&
    import.meta.env.VITE_SUPABASE_ANON_KEY &&
    import.meta.env.VITE_SUPABASE_URL !== "https://placeholder-url.supabase.co"
  );
