import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer/Footer';
import './Login.css'

const Login = () => {

    //get data from input field
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigation = useNavigate()


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (user) {
        navigation('/about')
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }


    const handleLogInSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        //console.log(email, password)
        signInWithEmailAndPassword(email, password)

    }


    return (

        <Form onSubmit={handleLogInSubmit} className='w-50 mx-auto mt-3 pt-3 '>

            <h2 className='form-title pb-3'>Login</h2>

            <Form.Group className="mb-3 " controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                <Form.Text className="text-muted">

                </Form.Text>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>



            <p>New in Media Services?? <Link to='/register' className='form-link mx-2'>Register Here</Link></p>


            <Button type="submit" className='w-100 mt-3 p-2 form-btn bg-warning'>
                Login
            </Button>


            {errorElement}

        </Form>

    );
};

export default Login;