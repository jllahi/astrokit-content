import type { Site } from './types'

export const site: Site = {
	title: 'AstroKit',
	description: 'We are all made from stars',
	language: 'es',
	opengraph: {
		title: 'AstroKit',
		description: 'We are all made from stars',
		image: './open-graph.jpg'
	},
	urls: {
		posts: 'posts',
		tags: 'tags',
		category: 'categories'
	},
	pagination: 6,
	scheduled: 16000
}

export default site
