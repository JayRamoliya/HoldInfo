const mongoose = require('mongoose');

// Define the Ticker schema
const tickerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    last: {
        type: Number,
        required: true,
    },
    buy: {
        type: Number,
        required: true,
    },
    sell: {
        type: Number,
        required: true,
    },
    volume: {
        type: Number,
        required: true,
    },
    base_unit: {
        type: String,
        required: true,
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Create the Ticker model
const Ticker = mongoose.model('Ticker', tickerSchema);

module.exports = Ticker;
