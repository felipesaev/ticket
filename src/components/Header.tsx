import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '@/services/localStorage/db'
import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext'

export const Header = () => {
  const { session } = useContext(UserContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    supabase.auth.signOut()
    window.localStorage.clear()
    navigate('/')
  }
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            Ticket
          </Link>
        </div>
        <div className="flex-none">
          {!session && (
            <>
              <Link
                to={'/register'}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-4"
              >
                Register
              </Link>
              <Link to={'/login'} className="text-sm">
                Login
              </Link>
            </>
          )}
          <div className="dropdown dropdown-end">
            {!!session && (
              <>
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
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="grid place-items-center"></div>
      </div>
    </>
  )
}
