import React from 'react';

function StockSelector({ stocks, onSelect }) {
  const handleSelect = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <label>Select a stock:</label>
      <select onChange={handleSelect}>
        <option value="">Choose a stock</option>
        {stocks.map((stock) => (
          <option key={stock.symbol} value={stock.symbol}>
            {stock.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StockSelector;
