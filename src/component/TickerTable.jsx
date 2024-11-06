// TickerTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TickerTable = () => {
    const [tickers, setTickers] = useState([]);

    useEffect(() => {
        const fetchTickers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tickers');
                setTickers(response.data);
            } catch (error) {
                console.error('Error fetching tickers:', error);
            }
        };
        fetchTickers();
    }, []);

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Top Tickers</h3>
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Platform</th>
                        <th scope="col">Last Traded Price</th>
                        <th scope="col">Buy / Sell Price</th>
                        <th scope="col">Difference</th>
                        <th scope="col">Savings</th>
                    </tr>
                </thead>
                <tbody>
                    {tickers.map((ticker, index) => {
                        const lastPrice = parseFloat(ticker.last);
                        const buyPrice = parseFloat(ticker.buy);
                        const sellPrice = parseFloat(ticker.sell);
                        const difference = (((sellPrice - lastPrice) / lastPrice) * 100).toFixed(2);
                        const savings = Math.abs(sellPrice - lastPrice).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

                        return (
                            <tr key={ticker._id}>
                                <td>{index + 1}</td>
                                <td>{ticker.name.toUpperCase()}</td>
                                <td>₹ {lastPrice.toLocaleString('en-IN')}</td>
                                <td>₹ {buyPrice.toLocaleString('en-IN')} / ₹ {sellPrice.toLocaleString('en-IN')}</td>
                                <td className={difference > 0 ? 'text-success' : 'text-danger'}>
                                    {difference} %
                                </td>
                                <td className={difference > 0 ? 'text-success' : 'text-danger'}>
                                    {difference > 0 ? `▲ ${savings}` : `▼ ${savings}`}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TickerTable;
