
import React, { useState, useEffect } from 'react';
import StockSelector from './components/StockSelector';
import StockPriceDisplay from './components/StockPriceDisplay';
import './App.css'; 

const predefinedStocks = [
  { name: 'Company A', symbol: 'A' },
  { name: 'Company B', symbol: 'B' },
  { name: 'Company C', symbol: 'C' },
  { name: 'Company D', symbol: 'D' },

];


function App() {
  const [selectedStock, setSelectedStock] = useState('');
  const [priceHistory, setPriceHistory] = useState([]);
  const [timestampHistory, setTimestampHistory] = useState([]);

  return (
    <div className="container">
      <h1>Mini Stock Price Tracker</h1>
      <StockSelector stocks={predefinedStocks} onSelect={setSelectedStock} />
      {selectedStock && (
        <div>
          <StockPriceDisplay
            selectedStock={selectedStock}
            onPriceUpdate={(newPrice) => {
              setPriceHistory([...priceHistory, newPrice]);
              setTimestampHistory([...timestampHistory, new Date().getTime()]);
            }}
          />

        </div>
      )}
    </div>
  );
}

export default App;

