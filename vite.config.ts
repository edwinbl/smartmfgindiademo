import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    rollupOptions: {
      output: {
        // Split large/shared third-party deps into stable vendor chunks
        // so they cache across deploys and never duplicate inside per-route chunks.
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("/react-router") || id.includes("/react-dom/") || /\/react\//.test(id)) {
            return "vendor-react";
          }
          if (id.includes("@radix-ui")) return "vendor-radix";
          if (id.includes("recharts") || id.includes("d3-")) return "vendor-charts";
          if (
            id.includes("embla-carousel") ||
            id.includes("react-day-picker") ||
            id.includes("vaul") ||
            id.includes("cmdk") ||
            id.includes("input-otp") ||
            id.includes("sonner")
          ) {
            return "vendor-ui";
          }
          if (id.includes("@tanstack")) return "vendor-query";
          if (id.includes("lucide-react")) return "vendor-icons";
          return undefined;
        },
      },
    },
  },
}));
