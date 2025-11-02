import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Set correct base for Vercel
export default defineConfig({
  plugins: [react()],
  base: "./", // very important for Vercel
  build: {
    outDir: "dist",
  },
});
