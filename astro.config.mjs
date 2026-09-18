// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ricky.space',
  integrations: [sitemap()],
  redirects: {
    '/about': {
      status: 301,
      destination: '/#about'
    },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['nonconsistorial-verlene-subdorsally.ngrok-free.dev']
    }
  }
});
