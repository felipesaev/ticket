import { useQuery } from 'react-query'
import { fetchTickets } from '@/data/users'

const STALE_TIME = 1000 * 60 * 60 * 2 // 2 hours

type Data = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

export function useUsers() {
  return useQuery<Data>(['users'], () => fetchTickets(), {
    staleTime: STALE_TIME,
  })
}
