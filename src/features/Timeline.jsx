import { motion } from "framer-motion";
import {
  FaSearch,
  FaPenNib,
  FaCode,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";
const steps = [
  {
    id: 1,
    title: "Understanding the Client’s Vision",
    description: (
      <>
        🔹 Asking key questions to clarify the **project scope**.
        <br />
        🔹 Understanding the **target audience & goals**.
        <br />
        🔹 Gathering **inspiration & feature ideas**.
      </>
    ),
    icon: <FaSearch />,
  },
  {
    id: 2,
    title: "Research & Planning",
    description: (
      <>
        🔹 Analyzing **competitors & market trends**.
        <br />
        🔹 Choosing the **best tech stack** for scalability.
        <br />
        🔹 Structuring a **project roadmap & milestones**.
      </>
    ),
    icon: <FaPenNib />,
  },
  {
    id: 3,
    title: "Wireframing & Prototyping",
    description: (
      <>
        🔹 Creating **low-fidelity wireframes** for layout ideas.
        <br />
        🔹 Designing **high-fidelity UI prototypes**.
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
        🔹 Writing **clean, optimized, and scalable code**.
        <br />
        🔹 Ensuring **responsiveness across all devices**.
        <br />
        🔹 Conducting **manual & automated testing**.
      </>
    ),
    icon: <FaCode />,
  },
  {
    id: 5,
    title: "Client Review & Deployment",
    description: (
      <>
        🔹 Presenting the project for **client feedback**.
        <br />
        🔹 Making final **adjustments & improvements**.
        <br />
        🔹 **Deploying** the project and monitoring performance.
      </>
    ),
    icon: <FaRocket />,
  },
];

const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-blue-400 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Process: From Idea to Code
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
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
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
