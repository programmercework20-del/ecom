import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const [orderId] = useState(
    "HS" + Math.floor(100000 + Math.random() * 900000)
  );

  // Optional auto redirect after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/collection");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      {/* INLINE CSS + ANIMATION */}
      <style>
        {`
          .success-circle {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: #22c55e;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 24px;
            animation: popIn 0.6s ease-out;
          }

          .checkmark {
            width: 28px;
            height: 50px;
            border: solid white;
            border-width: 0 6px 6px 0;
            transform: rotate(45deg);
          }

          @keyframes popIn {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 mt-20 text-center">
        <div className="border rounded-2xl p-8 sm:p-12 shadow-xl bg-white">
          
          {/* Success Icon */}
          <div className="success-circle">
            <div className="checkmark"></div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-green-600">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-4">
            Thank you for shopping with <strong>HUSSAIN STUDIO</strong>.
            Your order has been confirmed.
          </p>

          {/* Order ID */}
          <p className="text-sm sm:text-base text-gray-500 mb-8">
            Order ID: <span className="font-semibold">{orderId}</span>
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/collection"
              className="px-8 py-3 rounded-full bg-black text-white tracking-widest hover:bg-gray-900 transition"
            >
              CONTINUE SHOPPING
            </Link>

            {/* <Link
              to="/track-order"
              className="px-8 py-3 rounded-full border border-black text-black tracking-widest hover:bg-black hover:text-white transition"
            >
              TRACK ORDER
            </Link> */}
          </div>

          {/* Helper Text */}
          <p className="text-xs text-gray-400 mt-8">
            You’ll be redirected automatically in a few seconds…
          </p>
        </div>
      </section>
    </>
  );
};

export default OrderSuccess;
