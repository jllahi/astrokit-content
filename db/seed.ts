import { Guestbook, Like, db } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Like).values([
		{ postSlug: 'habitasse-platea-volutpat', likesCount: 3 },
		{ postSlug: 'tellus-mauris-diam-maecenas', likesCount: 1 },
	])
	await db.insert(Guestbook).values([
		{
			title: 'Hello!',
			name: 'Guillermo',
			message: 'I like this website so much. I need more like this.',
			date: new Date('2024-05-01T14:30:16.033Z'),
		},
	])
	// await db.insert(Comment).values([
	// 	{ postSlug: 'habitasse-platea-volutpat', likesCount: 3 },
	// 	{ postSlug: 'tellus-mauris-diam-maecenas', likesCount: 1 },
	// ])
}
