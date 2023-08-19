/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUsers } from '@/hooks/useUsers'
// import { FormatDate } from '@/utils/formatData'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

type Data = {
  data: any
}

export const Tickets = () => {

  const [users, updateUsers] = useState<Data>();
  
  const { data, isLoading } = useUsers();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateUsers(data as any)
  }, [data])

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  return (
    <div className="grid gap-4">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Information</th>
        <th>Data</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {users?.data.map((item: any, id: any) => {
        return (
          <>
          <tr key={id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
              <div className="font-bold">{item.name}</div>
              <div className="text-sm opacity-50">{item.document}</div>
            </div>
          </div>
        </td>
        <td>
          {item.local}
          <br/>
          <span className="badge badge-neutral">{item.category}</span>
        </td>
        <td>{dayjs(item.time).format('DD-MM-YYYY')}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
          </>
        )
      })}    
    </tbody>
    
    
  </table>
</div>
    </div>
  )
}
