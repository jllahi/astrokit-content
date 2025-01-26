import { defineAction } from 'astro:actions'
import { Guestbook, db } from 'astro:db'
import { z } from 'astro:schema'

export const server = {
	// ...guestbookActions,
	guestbook: defineAction({
		accept: 'form',
		input: z.object({
			name: z.string(),
			title: z.string(),
			message: z.string(),
		}),
		handler: async ({ title, name, message }) => {
			// const { name, title, message } = input
			// const date = new Date()
			const result = await db
				.insert(Guestbook)
				.values({ name, title, message })
				.execute()
			return result
		},
	}),
}
