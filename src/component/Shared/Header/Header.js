import React from 'react';
import './Header.css'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../../Loading/Loading';

const Header = () => {


    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const handleSignOut = () => {
        signOut(auth);
    }

    return (

        <div className=''>

            <Navbar className='header-container p-3' sticky='top' collapseOnSelect expand="lg">

                <Container>
                    <Navbar.Brand className='header-title text-white' as={Link} to='/'>Media Service</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className=' ms-auto nav-links text-warning'>
                            <Nav.Link as={Link} to='/home' className='text-white'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/blog' className='text-white'>Blog</Nav.Link>
                            <Nav.Link as={Link} to='/About' className='text-white'>About</Nav.Link>

                            {
                                user ?
                                    <Nav.Link as={Link} to='/login' onClick={handleSignOut} className='text-white'>Sign out</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to='/login' className='text-white'>Login</Nav.Link>
                            }


                            <Nav.Link as={Link} to='/register' className='text-white'> Register </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>


            </Navbar>
        </div>

    );
};

export default Header;