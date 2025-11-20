// ...existing code...
import { defineConfig } from "vite";
import type { Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // use root (/) for dev, and the repo path when building for GitHub Pages
  base: mode === "development" ? "/" : "/Eterna-Labs/",

  server: {
    host: "::",
    port: 8080,
  },

  // build plugin array and filter undefined values with a type guard
  plugins: [react(), mode === "development" ? componentTagger() : undefined].filter(
    (p): p is Plugin => Boolean(p)
  ),

  // if you want GitHub Pages to serve from the 'docs' folder (project pages),
  // uncomment the build.outDir setting below and add a publish step that uses `docs/`
  build: {
    // outDir: "docs",
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
// ...existing code...