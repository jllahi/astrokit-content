import SpotifyKeystatic from '@/components/embed/SpotifyKeystatic'
import YouTubeLiteEmbed from '@/components/embed/YouTubeLiteEmbed'
import { collection, config, fields, singleton } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'

// const isDev = import.meta.env.DEV

export default config({
	// storage: isDev
	// 	? { kind: 'local' }
	// 	: {
	// 		kind: 'github',
	// 		repo: { owner: 'jllahi', name: 'astrokit-content' },
	// 		branchPrefix: 'keystatic/'
	// 	},
	storage: {
		kind: 'local'
	},
	// KEYSTATIC UI
	ui: {
		brand: { name: 'Astrokit Keystatic' },
		navigation: {
			Content: ["posts", "pages"],
			Settings: ["tags", "navigation", "site"],
		},
	},
	// CONTENT COLLECTIONS
	collections: {
		// POSTS COLLECTION
		posts: collection({
			label: 'Posts',
			slugField: 'title',
			path: 'src/content/posts/*',
			format: { contentField: 'content' },
			entryLayout: 'content',
			columns: ['date'],
			previewUrl: `/posts/{slug}`,
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
						validation: {
							isRequired: true,
							length: {
								min: 5,
								max: 180
							}
						}
					}
				}),
				description: fields.text({
					label: 'Description',
					multiline: true,
					validation: {
						isRequired: true,
						length: {
							min: 5,
							max: 255
						}
					}
				}),
				date: fields.date({
					label: 'Date',
					defaultValue: { kind: 'today' },
					validation: {
						isRequired: true
					}
				}),
				updated: fields.date({ label: 'Updated' }),
				image: fields.image({
					label: 'Cover Image',
					directory: 'src/assets/images/posts',
					publicPath: '../../assets/images/posts/',
					validation: {
						isRequired: true
					}
				}),
				category: fields.text({
					label: 'Category',
					validation: {
						isRequired: true,
						length: {
							min: 3,
							max: 125
						}
					}
				}),
				tags: fields.array(fields.text({ label: 'Tag' }), {
					label: 'Tag',
					itemLabel: (props) => props.value
				}),
				featured: fields.checkbox({
					label: 'Featured',
					description: 'Set this post as featured to promote on homepage'
				}),
				draft: fields.checkbox({
					label: 'Draft',
					description: 'Set this post as draft to prevent it from being published'
				}),
				content: fields.mdx({
					label: 'Content',
					options: {
						divider: true,
						link: true,
						image: {
							directory: 'src/assets/images/posts',
							publicPath: '../../assets/images/posts/'
						}
					},
					components: {
						YouTube: block({
							label: 'YouTube video',
							ContentView: (props) => (
								<YouTubeLiteEmbed title={props.value.title} id={props.value.id} />
							),
							schema: {
								id: fields.text({
									label: 'Video ID', validation: {
										isRequired: true
									}
								}),
								title: fields.text({
									label: 'Video title', validation: {
										isRequired: true
									}
								}),
							}
						}),
						Spotify: block({
							label: 'Spotify playlist',
							ContentView: (props) => (
								<SpotifyKeystatic title={props.value.title} playlist={props.value.playlist} />
							),
							schema: {
								playlist: fields.text({
									label: 'Playlist ID', validation: {
										isRequired: true
									}
								}),
								title: fields.text({
									label: 'Playlist title', validation: {
										isRequired: true
									}
								}),
							}
						})
						// Testimonial: wrapper({
						// 	label: 'Testimonial',
						// 	schema: {
						// 		author: fields.text({ label: 'Author' }),
						// 		role: fields.text({ label: 'Role' }),
						// 	},
						// }),
					}
				})
				// content: fields.document({
				//   label: 'Content',
				//   formatting: true,
				//   dividers: true,
				//   links: true,
				//   images: {
				//     directory: 'src/assets/images/posts',
				//     publicPath: '../../assets/images/posts/',
				//   },
				// }),
			}
		}),
		// PAGES COLLECTION
		pages: collection({
			label: "Pages",
			slugField: "title",
			path: "src/content/pages/*",
			previewUrl: `/{slug}`,
			entryLayout: "content",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				description: fields.text({ label: "Description" }),
				content: fields.mdx({
					label: "Content",
					options: {
						divider: true,
						link: true,
						image: {
							directory: "src/assets/images/pages",
							publicPath: "../../assets/images/pages/",
						},
					},
				}),
			},
		}),
	},
	// SETTINGS SINGLETONS
	singletons: {
		// SITE SINGLETON
		site: singleton({
			label: "Site",
			path: "src/data/site",
			format: { data: "json" },
			schema: {
				title: fields.text({ label: "Title" }),
				description: fields.text({ label: "Description" }),
				image: fields.image({
					label: "Image",
					description: "Image used for SEO",
					directory: "src/assets/images/site",
				}),
			},
		}),
		// TAGS POSTS SINGLETON
		tags: singleton({
			label: "Tags",
			path: "src/data/tags",
			format: { data: "json" },
			schema: {
				tags: fields.array(
					fields.text({ label: "Posts Tags" }),
					// Labelling options
					{
						label: "Tag",
						itemLabel: (props) => props.value,
					}
				),
			},
		}),
		// NAVIGATION SINGLETON
		navigation: singleton({
			label: "Navigation",
			path: "src/data/navigation",
			format: { data: "json" },
			schema: {
				// tags: fields.array(
				// 	fields.text({ label: 'Tag' }),
				// 	// Labelling options
				// 	{
				// 		label: 'Tag',
				// 		itemLabel: (props) => props.value,
				// 	}
				// ),
				mainNav: fields.array(
					fields.object({
						name: fields.text({
							label: "Name",
							description: "Usually the name of the link",
						}),
						url: fields.url({ label: "URL" }),
						// projects: fields.array(
						// 	fields.relationship({
						// 		label: 'Posts',
						// 		collection: 'posts',
						// 		validation: {
						// 			isRequired: true,
						// 		},
						// 	}),
						// 	{
						// 		label: 'Posts',
						// 		itemLabel: (props) => props.value ?? 'Select a post',
						// 	}
						// ),
					}),
					// Labelling options
					{
						label: "Main Navigation",
						itemLabel: (props) => props.fields.name.value,
					}
				),
			},
		}),
	}
})