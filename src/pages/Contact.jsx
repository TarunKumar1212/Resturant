import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Contact({ mt }) {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted:", formData); // Print data in console
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (


    <div className={`bg-gray-900 text-white py-16 px-6 lg:px-20 ${mt ? "sm:mt-22" : ""}`}>
      {/* Two Column Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Section - Logo & Content */}
        <div className="space-y-6">
          <Link to="/" className="text-4xl font-extrabold text-yellow-400 tracking-wide">
            Lemon Chilli
          </Link>
          <p className="text-gray-400 italic text-lg">Savor Every Bite</p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Have questions or want to book a reservation? Fill out the form below, and we’ll get back to you as soon as possible.
          </p>

          <div className="mt-6 space-y-3">
            <p className="flex items-center space-x-3">
              <span className="text-yellow-400 font-semibold">📍 Address:</span>
              <span>123 Food Street, Cityname</span>
            </p>
            <p className="flex items-center space-x-3">
              <span className="text-yellow-400 font-semibold">📞 Phone:</span>
              <span>(123) 456-7890</span>
            </p>
            <p className="flex items-center space-x-3">
              <span className="text-yellow-400 font-semibold">📧 Email:</span>
              <span>contact@lemonchilli.com</span>
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-gray-300 block font-medium">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                placeholder="Your Name" 
              />
            </div>

            <div>
              <label className="text-gray-300 block font-medium">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                placeholder="Your Email" 
              />
            </div>

            <div>
              <label className="text-gray-300 block font-medium">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                placeholder="Your Message" 
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition duration-300">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
