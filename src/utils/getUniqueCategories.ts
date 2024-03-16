import type { CollectionEntry } from 'astro:content'
import postFilter from './postFilter'
import { slugifyStr } from './slugify'

export interface Category {
	category: string
	categoryName: string
}

const getUniqueCategories = (posts: CollectionEntry<'posts'>[]) => {
	const categories: Category[] = posts
		.filter(postFilter)
		.flatMap((post) => post.data.category)
		.map((category) => ({ category: slugifyStr(category), categoryName: category }))
		.filter(
			(value, index, self) =>
				self.findIndex((category) => category.category === value.category) === index
		)
		.sort((categoryA, categoryB) => categoryA.category.localeCompare(categoryB.category))
	return categories
}

export default getUniqueCategories
