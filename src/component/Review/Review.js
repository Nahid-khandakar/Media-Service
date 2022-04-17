import React from 'react';
import './Review.css'

const Review = () => {
    return (
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">

            <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4">
                    <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
                    <h5> Awesome product</h5>
                    <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                </div>
            </div>
        </div>
    );
};

export default Review;