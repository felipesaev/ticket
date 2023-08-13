import { ReactNode, createContext, useEffect, useState } from 'react'
import { supabase } from '@/services/localStorage/db'

type UserContextProps = {
  children: ReactNode
}

interface UserContextType {
  session?: object | null
}

const initialValue = {
  session: {},
}

export const UserContext = createContext<UserContextType>(initialValue)

export const UserProvider = ({ children }: UserContextProps) => {
  const [session, setSession] = useState<UserContextType | null>(null)

  useEffect(() => {
    try {
      supabase.auth.getSession().then(({ data: { session } }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setSession(session as any)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         setSession(session as any)
      })

      return () => subscription.unsubscribe()
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log('context')
  return (
    <UserContext.Provider value={{ session }}>{children}</UserContext.Provider>
  )
}
