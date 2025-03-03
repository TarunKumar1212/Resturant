const CardComponent = ({ id, imgSrc, title, description, price, isSelected, onSelect }) => {
  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-lg w-64 relative transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
      onClick={onSelect}
    >
      <span className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 text-sm font-bold rounded">
        {price}
      </span>
      <img src={imgSrc} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-bold mt-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents click from affecting parent div
          onSelect();
        }}
        className={`cursor-pointer mt-3 py-2 px-4 rounded-lg w-full font-bold ${
          isSelected ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
        } text-white focus:outline-none focus:ring focus:ring-blue-300`}
      >
        {isSelected ? "Selected" : "Choose Here"}
      </button>
    </div>
  );
};

export default CardComponent;
