import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import Loading from '../Loading/Loading'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogIn from '../SocialLogIn/SocialLogIn';


const Login = () => {

    //get data from input field
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";




    //for login
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


    //for reset password
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }

    //check user email and pass
    const handleLogInSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        //console.log(email, password)
        signInWithEmailAndPassword(email, password)

    }

    //reset password
    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset password link send on email')
        }
        else {
            toast('Give Email Address')
        }

    }


    return (

        <Form onSubmit={handleLogInSubmit} className='w-50 mx-auto mt-3 pt-3 login-container '>

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

            <p>Forget Password ?? <button onClick={resetPassword} className='form-link mx-2'>Reset Here</button></p>



            <Button type="submit" className='w-100 mt-3 p-2 form-btn bg-warning'>
                Login
            </Button>

            {errorElement}

            <SocialLogIn></SocialLogIn>

            <ToastContainer />

        </Form>

    );
};

export default Login;