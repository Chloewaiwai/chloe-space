import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'; 
import './NavBar.css';
import { useEffect,useState } from 'react';


export default function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="/">Chloe's Space</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link className="navbar-link" href="#about">About</Nav.Link>
              <Nav.Link className="navbar-link" href="#projects">Projects</Nav.Link>
              <Nav.Link className="navbar-link" href="#skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
