/**
 * Client-side helper consumed by every CMS-wired page.
 * The loader fetches content from Supabase (via page-api) and returns it.
 * The page component then uses this data directly instead of i18n tx() calls.
 *
 * For pages that still use their existing i18n keys as fallback,
 * this data is deep-merged in page-api before reaching the route.
 */
import { getPageData } from "@/lib/page-api";

export async function loadCmsPage(slug: string) {
  return getPageData({ data: slug });
}
