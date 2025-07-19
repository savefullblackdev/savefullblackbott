import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Adjust the URL as needed

export const addBalance = async (userId, amount) => {
    try {
        const response = await axios.post(`${API_URL}/balance/add`, { userId, amount });
        return response.data;
    } catch (error) {
        console.error('Error adding balance:', error);
        throw error;
    }
};

export const generatePixLink = async (amount) => {
    try {
        const response = await axios.post(`${API_URL}/balance/generate-pix`, { amount });
        return response.data;
    } catch (error) {
        console.error('Error generating Pix link:', error);
        throw error;
    }
};

export const confirmPayment = async (paymentId) => {
    try {
        const response = await axios.get(`${API_URL}/balance/confirm-payment/${paymentId}`);
        return response.data;
    } catch (error) {
        console.error('Error confirming payment:', error);
        throw error;
    }
};