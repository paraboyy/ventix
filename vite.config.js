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
      "/token": {
        target: "https://intero-gateway-production.up.railway.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-token/, ""),
      },
      "/events": {
        target: "https://ventix-event-production.up.railway.app/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, ""),
      },
      "/images": {
        target: "https://intero.nibdo.dev/api/v1/cms",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api3/, ""),
      },
      "/register": {
        target: "https://intero-gateway-production.up.railway.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api3/, ""),
      },
    },
  },
});
