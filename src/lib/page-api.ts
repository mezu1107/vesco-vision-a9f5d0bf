import { createServerFn } from "@tanstack/react-start";

// All page slugs that the admin can manage
export const ALL_CMS_SLUGS = [
  "home", "about", "facility", "quality", "oem", "research", "contact",
  "faq", "resources", "technology", "products", "insights",
  "about-mission", "about-network", "custom-development",
] as const;

export type CmsSlug = typeof ALL_CMS_SLUGS[number];

async function getDefaultForSlug(slug: string): Promise<any> {
  if (slug === "home") {
    const { defaultHomeData } = await import("@/data/fallback");
    return defaultHomeData;
  }
  if (slug === "about") {
    const { defaultAboutData } = await import("@/data/fallback");
    return defaultAboutData;
  }
  const { PAGE_DEFAULTS } = await import("@/data/page-defaults");
  return PAGE_DEFAULTS[slug] ?? {};
}

export const getPageData = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const { supabase, hasValidSupabaseConfig } = await import("@/lib/supabase");

    const fallback = await getDefaultForSlug(slug);

    if (!hasValidSupabaseConfig()) {
      return fallback;
    }

    try {
      const { data, error } = await supabase
        .from("pages")
        .select("content_json")
        .eq("page_slug", slug)
        .single();

      if (error || !data) return fallback;

      // Deep-merge saved data over defaults so new keys added later still appear
      return deepMerge(fallback, data.content_json);
    } catch {
      return fallback;
    }
  });

export const updatePageData = createServerFn({ method: "POST" })
  .validator((payload: { slug: string; content_json: any }) => payload)
  .handler(async ({ data }) => {
    const { supabase, hasValidSupabaseConfig } = await import("@/lib/supabase");

    if (!hasValidSupabaseConfig()) {
      throw new Error("Supabase is not configured. Changes will not be saved.");
    }

    const { error } = await supabase
      .from("pages")
      .upsert(
        {
          page_slug: data.slug,
          content_json: data.content_json,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "page_slug" }
      );

    if (error) throw new Error(error.message);
    return { success: true };
  });

export const listAllPages = createServerFn({ method: "GET" })
  .handler(async () => {
    const { supabase, hasValidSupabaseConfig } = await import("@/lib/supabase");

    if (!hasValidSupabaseConfig()) return [];

    try {
      const { data } = await supabase
        .from("pages")
        .select("page_slug, updated_at")
        .in("page_slug", ALL_CMS_SLUGS as unknown as string[]);
      return data ?? [];
    } catch {
      return [];
    }
  });

// Shallow-deep merge: arrays are replaced (not concatenated)
function deepMerge(base: any, override: any): any {
  if (!override || typeof override !== "object") return base;
  if (!base || typeof base !== "object") return override;
  if (Array.isArray(override)) return override;
  if (Array.isArray(base)) return override;

  const result = { ...base };
  for (const key of Object.keys(override)) {
    if (
      key in base &&
      typeof base[key] === "object" &&
      base[key] !== null &&
      !Array.isArray(base[key]) &&
      typeof override[key] === "object" &&
      override[key] !== null &&
      !Array.isArray(override[key])
    ) {
      result[key] = deepMerge(base[key], override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}
