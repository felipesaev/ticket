import axios from 'axios'

const baseURL = 'https://oyvlmrxflndhbcpzlubn.supabase.co/rest/v1'

export const fetchTickets = async () => {
  // const { user } = JSON.parse(localStorage.getItem('sb-oyvlmrxflndhbcpzlubn-auth-token') || '{}')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return await axios.get<any[]>(`${baseURL}/users`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      apiKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    },
  })
}
