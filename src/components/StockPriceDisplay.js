import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StockPriceDisplay({ selectedStock }) {
  const [price, setPrice] = useState(null);
  const [previousPrice, setPreviousPrice] = useState(null);

  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        const response = await axios.get('http://localhost:3070/api/stocks/' + selectedStock);
  
        const { price } = response.data;
        if (previousPrice !== null) {
          const priceChange = price - previousPrice;
          setPrice(price.toFixed(2));
          setPriceChange(priceChange.toFixed(2));
          setPreviousPrice(price);
        } else {
          setPrice(price.toFixed(2));
          setPriceChange(null);
          setPreviousPrice(price);
        }
      } catch (error) {
        console.error('Error fetching stock price:', error);
      }
    };
  
    const interval = setInterval(fetchStockPrice, 1000); 
  
    return () => {
      clearInterval(interval);
    };
  }, [selectedStock, previousPrice]);
  
  const [priceChange, setPriceChange] = useState(null);

  const getPriceChangeClassName = () => {
    if (priceChange > 0) {
      return 'price-change profit';
    } else if (priceChange < 0) {
      return 'price-change loss';
    }
    return 'price-change';
  };

  return (
    <div className="stock-price-display">
      {price !== null ? (
        <div>
          <p>
            Current price of {selectedStock}: <span className="price">${price}</span>
          </p>
          {priceChange !== null && (
            <p className={getPriceChangeClassName()}>
              {priceChange} (${priceChange > 0 ? '+' : ''})
            </p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default StockPriceDisplay;
