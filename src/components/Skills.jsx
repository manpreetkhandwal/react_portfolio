import React, { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import ParticlesBack from "./ParticlesBack";
import { FaLaptopCode } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa"; // Added icons for toggle

// Cloud configuration
const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "500px", // Adjust height for responsiveness if needed
      position: "relative", // To position the light properly
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Function to render icons based on the theme
const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const IconCloud = ({ iconSlugs, theme }) => {
  const [data, setData] = useState(null);

  // Fetch icons when component mounts or when iconSlugs change
  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  // Handle rendered icons based on theme
  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme)
    );
  }, [data, theme]);

  return (
    <div className="relative w-full h-full">
      <ParticlesBack />
      <Cloud {...cloudProps}>{renderedIcons}</Cloud>
    </div>
  );
};

const SkillsSection = () => {
  const [show, setShow] = useState("hidden bg-zinc-800");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow("bg-zinc-800");
    }, 6000);
    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  // Define the icons for skills
  const iconSlugs = [
    "html5",
    "css3",
    "javascript",
    "react",
    "nodejs",
    "npm",
    "bootstrap",
    "tailwindcss",
    "git",
    "github",
    "php",
    "mui",
    "mysql",
    "jquery",
    "python",
  ];

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={show} id='skills'>
      <section id="skills-section" className="skills-section py-16 bg-gradient-to-br from-blue-300 via-blue-500 to-pink-500">
        <div className="container mx-auto text-center px-4 sm:px-8 lg:px-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
            <FaLaptopCode className="mr-2" /> My Skills & Abilities
          </h2>
          <div className="flex justify-center mb-8">
            <button
              onClick={toggleTheme}
              className="px-6 py-3 text-white hover:text-zinc-900 w-0 "
            >
              {theme === "light" ? (
                <FaSun className="mr-2" /> // Sun icon for light mode
              ) : (
                <FaMoon className="mr-2" /> // Moon icon for dark mode
              )}
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-screen-lg">
              <IconCloud iconSlugs={iconSlugs} theme={theme} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
