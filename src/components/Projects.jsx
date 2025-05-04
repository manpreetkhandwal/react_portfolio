import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiPolymerproject } from "react-icons/si";
import port from "./../assets/portfolio.png";
import e_com from "./../assets/e-commerce.png";
import ochi from "./../assets/ochi.png";
import social from "./../assets/social.png";
import inhance from "./../assets/inhance.png";
import sign from "./../assets/sign.png";
import transltor from "./../assets/trans.png";
import prep from "./../assets/prep.png";
import compiler from "./../assets/compiler.png";


const projects = [
  {
    title: "Portfolio Website",
    description:
      "description: It showcases my skills in web development, responsive design, technologies like React, Tailwind CSS, and animations with Framer Motion.",
    image: port,
    link: "#",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    client: "Self-Project",
  },
  {
    title: "E-commerce Website",
    description:
      "This is a brief description of Project Two, an e-commerce site built with React and integrated with a payment gateway.",
    image: e_com,
    link: "https://emacore-cart.vercel.app/",
    technologies: ["React", "Node.js", "Stripe API"],
    client: "Self-Project",
  },
  {
    title: "Ochi Clone",
    description:
      "A front-end project developed using UI tech. This project highlights my front-end skills.",
    image: ochi,
    link: "https://ochi-nine-psi.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    client: "Self-Project",
  },
  {
    title: "Social Downloader",
    description: "A tool for downloading media from social platforms.",
    image: social,
    link: "https://social-video-downloader-five.vercel.app/",
    technologies: ["React", "Tailwind CSS"],
    client: "Self-Project",
  },
  {
    title: "Image Enhancer",
    description: "An app to enhance images with AI.",
    image: inhance,
    link: "#",
    technologies: ["React", "Tailwind CSS"],
    client: "Self-Project",
  },
  {
    title: "Signature Generator",
    description: "A tool to generate custom signatures.",
    image: sign,
    link: "https://signature-generator-six.vercel.app/",
    technologies: ["React", "Tailwind CSS"],
    client: "Self-Project",
  },
  // {
  //   title: "Language Translator",
  //   description: "A web app to translate languages.",
  //   image: transltor,
  //   link: "#",
  //   technologies: ["React", "Tailwind CSS"],
  //   client: "Self-Project",
  // },
  {
    title: "complier",
    description: " A web app to compile code.",
    image: compiler,
    link: "https://compliler-git-main-manpreetkhandwals-projects.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    client: "Self-Project",
  },
  {
    title: "Prep_point",
    description: " web app for preparation — currently working on it..",
    image: prep,
    link: "#",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    client: "Self-Project",
  },
];

const ProjectSection = () => {
  const [show, setShow] = useState("hidden bg-zinc-800");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow("bg-zinc-800");
    }, 6000);
    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  return (
    <div className={show} id="projects">
      <section className="py-16 bg-zinc-800 min-h-screen text-white">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-2 text-white flex items-center justify-center">
            <SiPolymerproject className="mr-2" />
            <span className="bg-clip-text text-transparent pb-3 bg-gradient-to-r from-blue-400 to-purple-500">
              My Projects
            </span>
          </h2>
          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, key) => (
              <motion.div
                key={project.title}
                className="rounded-lg overflow-hidden shadow-lg relative group bg-gradient-to-br from-indigo-600 to-blue-100"
                whileHover={{ scale: 1.05, rotate: [0, 3, -3, 0] }} // Subtle hover rotation and scaling
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:opacity-75 transition duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-200">
                      {project.description}
                    </p>
                    <ul className="mt-3 text-xs text-gray-300 space-y-1">
                      <li>
                        <strong>Technologies:</strong>{" "}
                        {project.technologies.join(", ")}
                      </li>
                      <li>
                        <strong>Client:</strong> {project.client}
                      </li>
                    </ul>
                    {key !== 0 && key !== 7 && (
                      <a
                        href={project.link}
                        className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
