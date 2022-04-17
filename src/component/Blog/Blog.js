import React from 'react';
import { Card } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (

        <>
            {/* question 1 */}

            <div className='container my-5'>
                <Card>
                    <Card.Header className='blog-header'>Different between Authorization and Authentication?</Card.Header>
                    <Card.Body className='blog-body'>
                        <blockquote className="blockquote mb-0">
                            <p>
                                <span className='text-danger'>Authentication:</span>
                                <br />

                                Authentication is about validating user credentials like User Name/User ID and password to verify your identity.Authentication is usually done by a username and password, and sometimes in conjunction with factors of authentication, which refers to the various ways to be authenticated.

                                In authentication process, the identity of users are checked for providing the access to the system.In authentication process, users or persons are verified.
                                It is done before the authorization process.It needs usually users login details.
                                Authentication determines whether the person is user or not.
                                <br />
                                <br />
                                <span className='text-danger'>Authorization:</span>
                                <br />
                                Authorization, on the other hand, occurs after user identity is successfully authenticated by the system, which ultimately gives him full permission to access the resources such as information, files, databases, funds, locations, almost anything. In simple terms, authorization determines a ability to access the system and up to what extent. Once your identity is verified by the system after successful authentication, you are then authorized to access the resources of the system.

                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>

            {/* question 2 */}

            <div className='container my-3'>
                <Card>
                    <Card.Header className='blog-header'>Why we use Firebase? What are the alternative site of firebase? </Card.Header>
                    <Card.Body className='blog-body'>
                        <blockquote className="blockquote mb-0">
                            <p>
                                Firebase is a set of tools offered by Google to build excellent scalable applications in the cloud. It is a powerful service that helps in building applications quickly without reinventing the components or modules.

                                Google Firebase has many features like Authentication, database, storage, hosting, notification, analytics, dynamic links, remote config, test lab.Analytics feature enables the application developer to understand how users are using his application.Authentication allows developers to store users and integrate with authentication providers such as  Facebook, Google, Github. Firebase Supports Cloud Messaging allowing developers to send notifications to its user.Firebase it easy for the developers to focus on the user experience of the application.

                                <br />
                                <br />
                                Some google firebase alternative open source sites -
                                <ul>
                                    <li>Parse</li>
                                    <li>Supabase</li>
                                    <li>Okta</li>
                                    <li>Flutter</li>
                                    <li>Back4App</li>
                                </ul>
                            </p>

                        </blockquote>
                    </Card.Body>
                </Card>
            </div>

            {/* question 3 */}

            <div className='container my-3'>
                <Card>
                    <Card.Header>Quote</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>

                            </p>

                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        </>



    );
};

export default Blog;