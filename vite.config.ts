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
      "@/assets": resolve(__dirname, "./src/assets"),
      "@/constants": resolve(__dirname, "./src/constants"),
      "@/components": resolve(__dirname, "./src/components"),
      "@/hooks": resolve(__dirname, "./src/hooks"),
      "@/stories": resolve(__dirname, "./src/stories"),
      "@/utils": resolve(__dirname, "./src/utils"),
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
}));
