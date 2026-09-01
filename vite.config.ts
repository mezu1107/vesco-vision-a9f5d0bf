// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // Hard-pin the Nitro deploy target to Vercel for self-deployment.
  nitro: {
    preset: "vercel",
    // Explicitly forward VITE_* env vars into the Nitro/SSR server bundle.
    // Without this, import.meta.env.VITE_* reads as undefined at Vercel runtime
    // even when the env vars are set in the Vercel dashboard.
    runtimeConfig: {
      public: {
        supabaseUrl: process.env.VITE_SUPABASE_URL ?? "",
        supabaseAnonKey: process.env.VITE_SUPABASE_ANON_KEY ?? "",
      },
    },
  },
  vite: {
    // Inject env vars into the SSR bundle explicitly so import.meta.env works
    // in server-side code (createServerFn handlers, loaders) on Vercel.
    define: {
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(
        process.env.VITE_SUPABASE_URL ?? ""
      ),
      "import.meta.env.VITE_SUPABASE_ANON_KEY": JSON.stringify(
        process.env.VITE_SUPABASE_ANON_KEY ?? ""
      ),
    },
  },
});
