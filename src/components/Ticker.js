import React from 'react';

const Ticker = ({ coins }) => {
  return (
    <div className="ticker-container">
      <div className="ticker">
        {coins.map(coin => {
          const changeClass = coin.quotes.USD.percent_change_24h >= 0 ? 'text-success' : 'text-danger';
          return (
            <div className="ticker-item" key={coin.id}>
              <span className={changeClass}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(2)} | 24h Change: {coin.quotes.USD.percent_change_24h.toFixed(2)}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ticker;
