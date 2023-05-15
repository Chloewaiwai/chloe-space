import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Row, Col } from 'react-bootstrap';
import AboutText from './AboutText';
import AboutImg from './AboutImg';

export default function AboutSections() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      duration: 2000,
      distance: '50px',
      easing: 'ease-out',
      reset: true,
    });

    sr.reveal(textRef.current, { origin: 'top', delay: 200 });
    sr.reveal(imgRef.current, { origin: 'bottom', delay: 400 });
  }, []);

  return (
    <Col className="about-section">
      <Row
        className="justify-content-md-center about-row"
        style={{ height: '100%', alignItems: 'center', flex: 1 }}
      >
        <Col xs={12} md={6} className="about-text fade-in" ref={textRef}>
          <AboutText />
        </Col>
        <Col xs={12} md={6} style={{ paddingLeft: 20, flex: 1 }} className="about-img fade-in" ref={imgRef}>
          <AboutImg />
        </Col>
      </Row>
    </Col>
  );
}