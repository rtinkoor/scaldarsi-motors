import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://scaldarsimotors.com',
  output: 'server',
  adapter: netlify(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'scaldarsimotors.b-cdn.net' },
    ],
  },
});
