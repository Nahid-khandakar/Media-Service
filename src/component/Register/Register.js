import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from '../Loading/Loading';

const Register = () => {

    //get data from input field
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigation = useNavigate()

    //new user creat
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



    //if ger user
    if (user) {
        toast('Register Successfully,Please Check your Email')
    }

    if (loading) {
        return <Loading></Loading>
    }

    //if any error
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    //use email pass User creat system
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        //console.log(name, email, password)

        createUserWithEmailAndPassword(email, password)

    }

    return (

        <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-3 pt-3'>

            <h2 className='form-title pb-3'>Register Here</h2>

            <Form.Group className="mb-3 " controlId="formBasicEmail">

                <Form.Label>Name</Form.Label>
                <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />

            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>


            <p className='mb-4'>Already Have an account??<Link to='/login' className='form-link'> Login Here</Link></p>


            <Button type="submit" className='w-50 d-block mx-auto p-2 form-btn bg-warning'>
                Register
            </Button>
            <br />
            {errorElement}
            <ToastContainer />
        </Form>
    );
};

export default Register;