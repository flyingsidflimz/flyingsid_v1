import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Correct config for Vercel + Vite + React
export default defineConfig({
  plugins: [react()],
  base: "", // important — not "/", not "./"
  build: {
    outDir: "dist",
  },
  server: {
    host: true,
  },
});
