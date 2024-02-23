interface Site {
	title: string
	description: string
	language: string
	logo?: {
		src: './src/assets/icons/logo.svg'
		alt: string
	}
	opengraph: {
		title: string
		description: string
		image?: string
	}
	urls: {
		posts: string
		tags: string
		category: string
	}
	pagination: number
	scheduled: number
}
