import React, { useState } from "react";
import image from'../../src/assets/IMG_9274.PNG'
import image2 from'../../src/assets/IMG_9281.PNG'
import image3 from'../../src/assets/IMG_9283.PNG'
function Collection() {
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
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center text-3xl font-bold mb-10">
        ---------------- Our Collection ----------------
      </div>

      {/* Category Filter */}
      <div className="flex gap-3 flex-wrap justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 border rounded ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="text-center  p-4 shadow-sm hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded"
            />
            <h3 className="mt-4 font-medium">{product.name}</h3>
            <div className="mt-2">
              <span className="line-through text-gray-500 mr-2">
                {product.oldPrice}
              </span>
              <span className="font-bold text-lg">{product.price}</span>



              
            </div>
          </div>
        ))}
      </div>
    </div>













  );
}

export default Collection;
