import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [
    cloudflare({
      adapter: node(),
    }),
  ],
  output: 'server',
});
