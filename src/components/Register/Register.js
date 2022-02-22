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

    // reset form before closing modal
    const onClose = props.onClose;
    const closeModal = (props) => {
        setForm({});
        setErrors({});
        onClose();
    }

    const handleChange = (field, value) => {
        setForm({...form, 
            [field]: value,
        });
    }

    const setResponseErrors = (response) => {
        console.log(response);
        Object.keys(response).forEach(key => {
            console.log(`key: ${key}  :  value: ${response[key]}`);
            setErrors({...errors, 
                [key]: response[key],
            });
        })
        console.log(errors);
    }

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
                    //Cookies.set("token", res.data.token, { expires: 7 })
                    //window.location.reload(false) // Reloads page for app the render again
                    closeModal() //Closes Login Modal
                    props.redirectTotalPage()
                    window.location.reload(false) // Reloads page for app the render again
                    console.log('sent')
                })
                .catch(err => {
                    setResponseErrors(err.response.data.message);
                    // if (message.email) {
                    //     this.setState({
                    //         duplicateEmail: true,
                    //     })
                    // } 
                    // if (message.username) {
                    //     this.setState({
                    //         duplicateUsername: true,
                    //     })
                    // }
                    // console.log(`Registration Error| email: ${message.email}, username: ${message.username}`)
                })
        }
        // const url = config.url.API_URL;
        // const form = e.target;
        // console.log(e.currentTarget)
        // if (e.currentTarget.checkValidity() === false) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }

        // if (form[2].value !== form[3].value) {
        //     this.setState({
        //         errorCheck: "Password does not match"
        //     })
        //     console.log("pass no match");
        // } else {
        //     const registerUser = {
        //         username: form[0].value,
        //         email: form[1].value,
        //         password: form[2].value
        //     }
        //     axios.post(url + "/api/register", registerUser, { "Content-Type": "application/json" })
        //         .then(res => {
        //             this.setState({
        //                 validated: true,
        //             })
        //             //Cookies.set("token", res.data.token, { expires: 7 })
        //             //window.location.reload(false) // Reloads page for app the render again
        //             props.onClose() //Closes Login Modal
        //             props.redirectTotalPage()
        //             window.location.reload(false) // Reloads page for app the render again

        //         })
        //         .catch(err => {
        //             let message = err.response.data.message;
        //             if (message.email) {
        //                 this.setState({
        //                     duplicateEmail: true,
        //                 })
        //             } 
        //             if (message.username) {
        //                 this.setState({
        //                     duplicateUsername: true,
        //                 })
        //             }
        //             console.log(`Registration Error| email: ${message.email}, username: ${message.username}`)
        //         })
        // }
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