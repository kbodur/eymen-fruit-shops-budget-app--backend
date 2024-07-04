const express = require('express')
const transactionController= require('./controller/transactionsController')
const app = express()
const cors = require('cors')


// Middleware
app.use(cors());
app.use(express.json());

app.use('/transactions', transactionController);

// Home Route
app.get('/', (req, res) => {
    res.send("Welcome to Eymen's Fruit Shop");
});

app.get('*', (req, res) => {
    res.status(404).send('404: Page not found');
});

module.exports = app
