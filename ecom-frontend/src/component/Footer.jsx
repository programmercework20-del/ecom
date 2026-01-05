import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone, FaHome, FaTruck } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-30 px-6 md:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h1 className="text-[40px] font-light tracking-widest mb-4 font-bold">HUSSAIN STUDIO</h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            <span className="font-bold">HUSSAIN STUDIO</span> was born out of a simple desire to bring back
            the timeless elegance that modern fashion left behind. In a world
            chasing trends, we chose to slow down — to craft clothing that
            speaks through detail, restraint, and quiet confidence.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 font-bold">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white font-bold">Home</a></li>
            <li><a href="/collection" className="hover:text-white font-bold">Our Collection</a></li>
            <li><a href="/about" className="hover:text-white font-bold">About Us</a></li>
            <li><a href="/faq"  className="hover:text-white font-bold " >FAQ's</a></li>
            <li><a href="/contact" className="hover:text-white font-bold">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4 font-bold">Support</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2 font-bold">
              <FaPhone /> <span>+91 9518795065</span>
            </li>
            <li className="flex items-center gap-2 font-bold">
              <FaEnvelope /> <span>orders@HUSSAIN.co.in</span>
            </li>
            <li className="flex items-center gap-2 font-bold">
              <FaTruck /> <span>Track Order</span>
            </li>
            <li className="flex items-center gap-2 font-bold">
              <FaHome /> <span>My Account</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-15 text-sm text-gray-400 ">
          <a href="#" className="hover:text-white font-bold">Contact Us</a>
          <a href="#" className="hover:text-white font-bold">Privacy Policy</a>
          <a href="#" className="hover:text-white font-bold">Return and Refund Policy</a>
          <a href="#" className="hover:text-white font-bold">Terms and Conditions</a>
          <a href="#" className="hover:text-white font-bold">Shipping Policy</a>
        </div>

        {/* Payment Icons */}
        <div className="flex gap-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-10" />
          <img src="https://tse3.mm.bing.net/th/id/OIP.Nt3_LOvj7jGCnbyNwCIubwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="GPay" className="h-10" />
          <img src="https://static.vecteezy.com/system/resources/previews/021/496/254/original/google-pay-logo-symbol-white-design-illustration-with-black-background-free-vector.jpg" alt="MasterCard" className="h-10" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;