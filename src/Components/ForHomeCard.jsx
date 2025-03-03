import { useNavigate } from "react-router-dom";

const ForHomeCard = ({ id, imgSrc, title, description, price }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs mx-auto sm:w-64 relative transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={() => navigate("/menu")}
    >
      <span className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 text-sm font-bold rounded">
        {price}
      </span>
      <img src={imgSrc} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-bold mt-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents div click propagation
          navigate("/menu");
        }}
        className="cursor-pointer mt-3 py-2 px-4 rounded-lg w-full font-bold bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring focus:ring-blue-300"
      >
        Look Here
      </button>
    </div>
  );
};

export default ForHomeCard;
