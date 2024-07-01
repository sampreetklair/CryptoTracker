import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import CryptoTable from './components/CryptoTable';
import NewsSection from './components/NewsSection';
import About from './components/About';

function App() {
  const [coins, setCoins] = useState([]);
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => (b.market_cap_usd || 0) - (a.market_cap_usd || 0));
        setCoins(data);
      })
      .catch(error => console.error('Error fetching data:', error));

    fetch('https://newsdata.io/api/1/latest?apikey=pub_4770706d7a1a45991d5d0fc48dc5854bd53f5&q=crypto&language=en')
      .then(response => response.json())
      .then(data => setNews(data.results.slice(0, 6)))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <Ticker coins={coins.slice(0, 10)} />
        <hr style={{ margin: 0, padding: 0 }} />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div style={{ paddingInline: 25 }}>
              <div style={{ display: 'flex', paddingTop: 7 }}>
                <p className="fs-4 fw-bold" id="prices" style={{ paddingInline: 10, paddingTop: 20 }}>Popular Cryptocurrencies</p>
                <div style={{ paddingInline: 10, paddingTop: 20, width: 275 }}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="crypto-search"
                      placeholder="Search any cryptocurrency"
                      aria-label="Search any cryptocurrency"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <CryptoTable coins={filteredCoins.slice(0, 10)} />
              <p className="fs-4 fw-bold" id="news" style={{ paddingInline: 10, paddingTop: 20 }}>Crypto News</p>
              <NewsSection news={news} />
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer className="bottom d-flex justify-content-center" style={{ backgroundColor: '#2B3035', color: 'white', paddingBlock: 12, marginTop: 40 }}>
          Copyright &copy; Sampreet Klair 2024
        </footer>
      </div>
    </Router>
  );
}

export default App;