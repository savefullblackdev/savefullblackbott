import React, { useState } from 'react';
import { addBalance, generatePixLink } from '../api/balance';

const AddBalanceForm = () => {
    const [amount, setAmount] = useState('');
    const [pixLink, setPixLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        try {
            const link = await generatePixLink(amount);
            setPixLink(link);
            await addBalance(amount);
            alert("Balance updated successfully! Please complete the payment using the link.");
        } catch (error) {
            console.error("Error adding balance:", error);
            alert("There was an error adding the balance. Please try again.");
        }
    };

    return (
        <div>
            <h2>Add Balance</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                />
                <button type="submit">Add Balance</button>
            </form>
            {pixLink && (
                <div>
                    <h3>Payment Link</h3>
                    <a href={pixLink} target="_blank" rel="noopener noreferrer">{pixLink}</a>
                </div>
            )}
        </div>
    );
};

export default AddBalanceForm;