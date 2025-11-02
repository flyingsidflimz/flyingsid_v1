import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Important fix for blank page on Vercel
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist'
  },
});
