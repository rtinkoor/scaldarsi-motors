import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://scaldarsimotors.com',
  output: 'static',
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'scaldarsimotors.b-cdn.net' },
    ],
  },
});
