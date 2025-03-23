import { motion } from "framer-motion";
import { Link } from "react-router";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side - Profile Image */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/P2.jpg" // Replace with your image path
            alt="Profile of a Front-End Developer"
            className="w-72 h-72 md:w-72 md:h-72 rounded-full border-2 border-double border-blue-500 shadow-lg"
          />
        </motion.div>

        {/* Right Side - About Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-400">About Me</h2>
          <p className="mt-4 text-lg text-gray-300 font-semibold">
            Hello! I’m a dedicated front-end developer skilled in HTML, CSS,
            JavaScript, and frameworks like React. I focus on building
            responsive, visually appealing, and efficient web applications using
            tools such as Tailwind CSS, Bootstrap, and Framer Motion.
          </p>
          <p className="mt-2 text-gray-400">
            I’m passionate about creating intuitive user experiences that
            combine great design with seamless functionality. My work involves
            developing clean UI components, optimizing performance, and adding
            dynamic animations to bring projects to life. I aim to deliver
            high-quality solutions that adapt to all devices and meet modern
            standards.
          </p>
          <Link
            to="/contact" // Replace with your contact section ID or link
            className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
