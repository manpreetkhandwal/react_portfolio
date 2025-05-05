import React, { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import ParticlesBack from "./ParticlesBack";
import { FaLaptopCode, FaSun, FaMoon, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced skill data with proficiency levels
const skillData = {
  html5: {
    abilities: ["Semantic tags", "Forms", "Media embedding", "SEO practices"],
    proficiency: 90,
    description: "Markup language for creating web pages and applications."
  },
  css3: {
    abilities: ["Flexbox", "Grid", "Animations", "Responsive design"],
    proficiency: 85,
    description: "Styling language for designing beautiful web interfaces."
  },
  javascript: {
    abilities: ["DOM manipulation", "ES6+", "Async/Await", "APIs"],
    proficiency: 80,
    description: "Versatile programming language for interactive web experiences."
  },
  react: {
    abilities: ["Hooks", "Context API", "Component-based design", "Routing"],
    proficiency: 85,
    description: "JavaScript library for building user interfaces."
  },
  nodejs: {
    abilities: ["Express.js", "REST APIs", "Middleware", "Authentication"],
    proficiency: 80,
    description: "JavaScript runtime for server-side development."
  },
  npm: {
    abilities: ["Package management", "Scripts", "Dependencies"],
    proficiency: 85,
    description: "Package manager for JavaScript."
  },
  bootstrap: {
    abilities: ["Grid system", "Utilities", "Components"],
    proficiency: 80,
    description: "Popular CSS framework for responsive design."
  },
  tailwindcss: {
    abilities: ["Utility-first CSS", "Dark mode", "Responsive classes"],
    proficiency: 85,
    description: "Utility-first CSS framework for rapid UI development."
  },
  git: {
    abilities: ["Version control", "Branching", "Merging"],
    proficiency: 80,
    description: "Distributed version control system."
  },
  github: {
    abilities: ["Repositories", "Commits", "Collaboration", "Issues"],
    proficiency: 85,
    description: "Platform for version control and collaboration."
  },
  php: {
    abilities: ["Server-side scripting", "OOP", "Form handling"],
    proficiency: 70,
    description: "General-purpose scripting language for web development."
  },
  mui: {
    abilities: ["UI components", "Theming", "Responsive design"],
    proficiency: 75,
    description: "React UI framework implementing Material Design."
  },
  mysql: {
    abilities: ["Database design", "CRUD operations", "Joins"],
    proficiency: 75,
    description: "Relational database management system."
  },
  jquery: {
    abilities: ["DOM manipulation", "Events", "AJAX"],
    proficiency: 75,
    description: "Fast and concise JavaScript library."
  },
  python: {
    abilities: ["Scripting", "OOP", "Libraries", "Automation"],
    proficiency: 75,
    description: "High-level programming language with many applications."
  }
};

// Cloud component
const IconCloud = ({ iconSlugs, theme, onIconClick, isPaused }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    
    return Object.values(data.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        bgHex: theme === "light" ? "#f3f2ef" : "#080510",
        fallbackHex: theme === "light" ? "#6e6e73" : "#ffffff",
        minContrastRatio: theme === "dark" ? 2 : 1.2,
        size: 42,
        aProps: {
          href: "#",
          onClick: (e) => {
            e.preventDefault();
            onIconClick(icon.slug);
          },
          style: {
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }
        },
      })
    );
  }, [data, theme, onIconClick]);

  const cloudProps = {
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "clamp(300px, 60vh, 500px)",
        position: "relative",
      },
    },
    options: {
      reverse: true,
      depth: 1,
      wheelZoom: false,
      imageScale: 2,
      activeCursor: "pointer",
      tooltip: "native",
      initial: [0.1, -0.1],
      clickToFront: 500,
      tooltipDelay: 0,
      outlineColour: "#0000",
      maxSpeed: isPaused ? 0 : 0.02,
      minSpeed: isPaused ? 0 : 0.02,
    },
  };

  return (
    <div className="relative w-full h-full">
      <ParticlesBack />
      <Cloud {...cloudProps}>{renderedIcons}</Cloud>
    </div>
  );
};

const SkillsSection = () => {
  const [show, setShow] = useState("hidden opacity-0");
  const [theme, setTheme] = useState("light");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const iconSlugs = Object.keys(skillData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow("opacity-100 animate-fade-in");
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className =
      theme === "light"
        ? "bg-white text-black transition-colors duration-500"
        : "bg-zinc-900 text-white transition-colors duration-500";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`${show} transition-opacity duration-1000`} id="skills">
      <section className="skills-section py-16 bg-gradient-to-br from-blue-300 via-blue-500 to-pink-500">
        <div className="container mx-auto text-center px-4 sm:px-8 lg:px-16">
          <motion.h2 
            className="text-3xl font-bold mb-8 flex items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaLaptopCode className="mr-2" /> My Skills & Abilities
          </motion.h2>

          <div className="flex justify-center mb-8">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-black/30 text-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
            >
              {theme === "light" ? (
                <>
                  <FaSun className="text-yellow-300" /> Light Mode
                </>
              ) : (
                <>
                  <FaMoon className="text-blue-300" /> Dark Mode
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-8 relative transition-all duration-500">
            {/* Icon Cloud Section */}
            <div className={`w-full transition-all duration-500 ${selectedSkill ? "lg:w-1/2" : "lg:w-full"}`}>
              <IconCloud
                iconSlugs={iconSlugs}
                theme={theme}
                onIconClick={setSelectedSkill}
                isPaused={!!selectedSkill}
              />
            </div>

            {/* Skill Abilities Panel */}
            <AnimatePresence>
              {selectedSkill && (
                <motion.div 
                  className="w-full lg:w-1/2 bg-zinc-900 text-white rounded-lg p-6 shadow-lg relative z-10"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="absolute top-3 right-3 text-xl hover:text-red-600 transition"
                  >
                    <FaTimes />
                  </button>
                  
                  <h3 className="text-2xl font-bold capitalize mb-4">
                    {selectedSkill}
                  </h3>
                  
                  <p className="mb-4">
                    {skillData[selectedSkill].description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-1">
                      <span>Proficiency</span>
                      <span>{skillData[selectedSkill].proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${skillData[selectedSkill].proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-2">Key Abilities:</h4>
                  <ul className="space-y-2">
                    {skillData[selectedSkill].abilities.map((ability, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                        <span>{ability}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;