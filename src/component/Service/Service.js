import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Service.css'

const Service = ({ service }) => {

    const navigate = useNavigate()

    const { name, price, description, img } = service
    return (

        <div className='col-lg-4 col-sm-12'>
            <Card className='my-3 shadow-lg rounded'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='card-title'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h2><span className='text-warning'>$</span>{price}</h2>
                    <Button onClick={() => navigate('/checkout')} className='card-btn w-100' >
                        Hire Now
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;