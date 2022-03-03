import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/doge-logo.png';
import './Navbar.css';

import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import AuthService from '../../services/auth.service';

function Header(props) {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const logout = () => {
        AuthService.logout();
        window.location.reload(false) // Reloads page
    };

    return (
        <Navbar bg="white" expand="lg" className="">
            <div className="container">
                <div className="d-flex me-auto">
                    <Navbar.Brand href="/">
                        <div className="d-flex flex-row align-items-center">
                            <div className="">
                                <img
                                    src={logo}
                                    alt="logo"
                                    width="70"
                                    height="70"
                                    className=""
                                />
                            </div>
                            <div className="title d-flex flex-column px-2">
                                <h1 className="title-main fw-bold fs-2">DogeWisdom.</h1>
                                <h2 className="title-secondary fs-6">Reddit Crypto Tracker</h2>
                            </div>
                        </div>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                    <Nav className="gap-2">
                        <Form className="">
                            <FormControl
                                type="search"
                                placeholder="Search all assets..."
                                className=""
                                aria-label="Search"
                            />
                        </Form>
                        {props.username ? (
                            <Button className="btn-account login-btn" onClick={() => logout()} >Log out</Button>
                        ) : (
                            <>
                            <Button className="btn-account login-btn" onClick={() => setShowLogin(!showLogin)} >Log in</Button>
                            <LoginForm
                                onClose={setShowLogin}
                                showLogin={showLogin}
                            />
                            <Button className="btn-account signup-btn" onClick={() => setShowRegister(!showRegister)} >Sign up</Button>
                            <RegisterForm
                                onClose={setShowRegister}
                                showRegister={showRegister}
                            />
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Header;