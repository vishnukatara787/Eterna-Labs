import { defineConfig } from "vite";
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

  plugins: [react(), mode === "development" && componentTagger().filter(Boolean)],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
