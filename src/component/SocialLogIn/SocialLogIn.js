import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './SocialLogIn.css'

const SocialLogIn = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";



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

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>


            {errorElement}
            <Button onClick={() => signInWithGoogle()} type="submit" className='w-100 mt-3 p-2 form-btn bg-success'>
                Google Login
            </Button>
        </div>
    );
};

export default SocialLogIn;