// src/Helpers/cartHelpers.jsx

import axios from "axios";

const baseUrl = "http://localhost:3000/carts";

const index = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error('Fetching all carts failed:', error);
    }
};

const create = async (cart) => {
    try {
        const response = await axios.post(baseUrl, cart);
        return response.data;
    } catch (error) {
        console.error('Creating cart failed:', error);
    }
};

const getByUserId = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Fetching cart by user ID ${userId} failed:`, error);
    }
};

const updateById = async (id, cart) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, cart);
        return response.data;
    } catch (error) {
        console.error(`Updating cart with id ${id} failed:`, error);
    }
};

const deleteById = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Deleting cart with id ${id} failed:`, error);
    }
};

export default { index, create, getByUserId, updateById, deleteById };
