import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '../db'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useContext } from 'react'
import { UsuarioContext } from '../User'

export const SignUp = () => {
  const { session, setSession } = useContext(UsuarioContext)
  console.log('OUT session', session)

  return (
    <div className="grid h-screen place-items-center">
      <Auth
        view="sign_up"
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  )
}
