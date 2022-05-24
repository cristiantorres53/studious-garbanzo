import React from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'


const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <img
            src="https://res.cloudinary.com/dorkyjlu8/image/upload/v1653315681/reto-final-AG/Logo_jveujc.png"
            width="190"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <NavDropdown title="Property" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Pages">Pages</Nav.Link>
              <Nav.Link href="/Blog">Blog</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
            <Button variant="success" size="sm" href="/login">
              Add property
            </Button>
            <FontAwesomeIcon icon="fa-regular fa-arrow-right" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
