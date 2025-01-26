import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import keystatic from '@keystatic/astro'
// import sentry from '@sentry/astro'
// import spotlightjs from '@spotlightjs/astro'
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
	// trailingSlash: 'always',
	// build: {
	// 	format: 'directory'
	// },
	// output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		// imagesConfig: {
		//   sizes: [320, 640, 1280],
		// },
	}),
	integrations: [
		// sentry(),
		// spotlightjs(),
		AstroDevtoolbarTailwind(),
		astroExpressiveCode(),
		db(),
		embeds(),
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
					'whatsapp-line',
				],
				// uis: ['*'],
			},
		}),
		keystatic(),
		mdx(),
		metaTags(),
		react(),
		robotsTxt(),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	vite: {
		ssr: {
			external: ['@keystatic/core'],
		},
		// plugins: [mkcert()],
		// server: {
		// 	https: true
		// }
	},
	experimental: {
		// actions: true,
		contentIntellisense: true,
		// contentLayer: true,
		// contentCollectionCache: true,
		// serverIslands: true,
		// contentCollectionJsonSchema: true,
	},
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
})
