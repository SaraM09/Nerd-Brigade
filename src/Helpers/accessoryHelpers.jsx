// src/Helpers/accessoryHelpers.jsx

import axios from "axios";

const baseUrl = "http://localhost:3000/accessories";

const index = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error('Fetching all accessories failed:', error);
    }
};

const getById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Fetching accessory with id ${id} failed:`, error);
    }
};

const create = async (accessory) => {
    try {
        const response = await axios.post(baseUrl, accessory);
        return response.data;
    } catch (error) {
        console.error('Creating accessory failed:', error);
    }
};

const updateById = async (id, accessory) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, accessory);
        return response.data;
    } catch (error) {
        console.error(`Updating accessory with id ${id} failed:`, error);
    }
};

const deleteById = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Deleting accessory with id ${id} failed:`, error);
    }
};

export default { index, getById, create, updateById, deleteById };
