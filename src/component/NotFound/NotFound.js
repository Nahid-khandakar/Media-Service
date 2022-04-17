import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './NotFound.css'
import error from '../../images/error.png'
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='container mt-5'>
            <Card>
                <Card.Img variant="top" src={error} className='w-75 mx-auto' />
                <Button onClick={() => navigate('/home')} className='w-50 d-block mx-auto p-3 bg-warning not-found'>
                    Home Page
                </Button>
            </Card>
        </div>
    );
};

export default NotFound;