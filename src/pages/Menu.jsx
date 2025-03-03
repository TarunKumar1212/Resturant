import { useEffect, useState } from "react";
import CardComponent from "../Components/CardCamponent";
import { useNavigate } from "react-router-dom";
import Img1 from "../assets/Cards/img1.jpeg";
import Img2 from "../assets/Cards/img2.jpeg";
import Img3 from "../assets/Cards/img3.webp";
import Img4 from "../assets/Cards/img4.jpeg";

const initialCardsData = [
  { id: 1, imgSrc: Img1, title: "Cheeseburger", description: "Juicy beef patty with cheddar, fresh veggies, and house sauce in a toasted brioche bun.", price: "₹199" },
  { id: 2, imgSrc: Img2, title: "Samosa", description: "Crispy golden pastry filled with spiced potatoes and peas, served with tangy chutney.", price: "₹49" },
  { id: 3, imgSrc: Img3, title: "Momo", description: "Soft dumplings stuffed with flavorful chicken or veggies, steamed to perfection and served with spicy dip.", price: "₹129" },
  { id: 4, imgSrc: Img4, title: "Chicken", description: "Tender, juicy chicken marinated in rich spices, grilled or fried to a crispy golden finish.", price: "₹249" },
  { id: 5, imgSrc: Img4, title: "Chicken Biryani", description: "Aromatic basmati rice cooked with marinated chicken and fragrant spices.", price: "₹349" },
  { id: 6, imgSrc: Img4, title: "Paneer Tikka", description: "Spiced and grilled paneer chunks served with mint chutney.", price: "₹199" },
];

function Menu({ mt }) {
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardSelection = (item) => {
    setSelectedCards((prevSelected) => {
      if (prevSelected.some((selectedItem) => selectedItem.id === item.id)) {
        // If already selected, remove it
        return prevSelected.filter((selectedItem) => selectedItem.id !== item.id);
      } else {
        // If not selected, add it
        return [...prevSelected, item];
      }
    });
  };

  return (
    <div className={`pb-12 min-h-screen bg-gray-900 ${mt === "Yes" ? "sm:mt-22" : ""}`}>
      <div className="flex flex-col items-center justify-center text-white py-10">
        <h2 className="font-bold text-4xl mt-6.5">A Taste You’ll Never Forget</h2>
        <p className="text-lg text-gray-400">Here’s a glimpse of the magic happening in our kitchen.</p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center flex-wrap gap-6 px-6">
        {initialCardsData.map((item) => (
          <CardComponent
            key={item.id}
            {...item}
            isSelected={selectedCards.some((selectedItem) => selectedItem.id === item.id)}
            onSelect={() => handleCardSelection(item)}
          />
        ))}
      </div>

      {/* Proceed to Payment Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => {
            console.log("Proceeding to payment with:", selectedCards);
            navigate("/payment", { state: { selectedCards } });
          }}
          disabled={selectedCards.length === 0}
          className={`px-6 py-3 rounded-lg font-bold text-lg ${
            selectedCards.length > 0 ? "bg-green-500 hover:bg-green-600" : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default Menu;
