import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

const skills = [
  {
    name: "HTML",
    level: 90,
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
  },
  {
    name: "CSS",
    level: 85,
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
  },
  {
    name: "JavaScript",
    level: 80,
    icon: <FaJsSquare className="text-yellow-500 text-5xl" />,
  },
  {
    name: "React",
    level: 88,
    icon: <FaReact className="text-cyan-400 text-5xl" />,
  },
  {
    name: "Git",
    level: 75,
    icon: <FaGitAlt className="text-red-500 text-5xl" />,
  },
];

const experiences = [
  {
    year: "2024 - PRESENT",
    title: "FRONTEND DEVELOPER",
    place: "self thought",
  },
  {
    year: "2024 - 2025",
    title: "JAVASCRIPT & REACT",
    place: "Udemy",
  },
];

const education = [
  {
    year: "2020 ",
    title: "GENERAL SCIENCE",
    place: "Anfoega Secondary School",
  },
  {
    year: "2023-PRESENT",
    title: "BSC COMPUTER SCIENCE",
    place: "Accra Institute of Technology",
  },
];

const Skills = () => {
  return (
    <section className="py-12 bg-gray-900 text-white px-4 sm:px-6">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-400 mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <motion.p
          className=" font-semibold text-gray-400 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          I put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <motion.div
                className="mt-2 text-lg font-semibold"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              >
                {skill.level}%
              </motion.div>
              <p className="mt-1 text-blue-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience & Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  px-4 sm:px-6">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 flex items-center mb-4">
              <FaBriefcase className="mr-2" /> My Experience
            </h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-xl mb-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-blue-300 font-bold">{exp.year}</p>
                <h4 className="text-lg font-bold">{exp.title}</h4>
                <p className="text-gray-400">{exp.place}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-400 flex items-center mb-4">
              <FaGraduationCap className="mr-2" /> My Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-xl mb-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-blue-300 font-bold">{edu.year}</p>
                <h4 className="text-lg font-bold">{edu.title}</h4>
                <p className="text-gray-400">{edu.place}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
