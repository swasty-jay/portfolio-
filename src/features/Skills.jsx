import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-500 text-5xl" />,
  },
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
];

const Skills = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        {/* Section Title with Animation */}
        <motion.h2
          className="text-3xl font-bold text-blue-400 mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Skills Grid with Scroll Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="mt-2 text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
