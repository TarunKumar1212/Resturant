import { useEffect, useState } from "react";
import CardCamponent from "../Components/CardCamponent";
import Img1 from "../assets/Cards/img1.jpeg";
import Img2 from "../assets/Cards/img2.jpeg";
import Img3 from "../assets/Cards/img3.webp";
import Img4 from "../assets/Cards/img4.jpeg";

const initialCardsData = [
  { id: 1, imgSrc: Img1, title: "Cheeseburger", description: "Juicy beef patty with cheddar, fresh veggies, and house sauce in a toasted brioche bun.", button: "Look Here", price: "₹199" },
  { id: 2, imgSrc: Img2, title: "Samosa", description: "Crispy golden pastry filled with spiced potatoes and peas, served with tangy chutney.", button: "Look Here", price: "₹49" },
  { id: 3, imgSrc: Img3, title: "Momo", description: "Soft dumplings stuffed with flavorful chicken or veggies, steamed to perfection and served with spicy dip.", button: "Look Here", price: "₹129" },
  { id: 4, imgSrc: Img4, title: "Chicken", description: "Tender, juicy chicken marinated in rich spices, grilled or fried to a crispy golden finish.", button: "Look Here", price: "₹249" },
  { id: 5, imgSrc: Img4, title: "Chicken", description: "Tender, juicy chicken marinated in rich spices, grilled or fried to a crispy golden finish.", button: "Look Here", price: "₹249" },
  { id: 6, imgSrc: Img4, title: "Chicken", description: "Tender, juicy chicken marinated in rich spices, grilled or fried to a crispy golden finish.", button: "Look Here", price: "₹249" },
  { id: 7, imgSrc: Img4, title: "Chicken", description: "Tender, juicy chicken marinated in rich spices, grilled or fried to a crispy golden finish.", button: "Look Here", price: "₹249" },
  { id: 8, imgSrc: Img4, title: "Chicken", description: "Tender, juicy chicken marinated in rich spices, grilled or fried to a crispy golden finish.", button: "Look Here", price: "₹249" },
];


function Menu({ mt }) {
  const [cards, setCards] = useState(initialCardsData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-900 ${mt === "Yes" ? "sm:mt-22" : ""}`}>
      <div className="flex flex-col items-center justify-center text-white py-10">
        <h2 className="font-bold text-4xl">A Taste You’ll Never Forget</h2>
        <p className="text-lg text-gray-400">Here’s a glimpse of the magic happening in our kitchen.</p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center flex-wrap gap-6 px-6">
        {cards.map((card) => (
          <CardCamponent key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
