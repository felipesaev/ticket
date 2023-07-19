import { useContext } from 'react'
import { supabase } from '@/services/localStorage/db'
import { UserContext } from '@/contexts/UserContext'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SignIn = () => {
  const { session } = useContext(UserContext)

  if (!session) {
    return (
      <div className='grid h-screen place-items-center'>
        <Auth
          view="sign_in"
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          />
          </div>
      )
    } else {
      return <h1>AREA LOGADA</h1>
    }
}
