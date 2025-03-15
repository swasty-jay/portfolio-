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
            src="/P2.jpg" // Replace with your image path
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
            Hi! I'm a passionate front-end developer with a strong foundation in
            HTML, CSS, JavaScript, and modern frameworks like React. I
            specialize in crafting visually appealing, responsive, and
            high-performance web applications using Tailwind CSS, Bootstrap, and
            Framer Motion.
          </p>
          <p className="mt-2 text-gray-400">
            With a keen eye for design and user experience, I strive to build
            seamless digital experiences that not only look great but also
            function flawlessly across all devices. Whether it's creating sleek
            UI components, optimizing for speed, or implementing smooth
            animations, I love turning ideas into reality. My goal is to bridge
            the gap between design and technology, ensuring every project is
            intuitive, engaging, and future-proof.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
