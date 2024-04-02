import SpotifyKeystatic from '@/components/embed/SpotifyKeystatic'
import YouTubeLiteEmbed from '@/components/embed/YouTubeLiteEmbed'
import { collection, config, fields, singleton } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'

// const isDev = import.meta.env.DEV

export default config({
	storage: import.meta.env.DEV
		? { kind: 'local' }
		: {
				kind: 'github',
				repo: { owner: 'jllahi', name: 'astrokit-content' },
				branchPrefix: 'keystatic/'
			},

	// KEYSTATIC UI
	ui: {
		brand: { name: 'Astrokit Keystatic' },
		navigation: {
			Content: ['posts', 'pages', 'categories'],
			Settings: ['site', 'tags', 'navigation']
		}
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
			columns: ['title', 'date'],
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
				category: fields.relationship({
					label: 'Category',
					// description: 'The country this person lives in',
					collection: 'categories'
				}),
				// category: fields.text({
				// 	label: 'Category',
				// 	validation: {
				// 		isRequired: true,
				// 		length: {
				// 			min: 3,
				// 			max: 125
				// 		}
				// 	}
				// }),
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
						// Gallery: block({
						// 	label: 'Gallery',
						// 	ContentView: (props) => (
						// 		<Gallery src={props.value.src} alt={props.value.alt} />
						// 	),
						// 	schema: {
						// 		src: fields.text({
						// 			label: 'Source',
						// 			validation: {
						// 				isRequired: true
						// 			}
						// 		}),
						// 		alt: fields.text({
						// 			label: 'Text alternative',
						// 			validation: {
						// 				isRequired: true
						// 			}
						// 		}),
						// 	}
						// }),
						YouTube: block({
							label: 'YouTube video',
							ContentView: (props: { value: { title: string; id: string } }) => (
								<YouTubeLiteEmbed title={props.value.title} id={props.value.id} />
							),
							schema: {
								id: fields.text({
									label: 'Video ID',
									validation: {
										isRequired: true
									}
								}),
								title: fields.text({
									label: 'Video title',
									validation: {
										isRequired: true
									}
								})
							}
						}),
						Spotify: block({
							label: 'Spotify playlist',
							ContentView: (props: { value: { title: string; playlist: string } }) => (
								<SpotifyKeystatic title={props.value.title} playlist={props.value.playlist} />
							),
							schema: {
								playlist: fields.text({
									label: 'Playlist ID',
									validation: {
										isRequired: true
									}
								}),
								title: fields.text({
									label: 'Playlist title',
									validation: {
										isRequired: true
									}
								})
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
			label: 'Pages',
			slugField: 'title',
			columns: ['title'],
			path: 'src/content/pages/*',
			previewUrl: `/{slug}`,
			entryLayout: 'content',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
						validation: {
							isRequired: true
						}
					}
				}),
				description: fields.text({
					label: 'Description',
					validation: {
						isRequired: true
					}
				}),
				date: fields.date({
					label: 'Date',
					defaultValue: { kind: 'today' },
					validation: {
						isRequired: false
					}
				}),
				content: fields.mdx({
					label: 'Content',
					options: {
						divider: true,
						link: true,
						image: {
							directory: 'src/assets/images/pages',
							publicPath: '../../assets/images/pages/'
						}
					}
				})
			}
		}),

		// CATEGORIES COLLECTION
		categories: collection({
			label: 'Categories',
			slugField: 'title',
			columns: ['title'],
			path: 'src/content/categories/*',
			previewUrl: `/categories/{slug}`,
			entryLayout: 'form',
			format: { contentField: 'content' },
			// format: { contentField: 'description' },
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
						validation: {
							isRequired: true
						}
					}
				}),
				description: fields.text({
					label: 'Description',
					multiline: true,
					validation: {
						isRequired: true
					}
				}),
				content: fields.mdx({
					label: 'Content',
					options: {
						// divider: true,
						// link: true,
						// image: {
						// 	directory: 'src/assets/images/pages',
						// 	publicPath: '../../assets/images/pages/'
						// }
					}
				})
			}
		})
	},

	// SETTINGS SINGLETONS

	singletons: {
		// SITE SINGLETON
		site: singleton({
			label: 'Site',
			path: 'src/data/site',
			format: { data: 'json' },
			schema: {
				title: fields.text({
					label: 'Title',
					validation: {
						isRequired: true
					}
				}),
				description: fields.text({
					label: 'Description',
					validation: {
						isRequired: true
					}
				}),
				image: fields.image({
					label: 'Image',
					description: 'Image used for SEO',
					directory: 'src/assets/images/site',
					validation: {
						isRequired: true
					}
				})
			}
		}),

		// TAGS POSTS SINGLETON
		tags: singleton({
			label: 'Tags',
			path: 'src/data/tags',
			format: { data: 'json' },
			schema: {
				tags: fields.array(
					fields.text({
						label: 'Post Tag',
						validation: {
							isRequired: true
						}
					}),
					// Labelling options
					{
						label: 'Tags for posts',
						itemLabel: (props) => props.value
					}
				)
			}
		}),

		// NAVIGATION SINGLETON
		navigation: singleton({
			label: 'Navigation',
			path: 'src/content/navigation/main',
			format: { data: 'json' },
			schema: {
				mainNav: fields.array(
					fields.object({
						name: fields.text({
							label: 'Name',
							description: 'Usually the name of the link',
							validation: {
								isRequired: true
							}
						}),
						url: fields.url({
							label: 'URL',
							validation: {
								isRequired: true
							}
						})
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
						label: 'Main Navigation',
						itemLabel: (props) => props.fields.name.value
					}
				)
			}
		})
	}
})
