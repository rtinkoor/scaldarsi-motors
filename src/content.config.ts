import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const vehicles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vehicles' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    finish: z.enum(['Matte', 'Gloss', 'Metallic', 'Raw']),
    specification: z.enum(['Standard', 'Extended Wheelbase', 'Track', 'Collector']),
    priceDisplay: z.string().default('Upon Request'),
    image: z.string(),
    featured: z.boolean().default(false),
    detailImages: z.array(z.string()).optional(),
    description: z.string(),
    highlights: z.array(z.string()),
    order: z.number(),
  }),
});

const yachts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/yachts' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    length: z.string(),
    year: z.number(),
    priceDisplay: z.string().default('Upon Request'),
    image: z.string(),
    featured: z.boolean().default(false),
    specs: z.object({
      guests: z.number(),
      crew: z.number(),
      range: z.string(),
      speed: z.string(),
    }),
    description: z.string(),
  }),
});

const jets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jets' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    model: z.string(),
    year: z.number(),
    priceDisplay: z.string().default('Upon Request'),
    image: z.string(),
    featured: z.boolean().default(false),
    specs: z.object({
      range: z.string(),
      passengers: z.number(),
      speed: z.string(),
      ceiling: z.string(),
    }),
    description: z.string(),
  }),
});

export const collections = { vehicles, yachts, jets };
