import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import Img1 from "../assets/Crousal/img1.jpeg";
import Img2 from "../assets/Crousal/img2.webp";
import Img3 from "../assets/Crousal/img3.jpeg";

const Carousel = ({ use }) => {
  const carouselHeight = use ? "h-[500px]" : "h-[650px]";

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        className={`w-full ${carouselHeight}`}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className={`relative w-full ${carouselHeight}`}>
            <img src={Img1} alt="VM Restaurant Ambiance" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-10 text-white bg-black/40 justify-center pt-10 md:pt-20">
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                Welcome to VM Restaurant
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg max-w-2xl"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Experience fine dining with a perfect blend of taste and ambiance.
              </motion.p>
              <motion.button
                className="mt-6 px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <Link to="/menu">View Menu</Link>
              </motion.button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className={`relative w-full ${carouselHeight}`}>
            <img src={Img2} alt="Delicious Dishes at VM Restaurant" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-10 text-white bg-black/40 justify-center pt-10 md:pt-20">
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                Exquisite Cuisine
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg max-w-2xl"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Indulge in a variety of flavors, crafted by our expert chefs.
              </motion.p>
              <motion.button
                className="mt-6 px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                 <Link to="/menu">Discover Dishes</Link>
              </motion.button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className={`relative w-full ${carouselHeight}`}>
            <img src={Img3} alt="Fine Dining Experience" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-10 text-white bg-black/40 justify-center pt-10 md:pt-20">
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                Unforgettable Dining Experience
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg max-w-2xl"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Enjoy warm hospitality and an elegant atmosphere.
              </motion.p>
              <motion.button
                className="mt-6 px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
               <Link to="/reservation">Book a Table</Link>
              </motion.button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
