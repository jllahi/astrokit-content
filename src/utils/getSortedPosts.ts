/**
 * Filters and sorts a collection of posts by date, excluding drafts.
 *
 * @param posts - The array of post entries to filter and sort.
 * @returns The filtered and sorted array of post entries.
 */
import type { CollectionEntry } from "astro:content"

const getSortedPosts = (posts: CollectionEntry<"posts">[]) =>
	posts
		.filter(({ data }) => !data.draft)
		.sort(
			(a, b) =>
				Math.floor(new Date(b.data.date).getTime() / 1000) -
				Math.floor(new Date(a.data.date).getTime() / 1000)
		)

export default getSortedPosts
