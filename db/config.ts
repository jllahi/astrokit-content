import { column, defineDb, defineTable, NOW } from 'astro:db'

const Like = defineTable({
	columns: {
		postSlug: column.text({ primaryKey: true }),
		likesCount: column.number({ default: 0 }),
	},
})

// const Comment = defineTable({
// 	columns: {
// 		title: column.text({ primaryKey: true }),
// 		name: column.text(),
// 		message: column.text(),
// 		date: column.date({ default: NOW }),
// 		// likesCount: column.number({ default: 0 }),
// 	},
// })

const Guestbook = defineTable({
	columns: {
		title: column.text(),
		name: column.text(),
		message: column.text(),
		date: column.date({ default: NOW }),
	},
})

// https://astro.build/db/config
export default defineDb({
	tables: {
		Like,
		// Comment,
		Guestbook,
	},
})
