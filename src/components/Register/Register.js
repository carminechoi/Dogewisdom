import React, { Component, useState } from "react"
import { Form, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import axios from "axios";
import { config } from '../../Constants';

import Modal from "react-bootstrap/Modal";
import './Register.css';

const SALTROUNDS = 7;

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: "",
            errorCheck: "",
        }

    }

    handleChange = (e) => {
        // Changes state with current information
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = async (e) => {
        e.preventDefault()
        const url = config.url.API_URL;
        if (this.state.password !== this.state.password2) {
            this.setState({
                errorCheck: "Password does not match"
            })
            console.log("pass no match");
        } else {
            const registerUser = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
            console.log(registerUser);
            axios.post(url + "/api/register", registerUser, { "Content-Type": "application/json" })
                .then(res => {
                    //Cookies.set("token", res.data.token, { expires: 7 })
                    //window.location.reload(false) // Reloads page for app the render again
                    this.props.onClose() //Closes Login Modal
                    this.props.redirectTotalPage()
                    window.location.reload(false) // Reloads page for app the render again

                })
                .catch(err => {
                    console.log("Registration Error " + err)
                    this.setState({
                        errorCheck: "Dupilcate Registration"
                    })
                })
        }
    }

    render() {
        return (
            <Modal show={this.props.showRegister} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form>
                            <header>Username</header>
                            <Form.Group controlId="formBasicName" className="form-row">
                                {/* <Form.Label>Username</Form.Label> */}
                                <Form.Control
                                    type="name"
                                    name="username"
                                    placeholder="Username"
                                    onChange={(e) => this.handleChange(e)} />
                            </Form.Group>

                            <header>Email</header>
                            <Form.Group controlId="formBasicEmail" className="form-row">
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={(e) => this.handleChange(e)} />
                            </Form.Group>

                            <header>Password</header>
                            <Form.Group controlId="formBasicPassword" className="form-row">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e) => this.handleChange(e)} />
                            </Form.Group>

                            <header>Confirm Password</header>
                            <Form.Group controlId="formBasicPassword2" className="form-row">
                                {/* <Form.Label>Confirm Password</Form.Label> */}
                                <Form.Control
                                    type="password"
                                    name="password2"
                                    placeholder="Confirm Password"
                                    onChange={(e) => this.handleChange(e)} />
                            </Form.Group>

                            <Button
                                variant="outline-primary"
                                onClick={(e) => this.handleRegister(e)}>
                                Sign Up
                            </Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default Register;