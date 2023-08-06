import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '@/services/localStorage/db'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export const SignUp = () => {
  return (
    <div className="grid place-items-center h-[90vh]">
      <Auth
        view="sign_up"
        providers={[]}
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  )
}
