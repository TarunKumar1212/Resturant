/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CardCamponent({ imgSrc, title, description, button }) {
  return (
    

    
    <div className="  mt-4 w-64 bg-gray-900 shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
      {/* Image Section */}
      <div className="w-full h-40 sm:h-44 md:h-48">
        <img
          className="w-full h-full object-cover object-center"
          src={imgSrc}
          alt={title}
        />
      </div>

      {/* Card Content */}
      <div className="p-4 text-center">
        <h3 className="text-lg md:text-xl font-bold text-orange-400">{title}</h3>
        <p className="text-sm md:text-base text-gray-100 mt-2">{description}</p>

        {/* Button */}
        <Link
          to=""
          className="mt-4 inline-block bg-amber-500 text-white text-sm md:text-base font-semibold py-2 px-4 rounded-full shadow-md hover:bg-amber-600 transition duration-300"
        >
          {button}
        </Link>
      </div>
    </div>

    
  );
}

export default CardCamponent;
