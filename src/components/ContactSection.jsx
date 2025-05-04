import React from "react";
import { motion } from "framer-motion";

const ContactModal = ({ isModalOpen, toggleModal }) => {
  if (!isModalOpen) return null;

  return (
    <motion.div
      className="absolute inset-0 bg-black bg-opacity-70 flex items-last justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-black bg-opacity-70 backdrop-blur-sm text-white p-6  w-full max-w-full h-screen mt-11 absolute"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      ></motion.div>
      
      <motion.div
        className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-lg mt-11 absolute"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">Get In Touch</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
