import { motion } from "framer-motion";
import { Link } from "react-router";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 text-center">
        {/* About Text */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-blue-400">About Me</h2>
          <p className="mt-4 text-lg text-gray-300 font-semibold">
            Front-End Developer with 8+ months of experience crafting
            pixel-perfect, accessible, and high-performance user interfaces that
            blend design with robust engineering.
          </p>
          <p className="mt-4 text-gray-400">
            I build high-quality web applications with expertise in modern
            JavaScript frameworks, responsive design, and performance
            optimization. Passionate about clean code, mentoring, and community
            engagement, I’ve contributed to open-source projects, spoken at
            industry events, and written on front-end best practices. Let’s
            connect to create great digital experiences!
          </p>
          {/* <p className="mt-4 text-gray-400">
            Beyond coding, I'm an advocate for continuous learning and community
            engagement. I've spoken at industry conferences, contributed to
            open-source projects, and authored articles on best practices in
            front-end development. Let's connect and explore how we can create
            exceptional digital experiences together.
          </p> */}
          <Link
            to="/timeline"
            className="mt-6 inline-block px-6 py-2 border-[1px] uppercase border-gray-500 text-blue-700 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            My Process
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
