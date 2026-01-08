import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { addToWishlist } from "../redux/features/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";

const SIZES = ["S", "M", "L", "XL", "XXL"];

const CollectionDetail = () => {
  const { selectedProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState("");
  const [activeImage, setActiveImage] = useState(
    selectedProduct?.image?.replace('http://127.0.0.1:8000', 'http://192.168.1.7/ecom/public') || 
    selectedProduct?.images?.[0]?.replace('http://127.0.0.1:8000', 'http://192.168.1.7/ecom/public')
  );

  if (!selectedProduct) {
    return (
      <div className="text-center py-20 mt-20">
        Product not found.
      </div>
    );
  }

  const {
    name,
    price,
    oldPrice,
    category,
    description,
    image,
  } = selectedProduct;

  // Handle images array with IP replacement
  const images = image ? [image.replace('http://127.0.0.1:8000', 'http://192.168.1.7/ecom/public')] : [];

  /* WhatsApp Message */
  const whatsappMessage = encodeURIComponent(`
Hello, I’m interested in this product:

Product: ${name}
Price: ₹${price}
Size: ${selectedSize || "Not selected"}
Category: ${category}
Description: ${description}

Please share more details.
`);

  const whatsappNumber = "919518795065"; // 🔴 YOUR NUMBER

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    dispatch(addToCart({ ...selectedProduct, size: selectedSize, quantity: 1 }));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 text-gray-600 hover:text-black transition"
      >
        <FaArrowLeft /> Back to Collection
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* IMAGE GALLERY */}
        <div>
          {/* Main Image */}
          <div className="border rounded-xl overflow-hidden shadow-lg">
            <img
              src={activeImage?.replace('http://127.0.0.1:8000', 'http://192.168.1.7/ecom/public') || activeImage}
              alt={name}
              className="w-full h-[350px] sm:h-[450px] object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x450?text=Product+Image';
              }}
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {images.map((img, index) => (
              <img
                key={index}
                src={img?.replace('http://127.0.0.1:8000', 'http://192.168.1.7/ecom/public') || img}
                alt="thumbnail"
                onClick={() => setActiveImage(img?.replace('http://127.0.0.1:8000', 'http://192.168.1.7/ecom/public') || img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition
                  ${
                    activeImage === (img?.replace('http://127.0.0.1:8000', 'http://192.168.1.7/ecom/public') || img)
                      ? "border-black"
                      : "border-transparent"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
            {name}
          </h1>

          {/* Price */}
          <div className="text-xl mb-4">
            {oldPrice && (
              <span className="line-through text-gray-400 mr-3">
                ₹{oldPrice}
              </span>
            )}
            <span className="font-bold text-black">₹{price}</span>
          </div>

          <p className="text-gray-500 mb-4">
            Category: {category}
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {description ||
              "Premium quality fabric with timeless design. Comfortable, breathable, and perfect for everyday wear."}
          </p>

          {/* Size Selector */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 border rounded-full transition
                    ${
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

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-900 transition"
            >
              ADD TO CART
            </button>

            <button
              onClick={() => dispatch(addToWishlist({ ...selectedProduct, size: selectedSize }))}
              className="flex-1 bg-gray-200 py-3 rounded-full hover:bg-gray-300 transition"
            >
              ADD TO WISHLIST
            </button>
          </div>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-3 w-full py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
          >
            <FaWhatsapp size={22} />
            ORDER ON WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionDetail;
