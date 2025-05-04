import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com'; // Make sure you installed: npm install emailjs-com

const ContactModal = ({ isModalOpen, toggleModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    try {
      // Replace with your actual EmailJS Service ID, Template ID, and Public Key
      await emailjs.send(
        'service_gq0i4u5',         // ✅ Your EmailJS Service ID
        'template_wv9be5b',        // ✅ Your Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        'yYt7jCnnxGJHIlsVD'        // ✅ Your Public API Key from EmailJS
      );

      setSendStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // ✅ Automatically close modal after 1.5 seconds
      setTimeout(() => {
        toggleModal();
      }, 1500);

    } catch (error) {
      console.error('Failed to send email:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      className="absolute inset-0 bg-black bg-opacity-70 flex items-last justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-black bg-opacity-70 backdrop-blur-sm text-white p-6 w-full max-w-full h-screen mt-11 absolute"
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
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          {sendStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-600 text-white rounded-lg">
              Message sent successfully!
            </div>
          )}
          {sendStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-600 text-white rounded-lg">
              Failed to send message. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
