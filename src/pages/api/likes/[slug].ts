import type { APIRoute } from 'astro'
import { db, eq, Like, sql } from 'astro:db'

export const prerender = false

// GET likes
export const GET: APIRoute = async ({ params }) => {
	const { slug } = params
	if (slug) {
		const data = await db.select().from(Like).where(eq(Like.postSlug, slug))
		return new Response(JSON.stringify(data[0] || { likesCount: 0 }), {
			status: 200,
		})
	} else {
		// Handle the case where slug is undefined
		// For example, return an error response
		return new Response('Slug parameter is missing', {
			status: 400,
		})
	}
	// const data = await db.select().from(Like).where(eq(Like.postSlug, slug))
	// return new Response(JSON.stringify(data[0] || { likesCount: 0 }), {
	//   status: 200,
	// })
}

// Add like
export const POST: APIRoute = async ({ params }) => {
	const { slug } = params
	try {
		await db
			.insert(Like)
			.values({ postSlug: slug, likesCount: 1 })
			.onConflictDoUpdate({
				target: Like.postSlug,
				set: { likesCount: sql`${Like.likesCount} + 1` },
			})
		return new Response(null, { status: 200 })
	} catch (e) {
		throw new Error(e as string)
	}
}
