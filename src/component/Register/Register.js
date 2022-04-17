import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Register.css'

const Register = () => {
    return (

        <Form className='w-50 mx-auto mt-3 pt-3 '>

            <h2 className='form-title pb-3'>Register Here</h2>

            <Form.Group className="mb-3 " controlId="formBasicEmail">

                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required />

            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Button type="submit" className='w-100 mt-3 p-2 form-btn bg-warning'>
                Register
            </Button>

        </Form>
    );
};

export default Register;