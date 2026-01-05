import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingBag, FaHeart, FaTimes } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-5 bg-white z-50">
      {/* Left: Logo */}
      <div className="text-center">
        <h2
          className="text-2xl font-bold tracking-[0.2em]"
          style={{ fontFamily: "Times New Roman", color: "black" }}
        >
          HUSSAIN STUDIO
        </h2>
        {/* <p className="text-xs tracking-[0.5em] text-gray-600">BY FUZAIL HUSAIN</p> */}
      </div>

      {/* Center Nav (hidden on mobile) */}
      <nav className="hidden md:flex gap-8">
        <Link
          to="/"
          className="pb-1 border-b border-transparent hover:border-black transition-all duration-1000"
        >
          Home
        </Link>
        <Link
          to="/collection"
          className="pb-1 border-b border-transparent hover:border-black transition-all duration-1000"
        >
          Our Collection
        </Link>
        <Link
          to="/About"
          className="pb-1 border-b border-transparent hover:border-black transition-all duration-1000"
        >
          About Us
        </Link>
        <Link
          to="/faqs"
          className="pb-1 border-b border-transparent hover:border-black transition-all duration-500"
        >
          FAQ's
        </Link>
      </nav>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="profile">
            <FaUser className="text-xl cursor-pointer" />
          </Link>

          {/* Cart Icon */}
          <div className="relative">
            <FaShoppingBag
              className="text-xl cursor-pointer"
              onClick={() => setCartOpen(true)}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              1
            </span>
          </div>

          {/* Favorite Icon */}
          <div className="relative">
            <FaHeart
              className="text-xl cursor-pointer"
              onClick={() => setFavOpen(true)}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </div>
        </div>

        {/* Mobile: Cart + Hamburger */}
        <div className="flex md:hidden items-center gap-6">
          <div className="relative">
            <FaShoppingBag
              className="text-xl cursor-pointer"
              onClick={() => setCartOpen(true)}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              1
            </span>
          </div>
          <div className="relative">
            <FaHeart
              className="text-xl cursor-pointer"
              onClick={() => setFavOpen(true)}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </div>
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-black text-white p-8 transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FiX
          className="absolute top-6 right-6 text-2xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
        <div className="mb-10">
          <h2 className="text-2xl tracking-[0.3em] font-light">
            HUSSAIN STUDIO
          </h2>
          <p className="text-xs tracking-[0.5em]">BY FUZAIL HUSAIN</p>
        </div>
        <nav className="flex flex-col gap-6 text-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/collection" onClick={() => setMenuOpen(false)}>
            Our Collection
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/faqs" onClick={() => setMenuOpen(false)}>
            FAQ's
          </Link>
        </nav>
        <div className="mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <span className="bg-white text-black p-3 rounded-full">
              <FaInstagram size={24} />
            </span>
          </a>
        </div>
      </div>

      {/* Cart Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <FaTimes
            className="cursor-pointer text-xl"
            onClick={() => setCartOpen(false)}
          />
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Product"
              className="w-20 h-20 rounded"
            />
            <div>
              <h3 className="font-semibold">Sample Product</h3>
              <p className="text-sm text-gray-600">₹499</p>
              <button className="mt-2 px-3 py-1 bg-black text-white text-sm rounded">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Favorites Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          favOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Your Favorites</h2>
          <FaTimes
            className="cursor-pointer text-xl"
            onClick={() => setFavOpen(false)}
          />
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Favorite Product"
              className="w-20 h-20 rounded"
            />
            <div>
              <h3 className="font-semibold">Favorite Item</h3>
              <p className="text-sm text-gray-600">₹799</p>
              <button className="mt-2 px-3 py-1 bg-red-500 text-white text-sm rounded">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
