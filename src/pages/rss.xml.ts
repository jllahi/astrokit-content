import { filterContent } from '@/utils/content'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
// import { rssSchema } from '@astrojs/rss';

export async function GET(context: APIContext) {
  const allPosts = await getCollection('posts')
  const posts = filterContent(allPosts)

  return rss({
    title: 'AstroKit',
    description: 'We are all made of stars',
    site: context.site as URL,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      // customData: post.data.date,
      link: `/post/${post.slug}/`,
    })),
  })
}
