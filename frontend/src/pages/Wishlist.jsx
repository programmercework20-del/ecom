import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/features/wishlistSlice";
import { addToCart } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { items } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-10">
        Your Wishlist
      </h1>

      {/* EMPTY STATE */}
      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg mb-6">
            Your wishlist is empty.
          </p>
          <Link
            to="/collection"
            className="inline-block px-8 py-3 rounded-full bg-black text-white tracking-widest hover:bg-gray-900 transition"
          >
            EXPLORE COLLECTION
          </Link>
        </div>
      ) : (
        <>
          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-[220px] sm:h-[260px] object-cover"
                  />

                  {/* Remove */}
                  <button
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    className="absolute top-3 right-3 text-xs bg-black/70 text-white px-3 py-1 rounded-full hover:bg-black transition"
                  >
                    Remove
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="font-medium text-sm sm:text-base text-gray-800 line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-lg font-semibold text-black">
                    ₹{item.price}
                  </p>

                  {/* Actions */}
                  <button
                    onClick={() => {
                      dispatch(addToCart({ ...item, quantity: 1 }));
                      dispatch(removeFromWishlist(item.id));
                    }}
                    className="mt-4 w-full py-2 rounded-full bg-black text-white text-sm tracking-widest hover:bg-gray-900 transition"
                  >
                    MOVE TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FOOT ACTION */}
          <div className="flex justify-center mt-12">
            <Link
              to="/cart"
              className="px-10 py-3 rounded-full border border-black text-black tracking-widest hover:bg-black hover:text-white transition"
            >
              VIEW CART
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Wishlist;
