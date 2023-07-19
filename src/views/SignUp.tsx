import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '@/services/localStorage/db'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export const SignUp = () => {

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
