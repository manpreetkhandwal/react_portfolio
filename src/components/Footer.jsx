import React, { useState } from "react";
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
  const [show, setShow] = useState("hidden bg-zinc-800");

  setTimeout(() => {
    setShow("flex bg-zinc-800");
  }, 6000);

  const socialIcons = [
    { icon: FaFacebook, link: "https://facebook.com", color: "#0DAFFF" },
    { icon: FaTwitter, link: "https://twitter.com", color: "#55BCFF" },
    { icon: FaInstagram, link: "https://instagram.com", color: "#E40081" },
    { icon: FaLinkedin, link: "https://linkedin.com", color: "#006FFF" },
    { icon: FaGithub, link: "https://github.com", color: "#332D2D" },
  ];

  return (
    <div className={show}>
      <div className="w-full h-auto max-h-screen bg-zinc-800 p-10">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Manpreet's Portfolio Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-[2vw] md:text-[2.5vw] font-bold mb-4">
              Manpreet's Portfolio
            </h1>
            <p className="text-[1.5vw] md:text-[1.2vw] mb-5">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
            <p className="text-[1.5vw] md:text-[1.2vw]">
              Keep Rising 🚀. Connect with me over live chat!
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center md:text-left"
          >
            <h1 className="text-[2vw] md:text-[2.5vw] font-bold mb-4">
              Quick Links
            </h1>
            <div className="flex flex-col items-center md:items-start gap-2">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Education",
              ].map((item, index) => (
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  key={index}
                  className="text-md font-semibold flex items-center gap-2 transition-all hover:bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 text-white rounded p-1"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <LiaExternalLinkSquareAltSolid />
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-[2vw] md:text-[2.5vw] font-bold mb-4">
              Contact Info
            </h1>
            <p className="text-[1.5vw] md:text-[1.2vw] text-md font-semibold flex items-center p-1">
              <FaPhoneAlt />{" "}
              <a href="tel:+91XXXXXXXXXX" className="ml-2">
                +91XXXXXXXXXX
              </a>
            </p>
            <p className="text-[1.5vw] md:text-[1.2vw] text-md font-semibold flex items-center p-1">
              <IoMail />{" "}
              <a href="mailto:manpreetmomian@gmail.com" className="ml-2">
                manpreetmomian@gmail.com
              </a>
            </p>
            <p className="text-[1.5vw] md:text-[1.2vw] text-md font-semibold flex items-center p-1">
              <FaMapLocationDot /> <a >Delhi NCR, India</a> 
            </p>
            <div className="flex justify-center md:justify-start gap-8 mt-4">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-4xl transition-colors duration-300`}
                    whileHover={{scale: 1.2 }}
                    style={{color:social.color}}
                  >
                    <IconComponent />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-full flex flex-col items-center mt-10">
          <hr className="w-[90%] md:w-[70%] border-t-2 border-gray-600 mb-4" />
          <p className="text-[1.5vw] md:text-[1.8vw] text-center">
            Designed with ❤️ by <b className="text-[#006FFF]">Manpreet Singh</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
