import React from 'react';
import Logo from '../assets/SN-logo.jpg';
import {Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

const MyNavbar = () => {
    return (
        <div>
            <Navbar sticky='top' expand='sm' collapseOnSelect>
                <nav class='navbar navbar-expand-lg'data-bs-theme='light'style={{ height: '150px' }}>        
                    <div class='container-fluid'>

                        <Navbar.Brand>
                            <a class='navbar-brand' href='About'>
                            <img src={Logo} alt='SN Logo' style={{ width: '150px' }} />
                            </a>           
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                        <Nav>
                        
                            <NavLink href='About'>About</NavLink>
                            <NavLink href='Skills'>Skills</NavLink>
                            <NavLink href='Contact'>Contact</NavLink>
                            <NavDropdown title='My Work'>
                                <NavDropdown.Item href='Programming'>Programming</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='Art & Design'>Art & Design</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </div>
                </nav>      
            </Navbar>
        </div>
    );
};

export default MyNavbar;
