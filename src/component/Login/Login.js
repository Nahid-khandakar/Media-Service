import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (

        <Form className='w-50 mx-auto mt-3 pt-3 '>

            <h2 className='form-title pb-3'>Login</h2>

            <Form.Group className="mb-3 " controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />

                <Form.Text className="text-muted">

                </Form.Text>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>



            <p>New in Media Services?? <Link to='/register' className='form-link mx-2'>Register Here</Link></p>


            <Button type="submit" className='w-100 mt-3 p-2 form-btn bg-warning'>
                Login
            </Button>

        </Form>
    );
};

export default Login;