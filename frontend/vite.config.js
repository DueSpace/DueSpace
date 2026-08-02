import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemaps from "vite-plugin-sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemaps({
      hostname: "https://www.duespace.com",
      readable: true,
    }),
  ],
});
