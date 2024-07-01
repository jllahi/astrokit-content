import { actions } from 'astro:actions'

export function GuestbookForm() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		const result: unknown = actions.guestbook(formData)
		console.log(result)
		window.location.replace('/guestbook')
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex w-full flex-col gap-1 text-base [&>input]:text-black [&>label]:mt-6 [&>textarea]:text-black"
		>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" name="name" required />
			<label htmlFor="title">Title</label>
			<input type="text" id="title" name="title" required />
			<label htmlFor="message">Message</label>
			<textarea id="message" name="message" rows={4} required />
			<button
				type="submit"
				className="mt-8 rounded border p-2 text-xl font-bold text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
			>
				Submit
			</button>
		</form>
	)
}
