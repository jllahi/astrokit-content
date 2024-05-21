import { Like, Newsletter, db } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Like).values([
		{ postSlug: 'habitasse-platea-volutpat', likesCount: 3 },
		{ postSlug: 'tellus-mauris-diam-maecenas', likesCount: 1 }
	])
	await db
		.insert(Newsletter)
		.values([
			{ email: 'johndoe@example.com' },
			{ email: 'janedoe@example.com' }
		])
}
