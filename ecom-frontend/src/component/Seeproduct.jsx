import React, { useState } from "react";
import { FaTag, FaTruck, FaExchangeAlt, FaCreditCard } from "react-icons/fa";
import Cursul from "./banner/Cursul";

function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Blush Pink Linen Blend Shirt",
    oldPrice: "₹2,099.00",
    price: "₹1,699.00",
    sizes: ["S", "M", "L", "XL"],
    stock: 20,
    image: "src/assets/IMG_9282.PNG", // apna image link laga dena
  };

  const images = [
    "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&q=80",
    "https://images.unsplash.com/photo-1520975918319-6c29be9819f0?w=500&q=80",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80",
    "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=500&q=80",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const sections = [
    {
      icon: <FaTag />,
      title: "Product Details",
      content: "This is a premium quality cotton shirt. Comfortable for daily wear.",
    },
    {
      icon: <FaTruck />,
      title: "Delivery",
      content: "Delivery within 4-6 business days across India.",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Exchange",
      content: "Easy 7-day exchange policy available.",
    },
    {
      icon: <FaCreditCard />,
      title: "Payment",
      content: "We accept COD, UPI, Net Banking, and all major cards.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[550px] object-cover rounded-lg shadow-md"
          />
          <div className="grid grid-cols-5 gap-2 mt-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Product ${i + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-full h-24 object-cover rounded-md cursor-pointer hover:opacity-80 ${
                  selectedImage === img ? "ring-2 ring-black" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div>
          {/* Breadcrumb */}
          <p className="text-gray-500 text-sm mb-2">
            Home / Plain / {product.name}
          </p>

          {/* Title */}
          <h1 className="text-3xl font-light mb-4">{product.name}</h1>

          {/* Price */}
          <div className="flex items-center gap-4 mb-4">
            <span className="line-through text-gray-400">
              {product.oldPrice}
            </span>
            <span className="text-xl font-semibold">{product.price}</span>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <p className="mb-2 font-medium">Size: {selectedSize}</p>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Stock */}
          <p className="mb-4 text-gray-600">{product.stock} in stock</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <input
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 border px-2 py-1 rounded"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mb-8">
            <button className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800">
              Add to cart
            </button>
            <button className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800">
              BUY NOW
            </button>
            <button className="text-gray-600 hover:text-black flex items-center gap-2">
              ❤️ Add to Wishlist
            </button>
          </div>

          {/* Accordion Section */}
          <div className="w-full border rounded-lg shadow bg-white">
            {sections.map((item, index) => (
              <div key={index} className="border-b">
                <button
                  className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-700 hover:bg-gray-100"
                  onClick={() => toggle(index)}
                >
                  <span className="flex items-center gap-2">
                    {item.icon} {item.title}
                  </span>
                  <span>{active === index ? "−" : "+"}</span>
                </button>

                {active === index && (
                  <div className="p-4 text-gray-600 bg-gray-50">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{height:"80PX",width:"100%",fontSize:"40PX",display:"flex",justifyContent:"center"}}>YOU MAY ALSO LIKE</div>


      <Cursul/>
      </>
  );
}

export default ProductPage;
