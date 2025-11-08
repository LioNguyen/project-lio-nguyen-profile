import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "@svgr/rollup";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
  plugins: [
    react(),
    svgr(),
    tsConfigPaths(),
    // Temporarily disabled due to dependency issues with bun
    // dts({
    //   include: ["src"],
    // }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@/core": resolve(__dirname, "./src/core"),
      "@/pages": resolve(__dirname, "./src/pages"),
      "@/shared": resolve(__dirname, "./src/shared"),
      "@/test": resolve(__dirname, "./src/test"),
      // Legacy aliases for backward compatibility during migration
      "@/assets": resolve(__dirname, "./src/shared/assets"),
      "@/constants": resolve(__dirname, "./src/core/config"),
      "@/components": resolve(__dirname, "./src/core/components"),
      "@/hooks": resolve(__dirname, "./src/shared/hooks"),
      "@/stories": resolve(__dirname, "./src/stories"),
      "@/utils": resolve(__dirname, "./src/shared/utils"),
    },
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
}));
