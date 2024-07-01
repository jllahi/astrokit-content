/** @type {import("prettier").Config} */
const prettierConfig = {
	astroAllowShorthand: true,
	arrowParens: 'avoid',
	bracketSpacing: true,
	jsxSingleQuote: false,
	proseWrap: 'always',
	tabWidth: 2, // indent_size = 2
	useTabs: true, // indent_style = space
	endOfLine: 'lf', // end_of_line = lf
	semi: false, // default: true
	singleQuote: true, // default: false
	printWidth: 80, // default: 80
	trailingComma: 'es5',
	tailwindAttributes: ['cn'],
	tailwindFunctions: ['cn'],
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-organize-imports',
		'prettier-plugin-packagejson',
		'prettier-plugin-tailwindcss',
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
export default prettierConfig
