import { useState } from "react";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full shadow-md z-50 uppercase">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Daniel
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-400">
              services
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
        <button className="relative px-6 py-2 border-2 border-blue-500 font-semibold text-blue-500 rounded-full bg-transparent hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out uppercase tracking-wide shadow-md hover:shadow-lg group overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
          <Link to="/Contact" className="relative z-10">
            Hire Me
          </Link>
        </button>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 p-4 mt-2 space-y-4 text-center ">
          <li>
            <Link
              to="/"
              className="block hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
