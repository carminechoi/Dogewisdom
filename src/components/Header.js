import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/doge-logo.png';
import './Header.css';

function Header() {
    return (
        <header className="header-container">
            <Link to="/" className="title-container">
                <img src={logo} className="title-logo title-container-item" alt="logo" width="75" height="75" />
                <div className="title-container-item">
                    <h1 className="title-heading">DogeWisdom.</h1>
                    <h2 className="title-subheading">Reddit Crypto Tracker</h2>
                </div>
            </Link>
            <div className="search-container">

            </div>
            <div className="account-options-container">

            </div>
            <p>Header</p>
        </header>
    )
}

export default Header;