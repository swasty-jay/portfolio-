import { motion } from "framer-motion";
import { Link } from "react-router";
import Footer from "./Footer";
import About from "./About";
import Skills from "../features/Skills";

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-center h-screen text-center p-6">
        {/* Profile Image (Now on the Right) */}
        <motion.img
          src="/jay.jpg"
          alt="Profile"
          className=" w-64 h-64 md:w-80 md:h-80 rounded-full   border-8 border-blue-400 shadow-lg md:ml-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Text Content (Now on the Left) */}
        <div className="md:mr-8 mt-6 md:mt-0">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Hi, I'm{" "}
            <span className="text-blue-400 uppercase">daniel amekpoagbe</span>
          </motion.h1>
          <motion.p
            className="text-xl mt-4 flex justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Front-End Developer | React Enthusiast |<br /> JavaScript & Tailwind
            Lover |<br /> Crafting Smooth & Responsive UIs
          </motion.p>
          <div className="flex space-x-4 mt-6 items-center justify-center">
            {/* View My Work Button */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/projects"
                className="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 rounded-lg text-lg inline-block"
              >
                View My Work
              </Link>
            </motion.div>

            {/* Hire Me Button (Outlined) */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-blue-500 text-blue-500 uppercase hover:bg-blue-500 hover:text-white rounded-lg text-lg inline-block"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <Skills />
      <About />
      <Footer />
    </div>
  );
}
