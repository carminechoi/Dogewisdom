import React, { useState } from "react"
import { Form, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import axios from "axios";
import { config } from '../../Constants';

import Modal from "react-bootstrap/Modal";
import './Register.css';

const SALTROUNDS = 7;

function Register(props) {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    // Reset form before closing modal
    const onClose = props.onClose;
    const closeModal = (props) => {
        setForm({});
        setErrors({});
        onClose();
    }

    //Update form from user input
    const handleChange = (field, value) => {
        setForm({...form, 
            [field]: value,
        });
    }

    // Update errors from server response
    const setResponseErrors = (response) => {
        for (const error in response) {
            setErrors(response);
        }
    }

    // Form validation done here
    const findFormErrors = () => {
        const { username, email, password, password2 } = form;
        const newErrors = {};

        if (!username || username === "") newErrors.username = 'Enter username';
        
        if (!email || email === "") newErrors.email = "Enter email";
        
        if (!password || password === "") newErrors.password = "Enter a password";
        else if (!password2 || password === "") newErrors.password2 = "Confirm your password";
        else if (password !== password2) newErrors.password2 = "Those passwords didn't match. Try again.";
        
        return newErrors;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const newErrors = findFormErrors();

        if (Object.keys(newErrors).length !== 0) {
            setErrors(newErrors);
        } else {
            const url = config.url.API_URL;
            const registerUser = {
                username: form.username,
                email: form.email,
                password: form.password,
            }
            axios.post(url + "/api/register", registerUser, { "Content-Type": "application/json" })
                .then(res => {
                    closeModal() //Closes Login Modal
                    window.location.reload(false) // Reloads page for app the render again
                })
                .catch(err => {
                    console.log(err.response.data.message)
                    setResponseErrors(err.response.data.message);
                })
        }
    }

    return (
        <Modal show={props.showRegister} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate onSubmit={handleRegister}>
                    <Form.Group controlId="formName" className="form-row">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="name"
                            name="username"
                            placeholder="Username" 
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            isInvalid={!!errors.username}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.username}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="form-row">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="form-row">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formPassword2" className="form-row">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password2"
                            placeholder="Confirm Password"
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            isInvalid={!!errors.password2}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password2}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="outline-primary" type="submit">Sign Up</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
    
}

export default Register;