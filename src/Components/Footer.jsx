import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-gray-600 text-white py-6 w-full">
      {/* Main Footer Content */}
      <div className="flex flex-wrap justify-between items-center px-6 md:px-12 lg:px-20 text-center sm:text-left">
        
        {/* Logo and tagline */}
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <Link to="/" className="text-3xl font-bold text-yellow-400 tracking-wider">
            Lemon Chilli
          </Link>
          <p className="hidden md:block text-gray-400 text-sm italic">Savor Every Bite</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-between gap-6 sm:gap-16 text-lg font-bold">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-yellow-300 transition duration-200">Home</Link>
            <Link to="/menu" className="hover:text-yellow-300 transition duration-200">Menu</Link>
          </div>

          <div className="flex flex-col space-y-2">
            <Link to="/about" className="hover:text-yellow-300 transition duration-200">About</Link>
            <Link to="/contact" className="hover:text-yellow-300 transition duration-200">Contact</Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 sm:space-x-6 text-2xl justify-center sm:justify-end mt-4 sm:mt-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaFacebookSquare />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaXTwitter />
          </a>
        </div>

        {/* Order Now Button */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-4 sm:mt-0">
          <Link to="/" className="bg-amber-500 px-4 py-2 text-black font-bold rounded-lg hover:scale-110 duration-300">
            Order Now
          </Link>
        </div>
      </div>

      {/* Border Divider */}
      <div className="border-b-4 border-amber-300 w-3/4 mx-auto my-4"></div>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 font-bold text-sm">
        <Link to="#" className="hover:text-yellow-300">Order Terms</Link>
        <Link to="#" className="hover:text-yellow-300">Terms of Use</Link>
        <Link to="#" className="hover:text-yellow-300">Privacy Policy</Link>
        <Link to="#" className="hover:text-yellow-300">Accessibility Statement</Link>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 text-sm">
        <p>© 2025 Restaurant. Designed and powered by <br />
          <Link to="https://vasumathasoftech.com/" target="_blank" className="text-yellow-400 font-bold hover:underline">
            VM Softech
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
