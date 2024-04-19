import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartItem from './cartItem.jsx'; // Adjust the path as necessary

const Cart = ({ userId }) => {
 const [cartItems, setCartItems] = useState([]);
 const [newItem, setNewItem] = useState({ accessoryId: '', quantity: 1 });

 useEffect(() => {
 const fetchCartItems = async () => {
 try {
 const response = await axios.get(`/api/cart/${userId}`);
 setCartItems(response.data);
 } catch (error) {
 console.error('Error fetching cart items:', error);
 }
 };
 fetchCartItems();
 }, [userId]);

 const handleRemoveItem = async (itemId) => {
 try {
 await axios.delete(`/api/cartItem/${itemId}`);
 setCartItems(cartItems.filter(item => item.id !== itemId));
 } catch (error) {
 console.error('Error removing item from cart:', error);
 }
 };

 const handleAddItem = async () => {
 try {
 const response = await axios.post(`/api/cartItem`, {
 cartId: userId, // Assuming userId is used as cartId for simplicity
 accessoryId: newItem.accessoryId,
 quantity: newItem.quantity,
 });
 setCartItems([...cartItems, response.data]);
 setNewItem({ accessoryId: '', quantity: 1 }); // Reset the new item form
 } catch (error) {
 console.error('Error adding item to cart:', error);
 }
 };

 const handleInputChange = (event) => {
 setNewItem({ ...newItem, [event.target.name]: event.target.value });
 };

 return (
 <div>
 <h1>Your Cart</h1>
 <ul>
 {cartItems.map(item => (
 <li key={item.id}>
 <CartItem item={item} onRemove={handleRemoveItem} />
 </li>
 ))}
 </ul>
 <form onSubmit={(e) => { e.preventDefault(); handleAddItem(); }}>
 <label>
 Accessory ID:
 <input type="text" name="accessoryId" value={newItem.accessoryId} onChange={handleInputChange} />
 </label>
 <label>
 Quantity:
 <input type="number" name="quantity" value={newItem.quantity} onChange={handleInputChange} />
 </label>
 <button type="submit">Add Item</button>
 </form>
 </div>
 );
};

export default Cart; import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartItem from './cartItem.jsx'; // Adjust the path as necessary

const Cart = ({ userId }) => {
 const [cartItems, setCartItems] = useState([]);
 const [newItem, setNewItem] = useState({ accessoryId: '', quantity: 1 });

 useEffect(() => {
 const fetchCartItems = async () => {
 try {
 const response = await axios.get(`/api/cart/${userId}`);
 setCartItems(response.data);
 } catch (error) {
 console.error('Error fetching cart items:', error);
 }
 };
 fetchCartItems();
 }, [userId]);

 const handleRemoveItem = async (itemId) => {
 try {
 await axios.delete(`/api/cartItem/${itemId}`);
 setCartItems(cartItems.filter(item => item.id !== itemId));
 } catch (error) {
 console.error('Error removing item from cart:', error);
 }
 };

 const handleAddItem = async () => {
 try {
 const response = await axios.post(`/api/cartItem`, {
 cartId: userId, // Assuming userId is used as cartId for simplicity
 accessoryId: newItem.accessoryId,
 quantity: newItem.quantity,
 });
 setCartItems([...cartItems, response.data]);
 setNewItem({ accessoryId: '', quantity: 1 }); // Reset the new item form
 } catch (error) {
 console.error('Error adding item to cart:', error);
 }
 };

 const handleInputChange = (event) => {
 setNewItem({ ...newItem, [event.target.name]: event.target.value });
 };

 return (
 <div>
 <h1>Your Cart</h1>
 <ul>
 {cartItems.map(item => (
 <li key={item.id}>
 <CartItem item={item} onRemove={handleRemoveItem} />
 </li>
 ))}
 </ul>
 <form onSubmit={(e) => { e.preventDefault(); handleAddItem(); }}>
 <label>
 Accessory ID:
 <input type="text" name="accessoryId" value={newItem.accessoryId} onChange={handleInputChange} />
 </label>
 <label>
 Quantity:
 <input type="number" name="quantity" value={newItem.quantity} onChange={handleInputChange} />
 </label>
 <button type="submit">Add Item</button>
 </form>
 </div>
 );
};

export default Cart