import {
  Eye,
  Unlock,
  Ban,
} from "lucide-react";
import { Link } from "react-router";

const AllPayment = ({
  blockedUsers,
  searchTerm,
  currentPage,
  setCurrentPage,
}) => {
  const filteredUsers = blockedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / 10);
  const startIndex = (currentPage - 1) * 10;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + 10);

  if (filteredUsers.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Ban className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No Blocked Users
          </h3>
          <p className="text-gray-500 mb-4">
            There are currently no blocked users in the system.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-lg">
            <Ban className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">
              All users are currently active
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
   <>
      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <div style={{ minWidth: "800px" }}>
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ minWidth: "200px" }}
                  >
                    Service Provider
                  </th>
                  <th
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ minWidth: "200px" }}
                  >
                    Email
                  </th>
                   <th
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ minWidth: "100px" }}
                  >
                    Amount
                  </th>
                  <th
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ minWidth: "140px" }}
                  >
                    A/C Number
                  </th>
                  <th
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ minWidth: "140px" }}
                  >
                    Bank Name
                  </th>
                  
                  <th
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ minWidth: "120px" }}
                  >
                    Complete Date
                  </th>
                  <th
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ minWidth: "120px" }}
                  >
                    Status
                  </th>
                 
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="relative">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          {user.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                        </div>
                      </div>
                    </td>
                     <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.email}
                    </td>
                     <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.amount}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.acnumber}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.bank_name}
                    </td>
                   
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.complete_date}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 ">
                        <select className="py-1 px-2 text-green-600 ">
                             <option value="Paid">Paid</option>
                             <option value="Pending">Pending</option>
                            
                        </select>
                      </span>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-500">
          Showing {Math.min(startIndex + 1, filteredUsers.length)} to{" "}
          {Math.min(startIndex + 10, filteredUsers.length)} of{" "}
          {filteredUsers.length} results
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            «
          </button>

          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ‹
          </button>

          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  currentPage === page
                    ? "bg-[#115E59] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )
          )}

          {totalPages > 3 && (
            <>
              <span className="px-3 py-2 text-sm text-gray-500">...</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  currentPage === totalPages
                    ? "bg-[#115E59] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ›
          </button>

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            »
          </button>
        </div>
      </div>
    </>
  );
};

export default AllPayment;
