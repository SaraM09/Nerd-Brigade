// src/Helpers/techHelpers.jsx

import axios from "axios";

const baseUrl = "http://localhost:3000/technicians";

const index = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error('Fetching all technicians failed:', error);
    }
};

const getById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Fetching technician with id ${id} failed:`, error);
    }
};

const create = async (technician) => {
    try {
        const response = await axios.post(baseUrl, technician);
        return response.data;
    } catch (error) {
        console.error('Creating technician failed:', error);
    }
};

const updateById = async (id, technician) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, technician);
        return response.data;
    } catch (error) {
        console.error(`Updating technician with id ${id} failed:`, error);
    }
};

const deleteById = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Deleting technician with id ${id} failed:`, error);
    }
};

export default { index, getById, create, updateById, deleteById };
