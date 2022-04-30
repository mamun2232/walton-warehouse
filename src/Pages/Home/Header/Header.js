import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
      return (
            <div className="nav-section bg-light">
                  <Navbar collapseOnSelect expand="lg" >
                        <Container>
                              <Navbar.Brand as={Link} to='/'>Walton Warehouse</Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">


                                    </Nav>
                                    <Nav className='text-center'>
                                          <Nav.Link as={Link} to='/manageItem' >Manage Items</Nav.Link>
                                          <Nav.Link as={Link} to='/addItem' >Add Item</Nav.Link>
                                          <Nav.Link as={Link} to='/myItem' >My items</Nav.Link>
                                          <Nav.Link as={Link} to='/login' >Login</Nav.Link>

                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;