import React from 'react';
import './Home.css'
import banner from '../../images/banner.jpg'

const Home = () => {
    return (

        <div className='px-3'>
            <div className='bg-img' style={{
                backgroundImage: `url(${banner})`
            }}>

            </div>
        </div>
    );
};

export default Home;