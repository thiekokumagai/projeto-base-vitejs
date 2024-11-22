import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Define a porta para 3000
  },
  css: {
    postcss: './postcss.config.cjs',
  },
});