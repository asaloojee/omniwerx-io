// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Read survey flag from environment variable at build time
const SURVEY_ENABLED = process.env.SURVEY_ENABLED === 'true';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  vite: {
    define: {
      // Make survey flag available to both server and client code
      'import.meta.env.SURVEY_ENABLED': JSON.stringify(SURVEY_ENABLED)
    }
  }
});
