import React, { useRef, useEffect } from 'react';
import './About.css';
import { Row, Col } from 'react-bootstrap';
import { AiOutlineArrowDown } from 'react-icons/ai';
import AboutSections from '../props/AboutSection';
import ScrollReveal from 'scrollreveal';

export default function Aboutme() {
  const arrowRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      duration: 2000,
      easing: 'ease-out',
      reset: true,
    });

    sr.reveal(arrowRef.current, {origin: 'top', delay: 600 });
  }, []);

  return (
    <Row id="about" style={{ minHeight: '100vh', flexDirection: 'column', width: 'auto' }}>
      <AboutSections />
      <Col className="text-center" style={{ backgroundColor: '#323239', flex: 0 }} >
        <div ref={arrowRef}>
          <AiOutlineArrowDown className="arrow-icon" style={{ fontSize: '50px', marginBottom: 50 }} />
        </div>
      </Col>
    </Row>
  );
}