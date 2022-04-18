import React from 'react';
import './Review.css'
import aboutMe from '../../images/aboutMe.jpg'

const Review = () => {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className='card review-card'>
                    <div className="card-body">
                        <img src={aboutMe} alt="" className='img-fluid rounded-circle w-50 mb-3 review-card-img' />
                        <h3>Person name</h3>
                        <h5>Write something</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dolorum eos aperiam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;