// index.js
const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();

const Ticker = require('./models/Ticker');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173', // react origin 
}));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.get('/fetch-tickers', async (req, res) => {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data = response.data;

        const top10Tickers = Object.values(data).slice(0, 10).map(ticker => ({
            name: ticker.name,
            last: parseFloat(ticker.last),
            buy: parseFloat(ticker.buy),
            sell: parseFloat(ticker.sell),
            volume: parseFloat(ticker.volume),
            base_unit: ticker.base_unit,
        }));

        await Ticker.deleteMany({});

        await Ticker.insertMany(top10Tickers);

        res.status(200).json({ message: 'Top 10 tickers saved successfully!' });
    } catch (error) {
        console.error('Error fetching or saving tickers:', error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

app.get('/tickers', async (req, res) => {
    try {
        const tickers = await Ticker.find({});
        res.status(200).json(tickers); 
    } catch (error) {
        console.error('Error retrieving tickers:', error);
        res.status(500).json({ message: 'An error occurred while retrieving tickers' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
