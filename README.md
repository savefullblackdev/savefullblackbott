# Telegram Credit Card Dashboard

This project is a dashboard for managing credit card information and user balances through a Telegram bot. It allows users to view credit cards, add balance via Pix payment links, and manage pricing information.

## Project Structure

```
telegram-cc-dashboard
├── public
│   ├── index.html          # Main HTML document for the dashboard
│   └── styles.css         # CSS styles for the dashboard
├── src
│   ├── app.js             # Entry point of the application
│   ├── api
│   │   ├── cards.js       # API functions for credit card management
│   │   ├── balance.js     # API functions for balance management
│   │   └── prices.js      # API functions for pricing management
│   └── components
│       ├── CardList.js    # Component to display the list of credit cards
│       ├── AddBalanceForm.js # Component for adding balance
│       └── PriceManager.js # Component for managing prices
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Features

- **View Credit Cards**: Displays a list of credit cards with only the first six digits visible for security.
- **Add Balance**: Users can enter an amount to add to their balance, generating a Pix payment link for payment.
- **Manage Pricing**: Administrators can update pricing information, which will reflect in the Telegram bot.
- **Payment Confirmation**: The system updates the user balance after confirming payment.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/telegram-cc-dashboard.git
   ```

2. Navigate to the project directory:
   ```
   cd telegram-cc-dashboard
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to access the dashboard.

## Usage Guidelines

- Ensure you have a valid Telegram bot token and configure it in the application.
- Use the dashboard to manage credit cards and user balances effectively.
- Regularly check for updates in pricing and ensure synchronization with the Telegram bot.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.