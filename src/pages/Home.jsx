/* eslint-disable react/no-unescaped-entities */
import CardCamponent from "../Components/CardCamponent";
import Carousel from "../Components/Carousel";
import { Link } from "react-router-dom";
import { useState } from "react";
import Img1 from "../assets/Cards/img1.jpeg";
import Img2 from "../assets/Cards/img2.jpeg";
import Img3 from "../assets/Cards/img3.webp";
import Img4 from "../assets/Cards/img4.jpeg";
import About from "./About";
import Menu from "./Menu";

const initialCardsData = [
  {
    id: 1,
    imgSrc: Img1,
    title: "Cheeseburger",
    description:
      "Juicy beef patty with cheddar, fresh veggies, and house sauce in a toasted brioche bun.",
    button: "Look Here",
  },
  {
    id: 2,
    imgSrc: Img2,
    title: "Samosa",
    description:
      "Crispy golden pastry filled with spiced potatoes and peas, served with tangy chutney.",
    button: "Look Here",
  },
  {
    id: 3,
    imgSrc: Img3,
    title: "Momo",
    description:
      "Soft dumplings stuffed with flavorful chicken or veggies, steamed to perfection and served with spicy dip.",
    button: "Look Here",
  },
  {
    id: 4,
    imgSrc: Img4,
    title: "Chicken",
    description:
      "Tender, juicy chicken marinated in rich spices, grilled or fried to a crispy golden finish.",
    button: "Look Here",
  },
];

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCards] = useState(initialCardsData);

  return (
    <div className="bg-gray-900">
      <Carousel />
      <div className="bg-gray-900 w-full h-auto  text-2xl font-bold text-white mx-auto flex flex-col items-center justify-center text-center py-10">
        <h2 className="text-4xl">Try Our Most </h2>
        <h3 className="text-3xl mt-1">Popular Items</h3>
        <h6 className="text-[12px] mt-3 text-gray-600">
          Treat Yourself to our must-try list that has everyone talking
        </h6>

        <Link
          className="mt-4 text-[18px] bg-amber-400 rounded-full py-2 px-4  shadow-lg hover:scale-105 transition-transform  "
          to="/menu"
        >
          View Full Menu
        </Link>

        <div className="flex justify-evenly w-full flex-wrap">
          {cards.map((card) => (
            <CardCamponent key={card.id} {...card} />
          ))}
        </div>
      </div>

     <About />
     <Menu/>
    </div>
  );
}

export default Home;
