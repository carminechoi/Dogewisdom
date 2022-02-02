import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import "./Login.css";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginCheck: ""
        };
    }

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e)
    }

    handleChange = (e) => {
        // Changes state with current information
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        const loginUser = {
            username: this.state.username,
            password: this.state.password,
        }

        console.log("login called");
        console.log(loginUser);

        // axios.post("api/auth/login", loginUser,{"Content-Type": "application/json"})
        //     .then(res => {
        //         Cookies.set("token", res.data.token, {expires:1})
        //         window.location.reload(false) // Reloads page for app the render again
        //         this.props.onClose() //Closes Login Modal
        //     })
        //     .catch(err => {
        //         console.log("Login Error" + err)
        //         this.setState({
        //             loginCheck: "Invalid Username or Password",
        //         })
        //     } )

    }

    render() {
        return (
            <Modal show={this.props.showLogin} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="loginPage">
                        <Form className="forms">
                            <header>
                                Username
                            </header>
                            <Form.Group controlId="formBasicName" className="form-row">
                                {/* <Form.Label>Username</Form.Label> */}
                                <Form.Control
                                    type="name"
                                    name="username"
                                    placeholder="Username"
                                    onChange={(e) => this.handleChange(e)} />
                            </Form.Group>

                            <header>
                                Password
                            </header>
                            <Form.Group controlId="formBasicPassword" className="form-row">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e) => this.handleChange(e)} />
                            </Form.Group>

                            <Button
                                className="form-button"
                                variant="outline-primary"
                                onClick={(e) => this.handleLogin(e)}>
                                Login
                            </Button>

                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default LoginPage;