import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './NotFound.css'
import error from '../../images/error.png'

const NotFound = () => {
    return (
        <div className='container mt-5'>
            <Card>
                <Card.Img variant="top" src={error} className='w-75 mx-auto' />
                <Button className='w-50 d-block mx-auto p-3 bg-warning not-found'>Back to the Home</Button>
            </Card>
        </div>
    );
};

export default NotFound;