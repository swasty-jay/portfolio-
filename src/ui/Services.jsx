import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
  },
  {
    id: 3,
    title: "SEO Optimization",
    description:
      "Optimize websites to rank higher on search engines and improve visibility, bringing more organic traffic to your site.",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-900 text-white px-4 sm:px-6 mt-6">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Quality Services
        </motion.h2>
        <p className="text-gray-400 mb-8">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>

        <div className="space-y-6 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="p-6 rounded-lg flex justify-between items-center  transition duration-300  hover:bg-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-left">
                <span className="text-blue-400 font-semibold text-lg">
                  {String(service.id).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold mt-2">{service.title}</h3>
                <p className="text-gray-400 mt-2 ">{service.description}</p>
                <hr className="border-blue-600 mt-2" />
              </div>
              <FaArrowRight className="text-blue-300 text-3xl md:text-2xl transition-transform duration-300 hover:translate-x-2 ml-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
