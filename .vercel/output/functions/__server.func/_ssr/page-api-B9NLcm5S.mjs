import { a as TSS_SERVER_FUNCTION, i as createServerFn } from "./server-DyjCOy4p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-api-B9NLcm5S.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getPageData_createServerFn_handler = createServerRpc({
	id: "8e5011b922d8600e4c8a562c36f1e819ba33c08dc61ba8a95c8ac9c2be0ff080",
	name: "getPageData",
	filename: "src/lib/page-api.ts"
}, (opts) => getPageData.__executeServer(opts));
var getPageData = createServerFn({ method: "GET" }).inputValidator((slug) => slug).handler(getPageData_createServerFn_handler, async ({ data: slug }) => {
	const { supabase } = await import("./supabase-Ch_07loT.mjs");
	const { data, error } = await supabase.from("pages").select("content_json").eq("page_slug", slug).single();
	if (error || !data) return {};
	return data.content_json;
});
var updatePageData_createServerFn_handler = createServerRpc({
	id: "7ecdb867ca02f555264b731157faf2f1f6d851bd4728472f40587d1821cb18a3",
	name: "updatePageData",
	filename: "src/lib/page-api.ts"
}, (opts) => updatePageData.__executeServer(opts));
var updatePageData = createServerFn({ method: "POST" }).inputValidator((payload) => payload).handler(updatePageData_createServerFn_handler, async ({ data }) => {
	const { supabase } = await import("./supabase-Ch_07loT.mjs");
	const { error } = await supabase.from("pages").upsert({
		page_slug: data.slug,
		content_json: data.content_json,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	}, { onConflict: "page_slug" });
	if (error) throw new Error(error.message);
	return { success: true };
});
//#endregion
export { getPageData_createServerFn_handler, updatePageData_createServerFn_handler };
