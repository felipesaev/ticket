import { UserContext } from '@/contexts/UserContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { session } = useContext(UserContext)

  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.{' '}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true"></span>Read
            more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        {session ? (
          <>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              what to you need help with?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Please choose from an option below
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tickets for all things
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              create tickets in any place
            </p>
          </>
        )}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {session && (
            <>
              <Link to={session ? '/new-tickets' : '/register'}>
                <a className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Create new ticket
                </a>
              </Link>

              <Link to={session ? '/tickets' : '/login'}>
                <a className="text-sm font-semibold leading-6 text-gray-900">
                  View my tickets <span aria-hidden="true">→</span>
                </a>
              </Link>
              
            </>
          )}
          {!session && (
            <Link
            to={'/login'}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-4"
          >
            Quick start

          </Link>
          )}
        </div>
      </div>
    </div>
  )
}
