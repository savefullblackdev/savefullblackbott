import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cards'; // Adjust the URL as needed

export const fetchCards = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching cards:', error);
        throw error;
    }
};

export const addCard = async (cardData) => {
    try {
        const response = await axios.post(API_URL, cardData);
        return response.data;
    } catch (error) {
        console.error('Error adding card:', error);
        throw error;
    }
};

export const getCardDetails = async (cardId) => {
    try {
        const response = await axios.get(`${API_URL}/${cardId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching card details:', error);
        throw error;
    }
};