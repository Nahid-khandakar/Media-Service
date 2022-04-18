import React from 'react';
import './Review.css'
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';



const Review = ({ review }) => {
    const { name, userReview, rating, image } = review
    return (

        <div className="col col-lg-3 col-12">
            <div className='card review-card rounded my-5 ' >
                <div className="card-body ">
                    <img src={image} alt="" className='img-fluid rounded-2 w-100 d-block mx-auto review-card-img shadow-sm' />
                    <h3 className='mt-3 text-center'>{name}</h3>
                    <p className='review-card-text'>{userReview}</p>

                    <div className='text-center'>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar style={{ color: 'goldenrod' }}></FaStar>}
                            readonly
                        ></Rating>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Review;