import { ArrowLeft, Download } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const data = [
  {
    name: "John Doe",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "example@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Jane Smith",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "jane@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Michael Lee",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "michael@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Alice Brown",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "alice@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "David Clark",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "david@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Emma Wilson",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "emma@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Robert King",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "robert@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Sophia Turner",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "sophia@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "John Doe",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "example@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Jane Smith",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "jane@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Michael Lee",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "michael@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Alice Brown",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "alice@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "David Clark",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "david@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Emma Wilson",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "emma@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Robert King",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "robert@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Sophia Turner",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "sophia@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "John Doe",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "example@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Jane Smith",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "jane@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Michael Lee",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "michael@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Alice Brown",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "alice@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "David Clark",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "david@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Emma Wilson",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "emma@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Robert King",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "robert@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Sophia Turner",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "sophia@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "John Doe",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "example@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Jane Smith",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "jane@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Michael Lee",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "michael@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Alice Brown",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "alice@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "David Clark",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "david@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Emma Wilson",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "emma@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Robert King",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "robert@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
  {
    name: "Sophia Turner",
    image: "/man.png",
    task_details: "AC Installation",
    category: "Electrical",
    date: "27 Aug, 2025",
    email: "sophia@gmail.com",
    pay_on: "Stripe",
    amount: "₦ 20",
  },
];

const EarningTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  return (
    <div>
      <div className="flex justify-between h-20 items-center rounded-md overflow-clip ">
        <div className="flex items-center gap-2">
          <Link
            to="/earnings"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <p className="text-xl font-semibold">Last All Earn History</p>{" "}
        </div>
        <button className="bg-[#115E59] cursor-pointer hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Export CSV</span>
        </button>
      </div>

      <div className="w-full overflow-x-auto rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#E6F4F1] whitespace-nowrap">
            <tr>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                User Name
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Task Details
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                date
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Pay On
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
            {currentRows.map((user, index) => (
              <tr key={index}>
                <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                  <div className="flex items-center gap-2">
                    <img
                      src={user.image}
                      className="w-8 h-8 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p>{user.name}</p>
                      <p className="text-gray-400 text-xs">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-slate-600 font-medium flex flex-col gap-1">
                  <p className="text-black">{user.task_details}</p>
                  <p>{user.category}</p>
                </td>
                <td className="px-4 py-4 text-sm font-medium">{user.date}</td>
                <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                  {user.pay_on}
                </td>

                <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                  {user.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-[#115E59] hover:text-white border border-gray-300"
            }`}
          >
            ‹
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md text-sm font-medium border ${
                currentPage === page
                  ? "bg-[#115E59] text-white border-[#115E59]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-[#115E59] hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-[#115E59] hover:text-white border border-gray-300"
            }`}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarningTable;
