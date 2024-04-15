import { Like, db } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Like).values([
		{ postSlug: 'habitasse-platea-volutpat', likesCount: 3 },
		{ postSlug: 'tellus-mauris-diam-maecenas', likesCount: 1 }
	])
}
