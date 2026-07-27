import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		excerpt: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		author: z.string(),
		authorRole: z.string(),
		category: z.string(),
		categorySlug: z.string(),
		image: z.string(),
		imageAlt: z.string(),
		imageWidth: z.number(),
		imageHeight: z.number(),
		metaTitle: z.string(),
		metaDescription: z.string(),
		canonicalPath: z.string(),
		ogTitle: z.string(),
		ogDescription: z.string(),
		keywords: z.array(z.string()),
		tags: z.array(z.string()),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
