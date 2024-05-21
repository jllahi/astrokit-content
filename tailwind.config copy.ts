import containerQueries from '@tailwindcss/container-queries'
import typography from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import colors from 'tailwindcss/colors'
import theme from 'tailwindcss/defaultTheme'

export default {
	darkMode: [
		'variant',
		[
			'@media (prefers-color-scheme: dark) { &:where(:not(.light *, .light)) }',
			'&:where(.dark *, .dark)'
		]
	],
	// darkMode: ['class', '[data-mode="dark"]'],
	// darkMode: ['class'], // '[data-mode="dark"]'],
	// darkMode: ['selector'], // '[data-mode="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...theme.fontFamily.sans],
				heading: ['Montserrat Variable', ...theme.fontFamily.sans],
				logo: ['Montserrat Variable', ...theme.fontFamily.sans]
			},
			colors: {
				'color-black': colors.gray[900],
				'color-white': colors.gray[100],

				'color-bg-light': colors.pink[300],
				'color-bg-dark': colors.pink[950],

				'color-primary-darker': colors.pink[900],
				'color-primary-dark': colors.pink[700],
				'color-primary': colors.pink[500],
				'color-primary-light': colors.pink[300],
				'color-primary-lighter': colors.pink[100],

				'color-secondary-darker': colors.orange[900],
				'color-secondary-dark': colors.orange[700],
				'color-secondary': colors.orange[500],
				'color-secondary-light': colors.orange[300],
				'color-secondary-lighter': colors.orange[100],

				'color-accent-darker': colors.sky[900],
				'color-accent-dark': colors.sky[700],
				'color-accent': colors.sky[500],
				'color-accent-light': colors.sky[300],
				'color-accent-lighter': colors.sky[100],

				'color-success-dark': colors.green[800],
				'color-success': colors.green[500],
				'color-success-light': colors.green[200],

				'color-error-dark': colors.red[800],
				'color-error': colors.red[500],
				'color-error-light': colors.red[200],

				'color-warning-dark': colors.yellow[800],
				'color-warning': colors.yellow[500],
				'color-warning-light': colors.yellow[200]
			}
			// borderColor: ({ theme }) => ({
			// 	...theme('colors'),
			// 	DEFAULT: theme('colors.gray.200', 'currentColor'),
			// 	'color-light': colors.gray[200],
			// 	'color-dark:': colors.gray[800]
			// })
		}
	},
	plugins: [typography, containerQueries, animate]
} satisfies Config
