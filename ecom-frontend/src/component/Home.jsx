// import React, { useEffect, useState } from "react";
// import Banner from "../component/banner/Banner";
// import Cursul from "./banner/Cursul";

// import Image from'../../src/assets/IMG_9274.PNG'
// import image2 from'../../src/assets/IMG_9281.PNG'
// import image3 from'../../src/assets/IMG_9283.PNG'
// function Home() {
//   const [blurValue, setBlurValue] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const blur = Math.min(scrollTop / 50, 10);
//       setBlurValue(blur);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   },
  
//   []);




//     const products = [
//       {
//         id: 1,
//         name: "Blush Pink Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9274.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 2,
//         name: "Ocean Blue Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9277.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 3,
//         name: "Vintage Wine Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9283.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 1,
//         name: "Blush Pink Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9274.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 2,
//         name: "Ocean Blue Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9277.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 3,
//         name: "Vintage Wine Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9283.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 4,
//         name: "Blush Pink Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9274.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 5,
//         name: "Ocean Blue Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9277.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 6,
//         name: "Vintage Wine Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9283.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 7,
//         name: "Blush Pink Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9274.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 8,
//         name: "Ocean Blue Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9277.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 9,
//         name: "Vintage Wine Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9283.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 10,
//         name: "Blush Pink Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9274.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 11,
//         name: "Ocean Blue Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9277.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 12,
//         name: "Vintage Wine Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9283.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 13,
//         name: "Blush Pink Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9274.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 14,
//         name: "Ocean Blue Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9277.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 15,
//         name: "Vintage Wine Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9283.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 16,
//         name: "Blush Pink Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9274.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 17,
//         name: "Ocean Blue Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9277.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//       {
//         id: 18,
//         name: "Vintage Wine Linen Blend Shirt",
//         category: "Linen Blend",
//         image: "src/assets/IMG_9283.PNG",
//         oldPrice: "₹2,099.00",
//         price: "₹1,699.00",
//       },
//     ];
  
//     const categories = [
//       "All",
//       "BestSeller",
//       "Linen Blend",
//       "Plain",
//       "Regular",
//       "Relaxed",
//       "Striped",
//     ];
  
//     const [selectedCategory, setSelectedCategory] = useState("All");
  
//     const filteredProducts =
//       selectedCategory === "All"
//         ? products
//         : products.filter((p) => p.category === selectedCategory);
  
//   return (
//     <>
//       {/* Banner */}
//       <div
//         className="ban w-full h-[500px] overflow-hidden transition-all duration-300"
//         style={{ filter: `blur(${blurValue}px)` }}
//       >
//         <Banner />
//       </div>

//       {/* New Arrivals Section */}
//       <section className="w-full bg-gray-100 py-12 flex justify-center">
//         <div className="w-full max-w-7xl flex flex-col items-center px-4 md:px-10 lg:px-5 lg:pb-20">
//           {/* Section Title */}
//           <h1 className="text-4xl md:text-5xl italic font-sans mb-10 text-center">
//             New Arrivals
//           </h1>

//           {/* Carousel */}
//           <Cursul />
//         </div>
//       </section>
//       <div className="text-3xl flex justify-center font-serif h-15">Shop By Category</div>
// <div className="felx justify-center grid grid-cols-2 gap-2 ">
// <div>
// <img src="src/assets/IMG_9274.PNG" alt="" />
// </div><div>
// <img src="src/assets/IMG_9281.PNG" alt="" />
// </div>

// </div>
//  <div className="text-3xl flex justify-center font-serif h-15 mt-10">Top picks</div>

// <Cursul/>

// {/* <div className="h-[400px] bg-cover br-center bg-no-repeat"
// style={"background-image: url('src/assets/IMG_9282.PNG')"}>
//   <h1>Welcome, to Lala compony</h1>
// <img src="src/assets/IMG_9282.PNG" alt="" />
// </div> */}

// <div
//   className="h-[250px] bg-cover bg-center bg-no-repeat relative"
//   style={{
//     backgroundImage: "url('/src/assets/IMG_9282.PNG')"
//   }}
// >
//   <h1 className="font-bold absolute top-15 left-45 font-poppins text-white italic font-light text-xl md:text-3xl tracking-wide bg-black">
//     Linen FITS
//   </h1>
// {/* text-white italic font-light text-xl md:text-3xl tracking-wide */}
//   <h1 className="font-bold absolute top-30 left-[820px] text-white italic font-light text-xl md:text-3xl tracking-wide bg-black">
//     NEW STYLES ADDED
//   </h1>

//   <button className="bg-black text-white px-4 py-2 absolute top-36 left-[535px]">
//     Shop Now
//   </button>
// </div>


//  <div className="max-w-7xl mx-auto px-6 py-12">
//       {/* Heading */}
     

//       {/* Category Filter */}
      
//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="text-center  p-4 shadow-sm hover:shadow-lg transition"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-[400px] object-cover rounded"
//             />
//             <h3 className="mt-4 font-medium">{product.name}</h3>
//             <div className="mt-2">
//               <span className="line-through text-gray-500 mr-2">
//                 {product.oldPrice}
//               </span>
//               <span className="font-bold text-lg">{product.price}</span>



              
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>







//     </>
//   );
// }

// export default Home;




import React, { useEffect, useState } from "react";
import Banner from "../component/banner/Banner";
import Cursul from "./banner/Cursul";
import Image from '../../src/assets/IMG_9274.PNG'
import image2 from '../../src/assets/IMG_9281.PNG'
import image3 from '../../src/assets/IMG_9283.PNG'

function Home() {
  const [blurValue, setBlurValue] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const blur = Math.min(scrollTop / 50, 10);
      setBlurValue(blur);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const products = [
    {
      id: 1,
      name: "Blush Pink Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9274.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 2,
      name: "Ocean Blue Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9277.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 3,
      name: "Vintage Wine Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9283.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 1,
      name: "Blush Pink Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9274.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 2,
      name: "Ocean Blue Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9277.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 3,
      name: "Vintage Wine Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9283.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 4,
      name: "Blush Pink Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9274.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 5,
      name: "Ocean Blue Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9277.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 6,
      name: "Vintage Wine Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9283.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 7,
      name: "Blush Pink Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9274.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 8,
      name: "Ocean Blue Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9277.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 9,
      name: "Vintage Wine Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9283.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 10,
      name: "Blush Pink Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9274.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 11,
      name: "Ocean Blue Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9277.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 12,
      name: "Vintage Wine Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9283.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 13,
      name: "Blush Pink Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9274.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 14,
      name: "Ocean Blue Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9277.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 15,
      name: "Vintage Wine Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9283.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 16,
      name: "Blush Pink Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9274.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 17,
      name: "Ocean Blue Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9277.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
    {
      id: 18,
      name: "Vintage Wine Linen Blend Shirt",
      category: "Linen Blend",
      image: "src/assets/IMG_9283.PNG",
      oldPrice: "₹2,099.00",
      price: "₹1,699.00",
    },
  ];

  const categories = [
    "All",
    "BestSeller",
    "Linen Blend",
    "Plain",
    "Regular",
    "Relaxed",
    "Striped",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Banner */}
      <div
        className="ban w-full h-[500px] overflow-hidden transition-all duration-300 relative z-0"
        style={{ filter: `blur(${blurValue}px)` }}
      >
        <Banner />
      </div>
      {/* New Arrivals Section */}
      <section className="w-full bg-gradient-to-b from-gray-100 to-white py-16 flex justify-center relative z-10 -mt-20 rounded-t-3xl shadow-xl">
        <div className="w-full max-w-7xl flex flex-col items-center px-4 md:px-10 lg:px-5 lg:pb-20">
          {/* Section Title */}
          <h1 className="text-4xl md:text-6xl italic font-serif mb-12 text-center text-gray-800 drop-shadow-lg animate-fade-in">
            New Arrivals
          </h1>
          {/* Carousel */}
          <Cursul />
        </div>
      </section>
      <div className="text-4xl flex justify-center font-serif py-8 bg-gray-50 text-gray-800 animate-slide-up">Shop By Category</div>
      <div className="flex justify-center grid grid-cols-2 md:grid-cols-2 gap-4 px-4 md:px-10">
        <div className="relative overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
          <img src="src/assets/IMG_9274.PNG" alt="" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-semibold">Linen Blend</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
          <img src="src/assets/IMG_9281.PNG" alt="" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-semibold">Striped</p>
          </div>
        </div>
      </div>
      <div className="text-4xl flex justify-center font-serif py-8 mt-10 bg-gray-50 text-gray-800 animate-slide-up">Top Picks</div>
      <Cursul />
      <div
        className="h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: "url('/src/assets/IMG_9282.PNG')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <h1 className="absolute top-1/4 left-10 md:left-20 text-white italic font-light text-3xl md:text-5xl tracking-widest animate-fade-in-up">
          LINEN FITS
        </h1>
        <h1 className="absolute top-1/3 left-10 md:left-20 text-white italic font-light text-2xl md:text-4xl tracking-widest animate-fade-in-up delay-200">
          NEW STYLES ADDED
        </h1>
        <button className="absolute top-1/2 left-10 md:left-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white px-6 py-3 rounded-full font-semibold hover:from-amber-700 hover:to-amber-900 transition-all duration-300 animate-bounce-slow">
          Shop Now
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-amber-800 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-amber-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                New
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-800">{product.name}</h3>
              <div className="mt-2 flex justify-center items-center gap-2">
                <span className="line-through text-gray-500 text-sm">
                  {product.oldPrice}
                </span>
                <span className="font-bold text-xl text-amber-800">{product.price}</span>
              </div>
              <button className="mt-4 bg-amber-800 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-amber-900">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;