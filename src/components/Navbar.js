import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-primary-emphasis bg-body-tertiary border-primary-subtle" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><b>CryptoTracker</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="/#prices">Prices</a>
            <a className="nav-link active" href="/#news">News</a>
            <Link className="nav-link active" to="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
