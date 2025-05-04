import { motion } from "framer-motion";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";
import './App.css';
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-800 text-white ">
      <Preloader />
      <motion.div
        className="scroll-smooth focus:scroll-auto w-full h-screen text-white rounded-xl"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ ease: "linear", duration: 0.6, delay: 3.3 }}
      >
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "#FFFFFF",
          }}
          outerStyle={{
            mixBlendMode: "overlay",
            backgroundColor: "#ffffff",
          }}
        />
        <Navbar />
          <Landingpage />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <ContactSection/>
          <Footer />
        
      </motion.div>
    </div>
    
  );
}

export default App;
