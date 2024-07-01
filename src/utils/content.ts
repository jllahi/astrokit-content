import site from '@/data/site'
import { getCollection, type CollectionEntry } from 'astro:content'

// export function filterContent<items>(
export function filterContent(
	// items: CollectionEntry<ContentCollectionKey>[],
	items: CollectionEntry<'posts'>[],
	{
		filterOutDrafts = true,
		filterOutFuture = true,
		sortByDate = true,
		limit = undefined,
	}: {
		filterOutDrafts?: boolean
		filterOutFuture?: boolean
		sortByDate?: boolean
		limit?: number | undefined
	} = {}
) {
	const filteredContent = items.filter(item => {
		const { date, draft } = item.data

		// filterOutDrafts if true
		if (filterOutDrafts && draft && !import.meta.env.DEV) return false

		// filterOutFuturePosts if true
		if (filterOutFuture && date && new Date(date) > new Date()) return false

		return true
	})

	// sortByDate or randomize
	if (sortByDate) {
		filteredContent.sort(
			(a, b) =>
				new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
		)
	} else {
		filteredContent.sort(() => Math.random() - 0.5)
	}

	// limit if number is passed
	if (typeof limit === 'number') {
		return filteredContent.slice(0, limit)
	}

	return filteredContent
}

export function formatDate(date: string | number | Date) {
	return new Date(date).toLocaleDateString(site.language, {
		timeZone: 'UTC',
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	})
}
export function getDay(date: string | number | Date) {
	return new Date(date).toLocaleDateString(site.language, {
		timeZone: 'UTC',
		day: 'numeric',
	})
}
export function getMonth(date: string | number | Date) {
	return new Date(date).toLocaleDateString(site.language, {
		timeZone: 'UTC',
		month: 'short',
	})
}

export function slugify(text: string) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/-{2,}/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '')
}

export const getSortedPosts = (posts: CollectionEntry<'posts'>[]) =>
	posts
		.filter(({ data }) => !data.draft)
		.sort(
			(a, b) =>
				Math.floor(new Date(b.data.date).getTime() / 1000) -
				Math.floor(new Date(a.data.date).getTime() / 1000)
		)

export function getAllTags(posts: CollectionEntry<'posts'>[]) {
	const tags: string[] = [
		...new Set(posts.flatMap(post => post.data.tags || []).filter(Boolean)),
	]
	return tags
		.map(tag => {
			return {
				name: tag,
				slug: slugify(tag),
			}
		})
		.filter((obj, pos, arr) => {
			return arr.map(mapObj => mapObj.slug).indexOf(obj.slug) === pos
		})
}

// export function getAllCategories(posts: CollectionEntry<'posts'>[]) {
// 	const categories: string[] = [
// 		...new Set(posts.flatMap((post) => post.data.category!).filter(Boolean))
// 	]
// 	return categories
// 		.map((category) => {
// 			return {
// 				name: category,
// 				slug: slugify(category)
// 			}
// 		})
// 		.filter((obj, pos, arr) => {
// 			return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos
// 		})
// }

export function getPostsByTag(
	posts: CollectionEntry<'posts'>[],
	tagSlug: string
) {
	const filteredPosts: CollectionEntry<'posts'>[] = posts.filter(post =>
		(post.data.tags || []).map(tag => slugify(tag)).includes(tagSlug)
	)
	return filteredPosts
}

export async function getPostsByCategory(category: string) {
	const posts = (await getCollection('posts'))
		.filter(
			post =>
				post.data.category.slug === category &&
				post.data.draft !== undefined &&
				!import.meta.env.DEV
		)
		// .filter(
		// 	(post) =>
		// 		post.data.category === category && post.data.draft !== undefined && !import.meta.env.DEV
		// )
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

	// filterOutFuturePosts if true
	// if (filterOutFuture && new Date(date) > new Date()) return false
	return posts
}
