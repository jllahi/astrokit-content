export interface Social {
	github?: {
		link: string
		icon?: 'ri:github-line' | string
	}
	twitter?: {
		link: string
		icon?: 'ri:twitter-x-line' | string
	}
}

export const social: Social = {
	github: {
		link: 'https://github.com/withastro'
	},
	twitter: {
		link: 'https://twitter.com/astrodotbuild'
	}
}

export default social
