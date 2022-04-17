import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <div className=''>
            <Banner></Banner>

            <div className='container mt-5 rounded'>
                <div className='row'>

                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </div>
            </div>








        </div>
    );
};

export default Home;