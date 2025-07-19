import axios from 'axios';

const API_URL = 'http://localhost:5000/api/prices';

export const getCurrentPrices = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching current prices:', error);
        throw error;
    }
};

export const updatePrice = async (bin, newPrice) => {
    try {
        const response = await axios.put(`${API_URL}/${bin}`, { price: newPrice });
        return response.data;
    } catch (error) {
        console.error('Error updating price:', error);
        throw error;
    }
};