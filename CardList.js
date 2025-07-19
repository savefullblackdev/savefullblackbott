import React, { useEffect, useState } from 'react';
import { fetchCards } from '../api/cards';

const CardList = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCards = async () => {
            try {
                const cardData = await fetchCards();
                setCards(cardData);
            } catch (error) {
                console.error("Error fetching cards:", error);
            } finally {
                setLoading(false);
            }
        };

        getCards();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card-list">
            <h2>Credit Cards</h2>
            <ul>
                {cards.map((card) => (
                    <li key={card.number}>
                        <span>{card.number.slice(0, 6)}******</span>
                        <span> - Bank: {card.bank_name}</span>
                        <span> - Validity: {card.month}/{card.year}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardList;