import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Background images
// import bannerMobile from "../../assets/IMG_9275.PNG";
// import bannerTablet from "../../assets/IMG_9283.PNG";

const bannerDesktopURL =
  "/images/main-banner.jpg";
const bannerMobileURL =
  "/images/main-banner.jpg";
const bannerTabletURL =
  "/images/main-banner.jpg";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[75vh] sm:min-h-[85vh] lg:min-h-[95vh] overflow-hidden rounded-b-[3rem] shadow-2xl">

      {/* IMAGE LAYER */}
      <div className="absolute inset-0">
        {/* Mobile */}
        <motion.img
          src={bannerMobileURL}
          alt="Hussain Studio Mobile Banner"
          className="block sm:hidden w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Tablet */}
        <motion.img
          src={bannerTabletURL}
          alt="Hussain Studio Tablet Banner"
          className="hidden sm:block lg:hidden w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Desktop */}
        <motion.img
          src={bannerDesktopURL}
          alt="Hussain Studio Desktop Banner"
          className="hidden lg:block w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />
      </div>

      {/* OVERLAY (Luxury gradient + vignette) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center min-h-[75vh] sm:min-h-[85vh] lg:min-h-[95vh] px-4">
        <div className="text-center">

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 80, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.35em" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#F5F1EB]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            HUSSAIN
          </motion.h1>

          {/* Studio */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.25 }}
            className="mt-3 text-3xl sm:text-5xl lg:text-4xl font-semibold tracking-[0.45em] text-[#C9A45C]"
          >
            STUDIO
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-8 text-xs sm:text-base tracking-[0.5em] uppercase text-gray-200"
          >
            Timeless · Elegant · Handcrafted
          </motion.p>

          {/* CTA */}
          <motion.button
            onClick={() => navigate("/collection")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 30px rgba(201,164,92,0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            className="mt-12 px-10 py-4 rounded-full border border-[#C9A45C] text-[#C9A45C] font-semibold tracking-widest hover:bg-[#C9A45C] hover:text-black transition-all duration-300"
          >
            EXPLORE COLLECTION
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
