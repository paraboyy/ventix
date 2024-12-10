import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api-token": {
        target: "https://intero-gateway-production.up.railway.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-token/, ""),
      },
      "/api2": {
        target: "https://another-api.example.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, ""),
      },
      "/api3": {
        target: "https://yet-another-api.example.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api3/, ""),
      },
    },
  },
});
