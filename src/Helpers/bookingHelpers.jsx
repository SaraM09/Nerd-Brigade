// src/Helpers/bookingHelpers.jsx

// import axios from "axios";

// const baseUrl = "http://localhost:3000/bookings";

// const index = async () => {
//     try {
//         const response = await axios.get(baseUrl);
//         return response.data;
//     } catch (error) {
//         console.error('Fetching all bookings failed:', error);
//     }
// };

// const create = async (booking) => {
//     try {
//         const response = await axios.post(baseUrl, booking);
//         return response.data;
//     } catch (error) {
//         console.error('Creating booking failed:', error);
//     }
// };

// const getById = async (id) => {
//     try {
//         const response = await axios.get(`${baseUrl}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error(`Fetching booking by ID ${id} failed:`, error);
//     }
// };

// const updateById = async (id, booking) => {
//     try {
//         const response = await axios.put(`${baseUrl}/${id}`, booking);
//         return response.data;
//     } catch (error) {
//         console.error(`Updating booking with id ${id} failed:`, error);
//     }
// };

// const deleteById = async (id) => {
//     try {
//         const response = await axios.delete(`${baseUrl}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error(`Deleting booking with id ${id} failed:`, error);
//     }
// };

// export default { index, create, getById, updateById, deleteById };

import axios from "axios";

const baseUrl = "http://localhost:1119/bookings";

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error('Fetching all bookings failed:', error);
    }
};

const create = async (booking) => {
    try {
        const response = await axios.post(baseUrl, booking);
        return response.data;
    } catch (error) {
        console.error('Creating booking failed:', error);
    }
};

const getById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Fetching booking by ID ${id} failed:`, error);
    }
};

const updateById = async (id, booking) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, booking);
        return response.data;
    } catch (error) {
        console.error(`Updating booking with id ${id} failed:`, error);
    }
};

const deleteById = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Deleting booking with id ${id} failed:`, error);
    }
};

export default { getAll, create, getById, updateById, deleteById };