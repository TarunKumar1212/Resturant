import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Importing icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-8 lg:px-12">
        
        {/* Left Section - Company Name */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-3xl sm:text-4xl lg:text-4xl font-bold text-yellow-400 tracking-wider">
            VS Resturant  
            <p className="hidden md:block text-gray-400 text-sm lg:text-base italic">Savor Every Bite</p>
          </Link>
        </div>

        {/* Middle Section - Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-white text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition-all duration-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition-all duration-200">About</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-yellow-400 transition-all duration-200">Menu</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-yellow-400 transition-all duration-200">Events</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition-all duration-200">Contact</Link>
          </li>
        </ul>

        {/* Right Section - Buttons */}
        <div className="hidden md:flex items-center gap-x-4">
          <Link to="/signup" className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full transition-all duration-200 text-sm md:text-base lg:text-lg w-auto">
            Join Us
          </Link>
          <Link to="/order" className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200 text-sm md:text-base lg:text-lg w-auto">
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
          <motion.li initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.15, delay: 0.05 }}>
            <Link to="/" className="block hover:text-yellow-400 transition-all duration-200" onClick={() => setMenuOpen(false)}>Home</Link>
          </motion.li>
          <motion.li initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.15, delay: 0.1 }}>
            <Link to="/about" className="block hover:text-yellow-400 transition-all duration-200" onClick={() => setMenuOpen(false)}>About</Link>
          </motion.li>
          <motion.li initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.15, delay: 0.15 }}>
            <Link to="/menu" className="block hover:text-yellow-400 transition-all duration-200" onClick={() => setMenuOpen(false)}>Menu</Link>
          </motion.li>
          <motion.li initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.15, delay: 0.2 }}>
            <Link to="/events" className="block hover:text-yellow-400 transition-all duration-200" onClick={() => setMenuOpen(false)}>Events</Link>
          </motion.li>
          <motion.li initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.15, delay: 0.25 }}>
            <Link to="/contact" className="block hover:text-yellow-400 transition-all duration-200" onClick={() => setMenuOpen(false)}>Contact</Link>
          </motion.li>

          {/* Buttons inside Mobile Menu */}
          <motion.li initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15, delay: 0.3 }}>
            <Link to="/signup" className="block bg-yellow-400 text-gray-900 text-center px-4 py-2 rounded-full mt-4 hover:bg-yellow-500 transition-all duration-200 text-lg" onClick={() => setMenuOpen(false)}>
              Join Us
            </Link>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15, delay: 0.35 }}>
            <Link to="/order" className="block border border-yellow-400 text-yellow-400 text-center px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200 text-lg" onClick={() => setMenuOpen(false)}>
              Order Now
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
