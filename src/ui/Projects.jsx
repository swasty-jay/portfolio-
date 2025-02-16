import { motion } from "framer-motion";

function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-gray-900 py-16 text-center ">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-8 p-6">
        <motion.div
          className="bg-gray-800 p-6 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-bold">Project One</h3>
          <p className="mt-2">Description of your project.</p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-bold">Project Two</h3>
          <p className="mt-2">Description of another project.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
