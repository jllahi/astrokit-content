import type { CollectionEntry } from 'astro:content'
import postFilter from './postFilter'
import { slugifyStr } from './slugify'

interface Category {
	category: string
	categoryName: string
}

const getUniqueCategories = (posts: CollectionEntry<'posts'>[]) => {
	const categories: Category[] = posts
		.filter(postFilter)
		.flatMap((post) => post.data.category)
		.map((category) => ({ category: slugifyStr(category), categoryName: category }))
		.filter(
			(value, index, self) => self.findIndex((tag) => tag.category === value.category) === index
		)
		.sort((tagA, tagB) => tagA.category.localeCompare(tagB.category))
	return categories
}

export default getUniqueCategories
