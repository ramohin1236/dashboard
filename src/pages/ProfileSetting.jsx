import React, { useState } from 'react'

const ProfileSetting = () => {
    const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    fullName: "Bessie",
    email: "mobileapp@mac.com"
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return (
     <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Profile Image and Name */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <img
              src="/man.png"
              alt="user"
              className="w-20 h-20 rounded-full border-4 border-blue-200 bg-blue-100"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Jane Cooper</h2>
        </div>

        {/* Tabs */}
        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex-1 py-2 px-4 text-sm font-medium transition-colors duration-200 ${
              activeTab === "profile"
                ? "bg-[#115E59] text-white cursor-pointer"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
            }`}
            style={{ borderRadius: "4px 0 0 4px" }}
          >
            Edit Profile
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`flex-1 py-2 px-4 text-sm font-medium transition-colors duration-200 ${
              activeTab === "password"
                ? "bg-[#115E59] text-white cursor-pointer"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
            }`}
            style={{ borderRadius: "0 4px 4px 0" }}
          >
            Change Password
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "profile" ? (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-6">Edit Your Profile</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-[#115E59] text-white font-medium rounded-md hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
              Save Changes
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-6">Change Password</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter current password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-[#115E59] text-white font-medium rounded-md hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
              Update Password
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileSetting