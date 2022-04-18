import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
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

            <h1 className='home-title mt-5'> Services </h1>

            <div className='container mt-3 rounded'>
                <div className='row'>

                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </div>
            </div>

            <div className='container'>
                <Review></Review>
            </div>


            <Footer></Footer>

        </div>
    );
};

export default Home;