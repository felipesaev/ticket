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
        providers={[]}
          supabaseClient={supabase}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Email',
                email_input_placeholder: 'Digite seu email',
                password_label: 'Senha',
                password_input_placeholder: 'Senha',
                button_label: 'Entrar',
                loading_button_label: 'entrando...',
                
              },
              forgotten_password: {
                 button_label: 'Me envie uma nova senha',
                 email_label: 'Email',
                email_input_placeholder: 'Digite seu email',
                link_text: 'Esqueci minha senha',
              },
              
            },
          }}
          appearance={{ theme: ThemeSupa }}
          />
          </div>
      )
    } else {
      return <h1>AREA LOGADA</h1>
    }
}
