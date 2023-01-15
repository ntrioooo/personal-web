import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">NTRIO DEV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
