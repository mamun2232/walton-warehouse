import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
      return (
            <div className="nav-section bg-light">
                  <Navbar collapseOnSelect expand="lg" >
                        <Container>
                              <Navbar.Brand href="#home">Walton Warehouse</Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                         
                                         
                                    </Nav>
                                    <Nav className='text-center'>
                                          <Nav.Link >Manage Items</Nav.Link>
                                          <Nav.Link >Add Item</Nav.Link>
                                          <Nav.Link >My items</Nav.Link>
                                          <Nav.Link >Login</Nav.Link>
                                         
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;