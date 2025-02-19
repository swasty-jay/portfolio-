import { motion } from "framer-motion";
import { Link } from "react-router";

function AboutMe() {
  return (
    <section className=" w-full  py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/assets/profile.png" // Replace with your image path
            alt="Profile"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="w-full md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-sky-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Hi, I'm{" "}
            <span className="text-sky-400 font-semibold">
              Daniel Amekpoagbe
            </span>
            , a passionate
            <span className="text-sky-400 font-semibold mx-1">
              Front-End Developer
            </span>
            specializing in **React** & **Tailwind CSS**. I love building sleek,
            responsive, and interactive user interfaces that provide smooth user
            experiences. My focus is on **clean code, animations, and
            performance**.
          </p>
          <p className="text-gray-300 mt-4">
            When I'm not coding, I explore new tech trends and contribute to
            open-source projects. Let's build something **amazing** together! 🚀
          </p>

          <p className="text-gray-300 mt-4 font-serif">
            I wrote my first line of code when I was [age], and it was a simple
            'Hello, World!' program. Little did I know, that was the start of my
            love affair with frontend development.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg shadow-lg transition"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="border border-sky-400 hover:bg-sky-400 text-white px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
