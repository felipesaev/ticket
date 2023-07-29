import { useContext, useEffect, useState } from "react"
import { supabase } from "../services/localStorage/db"
import { UserContext } from "../contexts/UserContext"
export const Tickets = () => {

  const { session } = useContext(UserContext);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<any>([])
  async function fetchData() {
  const { data: users } = await supabase
  .from('users')
  .select('*')
  .eq('identify', session.user.id)
  setUsers(users)
  return users
  
}

useEffect(() => {
  fetchData()
},[]) 

  async function createUser() {
    const { data } = await supabase
  .from('users')
  .insert([
    { name: 'someValue', identify: session.user.id },
  ])
  .select()

  console.log('error', users);
  

  return data
  }
    

  console.log('USERS', users);
  
  return (
    <>
      {users.map((item) => {
        return (
          <>
          <ul>
            <li>Nome: {item.name}</li>
          </ul>
          </>
        )
      })}

      <button onClick={createUser}>Create Ticket</button>
    </>
  )
}

