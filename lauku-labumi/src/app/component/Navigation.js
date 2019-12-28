import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

class Navigation extends Component {


  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <LinkContainer to="/home">
            <Navbar.Brand >Countryside goods</Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacts">
              <Nav.Link>Contacts</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
      </>
    )
  }
}

export default Navigation;