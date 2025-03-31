import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="bg-gray-900 text-white py-8 px-6"
    >
      <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
        {/* Name or Logo */}
        <div className="text-xl font-bold uppercase tracking-wide">
          Daniel Amekpoagbe
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/swasty-jay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/@jombotey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/amekpoagbe-daniel-a881712b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:amekpoagbedaniel@gmail.com"
            className="hover:text-red-500 transition-colors duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} Daniel Amekpoagbe. All rights
        reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
