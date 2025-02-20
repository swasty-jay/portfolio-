import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A fully responsive online pizza odering website built with React.",
    image: "/pizza app.png", // Replace with your image path
    link: "https://fast-pizza-wine.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Accordion component built with React.",
    image: "/accordion .png", // Replace with your image path
    link: "https://accordion-mocha-eta.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Chat App",
  //   description: "A real-time chat application with Firebase authentication.",
  //   image: "/assets/chat-app.png", // Replace with your image path
  //   link: "#",
  // },
  {
    id: 3,
    title: "Atomic Blog",
    description: "A blog website built with React.",
    image: "/blog.png", // Replace with your image path
    link: "https://atomic-blog-three.vercel.app/",
  },
  {
    id: 4,
    title: "Todolist App",
    description:
      "A real-time application that allows users to create and manage tasks.",
    image: "/todo.png", // Replace with your image path
    link: "https://todo-list-silk-gamma.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Details */}
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block mt-4 text-sky-400 hover:underline"
                >
                  View Project →
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
