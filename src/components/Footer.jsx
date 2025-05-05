import React, { useState, useEffect, useRef } from "react";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";

function Footer() {
  const [showFooter, setShowFooter] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const socialIcons = [
    { icon: FaInstagram, link: "https://instagram.com", color: "#E40081" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/manpreet-singh-ab1b49220/", color: "#006FFF" },
    { icon: FaGithub, link: "https://github.com/manpreetkhandwal", color: "#332D2D" },
  ];

  if (!showFooter) return null;

  return (
    <footer className="w-full bg-zinc-800 text-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portfolio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl font-bold mb-4">Manpreet's Portfolio</h2>
            <p className="mb-4 text-gray-300">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
            </p>
            <p className="text-gray-300">
              Keep Rising 🚀. Connect with me over live chat!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <div className="flex flex-col space-y-2">
              {["home", "about", "skills", "projects", "experience", "education"].map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item)}
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LiaExternalLinkSquareAltSolid />
                  <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl font-bold mb-4">Contact Info</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaPhoneAlt />
                <a href="tel:+919814220280" className="hover:underline">+91981420XXXXX</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <IoMail />
                <a href="mailto:manpreetmomian@gmail.com" className="hover:underline">manpreetmomian@gmail.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaMapLocationDot />
                <span>Delhi NCR, India</span>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl"
                    style={{ color: social.color }}
                    whileHover={{ y: -3, scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-gray-700 mt-8 pt-6 text-center"
        >
          <p className="text-gray-400">
            Designed with ❤️ by <span className="text-blue-400 font-medium">Manpreet Singh</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;