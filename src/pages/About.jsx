import React from 'react';
import Img4 from "../assets/Cards/img4.jpeg";

function About({ mt }) {
  return (
    <div className={`bg-gray-900 ${mt ? 'mt-[90px]' : ''} px-4 sm:px-8 md:px-16 lg:px-24`}> 
      <div className="flex flex-col items-center text-center">
        <h2 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">VS Restaurant</h2>
        <p className="text-gray-200 text-lg mt-2">A place where flavors hug your soul</p>
      </div>

      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center justify-center mt-12 md:mt-16">
          <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}> 
            <img 
              className="w-full max-w-sm mx-auto md:mx-0 rounded-2xl hover:scale-105 transition-transform duration-300"
              src={Img4}
              alt="Food"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 px-6">
            <h2 className="text-white font-bold text-2xl">Bringing Comfort to Your Plate</h2>
            <p className="text-gray-200 mt-4 text-base">
              Nothing beats the warmth of a home-cooked meal. Every bite is crafted with love, blending rich flavors and nostalgia.
              Enjoy a dining experience that feels just like home, only better!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;