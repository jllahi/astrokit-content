interface Props {
	title: string
	playlist: string
	height?: number
}

export default function SpotifyKeystatic({
	title,
	playlist,
	height = 372,
}: Props) {
	return (
		<iframe
			className="rounded-xl"
			title={title}
			src={`https://open.spotify.com/embed/playlist/${playlist}?utm_source=generator&theme=1`}
			width="100%"
			height={height}
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		></iframe>
	)
}
