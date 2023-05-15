import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="/">Chloe's Space</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              className="navbar-link nav-link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <Link
              className="navbar-link nav-link"
              to="work"
              spy={true}
              smooth={true}
              duration={500}
            >
              Work
            </Link>
            <Link
              className="navbar-link nav-link"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}