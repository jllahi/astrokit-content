import { defineCollection, z } from 'astro:content'
// import { rssSchema } from '@astrojs/rss';

const posts = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			// slug: z.string().optional(),
			title: z.string().trim().max(180),
			description: z.string().trim().max(256),
			// Transform string to Date object
			date: z.coerce.date(),
			updated: z.coerce.date().optional(),
			image: image().refine((img) => img.width >= 400, {
				message: 'Cover image must be at least 400 pixels wide!'
			}),
			// categories: z.array(z.string()).default(['Uncategorized']),
			// categories: reference("categories"),
			// tags: z.array(reference("tags")).optional(),
			category: z.string().optional(),
			tags: z.array(z.string()).default([]), // optional(),
			draft: z.boolean().optional(),
			featured: z.boolean().optional(),
			// author: z.string().default(SITE.author),
			reading: z.string().optional()
		})
})

// const links = defineCollection({
//   type: "data",
//   schema: z.object({
//     title: z.string().optional(),
//     description: z.string().optional(),
//     url: z.string().url().optional(),
//   }),
// })

export const collections = { posts }
