# SCALDARSI MOTORS — Claude Project Conventions

## Stack
- Astro 5, TypeScript strict, Tailwind CSS 4, React (islands only)
- Tailwind: `@tailwindcss/vite` plugin (NOT `@astrojs/tailwind` — incompatible with Tailwind v4)
- Adapter: @astrojs/netlify (output: server)
- Deployed: Netlify (auto-deploy from `main` branch)

## Color System
| Token        | Value     | Use                          |
|--------------|-----------|------------------------------|
| --black      | #000000   | Primary background           |
| --rose-gold  | #C9A96E   | Accents, CTAs, nav active    |
| --white      | #FFFFFF   | Primary text                 |
| --charcoal   | #1C1C1C   | Footer, card backgrounds     |
| --soft-gold  | #E8D5A3   | Metallic highlights          |

## Typography
- Display: Cinzel (all-caps, letter-spacing 0.15–0.3em)
- Headings: Cormorant Garamond (italic for quotes)
- Body: DM Sans

## Image Hosting
- All images on Bunny CDN: https://scaldarsimotors.b-cdn.net
- Use CDN object from `src/lib/cdn.ts` — never hardcode URLs
- Use native `<img>` tags (NOT Astro `<Image>`) for CDN images
- Always include: width, height, alt, loading, decoding
- Hero images: loading="eager" fetchpriority="high"
- Never commit image files to repo

## Content Collections
- vehicles: src/content/vehicles/*.md
- yachts: src/content/yachts/*.md
- jets: src/content/jets/*.md
- Add new entries by creating new .md files with correct frontmatter
- Schema in src/content/config.ts

## React Islands Rule
- Use `client:load` only for ContactForm
- Navbar uses vanilla JS script tag (no island needed)
- Collection filter on emperor.astro uses vanilla JS

## Design Principles
- Extreme minimalism — negative space is the hero
- Black canvas (#000) with rose-gold (#C9A96E) highlights only
- Never loud, never cluttered — quiet confidence
- Micro-interactions: translateY(-6px) on card hover, gold underline slide on nav

## Brand Voice
- Short sentences. Poetic, never flowery.
- Key phrases: "Scripting art into history", "The Philosophy of Perfection",
  "Heirloom of the 21st century", "Monument to artistry"
- Never use: urgency, discounts, mass-market language, superlatives without context

## Contact Form
- API endpoint: src/pages/api/contact.ts
- Logs submissions to console — add email delivery integration when needed

## Deployment
1. Push to GitHub main branch
2. Netlify auto-deploys via netlify.toml config
3. Set NODE_VERSION=20 in Netlify env
4. Custom domain: point scaldarsimotors.com DNS to Netlify
