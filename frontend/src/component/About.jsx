import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import image1 from "../../src/assets/IMG_9274.PNG";
import image2 from "../../src/assets/IMG_9281.PNG";
import image3 from "../../src/assets/IMG_9283.PNG";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full overflow-hidden">
      {/* SECTION 1 */}
      <div className="w-full px-5 sm:px-10 md:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 tracking-wide">
              ABOUT HUSSAIN STUDIO
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to <strong>HUSSAIN STUDIO</strong> — a clothing brand built on
              simplicity, style, and everyday comfort.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We focus on timeless pieces that feel good, look refined, and never
              go out of trend. Clean cuts, classic fits, and versatile designs you
              can rely on.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              No loud logos — just quiet confidence. Minimal menswear designed to
              last and elevate your everyday wardrobe.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-10 mb-4">
              WHY WE STARTED
            </h3>

            <p className="text-gray-700 leading-relaxed mb-3">
              I’ve always been drawn to minimal, neutral fashion — styles that are
              effortless, timeless, and always relevant.
            </p>

            <p className="text-gray-700 leading-relaxed mb-3">
              HUSSAIN STUDIO is my way of sharing that personal style and creating
              everyday essentials for men who value simplicity and confidence.
            </p>

            <button
              onClick={() => navigate("/collection")}
              className="mt-8 px-7 py-3 rounded-full bg-black text-white text-sm tracking-widest hover:bg-gray-900 transition"
            >
              EXPLORE COLLECTION
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={image1}
              alt="Hussain Studio Philosophy"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="w-full px-5 sm:px-10 md:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:order-none order-1"
          >
            <img
              src={image2}
              alt="Hussain Studio Design"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              BRAND ESSENCE
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              HUSSAIN STUDIO embodies timeless simplicity — rooted in minimalism
              and designed for everyday confidence.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
              DESIGN APPROACH
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Less is always more. Our designs focus on clean lines, neutral tones,
              and classic fits that never go out of fashion.
            </p>

            <p className="text-gray-700 leading-relaxed">
              From fabric selection to finishing details, every piece is crafted
              with intention, comfort, and understated elegance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SECTION 3 – FOUNDER MESSAGE */}
      <div className="w-full px-5 sm:px-10 md:px-20 py-14 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              MESSAGE FROM THE FOUNDER
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Hi, I’m <strong>FUZAIL</strong> — the founder of HUSSAIN STUDIO.
              This brand started with a simple idea: to create timeless menswear
              that feels effortless and confident.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              HUSSAIN STUDIO is more than clothing — it’s a reflection of my
              personal style and a dream I’ve carried for a long time.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Thank you for being part of this journey.
            </p>

            <p className="font-semibold tracking-wide">
              – FUZAIL HUSSAIN <br />
              <span className="text-sm text-gray-600">
                Founder, HUSSAIN STUDIO
              </span>
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={image3}
              alt="Founder Hussain Studio"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
