// src/layouts/AdminDashboardLayout.jsx
import { useState, useRef, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import Logo from "../assets/1.";

// Icons
import {
  FaBars,
  FaChevronDown,
  FaUserCircle,
  FaSignOutAlt,
  FaBell,
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaTags,
} from "react-icons/fa";
import { TbLayoutSidebar } from "react-icons/tb";
import { RiDashboardFill } from "react-icons/ri";
import { FiSidebar } from "react-icons/fi";

function DashboardLayout() {
  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleLogout = () => {
    navigate("/");
  };

  const adminLinks = [
    { path: ".", name: "Dashboard", icon: RiDashboardFill },
    { path: "admin-products", name: "Products", icon: FaBoxOpen },
    { path: "admin-categories", name: "Categories", icon: FaTags },
    { path: "admin-orders", name: "Orders", icon: FaShoppingCart },
    { path: "admin-users", name: "Users", icon: FaUsers },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <>
      <div className="flex h-screen bg-pink-50">
        {/* Sidebar */}
        <aside
          className={`sidebar fixed lg:static top-0 left-0 h-full bg-pink-600 text-white shadow-md z-50
            ${isCollapsed ? "collapsed" : ""} 
            ${isMobileOpen ? "open" : ""}`}
        >
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-pink-700">
            {!isCollapsed && (
              <a
                href="#"
                className="flex items-center gap-3 hover:opacity-80 cursor-pointer"
              >
                {/* <img
                  src={Logo}
                  alt="Arbiya Logo"
                  className="w-12 h-12 rounded-full border border-pink-400"
                /> */}
                <span className="text-2xl font-bold text-white">Arbiya</span>
              </a>
            )}
            <button
              className="lg:hidden text-pink-200"
              onClick={() => setIsMobileOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-1 p-3 h-[calc(100%-80px)]">
            {adminLinks.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "."}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition-colors
                  ${
                    isActive
                      ? "bg-pink-800 text-white shadow-md"
                      : "text-white hover:bg-pink-100 hover:text-pink-600"
                  }`
                }
              >
                <Icon size={18} />
                {!isCollapsed && <span>{name}</span>}
              </NavLink>
            ))}

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 mt-auto text-white hover:bg-red-100 hover:text-red-600 rounded-md transition-colors"
            >
              <FaSignOutAlt />
              {!isCollapsed && <span>Logout</span>}
            </button>
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {isMobileOpen && (
          <div
            className="fixed inset-0 bg-black/40 lg:hidden z-40"
            onClick={() => setIsMobileOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="sticky top-0 flex items-center justify-between bg-white shadow px-4 py-3 z-30 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              {/* Mobile Sidebar Toggle */}
              <button
                className="lg:hidden text-pink-500"
                onClick={() => setIsMobileOpen(true)}
              >
                <FaBars size={20} />
              </button>

              {/* Collapse Sidebar */}
              <button
                className="hidden lg:block text-pink-500"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <FiSidebar size={22} />
              </button>

              <h1 className="ml-2 text-xl font-semibold text-black">
                Admin Panel
              </h1>
            </div>

            <div className="flex items-center gap-4 relative">
              {/* Notifications */}
              <button className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 relative">
                <FaBell />
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  3
                </span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <FaUserCircle size={22} />
                  <span className="hidden md:inline">Admin</span>
                  <FaChevronDown size={12} />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md overflow-hidden animate-dropdown">
                    <NavLink
                      to="/dashboard/admin-profile"
                      className="block px-4 py-2 hover:bg-pink-100 text-black"
                    >
                      View Profile
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin-setting"
                      className="block px-4 py-2 hover:bg-pink-100 text-black"
                    >
                      Settings
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Main Body */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-pink-50">
            <Outlet />
          </main>
        </div>
      </div>

      {/* 🔹 Custom CSS inside <style> tag */}
      <style>{`
        .sidebar {
          width: 16rem; /* default 64 */
          transform: translateX(-100%);
          transition: all 0.3s ease-in-out;
        }
        .sidebar.open {
          transform: translateX(0);
        }
        .sidebar.collapsed {
          width: 5rem; /* collapsed = 20 */
        }
        @media (min-width: 1024px) {
          .sidebar {
            transform: translateX(0);
          }
        }

        .animate-dropdown {
          animation: dropdownFade 0.25s ease-in-out;
        }
        @keyframes dropdownFade {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

export default DashboardLayout;