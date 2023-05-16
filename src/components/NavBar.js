import React, { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './NavBar.css';

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" fixed="top" variant="dark" style={{backgroundColor:"#323239"}} expanded={expanded}>
      <Container>
        <Navbar.Brand href="/chloe-space">Chloe's Space</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              className="navbar-link nav-link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              className="navbar-link nav-link"
              to="work"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              Work
            </Link>
            <Link
              className="navbar-link nav-link"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              Skills
            </Link>
            <Link
              className="navbar-link nav-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              Contact Me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}