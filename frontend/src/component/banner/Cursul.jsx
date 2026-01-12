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


import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../redux/features/productSlice";
import { fetchProducts } from "../../redux/features/apiSlice";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Fallback images
import blueline from "../../assets/IMG_9281.PNG";
import roseline from "../../assets/IMG_9274.PNG";
import ashline from "../../assets/IMG_9283.PNG";
import pista from "../../assets/IMG_9277.PNG";
import skyfade from "../../assets/IMG_9282.PNG";
import butterline from "../../assets/IMG_9275.PNG";

const Cursul = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.api);

  // Fetch products on component mount
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // Handle loading state
  if (status === 'loading') {
    return (
      <section className="w-full px-4 sm:px-8 lg:px-12 py-10">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </section>
    );
  }

  // Handle error state
  if (status === 'failed') {
    return (
      <section className="w-full px-4 sm:px-8 lg:px-12 py-10">
        <div className="text-center">
          <p className="text-red-600">Error loading products: {error}</p>
          <button 
            onClick={() => dispatch(fetchProducts())}
            className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

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
        {Array.isArray(products) && products.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => {
                dispatch(setSelectedProduct(item));
                navigate(`/product/${item.id}`);
              }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image ? item.image.replace('http://127.0.0.1:8000', 'http://192.168.1.7/ecom/public') : blueline}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = blueline;
                  }}
                />

                {item.oldPrice && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs tracking-widest px-4 py-1 rounded-full">
                    SALE
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-sm sm:text-base font-semibold tracking-wide text-gray-800 line-clamp-2">
                  {item.name}
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
                    dispatch(setSelectedProduct(item));
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
      
      {/* Contact Info */}
      <div className="mt-12 text-center border-t pt-8">
        <p className="text-gray-600 mb-4">
          <strong>Email:</strong> hussainstudios112211@gmail.com
        </p>
        <a 
          href="https://www.facebook.com/share/1BZd1L88bu/?mibextid=wwXIfr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Follow us on Facebook
        </a>
      </div>
    </section>
  );
};

export default Cursul;
