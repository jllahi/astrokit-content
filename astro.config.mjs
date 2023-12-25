// import mkcert from "vite-plugin-mkcert"
// import sentry from '@sentry/astro'
// import spotlightjs from '@spotlightjs/astro'
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import embeds from 'astro-embed/integration';
import astroExpressiveCode from 'astro-expressive-code';
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
import sitemap from '@astrojs/sitemap';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrokit-content.vercel.app',
  integrations: [
  // sentry(),
  // spotlightjs(),
  tailwind(), embeds(), astroExpressiveCode(), mdx(), sitemap(), robotsTxt()],
  markdown: {
    remarkPlugins: [remarkReadingTime
    // remarkToc,
    // [
    // 	remarkCollapse,
    // 	{
    // 		test: 'Table of contents',
    // 	},
    // ],
    ]
    // other config
  }
  // image: {
  //   service: squooshImageService()
  // }
  // vite: {
  // 	plugins: [mkcert()],
  // },
});