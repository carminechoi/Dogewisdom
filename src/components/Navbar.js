import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/doge-logo.png';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <div className='d-flex flex-row'>
                    <div>
                        <img
                            src={logo}
                            alt="logo"
                            width="75"
                            height="75"
                        />
                    </div>
                    <div className='d-flex flex-column'>
                        <p>DogeWisdom.</p>
                        <p>Reddit Crypto Tracker</p>
                    </div>
                </div>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header;