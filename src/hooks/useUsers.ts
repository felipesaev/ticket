import { useQuery } from 'react-query'
import { fetchTickets } from '@/data/users'

const STALE_TIME = 1000 * 60 * 60 * 2 // 2 hours

export function useUsers() {
  return useQuery(['users'], () => fetchTickets(), {
    staleTime: STALE_TIME,
  })
}
