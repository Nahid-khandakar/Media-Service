import React from 'react';
import './About.css'
import aboutMe from '../../images/aboutMe.jpg'

const About = () => {
    return (

        <div className="container mt-3 p-2">
            <div className="col-md-4 mx-auto">
                <div className="card profile-card">
                    <div className="card-img-block">
                        <img className="card-img-top" src={aboutMe} alt="" />
                    </div>
                    <div className="card-body pt-0">
                        <h5 className="card-title">Nahid Khandakar</h5>
                        <p className="card-text">As a Web developer my prime goal is design Web pages to effectively and be artistically . I also have an interest in database management , UI/UX design and cyber security. I want to work on these field in the future.</p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;