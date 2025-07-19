const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cardsRouter = require('./api/cards');
const balanceRouter = require('./api/balance');
const pricesRouter = require('./api/prices');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/cards', cardsRouter);
app.use('/api/balance', balanceRouter);
app.use('/api/prices', pricesRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});