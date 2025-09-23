import React, { useState } from 'react';
import { ArrowLeft, Search, Download, Eye, MoreVertical, Unlock, Ban } from 'lucide-react';
import AllUsersTab from '../components/Tabs/AllUsersTab';
import BlockedUsersTab from '../components/Tabs/BlockedUsersTab';
import AllTaskProvider from '../components/Tabs/AllTaskProvider';
import BlockTaskProviders from '../components/Tabs/BlockTaskProviders';



const TaskProviders = () => {

   const [activeTab, setActiveTab] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
  
    // Active users data
    const users = [
      {
        id: 1,
        name: 'Russell Vaurn',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(205) 555-0100',
        email: 'zitka@mail.ru',
        joined: '2025-01-10',
        activeTasks: 2,
        isOnline: true
      },
      {
        id: 2,
        name: 'Tracy Grady',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(207) 555-0119',
        email: 'jolie@gmail.com',
        joined: '2025-01-10',
        activeTasks: 0,
        isOnline: false
      },
      {
        id: 3,
        name: 'Dana Daniel',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(205) 555-0100',
        email: 'ulfaha@mail.ru',
        joined: '2025-01-10',
        activeTasks: 2,
        isOnline: true
      },
      {
        id: 4,
        name: 'Gerardo Barrows',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(316) 555-0116',
        email: 'seema@gmail.com',
        joined: '2025-01-10',
        activeTasks: 0,
        isOnline: false
      },
      {
        id: 5,
        name: 'Sheryl Gusikowski',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(205) 555-0104',
        email: 'ohana@mail.ru',
        joined: '2025-01-10',
        activeTasks: 2,
        isOnline: true
      },
      {
        id: 6,
        name: 'Theodore Mosciski',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(307) 555-0133',
        email: 'cadence@gmail.com',
        joined: '2025-01-10',
        activeTasks: 0,
        isOnline: false
      },
      {
        id: 7,
        name: 'Theodore Mosciski',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(205) 555-0100',
        email: 'fellora@mail.ru',
        joined: '2025-01-10',
        activeTasks: 2,
        isOnline: true
      },
      {
        id: 8,
        name: 'Daniel Walker IV',
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(225) 555-0118',
        email: 'seanmnd@mail.ru',
        joined: '2025-01-10',
        activeTasks: 2,
        isOnline: true
      },
      {
        id: 9,
        name: 'Ms. Natasha Spinka',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(207) 555-0119',
        email: 'sterris@gmail.com',
        joined: '2025-01-10',
        activeTasks: 0,
        isOnline: false
      },
      {
        id: 10,
        name: 'Forrest Kuhic',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(316) 555-0116',
        email: 'moka@vandes.ru',
        joined: '2025-01-10',
        activeTasks: 0,
        isOnline: false
      }
    ];
  
    // Blocked users data
    const blockedUsers = [
      {
        id: 101,
        name: 'James Wilson',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(555) 123-4567',
        email: 'james.wilson@blocked.com',
        blockedDate: '2025-01-08',
        blockReason: 'Spam Activity',
        isBlocked: true
      },
      {
        id: 102,
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(555) 987-6543',
        email: 'sarah.j@blocked.com',
        blockedDate: '2025-01-07',
        blockReason: 'Policy Violation',
        isBlocked: true
      },
      {
        id: 103,
        name: 'Mike Davis',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(555) 456-7890',
        email: 'mike.davis@blocked.com',
        blockedDate: '2025-01-06',
        blockReason: 'Inappropriate Content',
        isBlocked: true
      },
      {
        id: 104,
        name: 'Lisa Anderson',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(555) 321-0987',
        email: 'lisa.anderson@blocked.com',
        blockedDate: '2025-01-05',
        blockReason: 'Multiple Reports',
        isBlocked: true
      },
      {
        id: 105,
        name: 'Tom Brown',
        avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=40&h=40&fit=crop&crop=face&round=full',
        mobile: '(555) 654-3210',
        email: 'tom.brown@blocked.com',
        blockedDate: '2025-01-04',
        blockReason: 'Fraud Attempt',
        isBlocked: true
      }
    ];
  
    // Reset page when switching tabs
    const handleTabChange = (tab) => {
      setActiveTab(tab);
      setCurrentPage(1);
    };

  return (
   <div className="  p-4 sm:p-6">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Task Providers</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search here"
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
              onClick={() => handleTabChange('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#115E59] text-white shadow-sm cursor-pointer'
                  : 'text-gray-600 hover:text-gray-800 cursor-pointer'
              }`}
            >
             ALL task providers ({users.length})
            </button>
            <button
              onClick={() => handleTabChange('blocked')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'blocked'
                  ? 'bg-[#115E59] text-white shadow-sm cursor-pointer'
                  : 'text-gray-600 hover:text-gray-800 cursor-pointer'
              }`}
            >
              Blocked task providers ({blockedUsers.length})
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'all' ? (
          <AllTaskProvider 
            users={users}
            searchTerm={searchTerm}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <BlockTaskProviders 
            blockedUsers={blockedUsers}
            searchTerm={searchTerm}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  )
}

export default TaskProviders