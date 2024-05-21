import { column, defineDb, defineTable } from 'astro:db'

const Like = defineTable({
	columns: {
		postSlug: column.text({ primaryKey: true }),
		likesCount: column.number({ default: 0 })
	}
})

const Newsletter = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		email: column.text({ unique: true })
	}
})

// https://astro.build/db/config
export default defineDb({
	tables: {
		Like,
		Newsletter
	}
})
