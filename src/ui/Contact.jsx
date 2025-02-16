import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_nl8hxta", // EmailJS Service ID
        "template_ex7u2db", //  EmailJS Template ID
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "o51dHNuIWoCqdooiR" //  EmailJS Public Key
      )
      .then(
        () => {
          setModalMessage("Message Sent! ✅");
          setIsModalOpen(true);
          reset();
        },
        (error) => {
          console.error("Error:", error);
          setModalMessage("Failed to send message ❌");
          setIsModalOpen(true);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 gap-12">
      {/* Left Side - Image */}
      <motion.div
        className="w-full md:w-1/2 hidden md:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/form-img.jpg"
          alt="Contact"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
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

          {/* Email Field */}
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

          {/* Message Field */}
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

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-lg"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* MODAL POP-UP */}
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

///////////EMAILJS CODE SAMPLE//////////

// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_nl8hxta", "template_ex7u2db", form.current, {
//         publicKey: "o51dHNuIWoCqdooiR",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail} className="mt-12 flex flex-col gap-4">
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
// export default ContactUs;
