import axios from 'axios'

const baseURL = 'https://oyvlmrxflndhbcpzlubn.supabase.co/rest/v1'

export const fetchTickets = async () => {
  // const { user } = JSON.parse(localStorage.getItem('sb-oyvlmrxflndhbcpzlubn-auth-token') || '{}')
  return await axios.get(`${baseURL}/users`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      apiKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    },
  })
}
