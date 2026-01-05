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
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
// Import images from assets
import blueline from "../../assets/IMG_9281.PNG";
import roseline from "../../assets/IMG_9274.PNG";
import ashline from "../../assets/IMG_9283.PNG";
import pista from "../../assets/IMG_9277.PNG";
import skyfade from "../../assets/IMG_9282.PNG";
import butterline from "../../assets/IMG_9275.PNG";

function Cursul() {
  const products = [
    { id: 1, title: "Blueline Striped Shirt", oldPrice: "₹1,999.00", price: "₹1,399.00", img: blueline, sale: true },
    { id: 2, title: "RoseLine Striped Shirt", oldPrice: "₹1,999.00", price: "₹1,399.00", img: roseline, sale: true },
    { id: 3, title: "Ashline Striped Shirt", oldPrice: "₹1,999.00", price: "₹1,399.00", img: ashline, sale: true },
    { id: 4, title: "Soft Pista Linen Shirt", price: "₹1,499.00", img: pista, sale: false },
    { id: 5, title: "Sky Fade Linen Shirt", price: "₹1,499.00", img: skyfade, sale: false },
    { id: 6, title: "Butterline Striped Shirt", oldPrice: "₹1,999.00", price: "₹1,399.00", img: butterline, sale: true },
  ];
  return (
    <div className="w-full px-4 md:px-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Grid]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            grid: { rows: 1 },
          },
          640: {
            slidesPerView: 3,
            grid: { rows: 1 },
          },
          1024: {
            slidesPerView: 4,
            grid: { rows: 1 },
          },
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 relative">
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-300 hover:brightness-90"
                />
                {item.sale && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-700 text-white text-sm px-4 py-1 rounded-full shadow-md">
                    Sale!
                  </span>
                )}
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-serif font-bold text-gray-800 mb-2">{item.title}</h2>
                <div className="flex justify-center items-center gap-3">
                  {item.oldPrice && (
                    <span className="line-through text-gray-400 text-md">
                      {item.oldPrice}
                    </span>
                  )}
                  <span className="text-amber-800 font-extrabold text-lg md:text-xl">
                    {item.price}
                  </span>
                </div>
                <button className="mt-4 bg-amber-800 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-900 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Cursul;