import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import './myStyles.css';


class Navigation extends Component {
  changeLanguage = lang => {
    this.props.changeLanguage(lang);
  };

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" tog>
          <LinkContainer to="/home">
            <Navbar.Brand>Countryside goods</Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">
            <LinkContainer to="/home">
              <Nav.Link>{this.props.dictionary.navbar.home}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>{this.props.dictionary.navbar.login}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>{this.props.dictionary.navbar.products}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>{this.props.dictionary.navbar.about}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacts">
              <Nav.Link>{this.props.dictionary.navbar.contacts}</Nav.Link>
            </LinkContainer>
            <NavDropdown title={this.props.language} sticky = 'top' id="basic-nav-dropdown">
              <NavDropdown.Item 
                style={{ fontWeight: "bold" }}
                onClick={() => this.props.changeLanguage("LV")}
              >
                LV
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ fontWeight: "bold" }}
                onClick={() => this.props.changeLanguage("RU")}
              >
                RU
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ fontWeight: "bold" }}
                onClick={() => this.props.changeLanguage("EN")}
              >
                EN
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
