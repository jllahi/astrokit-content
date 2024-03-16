import { getCollection, getEntry } from 'astro:content'

export interface Category {
	title: string
	description: string
	slug: string
}

const getCategories = async () => {
	const allCategories = await getCollection('categories')
	const filledcategories = allCategories.map(async (category) => {
		const relatedCategory = await getEntry(category)

		const filledCategory: Category = {
			title: relatedCategory.data.title,
			description: relatedCategory.data.description,
			slug: category.slug
		}
		return filledCategory
	})
	// console.dir(filledcategories)

	return filledcategories
}
// console.dir(getCategories)

export default getCategories
