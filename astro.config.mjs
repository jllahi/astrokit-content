import tailwind from "@astrojs/tailwind"
import sentry from "@sentry/astro"
import spotlightjs from "@spotlightjs/astro"
import { defineConfig, squooshImageService } from "astro/config"
import mkcert from "vite-plugin-mkcert"

// https://astro.build/config
export default defineConfig({
	integrations: [sentry(), spotlightjs(), tailwind()],
	image: {
		service: squooshImageService(),
	},
	// vite: {
	// 	plugins: [mkcert()],
	// },
})
