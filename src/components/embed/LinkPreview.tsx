export interface LinkPreviewProps {
	/** URL to fetch Open Graph data. */
	id: string
	title?: string
}

export default function LinkPreviewEmbed({
	id,
	title = 'Link title'
}: LinkPreviewProps) {
	// const meta = await parseOpenGraph(id)
	// const domain = meta?.url ? new URL(meta.url).hostname.replace('www.', '') : ''

	return (
		<article>
			<p>
				<a href={id}>{title}</a>
			</p>
			<small>{id}</small>
		</article>
	)
}
// export default function LikePreviewEmbed({ id, title }: YouTubeLiteEmbedProps) {
// 	const meta = await parseOpenGraph(id)
// 	const domain = meta?.url ? new URL(meta.url).hostname.replace('www.', '') : ''

// 	return (
// 		<article
// 			class:list={[
// 				'link-preview',
// 				{
// 					'link-preview--has-video': meta.video && meta.videoType,
// 					'link-preview--no-media': !((meta.video && meta.videoType) || meta.image)
// 				}
// 			]}
// 		>
// 			<div className="link-preview__content">
// 				<header>
// 					<a className="link-preview__title" href={id}>
// 						{meta.title}
// 					</a>{' '}
// 					{domain && <small className="link-preview__domain">{domain}</small>}
// 				</header>
// 				<small className="link-preview__description">{meta.description}</small>
// 			</div>
// 			{meta.video && meta.videoType ? (
// 				<video controls preload="metadata" width="1200" height="630">
// 					<source src={meta.video} type={meta.videoType} />
// 				</video>
// 			) : (
// 				meta.image && <img src={meta.image} alt={meta.imageAlt || ''} width="1200" height="630" />
// 			)}
// 		</article>
// 	)
// }
