import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GH_BASE === "true" ? "/peakmode/" : "/",
  plugins: [react()],
  server: {
    watch: {
      ignored: ["**/node_modules_old/**", "**/dist/**"],
    },
  },
});