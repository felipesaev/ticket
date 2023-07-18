import { useContext, useEffect, useState } from 'react'
import { supabase } from '../db'
import { UsuarioContext } from '../User'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SignIn = () => {
  const { session, setSession } = useContext(UsuarioContext)
  console.log(session)

  if (!session) {
    return (
      <Auth
        view="sign_in"
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
      />
    )
  } else {
    return <h1>AREA LOGADA</h1>
  }
}
