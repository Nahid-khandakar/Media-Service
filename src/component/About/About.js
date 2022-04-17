import React from 'react';
import './About.css'
import aboutMe from '../../images/aboutMe.jpg'

const About = () => {
    return (

        <div className="container mt-5 p-2">
            <div className="col-md-4 mx-auto">
                <div className="card profile-card">
                    <div className="card-img-block">
                        <img className="card-img-top" src={aboutMe} alt="" />
                    </div>
                    <div className="card-body pt-0">
                        <h5 className="card-title">Nahid Khandakar</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;