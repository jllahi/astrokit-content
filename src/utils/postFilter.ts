import site from '@/data/site'
import type { CollectionEntry } from 'astro:content'

const postFilter = ({ data }: CollectionEntry<'posts'>) => {
	const isPublishTimePassed = Date.now() > new Date(data.date).getTime() - site.scheduled
	return !data.draft && (import.meta.env.DEV || isPublishTimePassed)
}

export default postFilter
