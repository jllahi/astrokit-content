// import mkcert from 'vite-plugin-mkcert'
// import sentry from '@sentry/astro'
// import spotlightjs from '@spotlightjs/astro'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import debugcss from 'astro-debugcss'
import embeds from 'astro-embed/integration'
import astroExpressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import metaTags from 'astro-meta-tags'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	site: 'https://astrokit-content.vercel.app',
	integrations: [
		// sentry(),
		// spotlightjs(),
		tailwind(),
		embeds(),
		astroExpressiveCode(),
		mdx(),
		sitemap(),
		robotsTxt(),
		icon({
			iconDir: 'src/assets/icons',
			include: {
				heroicons: ['sun', 'moon'],
				ri: [
					'github-line',
					'twitter-x-line',
					'calendar-2-line',
					'price-tag-3-line'
				]
				// uis: ['*'],
			}
		}),
		debugcss(),
		metaTags()
	]
	// markdown: {
	// 	remarkPlugins: [
	// 		remarkReadingTime
	// 		remarkToc,
	// 		[
	// 			remarkCollapse,
	// 			{
	// 				test: 'Table of contents',
	// 			},
	// 		],
	// 	]
	// },
	//
	// image: {
	//   service: squooshImageService()
	// }
	//
	// vite: {
	// 	plugins: [mkcert()]
	// }
})
