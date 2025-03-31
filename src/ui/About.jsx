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
            As a seasoned Front-End Developer with over 6 months of experience,
            I specialize in crafting accessible, pixel-perfect user interfaces
            that seamlessly blend thoughtful design with robust engineering. My
            passion lies at the intersection of design and development, creating
            experiences that are not only visually appealing but also performant
            and user-friendly.
          </p>
          <p className="mt-4 text-gray-400">
            Throughout my career, I've collaborated with diverse teams ranging
            from startups to large enterprises, delivering high-quality web
            applications. My expertise includes modern JavaScript frameworks,
            responsive design, and performance optimization. I take pride in
            writing clean, maintainable code and mentoring aspiring developers
            to reach their full potential.
          </p>
          <p className="mt-4 text-gray-400">
            Beyond coding, I'm an advocate for continuous learning and community
            engagement. I've spoken at industry conferences, contributed to
            open-source projects, and authored articles on best practices in
            front-end development. Let's connect and explore how we can create
            exceptional digital experiences together.
          </p>
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
