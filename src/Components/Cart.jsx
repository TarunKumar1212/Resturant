import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((total, item) => total + parseInt(item.price.replace("₹", "")) * item.quantity, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-22 min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-4">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty. Go back to the menu!</p>
          <button
            onClick={() => navigate("/menu")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-800 rounded-lg my-2"
            >
              <img src={item.imgSrc} className="w-16 h-16 rounded-lg" alt={item.title} />
              <div>
                <h3 className="text-xl">{item.title}</h3>
                <p>{item.price} x {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <h3 className="text-2xl mt-4">Total: ₹{totalAmount}</h3>

          <div className="mt-4 flex gap-4">
            <button
              onClick={() => navigate("/menu")}
              className="bg-blue-500 px-4 py-2 rounded-lg"
            >
              Continue Shopping
            </button>
            <button
              onClick={clearCart}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg"
            >
              Clear Cart
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-500 px-4 py-2 rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
