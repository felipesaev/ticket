import { useQuery } from 'react-query'
import { fetchTickets } from '@/data/users'
import { Data } from '@/schemas/data'

const STALE_TIME = 1000 * 60 * 60 * 2 // 2 hours

type DataType = {
  data: Data
}

export function useUsers() {
  return useQuery<DataType>(['users'], () => fetchTickets(), {
    staleTime: STALE_TIME,
  })
}
