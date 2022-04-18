import React from 'react';
import './CheckOut.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {

    const handleToast = () => {
        toast('Thanks for Checkout')
    }

    return (
        <div>
            <h1 className='text-center mt-5 p-5'>this is checkout div</h1>
            <button onClick={handleToast} className='btn btn-danger mx-auto w-25 d-block'>
                Checkout
            </button>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;