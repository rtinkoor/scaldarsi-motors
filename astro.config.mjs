import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.scaldarsimotors.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/api/'),
      serialize(item) {
        const priorities = {
          '/':          { priority: 1.0, changefreq: 'monthly' },
          '/emperor/':     { priority: 0.9, changefreq: 'monthly' },
          '/commission/':  { priority: 0.8, changefreq: 'monthly' },
          '/yachts/':      { priority: 0.7, changefreq: 'monthly' },
          '/jets/':     { priority: 0.7, changefreq: 'monthly' },
          '/about/':    { priority: 0.6, changefreq: 'monthly' },
        };
        const path = new URL(item.url).pathname;
        const meta = priorities[path] ?? { priority: 0.5, changefreq: 'monthly' };
        return { ...item, ...meta };
      },
    }),
  ],
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'scaldarsimotors.b-cdn.net' },
    ],
  },
});
