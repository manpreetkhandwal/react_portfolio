import React, { useState, useEffect } from "react";
import men from "./../assets/men.png";
import { motion } from "framer-motion";
import ParticlesBack from "./ParticlesBack";
import bg from "./../assets/dynamic-colorful-low-poly-pattern-18gkntu79pw5pevs.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";

const socialIcons = [
  { icon: FaFacebook, link: "https://facebook.com", color: "#0DAFFF" },
  { icon: FaTwitter, link: "https://twitter.com", color: "#55BCFF" },
  { icon: FaInstagram, link: "https://instagram.com", color: "#E40081" },
  { icon: FaLinkedin, link: "https://linkedin.com", color: "#006FFF" },
  { icon: FaGithub, link: "https://github.com", color: "#332D2D" },
];

function Landingpage() {
  const [socialIconsElements, setSocialIconsElements] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSocialIconsElements(
        socialIcons.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                delay: index * 0.1,
              }}
              whileHover={{ color: social.color, scale: 1.3, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl text-white p-1 sm:p-2"
            >
              <IconComponent />
            </motion.a>
          );
        })
      );
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="relative w-full min-h-screen p-4 bg-zinc-900 overflow-hidden flex items-center justify-center" 
      id="home"
    >
      <ParticlesBack />
      
      {/* Main Content Container */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 px-4 py-8 md:py-0 ">
        
        {/* Left Section - Text Content */}
        <motion.div 
          className="flex flex-col items-center md:items-start md:ml-5 md:mt-10 md:text-left p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 4.1,
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2"
          >
            Hi There,
          </motion.h2>

          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 4.2,
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-[#949393]"
          >
            I'm Manpreet Singh
          </motion.h1>

          <motion.h2
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 4.3,
            }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-6 text-blue-400"
          >
            Software Developer
          </motion.h2>

          <motion.p
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 4.4,
            }}
            className="text-base sm:text-lg md:text-xl mb-4 sm:mb-8 max-w-md text-gray-300"
          >
            "I specialize in transforming your ideas into interactive web experiences.
            By harnessing animation as a powerful tool, I simplify user interactions
            and seamlessly guide through every step."
          </motion.p>

          <motion.a
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 4.5,
            }}
            href="#_"
            className="relative inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 mb-6 sm:mb-10"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-48 sm:w-64 h-48 sm:h-64 mb-24 sm:mb-32 mr-3 sm:mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-16 sm:translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white flex items-center gap-2 text-sm sm:text-base">
              <span>Download CV</span>
              <FaDownload />
            </span>
          </motion.a>

          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
            {socialIconsElements}
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <div className="flex items-center justify-center  w-full md:w-1/2 ">
          <div className="relative w-[80vw] h-[50vw] md:w-[35vw] md:h-[22.5vw] rounded-full bg-gradient-to-br from-pink-600 via-purple-600 to-blue-700 overflow-hidden">
            <img
              src={bg}
              alt="background"
              className="absolute w-full h-full object-cover"
            />
            <a href="#">
              <motion.img
                initial={{ y: "50vw" }}
                animate={{ y: "0" }}
                transition={{ type: "spring", stiffness: 120, delay: 4.1 }}
                className="w-full h-auto max-w-full"
                src={men}
                alt="Man"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage; 