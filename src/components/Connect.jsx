import React, { useEffect, useState } from 'react';

const ContactModal = ({ isOpen, toggleModal }) => {
  const [animateModal, setAnimateModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimateModal(true), 50); // Start animation
    } else {
      setAnimateModal(false); // Reset animation state when closing
    }
  }, [isOpen]);

  // Function to handle background click and close modal
  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      toggleModal(); // Close the modal if the background is clicked
    }
  };

  return (
    <>
      {isOpen && (
        <div
          id="modal-background"
          className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-500 ${
            animateModal ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleBackgroundClick}
        >
          <div
            className={`bg-white rounded-lg p-8 shadow-lg relative w-96 transform transition-all duration-500 ${
              animateModal ? "scale-100" : "scale-50"
            }`}
          >
            {/* Close button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-2xl text-gray-600"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  rows="4"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
