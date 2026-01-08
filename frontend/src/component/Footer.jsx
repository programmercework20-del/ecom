import React from "react";
import {
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaTruck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-6 sm:px-10 md:px-20 pt-16 pb-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl tracking-widest mb-5 font-semibold">
            HUSSAIN STUDIO
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
            <strong>HUSSAIN STUDIO</strong> was born from a desire to bring back
            timeless elegance. In a world chasing trends, we focus on restraint,
            detail, and quiet confidence — clothing that lasts beyond seasons.
          </p>

          {/* Social */}
          {/* <div className="flex justify-center md:justify-start gap-5 mt-6 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-300 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:orders@hussainstudio.co.in"
              aria-label="Email"
              className="hover:text-gray-300 transition"
            >
              <FaEnvelope />
            </a>
          </div> */}
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg mb-5 font-semibold tracking-wide">
            Quick Links
          </h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/collection" className="hover:text-white">Our Collection</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-center md:text-left">
          <h2 className="text-lg mb-5 font-semibold tracking-wide">
            Support
          </h2>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex justify-center md:justify-start items-center gap-3">
              <FaPhone />
              <a href="tel:+919518795065" className="hover:text-white">
                +91 95187 95065
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-3">
              <FaEnvelope />
              <a href="mailto:orders@hussainstudio.co.in" className="hover:text-white">
                orders@hussainstudio.co.in
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-3">
              <FaInstagram />
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                hussain.studios
              </a>
            </li>

            {/* <li className="flex justify-center md:justify-start items-center gap-3">
              <FaTruck />
              <Link to="/track-order" className="hover:text-white">
                Track Order
              </Link>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-3">
              <FaHome />
              <Link to="/account" className="hover:text-white">
                My Account
              </Link>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">

        {/* Policies */}
        {/* <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          <Link to="/contact" className="hover:text-white">Contact</Link>
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/refund" className="hover:text-white">Returns & Refunds</Link>
          <Link to="/terms" className="hover:text-white">Terms</Link>
          <Link to="/shipping" className="hover:text-white">Shipping</Link>
        </div> */}

        {/* Payments */}
        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="h-8"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/496/254/original/google-pay-logo-symbol-white-design-illustration-with-black-background-free-vector.jpg"
            alt="Google Pay"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            className="h-8"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {year} HUSSAIN STUDIO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
