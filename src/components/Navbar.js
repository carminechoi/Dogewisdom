import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import logo from '../assets/doge-logo.png';
import './Navbar.css';


function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <div className="d-flex me-auto">
                <Navbar.Brand href="/">
                    <div className="ms-5 d-flex flex-row align-items-center">
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-5" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end mx-5" >
                <Nav className="gap-2">
                    <Form className="">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>
                    <Button className="btn-account" >Log in</Button>
                    <Button className="btn-account" >Sign up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;