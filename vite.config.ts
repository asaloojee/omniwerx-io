import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite-plus";

const ignoredPaths = [".pi-lens/**", "**/.pi-lens/**"];

export default defineConfig({
  plugins: [sveltekit()],
  fmt: {
    ignorePatterns: ignoredPaths,
  },
  lint: {
    ignorePatterns: ignoredPaths,
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["omx-mac"],
  },
});
