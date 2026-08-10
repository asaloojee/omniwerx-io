// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://omniwerx.io",
  vite: {
    assetsInclude: ["**/*.glb", "**/*.hdr"],
  },
});
