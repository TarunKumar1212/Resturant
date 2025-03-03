import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (location.state?.selectedCards) {
      setSelectedItems(location.state.selectedCards.map(item => ({
        ...item,
        quantity: item.quantity || 1
      })));
    }
  }, [location.state]);

  const updateQuantity = (id, change) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const totalAmount = selectedItems.reduce(
    (total, item) => total + parseInt(item.price.replace("₹", "")) * item.quantity, 
    0
  );

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000); // Simulating payment processing delay
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-22 min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-4">Payment Checkout 💳</h2>
      
      {selectedItems.length === 0 ? (
        <p className="text-lg">
          No items selected! 
          <button onClick={() => navigate("/menu")} className="text-blue-400 underline ml-2">
            Go back to Menu
          </button>
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {selectedItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <img src={item.imgSrc} className="w-16 h-16 rounded-lg" alt={item.title} />
                <div className="flex-grow ml-4">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-gray-300">{item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)} 
                    className="px-2 py-1 bg-red-500 rounded-lg text-white hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)} 
                    className="px-2 py-1 bg-green-500 rounded-lg text-white hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl mt-6 font-semibold">Total: ₹{totalAmount}</h3>

          <div className="mt-6 flex gap-4">
            <button 
              onClick={() => navigate("/menu")} 
              className="bg-gray-500 px-4 py-2 rounded-lg"
              disabled={isProcessing || paymentSuccess}
            >
              Back to Menu
            </button>
            <button 
              onClick={handlePayment} 
              className="bg-green-500 px-6 py-2 rounded-lg font-bold hover:bg-green-600 disabled:bg-gray-500" 
              disabled={isProcessing || paymentSuccess}
            >
              {isProcessing ? "Processing..." : paymentSuccess ? "Payment Successful ✅" : "Proceed to Pay"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Payment;
