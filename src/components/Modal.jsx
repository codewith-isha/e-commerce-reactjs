import React from 'react'

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn"
      onClick={() => setIsModelOpen(false)}
    >
      {/* Modal content */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md transform transition-all duration-300 scale-100 hover:scale-[1.01]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-3xl font-bold transition-all"
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>

        {/* Modal children (dynamic content) */}
        <div className="mt-2">{children}</div>
      </div>
    </div>
  )
}

export default Modal
