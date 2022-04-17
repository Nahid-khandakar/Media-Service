import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {

    const { name, price, description, img } = service
    return (

        <div className='col-lg-4 col-sm-12'>
            <Card style={{ width: '20rem' }} className='my-3 ms-3 shadow-lg rounded'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='card-title'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h2><span className='text-warning card-pirce'>$</span>{price}</h2>
                    <Button className='card-btn w-100' >Hire Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;