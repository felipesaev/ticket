import { createContext, useEffect, useState } from "react";
import { supabase } from "./db";

export const UsuarioContext = createContext(null);

UsuarioContext.displayName = "Teste"

export const UsuarioProvider = ({ children }: any) => {

  const [session, setSession] = useState(null)

    useEffect(() => { 
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <UsuarioContext.Provider value={{session}}>
      {children}
    </UsuarioContext.Provider>
  );
};
