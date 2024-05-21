import { type CollectionEntry } from 'astro:content'
import getSortedPosts from './getSortedPosts'

// const posts = await getCollection('posts')
// let categories = getUniqueCategories(posts)

const getPostsByCategory = (
	posts: CollectionEntry<'posts'>[],
	category: string
) => getSortedPosts(posts.filter((post) => post.data.category.slug == category))
// getSortedPosts(posts.filter((post) => slugifyStr(post.data.category).includes(category)))

export default getPostsByCategory
