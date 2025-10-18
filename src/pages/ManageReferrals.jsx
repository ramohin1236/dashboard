import { ArrowLeft, Download, Search } from "lucide-react";
import { useState } from "react";
import AllRefund from "../components/Tabs/AllRefund";
import ReferralValue from "../components/Cards/ReferralValue";
import ReferralUses from "../components/Table/ReferralUses";
import { Link } from "react-router";

const ManageReferrals = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Processed refunds data (refunded)
  const processedRefunds = [
    {
      id: 101,
      taskId: "TSK101",
      refferred_value: "₦150",
      refundTo: "Theodore Mosciski",
      refundToAvatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face&round=full",
      email: "cadence@gmail.com",
      amount: "95.00",
      date: "2025-01-10",
      status: "Used",
    },
    {
      id: 102,
      taskId: "TSK102",
      refferred_value: "₦150",
      refundTo: "Daniel Walker IV",
      refundToAvatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=40&h=40&fit=crop&crop=face&round=full",
      email: "seanmnd@mail.ru",
      amount: "180.25",
      date: "2025-01-10",
      status: "Active",
    },
    {
      id: 103,
      taskId: "TSK103",
      refferred_value: "₦150",
      refundTo: "Ms. Natasha Spinka",
      refundToAvatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face&round=full",
      email: "sterris@gmail.com",
      amount: "65.50",
      date: "2025-01-10",
      status: "Active",
    },
  ];

  // Reset page when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className=" p-4 sm:p-6">
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row  md:items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Link to="/service-category" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Referrals Management
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search refunds..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent w-64"
              />
            </div>
            <button className="bg-[#115E59] cursor-pointer hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => handleTabChange("new")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "new"
                  ? "bg-[#115E59] text-white shadow-sm cursor-pointer"
                  : "text-gray-600 hover:text-gray-800 cursor-pointer"
              }`}
            >
              Referral Value
            </button>
            <button
              onClick={() => handleTabChange("processed")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "processed"
                  ? "bg-[#115E59] text-white shadow-sm cursor-pointer"
                  : "text-gray-600 hover:text-gray-800 cursor-pointer"
              }`}
            >
              Referral uses ({processedRefunds.length})
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "new" ? (
          <ReferralValue />
        ) : (
          <ReferralUses
            processedRefunds={processedRefunds}
            searchTerm={searchTerm}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default ManageReferrals;
