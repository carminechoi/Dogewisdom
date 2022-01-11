import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/doge-logo.png';
import './Navbar.css';


function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <div className="d-flex me-auto">
                <Navbar.Brand href="/">
                    <div className="ms-5 px-2 d-flex flex-row align-items-center">
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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-5 px-2" />
                <Navbar.Collapse id="responsive-navbar-nav" className="mx-5 px-2" >
                    <Form className="">
                        <FormControl 
                            type="search"
                            placeholder="Search all assets..."
                            className=""
                            aria-label="Search"
                        />
                    </Form>
                    <Button className="" >Log in</Button>
                    <Button className="" >Sign up</Button>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;