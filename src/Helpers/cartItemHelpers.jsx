// src/Helpers/cartItemHelpers.jsx

import axios from "axios";

const baseUrl = "http://localhost:3000/cartItems";

const index = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error('Fetching all cart items failed:', error);
    }
};

const create = async (cartItem) => {
    try {
        const response = await axios.post(baseUrl, cartItem);
        return response.data;
    } catch (error) {
        console.error('Creating cart item failed:', error);
    }
};

const getByCartId = async (cartId) => {
    try {
        const response = await axios.get(`${baseUrl}/${cartId}`);
        return response.data;
    } catch (error) {
        console.error(`Fetching cart items by cart ID ${cartId} failed:`, error);
    }
};

const updateById = async (id, cartItem) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, cartItem);
        return response.data;
    } catch (error) {
        console.error(`Updating cart item with id ${id} failed:`, error);
    }
};

const deleteById = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Deleting cart item with id ${id} failed:`, error);
    }
};

export default { index, create, getByCartId, updateById, deleteById };
