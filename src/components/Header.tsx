import { Link } from "react-router-dom"
import { supabase } from "@/services/localStorage/db"
import { useContext } from "react"
import { UserContext } from "@/contexts/UserContext"

export const Header = () => {
  const { session } = useContext(UserContext)
  console.log(session);
  
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link to={'/'}>
      <a className="btn btn-ghost normal-case text-xl">Ticket</a>
      </Link>
    </div>
    <div className="flex-none gap-2">
      {!session && (
        <>
          <Link to={'/register'}>
            <a className="btn">Register</a>
          </Link>
          <Link to={'/login'}>
            <a className="btn">Login</a>
          </Link>
        </>
      )}
      {!!session && (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/150?img=4" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={() => supabase.auth.signOut()}>Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  </div>

  )
}