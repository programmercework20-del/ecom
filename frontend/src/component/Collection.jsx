import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../redux/features/productSlice";
import { addToCart } from "../redux/features/cartSlice";
import { addToWishlist } from "../redux/features/wishlistSlice";
import { fetchProducts } from "../redux/features/apiSlice";
import { FaShoppingBag, FaHeart } from "react-icons/fa";

// Images
import img1 from "../../src/assets/IMG_9274.PNG";
import img2 from "../../src/assets/IMG_9281.PNG";
import img3 from "../../src/assets/IMG_9283.PNG";

// const PRODUCTS = [
//   { id: 1, name: "Blush Pink Linen Shirt", category: "Linen Blend", image: img1, oldPrice: 2099, price: 1699 },
//   { id: 2, name: "Ocean Blue Linen Shirt", category: "Linen Blend", image: img2, oldPrice: 2099, price: 1699 },
//   { id: 3, name: "Vintage Wine Linen Shirt", category: "Linen Blend", image: img3, oldPrice: 2099, price: 1699 },
//   { id: 4, name: "Soft Sand Linen Shirt", category: "Plain", image: img1, oldPrice: 2099, price: 1699 },
//   { id: 5, name: "Ash Grey Linen Shirt", category: "Regular", image: img2, oldPrice: 2099, price: 1699 },
//   { id: 6, name: "Classic White Linen Shirt", category: "Relaxed", image: img3, oldPrice: 2099, price: 1699 },
//   { id: 7, name: "Sky Blue Linen Shirt", category: "Striped", image: img1, oldPrice: 2099, price: 1699 },
//   { id: 8, name: "Olive Green Linen Shirt", category: "BestSeller", image: img2, oldPrice: 2099, price: 1699 },
// ];

const PRODUCTS = [
  {
    id: 1,
    name: "Blush Pink Linen Shirt",
    category: "Linen Blend",
    price: 1699,
    oldPrice: 2099,
    description:
      "Premium blush pink linen blend shirt crafted for everyday comfort and timeless elegance. Breathable fabric with a relaxed yet refined fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img1, img2, img3], // ✅ first image = prime image
    isBestSeller: false,
  },
  {
    id: 2,
    name: "Ocean Blue Linen Shirt",
    category: "Linen Blend",
    price: 1699,
    oldPrice: 2099,
    description:
      "Ocean blue linen blend shirt featuring a clean silhouette and soft texture. Designed for effortless daily wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img2, img1, img3],
    isBestSeller: false,
  },
  {
    id: 3,
    name: "Vintage Wine Linen Shirt",
    category: "Linen Blend",
    price: 1699,
    oldPrice: 2099,
    description:
      "Vintage wine shade linen shirt with classic tailoring and breathable fabric. A perfect blend of elegance and comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img3, img1, img2],
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Soft Sand Linen Shirt",
    category: "Plain",
    price: 1699,
    oldPrice: 2099,
    description:
      "Soft sand colored linen shirt with minimal design and versatile styling. Ideal for casual and semi-formal looks.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img1, img2],
    isBestSeller: false,
  },
  {
    id: 5,
    name: "Ash Grey Linen Shirt",
    category: "Regular",
    price: 1699,
    oldPrice: 2099,
    description:
      "Ash grey linen shirt designed with a regular fit and lightweight fabric for all-day comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img2, img3],
    isBestSeller: false,
  },
  {
    id: 6,
    name: "Classic White Linen Shirt",
    category: "Relaxed",
    price: 1699,
    oldPrice: 2099,
    description:
      "Classic white linen shirt with a relaxed fit and timeless appeal. A wardrobe essential for every season.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img3, img1],
    isBestSeller: true,
  },
  {
    id: 7,
    name: "Sky Blue Linen Shirt",
    category: "Striped",
    price: 1699,
    oldPrice: 2099,
    description:
      "Sky blue striped linen shirt with subtle detailing and breathable fabric for a refined everyday look.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img1, img3],
    isBestSeller: false,
  },
  {
    id: 8,
    name: "Olive Green Linen Shirt",
    category: "BestSeller",
    price: 1699,
    oldPrice: 2099,
    description:
      "Olive green linen shirt crafted for versatility and comfort. A bestselling piece loved for its effortless style.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img2, img1, img3],
    isBestSeller: true,
  },
];


const CATEGORIES = [
  "All",
  "BestSeller",
  "Linen Blend",
  "Plain",
  "Regular",
  "Relaxed",
  "Striped",
];

const Collection = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.api);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  // Fetch products on component mount
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);


  // Get unique categories from API products
  const categories = products.length > 0 
    ? ['All', ...new Set(products.map(p => p.category).filter(Boolean))]
    : ["All"];

  const filteredProducts = Array.isArray(products)
    ? selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory)
    : [];

  if (status === 'loading') {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </section>
    );
  }

  if (status === 'failed') {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
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
  

  console.log("Products data:", products)
  console.log("First product image:", products[0]?.image)


  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 ">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800">
          Our Collection
        </h1>
        <div className="w-20 h-1 bg-black mx-auto mt-4"></div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(8);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <div key={product.id} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            <div className="relative">
              <Link
                to={`/collection/${product.id}`}
                onClick={() => dispatch(setSelectedProduct(product))}
              >
                <img
                  src={product.image ? product.image.replace('http://127.0.0.1:8000', 'http://192.168.1.7/ecom/public') : img1}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = img1;
                  }}
                />
              </Link>

              {/* DESKTOP ACTIONS (hover only) */}
              <div className="hidden md:flex absolute top-3 right-3 flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToWishlist(product));
                  }}
                  className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                  aria-label="Add to Wishlist"
                >
                  <FaHeart className="text-gray-700" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToCart(product));
                  }}
                  className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                  aria-label="Add to Cart"
                >
                  <FaShoppingBag className="text-gray-700" />
                </button>
              </div>

                          </div>

            <div className="p-4 text-center">
              <Link to={`/collection/${product.id}`} onClick={() => dispatch(setSelectedProduct(product))}>
                <h3 className="font-medium text-sm sm:text-base text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
              </Link>
              <div className="mt-2 flex justify-center gap-2 items-center">
                <span className="text-xs text-gray-400 line-through">
                  ₹{product.oldPrice}
                </span>
                <span className="text-base font-bold text-black">
                  ₹{product.price}
                </span>
              </div>
              {/* MOBILE ACTIONS (only mobile, above View Details) */}
              <div className="flex md:hidden gap-3 mt-4">
                <button
                  onClick={() => dispatch(addToWishlist(product))}
                  className="flex-1 py-2 rounded-full border text-xs font-medium flex items-center justify-center gap-1 max-[450px]:gap-0"
                >
                  <FaHeart className="max-[450px]:text-xs" />
                  <span className="max-[450px]:hidden">Wishlist</span>
                </button>

                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="flex-1 py-2 rounded-full bg-black text-white text-xs font-medium flex items-center justify-center gap-1 max-[450px]:gap-0"
                >
                  <FaShoppingBag className="max-[450px]:text-xs" />
                  <span className="max-[450px]:hidden">Add</span>
                </button>
              </div>

              {/* View Details */}
              <Link to={`/collection/${product.id}`} onClick={() => dispatch(setSelectedProduct(product))} className="block mt-3 w-full py-2 rounded-full bg-black text-white text-sm hover:bg-gray-900 transition">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="px-8 py-3 rounded-full bg-gray-900 text-white tracking-widest text-sm hover:bg-black transition"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </section>
  );
};

export default Collection;
