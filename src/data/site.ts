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
}

export const site: Site = {
	title: 'AstroKit',
	description: 'We are all made from stars',
	language: 'es-ES',
	opengraph: {
		title: 'AstroKit',
		description: 'We are all made from stars',
		image: './src/assets/image/blast.jpg'
	}
}

export default site
