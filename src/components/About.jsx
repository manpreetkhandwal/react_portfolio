import React ,{useState}from "react";
import { IoPersonSharp } from "react-icons/io5";
import about from "./../assets/about.png";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import './About.css';

function About() {
  const defaultOptions = {
    reverse: false,
    max: 25,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    Shadow:"10"
  };
  const [show, setshow] = useState('hidden bg-zinc-800');
  setTimeout(()=>{
    setshow('flex bg-zinc-800');
  },6000) ;  

  return (

    <div id='about' className={show}>
          <div className="w-full h-auto min-h-screen flex justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-0">

        {/* Left Side - Text Section with Dark Background */}
        <div 
          className="flex-1 flex flex-col items-center text-center md:text-left md:items-start p-10 bg-zinc-900 text-white"
        >
          <motion.div 
            className="flex items-center gap-2 mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <IoPersonSharp className="text-[4vw] md:text-[2.5vw]" />
            <h1 className="text-[6vw] md:text-[3.5vw] font-extrabold">About Me</h1>
          </motion.div>

          <motion.div 
            className="text-[4vw] md:text-[1.8vw] mb-4"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <h2>I'm Manpreet Singh</h2>
            <h3 className="text-purple-400">Software Developer</h3>
          </motion.div>

          <motion.p 
            className="text-[4vw] md:text-[1.2vw] text-gray-300 leading-relaxed"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            "Dedicated Web Developer with 2 years of experience in core PHP, specializing in backend development for hospitality projects using the Omnitech channel manager. Proficient in integrating Nuki smart locks, automating police card submissions, web scraping, and managing Bettermode/Intercom APIs for chat synchronization. Knowledgeable in React and Tailwind CSS through self-learning and personal projects, with a strong interest in Data Structures and Algorithms and Python. Eager to contribute to scalable web solutions in a collaborative team environment.".
          </motion.p>
        </div>

        {/* Right Side - Tilt Image Section with Gradient Background */}
        <div id='profile'  className="flex-1 flex justify-center items-center md:justify-end p-10">
          <Tilt options={defaultOptions}>
            <motion.img 
              src={about} 
              alt="About" 
              className="rounded-xl shadow-xl max-w-full h-auto object-cover md:h-[30vw] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Tilt>
        </div>
      </div>
    </div> 
    </div>

  );
}

export default About;
