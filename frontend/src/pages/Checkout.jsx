import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/features/cartSlice';

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePayment = () => {
    // TODO: Add actual payment processing logic here
    dispatch(clearCart());
    navigate('/order-success');
  };

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 mt-20">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-10 text-center">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* SHIPPING FORM */}
        <div className="border rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black" />
            <input type="text" placeholder="Street Address" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="City" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black" />
              <input type="text" placeholder="State / Province" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="ZIP / Postal Code" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black" />
              <input type="text" placeholder="Country" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black" />
            </div>
          </form>
        </div>

        {/* ORDER SUMMARY */}
        <div className="border rounded-xl p-6 h-fit shadow-md">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>
          </div>

          {/* PAYMENT GATEWAY INTEGRATION BUTTON */}
          {/* TODO: Replace this button with your chosen payment gateway component (e.g., Stripe, Razorpay) */}
          <button 
            onClick={handlePayment}
            className="w-full mt-6 py-3 rounded-full bg-black text-white tracking-widest hover:bg-gray-900 transition"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
