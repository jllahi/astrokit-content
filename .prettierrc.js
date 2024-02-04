// import standardConfig from 'prettier-config-standard'
/** @type {import("prettier").Config} */
export default {
	// ...standardConfig,
	useTabs: true,
	tabWidth: 4,
	singleQuote: true,
	trailingComma: 'none',
	semi: false,
	printWidth: 80,
	astroAllowShorthand: true,
	// pluginSearchDirs: false,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-organize-imports',
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
