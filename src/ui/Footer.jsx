import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white py-8 px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Name */}
        <div className="text-xl font-bold uppercase">Daniel </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0 uppercase ">
          <Link to="#about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="#projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link to="#contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>

        {/* Social Media Links */}

        <div className="flex space-x-8 mt-4 md:mt-0">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:your@email.com" className="hover:text-gray-400">
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
