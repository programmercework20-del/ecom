import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-semibold mb-10 text-center"
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* FORM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border rounded-xl p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 text-green-600 text-sm"
            >
              ✅ Thank you! We’ll get back to you shortly.
            </motion.p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="input"
            />

            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="input resize-none"
            />

            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full py-3 rounded-full bg-black text-white tracking-widest hover:bg-gray-900 transition"
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>

        {/* CONTACT INFO + MAP */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border rounded-xl p-6 shadow-sm flex flex-col gap-6"
        >
          
          {/* INFO */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Contact Information
            </h2>

            <p className="text-gray-600 mb-2">
              📍 123 Fashion Street, Mumbai, India
            </p>
            <p className="text-gray-600 mb-2">
              📧 hussainstudios112211@gmail.com
            </p>
            <p className="text-gray-600 mb-2">
              📞 +91 95187 95065
            </p>
            <p className="text-gray-600 mb-4">
              📘 Facebook: <a href="https://www.facebook.com/share/1BZd1L88bu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visit our Facebook</a>
            </p>

            {/* QUICK ACTIONS */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/919518795065"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>

              <a
                href="mailto:hussainstudios112211@gmail.com"
                className="flex items-center justify-center gap-3 py-3 rounded-full border border-black hover:bg-black hover:text-white transition"
              >
                <FaEnvelope /> Email Us
              </a>

              {/* <a
                href="https://www.facebook.com/share/1BZd1L88bu/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <FaFacebook /> Follow on Facebook
              </a> */}
            </div>
          </div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden border"
          >
            <iframe
              title="Hussain Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.9023997181666!2d79.09396917503514!3d21.156282080525095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0c011f8b8d1%3A0x2c9c311125caa9d5!2sKamal%20Medical%20And%20General%20Stores!5e0!3m2!1sen!2sin!4v1767773431242!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </motion.div>

        </motion.div>
      </div>

      {/* Inline input styling */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid #ddd;
            border-radius: 10px;
            outline: none;
            font-size: 14px;
          }
          .input:focus {
            border-color: #000;
          }
        `}
      </style>
    </section>
  );
};

export default ContactUs;
