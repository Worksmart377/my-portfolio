import React from 'react';
import Logo from '../assets/SN-logo.jpg';
import {Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { HiOutlineMail, HiOutlineDocumentText } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaBehanceSquare } from 'react-icons/fa';
import { Link } from 'react-scroll';

const MyNavbar = () => {
    return (
        <div>
            <Navbar sticky='top' expand='sm' collapseOnSelect>
                <nav class='navbar navbar-expand-lg navbar-light bg-transparent' style={{ height: '150px' }}>        
                    <div class='container-fluid'>
                        <Navbar.Brand>
                            <a class='navbar-brand' href='About'>
                            <img src={Logo} alt='SN Logo' style={{ width: '150px' }} />
                            </a>           
                        </Navbar.Brand>
                        <NavbarToggle/>
                        <Navbar.Collapse>
                        <Nav>
                        
                            <NavLink href='About'> <Link to="about"  smooth={true} offset={50} duration={500}> About </Link></NavLink>
                            <NavLink href='Skills'> <Link to="skills"  smooth={true} offset={50} duration={500}> Skills </Link></NavLink>
                            <NavDropdown title='Contact'>
                                <NavDropdown.Item href='https://www.linkedin.com/in/stephany-nelson'><FaLinkedin size={40} /></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='https://github.com/Worksmart377'><FaGithub size={40} /></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='https://www.behance.net/MrsN377'><FaBehanceSquare size={40} /></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='Email'><HiOutlineMail size={40} /></NavDropdown.Item>                                
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='Resume'><HiOutlineDocumentText size={40} /></NavDropdown.Item>
                                </NavDropdown>                            
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
