// import mkcert from 'vite-plugin-mkcert'
// import sentry from '@sentry/astro'
// import spotlightjs from '@spotlightjs/astro'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import keystatic from '@keystatic/astro'
import debugcss from 'astro-debugcss'
import AstroDevtoolbarTailwind from 'astro-devtoolbar-tailwind'
import embeds from 'astro-embed/integration'
import astroExpressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import metaTags from 'astro-meta-tags'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	site: 'https://astrokit-content.vercel.app',
	output: 'hybrid',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		}
		// imagesConfig: {
		//   sizes: [320, 640, 1280],
		// },
	}),
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
					'arrow-left-double-fill',
					'calendar-2-line',
					'github-line',
					'mail-line',
					'twitter-x-line',
					'whatsapp-line'
				]
				// uis: ['*'],
			}
		}),
		debugcss(),
		metaTags(),
		react(),
		keystatic(),
		AstroDevtoolbarTailwind()
	],
	vite: {
		ssr: {
			external: ['@keystatic/core']
		}
	},
	experimental: {
		contentCollectionCache: false,
		contentCollectionJsonSchema: true
	}
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
