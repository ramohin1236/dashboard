"use client";

import { Bell } from "lucide-react";

const Topbar = () => {
  return (
    <header className="w-full bg-white shadow-sm flex items-center justify-between px-4 py-7.5 sticky top-0 z-30">
      {/* Page Title */}
      <h2 className="text-lg font-semibold text-gray-700">Dashboard</h2>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/40?img=2"
            alt="Profile"
            className="w-9 h-9 rounded-full border"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-700">Jane Cooper</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
