import { s as __exportAll } from "./server-BGS4CMJf.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/supabase-jPVMMvTR.js
var supabase_exports = /* @__PURE__ */ __exportAll({
	hasValidSupabaseConfig: () => hasValidSupabaseConfig,
	supabase: () => supabase
});
var supabase = createClient("https://placeholder-url.supabase.co", "placeholder-key", { realtime: {
	transport: class NoopSocket {
		static CONNECTING = 0;
		static OPEN = 1;
		static CLOSING = 2;
		static CLOSED = 3;
		readyState = NoopSocket.CLOSED;
		onopen = null;
		onclose = null;
		onerror = null;
		onmessage = null;
		close() {}
		send() {}
	},
	params: { eventsPerSecond: 0 }
} });
var hasValidSupabaseConfig = () => false;
//#endregion
export { supabase_exports as n, supabase as t };
