import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartItem from './cartItem'; // Ensure this path is correct based on your project structure
import PropTypes from 'prop-types';

const Cart = ({ userId }) => {
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState({ accessoryId: '', quantity: 1 });

  // Fetch cart items on component mount or userId change
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`/api/cart/${userId}`);
        if (Array.isArray(response.data)) {
          setCartItems(response.data);
        } else {
          // This log will help understand what is being returned
          console.error('Expected an array but received:', response.data);
          console.log('Response content type:', response.headers['content-type']); // Check content type
          setCartItems([]);  // Set an empty array if the data is not an array
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setCartItems([]);  // Set an empty array on error
      }
    };
    fetchCartItems();
  }, [userId]);

  // Remove item from the cart
  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`/api/cartItem/${itemId}`);
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  // Add new item to the cart
  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/cartItem`, {
        cartId: userId, // Assuming userId is used as cartId
        accessoryId: newItem.accessoryId,
        quantity: newItem.quantity,
      });
      setCartItems(prevItems => [...prevItems, response.data]);
      setNewItem({ accessoryId: '', quantity: 1 }); // Reset the form fields
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  // Handle input change
  const handleInputChange = (event) => {
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <CartItem item={item} onRemove={() => handleRemoveItem(item.id)} />
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <div>
          <label>
            Accessory ID:
            <input type="text" name="accessoryId" value={newItem.accessoryId} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input type="number" name="quantity" value={newItem.quantity} onChange={handleInputChange} />
          </label>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

Cart.propTypes = {
    userId: PropTypes.string.isRequired,
  };

export default Cart;
