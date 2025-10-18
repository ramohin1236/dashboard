import React, { useState } from 'react'
import AllRefund from '../components/Tabs/AllRefund';
import NewRefund from '../components/Tabs/NewRefund';
import { ArrowLeft, Download, Search } from 'lucide-react';
import { Link } from 'react-router';

const ManageRefund = () => {
  const [activeTab, setActiveTab] = useState('new');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // New refunds data (pending)
  const newRefunds = [
    {
      id: 1,
      taskId: 'TSK001',
      refundFor: 'Task Cancellation',
      refundTo: 'Russell Vaurn',
      refundToAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&round=full',
      email: 'zitka@mail.ru',
      amount: '125.50',
      accountNumber: '**** **** **** 2345',
      status: 'pending'
    },
    {
      id: 2,
      taskId: 'TSK002',
      refundFor: 'Service Issue',
      refundTo: 'Tracy Grady',
      refundToAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=40&h=40&fit=crop&crop=face&round=full',
      email: 'jolie@gmail.com',
      amount: '89.99',
      accountNumber: '**** **** **** 6789',
      status: 'pending'
    },
    {
      id: 3,
      taskId: 'TSK003',
      refundFor: 'Duplicate Payment',
      refundTo: 'Dana Daniel',
      refundToAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&round=full',
      email: 'ulfaha@mail.ru',
      amount: '200.00',
      accountNumber: '**** **** **** 1234',
      status: 'pending'
    },
    {
      id: 4,
      taskId: 'TSK004',
      refundFor: 'Quality Issue',
      refundTo: 'Gerardo Barrows',
      refundToAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&round=full',
      email: 'seema@gmail.com',
      amount: '75.25',
      accountNumber: '**** **** **** 4567',
      status: 'pending'
    },
    {
      id: 5,
      taskId: 'TSK005',
      refundFor: 'Late Delivery',
      refundTo: 'Sheryl Gusikowski',
      refundToAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&round=full',
      email: 'ohana@mail.ru',
      amount: '150.75',
      accountNumber: '**** **** **** 8901',
      status: 'pending'
    }
  ];

  // Processed refunds data (refunded)
  const processedRefunds = [
    {
      id: 101,
      taskId: 'TSK101',
      refundFor: 'Task Cancellation',
      refundTo: 'Theodore Mosciski',
      refundToAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face&round=full',
      email: 'cadence@gmail.com',
      amount: '95.00',
      accountNumber: '**** **** **** 2468',
      status: 'refunded'
    },
    {
      id: 102,
      taskId: 'TSK102',
      refundFor: 'Service Issue',
      refundTo: 'Daniel Walker IV',
      refundToAvatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=40&h=40&fit=crop&crop=face&round=full',
      email: 'seanmnd@mail.ru',
      amount: '180.25',
      accountNumber: '**** **** **** 1357',
      status: 'refunded'
    },
    {
      id: 103,
      taskId: 'TSK103',
      refundFor: 'Wrong Order',
      refundTo: 'Ms. Natasha Spinka',
      refundToAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face&round=full',
      email: 'sterris@gmail.com',
      amount: '65.50',
      accountNumber: '**** **** **** 9876',
      status: 'refunded'
    }
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
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Link
             to="/manage-payments"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Refund Management</h1>
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
              onClick={() => handleTabChange('new')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'new'
                  ? 'bg-[#115E59] text-white shadow-sm cursor-pointer'
                  : 'text-gray-600 hover:text-gray-800 cursor-pointer'
              }`}
            >
              New Refunds ({newRefunds.length})
            </button>
            <button
              onClick={() => handleTabChange('processed')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'processed'
                  ? 'bg-[#115E59] text-white shadow-sm cursor-pointer'
                  : 'text-gray-600 hover:text-gray-800 cursor-pointer'
              }`}
            >
              All Refund ({processedRefunds.length})
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'new' ? (
          <NewRefund 
            refunds={newRefunds}
            searchTerm={searchTerm}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <AllRefund
            processedRefunds={processedRefunds}
            searchTerm={searchTerm}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  )
}

export default ManageRefund