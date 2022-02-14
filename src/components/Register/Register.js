import React, { Component, useState } from "react"
import { Form, Button, InputGroup } from "react-bootstrap";
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
            duplicateUsername: false,
            duplicateEmail: false,
            validated: false,
        }

    }

    handleRegister = async (e) => {
        const url = config.url.API_URL;
        const form = e.target;
        console.log(e.currentTarget)
        if (e.currentTarget.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (form[2].value !== form[3].value) {
            this.setState({
                errorCheck: "Password does not match"
            })
            console.log("pass no match");
        } else {
            const registerUser = {
                username: form[0].value,
                email: form[1].value,
                password: form[2].value
            }
            axios.post(url + "/api/register", registerUser, { "Content-Type": "application/json" })
                .then(res => {
                    this.setState({
                        validated: true,
                    })
                    //Cookies.set("token", res.data.token, { expires: 7 })
                    //window.location.reload(false) // Reloads page for app the render again
                    this.props.onClose() //Closes Login Modal
                    this.props.redirectTotalPage()
                    window.location.reload(false) // Reloads page for app the render again

                })
                .catch(err => {
                    let message = err.response.data.message;
                    if (message.email) {
                        this.setState({
                            duplicateEmail: true,
                        })
                    } 
                    if (message.username) {
                        this.setState({
                            duplicateUsername: true,
                        })
                    }
                    console.log(`Registration Error| email: ${message.email}, username: ${message.username}`)
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
                        <Form noValidate validated={this.state.validated} onSubmit={this.handleRegister}>
                            <Form.Group controlId="formBasicName" className="form-row">
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        required
                                        type="name"
                                        name="username"
                                        placeholder="Username" 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Username already exists
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" className="form-row">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Email already exists
                                </Form.Control.Feedback>
                            </Form.Group>

                            <header>Password</header>
                            <Form.Group controlId="formBasicPassword" className="form-row">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control 
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </Form.Group>

                            <header>Confirm Password</header>
                            <Form.Group controlId="formBasicPassword2" className="form-row">
                                {/* <Form.Label>Confirm Password</Form.Label> */}
                                <Form.Control
                                    type="password"
                                    name="password2"
                                    placeholder="Confirm Password"
                                />
                            </Form.Group>
                            <Button variant="outline-primary" type="submit">Sign Up</Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default Register;