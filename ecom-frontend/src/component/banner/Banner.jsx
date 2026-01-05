// import React from "react";
// import { motion } from "framer-motion";
// import bannerMobile from "../../assets/IMG_9275.PNG";   // replace with your image
// import bannerTablet from "../../assets/IMG_9283.PNG";   // replace with your image
// import bannerDesktop from "../../assets/1.PNG"; // replace with your image

// function Banner() {
//   return (
//     <div className="relative w-full h-[500px] overflow-hidden">
//       {/* Mobile */}
//       <motion.img
//         src={bannerMobile}
//         alt="Banner Mobile"
//         className="block sm:hidden w-full h-full object-cover"
//         initial={{ scale: 1.2 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       />

//       {/* Tablet */}
//       <motion.img
//         src={bannerTablet}
//         alt="Banner Tablet"
//         className="hidden sm:block lg:hidden w-full h-full object-cover"
//         initial={{ scale: 1.2 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       />

//       {/* Laptop / Desktop */}
//       <motion.img
//         src={bannerDesktop}
//         alt="Banner Desktop"
//         className="hidden lg:block w-full h-full object-cover"
//         initial={{ scale: 1.2 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       />

//       {/* Overlay Text */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-amber-800 text-center px-4">
//         <motion.h1
//           className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-[0.3em]"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           HUSSAIN STUDIO
//         </motion.h1>

//         <motion.p
//           className="mt-2 text-lg sm:text-xl tracking-[0.5em]"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
//         >
//           BY FUZAIL HUSSAIN
//         </motion.p>
//       </div>
//     </div>
//   );
// }

// export default Banner;


import React from "react";
import { motion } from "framer-motion";
import bannerMobile from "../../assets/IMG_9275.PNG"; // replace with your image
import bannerTablet from "../../assets/IMG_9283.PNG"; // replace with your image
import bannerDesktop from "../../assets/1.PNG"; // replace with your image

function Banner() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-b-3xl shadow-2xl">
      {/* Mobile */}
      <motion.img
        src={bannerMobile}
        alt="Banner Mobile"
        className="block sm:hidden w-full h-full object-cover"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Tablet */}
      <motion.img
        src={bannerTablet}
        alt="Banner Tablet"
        className="hidden sm:block lg:hidden w-full h-g-full object-cover"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Laptop / Desktop */}
      <motion.img
        src={bannerDesktop}
        alt="Banner Desktop"
        className="hidden lg:block w-full h-full object-cover"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Overlay Text */}
      <div className="absolute inset-0 h-[500px] flex flex-col items-center justify-center text-amber-800 text-center px-4 bg-black bg-opacity-20">
        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-[0.4em] drop-shadow-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          HUSSAIN 
        </motion.h1>
 <motion.h1
          className="text-5xl sm:text-7xl lg:text-4xl font-extrabold tracking-[0.4em] drop-shadow-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          STUDIO
        </motion.h1>

        <motion.p
          className="mt-4 text-xl sm:text-2xl tracking-[0.6em] font-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
        >
       
        </motion.p>
        <motion.button
          className="mt-8 bg-amber-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-900 transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
}
export default Banner;