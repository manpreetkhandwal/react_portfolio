import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdWorkHistory } from "react-icons/md";

const experiences = [
  {
    title: "Frontend Developer",
    company: "MTA India",
    duration: "Nov 2022 - feb 2023",
    description: "Implemented responsive designs and interactive UIs using React and Tailwind CSS, improving user experience and engagement.",
  },
  {
    title: "Software Developer",
    company: "E2X InfoTech pvt. Ltd.",
    duration: "June 2023 - Present",
    description: "Developed full-stack web applications, collaborated with designers, and optimized systems for performance.",
  },
  {
    title: "coming soon!",
    company: "",
    duration: "",
    description: "",
  },
];

const ExperienceSection = () => {
  const [show, setShow] = useState("hidden bg-zinc-800");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow("bg-zinc-800");
    }, 6000);
    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  return (
    <div className={show} id="experience">
      <section className="bg-zinc-900 min-h-screen text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient flex items-center justify-center">
            <MdWorkHistory className="mr-2" />
            Experience
          </h2>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-purple-600 to-blue-500 p-6 rounded-lg shadow-lg relative overflow-hidden transition-transform duration-300 ease-in-out"
                whileHover={{ 
                  scale: 0.9,  // Slightly increase the size on hover
                  rotate: 5,    // Slight rotation on hover
                }}
              >
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 transition-transform transform hover:scale-105">{experience.title}</h3>
                  <p className="text-md md:text-lg font-light text-gray-300 mb-2">{experience.company}</p>
                  <p className="text-sm font-medium text-gray-200 mb-4">{experience.duration}</p>
                  <p className="text-base">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
