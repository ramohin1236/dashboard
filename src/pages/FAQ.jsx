import { HelpCircle } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router';

const FAQ = () => {
   const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How do I connect a driver about my ride?",
      answer: "After your ride is completed, you can connect the driver directly through the in-app chat or call button in your trip details screen."
    },
    {
      id: 2,
      question: "How can I update my payment method?",
      answer: "Go to Settings > Payment Methods, then add or remove your card securely."
    },
    {
      id: 3,
      question: "What happens if I cancel a ride?",
      answer: "If you cancel after a driver has accepted, a small penalty fee may apply."
    },
    {
      id: 4,
      question: "How do I view my trip history?",
      answer: "Tap Trips in the main menu to see all your paid rides and receipts."
    },
    {
      id: 5,
      question: "How can I verify my identity as a driver?",
      answer: "Drivers must upload a valid ID, selfie, and vehicle documents under Profile > Verification before going online."
    },
    {
      id: 6,
      question: "How do I connect a driver about my ride?",
      answer: "After your ride is completed, you can connect the driver directly through the in-app chat or call button in your trip details screen."
    },
    {
      id: 7,
      question: "How can I update my payment method?",
      answer: "Go to Settings > Payment Methods, then add or remove your card securely."
    },
    {
      id: 8,
      question: "What happens if I cancel a ride?",
      answer: "If you cancel after a driver has accepted, a small penalty fee may apply."
    },
    {
      id: 9,
      question: "How do I view my trip history?",
      answer: "Tap Trips in the main menu to see all your paid rides and receipts."
    },
    {
      id: 10,
      question: "How can I verify my identity as a driver?",
      answer: "Drivers must upload a valid ID, selfie, and vehicle documents under Profile > Verification before going online."
    },
    {
      id: 11,
      question: "How do I connect a driver about my ride?",
      answer: "After your ride is completed, you can connect the driver directly through the in-app chat or call button in your trip details screen."
    },
    {
      id: 12,
      question: "How can I update my payment method?",
      answer: "Go to Settings > Payment Methods, then add or remove your card securely."
    },
    {
      id: 13,
      question: "What happens if I cancel a ride?",
      answer: "If you cancel after a driver has accepted, a small penalty fee may apply."
    },
    {
      id: 14,
      question: "How do I view my trip history?",
      answer: "Tap Trips in the main menu to see all your paid rides and receipts."
    },
    {
      id: 15,
      question: "How can I verify my identity as a driver?",
      answer: "Drivers must upload a valid ID, selfie, and vehicle documents under Profile > Verification before going online."
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);
  const [deletingFaqId, setDeletingFaqId] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const [newFaq, setNewFaq] = useState({
    question: "",
    answer: ""
  });

  const handleAddFaq = () => {
    if (newFaq.question && newFaq.answer) {
      setFaqs([...faqs, {
        id: Date.now(),
        question: newFaq.question,
        answer: newFaq.answer
      }]);
      setNewFaq({ question: "", answer: "" });
      setShowAddModal(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  const handleEditFaq = (faq) => {
    setEditingFaq({ ...faq });
    setShowEditModal(true);
  };

  const handleUpdateFaq = () => {
    if (editingFaq.question && editingFaq.answer) {
      setFaqs(faqs.map(faq => 
        faq.id === editingFaq.id ? editingFaq : faq
      ));
      setShowEditModal(false);
      setEditingFaq(null);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  const handleDeleteClick = (id) => {
    setDeletingFaqId(id);
    setShowDeleteWarning(true);
  };

  const confirmDelete = () => {
    setFaqs(faqs.filter(faq => faq.id !== deletingFaqId));
    setShowDeleteWarning(false);
    setDeletingFaqId(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
     <div className="p-6">
      <div className="">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3 ">
        <Link
          
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </Link>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          FAQ
        </h1>
      </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#115E59] text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium cursor-pointer"
          >
            Add New FAQ
          </button>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`transform transition-transform ${expandedFaq === faq.id ? 'rotate-90' : ''}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4.5 3L7.5 6L4.5 9" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-gray-800 font-medium">{faq.question}</h3>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditFaq(faq);
                    }}
                    className="p-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(faq.id);
                    }}
                    className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              {expandedFaq === faq.id && (
                <div className="px-4 pb-4">
                  <div className="ml-6 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add FAQ Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add FAQ</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-6">
              Fill out the details below to add a new FAQ. Ensure the answer provides clarity and helps users quickly resolve their queries.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question for the FAQ
                </label>
                <input
                  type="text"
                  value={newFaq.question}
                  onChange={(e) => setNewFaq({...newFaq, question: e.target.value})}
                  placeholder="Enter the FAQ"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Answer to the FAQ
                </label>
                <textarea
                  value={newFaq.answer}
                  onChange={(e) => setNewFaq({...newFaq, answer: e.target.value})}
                  placeholder="Enter the FAQ Answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleAddFaq}
                className="flex-1 py-3 bg-[#115E59] text-white rounded-lg hover:bg-teal-700 transition-colors font-medium cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit FAQ Modal */}
      {showEditModal && editingFaq && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Update FAQ</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-6">
              Edit the FAQ content as needed. The changes will be reflected in the user interface immediately after saving.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question for the FAQ
                </label>
                <input
                  type="text"
                  value={editingFaq.question}
                  onChange={(e) => setEditingFaq({...editingFaq, question: e.target.value})}
                  placeholder="Enter the FAQ"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Answer to the FAQ
                </label>
                <textarea
                  value={editingFaq.answer}
                  onChange={(e) => setEditingFaq({...editingFaq, answer: e.target.value})}
                  placeholder="Enter the FAQ Answer"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateFaq}
                className="flex-1 py-3 bg-[#115E59] text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Warning Modal */}
      {showDeleteWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm mx-4 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Warning</h3>
              <p className="text-gray-600 text-sm">Are you sure you want to delete this FAQ?</p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteWarning(false)}
                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-2 bg-[#115E59] text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm mx-4 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Success</h3>
              <p className="text-gray-600 text-sm">The FAQ has been updated successfully.</p>
            </div>

            <button
              onClick={() => setShowSuccess(false)}
              className="w-full py-2 bg-[#115E59] text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FAQ