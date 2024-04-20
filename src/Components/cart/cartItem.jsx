import React from 'react';

const CartItem = ({ item, onRemove }) => {
    return (
        <div className="cart-item">
            <h3>{item.accessory.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.accessory.price.toFixed(2)}</p>
            <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
    );
};

export default CartItem;
