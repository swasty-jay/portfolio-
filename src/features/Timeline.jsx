import { motion } from "framer-motion";
import {
  FaSearch,
  FaPenNib,
  FaCode,
  FaRocket,
  FaDraftingCompass,
} from "react-icons/fa";
import illustration from "/illustration.svg"; // Add an illustration in your assets

import { useEffect } from "react";

const steps = [
  {
    id: 1,
    title: "Understanding the Client’s Vision",
    description: (
      <>
        🔹 Asking key questions to clarify the project scope.
        <br />
        🔹 Understanding the target audience & goals.
        <br />
        🔹 Gathering inspiration & feature ideas.
      </>
    ),
    icon: <FaSearch />,
  },
  {
    id: 2,
    title: "Research & Planning",
    description: (
      <>
        🔹 Analyzing competitors & market trends.
        <br />
        🔹 Choosing the best tech stack for scalability.
        <br />
        🔹 Structuring a project roadmap & milestones.
      </>
    ),
    icon: <FaPenNib />,
  },
  {
    id: 3,
    title: "Wireframing & Prototyping",
    description: (
      <>
        🔹 Creating low-fidelity wireframes for layout ideas.
        <br />
        🔹 Designing high-fidelity UI prototypes.
        <br />
        🔹 Gathering feedback before moving to development.
      </>
    ),
    icon: <FaDraftingCompass />,
  },
  {
    id: 4,
    title: "Development & Testing",
    description: (
      <>
        🔹 Writing clean, optimized, and scalable code.
        <br />
        🔹 Ensuring responsiveness across all devices.
        <br />
        🔹 Conducting manual & automated testing.
      </>
    ),
    icon: <FaCode />,
  },
  {
    id: 5,
    title: "Client Review & Deployment",
    description: (
      <>
        🔹 Presenting the project for client feedback.
        <br />
        🔹 Making final adjustments & improvements.
        <br />
        🔹 Deploying the project and monitoring performance.
      </>
    ),
    icon: <FaRocket />,
  },
];

const ProcessTimeline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-20 bg-gray-900 text-white">
      <motion.h2
        className="text-xl md:text-2xl font-bold text-center text-blue-400 mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        From Vision to Execution: My Development Process
        <p className="text-gray-400 text-sm text-center pt-2 px-3">
          I follow a structured process to turn ideas into functional,
          user-friendly <br /> products—ensuring efficiency, innovation, and
          execution.
        </p>
      </motion.h2>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left Side: Timeline */}
        <div className="lg:w-1/2 relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-600"></div>

          {/* Timeline Items */}
          <div className="space-y-8 pl-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative flex items-start space-x-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {/* Circle Icon */}
                <div className="absolute left-[-43px] flex items-center justify-center w-10 h-10 bg-gray-700 text-blue-400 rounded-full shadow-lg">
                  {step.icon}
                </div>

                {/* Step Details */}
                <div>
                  <h3 className="text-[16px] md:text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Illustration */}
        <motion.div
          className="lg:w-1/2  hidden md:block justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={illustration}
            alt="Process Illustration"
            className="w-full max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
