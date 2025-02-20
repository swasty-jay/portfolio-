import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

      setModalMessage("Message Sent! ✅");
      setIsModalOpen(true);
      reset();
    } catch (error) {
      console.error("Error:", error);
      setModalMessage("Failed to send message ❌");
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 gap-12">
      {/* Left Side - Contact Info */}
      <motion.div
        className="w-full md:w-1/2 hidden md:block pl-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-3xl uppercase">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-400 p-4 rounded-full">
              <FaPhoneAlt className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-lg font-semibold">0245870688</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-400 p-4 rounded-full">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a
                href="mailto:amekpoagbedaniel@gmail"
                className="text-lg font-semibold lowercase"
              >
                amekpoagbedaniel@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-400 p-4 rounded-full">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Address</p>
              <p className="text-lg font-semibold">Tema, Ghana</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-4">
          Let’s work together!
        </h2>
        <span className="text-gray-400 mb-4 font-sans">
          I code beautifully simple things and I love what I do. Just simple
          like that!
        </span>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block">Name:</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="border p-2 rounded w-full bg-gray-700 text-white"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block">Email:</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              className="border p-2 rounded w-full bg-gray-700 text-white"
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <label className="block">Message:</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="border p-2 rounded w-full bg-gray-700 text-white h-28"
              placeholder="Your Message"
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </motion.div>

          {/* Submit Button with Loading State */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {isSubmitting ? (
              <button
                type="button"
                className="w-full py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center"
                disabled
              >
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="white"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Sending...
              </button>
            ) : (
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-lg"
              >
                Send Message
              </button>
            )}
          </motion.div>
        </form>
      </motion.div>

      {/* Modal Pop-up */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <p>{modalMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsModalOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
