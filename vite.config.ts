import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  fmt: {
    useTabs: false,
    tabWidth: 2,
    overrides: [
      {
        files: ["*.css"],
        options: {
          useTabs: true,
        },
      },
    ],
  },
  staged: {
    "*": "vp check --fix",
  },
});
