import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export interface YouTubeLiteEmbedProps {
	id: string
	title: string
	poster?: 'hqdefault' | 'maxresdefault' | 'sddefault' | 'mqdefault' | 'default'
	cover?: string
}

export default function YouTubeLiteEmbed({
	id,
	title,
	cover,
	poster = 'sddefault'
}: YouTubeLiteEmbedProps) {
	return (
		<div>
			<LiteYouTubeEmbed
				id={id}
				title={title}
				noCookie={true}
				poster={poster}
				playlistCoverId={cover}
			/>
		</div>
	)
}
