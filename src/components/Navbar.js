import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import logo from '../assets/doge-logo.png';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                        src={logo}
                        alt="logo" 
                        width="75" 
                        height="75"
                        className="d-inline-block align-top" 
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;