import { motion } from "framer-motion";

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
            src="/header-pic.png" // Replace with your image path
            alt="Profile"
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
            Hi! I'm a passionate front-end developer with experience in React,
            Tailwind CSS, and Framer Motion. I love building interactive and
            user-friendly web applications.
          </p>
          <p className="mt-2 text-gray-400">
            With a keen eye for design and performance, I aim to create seamless
            digital experiences that stand out.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
