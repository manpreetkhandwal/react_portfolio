import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdWorkHistory } from "react-icons/md";

const experiences = [
  {
    title: "Web Developer",
    company: "E2X InfoTech Pvt. Ltd.",
    duration: "June 2023 - Present (2 years)",
    description: "Full-stack development focusing on hospitality management systems and API integrations.",
    highlights: [
      "Developed backend for Omnitech channel manager using core PHP",
      "Integrated Booking.com API for room/reservation management",
      "Automated Nuki smart lock key code generation",
      "Built police card system for guest data compliance",
      "Optimized MySQL queries reducing latency by 40%",
      "Maintained 99% uptime for critical systems"
    ],
    detailedAchievements: [
      "Developed and maintained the backend for the Omnitech channel manager using core PHP, integrating with Booking.com to manage room availability, reservations, and updates for 150+ properties, improving efficiency by 30%",
      "Integrated Nuki smart locks to automate key code generation and guest access, reducing manual processes by 75% and preventing overbooking",
      "Built a police card system to securely transmit guest details to local authorities via API, ensuring regulatory compliance and streamlining reporting",
      "Performed web scraping to extract data for channel management, enhancing data accuracy and availability for decision-making",
      "Leveraged Bettermode and Intercom APIs to synchronize chat data, enabling seamless guest-staff communication and reducing response times by 50%",
      "Automated mailing processes using APIs to send personalized guest communications and promotional codes to Booking.com, increasing booking conversions by 20%",
      "Optimized MySQL database queries for room fetching, updating, and reservation systems, achieving 40% reduction in latency and ensuring real-time synchronization",
      "Collaborated with cross-functional teams to debug and enhance system performance, maintaining 99% uptime for critical hospitality operations"
    ]
  },
  {
    title: "Future Opportunity",
    company: "Your Company Here",
    duration: "Coming Soon",
    description: "Open to new challenges and exciting projects in web development.",
    highlights: [
      "React/Next.js expertise",
      "Full-stack capabilities",
      "Passion for clean code"
    ]
  },
];

const ExperienceSection = () => {
  const [show, setShow] = useState("hidden bg-zinc-800");
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow("bg-zinc-800");
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = (index) => {
    if (experiences[index].detailedAchievements) {
      setExpandedCard(expandedCard === index ? null : index);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={show} id="experience">
      <section className="min-h-screen bg-black text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={show === "bg-zinc-800" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center justify-center">
              <MdWorkHistory className="mr-3 text-blue-400" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Professional Journey
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              My career path and the valuable experiences I've gained along the way
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={show === "bg-zinc-800" ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  y: expandedCard === index ? 0 : -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div 
                  className={`relative bg-zinc-800 p-6 sm:p-8 rounded-xl border border-zinc-700 group-hover:border-transparent transition-all duration-300 flex flex-col ${expandedCard === index ? 'min-h-[500px]' : 'h-full'}`}
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-300 mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    {expandedCard === index && exp.detailedAchievements ? (
                      <div className="mt-4 space-y-3">
                        <h4 className="font-semibold text-blue-400">Key Achievements:</h4>
                        <ul className="space-y-3">
                          {exp.detailedAchievements.map((achievement, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start text-sm text-gray-300"
                            >
                              <span className="text-blue-400 mr-2 mt-1">•</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <ul className="space-y-2 mt-4">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-zinc-700 group-hover:border-blue-500 transition-colors duration-300">
                    <div className="text-xs text-gray-400 flex justify-between items-center">
                      {index === experiences.length - 1 ? (
                        <span className="animate-pulse">Looking for new opportunities</span>
                      ) : (
                        <span>{expandedCard === index ? "Click to show less" : exp.detailedAchievements ? "Click for details" : ""}</span>
                      )}
                      {exp.detailedAchievements && (
                        <span className="text-blue-400 text-xs">
                          {expandedCard === index ? "▲" : "▼"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;