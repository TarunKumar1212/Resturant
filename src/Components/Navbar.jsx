import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Importing icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  // Close the menu when resizing window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    

    <nav className=" left-0 bg-gray-800 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5 sm:px-6 md:px-8 lg:px-12">
        
        {/* Left Section - Logo & Tagline */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 tracking-wider">
            Lemon Chilli
            <p className="hidden sm:block text-gray-400 text-sm lg:text-base italic">Savor Every Bite</p>
          </Link>
        </div>

        {/* Middle Section - Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-white text-base md:text-lg">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Menu", path: "/menu" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`transition-all duration-200 ${
                  isActive(item.path) ? "text-yellow-400 font-bold" : "hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section - Order Button (Visible on Larger Screens) */}
        <div className="hidden md:flex items-center gap-x-4">
          <Link
            to="/menu"
            className={`px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 border border-yellow-400 font-semibold rounded-full transition-all duration-200 text-sm md:text-base lg:text-lg ${
              isActive("/order") ? "bg-yellow-500 text-gray-900" : "text-yellow-400 hover:bg-yellow-500 hover:text-gray-900"
            }`}
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-yellow-400 text-3xl focus:outline-none transition-all duration-150 transform hover:scale-105"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg p-6 transition-all`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            className="text-yellow-400 hover:text-yellow-300 transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            <X size={32} />
          </button>
        </div>

        <ul className="mt-4 space-y-4 text-center text-white text-lg">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Menu", path: "/menu" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15, delay: 0.05 }}
            >
              <Link
                to={item.path}
                className={`block transition-all duration-200 ${
                  isActive(item.path) ? "text-yellow-400 font-bold" : "hover:text-yellow-400"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}

          {/* Buttons inside Mobile Menu */}
          <motion.li initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15, delay: 0.3 }}>
            <Link
              to="/menu"
              className={`block border text-center px-4 py-2 rounded-full transition-all duration-200 text-lg ${
                isActive("/order") ? "bg-yellow-500 text-gray-900" : "border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Order Now
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
