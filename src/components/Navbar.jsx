import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "./../assets/main.png";
import ContactModal from "./ContactSection";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < 50 || currentScrollPos < scrollPos) {
        setScrollingUp(true); // Show navbar
      } else {
        setScrollingUp(false); // Hide navbar
      }

      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav
      className={`fixed z-40 w-full px-8 md:px-20 py-4 flex justify-between items-center backdrop-blur-sm transition-transform duration-300 ${
        scrollingUp ? "translate-y-0 shadow-lg" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="logo">
        <a href="#home">
          <img
            className="w-[50%] sm:w-[50%] md:w-[6vw] h-auto"
            src={logo}
            alt="Logo"
          />
        </a>
      </div>

      {/* Contact Button for All Views */}
      <div className="hidden md:flex gap-4 items-center">
        {["Home", "About", "Skills", "Projects", "Experience"].map(
          (item, index) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={index}
              className="text-md font-semibold hover:bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 hover:text-white p-3 rounded-full duration-300 transform hover:scale-110"
            >
              {item}
            </a>
          )
        )}

        {/* Contact Button */}
        <button
          onClick={toggleModal}
          className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-[#613da4] border-2 border-[#553da4] rounded-full hover:text-white group"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 group-hover:h-full top-1/2 group-hover:top-0 duration-400"></span>
          <span className="relative">Contact</span>
        </button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center justify-end w-full">
        <button
          onClick={toggleMenu}
          className="text-2xl text-gray-200 transition-all duration-300 ease-in-out ml-4"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[20vw] left-0 w-full h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 text-white flex flex-col items-center md:hidden transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-[190px]" : "-translate-x-full"
        }`}
      >
        {["Home", "About", "Skills", "Projects", "Experience"].map(
          (item, index) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={index}
              className="text-md font-semibold p-5 w-full hover:text-white transition-transform transform hover:scale-105 duration-300"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item}
            </a>
          )
        )}
      </div>

      {/* Contact Modal */}
      <ContactModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </nav>
  );
}

export default Navbar;
