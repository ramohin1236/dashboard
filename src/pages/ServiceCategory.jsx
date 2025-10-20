import React, { useState } from "react";
import { X, Upload, Check, ArrowLeft, Download, Search } from "lucide-react";
import AllService from "../components/Tabs/AllService";
import { Link } from "react-router";

const ServiceCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [serviceCategoryName, setServiceCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  // Sample service data
  const users = [
    {
      id: 1,
      name: "Russell Vaurn",
      avatar: "/cleaning.png",
      total_srvice: "20",
      cate_name: "Cleaning",
      joined: "2025-01-10",
      activeTasks: 2,
      isOnline: true,
    },
    {
      id: 2,
      name: "Tracy Grady",
      avatar: "/painter.png",
      total_srvice: "30",
      cate_name: "Plumbing",
      joined: "2025-01-10",
      activeTasks: 0,
      isOnline: false,
    },
    {
      id: 3,
      name: "Dana Daniel",
      avatar: "/plumbing.png",
      total_srvice: "10",
      cate_name: "Painting",
      joined: "2025-01-10",
      activeTasks: 2,
      isOnline: true,
    },
    {
      id: 4,
      name: "Gerardo Barrows",
      avatar: "/scrow.png",
      total_srvice: "11",
      cate_name: "Moving",
      joined: "2025-01-10",
      activeTasks: 0,
      isOnline: false,
    },
    {
      id: 5,
      name: "Sheryl Gusikowski",
      avatar: "/furniture.png",
      total_srvice: "111",
      cate_name: "Furniture",
      joined: "2025-01-10",
      activeTasks: 2,
      isOnline: true,
    },
    {
      id: 6,
      name: "Theodore Mosciski",
      avatar: "/cleaning.png",
      total_srvice: "120",
      cate_name: "Gardening",
      joined: "2025-01-10",
      activeTasks: 0,
      isOnline: false,
    },
    {
      id: 7,
      name: "Theodore Mosciski",
      avatar: "/carpentry.png",
      total_srvice: "200",
      cate_name: "Plumbing",
      joined: "2025-01-10",
      activeTasks: 2,
      isOnline: true,
    },
    {
      id: 8,
      name: "Daniel Walker IV",
      avatar: "/cleaning.png",
      total_srvice: "5",
      cate_name: "Painting",
      joined: "2025-01-10",
      activeTasks: 2,
      isOnline: true,
    },
    {
      id: 9,
      name: "Ms. Natasha Spinka",
      avatar: "/cleaning.png",
      total_srvice: "10",
      cate_name: "Gardening",
      joined: "2025-01-10",
      activeTasks: 0,
      isOnline: false,
    },
    {
      id: 10,
      name: "Forrest Kuhic",
      avatar: "/scrow.png",
      total_srvice: "150",
      cate_name: "Cleaning",
      joined: "2025-01-10",
      activeTasks: 0,
      isOnline: false,
    },
  ];
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    e.stopPropagation();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  };

  const handleFiles = (file) => {
    // Validate file type
    if (file.type.startsWith("image/")) {
      setSelectedIcon(file);
    } else {
      alert("Please select an image file");
    }
  };

  const handleSave = () => {
    if (!serviceCategoryName.trim()) {
      alert("Please enter a service category name");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setShowAddModal(false);
      setShowSuccess(true);

      // Auto close success modal after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      // Reset form
      setServiceCategoryName("");
      setSelectedIcon(null);
    }, 500);
  };

  const handleCancel = () => {
    setShowAddModal(false);
    setServiceCategoryName("");
    setSelectedIcon(null);
    setDragActive(false);
  };

  const handleModalClick = (e) => {
    // Prevent modal from closing when clicking inside the modal content
    e.stopPropagation();
  };

  const handleOverlayClick = () => {
    // Close modal when clicking on overlay
    handleCancel();
  };

  return (
    <div className="p-4 sm:p-6">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Link
            to="/active-tasks"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Service Category Management
            </h1>
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

            <button
              onClick={() => setShowAddModal(true)}
              className="bg-[#115E59] text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium cursor-pointer"
            >
              Add New Service Category
            </button>

            <button className="bg-white border border-[#115E59] text-[#115E59] hover:bg-[#115E59] hover:text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
          </div>
        </div>

        {/* Service Categories Table/Grid would go here */}
        <div className="bg-white rounded-lg shadow-sm  ">
          <AllService
            users={users}
            searchTerm={searchTerm}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        {/* Add Service Category Modal */}
        {showAddModal && (
          <div
            className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleOverlayClick}
          >
            <div
              className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 relative"
              onClick={handleModalClick}
            >
              {/* Close Button */}
              <button
                onClick={handleCancel}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Add New Service Category
                </h2>
              </div>

              {/* Upload Service Category Icon */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Service Category Icon
                </label>
                <div
                  className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                    dragActive
                      ? "border-[#115E59] bg-teal-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById("file-input").click();
                  }}
                >
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center pointer-events-none">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                      <Upload className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      {selectedIcon ? selectedIcon.name : "Upload Icon"}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Click to browse or drag and drop
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Category Name */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Category Name
                </label>
                <input
                  type="text"
                  value={serviceCategoryName}
                  onChange={(e) => setServiceCategoryName(e.target.value)}
                  placeholder="e.g. Cleaning"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#115E59] focus:border-transparent"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={handleCancel}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 py-3 bg-[#115E59] text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccess && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSuccess(false)}
          >
            <div
              className="bg-white rounded-2xl p-8 w-full max-w-sm mx-4 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>

              {/* Success Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Success
              </h3>

              {/* Success Message */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                The new service category has been added and is now visible in
                the list.
              </p>

              {/* OK Button */}
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-3 bg-[#115E59] text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCategory;
