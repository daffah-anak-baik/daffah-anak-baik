/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ini yang membuat import "@/components/..." berfungsi
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Konfigurasi untuk Vitest tetap di sini agar tidak perlu 2 file
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
});
