/* eslint-disable no-unused-vars */
import { Upload, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const UpdateCate = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [serviceCategoryName, setServiceCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
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
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }

    setSelectedIcon(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setSelectedIcon(null);
    setImagePreview(null);
  };

  const handleSave = () => {
    if (!serviceCategoryName.trim()) {
      alert("Please enter a service category name");
      return;
    }

    if (!selectedIcon) {
      alert("Please upload a category icon");
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
      setImagePreview(null);
    }, 500);
  };

  const handleCancel = () => {
    setShowAddModal(false);
    setServiceCategoryName("");
    setSelectedIcon(null);
    setImagePreview(null);
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
            <Link
              to="/service-category"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </Link>

            {/* Modal Header */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Update Service Category
              </h2>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Service Category Icon
              </label>

             

              {
                imagePreview ?   <div className="mb-4">
                  <div className="relative w-full h-48 bg-gray-50 rounded-lg overflow-hidden border-2 border-[#115E59]">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-contain p-2"
                    />
                    <button
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-colors z-10"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center truncate px-2">
                    {selectedIcon?.name}
                  </p>
                </div> :  <div
                className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                  dragActive
                    ? "border-[#115E59] bg-teal-50"
                    : imagePreview
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
                    {imagePreview ? "Change Icon" : "Upload Icon"}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Click to browse or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PNG, JPG, SVG up to 5MB
                  </p>
                </div>
              </div>
              }
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
