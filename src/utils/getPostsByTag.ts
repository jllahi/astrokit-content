import type { CollectionEntry } from 'astro:content'
import getSortedPosts from './getSortedPosts'
import { slugifyAll, slugifyStr } from './slugify'

const getPostsByTag = (posts: CollectionEntry<'posts'>[], tag: string) =>
	getSortedPosts(
		posts.filter((post) => slugifyAll(post.data.tags).includes(slugifyStr(tag)))
	)

export default getPostsByTag
