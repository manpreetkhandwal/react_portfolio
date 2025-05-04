import React, { useState } from "react";
import men from "D:/React/portfolio/src/assets/men.png";
import { motion } from "framer-motion";
import ParticlesBack from "./ParticlesBack";
import bg from "D:/React/portfolio/src/assets/dynamic-colorful-low-poly-pattern-18gkntu79pw5pevs.jpg";
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
  const [show, setshow] = useState("");
  setTimeout(() => {
    setshow(
      socialIcons.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            // Animation on page load
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: index * 0.1,
            }}
            whileHover={{color:social.color,scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className={`text-4xl text-white`}
          >
            <IconComponent />
          </motion.a>
        );
      })
    );
  }, 5000);
  return (
    <div className="relative w-full h-screen p-4 bg-zinc-900 overflow-hidden flex items-center justify-center" id="home">
      <ParticlesBack />
      <div className="absolute flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full h-full ">
        {/* Left Section - Text */}
        <div className="flex flex-col items-center md:items-start md:ml-5 md:mt-10 md:text-left p-4">
  <motion.h2
    initial={{ x: "-100vw" }}
    animate={{ x: "0" }}
    transition={{
      type: "spring",
      stiffness: 120,
      delay: 4.1,
    }}
    className="font-bold text-[6vw] md:text-[2vw]"
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
    className="text-[8vw] md:text-[4vw] font-bold mb-4 text-[#949393]"
  >
    <a href="#">I'm Manpreet Singh</a>
  </motion.h1>

  <motion.h2
    initial={{ x: "-100vw" }}
    animate={{ x: "0" }}
    transition={{
      type: "spring",
      stiffness: 120,
      delay: 4.3,
    }}
    className="font-bold text-[5vw] md:text-[2.5vw]"
  >
    Software Developer
  </motion.h2>

  <motion.h5
    initial={{ x: "-100vw" }}
    animate={{ x: "0" }}
    transition={{
      type: "spring",
      stiffness: 120,
      delay: 4.4,
    }}
    className="mt-4 mb-6 text-[4vw] md:text-[1.2vw] max-w-md mx-4"
  >
    "I specialize in transforming your ideas into interactive web experiences.
    By harnessing animation as a powerful tool, I simplify user interactions
    and seamlessly guide through every step."
  </motion.h5>

  <motion.a
    initial={{ x: "-100vw" }}
    animate={{ x: "0" }}
    transition={{
      type: "spring",
      stiffness: 120,
      delay: 4.5,
    }}
    href="#_"
    className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
  >
    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
    <span className="relative text-white text-[4vw] md:text-[1.2vw] hidden md:inline">
      Download CV
    </span>
    <span className="relative text-white text-[4vw] md:text-[1.2vw] md:hidden">
      <FaDownload />
    </span>
  </motion.a>

  <div className="flex justify-center gap-8 mt-10">{show}</div>
</div>


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
