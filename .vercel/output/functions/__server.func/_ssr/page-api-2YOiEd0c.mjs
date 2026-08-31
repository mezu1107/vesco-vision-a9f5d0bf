import { a as TSS_SERVER_FUNCTION, i as createServerFn } from "./server-BGS4CMJf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-api-2YOiEd0c.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ALL_CMS_SLUGS = [
	"home",
	"about",
	"facility",
	"quality",
	"oem",
	"research",
	"contact",
	"faq",
	"resources",
	"technology",
	"products",
	"insights",
	"about-mission",
	"about-network",
	"custom-development"
];
async function getDefaultForSlug(slug) {
	if (slug === "home") {
		const { defaultHomeData } = await import("./fallback-Cy-nh5Zy.mjs");
		return defaultHomeData;
	}
	if (slug === "about") {
		const { defaultAboutData } = await import("./fallback-Cy-nh5Zy.mjs");
		return defaultAboutData;
	}
	const { PAGE_DEFAULTS } = await import("./page-defaults-CKP3PSIM.mjs");
	return PAGE_DEFAULTS[slug] ?? {};
}
var getPageData_createServerFn_handler = createServerRpc({
	id: "8e5011b922d8600e4c8a562c36f1e819ba33c08dc61ba8a95c8ac9c2be0ff080",
	name: "getPageData",
	filename: "src/lib/page-api.ts"
}, (opts) => getPageData.__executeServer(opts));
var getPageData = createServerFn({ method: "GET" }).validator((slug) => slug).handler(getPageData_createServerFn_handler, async ({ data: slug }) => {
	const { supabase, hasValidSupabaseConfig } = await import("./supabase-jPVMMvTR.mjs").then((n) => n.n);
	const fallback = await getDefaultForSlug(slug);
	if (!hasValidSupabaseConfig()) return fallback;
	try {
		const { data, error } = await supabase.from("pages").select("content_json").eq("page_slug", slug).single();
		if (error || !data) return fallback;
		return deepMerge(fallback, data.content_json);
	} catch {
		return fallback;
	}
});
var updatePageData_createServerFn_handler = createServerRpc({
	id: "7ecdb867ca02f555264b731157faf2f1f6d851bd4728472f40587d1821cb18a3",
	name: "updatePageData",
	filename: "src/lib/page-api.ts"
}, (opts) => updatePageData.__executeServer(opts));
var updatePageData = createServerFn({ method: "POST" }).validator((payload) => payload).handler(updatePageData_createServerFn_handler, async ({ data }) => {
	const { supabase, hasValidSupabaseConfig } = await import("./supabase-jPVMMvTR.mjs").then((n) => n.n);
	if (!hasValidSupabaseConfig()) throw new Error("Supabase is not configured. Changes will not be saved.");
	const { error } = await supabase.from("pages").upsert({
		page_slug: data.slug,
		content_json: data.content_json,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	}, { onConflict: "page_slug" });
	if (error) throw new Error(error.message);
	return { success: true };
});
var listAllPages_createServerFn_handler = createServerRpc({
	id: "b5b98925bce8557944fad164959dbcc40f431f900cd131f76e1be94b062dae01",
	name: "listAllPages",
	filename: "src/lib/page-api.ts"
}, (opts) => listAllPages.__executeServer(opts));
var listAllPages = createServerFn({ method: "GET" }).handler(listAllPages_createServerFn_handler, async () => {
	const { supabase, hasValidSupabaseConfig } = await import("./supabase-jPVMMvTR.mjs").then((n) => n.n);
	if (!hasValidSupabaseConfig()) return [];
	try {
		const { data } = await supabase.from("pages").select("page_slug, updated_at").in("page_slug", ALL_CMS_SLUGS);
		return data ?? [];
	} catch {
		return [];
	}
});
function deepMerge(base, override) {
	if (!override || typeof override !== "object") return base;
	if (!base || typeof base !== "object") return override;
	if (Array.isArray(override)) return override;
	if (Array.isArray(base)) return override;
	const result = { ...base };
	for (const key of Object.keys(override)) if (key in base && typeof base[key] === "object" && base[key] !== null && !Array.isArray(base[key]) && typeof override[key] === "object" && override[key] !== null && !Array.isArray(override[key])) result[key] = deepMerge(base[key], override[key]);
	else result[key] = override[key];
	return result;
}
//#endregion
export { getPageData_createServerFn_handler, listAllPages_createServerFn_handler, updatePageData_createServerFn_handler };
