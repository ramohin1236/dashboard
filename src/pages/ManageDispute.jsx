/* eslint-disable no-unused-vars */
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router";

const ManageDispute = ({ id }) => {
  const [activeTab, setActiveTab] = useState("All Dispute");
  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample dispute data grouped by status
  const disputeData = {
    "All Dispute": [
      [
        {
          id: 1,
          sl: 1,
          requesteddBy: "User",
          request_date: "01-08-25",
          status: "Pending",
          request_type: "Cancellation Request",
        },
        {
          id: 2,
          sl: 2,
          requesteddBy: "Service Provider",
          request_date: "01-08-25",
          category: "Appliances",
          status: "Resolved",
          request_type: "Extension Request",
        },
      ],
    ],
    Resolved: [
      [
        {
          id: 3,
          sl: 3,
          requesteddBy: "User",
          request_date: "01-08-25",
          category: "Plumbing",
          status: "Resolved",
          request_type: "Cancellation Request",
        },
      ],
    ],
    Pending: [
      [
        {
          id: 4,
          sl: 4,
          requesteddBy: "Service Provider",
          request_date: "01-08-25",
          status: "Pending",
          request_type: "Extension Request",
        },
      ],
    ],
    Rejected: [
      [
        {
          id: 5,
          sl: 5,
          requesteddBy: "User",
          request_date: "01-08-25",
          category: "Construction",
          status: "Rejected",
          request_type: "Cancellation Request",
        },
      ],
    ],
    "Not Resolved": [
      [
        {
          id: 6,
          sl: 6,
          requesteddBy: "Service Provider",
          request_date: "01-08-25",
          category: "General",
          status: "Not Resolved",
          request_type: "Cancellation Request",
        },
      ],
    ],
  };

  // Get current tab tasks
  const currentTasks =
    disputeData[activeTab] && disputeData[activeTab][currentPeriod]
      ? disputeData[activeTab][currentPeriod]
      : [];

  // Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(currentTasks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTasks = currentTasks.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      <div className="flex items-center space-x-3 mb-10">
        <Link
          to="/manage-refund"
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Manage Dispute
        </h1>
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap space-x-1 bg-gray-100 p-1 rounded-lg w-fit mb-6">
        {["All Dispute", "Resolved", "Pending", "Rejected", "Not Resolved"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPeriod(0);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                activeTab === tab
                  ? "bg-[#115E59] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Task table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Task ID
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Requested By
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Request Type
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Request Date
                </th>

                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 ">
              {paginatedTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{task.sl}</td>
                  <td className="px-4 py-3 flex items-center space-x-2">
                    <div>
                      <p className="text-sm font-medium">{task.requesteddBy}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium">{task.request_type}</p>
                  </td>
                  <td className="px-4 py-3">{task.request_date}</td>
                  <td className="px-4 py-3">{task.status}</td>
                  <td className="px-4 py-3 text-[#115E59] text-2xl">
                    <Link to={`/manage-dispute/${1}`}>
                      <FaExclamationCircle />
                    </Link>
                  </td>
                </tr>
              ))}
              {paginatedTasks.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500 text-sm"
                  >
                    No tasks available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDispute;
