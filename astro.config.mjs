// import mkcert from "vite-plugin-mkcert"
import tailwind from "@astrojs/tailwind";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import { defineConfig, squooshImageService } from "astro/config";
import astroExpressiveCode from "astro-expressive-code";
import embeds from "astro-embed/integration";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [sentry(), spotlightjs(), tailwind(), embeds(), astroExpressiveCode(), mdx()],
  image: {
    service: squooshImageService()
  }
  // vite: {
  // 	plugins: [mkcert()],
  // },
});