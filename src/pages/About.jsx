import React, { useEffect } from 'react';
import img1 from "../assets/Crousal/img1.jpeg";
import img2 from "../assets/Cards/img4.jpeg";
import img3 from "../assets/AboutImgaes/img1.jpeg"
import img4 from "../assets/AboutImgaes/img2.jpg"
import img5 from "../assets/AboutImgaes/img3.webp"
import img6 from "../assets/AboutImgaes/img4.webp"



const sections = [
  {
    imgSrc: img1,
    title: "Bringing Comfort to Your Plate",
    description: "Nothing beats the warmth of a home-cooked meal. Every bite is crafted with love, blending rich flavors and nostalgia. Enjoy a dining experience that feels just like home, only better!"
  },
  {
    imgSrc: img2,
    title: "A Culinary Journey Around the World",
    description: "Indulge in flavors from different corners of the world. Our carefully curated menu takes you on a delicious adventure, from classic comfort food to bold, new flavors."
  },
  {
    imgSrc: img3,
    title: "Fresh Ingredients, Authentic Taste",
    description: "We believe in using the freshest ingredients to bring out the authentic taste of every dish. Every meal is prepared with care, ensuring a burst of flavor in every bite."
  },
  {
    imgSrc: img4,
    title: "Crafted with Passion & Precision",
    description: "Our chefs pour their heart and soul into every dish, blending time-honored recipes with a modern twist. Every plate tells a story of passion and precision."
  },
  {
    imgSrc: img5,
    title: "A Feast for the Senses",
    description: "Great food isn’t just about taste—it’s about the aroma, the colors, and the textures. We create visually stunning dishes that are just as delightful to eat."
  },
  {
    imgSrc: img6,
    title: "Experience Hospitality Like Never Before",
    description: "Beyond great food, we focus on creating unforgettable dining experiences. From warm service to a cozy ambiance, every visit feels like a special occasion."
  }
];


function About({ mt }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='pb-8 bg-gray-900 w-full min-h-screen overflow-x-hidden'>
      <div className={`w-full min-h-screen ${mt ? 'mt-[90px]' : 'pt-[90px]'} px-4 sm:px-8 md:px-12 lg:px-24`}>
        
        {/* Title Section with Background Image */}
        <div 
          className="flex flex-col items-center text-center py-16 rounded-xl"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <h2 className="text-white font-bold text-3xl sm:text-5xl md:text-6xl bg-opacity-50 px-4 py-2 rounded-lg">
            Lemon Chilli 
          </h2>
          <p className="text-gray-200 text-lg mt-2 bg-opacity-50 px-4 py-1 rounded-lg">
            A place where flavors hug your soul
          </p>
        </div>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-center mt-12 md:mt-16 w-full">
            
            {/* Image */}
            <div className={`w-full md:w-1/2 flex justify-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <img 
                className="w-80 h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                src={section.imgSrc} 
                alt="Food"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4 text-center md:text-left">
              <h2 className="text-white font-bold text-2xl">{section.title}</h2>
              <p className="text-gray-300 mt-4 text-base">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;