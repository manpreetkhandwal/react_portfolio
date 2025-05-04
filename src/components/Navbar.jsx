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
  const [show, setShow] = useState("hidden bg-zinc-800");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow("flex bg-zinc-800");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className={show}>
      <nav
        className={`fixed z-40 w-full px-8 md:px-20 py-4 flex justify-between items-center backdrop-blur-sm transition-transform duration-300 ${
          scrollingUp ? "translate-y-0 shadow-lg" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="logo">
          <motion.a 
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="w-[50%] sm:w-[50%] md:w-[6vw] h-auto"
              src={logo}
              alt="Logo"
            />
          </motion.a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 items-center">
          {["home", "about", "skills", "projects", "experience"].map(
            (item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item)}
                className="text-md font-semibold hover:bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 hover:text-white p-3 rounded-full duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            )
          )}

          {/* Contact Button */}
          <motion.button
            onClick={toggleModal}
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-[#613da4] border-2 border-[#553da4] rounded-full hover:text-white group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 group-hover:h-full top-1/2 group-hover:top-0 duration-400"></span>
            <span className="relative">Contact</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-end w-full">
          <motion.button
            onClick={toggleMenu}
            className="text-2xl text-gray-200 transition-all duration-300 ease-in-out ml-4"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 text-white flex flex-col items-center justify-center md:hidden z-30`}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {["home", "about", "skills", "projects", "experience"].map(
            (item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item)}
                className="text-2xl font-semibold p-5 w-full hover:text-white"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            )
          )}
          
          {/* Mobile Contact Button */}
          <motion.button
            onClick={toggleModal}
            className="mt-8 px-8 py-3 text-lg font-medium text-white border-2 border-white rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </motion.div>

        {/* Contact Modal */}
        <ContactModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      </nav>
    </div>
  );
}

export default Navbar;