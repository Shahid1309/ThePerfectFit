import React, { useContext } from 'react';
import { CartContext } from './Context/CartContext';

const Cart = () => {
  const { items, setItems } = useContext(CartContext);

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const removeFromCart = (indexToRemove) => {
    const updatedItems = items.filter((_, index) => index !== indexToRemove);
    setItems(updatedItems);
  };

  const updateQuantity = (index, quantity) => {
    const updatedItems = items.map((item, i) => i === index ? { ...item, quantity } : item);
    setItems(updatedItems);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      ) : (
        <div>
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4 flex items-center">
              <img src={item.image} alt={item.description} className="w-16 h-16 object-cover mr-4" />
              <div className="flex-1">
                <p className="font-bold">{item.description}</p>
                <p className="text-gray-600">Price: {item.price}</p>
                <p className="text-gray-600">Total: ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <label htmlFor={`quantity-${index}`} className="mr-2">Quantity:</label>
                <input 
                  type="number" 
                  id={`quantity-${index}`} 
                  value={item.quantity} 
                  min="1" 
                  onChange={(e) => updateQuantity(index, parseInt(e.target.value))} 
                  className="w-16 text-center border border-gray-300 rounded-md"
                />
              </div>
              <button 
                onClick={() => removeFromCart(index)} 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-4 rounded">
                Remove
              </button>
            </div>
          ))}
          <p className="text-xl font-bold text-gray-900 mt-8">Total: ${calculateTotal()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
