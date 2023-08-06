import { useUsers } from '@/hooks/useUsers'
import { FormatDate } from '@/utils/formatData'
import { useEffect, useState } from 'react'

export const Tickets = () => {
  const [users, updateUsers] = useState([])

  const { data, isLoading } = useUsers()
  console.log('data', data)

  useEffect(() => {
    updateUsers(data)
  }, [data])

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
        Yours tickets
      </h1>

      {users?.data?.map((item, id) => {
        return (
          <div className="indicator" key={id}>
            {true && <span class="indicator-item badge badge-error">new</span>}
            <div
              className="card w-96 bg-base-content
            text-white"
            >
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <h4 className="card-description">{item.document}</h4>
                <h4 className="card-description">{FormatDate(item.time)}</h4>
                <div className="badge">{item.category}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
