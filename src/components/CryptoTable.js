import React from 'react';

const CryptoTable = ({ coins }) => {
  return (
    <div style={{ paddingInline: 10, width: '100%' }}>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
              <th scope="col">24hr Changes</th>
            </tr>
          </thead>
          <tbody id="crypto-table-body">
            {coins.length === 0 ? (
              <tr>
                <td colspan="5" className="text-left">Loading...</td>
              </tr>
            ) : (
              coins.map(coin => {
                const changeClass = coin.quotes.USD.percent_change_24h >= 0 ? 'text-success' : 'text-danger';
                return (
                  <tr key={coin.id}>
                    <th style={{ color: '#2B3035' }}>{coin.name}</th>
                    <td>{coin.symbol}</td>
                    <td>${coin.quotes.USD.price ? coin.quotes.USD.price.toFixed(2) : '0'}</td>
                    <td>${coin.quotes.USD.market_cap ? coin.quotes.USD.market_cap.toLocaleString() : '0'}</td>
                    <td className={changeClass}>{coin.quotes.USD.percent_change_24h ? coin.quotes.USD.percent_change_24h.toFixed(2) : '0'}%</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
