import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "./Login.css";

import AuthService from "../../services/AuthService";

function LoginForm(props) {
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
        const { username, password } = form;
        const formErrors = {};

        if (!username || username === "") formErrors.username = 'Enter username';
                
        if (!password || password === "") formErrors.password = "Enter a password";
        
        return formErrors;
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const formErrors = findFormErrors();
        if (Object.keys(formErrors).length !== 0) {
            setErrors(formErrors);
        }
        
        AuthService.login(form.username, form.password)
            .then(res => {
                closeModal(); // Closes Login Modal
                window.location.reload(false); // Reloads page
            })
            .catch(err => {
                console.log(err.response.data)
                if (err.response.data.status === "failure") {
                    setErrors(err.response.data.message);
                }
            });
    }

    return (
        <Modal show={props.showLogin} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate onSubmit={handleLogin}>
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

                    <Button variant="outline-primary" type="submit">Login</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default LoginForm;