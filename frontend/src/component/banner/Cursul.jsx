// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/grid";

// // Import images from assets
// import blueline from "../../assets/IMG_9281.PNG";
// import roseline from "../../assets/IMG_9274.PNG";
// import ashline from "../../assets/IMG_9283.PNG";
// import pista from "../../assets/IMG_9277.PNG";
// import skyfade from "../../assets/IMG_9282.PNG";
// import butterline from "../../assets/IMG_9275.PNG";

// function Cursul() {
//   const products = [
//     { id: 1, title: "Blueline Striped Shirt", oldPrice: "₹1,999.00", price: "₹1,399.00", img: blueline, sale: true },
//     { id: 2, title: "RoseLine Striped Shirt", oldPrice: "₹1,999.00", price: "₹1,399.00", img: roseline, sale: true },
//     { id: 3, title: "Ashline Striped Shirt", oldPrice: "₹1,999.00", price: "₹1,399.00", img: ashline, sale: true },
//     { id: 4, title: "Soft Pista Linen Shirt", price: "₹1,499.00", img: pista, sale: false },
//     { id: 5, title: "Sky Fade Linen Shirt", price: "₹1,499.00", img: skyfade, sale: false },
//     { id: 6, title: "Butterline Striped Shirt", oldPrice: "₹1,999.00", price: "₹1,399.00", img: butterline, sale: true },
//   ];

//   return (
//     <div className="w-full px-4 md:px-10">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, Grid]}
//         spaceBetween={20}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         breakpoints={{
//           0: {
//             slidesPerView: 2,
//             grid: { rows: 1 }, // ✅ Mobile: 2 in a row
//           },
//           640: {
//             slidesPerView: 2,
//             grid: { rows: 1 }, // ✅ Tablet: 2 in a row
//           },
//           1024: {
//             slidesPerView: 3,
//             grid: { rows: 1 }, // ✅ Desktop: 3 in a row
//           },
//         }}
//       >
//         {products.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="bg-white shadow-lg shadow-2xl rounded-none overflow-hidden">
//               <div className="relative">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-[450px] object-cover"
//                 />
//                 {item.sale && (
//                   <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
//                     Sale!
//                   </span>
//                 )}
//               </div>
//               <div className="p-4 text-center">
//                 <h2 className="text-lg font-large " style={{fontFamily:"serif"}}>{item.title}</h2>
//                 <div className="mt-2">
//                   {item.oldPrice && (
//                     <span className="line-through text-gray-500 mr-2">
//                       {item.oldPrice}
//                     </span>
//                   )}
//               <span className="text-black font-bold text-sm md:text-base lg:text-lg">
//   {item.price}
// </span>

//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
// export default Cursul;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import blueline from "../../assets/IMG_9281.PNG";
import roseline from "../../assets/IMG_9274.PNG";
import ashline from "../../assets/IMG_9283.PNG";
import pista from "../../assets/IMG_9277.PNG";
import skyfade from "../../assets/IMG_9282.PNG";
import butterline from "../../assets/IMG_9275.PNG";

const products = [
  { id: 1, title: "Blueline Striped Shirt", oldPrice: 1999, price: 1399, img: blueline, sale: true },
  { id: 2, title: "RoseLine Striped Shirt", oldPrice: 1999, price: 1399, img: roseline, sale: true },
  { id: 3, title: "Ashline Striped Shirt", oldPrice: 1999, price: 1399, img: ashline, sale: true },
  { id: 4, title: "Soft Pista Linen Shirt", price: 1499, img: pista },
  { id: 5, title: "Sky Fade Linen Shirt", price: 1499, img: skyfade },
  { id: 6, title: "Butterline Striped Shirt", oldPrice: 1999, price: 1399, img: butterline, sale: true },
];

const Cursul = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => navigate(`/product/${item.id}`)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {item.sale && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs tracking-widest px-4 py-1 rounded-full">
                    SALE
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-sm sm:text-base font-semibold tracking-wide text-gray-800 line-clamp-2">
                  {item.title}
                </h3>

                <div className="flex justify-center items-center gap-2 mt-2">
                  {item.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{item.oldPrice}
                    </span>
                  )}
                  <span className="text-amber-800 font-bold text-base sm:text-lg">
                    ₹{item.price}
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${item.id}`);
                  }}
                  className="mt-4 w-full py-2 rounded-full bg-amber-800 text-white text-sm tracking-wider hover:bg-amber-900 transition"
                >
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Cursul;
