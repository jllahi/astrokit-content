import axios from 'axios'

import { QueryClient, QueryClientProvider, useIsFetching, useQuery } from '@tanstack/react-query'
import type { LikeResponseData } from './like-type'
import Spinner from './spinner'

type Props = {
  slug: string
}

const queryClient = new QueryClient()

export default function LikeCounter({ slug }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component slug={slug} />
    </QueryClientProvider>
  )
}

function Component({ slug }: Props) {
  const isFetching = useIsFetching()
  const query = useQuery({
    queryKey: ['likes', slug],
    queryFn: async () => {
      const { data } = await axios.get<LikeResponseData>(`/api/likes/${slug}`)
      return data
    },
  })

  const isUpdating = query.status === 'pending' || query.isFetching || isFetching

  return (
    <>
      <span className="text-slate-500">
        {isUpdating ? (
          <Spinner className="size-4 animate-spin" />
        ) : (
          <>
            {query.status === 'success' && (
              <span>
                ({query.data.likesCount} {query.data.likesCount === 1 ? 'like' : 'likes'})
              </span>
            )}
          </>
        )}
      </span>
    </>
  )
}
