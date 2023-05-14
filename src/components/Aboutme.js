import React from 'react';
import './About.css';
import { Button, Row, Col, Image } from 'react-bootstrap';
import { AiOutlineArrowDown } from 'react-icons/ai';
import AboutSections from '../props/AboutSection';

export default function Aboutme() {
 
  return (
    <Row id="about" style={{ minHeight: '100vh', flexDirection: 'column', width: 'auto' }}>
      <AboutSections />
      <Col className="text-center" style={{ backgroundColor: '#323239', flex: 0 }} >
        <AiOutlineArrowDown className="arrow-icon" style={{ fontSize: '50px', marginBottom: 50 }} />
      </Col>
    </Row>
  );
}