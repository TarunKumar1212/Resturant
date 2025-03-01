import React, { useEffect } from 'react';
import Img4 from "../assets/Cards/img4.jpeg";
import img from "../assets/Crousal/img1.jpeg"

function About({ mt }) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='bg-gray-900 w-full min-h-screen overflow-x-hidden'>
      <div className={`w-full min-h-screen ${mt ? 'mt-[90px]' : 'pt-[90px]'} px-4 sm:px-8 md:px-12 lg:px-24`}>
        
        {/* Title Section with Background Image */}
        <div 
          className="flex flex-col items-center text-center py-16 rounded-xl"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <h2 className="text-white font-bold text-3xl sm:text-5xl md:text-6xl  bg-opacity-50 px-4 py-2 rounded-lg">
            Lemon Chilli 
          </h2>
          <p className="text-gray-200 text-lg mt-2 bg-opacity-50 px-4 py-1 rounded-lg">
            A place where flavors hug your soul
          </p>
        </div>

        {/* Content Sections */}
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-center mt-12 md:mt-16 w-full">
            
            {/* Image */}
            <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <img 
                className="w-full max-w-full mx-auto rounded-2xl hover:scale-105 transition-transform duration-300"
                src={Img4}
                alt="Food"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4 text-center md:text-left">
              <h2 className="text-white font-bold text-2xl">Bringing Comfort to Your Plate</h2>
              <p className="text-gray-300 mt-4 text-base">
                Nothing beats the warmth of a home-cooked meal. Every bite is crafted with love, blending rich flavors and nostalgia.
                Enjoy a dining experience that feels just like home, only better!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
