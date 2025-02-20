import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaDribbble,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import Footer from "./Footer";
import About from "./About";
import Skills from "../features/Skills";
import ScrollToTop from "../features/ScrollTop";

export default function PortfolioLanding() {
  const socialLinks = [
    {
      Icon: FaTwitter,
      url: "https://twitter.com/yourusername",
      color: "text-blue-400",
    },
    {
      Icon: FaDribbble,
      url: "https://dribbble.com/yourusername",
      color: "text-pink-400",
    },
    {
      Icon: FaLinkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "text-blue-600",
    },
    {
      Icon: FaGithub,
      url: "https://github.com/yourusername",
      color: "text-gray-600",
    },
    {
      Icon: FaWhatsapp,
      url: "https://wa.me/yourphonenumber",
      color: "text-green-500",
    }, // WhatsApp
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans w-full overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center h-screen text-left px-6 md:px-16 lg:px-24 py-12 gap-8">
        {/* Left Content (Text & Image on Small Screens) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I am <span className="text-gray-300">Daniel Amekpoagbe</span>
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-blue-400 mt-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Next-Level Web Developer.
          </motion.h2>

          {/* Image (Between h2 and p on Small Screens) */}
          <motion.div
            className="w-full flex justify-center my-6 md:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src="/header-pic.png"
              alt="Profile"
              className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-[20%] border border-blue-400 shadow-lg"
            />
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            I break down complex user experience problems to create
            integrity-focused solutions that connect billions of people.
          </motion.p>

          {/* Buttons & Social Media */}
          <div className="flex flex-col sm:flex-row items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg border border-blue-400 flex items-center"
            >
              Download CV <span className="ml-2">📄</span>
            </motion.button>
            {/* Social Media Icons */}

            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, url, color }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 text-2xl hover:${color}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Image on Larger Screens (Right Side) */}
        <motion.div
          className="hidden md:flex w-full md:w-1/2 justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <img
            src="/header-pic.png"
            alt="Profile"
            className="w-100 h-100 sm:w-72 sm:h-72 md:w-100 md:h-100 lg:w-96 lg:h-96 object-cover border-dotted rounded-[10%] border border-blue-400 shadow-lg"
          />
        </motion.div>
      </section>

      {/* Other Sections */}
      <Skills />
      <About />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
