import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaReact,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSupabase,
  SiFirebase,
  SiReactquery,
  SiRedux,
} from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-blue-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  JavaScript: <FaJsSquare className="text-yellow-400" />,
  Bootstrap: <FaBootstrap className="text-purple-500" />,
  Supabase: <SiSupabase className="text-green-500" />,
  Firebase: <SiFirebase className="text-orange-500" />,
  CSS3: <FaCss3Alt className="text-blue-500" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  ReactQuery: <SiReactquery className="text-red-500" />,
  Redux: <SiRedux className="text bg-purple-500" />,
};

const projects = [
  {
    id: 1,
    title: "Pizza App",
    description:
      "A fully responsive online pizza ordering platform built with React, featuring seamless navigation and a modern design.",
    image: "/pizza app.png",
    link: "https://fast-pizza-wine.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Redux"],
  },
  {
    id: 2,
    title: "Accordion",
    description:
      "A reusable Accordion component developed with React, showcasing smooth animations and clean code.",
    image: "/accordion .png",
    link: "https://accordion-mocha-eta.vercel.app/",
    technologies: ["React", "CSS3", "JavaScript"],
  },
  {
    id: 3,
    title: "Domus",
    description:
      "A sleek real estate website built with React, showcasing a modern and user-friendly interface.",
    image: "/Domus .png",
    link: "https://domus-indol.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Supabase"],
  },
  // {
  //   id: 4,
  //   title: "Todolist App",
  //   description:
  //     "A real-time task management application built with React, enabling users to efficiently create and organize tasks.",
  //   image: "/todo.png",
  //   link: "https://todo-list-silk-gamma.vercel.app/",
  //   technologies: ["React", "Firebase", "JavaScript"],
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.2,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2 text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex gap-4 text-2xl">
                  {project.technologies.map((tech, idx) => (
                    <div key={idx} className="tooltip" data-tooltip={tech}>
                      {techIcons[tech] || (
                        <span className="text-gray-400">{tech}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <span>View Project</span>
                  <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
