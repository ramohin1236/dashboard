/* eslint-disable no-unused-vars */
import { Upload, X } from "lucide-react";
import { useState } from "react";

const UpdateCate = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [serviceCategoryName, setServiceCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [dragActive, setDragActive] = useState(false);

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
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8">
        <div onClick={handleOverlayClick}>
          <div
            className="bg-white rounded-2xl p-6 w-full relative"
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
      </div>
    </div>
  );
};

export default UpdateCate;
