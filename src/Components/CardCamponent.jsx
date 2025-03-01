function CardCamponent({ imgSrc, title, description, button, price }) {
  return (
    <div className="relative bg-gray-800 text-white rounded-xl overflow-hidden shadow-lg w-72">
      {/* Price Tag */}
      <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-lg shadow-md">
        {price}
      </div>

      {/* Image */}
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-300 text-sm mt-2">{description}</p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg">
          {button}
        </button>
      </div>
    </div>
  );
}

export default CardCamponent;
