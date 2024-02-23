import type { CollectionEntry } from 'astro:content'
import getSortedPosts from './getSortedPosts'
import { slugifyStr } from './slugify'

const getPostsByCategory = (posts: CollectionEntry<'posts'>[], category: string) =>
	getSortedPosts(posts.filter((post) => slugifyStr(post.data.category).includes(category)))

export default getPostsByCategory
