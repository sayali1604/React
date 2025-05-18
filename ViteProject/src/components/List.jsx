import React from 'react'

export default function List({img, name, email, designation, lastSeen}) {
    //const {} = props

    return (
      <>
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="size-12 flex-none rounded-full bg-gray-50" src={img} alt=""/>
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{name}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-900">{designation}</p>
            <p className="mt-1 text-xs/5 text-gray-500">Last seen <time dateTime="2023-01-23T13:23Z">{lastSeen}</time></p>
          </div>
        </li>
  
      {/* <li className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <img className="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div className="min-w-0 flex-auto">
            <p className="text-sm/6 font-semibold text-gray-900">Dries Vincent</p>
            <p className="mt-1 truncate text-xs/5 text-gray-500">dries.vincent@example.com</p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm/6 text-gray-900">Business Relations</p>
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="size-1.5 rounded-full bg-emerald-500"></div>
            </div>
            <p className="text-xs/5 text-gray-500">Online</p>
          </div>
        </div>
      </li> */}
      </>
    )
}

//export default List;
