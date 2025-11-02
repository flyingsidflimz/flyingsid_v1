import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Works perfectly with Vercel and GitHub
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
  },
});
