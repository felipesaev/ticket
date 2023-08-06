import { ReactNode, createContext, useEffect, useState } from 'react'
import { supabase } from '@/services/localStorage/db'
import { Home } from '@/views/Home'

type UserContextProps = {
  children: ReactNode
}

interface UserContextType {
  session?: object
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
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
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
