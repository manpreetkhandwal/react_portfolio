import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Preloader.css";

function Preloader() {
  const [show, setShow] = useState({ y: 0 });
  const [hidden, setHidden] = useState("");

  useEffect(() => {
    // Use useEffect instead of setTimeout directly in the component body
    const showTimeout = setTimeout(() => {
      setShow({ y: "100%" });
    }, 2000);

    const hideTimeout = setTimeout(() => {
      setHidden("hidden");
    }, 5000);

    // Clear timeouts on component unmount
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className={hidden}>
      <div className="flex flex-col overflow-hidden absolute w-full z-50">
        {/* Upper part of the preloader */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-60vh" }}
          transition={{ ease: "linear", duration: 0.5, delay: 3 }}
          className="text-center h-[60vh] overflow-hidden bg flex items-end justify-center"
        >
          <motion.h1 className="name mb-3 text-[10vw] sm:text-[7vw] md:text-[5vw]  ">
          
            {/* Render name with animation */}
            {"Manpreet Singh".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={show}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.06,
                }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Lower part of the preloader */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "40vh" }}
          transition={{ ease: "linear", duration: 0.5, delay: 3 }}
          className="h-[40vh] bg"
        ></motion.div>
      </div>
    </div>
  );
}

export default Preloader;
