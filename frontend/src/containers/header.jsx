import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../components/logo';
import SearchBar from '../components/searchField';
import '../containers/header.scss';

function Header() {
    return (
        <React.Fragment>
            <Navbar expand="lg" className='p-page' fixed="top" id="header">
                <Navbar.Brand as={Link} to="/">
                    <Logo color="White" />
                    <p className='text-white m-0'>E-Learning Platform For CS students And Teachers.</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="m-auto">Home</Nav.Link>
                        <Nav.Link as={Link} to="/courses" className="m-auto">Courses</Nav.Link>
                        <SearchBar/>
                        <Nav.Link as={Link} to="/docs" className="m-auto">Docs</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="m-auto">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </React.Fragment>
    );
}

export default Header;
