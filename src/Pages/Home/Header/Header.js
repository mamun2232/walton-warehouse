import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
import picture from '../../../Picture/logo.png'
const Header = () => {
      const [user] = useAuthState(auth)
      const logout = () =>{
            signOut(auth)
      }
      console.log(user);
      return (
            <div className="nav-section bg-light">
                  <Navbar collapseOnSelect expand="lg" >
                        <Container>
                              <Navbar.Brand as={Link} to='/'>
                                    walton Warehouse
                                   
                              </Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">


                                    </Nav>
                                    <Nav className='text-center'>
                                          <Nav.Link as={Link} to='/manageItem' >Manage Items</Nav.Link>
                                          <Nav.Link as={Link} to='/addItem' >Add Item</Nav.Link>
                                          <Nav.Link as={Link} to='/myItem' >My items</Nav.Link>

                                          {
                                                user ? <button onClick={logout}>Logout</button> :    <Nav.Link as={Link} to='/login' >Login</Nav.Link>
                                          }
                                          
                                       

                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;