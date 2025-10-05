import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {/* First */}
      <button
        className="px-3 py-1 border rounded-md hover:bg-gray-100"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        «
      </button>

      {/* Prev */}
      <button
        className="px-3 py-1 border rounded-md hover:bg-gray-100"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, idx) => (
        <button
          key={idx}
          className={`px-3 py-1 border rounded-md ${
            page === currentPage
              ? "bg-[#115e59] text-white"
              : "hover:bg-gray-100"
          } ${page === "..." && "cursor-default"}`}
          onClick={() => page !== "..." && onPageChange(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        className="px-3 py-1 border rounded-md hover:bg-gray-100"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </button>

      {/* Last */}
      <button
        className="px-3 py-1 border rounded-md hover:bg-gray-100"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
