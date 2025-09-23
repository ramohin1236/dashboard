import React from 'react'

const RecentlyJoinedUserTable = () => {
  return (
    <div className="p-6 w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#E6F4F1] whitespace-nowrap">
          <tr>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              User Name
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Phone Number
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Role
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Email
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Joined
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
          <tr>
            <td className="px-4 py-4 text-sm text-slate-900 font-medium">
              John Doe
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              01123456
            </td>
            <td className="px-4 py-4 text-sm text-[#0E7490] font-medium">
              Admin
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              example@gmail.com
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              2025-01-08
            </td>
            <td className="px-4 py-4 text-sm">
              <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
              <button className="cursor-pointer text-red-600 font-medium">Delete</button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-4 text-sm text-slate-900 font-medium">
              John Doe
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              01123456
            </td>
            <td className="px-4 py-4 text-sm text-[#0E7490] font-medium">
              Admin
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              example@gmail.com
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              2025-01-08
            </td>
            <td className="px-4 py-4 text-sm">
              <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
              <button className="cursor-pointer text-red-600 font-medium">Delete</button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-4 text-sm text-slate-900 font-medium">
              John Doe
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              01123456
            </td>
            <td className="px-4 py-4 text-sm text-[#0E7490] font-medium">
              Admin
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              example@gmail.com
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              2025-01-08
            </td>
            <td className="px-4 py-4 text-sm">
              <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
              <button className="cursor-pointer text-red-600 font-medium">Delete</button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-4 text-sm text-slate-900 font-medium">
              John Doe
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              01123456
            </td>
            <td className="px-4 py-4 text-sm font-medium text-[#0E7490]">
              Admin
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              example@gmail.com
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              2025-01-08
            </td>
            <td className="px-4 py-4 text-sm">
              <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
              <button className="cursor-pointer text-red-600 font-medium">Delete</button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-4 text-sm text-slate-900 font-medium">
              John Doe
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              01123456
            </td>
            <td className="px-4 py-4 text-sm text-[#0E7490] font-medium">
              Admin
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              example@gmail.com
            </td>
            <td className="px-4 py-4 text-sm text-slate-600 font-medium">
              2025-01-08
            </td>
            <td className="px-4 py-4 text-sm">
              <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
              <button className="cursor-pointer text-red-600 font-medium">Delete</button>
            </td>
          </tr>

         
        </tbody>
      </table>
    </div>
  )
}

export default RecentlyJoinedUserTable