import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import './Home.css'

const Home = () => {

    const [services, setServices] = useState([])

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        fetch('reviewData.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (

        <div className=''>
            <Banner></Banner>

            <h1 className='home-title mt-5'> Services </h1>

            <div className='container mt-3 rounded-3'>
                <div className='row'>

                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </div>
            </div>

            <h1 className='home-title my-5'> Client Review </h1>

            <div className='container'>

                <div className='row'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        >
                        </Review>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Home;