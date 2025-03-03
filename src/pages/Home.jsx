/* eslint-disable react/no-unescaped-entities */
import CardCamponent from "../Components/CardCamponent";
import Carousel from "../Components/Carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Img1 from "../assets/Cards/img1.jpeg";
import Img2 from "../assets/Cards/img2.jpeg";
import Img3 from "../assets/Cards/img3.webp";
import Img4 from "../assets/Cards/img4.jpeg";
import About from "./About";
import Menu from "./Menu";
import Footer from "../Components/Footer";
import Contact from "./Contact";
import ForHomeCard from "../Components/ForHomeCard";

const initialCardsData = [
  {
    id: 1,
    imgSrc: Img1,
    title: "Cheeseburger",
    description:
      "Juicy beef patty with cheddar, fresh veggies, and house sauce in a toasted brioche bun.",
    button: "Look Here",
     price: "₹199"
  },
  {
    id: 2,
    imgSrc: Img2,
    title: "Samosa",
    description:
      "Crispy golden pastry filled with spiced potatoes and peas, served with tangy chutney.",
    button: "Look Here",
     price: "₹199"
  },
  {
    id: 3,
    imgSrc: Img3,
    title: "Momo",
    description:
      "Soft dumplings stuffed with flavorful chicken or veggies, steamed to perfection and served with spicy dip.",
    button: "Look Here",
     price: "₹199"
  },
  {
    id: 4,
    imgSrc: Img4,
    title: "Chicken",
    description:
      "Tender, juicy chicken marinated in rich spices, grilled or fried to a crispy golden finish.",
    button: "Look Here",
     price: "₹199"
  },
];

function Home() {
  const [cards, setCards] = useState(initialCardsData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen overflow-hidden w-full">
      {/* Carousel */}
      <Carousel />

      {/* Popular Items Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Try Our Most
          </h2>
          <h3 className="text-2xl md:text-3xl mt-1 text-white">Popular Items</h3>
          <h6 className="text-sm mt-3 text-gray-400">
            Treat yourself to our must-try list that has everyone talking
          </h6>

          <Link
            className="mt-4 inline-block text-lg bg-amber-400 rounded-full py-2 px-4 shadow-lg hover:scale-105 transition-transform"
            to="/menu"
          >
            View Full Menu
          </Link>
        </div>

        {/* Card Components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {cards.map((card) => (
            <ForHomeCard key={card.id} {...card} />
          ))}
        </div>
      </div>

      {/* Wrapped Sections */}
      <div className="container mx-auto px-4">
        <About />
        <Menu />
        <Contact />
      </div>

      
      
    </div>
  );
}

export default Home;
