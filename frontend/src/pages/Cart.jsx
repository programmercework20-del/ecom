import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-10">
        Your Cart
      </h1>

      {/* EMPTY CART */}
      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg mb-6">
            Your cart is currently empty.
          </p>
          <Link
            to="/collection"
            className="inline-block px-8 py-3 rounded-full bg-black text-white tracking-widest hover:bg-gray-900 transition"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 p-5 border rounded-xl shadow-sm"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-28 h-48 sm:h-28 object-cover rounded-lg"
                />

                {/* Info */}
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    ₹{item.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                      disabled={item.quantity <= 1}
                      className="w-8 h-8 border rounded hover:bg-gray-100 disabled:opacity-50"
                    >
                      −
                    </button>

                    <span className="font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="w-8 h-8 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col justify-between items-end">
                  <p className="font-semibold">
                    ₹{item.price * item.quantity}
                  </p>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="border rounded-xl p-6 h-fit shadow-md">
            <h2 className="text-xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3 text-gray-600">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-3 text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>

            <Link to="/checkout" className="block text-center w-full mt-6 py-3 rounded-full bg-black text-white tracking-widest hover:bg-gray-900 transition">
              PROCEED TO CHECKOUT
            </Link>

            <Link
              to="/collection"
              className="block text-center mt-4 text-sm text-gray-500 hover:text-black"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
