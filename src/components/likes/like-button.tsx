import {
  QueryClient,
  QueryClientProvider,
  useIsFetching,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import axios from 'axios'
import type { LikeResponseData } from './like-type'
import Spinner from './spinner'

type LikeButtonProps = {
  slug: string
}

const queryClient = new QueryClient()

export default function LikeButton({ slug }: LikeButtonProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Likes slug={slug} />
    </QueryClientProvider>
  )
}

function Likes({ slug }: LikeButtonProps) {
  const queryClient = useQueryClient()
  const isFetching = useIsFetching()
  const query = useQuery({
    queryKey: ['likes', slug],
    queryFn: async () => {
      if (slug) {
        const { data } = await axios.get<LikeResponseData>(`/api/likes/${slug}`)
        console.log(JSON.stringify(data, null, 2))
        return data
      } else {
        return new Response('Slug parameter is missing', {
          status: 400,
        })
      }
    },
  })
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post<LikeResponseData>(`/api/likes/${slug}`, { slug })
      return response.data
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['likes', slug] })
    },
  })
  const isUpdating =
    query.status === 'pending' || query.isFetching || isFetching || mutation.isPending

  return (
    <div className="flex items-center gap-2">
      <button
        disabled={!!isUpdating}
        className="flex items-center gap-2 rounded-md bg-pink-500 px-4 py-2 text-white ring-1 ring-inset ring-black/10 hover:bg-pink-400 active:bg-pink-600 disabled:pointer-events-none hover:disabled:bg-pink-500"
        onClick={() => {
          mutation.mutate()
        }}
      >
        <Heart />
        <span className="grid h-full w-4 place-items-center">
          {isUpdating ? (
            <Spinner />
          ) : (
            <span className="font-mono font-medium">
              {query.data && 'likesCount' in query.data && query.data.likesCount}
            </span>
          )}
        </span>
      </button>
    </div>
  )
}

function Heart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-heart"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
