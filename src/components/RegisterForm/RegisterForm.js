import React, { useState } from "react"
import { Form, Button, Modal } from "react-bootstrap";
import './Register.css';

import AuthService from '../../services/AuthService';

function RegisterForm(props) {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    // Reset form before closing modal
    const onClose = props.onClose;
    const closeModal = () => {
        setForm({});
        setErrors({});
        onClose();
    }

    // Update form from user input
    const handleChange = (field, value) => {
        setForm({...form, 
            [field]: value,
        });
    }

    // Form validation done here
    const findFormErrors = () => {
        const { username, email, password, password2 } = form;
        const formErrors = {};

        if (!username || username === "") formErrors.username = 'Enter username';
        
        if (!email || email === "") formErrors.email = "Enter email";
        
        if (!password || password === "") formErrors.password = "Enter a password";
        else if (!password2 || password === "") formErrors.password2 = "Confirm your password";
        else if (password !== password2) formErrors.password2 = "Those passwords didn't match. Try again.";
        
        return formErrors;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const formErrors = findFormErrors();

        if (Object.keys(formErrors).length !== 0) {
            setErrors(formErrors);
        } 
        AuthService.register(form.username, form.email, form.password)
            .then(res => {
                closeModal(); // Closes Login Modal
                window.location.reload(false); // Reloads page
            })
            .catch(err => {
                // Only update errors if duplicates exists.
                // Otherwise form errors are overwritten
                if (err.response.data.message.username || err.response.data.message.email) {
                    setErrors(err.response.data.message);
                }
            });
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

export default RegisterForm;