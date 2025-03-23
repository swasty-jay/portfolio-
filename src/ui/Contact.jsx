import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_nl8hxta",
        "template_ex7u2db",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "o51dHNuIWoCqdooiR"
      );

      setModalMessage("Message Sent Successfully! ✅");
      setIsModalOpen(true);
      reset();
    } catch (error) {
      console.error("Error:", error);
      setModalMessage("Failed to Send Message ❌");
      setIsModalOpen(true);
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Side - Contact Info */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-8">
            Get in Touch
          </h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-full shadow-md">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Phone
                </p>
                <p className="text-lg font-semibold">+233 245 870 688</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-full shadow-md">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:amekpoagbedaniel@gmail.com"
                  className="text-lg font-semibold lowercase hover:text-blue-400 transition-colors duration-300"
                >
                  amekpoagbedaniel@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-full shadow-md">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Location
                </p>
                <p className="text-lg font-semibold">Tema, Ghana</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          className="w-full md:w-1/2 bg-gray-800 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-4">
            Send Me a Message
          </h2>
          <p className="text-gray-300 text-center mb-6">
            Let’s collaborate to bring your ideas to life!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-300 mb-1">Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full pl-10 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              {errors.name && (
                <p
                  className="text-red-500 text-sm mt-1……

"
                >
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-300 mb-1">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full pl-10 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-300 mb-1">Message</label>
              <div className="relative">
                <FaComment className="absolute left-3 top-5 text-gray-400" />
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="w-full pl-10 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none h-32 resize-none"
                  placeholder="Your Message"
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {isSubmitting ? (
                <button
                  type="button"
                  className="w-full py-3 bg-blue-500 text-white rounded-lg flex items-center justify-center opacity-75 cursor-not-allowed"
                  disabled
                >
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="white"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Sending...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>

      {/* Modal Pop-up */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white text-black p-8 rounded-xl shadow-2xl max-w-sm w-full">
            <p className="text-lg font-semibold text-center">{modalMessage}</p>
            <button
              className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Contact;
