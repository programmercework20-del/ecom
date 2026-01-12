
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingBag, FaHeart, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const navigate = useNavigate();

  const Badge = ({ count }) =>
    count > 0 && (
      <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1.5 py-0.5">
        {count}
      </span>
    );

  const navLinkClass = ({ isActive }) =>
    `pb-1 text-sm tracking-widest transition-all duration-300 ${
      isActive
        ? "border-b border-black"
        : "border-b border-transparent hover:border-black"
    }`;

  return (
    <>
      {/* HEADER */}
    <header className="fixed top-0 left-0 w-full z-50 
bg-gradient-to-r from-[#C9A24D] via-[#FFD36A] to-[#B8963F] 
backdrop-blur-md shadow-md">



        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[70px] flex items-center justify-between">
          
          {/* Logo & Brand Name Container */}
<div
  onClick={() => navigate("/")}
  className="cursor-pointer flex items-center gap-3 group"
>
  {/* Logo Image */}
  <img 
    src="/images/logo-1.png" 
    alt="Hussain Studio" 
    className="h-10 sm:h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
  />

  {/* Brand Text */}
  <h2
    className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.2em] leading-none"
    style={{ fontFamily: "'Times New Roman', serif" }}
  >
    HUSSAIN <span className="font-light text-black text-xs tracking-widest">
  STUDIO
</span>

  </h2>
</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/collection" className={navLinkClass}>Collection</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <Link to="/cart" className="relative">
              <FaShoppingBag className="text-xl" />
              <Badge count={cartItems.length} />
            </Link>

            <Link to="/wishlist" className="relative">
              <FaHeart className="text-xl" />
              <Badge count={wishlistItems.length} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2"
            >
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-black text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-lg tracking-widest">HUSSAIN STUDIO</h2>
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-6 text-base tracking-widest">
            <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
            <Link onClick={() => setMenuOpen(false)} to="/collection">Collection</Link>
            <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
            <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-10 border-t border-white/20 space-y-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 tracking-widest text-sm hover:text-gray-300 transition"
            >
              <FaInstagram />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1BZd1L88bu/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 tracking-widest text-sm hover:text-gray-300 transition"
            >
              <FaFacebook />
              Facebook
            </a>
            <a
              href="mailto:hussainstudios112211@gmail.com"
              className="flex items-center gap-3 tracking-widest text-sm hover:text-gray-300 transition"
            >
              <FaEnvelope />
              Email
            </a>
          </div>
        </div>
      </aside>

      {/* Spacer for fixed navbar */}
      <div className="h-[70px]" />
    </>
  );
};

export default Navbar;
