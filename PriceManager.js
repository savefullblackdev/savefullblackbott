import React, { useEffect, useState } from 'react';
import { getPrices, updatePrices } from '../api/prices';

const PriceManager = () => {
    const [prices, setPrices] = useState({});
    const [newPrice, setNewPrice] = useState({});

    useEffect(() => {
        const fetchPrices = async () => {
            const fetchedPrices = await getPrices();
            setPrices(fetchedPrices);
        };
        fetchPrices();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPrice({ ...newPrice, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updatePrices(newPrice);
        const updatedPrices = await getPrices();
        setPrices(updatedPrices);
        setNewPrice({});
    };

    return (
        <div>
            <h2>Price Manager</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Mix 10 CCs:
                        <input
                            type="number"
                            name="10"
                            value={newPrice["10"] || ''}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Mix 20 CCs:
                        <input
                            type="number"
                            name="20"
                            value={newPrice["20"] || ''}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Mix 50 CCs:
                        <input
                            type="number"
                            name="50"
                            value={newPrice["50"] || ''}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Mix 100 CCs:
                        <input
                            type="number"
                            name="100"
                            value={newPrice["100"] || ''}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Mix 200 CCs:
                        <input
                            type="number"
                            name="200"
                            value={newPrice["200"] || ''}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Update Prices</button>
            </form>
            <h3>Current Prices</h3>
            <ul>
                {Object.entries(prices).map(([key, value]) => (
                    <li key={key}>
                        Mix {key} CCs: R$ {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PriceManager;