/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	tabWidth: 2,
	singleQuote: true,
	trailingComma: 'none',
	semi: false,
	// printWidth: 100,
	astroAllowShorthand: true,
	// pluginSearchDirs: false,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-organize-imports',
		'prettier-plugin-packagejson',
		'prettier-plugin-tailwindcss'
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
}
